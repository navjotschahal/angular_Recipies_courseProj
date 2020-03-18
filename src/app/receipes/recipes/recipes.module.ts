import { NgModule } from '@angular/core';
import { ReceipesComponent } from '../receipes.component';
import { ReceipeDetailComponent } from '../receipe-detail/receipe-detail.component';
import { ReceipeListComponent } from '../receipe-list/receipe-list.component';
import { ReceipeItemComponent } from '../receipe-list/receipe-item/receipe-item.component';
import { RecipeStartComponent } from '../recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from '../recipes-routing/recipes-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    ReceipesComponent,
    ReceipeDetailComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
