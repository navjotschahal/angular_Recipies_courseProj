import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReceipesComponent } from '../receipes.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { RecipeStartComponent } from '../recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';
import { ReceipeDetailComponent } from '../receipe-detail/receipe-detail.component';

const recipeRoutes: Routes = [
  { path: '', component: ReceipesComponent, 
    canActivate: [ AuthGuard ], 
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: ReceipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ] 
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [ RouterModule ]
})
export class RecipesRoutingModule { }
