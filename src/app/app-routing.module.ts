import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadingStrategy, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full'},
  { path: 'recipes', loadChildren: 'src/app/receipes/recipes/recipes.module#RecipesModule'},
  { path: 'shopping-list', loadChildren: 'src/app/shopping-list/shopping-list/shopping-list.module#ShoppingListModule'},
  { path: '', loadChildren: 'src/app/auth/auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules } ) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {

  }
}
