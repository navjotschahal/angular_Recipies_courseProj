(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header ></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <hr>\n     <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">Recipe Book</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\" ><a [routerLink]=\"['/recipes']\" >Receipes</a> </li>\n        <li routerLinkActive=\"active\" ><a [routerLink]=\"['/shopping-list']\"  >Shopping List</a> </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\" appDropdown>\n          <a style=\"cursor: pointer;\" class=\"dropdown-toggle\" role=\"button\">Manage<span class=\"caret\"></span> </a>\n          <ul class=\"dropdown-menu\">\n            <li><a style=\"cursor: pointer;\" (click)='onSaveDAta()'>Save Data</a> </li>\n            <li><a style=\"cursor: pointer;\">Fetch Data</a> </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/receipes/receipe-detail/receipe-detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/receipes/receipe-detail/receipe-detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <img [src]=\"recipe.imagePath\" [alt]=\"recipe.name\" >\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <h1> {{recipe.name}} </h1>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <div class=\"btn-group\"\r\n    appDropdown>\r\n      <button class=\"btn btn-primary dropdown-toggle\" type=\"button\">Manage Receipe <span class=\"caret\"></span> </button>\r\n      <ul class=\"dropdown-menu\">\r\n        <li><a (click)=\"onAddToShoppingList()\" style=\"cursor: pointer;\">To Shopping list</a> </li>\r\n        <li><a style=\"cursor: pointer;\" (click)='onEditRecipe()'>Edit Receipe</a> </li>\r\n        <li><a style=\"cursor: pointer;\" (click)='onDeleteRecipe()'>Delete Receipe</a> </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    {{recipe.description}}\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\"\r\n      *ngFor=\"let ingredient of recipe.ingredients\">\r\n        {{ingredient.name}} - {{ingredient.amount}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/receipes/receipe-list/receipe-item/receipe-item.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/receipes/receipe-list/receipe-item/receipe-item.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a style= 'cursor: pointer;'\n[routerLink]=\"[index]\"\nrouterLinkActive = 'active'\n   class=\"list-group-item clearfix \">\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\"> {{ recipe.name }} </h4>\n    <p class=\"list-group-item-text\"> {{ recipe.description }} </p>\n  </div>\n  <span class=\"pull-right\">\n        <img style=\"max-height: 50px;\" [src]=\"recipe.imagePath\" >\n      </span>\n</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/receipes/receipe-list/receipe-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/receipes/receipe-list/receipe-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button mat-raised-button color=\"accent\" (click)='onNewRecipe()'>New Reciepe</button>\n  </div>\n</div>\n<hr>\n\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-receipe-item *ngFor=\"let receipeEl of receipes, let i = index\"\n    [recipe]=\"receipeEl\"\n    [index]= ' i '>\n\n    </app-receipe-item>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/receipes/receipes.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/receipes/receipes.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-receipe-list></app-receipe-list>\n  </div>\n  <div class=\"col-md-5\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/receipes/recipe-edit/recipe-edit.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/receipes/recipe-edit/recipe-edit.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <form [formGroup]=\"recipeForm\" (ngSubmit) = 'onSubmit()'>\n\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]='!recipeForm.valid'>Save</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)='onCancel()'>Cancel</button>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\">\n                    </div>\n                </div>\n            </div>\n                    \n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"imagePath\">Image URL</label>\n                        <input type=\"text\" id=\"imagePath\" class=\"form-control\" formControlName=\"imgURL\" #imagePathURL>\n                    </div>\n                </div>\n            </div>\n                    \n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                        <img [src]='imagePathURL.value' class=\"img-responsive\">\n                </div>\n            </div>\n                    \n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"description\">Description</label>\n                        <textarea type=\"text\" id=\"description\" \n                            class=\"form-control\" rows=\"6\" \n                            [formControlName] = \"'description'\"\n                        ></textarea>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-xs-12\" formArrayName=\"ingredients\">\n                    <div class=\"row\" *ngFor=\"let ingredientCtrl of recipeForm.get('ingredients').controls; let i = index\" \n                    [formGroupName]=\"i\"\n                    style=\"margin-top: 10px\">\n\n                        <div class=\"col-xs-7\">\n                            <input type=\"text\"  class=\"form-control\" formControlName=\"name\">\n                        </div>\n                    \n                        <div class=\"col-xs-3\">\n                            <input type=\"number\"  class=\"form-control\" formControlName=\"amount\">\n                        </div>\n\n                        <div class=\"col-xs-2\">\n                            <button class=\"btn btn-danger\" type=\"button\" (click)='onDeleteIngredient(i)'>X</button>\n                        </div>\n                        \n                    </div>\n<hr>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                            <button type=\"button\" class=\"btn btn-sucess\" (click)='onAddIngredient()'>Add Ingredient</button>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        \n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/receipes/recipe-start/recipe-start.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/receipes/recipe-start/recipe-start.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Please select a recipe!!</h3>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-lis-edit/shopping-lis-edit.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-list/shopping-lis-edit/shopping-lis-edit.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form (ngSubmit)='onAddIngredient(f)' #f='ngForm'>\n      <div class=\"row\">\n        <div class=\"col-sm-5\">\n          <label for=\"name\">Name</label>\n          <input type = \"text\" id=\"name\" class=\"form-control\" name=\"name\" ngModel required>\n        </div>\n        <div class=\"col-sm-2\">\n          <label for=\"amount\">Amount</label>\n          <input type = \"number\" id=\"amount\" class=\"form-control\" name=\"amount\" ngModel required\n          [pattern]=\"'^[1-9]+[0-9]*$'\"\n          >\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button class=\"btn btn-success\" type=\"submit\" [disabled]='!f.valid'> {{ editMode ? 'Update' : 'Add' }} </button>\n          <button class=\"btn btn-danger\" type=\"button\" (click) = 'onDelete()' *ngIf=\"editMode\">Delete</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click) = 'onClear()'>Clear</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-list/shopping-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n      <hr>\n      <app-shopping-lis-edit></app-shopping-lis-edit>\n      <hr>\n      <ul class=\"list-group\">\n        <a class=\"list-group-item\"\n          style=\"cursor: pointer\"\n          (click)='onEditItem(i)'\n          *ngFor=\"let ingredient of ingredients, let i = index\">\n          {{ingredient.name}} ({{ingredient.amount}})\n        </a>\n      </ul>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _receipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receipes/recipe-edit/recipe-edit.component */ "./src/app/receipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _receipes_receipe_detail_receipe_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receipes/receipe-detail/receipe-detail.component */ "./src/app/receipes/receipe-detail/receipe-detail.component.ts");
/* harmony import */ var _receipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receipes/recipe-start/recipe-start.component */ "./src/app/receipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _receipes_receipes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receipes/receipes.component */ "./src/app/receipes/receipes.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








const appRoutes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    { path: 'recipes', component: _receipes_receipes_component__WEBPACK_IMPORTED_MODULE_5__["ReceipesComponent"], children: [
            { path: '', component: _receipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_3__["RecipeStartComponent"] },
            { path: 'new', component: _receipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_1__["RecipeEditComponent"] },
            { path: ':id', component: _receipes_receipe_detail_receipe_detail_component__WEBPACK_IMPORTED_MODULE_2__["ReceipeDetailComponent"] },
            { path: ':id/edit', component: _receipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_1__["RecipeEditComponent"] }
        ] },
    { path: 'shopping-list', component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingListComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
    constructor() {
    }
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.loadedFeature = 'recipe';
        this.title = 'cOURSEpROJECT';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _shopping_list_shopping_lis_edit_shopping_lis_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shopping-list/shopping-lis-edit/shopping-lis-edit.component */ "./src/app/shopping-list/shopping-lis-edit/shopping-lis-edit.component.ts");
/* harmony import */ var _receipes_receipes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./receipes/receipes.component */ "./src/app/receipes/receipes.component.ts");
/* harmony import */ var _receipes_receipe_detail_receipe_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./receipes/receipe-detail/receipe-detail.component */ "./src/app/receipes/receipe-detail/receipe-detail.component.ts");
/* harmony import */ var _receipes_receipe_list_receipe_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./receipes/receipe-list/receipe-list.component */ "./src/app/receipes/receipe-list/receipe-list.component.ts");
/* harmony import */ var _receipes_receipe_list_receipe_item_receipe_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./receipes/receipe-list/receipe-item/receipe-item.component */ "./src/app/receipes/receipe-list/receipe-item/receipe-item.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _receipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./receipes/recipe-start/recipe-start.component */ "./src/app/receipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _receipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./receipes/recipe-edit/recipe-edit.component */ "./src/app/receipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _receipes_recipe_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./receipes/recipe.service */ "./src/app/receipes/recipe.service.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingListComponent"],
            _shopping_list_shopping_lis_edit_shopping_lis_edit_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingLisEditComponent"],
            _receipes_receipes_component__WEBPACK_IMPORTED_MODULE_10__["ReceipesComponent"],
            _receipes_receipe_detail_receipe_detail_component__WEBPACK_IMPORTED_MODULE_11__["ReceipeDetailComponent"],
            _receipes_receipe_list_receipe_list_component__WEBPACK_IMPORTED_MODULE_12__["ReceipeListComponent"],
            _receipes_receipe_list_receipe_item_receipe_item_component__WEBPACK_IMPORTED_MODULE_13__["ReceipeItemComponent"],
            _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_16__["DropdownDirective"],
            _receipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_18__["RecipeStartComponent"],
            _receipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_19__["RecipeEditComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        providers: [_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_17__["ShoppingListService"], _receipes_recipe_service__WEBPACK_IMPORTED_MODULE_20__["RecipeService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");



let HeaderComponent = class HeaderComponent {
    // @Output() featureSelected = new EventEmitter<string>();
    //   onSelect(feature: string) {
    // this.featureSelected.emit(feature);
    //   }
    constructor(dataStorage) {
        this.dataStorage = dataStorage;
    }
    ngOnInit() {
    }
    onSaveDAta() {
        this.dataStorage.storeRecipes();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/receipes/receipe-detail/receipe-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/receipes/receipe-detail/receipe-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2VpcGVzL3JlY2VpcGUtZGV0YWlsL3JlY2VpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/receipes/receipe-detail/receipe-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/receipes/receipe-detail/receipe-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReceipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceipeDetailComponent", function() { return ReceipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.service */ "./src/app/receipes/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ReceipeDetailComponent = class ReceipeDetailComponent {
    constructor(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.id);
        });
    }
    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }
    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }
};
ReceipeDetailComponent.ctorParameters = () => [
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ReceipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-receipe-detail',
        template: __webpack_require__(/*! raw-loader!./receipe-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/receipes/receipe-detail/receipe-detail.component.html"),
        styles: [__webpack_require__(/*! ./receipe-detail.component.css */ "./src/app/receipes/receipe-detail/receipe-detail.component.css")]
    })
], ReceipeDetailComponent);



/***/ }),

/***/ "./src/app/receipes/receipe-list/receipe-item/receipe-item.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/receipes/receipe-list/receipe-item/receipe-item.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2VpcGVzL3JlY2VpcGUtbGlzdC9yZWNlaXBlLWl0ZW0vcmVjZWlwZS1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/receipes/receipe-list/receipe-item/receipe-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/receipes/receipe-list/receipe-item/receipe-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReceipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceipeItemComponent", function() { return ReceipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReceipeItemComponent = class ReceipeItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ReceipeItemComponent.prototype, "recipe", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ReceipeItemComponent.prototype, "index", void 0);
ReceipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-receipe-item',
        template: __webpack_require__(/*! raw-loader!./receipe-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/receipes/receipe-list/receipe-item/receipe-item.component.html"),
        styles: [__webpack_require__(/*! ./receipe-item.component.css */ "./src/app/receipes/receipe-list/receipe-item/receipe-item.component.css")]
    })
], ReceipeItemComponent);



/***/ }),

/***/ "./src/app/receipes/receipe-list/receipe-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/receipes/receipe-list/receipe-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2VpcGVzL3JlY2VpcGUtbGlzdC9yZWNlaXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/receipes/receipe-list/receipe-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/receipes/receipe-list/receipe-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReceipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceipeListComponent", function() { return ReceipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.service */ "./src/app/receipes/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ReceipeListComponent = class ReceipeListComponent {
    constructor(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.subscription = this.recipeService.recipesChanged.subscribe((recipes) => {
            this.receipes = recipes;
        });
        this.receipes = this.recipeService.getRecipes();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
};
ReceipeListComponent.ctorParameters = () => [
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ReceipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-receipe-list',
        template: __webpack_require__(/*! raw-loader!./receipe-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/receipes/receipe-list/receipe-list.component.html"),
        styles: [__webpack_require__(/*! ./receipe-list.component.css */ "./src/app/receipes/receipe-list/receipe-list.component.css")]
    })
], ReceipeListComponent);



/***/ }),

/***/ "./src/app/receipes/receipes.component.css":
/*!*************************************************!*\
  !*** ./src/app/receipes/receipes.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2VpcGVzL3JlY2VpcGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/receipes/receipes.component.ts":
/*!************************************************!*\
  !*** ./src/app/receipes/receipes.component.ts ***!
  \************************************************/
/*! exports provided: ReceipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceipesComponent", function() { return ReceipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReceipesComponent = class ReceipesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReceipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-receipes',
        template: __webpack_require__(/*! raw-loader!./receipes.component.html */ "./node_modules/raw-loader/index.js!./src/app/receipes/receipes.component.html"),
        styles: [__webpack_require__(/*! ./receipes.component.css */ "./src/app/receipes/receipes.component.css")]
    })
], ReceipesComponent);



/***/ }),

/***/ "./src/app/receipes/recipe-edit/recipe-edit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/receipes/recipe-edit/recipe-edit.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWlwZXMvcmVjaXBlLWVkaXQvcmVjaXBlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3JlY2VpcGVzL3JlY2lwZS1lZGl0L3JlY2lwZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsIHRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/receipes/recipe-edit/recipe-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/receipes/recipe-edit/recipe-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipe.service */ "./src/app/receipes/recipe.service.ts");
/* harmony import */ var _recipie_modle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recipie.modle */ "./src/app/receipes/recipie.modle.ts");






let RecipeEditComponent = class RecipeEditComponent {
    constructor(route, recipeService, router) {
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.editMode = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.inItForm();
        });
    }
    inItForm() {
        let recipeName = '';
        let recipeImgURL = '';
        let recipeDescription = '';
        let recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        if (this.editMode) {
            const recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImgURL = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe['ingredients']) {
                for (let ingredient of recipe.ingredients) {
                    recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                        amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.amount, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)
                        ])
                    }));
                }
            }
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            imgURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeImgURL, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            ingredients: recipeIngredients
        });
    }
    onAddIngredient() {
        this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)
            ])
        }));
    }
    onSubmit() {
        // console.log(this.recipeForm);
        const newRecipe = new _recipie_modle__WEBPACK_IMPORTED_MODULE_5__["RecipieModle"](this.recipeForm.value.name, this.recipeForm.value.description, this.recipeForm.value.imgURL, this.recipeForm.value.ingredients);
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, newRecipe);
        }
        else {
            this.recipeService.addRecipe(newRecipe);
        }
        this.onCancel();
    }
    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    onDeleteIngredient(ingredientIndex) {
        this.recipeForm.get('ingredients').removeAt(ingredientIndex);
    }
};
RecipeEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
RecipeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-recipe-edit',
        template: __webpack_require__(/*! raw-loader!./recipe-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/receipes/recipe-edit/recipe-edit.component.html"),
        styles: [__webpack_require__(/*! ./recipe-edit.component.css */ "./src/app/receipes/recipe-edit/recipe-edit.component.css")]
    })
], RecipeEditComponent);



/***/ }),

/***/ "./src/app/receipes/recipe-start/recipe-start.component.css":
/*!******************************************************************!*\
  !*** ./src/app/receipes/recipe-start/recipe-start.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2VpcGVzL3JlY2lwZS1zdGFydC9yZWNpcGUtc3RhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/receipes/recipe-start/recipe-start.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/receipes/recipe-start/recipe-start.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecipeStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function() { return RecipeStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipeStartComponent = class RecipeStartComponent {
    constructor() { }
    ngOnInit() {
    }
};
RecipeStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-start',
        template: __webpack_require__(/*! raw-loader!./recipe-start.component.html */ "./node_modules/raw-loader/index.js!./src/app/receipes/recipe-start/recipe-start.component.html"),
        styles: [__webpack_require__(/*! ./recipe-start.component.css */ "./src/app/receipes/recipe-start/recipe-start.component.css")]
    })
], RecipeStartComponent);



/***/ }),

/***/ "./src/app/receipes/recipe.service.ts":
/*!********************************************!*\
  !*** ./src/app/receipes/recipe.service.ts ***!
  \********************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _recipie_modle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipie.modle */ "./src/app/receipes/recipie.modle.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");






let RecipeService = class RecipeService {
    constructor(shoppingListService) {
        this.shoppingListService = shoppingListService;
        // recipeSelected = new Subject<RecipieModle>();
        this.recipesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.receipes = [
            new _recipie_modle__WEBPACK_IMPORTED_MODULE_2__["RecipieModle"]('A test Recepie', 'This is a test only.', 'https://media.easemytrip.com/media/Blog/India/636977607425696252/636977607425696252QYiiUU.jpg', [new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_4__["IngredientModel"]('Wheat Floor', 2),
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_4__["IngredientModel"]('Tomatos', 7)])
        ];
    }
    getRecipes() {
        return this.receipes.slice();
        // this.recipesChanged.next(this.receipes.slice());
    }
    addIngredientsToShoppingList(ingredients) {
        this.shoppingListService.addIngredients(ingredients);
    }
    getRecipe(index) {
        return this.receipes.slice()[index];
    }
    addRecipe(recipe) {
        this.receipes.push(recipe);
        this.recipesChanged.next(this.receipes.slice());
    }
    updateRecipe(index, newRecipe) {
        this.receipes[index] = newRecipe;
        this.recipesChanged.next(this.receipes.slice());
    }
    deleteRecipe(index) {
        this.receipes.splice(index, 1);
        this.recipesChanged.next(this.receipes.slice());
    }
};
RecipeService.ctorParameters = () => [
    { type: _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingListService"] }
];
RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], RecipeService);



/***/ }),

/***/ "./src/app/receipes/recipie.modle.ts":
/*!*******************************************!*\
  !*** ./src/app/receipes/recipie.modle.ts ***!
  \*******************************************/
/*! exports provided: RecipieModle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipieModle", function() { return RecipieModle; });
class RecipieModle {
    constructor(name, description, imagePath, ingredients) {
        this.description = description;
        this.name = name;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
RecipieModle.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: Array }
];


/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _receipes_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../receipes/recipe.service */ "./src/app/receipes/recipe.service.ts");




let DataStorageService = class DataStorageService {
    constructor(httpClient, recipeService) {
        this.httpClient = httpClient;
        this.recipeService = recipeService;
    }
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.httpClient.put('https://courseprojudemyng.firebaseio.com/recipes.json', recipes)
            .subscribe(res => {
            console.log(res);
        });
    }
};
DataStorageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _receipes_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] }
];
DataStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataStorageService);



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownDirective = class DropdownDirective {
    constructor() {
        this.isOpen = false;
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open')
], DropdownDirective.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDropdown]'
    })
], DropdownDirective);



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: IngredientModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientModel", function() { return IngredientModel; });
class IngredientModel {
    // public name: string;
    // public  amount: number;
    // constructor(name: string, amount: number){
    //   this.amount=amount;
    //   this.name=name;
    // }
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}
IngredientModel.ctorParameters = () => [
    { type: String },
    { type: Number }
];


/***/ }),

/***/ "./src/app/shopping-list/shopping-lis-edit/shopping-lis-edit.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-lis-edit/shopping-lis-edit.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzLWVkaXQvc2hvcHBpbmctbGlzLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-lis-edit/shopping-lis-edit.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-lis-edit/shopping-lis-edit.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShoppingLisEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingLisEditComponent", function() { return ShoppingLisEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");




let ShoppingLisEditComponent = class ShoppingLisEditComponent {
    constructor(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.editMode = false;
    }
    ngOnInit() {
        this.subscription = this.shoppingListService.startedEditing.subscribe((index) => {
            this.editedItemIndex = index;
            this.editMode = true;
            this.editedItem = this.shoppingListService.getIngredient(index);
            this.slform.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount
            });
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onAddIngredient(form) {
        const value = form.value;
        const newIngredient = new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["IngredientModel"](value.name, value.amount);
        if (this.editMode === true) {
            this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
        }
        else {
            this.shoppingListService.addingredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    }
    onClear() {
        this.slform.reset();
        this.editMode = false;
    }
    onDelete() {
        this.shoppingListService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    }
};
ShoppingLisEditComponent.ctorParameters = () => [
    { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], ShoppingLisEditComponent.prototype, "slform", void 0);
ShoppingLisEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-lis-edit',
        template: __webpack_require__(/*! raw-loader!./shopping-lis-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-lis-edit/shopping-lis-edit.component.html"),
        styles: [__webpack_require__(/*! ./shopping-lis-edit.component.css */ "./src/app/shopping-list/shopping-lis-edit/shopping-lis-edit.component.css")]
    })
], ShoppingLisEditComponent);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");



let ShoppingListComponent = class ShoppingListComponent {
    constructor(shoppingListService) {
        this.shoppingListService = shoppingListService;
    }
    ngOnDestroy() {
        this.idChangeSub.unsubscribe();
    }
    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.idChangeSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients) => {
            this.ingredients = ingredients;
        });
    }
    onEditItem(index) {
        this.shoppingListService.startedEditing.next(index);
    }
};
ShoppingListComponent.ctorParameters = () => [
    { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"] }
];
ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-list',
        template: __webpack_require__(/*! raw-loader!./shopping-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-list.component.html"),
        styles: [__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/shopping-list/shopping-list.component.css")]
    })
], ShoppingListComponent);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class ShoppingListService {
    constructor() {
        this.ingredientsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["IngredientModel"]('Apples', 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["IngredientModel"]('Oranges', 10),
        ];
    }
    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredient(index) {
        return this.ingredients[index];
    }
    addingredient(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients) {
        // for (const ingredient of ingredients) {
        //   this.addingredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular_practice_projects\cOURSEpROJECT\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map