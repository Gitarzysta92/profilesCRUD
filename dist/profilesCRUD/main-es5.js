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

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-profile/add-profile.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-profile/add-profile.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-profile_wrapper light\">\r\n  <div class=\"page-nav light\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <button class='back-btn' mat-button (click)=\"goBack()\">Previous page</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6 col-sm-12\">\r\n        <h2>Add new profile</h2>\r\n        <app-profile-form [Provider]=\"formSetup\"></app-profile-form>\r\n    </div>\r\n  </div>\r\n</div>\r\n  \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-profile/edit-profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-profile/edit-profile.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-profile_wrapper light\">\r\n  <div class=\"page-nav light\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <button class='back-btn' mat-button (click)=\"goBack()\">Previous page</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6 col-sm-12\">\r\n        <h2>Edit profile</h2>\r\n        <app-profile-form [Provider]=\"formSetup\"></app-profile-form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/loader/loader.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/loader/loader.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader_wrapper\">\n  <div class=\"row justify-content-center align-items-center\">\n    <div class=\"col-2\">\n        <img class=\"loader\" [src]=\"loaderPath\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main/app.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main/app.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"light\">\n  <div class=\"mobile-nav\">\n      <app-navigation></app-navigation>\n  </div>\n</header>\n<div class=\"container sidebar_wrapper dark\">\n    <div class=\"row\">\n      <div class=\"col\">\n          <h2> Welcome to {{ title }}!</h2>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n          <app-navigation></app-navigation>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n          <app-messages></app-messages>\n      </div>\n    </div>\n</div>\n<main class=\"container-fluid light\">\n    <router-outlet></router-outlet>\n</main>\n<footer></footer>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/messages/messages.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/messages/messages.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>System messages:</h4>\r\n<div *ngIf=\"messageService.messages.length\">\r\n  \r\n  <div *ngFor='let message of messageService.messages' \r\n    class=\"message {{message.type}}\" \r\n    (click)='messageService.remove(message.id)'> \r\n    <span>{{message.content}} </span>\r\n    <span class='clear'><mat-icon class=\"close\">close</mat-icon></span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-nav\">\n  <ul>\n    <li><a routerLink=\"/profiles\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{exact: true}\">\n      <mat-icon>home</mat-icon> Dashboard</a>\n    </li>\n    <li><a routerLink=\"/profiles/add\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{exact: true}\">\n      <mat-icon>person_add</mat-icon> Add profile</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile-form/profile-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile-form/profile-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <mat-form-field>\n        <mat-label>Name</mat-label>\n        <input matInput type=\"text\" formControlName=\"name\">\n        <mat-error *ngFor=\"let validation of validationMessages.name\">\n          <mat-error class=\"error-message\" *ngIf=\"profileForm.get('name').hasError(validation.type) && (profileForm.get('name').dirty || profileForm.get('name').touched)\">{{validation.message}}</mat-error>\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col\">\n        <mat-form-field>\n          <mat-label>Surname</mat-label>\n          <input matInput type=\"text\" formControlName=\"surname\">\n          <mat-error *ngFor=\"let validation of validationMessages.surname\">\n            <mat-error class=\"error-message\" *ngIf=\"profileForm.get('surname').hasError(validation.type) && (profileForm.get('surname').dirty || profileForm.get('surname').touched)\">{{validation.message}}</mat-error>\n          </mat-error>\n        </mat-form-field>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col\">\n        <mat-form-field>\n          <mat-label>Phone</mat-label>\n          <input matInput type=\"tel\" formControlName=\"phone\">\n          <mat-error *ngFor=\"let validation of validationMessages.phone\">\n            <mat-error class=\"error-message\" *ngIf=\"profileForm.get('phone').hasError(validation.type) && (profileForm.get('phone').dirty || profileForm.get('phone').touched)\">{{validation.message}}</mat-error>\n          </mat-error>\n        </mat-form-field>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col\">\n        <mat-form-field>\n          <mat-label>Email</mat-label>\n          <input matInput type=\"email\" formControlName=\"email\">\n          <mat-error *ngFor=\"let validation of validationMessages.email\">\n            <mat-error class=\"error-message\" *ngIf=\"profileForm.get('email').hasError(validation.type) && (profileForm.get('email').dirty || profileForm.get('email').touched)\">{{validation.message}}</mat-error>\n          </mat-error>\n        </mat-form-field>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col\">\n        <mat-form-field>\n          <mat-label>Rating</mat-label>\n          <input matInput min=\"0\" max=\"10\" type=\"number\" formControlName=\"rating\">\n          <mat-error *ngFor=\"let validation of validationMessages.rating\">\n            <mat-error class=\"error-message\" *ngIf=\"profileForm.get('rating').hasError(validation.type) && (profileForm.get('rating').dirty || profileForm.get('rating').touched)\">{{validation.message}}</mat-error>\n          </mat-error>\n        </mat-form-field>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col\">\n        <mat-form-field class=\"datepicker\">\n          <mat-label>Birth date</mat-label>\n            <input matInput [matDatepicker]=\"birthDate\" formControlName=\"birthDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"birthDate\"></mat-datepicker-toggle>\n            <mat-datepicker #birthDate></mat-datepicker>\n            <mat-error *ngFor=\"let validation of validationMessages.birthDate\">\n              <mat-error class=\"error-message\" *ngIf=\"profileForm.get('birthDate').hasError(validation.type) && (profileForm.get('birthDate').dirty || profileForm.get('birthDate').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n        </mat-form-field>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col\">\n        <mat-form-field>\n          <mat-label>Gender</mat-label>\n          <input matInput type=\"text\" formControlName=\"gender\">\n          <mat-error *ngFor=\"let validation of validationMessages.gender\">\n            <mat-error class=\"error-message\" *ngIf=\"profileForm.get('gender').hasError(validation.type) && (profileForm.get('gender').dirty || profileForm.get('gender').touched)\">{{validation.message}}</mat-error>\n          </mat-error>\n        </mat-form-field>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col\">\n        <mat-form-field>\n          <mat-select formControlName=\"nationalities\" multiple placeholder=\"Nationalities\">\n            <mat-select-trigger>\n              {{profileForm.controls.nationalities.value}}\n            </mat-select-trigger>\n            <mat-option *ngFor=\"let country of countries\" [value]=\"country\">{{country}}</mat-option>\n          </mat-select>\n          <mat-error *ngFor=\"let validation of validationMessages.nationalities\">\n            <mat-error class=\"error-message\" *ngIf=\"profileForm.get('nationalities').hasError(validation.type) && (profileForm.get('nationalities').dirty || profileForm.get('nationalities').touched)\">{{validation.message}}</mat-error>\n          </mat-error>\n        </mat-form-field>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col\">\n        <mat-form-field>\n          <mat-label>Is profile active</mat-label>\n          <mat-select [(value)]=\"profileForm.controls.isActive.value\" formControlName=\"isActive\">\n            <mat-option *ngFor=\"let status of profileStatus\" [value]=\"status.value\">{{status.view}}</mat-option>\n          </mat-select>\n          <mat-error *ngFor=\"let validation of validationMessages.isActive\">\n            <mat-error class=\"error-message\" *ngIf=\"profileForm.get('isActive').hasError(validation.type) && (profileForm.get('isActive').dirty || profileForm.get('isActive').touched)\">{{validation.message}}</mat-error>\n          </mat-error>\n        </mat-form-field>\n      </div>\n  </div> \n\n  <div class=\"row\">\n    <div class=\"col\">\n      <button mat-button class=\"form-button\" type=\"submit\" [disabled]=\"profileForm.invalid\">{{buttonText}}</button>\n    </div>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='profile' class=\"profile_wrapper light\">\r\n  <div class=\"page-nav light\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <button class='back-btn' mat-button (click)=\"goBack()\">Previous page</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"profile-head section\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-md-5 col-sm-12 name\">\r\n          <h2>Name: {{profile.name}} {{profile.surname}}</h2>\r\n        </div>\r\n        <div class=\"col-md-5 col-sm-12\">\r\n          <h2>Rating: {{profile.rating}} <mat-icon>whatshot</mat-icon></h2>\r\n        </div>  \r\n        <div class=\"col-md-2 col-sm-12 controls\">\r\n          <a mat-button\r\n            routerLink=\"/profiles/edit/{{profile.id}}\" >Edit</a>\r\n          <button\r\n            mat-icon-button\r\n            (click)='removeProfile(profile.id)' ><mat-icon>delete</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"profile-contact section\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        Email: <span>{{profile.email}}</span>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        Phone: <span>{{profile.phone}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"profile-dates section\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              Profile active: <span>{{profile.isActive}}</span>\r\n            </div>\r\n            <div class=\"col-12 \">\r\n              Last update: <span>{{profile.lastUpdate | date : 'M/d/yy, h:mm a' }}</span>\r\n            </div>\r\n            <div class=\"col-12 \">\r\n              Creation date: <span>{{profile.creationDate | date : 'M/d/yy, h:mm a' }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"profile-details section\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              Birth date: <span>{{profile.birthDate | date :  \"dd.MM.y\" }}</span>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              Gender: <span>{{profile.gender}}</span>\r\n            </div>\r\n            <div class=\"col-12\">\r\n                Nationalities: \r\n              <span *ngFor='let nationality of profile.nationalities'>\r\n                  {{nationality}}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profiles/profiles.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profiles/profiles.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"profiles.length === 0\" class=\"no-items\">\r\n  <app-loader></app-loader>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"profiles.length > 0\" class=\"profiles_wrapper\">\r\n  <h2>Top rated</h2>\r\n  <div class=\"top-rated\">\r\n    <div class=\"row\">\r\n        <div *ngFor='let profile of topRated' class=\"col-md-6 col-sm-12\">\r\n          <a class=\"name\" routerLink=\"/profiles/{{profile.id}}\">\r\n            <div class=\"profile-box\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 col-sm-12 name\">\r\n                      <h2>{{profile.name}} {{profile.surname}}</h2>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-sm-12 rating\">\r\n                      <h2>Rating: {{profile.rating}} <mat-icon>whatshot</mat-icon></h2>\r\n                  </div>  \r\n                </div>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  \r\n  <h2>User profiles</h2>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"head profile-row\">\r\n        <div class=\"profile-label\">\r\n          <span class=\"name\">Name</span>\r\n          <span class=\"phone\">Phone</span>\r\n          <span class=\"rating\">Rating</span>\r\n          <span class=\"date\">Last Update</span>\r\n        </div>\r\n        <div class=\"controls\">\r\n          <span class=\"actions\">Actions</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <ul class=\"profiles\">\r\n        <li *ngFor='let profile of profiles' class=\"profile profile-row\" routerLink=\"/profiles/{{profile.id}}\">\r\n          <div class=\"profile-label\">\r\n              <span class=\"name\">{{profile.name}} {{profile.surname}}</span>\r\n              <span class=\"phone\">{{profile.phone}}</span>\r\n              <span class=\"rating\">{{profile.rating}}</span>\r\n              <span class=\"date\">{{profile.lastUpdate | date : 'M/d/yy, h:mm a'}}</span>\r\n          </div>\r\n          <div class=\"controls\">\r\n            <a mat-button\r\n              class=\"edit\"\r\n              (click)='$event.stopPropagation();'\r\n              routerLink=\"/profiles/edit/{{profile.id}}\" >Edit</a>\r\n            <button\r\n              class=\"delete\"\r\n              mat-icon-button\r\n              (click)='removeProfile(profile.id); $event.stopPropagation();' ><mat-icon>delete</mat-icon>\r\n            </button>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_profiles_profiles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profiles/profiles.component */ "./src/app/components/profiles/profiles.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add-profile/add-profile.component */ "./src/app/components/add-profile/add-profile.component.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");







var routes = [
    { path: '', redirectTo: '/profiles', pathMatch: 'full' },
    { path: 'profiles', component: _components_profiles_profiles_component__WEBPACK_IMPORTED_MODULE_3__["ProfilesComponent"] },
    { path: 'profiles/add', component: _components_add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_5__["AddProfileComponent"] },
    { path: 'profiles/:id', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'profiles/edit/:id', component: _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _components_main_app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/main/app.component */ "./src/app/components/main/app.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_profiles_profiles_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/profiles/profiles.component */ "./src/app/components/profiles/profiles.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/profile-form/profile-form.component */ "./src/app/components/profile-form/profile-form.component.ts");
/* harmony import */ var _components_add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/add-profile/add-profile.component */ "./src/app/components/add-profile/add-profile.component.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");






// import misc material elements



// import form material elements






// App root component

// App components








// Routing

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_main_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _components_profiles_profiles_component__WEBPACK_IMPORTED_MODULE_16__["ProfilesComponent"],
                _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__["NavigationComponent"],
                _components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_19__["ProfileFormComponent"],
                _components_add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_20__["AddProfileComponent"],
                _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_21__["EditProfileComponent"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__["LoaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"]
            ],
            providers: [
                _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"]
            ],
            bootstrap: [_components_main_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-profile/add-profile.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-profile/add-profile.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXByb2ZpbGUvYWRkLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/add-profile/add-profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-profile/add-profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProfileComponent", function() { return AddProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_profiles_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/profiles/profile.service */ "./src/app/services/profiles/profile.service.ts");




var AddProfileComponent = /** @class */ (function () {
    function AddProfileComponent(profileService, location) {
        this.profileService = profileService;
        this.location = location;
        this.formSetup = {
            buttonText: 'Add profile',
            callback: this.addProfile.bind(this)
        };
    }
    AddProfileComponent.prototype.addProfile = function (formData) {
        var _this = this;
        formData.creationDate = this.getCurrentDate();
        formData.lastUpdate = '';
        this.profileService.addProfile(formData)
            .subscribe(function (res) { return res && _this.location.back(); });
    };
    AddProfileComponent.prototype.getCurrentDate = function () {
        var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-GB');
        var currentDateTime = Date.now();
        return pipe.transform(currentDateTime, 'short');
    };
    AddProfileComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddProfileComponent.prototype.ngOnInit = function () {
    };
    AddProfileComponent.ctorParameters = function () { return [
        { type: _services_profiles_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
    AddProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-profile',
            template: __webpack_require__(/*! raw-loader!./add-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-profile/add-profile.component.html"),
            styles: [__webpack_require__(/*! ./add-profile.component.scss */ "./src/app/components/add-profile/add-profile.component.scss")]
        })
    ], AddProfileComponent);
    return AddProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_profiles_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/profiles/profile.service */ "./src/app/services/profiles/profile.service.ts");





var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(route, profileService, location) {
        this.route = route;
        this.profileService = profileService;
        this.location = location;
        this.formSetup = {
            buttonText: 'Update profile',
            callback: this.updateProfile.bind(this),
            getUserData: this.getUserData()
        };
    }
    EditProfileComponent.prototype.updateProfile = function (formData) {
        var _this = this;
        formData.lastUpdate = this.getCurrentDate();
        this.profileService.updateProfile(formData)
            .subscribe(function (res) { return res && _this.location.back(); });
    };
    EditProfileComponent.prototype.getCurrentDate = function () {
        var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-GB');
        var currentDateTime = Date.now();
        return pipe.transform(currentDateTime, 'short');
    };
    EditProfileComponent.prototype.getUserData = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        return function () { return _this.profileService.getProfile(id); };
    };
    EditProfileComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_profiles_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/components/edit-profile/edit-profile.component.scss")]
        })
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader_wrapper {\n  padding: 0;\n}\n.loader_wrapper .row {\n  height: 100vh;\n}\nimg.loader {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvQzpcXFVzZXJzXFxtbHVrYVxcT25lRHJpdmVcXERlc2t0b3BcXHByb2ZpbGVzQ1JVRC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9hZGVyXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjtBREFFO0VBQU8sYUFBQTtBQ0dUO0FEREE7RUFBYSxXQUFBO0FDS2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyX3dyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgLnJvdyB7IGhlaWdodDogMTAwdmggfVxyXG59XHJcbmltZy5sb2FkZXIgeyB3aWR0aDogNTBweDt9IiwiLmxvYWRlcl93cmFwcGVyIHtcbiAgcGFkZGluZzogMDtcbn1cbi5sb2FkZXJfd3JhcHBlciAucm93IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuaW1nLmxvYWRlciB7XG4gIHdpZHRoOiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this.loaderPath = 'assets/images/loader.gif';
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/loader/loader.component.scss")]
        })
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/main/app.component.scss":
/*!****************************************************!*\
  !*** ./src/app/components/main/app.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header, main, footer {\n  display: block;\n}\n\nheader {\n  width: 100%;\n}\n\nmain {\n  width: calc(100% - 300px);\n  float: right;\n}\n\n@media (max-width: 1200px) {\n  main {\n    width: calc(100% - 250px);\n  }\n}\n\n@media (max-width: 992px) {\n  main {\n    width: 100%;\n  }\n}\n\n.sidebar_wrapper {\n  width: 300px;\n  position: fixed;\n  height: 100%;\n  padding: 50px 30px;\n}\n\n@media (max-width: 1200px) {\n  .sidebar_wrapper {\n    width: 250px;\n  }\n}\n\n@media (max-width: 992px) {\n  .sidebar_wrapper {\n    display: none;\n  }\n}\n\nfooter {\n  width: 100%;\n}\n\n.mobile-nav {\n  display: none;\n}\n\n@media (max-width: 992px) {\n  .mobile-nav {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxVc2Vyc1xcbWx1a2FcXE9uZURyaXZlXFxEZXNrdG9wXFxwcm9maWxlc0NSVUQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLGNBQUE7QUNORjs7QURTQTtFQUNFLFdBQUE7QUNORjs7QURTQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ05GOztBRE9FO0VBSEY7SUFHK0IseUJBQUE7RUNIN0I7QUFDRjs7QURHRTtFQUpGO0lBSThCLFdBQUE7RUNDNUI7QUFDRjs7QURDQTtFQUNFLFlBdEJXO0VBeUJYLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURKRTtFQUZGO0lBRStCLFlBcEJsQjtFQzRCWDtBQUNGOztBRFJFO0VBSEY7SUFHOEIsYUFBQTtFQ1k1QjtBQUNGOztBRFBBO0VBQ0UsV0FBQTtBQ1VGOztBRFBBO0VBQ0UsYUFBQTtBQ1VGOztBRFRFO0VBRkY7SUFFK0IsY0FBQTtFQ2E3QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID4gOTkyIGxhcmdlIHNjcmVlbiBkZXZpY2VzIGJyZWFrcG9pbnRcclxuJHNpZGViYXItbGc6IDMwMHB4O1xyXG5cclxuLy8gPCA5OTIgbWVkaXVtIHNjcmVlbiBkZXZpY2VzIGJyZWFrcG9pbnRcclxuJHNpZGViYXItbWQ6IDI1MHB4O1xyXG5cclxuXHJcbmhlYWRlciwgbWFpbiwgZm9vdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtICN7JHNpZGViYXItbGd9KTsgXHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHsgd2lkdGg6IGNhbGMoMTAwJSAtICN7JHNpZGViYXItbWR9KSB9O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkgeyB3aWR0aDogMTAwJTsgfTtcclxufVxyXG5cclxuLnNpZGViYXJfd3JhcHBlciB7XHJcbiAgd2lkdGg6ICRzaWRlYmFyLWxnO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHsgd2lkdGg6ICRzaWRlYmFyLW1kIH07XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7IGRpc3BsYXk6IG5vbmU7IH07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiA1MHB4IDMwcHg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2JpbGUtbmF2IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAgOTkycHgpIHsgZGlzcGxheTogYmxvY2s7IH07XHJcbn1cclxuXHJcbiIsImhlYWRlciwgbWFpbiwgZm9vdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYWluIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICBtYWluIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgbWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnNpZGViYXJfd3JhcHBlciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDUwcHggMzBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNpZGViYXJfd3JhcHBlciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnNpZGViYXJfd3JhcHBlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vYmlsZS1uYXYge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tb2JpbGUtbmF2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/main/app.component.ts":
/*!**************************************************!*\
  !*** ./src/app/components/main/app.component.ts ***!
  \**************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'profilesCRUD';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/components/main/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/messages/messages.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  position: relative;\n  padding: 10px 15px 10px 10px;\n  font-size: 0.9em;\n  border-radius: 5px;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.message .close {\n  position: absolute;\n  top: 10px;\n  height: auto;\n  width: auto;\n  border-radius: 30px;\n  font-size: 0.8em;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9DOlxcVXNlcnNcXG1sdWthXFxPbmVEcml2ZVxcRGVza3RvcFxccHJvZmlsZXNDUlVEL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZXNzYWdlc1xcbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDEwcHg7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC5jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59IiwiLm1lc3NhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tZXNzYWdlIC5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICByaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/messages/messages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_messages_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/messages/message.service */ "./src/app/services/messages/message.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.ctorParameters = function () { return [
        { type: _services_messages_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
    ]; };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/components/messages/messages.component.scss")]
        })
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none;\n  padding: 0;\n  padding: 30px 0;\n  margin: 0;\n}\nul li a {\n  padding: 20px 20px;\n  display: block;\n  width: 100%;\n  border-radius: 5px;\n}\nul li .mat-icon {\n  font-size: 0.8em;\n  height: auto;\n  width: auto;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcbWx1a2FcXE9uZURyaXZlXFxEZXNrdG9wXFxwcm9maWxlc0NSVUQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmlnYXRpb25cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNDRjtBRENNO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ1I7QURDTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBhZGRpbmc6IDMwcHggMDtcclxuICBtYXJnaW46IDA7XHJcbiAgICBsaSB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwidWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIG1hcmdpbjogMDtcbn1cbnVsIGxpIGEge1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxudWwgbGkgLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-form/profile-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/profile-form/profile-form.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%;\n  padding: 10px 0;\n}\n\n.form-button {\n  margin-top: 40px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlLWZvcm0vQzpcXFVzZXJzXFxtbHVrYVxcT25lRHJpdmVcXERlc2t0b3BcXHByb2ZpbGVzQ1JVRC9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZmlsZS1mb3JtXFxwcm9maWxlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1mb3JtL3Byb2ZpbGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1mb3JtL3Byb2ZpbGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iLCIubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4uZm9ybS1idXR0b24ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/profile-form/profile-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/profile-form/profile-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormComponent", function() { return ProfileFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation-messages */ "./src/app/components/profile-form/validation-messages.ts");




var countries = ['Polish', 'English', 'French', 'Italian', 'German'];
var ProfileFormComponent = /** @class */ (function () {
    function ProfileFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.profileStatus = [{ value: true, view: 'Active' }, { value: false, view: 'Inactive' }];
        this.profile = {};
        this.validationMessages = _validation_messages__WEBPACK_IMPORTED_MODULE_3__["validationMessages"];
        this.countries = countries;
        this.createForm();
    }
    ProfileFormComponent.prototype.onSubmit = function () {
        var updatedData = Object.assign(this.profile, this.profileForm.value);
        if (this.profileForm.invalid)
            return;
        this.Provider.callback(updatedData);
    };
    ProfileFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var getUserData = this.Provider.getUserData;
        if (getUserData)
            getUserData().subscribe(function (user) {
                _this.profile = user;
                console.log(user, _this.profileForm);
                _this.profileForm.patchValue(user);
            });
        this.buttonText = this.Provider.buttonText;
    };
    ProfileFormComponent.prototype.createForm = function () {
        this.profileForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[+][0-9]{2}(\\s[0-9]{3})+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            birthDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nationalities: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isActive: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ProfileFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProfileFormComponent.prototype, "Provider", void 0);
    ProfileFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-form',
            template: __webpack_require__(/*! raw-loader!./profile-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile-form/profile-form.component.html"),
            styles: [__webpack_require__(/*! ./profile-form.component.scss */ "./src/app/components/profile-form/profile-form.component.scss")]
        })
    ], ProfileFormComponent);
    return ProfileFormComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-form/validation-messages.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/profile-form/validation-messages.ts ***!
  \****************************************************************/
/*! exports provided: validationMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationMessages", function() { return validationMessages; });
var validationMessages = {
    'name': [
        { type: 'required', message: 'Name is required' },
        { type: 'minlength', message: 'Name must have at least one character' },
        { type: 'maxlength', message: 'Name cannot be more than 25 characters long' },
        { type: 'pattern', message: 'Your Name must contain only letters' }
    ],
    'surname': [
        { type: 'required', message: 'Surname is required' },
        { type: 'minlength', message: 'Surname must have at least one character' },
        { type: 'maxlength', message: 'Surname cannot be more than 25 characters long' },
        { type: 'pattern', message: 'Your Surname must contain only letters' }
    ],
    'phone': [
        { type: 'required', message: 'Phone number is required' },
        { type: 'pattern', message: 'Enter valid a phone number +xx xxx xxx xxx' }
    ],
    'email': [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Enter a valid email' }
    ],
    'rating': [
        { type: 'required', message: 'User rating is required' },
        { type: 'max', message: 'Rating should be below 10 ' },
        { type: 'min', message: 'Rating should be above 0 ' },
    ],
    'birthDate': [
        { type: 'required', message: 'Your birth date is required' },
    ],
    'gender': [
        { type: 'required', message: 'Your gender is required' }
    ],
    'nationalities': [
        { type: 'required', message: 'Your must provide at least one nationality' }
    ],
    'isActive': [
        { type: 'required', message: 'Your must confirm profile status' }
    ],
};


/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  padding: 30px 40px;\n  border-radius: 5px;\n  margin: 20px 0;\n}\n.section [class^=col-] {\n  padding: 20px 0;\n}\n@media (max-width: 568px) {\n  .section [class^=col-] {\n    text-align: center;\n  }\n  .section [class^=col-] span {\n    display: block;\n    margin: 10px;\n    word-wrap: break-word;\n  }\n}\n.section.profile-head {\n  margin-top: 50px;\n}\n.section.profile-head [class^=col-] {\n  padding: 0;\n}\n.section.profile-head .controls {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.section.profile-head .controls .mat-button {\n  margin-right: 10px;\n}\n.section span {\n  padding: 10px;\n  border-radius: 5px;\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL0M6XFxVc2Vyc1xcbWx1a2FcXE9uZURyaXZlXFxEZXNrdG9wXFxwcm9maWxlc0NSVUQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDRjtBREFFO0VBQ0UsZUFBQTtBQ0VKO0FEREk7RUFGRjtJQUdJLGtCQUFBO0VDSUo7RURISTtJQUNFLGNBQUE7SUFDQSxZQUFBO0lBQ0EscUJBQUE7RUNLTjtBQUNGO0FERkU7RUFDRSxnQkFBQTtBQ0lKO0FESEk7RUFBa0IsVUFBQTtBQ010QjtBRExJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNPTjtBRE5NO0VBQ0Usa0JBQUE7QUNRUjtBREpFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMzBweCA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBbY2xhc3NePVwiY29sLVwiXSB7IFxyXG4gICAgcGFkZGluZzoyMHB4IDA7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTY4cHgpIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBzcGFuIHsgXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgfTsgXHJcbiAgICB9OyBcclxuICB9XHJcbiAgJi5wcm9maWxlLWhlYWQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIFtjbGFzc149XCJjb2wtXCJdIHsgcGFkZGluZzogMDt9XHJcbiAgICAuY29udHJvbHMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAubWF0LWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gIH1cclxufVxyXG5cclxuIiwiLnNlY3Rpb24ge1xuICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uc2VjdGlvbiBbY2xhc3NePWNvbC1dIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gIC5zZWN0aW9uIFtjbGFzc149Y29sLV0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc2VjdGlvbiBbY2xhc3NePWNvbC1dIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbn1cbi5zZWN0aW9uLnByb2ZpbGUtaGVhZCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uc2VjdGlvbi5wcm9maWxlLWhlYWQgW2NsYXNzXj1jb2wtXSB7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2VjdGlvbi5wcm9maWxlLWhlYWQgLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWN0aW9uLnByb2ZpbGUtaGVhZCAuY29udHJvbHMgLm1hdC1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uc2VjdGlvbiBzcGFuIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDAgNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_profiles_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/profiles/profile.service */ "./src/app/services/profiles/profile.service.ts");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, profileService, location) {
        this.route = route;
        this.profileService = profileService;
        this.location = location;
    }
    ProfileComponent.prototype.getProfile = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.profileService.getProfile(id)
            .subscribe(function (profile) {
            _this.profile = profile;
        });
    };
    ProfileComponent.prototype.removeProfile = function (id) {
        var _this = this;
        this.profileService.deleteProfile(id)
            .subscribe(function (res) { return _this.location.back(); });
    };
    ProfileComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_profiles_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/profiles/profiles.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/profiles/profiles.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 15px 15px 15px 40px;\n}\n.profile-row .profile-label span {\n  display: inline-block;\n  font-size: 0.9em;\n}\n.profile-row .profile-label .name {\n  width: 250px;\n}\n@media (max-width: 768px) {\n  .profile-row .profile-label .name {\n    width: auto;\n    margin-right: 10px;\n  }\n}\n.profile-row .profile-label .phone {\n  width: 150px;\n}\n.profile-row .profile-label .rating {\n  width: 80px;\n}\n@media (max-width: 1070px) {\n  .profile-row .profile-label .rating {\n    display: none;\n  }\n}\n.profile-row .profile-label .date {\n  width: 200px;\n}\n@media (max-width: 1270px) {\n  .profile-row .profile-label .date {\n    display: none;\n  }\n}\n.profile-row .controls .actions {\n  width: 110px;\n  display: inline-block;\n}\n@media (max-width: 768px) {\n  .profile-row .controls .delete {\n    display: none;\n  }\n}\n.head {\n  font-size: 0.8em;\n}\n@media (max-width: 768px) {\n  .head {\n    display: none;\n  }\n}\nul.profiles {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nul.profiles li {\n  margin: 15px 0;\n  border-radius: 5px;\n}\nul.profiles li .name {\n  font-weight: 500;\n}\nul.profiles li .mat-button {\n  margin-right: 10px;\n}\n.top-rated {\n  margin-bottom: 80px;\n}\n.top-rated .profile-box {\n  border-radius: 5px;\n  padding: 40px;\n  margin-bottom: 20px;\n}\n@media (max-width: 1270px) {\n  .top-rated .profile-box {\n    text-align: center;\n  }\n}\n@media (max-width: 1270px) {\n  .top-rated .profile-box h2 {\n    font-size: 1.2em;\n  }\n}\n.top-rated .profile-box .rating {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlcy9DOlxcVXNlcnNcXG1sdWthXFxPbmVEcml2ZVxcRGVza3RvcFxccHJvZmlsZXNDUlVEL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9maWxlc1xccHJvZmlsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZXMvcHJvZmlsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0FDQ0Y7QURDSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FEQU07RUFGRjtJQUU4QixXQUFBO0lBQWEsa0JBQUE7RUNLN0M7QUFDRjtBREpJO0VBQ0UsWUFBQTtBQ01OO0FESkk7RUFDRSxXQUFBO0FDTU47QURMTTtFQUZGO0lBRStCLGFBQUE7RUNTakM7QUFDRjtBRFJJO0VBQ0UsWUFBQTtBQ1VOO0FEVE07RUFGRjtJQUUrQixhQUFBO0VDYWpDO0FBQ0Y7QURWSTtFQUFXLFlBQUE7RUFBYyxxQkFBQTtBQ2M3QjtBRGJJO0VBQ0U7SUFBVSxhQUFBO0VDZ0JkO0FBQ0Y7QURaQTtFQUNFLGdCQUFBO0FDZUY7QURkRTtFQUZGO0lBRThCLGFBQUE7RUNrQjVCO0FBQ0Y7QURoQkE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDbUJGO0FEakJFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDbUJKO0FEbEJJO0VBQVEsZ0JBQUE7QUNxQlo7QURwQkk7RUFBYyxrQkFBQTtBQ3VCbEI7QURsQkE7RUFDRSxtQkFBQTtBQ3FCRjtBRHBCRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDc0JKO0FEckJJO0VBSkY7SUFLSSxrQkFBQTtFQ3dCSjtBQUNGO0FEdkJJO0VBQ0U7SUFBSyxnQkFBQTtFQzBCVDtBQUNGO0FEekJJO0VBQ0Usa0JBQUE7QUMyQk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGVzL3Byb2ZpbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDQwcHg7XHJcbiAgLnByb2ZpbGUtbGFiZWwge1xyXG4gICAgc3BhbiB7IFxyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICB9XHJcbiAgICAubmFtZSB7IFxyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgeyB3aWR0aDogYXV0bzsgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9OyAgXHJcbiAgICB9XHJcbiAgICAucGhvbmUge1xyXG4gICAgICB3aWR0aDogMTUwcHg7IFxyXG4gICAgfVxyXG4gICAgLnJhdGluZyB7IFxyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwNzBweCkgeyBkaXNwbGF5OiBub25lOyB9OyBcclxuICAgIH1cclxuICAgIC5kYXRlIHsgXHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNzBweCkgeyBkaXNwbGF5OiBub25lOyB9OyBcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRyb2xzIHtcclxuICAgIC5hY3Rpb25zIHsgd2lkdGg6IDExMHB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgICAgLmRlbGV0ZSB7IGRpc3BsYXk6IG5vbmU7fSAgXHJcbiAgICB9OyBcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgeyBkaXNwbGF5OiBub25lOyB9OyBcclxufVxyXG5cclxudWwucHJvZmlsZXMge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIGxpIHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLm5hbWUgeyBmb250LXdlaWdodDogNTAwOyB9XHJcbiAgICAubWF0LWJ1dHRvbiB7IG1hcmdpbi1yaWdodDogMTBweDsgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi50b3AtcmF0ZWQge1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgLnByb2ZpbGUtYm94IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNzBweCkgeyBcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfTsgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTI3MHB4KSB7IFxyXG4gICAgICBoMiB7IGZvbnQtc2l6ZTogMS4yZW07IH1cclxuICAgIH07IFxyXG4gICAgLnJhdGluZyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCIucHJvZmlsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDQwcHg7XG59XG4ucHJvZmlsZS1yb3cgLnByb2ZpbGUtbGFiZWwgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cbi5wcm9maWxlLXJvdyAucHJvZmlsZS1sYWJlbCAubmFtZSB7XG4gIHdpZHRoOiAyNTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvZmlsZS1yb3cgLnByb2ZpbGUtbGFiZWwgLm5hbWUge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuLnByb2ZpbGUtcm93IC5wcm9maWxlLWxhYmVsIC5waG9uZSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5wcm9maWxlLXJvdyAucHJvZmlsZS1sYWJlbCAucmF0aW5nIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTA3MHB4KSB7XG4gIC5wcm9maWxlLXJvdyAucHJvZmlsZS1sYWJlbCAucmF0aW5nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ucHJvZmlsZS1yb3cgLnByb2ZpbGUtbGFiZWwgLmRhdGUge1xuICB3aWR0aDogMjAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI3MHB4KSB7XG4gIC5wcm9maWxlLXJvdyAucHJvZmlsZS1sYWJlbCAuZGF0ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnByb2ZpbGUtcm93IC5jb250cm9scyAuYWN0aW9ucyB7XG4gIHdpZHRoOiAxMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9maWxlLXJvdyAuY29udHJvbHMgLmRlbGV0ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uaGVhZCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxudWwucHJvZmlsZXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG51bC5wcm9maWxlcyBsaSB7XG4gIG1hcmdpbjogMTVweCAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG51bC5wcm9maWxlcyBsaSAubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG51bC5wcm9maWxlcyBsaSAubWF0LWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRvcC1yYXRlZCB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG4udG9wLXJhdGVkIC5wcm9maWxlLWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjcwcHgpIHtcbiAgLnRvcC1yYXRlZCAucHJvZmlsZS1ib3gge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNzBweCkge1xuICAudG9wLXJhdGVkIC5wcm9maWxlLWJveCBoMiB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuLnRvcC1yYXRlZCAucHJvZmlsZS1ib3ggLnJhdGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/profiles/profiles.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/profiles/profiles.component.ts ***!
  \***********************************************************/
/*! exports provided: ProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesComponent", function() { return ProfilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_profiles_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/profiles/profile.service */ "./src/app/services/profiles/profile.service.ts");



var ProfilesComponent = /** @class */ (function () {
    function ProfilesComponent(profileService) {
        this.profileService = profileService;
        this.profiles = [];
        this.topRated = [];
    }
    ProfilesComponent.prototype.getProfiles = function () {
        var _this = this;
        this.profileService.getProfiles()
            .subscribe(function (profiles) {
            _this.profiles = profiles;
            _this.topRated = _this.getTopRated(profiles);
        });
    };
    ProfilesComponent.prototype.removeProfile = function (id) {
        var _this = this;
        this.profileService.deleteProfile(id)
            .subscribe(function (res) { return _this.getProfiles(); });
    };
    ProfilesComponent.prototype.sortDescending = function (arr) {
        return arr.sort(function (first, second) { return second.rating - first.rating; });
    };
    ProfilesComponent.prototype.getTopRated = function (arr) {
        return this.sortDescending(arr).slice(0, 4);
    };
    ProfilesComponent.prototype.ngOnInit = function () {
        this.getProfiles();
    };
    ProfilesComponent.ctorParameters = function () { return [
        { type: _services_profiles_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }
    ]; };
    ProfilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profiles',
            template: __webpack_require__(/*! raw-loader!./profiles.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profiles/profiles.component.html"),
            styles: [__webpack_require__(/*! ./profiles.component.scss */ "./src/app/components/profiles/profiles.component.scss")]
        })
    ], ProfilesComponent);
    return ProfilesComponent;
}());



/***/ }),

/***/ "./src/app/services/messages/message.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/messages/message.service.ts ***!
  \******************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
        this.messageNumber = 0;
    }
    MessageService.prototype.add = function (message) {
        var newMessage = Object.assign(message, { id: this.messageNumber++ });
        this.messages.unshift(newMessage);
    };
    MessageService.prototype.remove = function (id) {
        this.messages = this.messages.filter(function (message) { return message.id !== id; });
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/profiles/profile.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/profiles/profile.service.ts ***!
  \******************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../messages/message.service */ "./src/app/services/messages/message.service.ts");






var ProfileService = /** @class */ (function () {
    function ProfileService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.profilesUrl = '/api/profiles';
    }
    ProfileService.prototype.getProfiles = function () {
        var _this = this;
        return this.http.get(this.profilesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log('Profiles fetched', 'ok'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getProfiles', [])));
    };
    ProfileService.prototype.getProfile = function (id) {
        var _this = this;
        return this.http.get(this.profilesUrl + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.log('Profile fetched', 'ok'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getProfile')));
    };
    ProfileService.prototype.addProfile = function (profile) {
        var _this = this;
        return this.http.post("" + this.profilesUrl, profile)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.log('Profile added', 'ok'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addProfile')));
    };
    ProfileService.prototype.updateProfile = function (profile) {
        var _this = this;
        return this.http.put("" + this.profilesUrl, profile)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.log('Profile update', 'ok'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateProfile')));
    };
    ProfileService.prototype.deleteProfile = function (id) {
        var _this = this;
        console.log(id);
        return this.http.delete(this.profilesUrl + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.log('Profile removed', 'ok'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('removeProfile')));
    };
    ProfileService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            _this.log(operation + " failed: " + error.message, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ProfileService.prototype.log = function (message, type) {
        this.messageService.add({ content: "App: " + message, type: type });
    };
    ProfileService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _messages_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
    ]; };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProfileService);
    return ProfileService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mluka\OneDrive\Desktop\profilesCRUD\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map