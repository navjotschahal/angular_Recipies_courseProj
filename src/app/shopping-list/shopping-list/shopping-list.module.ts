import { NgModule } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list.component';
import { ShoppingLisEditComponent } from '../shopping-lis-edit/shopping-lis-edit.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListRoutingModule } from '../shopping-list-routing/shopping-list-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingLisEditComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule { }
