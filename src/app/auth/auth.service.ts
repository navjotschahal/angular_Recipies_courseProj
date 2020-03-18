import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject, Subject } from 'rxjs';

import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

export interface UserData {
  email: string;
  id: string;
  _token: string;
  _tokenExpirationDate: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user = new BehaviorSubject<User>(null);

  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) { } 

  autoSignin () {
    const userData: UserData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email, 
      userData.id, 
      userData._token, 
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      this.autoSignOut(new Date(userData._tokenExpirationDate).getTime() - new Date().getTime());
    }
  }

  autoSignOut (expirationDuration: number) {
    console.log(expirationDuration);
    this.tokenExpirationTimer = setTimeout( () => {
      this.signOut();
    }, 
    expirationDuration
    );
  }

  signUp (email: string, password: string) {

    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCLfn_1ON2nqBa8iQ5M-tfzBWESR2x070I', 
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
      )
      .pipe(
        catchError( this.handleError ), 
        tap( resData => {
          this.handleAuthentication(
            resData.email, 
            resData.localId, 
            resData.idToken, 
            +resData.expiresIn
          );
        })
      );

  }

  signIn (email: string, password: string) {

    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCLfn_1ON2nqBa8iQ5M-tfzBWESR2x070I',
    {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(
      catchError( this.handleError ), 
      tap( resData => {
        this.handleAuthentication(
          resData.email, 
          resData.localId, 
          resData.idToken, 
          +resData.expiresIn
        );
      })
    );

  }

  signOut () {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  private handleError (errRes: HttpErrorResponse) {

      let errorMsg = 'An unknown error occured! Unable to Sign-In.';

      if ( !errRes.error || !errRes.error.error) {
        return throwError(errorMsg);
      } else {
        switch (errRes.error.error.message) {
          // From firebase signin api.
          case 'EMAIL_NOT_FOUND':
            errorMsg = 'There is no user record corresponding to this identifier. The user may have been deleted.';
            break;

          case 'INVALID_PASSWORD':
            errorMsg = 'The password is invalid or the user does not have a password.';
            break;
        
          case 'USER_DISABLED':
            errorMsg = 'The user account has been disabled by an administrator.';
            break;
          // From firebase Sign-Up api.
          case 'EMAIL_EXISTS':
            errorMsg = 'The email address is already in use by another account.'
            break;

          case "INVALID_EMAIL":
            errorMsg = 'Please enter a valid E-mail address.'
            break;
          
          case 'OPERATION_NOT_ALLOWED':
            errorMsg = 'Password sign-in is disabled for this project.';
            break;

          case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            errorMsg = 'We have blocked all requests from this device due to unusual activity. Try again later.';
            break;

          default:
            errorMsg = 'Oops! An unknown error occured. Contact Firebase admin.';
            break;
        }
      }

      return throwError(errorMsg);
  }

  private handleAuthentication (email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoSignOut(expiresIn * 1000);  // expires in is in seconds hence MUL by 1000 gives us milliSec.,
    localStorage.setItem('userData', JSON.stringify(user));
  }

}
