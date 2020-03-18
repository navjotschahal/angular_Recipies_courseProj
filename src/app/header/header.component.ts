import {Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;
// @Output() featureSelected = new EventEmitter<string>();

//   onSelect(feature: string) {
// this.featureSelected.emit(feature);
//   }

  constructor(private dataStorage: DataStorageService, private authService: AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe( user => {
      this.isAuthenticated = !!user;
    }
    );
  }

  onSaveDAta() {
    this.dataStorage.storeRecipes();
  }

  onFetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }

  onSignOut () {
    this.authService.signOut();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe;
  }

}
