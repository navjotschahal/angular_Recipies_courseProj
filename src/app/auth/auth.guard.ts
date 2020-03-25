import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';

export class AuthGuard implements CanActivate {

    constructor (private authService: AuthService, private router:Router) {}

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot)
        : boolean 
        | import("@angular/router").UrlTree 
        | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> 
        | Promise<boolean | import("@angular/router").UrlTree> {
        return this.authService.user.pipe(
            take(1), 
            map(user => {
                const isAuth = !!user;
                if (isAuth) {
                    return true;
                }
                return this.router.createUrlTree(['/auth'])
            })
        );
    }


}