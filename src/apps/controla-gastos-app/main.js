(self["webpackChunkcontrola_gastos_app"] = self["webpackChunkcontrola_gastos_app"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _services_login_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/login-guard.service */ 54881);
/* harmony import */ var _components_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/create-account/create-account.component */ 22284);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 47143);
/* harmony import */ var _components_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/graphics/graphics.component */ 83378);
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/resume/resume.component */ 96837);
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/category/category.component */ 9053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_redirect_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/redirect-guard.service */ 81742);










const routes = [
    { path: 'resume', component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_4__.ResumeComponent, canActivate: [_services_login_guard_service__WEBPACK_IMPORTED_MODULE_0__.LoginGuard] },
    { path: 'categories', component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_5__.CategoryComponent, canActivate: [_services_login_guard_service__WEBPACK_IMPORTED_MODULE_0__.LoginGuard] },
    { path: 'graphics', component: _components_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_3__.GraphicsComponent, canActivate: [_services_login_guard_service__WEBPACK_IMPORTED_MODULE_0__.LoginGuard] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, canActivate: [_services_redirect_guard_service__WEBPACK_IMPORTED_MODULE_6__.RedirectGuard] },
    { path: 'create-account', component: _components_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_1__.CreateAccountComponent, canActivate: [_services_redirect_guard_service__WEBPACK_IMPORTED_MODULE_6__.RedirectGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'resume' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ 61249);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);





let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
    }
};
AppComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translateFactory": () => (/* binding */ translateFactory),
/* harmony export */   "configFactory": () => (/* binding */ configFactory),
/* harmony export */   "configDateFactory": () => (/* binding */ configDateFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/auth */ 69733);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/database */ 63274);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ 78744);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_pagination_dist_ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination/dist/ngx-pagination */ 41801);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/calendar */ 88598);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/chart */ 45720);
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/translate.service */ 21662);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/config.service */ 70946);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ 43646);
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/category/category.component */ 9053);
/* harmony import */ var _components_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/category/add-category/add-category.component */ 53163);
/* harmony import */ var _components_header_add_registry_add_registry_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/add-registry/add-registry.component */ 1879);
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/resume/resume.component */ 96837);
/* harmony import */ var _components_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/graphics/graphics.component */ 83378);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ 47143);
/* harmony import */ var _components_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/create-account/create-account.component */ 22284);

// Angular








// Modules






// Services


// Components









function translateFactory(provider) {
    return () => provider.getData();
}
function configFactory(provider) {
    return () => provider.getData();
}
function configDateFactory(provider) {
    return () => provider.getDateConfig();
}
const firebaseConfig = {
    apiKey: "AIzaSyAVtJrk_oFYeme8pgW0joqTqD3e8-rEJ0E",
    authDomain: "controla-gastos-udemy.firebaseapp.com",
    databaseURL: "https://controla-gastos-udemy.firebaseio.com",
    projectId: "controla-gastos-udemy",
    storageBucket: "controla-gastos-udemy.appspot.com",
    messagingSenderId: "204420274488",
    appId: "1:204420274488:web:1b193c4dbd9fd431"
};
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent,
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent,
            _components_category_category_component__WEBPACK_IMPORTED_MODULE_7__.CategoryComponent,
            _components_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_8__.AddCategoryComponent,
            _components_header_add_registry_add_registry_component__WEBPACK_IMPORTED_MODULE_9__.AddRegistryComponent,
            _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__.ResumeComponent,
            _components_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_11__.GraphicsComponent,
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__.LoginComponent,
            _components_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_13__.CreateAccountComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_20__.AngularFireModule.initializeApp(firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_21__.AngularFireDatabaseModule,
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__.AngularFireAuthModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule,
            ngx_pagination_dist_ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_24__.CalendarModule,
            primeng_chart__WEBPACK_IMPORTED_MODULE_25__.ChartModule
        ],
        providers: [
            _services_translate_service__WEBPACK_IMPORTED_MODULE_3__.TranslateService,
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__.APP_INITIALIZER,
                useFactory: translateFactory,
                deps: [_services_translate_service__WEBPACK_IMPORTED_MODULE_3__.TranslateService],
                multi: true
            },
            _services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService,
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__.APP_INITIALIZER,
                useFactory: configFactory,
                deps: [_services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService],
                multi: true
            },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__.APP_INITIALIZER,
                useFactory: configDateFactory,
                deps: [_services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 53163:
/*!****************************************************************************!*\
  !*** ./src/app/components/category/add-category/add-category.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCategoryComponent": () => (/* binding */ AddCategoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_category_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-category.component.html */ 45772);
/* harmony import */ var _add_category_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-category.component.css */ 29588);
/* harmony import */ var _shared_components_detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/components/detail/detail.component */ 83968);
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../models/category */ 14465);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/category.service */ 54655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _validators_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../validators/validators */ 52045);










let AddCategoryComponent = class AddCategoryComponent {
    constructor(formBuilder, cService, modalService) {
        this.formBuilder = formBuilder;
        this.cService = cService;
        this.modalService = modalService;
        // Evento al cerrar el detalle
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    }
    ngOnInit() {
        if (this.categoryEdit) {
            // Valido si existe la categoria
            // Añado el id
            this.formCategory = this.formBuilder.group({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.categoryEdit.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, (0,_validators_validators__WEBPACK_IMPORTED_MODULE_5__.categoryExists)(this.listCategories)]),
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.categoryEdit.id),
                user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.categoryEdit.user)
            });
        }
        else {
            // Valido si existe la categoria
            this.formCategory = this.formBuilder.group({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, (0,_validators_validators__WEBPACK_IMPORTED_MODULE_5__.categoryExists)(this.listCategories)]),
            });
        }
    }
    /**
     * Obtengo el formcontrol de name
     */
    get name() {
        return this.formCategory.get('name');
    }
    /**
     * Cierro el detalle
     * @param $event Estado de la ventana
     */
    closeDetail($event) {
        this.close.emit($event);
    }
    /**
     * Añade una categoria
     */
    addCategory() {
        // Obtengo la categoria del formgroup
        let category = new _models_category__WEBPACK_IMPORTED_MODULE_3__.Category(this.formCategory.value);
        if (this.categoryEdit) {
            // Editar categoria
            this.cService.editCategory(category).then(() => {
                this.modalService.open(this.modal_success).result.then(() => {
                    this.parentDetail.closeDetail();
                });
            }, error => {
                console.error(error);
                this.modalService.open(this.modal_error);
            });
        }
        else {
            // Añadir categoria
            this.cService.addCategory(category).then(() => {
                this.modalService.open(this.modal_success).result.then(() => {
                    this.parentDetail.closeDetail();
                });
            }, error => {
                console.error(error);
                this.modalService.open(this.modal_error);
            });
        }
    }
};
AddCategoryComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__.CategoryService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal }
];
AddCategoryComponent.propDecorators = {
    modal_success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["modal_success", { static: false },] }],
    modal_error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["modal_error", { static: false },] }],
    parentDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_shared_components_detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent, { static: false },] }],
    categoryEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    listCategories: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }]
};
AddCategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-add-category',
        template: _raw_loader_add_category_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_category_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddCategoryComponent);



/***/ }),

/***/ 9053:
/*!***********************************************************!*\
  !*** ./src/app/components/category/category.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryComponent": () => (/* binding */ CategoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./category.component.html */ 96039);
/* harmony import */ var _category_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.component.css */ 18208);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/category.service */ 54655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/config.service */ 70946);







let CategoryComponent = class CategoryComponent {
    constructor(cService, config, modalService) {
        this.cService = cService;
        this.config = config;
        this.modalService = modalService;
        this.showDetail = false;
        this.showCategories = false;
        this.page = 1;
        this.itemsPage = this.config.itemsCategoriesPage;
        this.categorySelected = null;
    }
    ngOnInit() {
        // Obtengo todas las categorias
        this.cService.getCategories().subscribe(listCategories => {
            this.listCategories = listCategories;
            this.showCategories = true;
        }, error => {
            console.error(error);
            this.showCategories = true;
        });
    }
    /**
     * Abro el detalle
     */
    openDetail() {
        this.showDetail = true;
    }
    /**
     * Cierro el detalle
     * @param $event Estado de la ventana
     */
    closeDetail($event) {
        this.showDetail = $event;
    }
    /**
     * Abre el detalle de edicion
     * @param category Categoria a editar
     */
    openEditDetail(category) {
        this.categorySelected = category;
        this.showDetail = true;
    }
    /**
     * Elimino una categoria
     * @param category Categoria a eliminar
     */
    removeCategory(category) {
        // Abre el modal de confirmacion
        this.modalService.open(this.modal_confirm_delete).result.then(result => {
            if (result === 'yes') {
                // Elimina la categoria
                this.cService.removeCategory(category.id).then(() => {
                    this.modalService.open(this.modal_success);
                }, error => {
                    this.modalService.open(this.modal_error);
                });
            }
        });
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal }
];
CategoryComponent.propDecorators = {
    modal_confirm_delete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ["modal_confirm_delete", { static: false },] }],
    modal_success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ["modal_success", { static: false },] }],
    modal_error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ["modal_error", { static: false },] }]
};
CategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-category',
        template: _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_category_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CategoryComponent);



/***/ }),

/***/ 22284:
/*!***********************************************************************!*\
  !*** ./src/app/components/create-account/create-account.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAccountComponent": () => (/* binding */ CreateAccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_create_account_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-account.component.html */ 19760);
/* harmony import */ var _create_account_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-account.component.css */ 33553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _validators_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validators/validators */ 52045);








let CreateAccountComponent = class CreateAccountComponent {
    constructor(formBuilder, authService, route) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        // Creo el formgroup
        this.formCreateAccount = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            confirmPass: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
        });
        // Añado el validador de confirmar password al formgroup
        this.formCreateAccount.setValidators(_validators_validators__WEBPACK_IMPORTED_MODULE_3__.confirmPassword);
        this.showCreateUserError = false;
    }
    /**
     * Obtiene el formcontrol de email
     */
    get email() {
        return this.formCreateAccount.get('email');
    }
    /**
     * Obtiene el formcontrol de pass
     */
    get pass() {
        return this.formCreateAccount.get('pass');
    }
    /**
     * Obtiene el formcontrol de confirmPass
     */
    get confirmPass() {
        return this.formCreateAccount.get('confirmPass');
    }
    ngOnInit() {
    }
    addUser() {
        // Recojo email y pass
        let email = this.formCreateAccount.get('email').value;
        let pass = this.formCreateAccount.get('pass').value;
        // Creo una nueva cuenta
        this.authService.createAccount(email, pass).then(state => {
            console.log(state);
            // Redirijo a resume
            this.route.navigate(['/resume']);
        }).catch(error => {
            console.error(error);
            this.showCreateUserError = true;
        });
    }
};
CreateAccountComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
CreateAccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-create-account',
        template: _raw_loader_create_account_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_account_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateAccountComponent);



/***/ }),

/***/ 83378:
/*!***********************************************************!*\
  !*** ./src/app/components/graphics/graphics.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicsComponent": () => (/* binding */ GraphicsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_graphics_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./graphics.component.html */ 72915);
/* harmony import */ var _graphics_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphics.component.css */ 13156);
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/translate.service */ 21662);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/config.service */ 70946);
/* harmony import */ var _services_registry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/registry.service */ 84097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ 50729);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 29114);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ 16549);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ 57387);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);









let GraphicsComponent = class GraphicsComponent {
    constructor(rService, config, translateService) {
        this.rService = rService;
        this.config = config;
        this.translateService = translateService;
        this.listRegistries = [];
        this.showGraphics = false;
        this.data = null;
    }
    ngOnInit() {
        // Obtengo todos los registros
        this.rService.getRegistries().subscribe(registries => {
            this.listRegistries = registries;
            // Relleno los datos
            this.fillData();
            this.showGraphics = true;
        });
    }
    /**
     * Relleno los datos para la grafica
     * @param $event Lista de registros filtrados, opcional
     */
    fillData($event) {
        // Si viene el evento (lista de registros filtrados) lo uso, sino cojo todos
        const registries = $event || this.listRegistries;
        // Obtengo el codigo del idioma usado por el navegador (es, por ejemplo)
        let codeLanguage = navigator.language.split("-")[0];
        // Agrupo los registros por meses
        const registriesByMonths = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__.default)(registries, r => moment__WEBPACK_IMPORTED_MODULE_5__(r.date).locale(codeLanguage).format("MMMM").toLowerCase());
        const dataDeposit = [];
        const dataExpense = [];
        // Meses del año
        const months = this.config.locale.monthNames;
        // Recorro los meses
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__.default)(months, month => {
            // Si existe registros con ese mes
            if (registriesByMonths[month]) {
                // Sumo los ingresos
                const deposits = (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__.default)(registriesByMonths[month], r => r.type === 'deposit' ? (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__.default)(r.quantity) : 0);
                // Sumo los gastos
                const expenses = (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__.default)(registriesByMonths[month], r => r.type === 'expense' ? (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__.default)(r.quantity) : 0);
                // Añado los ingresos
                dataDeposit.push(deposits);
                // Añado los gastos
                dataExpense.push(expenses);
            }
            else {
                // Sino hay registro en un mes concreto, lo dejo a cero
                dataDeposit.push(0);
                dataExpense.push(0);
            }
        });
        // Objeto para la grafica
        this.data = {
            labels: months,
            datasets: [
                {
                    label: this.translateService.getTranslate('deposit'),
                    backgroundColor: '#28a745',
                    borderColor: '#1E88E5',
                    data: dataDeposit
                },
                {
                    label: this.translateService.getTranslate('expense'),
                    backgroundColor: '#dc3545',
                    borderColor: '#7CB342',
                    data: dataExpense
                }
            ]
        };
    }
};
GraphicsComponent.ctorParameters = () => [
    { type: _services_registry_service__WEBPACK_IMPORTED_MODULE_4__.RegistryService },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _services_translate_service__WEBPACK_IMPORTED_MODULE_2__.TranslateService }
];
GraphicsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-graphics',
        template: _raw_loader_graphics_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_graphics_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GraphicsComponent);



/***/ }),

/***/ 1879:
/*!**************************************************************************!*\
  !*** ./src/app/components/header/add-registry/add-registry.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRegistryComponent": () => (/* binding */ AddRegistryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_registry_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-registry.component.html */ 7407);
/* harmony import */ var _add_registry_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-registry.component.css */ 60694);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _shared_components_detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/components/detail/detail.component */ 83968);
/* harmony import */ var _models_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../models/registry */ 47092);
/* harmony import */ var _services_registry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/registry.service */ 84097);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/config.service */ 70946);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/category.service */ 54655);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_validators_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/validators/validators */ 52045);












let AddRegistryComponent = class AddRegistryComponent {
    constructor(formBuilder, cService, config, rService, modalService) {
        this.formBuilder = formBuilder;
        this.cService = cService;
        this.config = config;
        this.rService = rService;
        this.modalService = modalService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.listCategories = [];
        this.loadCategories = false;
        // Obtengo el locale para los calendarios
        this.locale = this.config.locale;
    }
    ngOnInit() {
        // Si estoy editando
        if (this.registrySelected) {
            // Validamos la cantidad
            // Ponemos el id tambien para poder recogerlo despues
            this.formRegistry = this.formBuilder.group({
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.registrySelected.description, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
                date: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(new Date(this.registrySelected.date)),
                type: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.registrySelected.type),
                idCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.registrySelected.idCategory),
                quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.registrySelected.quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, src_app_validators_validators__WEBPACK_IMPORTED_MODULE_7__.quantityValid]),
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.registrySelected.id),
                user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.registrySelected.user)
            });
        }
        else {
            // Nuevo registro
            // Validamos la cantidad
            this.formRegistry = this.formBuilder.group({
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
                date: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(new Date()),
                type: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.typeRegistry),
                idCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(),
                quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, src_app_validators_validators__WEBPACK_IMPORTED_MODULE_7__.quantityValid])
            });
        }
        // Obtengo las categorias
        this.cService.getCategories().subscribe(listCategories => {
            this.listCategories = listCategories;
            this.loadCategories = true;
        }, error => {
            console.error(error);
            this.loadCategories = true;
        });
    }
    /**
     * Obtengo el formcontrol quantity
     */
    get quantity() {
        return this.formRegistry.get('quantity');
    }
    /**
     * Obtengo el formcontrol type
     */
    get type() {
        return this.formRegistry.get('type');
    }
    /**
     * Obtengo el formcontrol idCategory
     */
    get idCategory() {
        return this.formRegistry.get('idCategory');
    }
    /**
     * Cierro el detalle
     * @param $event Estado de la ventana
     */
    closeDetail($event) {
        this.close.emit($event);
    }
    /**
     * Añade el registro
     */
    addRegistry() {
        // Obtengo el registro
        let registry = new _models_registry__WEBPACK_IMPORTED_MODULE_3__.Registry(this.formRegistry.value);
        if (this.registrySelected) {
            // Editar registro
            this.rService.editRegistry(registry).then(() => {
                this.modalService.open(this.modal_success).result.then(() => {
                    this.parentDetail.closeDetail();
                });
            }, error => {
                console.error(error);
                this.modalService.open(this.modal_error);
            });
        }
        else {
            // Crear registro
            this.rService.addRegistry(registry).then(() => {
                this.modalService.open(this.modal_success).result.then(() => {
                    this.parentDetail.closeDetail();
                });
            }, error => {
                console.error(error);
                this.modalService.open(this.modal_error);
            });
        }
    }
};
AddRegistryComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_6__.CategoryService },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService },
    { type: _services_registry_service__WEBPACK_IMPORTED_MODULE_4__.RegistryService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal }
];
AddRegistryComponent.propDecorators = {
    modal_success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["modal_success", { static: false },] }],
    modal_error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["modal_error", { static: false },] }],
    parentDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_shared_components_detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent, { static: false },] }],
    registrySelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    typeRegistry: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }]
};
AddRegistryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-registry',
        template: _raw_loader_add_registry_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_registry_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddRegistryComponent);



/***/ }),

/***/ 43646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.component.html */ 97911);
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.css */ 66345);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ 37556);
/* harmony import */ var _services_registry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/registry.service */ 84097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);






let HeaderComponent = class HeaderComponent {
    constructor(rService, authService) {
        this.rService = rService;
        this.authService = authService;
        this.showDetail = false;
        this.typeRegistry = '';
    }
    ngOnInit() {
        this.rService.currentRegistry.subscribe(selectRegistry => {
            this.openEditDetail(selectRegistry);
        });
    }
    openDetail(type) {
        this.typeRegistry = type;
        this.showDetail = true;
    }
    openEditDetail(registry) {
        this.registrySelected = registry;
        this.showDetail = true;
    }
    closeDetail($event) {
        this.showDetail = $event;
        this.registrySelected = null;
    }
    logout() {
        this.authService.logout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_registry_service__WEBPACK_IMPORTED_MODULE_3__.RegistryService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderComponent);



/***/ }),

/***/ 47143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.component.html */ 17104);
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ 16545);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/config.service */ 70946);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);








let LoginComponent = class LoginComponent {
    constructor(formBuiler, config, authService, route) {
        this.formBuiler = formBuiler;
        this.config = config;
        this.authService = authService;
        this.route = route;
        // Creo el formgroup
        this.formLogin = this.formBuiler.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
        });
        this.showLoginError = false;
    }
    ngOnInit() {
    }
    /**
     * Compruebo si el login es correcto
     */
    checkLogin() {
        // Cojo el email y el pass
        let email = this.formLogin.get('email').value;
        let pass = this.formLogin.get('pass').value;
        // Nos logueamos 
        this.authService.login(email, pass).then(state => {
            console.log(state);
            this.route.navigate(['/resume']);
        }, error => {
            console.error(error);
            this.showLoginError = true;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginComponent);



/***/ }),

/***/ 96837:
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeComponent": () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_resume_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./resume.component.html */ 80233);
/* harmony import */ var _resume_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resume.component.css */ 55139);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/config.service */ 70946);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/category.service */ 54655);
/* harmony import */ var _services_registry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/registry.service */ 84097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ 91074);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ 9857);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 29114);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ 56766);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ 16549);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ 57387);









let ResumeComponent = class ResumeComponent {
    constructor(rService, cService, config, modalService) {
        this.rService = rService;
        this.cService = cService;
        this.config = config;
        this.modalService = modalService;
        this.listRegistriesOriginal = [];
        this.listRegistriesFiltered = [];
        this.showResume = false;
        this.total = 0;
        this.page = 1;
        // Obtengo el numero de registros de la configuracion
        this.itemsRegistries = this.config.itemsRegistriesPage;
    }
    ngOnInit() {
        // Obtengo los registros
        this.rService.getRegistries().subscribe(list => {
            // Ordeno las listas al reves y las clono
            this.listRegistriesOriginal = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__.default)((0,lodash_es__WEBPACK_IMPORTED_MODULE_6__.default)(list, r => r.date).reverse());
            this.listRegistriesFiltered = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__.default)((0,lodash_es__WEBPACK_IMPORTED_MODULE_6__.default)(list, r => r.date).reverse());
            // Completo las categorias
            this.completeCategories();
            // Sumo el total de los registros
            this.sumTotal();
            this.showResume = true;
        }, error => {
            console.error('Error al recoger los registros:' + error);
        });
    }
    /**
     * Completa las categorias de los posts
     */
    completeCategories() {
        // Obtengo todas las categorias
        this.cService.getCategories().subscribe(categories => {
            // Recorro la lista de registros
            (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__.default)(this.listRegistriesFiltered, r => {
                // Busco la categoria
                const category = (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__.default)(categories, c => c.id === r.idCategory);
                // Si esta lo asocio
                if (category) {
                    r.category = category;
                }
            });
            // Clono de nuevo para actualizar el estado de la lista
            this.listRegistriesOriginal = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__.default)(this.listRegistriesFiltered);
        }, error => {
            console.error('Error al recoger las categorias:' + error);
        });
    }
    /**
     * Obtenga la suma total de los registros
     */
    sumTotal() {
        this.total = (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__.default)(this.listRegistriesFiltered, r => {
            // Convierto la cantidad a numero
            let quantity = (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__.default)(r.quantity);
            // Si es un gasto, multiplico por -1
            if (r.type === 'expense') {
                quantity = quantity * -1;
            }
            return quantity;
        });
    }
    /**
     * Elimino un registro
     * @param registry Registro a eliminar
     */
    removeRegistry(registry) {
        // Abro el modal de confirmacion
        this.modalService.open(this.modal_confirm_delete).result.then(result => {
            // Si dice que si
            if (result === 'yes') {
                // Elimino el registro
                this.rService.removeRegistry(registry.id).then(() => {
                    this.modalService.open(this.modal_success);
                }, error => {
                    console.error(error);
                    this.modalService.open(this.modal_error);
                });
            }
        });
    }
    /**
     * Manda el registro a la cabecera para que lo abra
     * @param registry Registro a mandar
     */
    openEditDetail(registry) {
        this.rService.selectRegistry(registry);
    }
    /**
     * Devuelve el resultado del filtro
     * @param $event Lista de registros filtrados
     */
    filter($event) {
        this.listRegistriesFiltered = $event;
        // Clculo el total de nuevo
        this.sumTotal();
    }
};
ResumeComponent.ctorParameters = () => [
    { type: _services_registry_service__WEBPACK_IMPORTED_MODULE_4__.RegistryService },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal }
];
ResumeComponent.propDecorators = {
    modal_confirm_delete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["modal_confirm_delete", { static: false },] }],
    modal_success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["modal_success", { static: false },] }],
    modal_error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["modal_error", { static: false },] }]
};
ResumeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-resume',
        template: _raw_loader_resume_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_resume_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResumeComponent);



/***/ }),

/***/ 14465:
/*!************************************!*\
  !*** ./src/app/models/category.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Category": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ 17842);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ 82560);

class Category {
    constructor(data) {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this, 'data', data);
    }
    get id() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.default)(this, 'data.id');
    }
    set id(value) {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this, 'data.id', value);
    }
    get name() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.default)(this, 'data.name');
    }
    set name(value) {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this, 'data.name', value);
    }
    get user() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.default)(this, 'data.user');
    }
    set user(value) {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this, 'data.user', value);
    }
    getData() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.default)(this, 'data');
    }
}


/***/ }),

/***/ 47092:
/*!************************************!*\
  !*** ./src/app/models/registry.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Registry": () => (/* binding */ Registry)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ 17842);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ 82560);

class Registry {
    constructor(data) {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this, 'data', data);
    }
    get id() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.default)(this, 'data.id');
    }
    set id(value) {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this, 'data.id', value);
    }
    get description() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.default)(this, 'data.description');
    }
    set description(value) {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this, 'data.description', value);
    }
    get idCategory() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.default)(this, 'data.idCategory');
    }
    set idCategory(value) {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this, 'data.idCategory', value);
    }
    get category() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.default)(this, 'data.category');
    }
    set category(value) {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this, 'data.category', value);
    }
    get date() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.default)(this, 'data.date');
    }
    set date(value) {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this, 'data.date', value);
    }
    get type() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.default)(this, 'data.type');
    }
    set type(value) {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this, 'data.type', value);
    }
    get quantity() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.default)(this, 'data.quantity');
    }
    set quantity(value) {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this, 'data.quantity', value);
    }
    get user() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.default)(this, 'data.user');
    }
    set user(value) {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this, 'data.user', value);
    }
    getData() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.default)(this, 'data');
    }
}


/***/ }),

/***/ 74929:
/*!*****************************************!*\
  !*** ./src/app/pipes/translate.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslatePipe": () => (/* binding */ TranslatePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/translate.service */ 21662);



let TranslatePipe = class TranslatePipe {
    constructor(translate) {
        this.translate = translate;
    }
    transform(value) {
        return this.translate.getTranslate(value) ? this.translate.getTranslate(value) : '';
    }
};
TranslatePipe.ctorParameters = () => [
    { type: _services_translate_service__WEBPACK_IMPORTED_MODULE_0__.TranslateService }
];
TranslatePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'translate'
    })
], TranslatePipe);



/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/auth */ 36801);




let AuthService = class AuthService {
    constructor(afAuth, route) {
        this.afAuth = afAuth;
        this.route = route;
        this._isLoggued = false;
        // Compruebo si estoy subscrito
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this._isLoggued = true;
                this.route.navigate(['/resume']);
            }
        });
    }
    set isLoggued(value) {
        this._isLoggued = value;
    }
    /**
     * Compruebo si estoy logueado
     */
    isAuthenticated() {
        return this._isLoggued;
    }
    /**
     * Me logueo dado un email y contraseña, devuelve una promesa
     * @param email email del usuario
     * @param pass pass del usuario
     */
    login(email, pass) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
    }
    /**
     * Nos desploguea de la aplicacion
     */
    logout() {
        this.afAuth.auth.signOut();
        this._isLoggued = false;
        this.route.navigate(['/login']);
    }
    /**
     * Comprueba si el usuario existe, dado un email
     * @param email email del usuario a comprobar
     */
    checkAccount(email) {
        return this.afAuth.auth.isSignInWithEmailLink(email);
    }
    /**
     * Devuelve el usuario actual
     */
    currentUser() {
        if (this.afAuth.auth.currentUser) {
            return this.afAuth.auth.currentUser.email;
        }
        return '';
    }
    /**
     * Crea una cuenta dado un email y un pass. Devuelve una promesa
     * @param email email del usuario a crear
     * @param pass pass del usuario a crear
     */
    createAccount(email, pass) {
        // Chequeo si la cuenta existe
        if (this.checkAccount(email)) {
            return new Promise((resolve, reject) => {
                reject('El usuario ya existe');
            });
        }
        else {
            // Creo la cuenta y devuelvo una promesa con el estado
            return this.afAuth.auth.createUserWithEmailAndPassword(email, pass).then(authState => {
                return authState;
            }).catch(error => {
                throw error;
            });
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 54655:
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ 39544);




let CategoryService = class CategoryService {
    constructor(afd, authService) {
        this.afd = afd;
        this.authService = authService;
    }
    /**
     * Obtiene todas las categorias del usuario actual
     */
    getCategories() {
        return this.afd.list('categories', ref => ref.orderByChild('user').equalTo(this.authService.currentUser())).valueChanges();
    }
    /**
     * Añade una categoria
     * @param category Categoria a añadir
     */
    addCategory(category) {
        // Devolvemos una promesa
        return new Promise((resolve, reject) => {
            try {
                // Obtengo la referencia de los categorias
                let categoryRef = this.afd.database.ref('categories');
                // añado una nueva categoria
                let newCategory = categoryRef.push();
                // Obtengo el id del nuevo registro
                category.id = newCategory.key;
                // Añado elusuario logueado
                category.user = this.authService.currentUser();
                // Obtengo la referencia del registro mas su id
                let categoryRefId = this.afd.database.ref('categories/' + category.id);
                // Seteo el valor
                categoryRefId.set(category.getData());
                // Indico que todo se resolvio bien
                resolve(true);
            }
            catch (error) {
                // Hubo un error
                reject('Error al añadir una categoria');
            }
        });
    }
    /**
     * Edita una categoria
     * @param category Categoria a editar
     */
    editCategory(category) {
        return this.afd.object('/categories/' + category.id).set(category.getData());
    }
    /**
     * Elimina una categoria
     * @param idCategory id de la categoria a eliminar
     */
    removeCategory(idCategory) {
        return this.afd.object('/categories/' + idCategory).remove();
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
CategoryService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ 70946:
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ 82560);




let ConfigService = class ConfigService {
    constructor(http) {
        this.http = http;
    }
    get locale() {
        return this._locale;
    }
    set locale(value) {
        this._locale = value;
    }
    /**
     * Obtiene toda la informacion del fichero app-config.json
     */
    getData() {
        return new Promise((resolve, reject) => {
            this.http.get('assets/config/app-config.json')
                .subscribe(data => {
                this._data = data;
                resolve(true);
            }, error => {
                console.log('Error al obtener la configuracion: ' + error);
                reject(true);
            });
        });
    }
    /**
    * Obtiene toda la informacion de las fechas
    */
    getDateConfig() {
        return new Promise((resolve, reject) => {
            this.http.get('assets/config/date-' + navigator.language + '.json')
                .subscribe(data => {
                this.locale = data;
                resolve(true);
            }, error => {
                console.log('Error al obtener la configuracion: ' + error);
                reject(true);
            });
        });
    }
    /* Valores */
    get logoLogin() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this._data, 'logoLogin');
    }
    get itemsCategoriesPage() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this._data, 'itemsCategoriesPage');
    }
    get itemsRegistriesPage() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this._data, 'itemsRegistriesPage');
    }
    get yearStart() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this._data, 'yearStart');
    }
    get yearEnd() {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(this._data, 'yearEnd');
    }
};
ConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ConfigService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ConfigService);



/***/ }),

/***/ 54881:
/*!*************************************************!*\
  !*** ./src/app/services/login-guard.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGuard": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);




let LoginGuard = class LoginGuard {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    canActivate() {
        // Sino estoy logueado, vuelvo al login
        if (!this.authService.isAuthenticated()) {
            console.log("No estas logueado");
            this.route.navigate(['/login']);
            return false;
        }
        return true;
    }
};
LoginGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
LoginGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LoginGuard);



/***/ }),

/***/ 81742:
/*!****************************************************!*\
  !*** ./src/app/services/redirect-guard.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectGuard": () => (/* binding */ RedirectGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 37556);




let RedirectGuard = class RedirectGuard {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    canActivate() {
        // Si estoy logueado, vuelvo al resumen
        if (this.authService.isAuthenticated()) {
            console.log("Estas logueado");
            this.route.navigate(['/resume']);
            return false;
        }
        return true;
    }
};
RedirectGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
RedirectGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RedirectGuard);



/***/ }),

/***/ 84097:
/*!**********************************************!*\
  !*** ./src/app/services/registry.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistryService": () => (/* binding */ RegistryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ 39544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79765);






let RegistryService = class RegistryService {
    constructor(afd, authService) {
        this.afd = afd;
        this.authService = authService;
        // Creo el subject
        this.registrySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        // Creo el observable
        this.currentRegistry = this.registrySubject.asObservable();
    }
    /**
     * Manda a quien esta subscrito el registro
     * @param registry Registro a mandar
     */
    selectRegistry(registry) {
        this.registrySubject.next(registry);
    }
    /**
     * Obtiene todos los registros del actual usuario
     */
    getRegistries() {
        return this.afd.list('registries', ref => ref.orderByChild('user').equalTo(this.authService.currentUser())).valueChanges();
    }
    /**
     * Añade un registro
     * @param registry Registro a añadir
     */
    addRegistry(registry) {
        // Devuelve una promesa
        return new Promise((resolve, reject) => {
            try {
                // Obtengo la referencia de los registros
                let registryRef = this.afd.database.ref('registries');
                // añado un nuevo registro
                let newRegistry = registryRef.push();
                // Obtengo el id del nuevo registro
                registry.id = newRegistry.key;
                // Añado elusuario logueado
                registry.user = this.authService.currentUser();
                // Formateo la fecha
                registry.date = moment__WEBPACK_IMPORTED_MODULE_1__(registry.date).format('YYYY-MM-DD');
                // Obtengo la referencia del registro mas su id
                let registryRefId = this.afd.database.ref('registries/' + registry.id);
                // Seteo el valor
                registryRefId.set(registry.getData());
                // Indico que todo se resolvio bien
                resolve(true);
            }
            catch (error) {
                // Hubo un error
                reject('Error al añadir el registro');
            }
        });
    }
    /**
     * Edito un registro
     * @param registry registro a editar
     */
    editRegistry(registry) {
        // Devuelvo una promesa
        return new Promise((resolve, reject) => {
            try {
                // Formateo la fecha de nuevo
                registry.date = moment__WEBPACK_IMPORTED_MODULE_1__(registry.date).format('YYYY-MM-DD');
                // Obtengo la referencia del registro con su id y seteo el nuevo valor
                this.afd.object("/registries/" + registry.id).set(registry.getData());
                // Todo bien
                resolve(true);
            }
            catch (error) {
                // Hubo un error
                reject('Error al editar el registro');
            }
        });
    }
    /**
     * Elimina un registro
     * @param idRegistry id del registro a eliminar
     */
    removeRegistry(idRegistry) {
        // Obtengo la referencia del registro con su id y lo elimina
        return this.afd.object('/registries/' + idRegistry).remove();
    }
};
RegistryService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__.AngularFireDatabase },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
RegistryService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], RegistryService);



/***/ }),

/***/ 21662:
/*!***********************************************!*\
  !*** ./src/app/services/translate.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateService": () => (/* binding */ TranslateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



let TranslateService = class TranslateService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Obtengo las traducciones, depende del lenguaje del navegador
     */
    getData() {
        return new Promise((resolve, reject) => {
            this.http.get('assets/translations/' + navigator.language + '.json')
                .subscribe(data => {
                this._data = data;
                resolve(true);
            }, error => {
                console.log('Error al recuperar las traducciones: ' + error);
                reject(true);
            });
        });
    }
    /**
     * Obtengo una traduccion en concreto
     */
    getTranslate(phrase) {
        return this._data[phrase];
    }
};
TranslateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
TranslateService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], TranslateService);



/***/ }),

/***/ 83968:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/detail/detail.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./detail.component.html */ 41114);
/* harmony import */ var _detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.component.css */ 82828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 17238);





let DetailComponent = class DetailComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.showDetail = true;
    }
    ngOnInit() {
    }
    /**
     * Cierra el detalle
     */
    closeDetail() {
        // Marco que ya no se vea el detalle
        this.showDetail = false;
        // doy tiempo a la ventana para que se cierre
        setTimeout(() => {
            // Emito el evento para que se cierre
            this.close.emit(false);
        }, 600);
    }
};
DetailComponent.ctorParameters = () => [];
DetailComponent.propDecorators = {
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
DetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('slide', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ transform: 'translateX(100%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('600ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ transform: 'translateX(0%)' }))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('600ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ transform: 'translateX(100%)' }))
                ])
            ])
        ],
        selector: 'app-detail',
        template: _raw_loader_detail_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_detail_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetailComponent);



/***/ }),

/***/ 88348:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterComponent": () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_filter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./filter.component.html */ 78854);
/* harmony import */ var _filter_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.component.css */ 10840);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/config.service */ 70946);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/category.service */ 54655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ 57387);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 69180);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);








let FilterComponent = class FilterComponent {
    constructor(cService, config) {
        this.cService = cService;
        this.config = config;
        this.listFiltered = [];
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // Inicializo con valores iniciales
        this.filterForm = {
            'idCategory': null,
            'dateStart': null,
            'dateEnd': null,
            'year': (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__.default)(moment__WEBPACK_IMPORTED_MODULE_4__().format("YYYY")),
            'quantityMin': null,
            'quantityMax': null
        };
        this.locale = this.config.locale;
        this.years = [];
    }
    ngOnInit() {
        // Obtengo las categorias
        this.cService.getCategories().subscribe(categories => {
            this.listCategories = categories;
        }, error => {
            console.error("Error al recuperar las categorias: " + error);
        });
        // Relleno los años
        if (this.showYears) {
            this.fillYears();
        }
    }
    /**
     * Relleno los años, obtengo el año inicial y el año final de la configuracion
     */
    fillYears() {
        for (let year = this.config.yearStart; year <= this.config.yearEnd; year++) {
            this.years.push(year);
        }
    }
    /**
     * Filtra los datos
     */
    filterData() {
        // Reseteo la lista
        this.listFiltered = this.listOriginal;
        // Cantidad minima y cantidad maxima
        if (this.filterForm.quantityMin && this.filterForm.quantityMax) {
            this.listFiltered = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__.default)(this.listFiltered, r => {
                let q = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__.default)(r.quantity);
                if (r.type === 'expense') {
                    q = q * -1;
                }
                return q >= (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__.default)(this.filterForm.quantityMin) && q <= (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__.default)(this.filterForm.quantityMax);
            });
            // Cantidad minima
        }
        else if (this.filterForm.quantityMin) {
            this.listFiltered = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__.default)(this.listFiltered, r => {
                let q = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__.default)(r.quantity);
                if (r.type === 'expense') {
                    q = q * -1;
                }
                return q >= (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__.default)(this.filterForm.quantityMin);
            });
            // Cantidad maxima
        }
        else if (this.filterForm.quantityMax) {
            this.listFiltered = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__.default)(this.listFiltered, r => {
                let q = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__.default)(r.quantity);
                if (r.type === 'expense') {
                    q = q * -1;
                }
                return q <= (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__.default)(this.filterForm.quantityMax);
            });
        }
        // Fecha inicio y fecha fin
        if (this.filterForm.dateStart && this.filterForm.dateEnd) {
            this.listFiltered = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__.default)(this.listFiltered, r => {
                return moment__WEBPACK_IMPORTED_MODULE_4__(r.date, 'YYYY-MM-DD').isSameOrAfter(moment__WEBPACK_IMPORTED_MODULE_4__(this.filterForm.dateStart, 'YYYY-MM-DD')) &&
                    moment__WEBPACK_IMPORTED_MODULE_4__(r.date, 'YYYY-MM-DD').isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_4__(this.filterForm.dateEnd, 'YYYY-MM-DD'));
            });
            // Fecha inicio
        }
        else if (this.filterForm.dateStart) {
            this.listFiltered = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__.default)(this.listFiltered, r => {
                return moment__WEBPACK_IMPORTED_MODULE_4__(r.date, 'YYYY-MM-DD').isSameOrAfter(moment__WEBPACK_IMPORTED_MODULE_4__(this.filterForm.dateStart, 'YYYY-MM-DD'));
            });
            // Fecha fin
        }
        else if (this.filterForm.dateEnd) {
            this.listFiltered = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__.default)(this.listFiltered, r => {
                return moment__WEBPACK_IMPORTED_MODULE_4__(r.date, 'YYYY-MM-DD').isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_4__(this.filterForm.dateEnd, 'YYYY-MM-DD'));
            });
        }
        // Categoria
        if (this.filterForm.idCategory) {
            this.listFiltered = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__.default)(this.listFiltered, r => {
                return r.idCategory === this.filterForm.idCategory;
            });
        }
        // Años
        if (this.filterForm.year) {
            this.listFiltered = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__.default)(this.listFiltered, r => {
                return moment__WEBPACK_IMPORTED_MODULE_4__(r.date).year() === (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__.default)(this.filterForm.year);
            });
        }
        // Envio la lista filtrada
        this.filter.emit(this.listFiltered);
    }
};
FilterComponent.ctorParameters = () => [
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService }
];
FilterComponent.propDecorators = {
    showYears: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    showDateStartEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    listOriginal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
FilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-filter',
        template: _raw_loader_filter_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_filter_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FilterComponent);



/***/ }),

/***/ 32925:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spinner.component.html */ 79934);
/* harmony import */ var _spinner_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.component.css */ 49710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let SpinnerComponent = class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
SpinnerComponent.ctorParameters = () => [];
SpinnerComponent.propDecorators = {
    hideSpinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
SpinnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-spinner',
        template: _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spinner_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpinnerComponent);



/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pipes/translate.pipe */ 74929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ 88598);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/spinner/spinner.component */ 32925);
/* harmony import */ var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/detail/detail.component */ 83968);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filter/filter.component */ 88348);


// Angular



// Module

// Components



let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_8__.CalendarModule
        ],
        declarations: [
            _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent,
            _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent,
            _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_3__.FilterComponent,
            _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe
        ],
        exports: [
            _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent,
            _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent,
            _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_3__.FilterComponent,
            _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe
        ]
    })
], SharedModule);



/***/ }),

/***/ 52045:
/*!******************************************!*\
  !*** ./src/app/validators/validators.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categoryExists": () => (/* binding */ categoryExists),
/* harmony export */   "quantityValid": () => (/* binding */ quantityValid),
/* harmony export */   "confirmPassword": () => (/* binding */ confirmPassword)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ 56766);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ 64256);

/**
 * Valida si la categoria existe
 * @param listCategories lista de categorias base
 */
function categoryExists(listCategories) {
    // Lo retorno de esta manera para poder devolver lista de categorias
    return (control) => {
        // Busco la categoria
        let category = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(listCategories, c => c.name.trim().toLowerCase() === control.value.trim().toLowerCase());
        // Si existe la categoria, devolvemos el error
        if (category) {
            return {
                "existsCategory": true
            };
        }
        // Todo bien
        return null;
    };
}
/**
 * Valida que la cantidad sea un numero y no sea un 0
 * @param control Control a validar
 */
function quantityValid(control) {
    let errors = {};
    // Si el valor es algo que no sea un numero
    if (isNaN(control.value)) {
        errors.isNotNumber = true;
    }
    // Si el valor es 0
    if (control.value === "0") {
        errors.isZero = true;
    }
    // Si esta vacio, todo bien, sino devuelve los errores
    if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.default)(errors)) {
        return null;
    }
    else {
        return errors;
    }
}
/**
 * Valida si las contraseñas coinciden
 * @param controls formgroup donde estan los controles
 */
function confirmPassword(controls) {
    // Cojo los dos controles
    let pass = controls.get('pass').value;
    let confirmPass = controls.get('confirmPass').value;
    // Sino son iguales, devuelvo error
    if (pass !== confirmPass) {
        return {
            "confirmPassword": true
        };
    }
    // Todo bien
    return null;
}


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ 89101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 26431,
	"./af.js": 26431,
	"./ar": 81286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 43160,
	"./ar-ly.js": 43160,
	"./ar-ma": 62551,
	"./ar-ma.js": 62551,
	"./ar-sa": 79989,
	"./ar-sa.js": 79989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 81286,
	"./az": 15887,
	"./az.js": 15887,
	"./be": 14572,
	"./be.js": 14572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 93344,
	"./bm.js": 93344,
	"./bn": 58985,
	"./bn.js": 58985,
	"./bo": 94391,
	"./bo.js": 94391,
	"./br": 46728,
	"./br.js": 46728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 41043,
	"./ca.js": 41043,
	"./cs": 70420,
	"./cs.js": 70420,
	"./cv": 33513,
	"./cv.js": 33513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 47978,
	"./da.js": 47978,
	"./de": 46061,
	"./de-at": 25204,
	"./de-at.js": 25204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 46061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-SG": 84285,
	"./en-SG.js": 84285,
	"./en-au": 25724,
	"./en-au.js": 25724,
	"./en-ca": 10525,
	"./en-ca.js": 10525,
	"./en-gb": 52847,
	"./en-gb.js": 52847,
	"./en-ie": 67216,
	"./en-ie.js": 67216,
	"./en-il": 39305,
	"./en-il.js": 39305,
	"./en-nz": 79130,
	"./en-nz.js": 79130,
	"./eo": 50802,
	"./eo.js": 50802,
	"./es": 40328,
	"./es-do": 45551,
	"./es-do.js": 45551,
	"./es-us": 64790,
	"./es-us.js": 64790,
	"./es.js": 40328,
	"./et": 96389,
	"./et.js": 96389,
	"./eu": 52961,
	"./eu.js": 52961,
	"./fa": 26151,
	"./fa.js": 26151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fo": 37779,
	"./fo.js": 37779,
	"./fr": 28174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 38867,
	"./fr-ch.js": 38867,
	"./fr.js": 28174,
	"./fy": 50452,
	"./fy.js": 50452,
	"./ga": 45014,
	"./ga.js": 45014,
	"./gd": 74127,
	"./gd.js": 74127,
	"./gl": 72124,
	"./gl.js": 72124,
	"./gom-latn": 37953,
	"./gom-latn.js": 37953,
	"./gu": 76604,
	"./gu.js": 76604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 74235,
	"./hi.js": 74235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 37735,
	"./hu.js": 37735,
	"./hy-am": 90402,
	"./hy-am.js": 90402,
	"./id": 59187,
	"./id.js": 59187,
	"./is": 30536,
	"./is.js": 30536,
	"./it": 35007,
	"./it-ch": 94667,
	"./it-ch.js": 94667,
	"./it.js": 35007,
	"./ja": 62093,
	"./ja.js": 62093,
	"./jv": 80059,
	"./jv.js": 80059,
	"./ka": 66870,
	"./ka.js": 66870,
	"./kk": 80880,
	"./kk.js": 80880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 68785,
	"./kn.js": 68785,
	"./ko": 21721,
	"./ko.js": 21721,
	"./ku": 37851,
	"./ku.js": 37851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 40346,
	"./lb.js": 40346,
	"./lo": 93002,
	"./lo.js": 93002,
	"./lt": 64035,
	"./lt.js": 64035,
	"./lv": 56927,
	"./lv.js": 56927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 94173,
	"./mi.js": 94173,
	"./mk": 86320,
	"./mk.js": 86320,
	"./ml": 11705,
	"./ml.js": 11705,
	"./mn": 31062,
	"./mn.js": 31062,
	"./mr": 92805,
	"./mr.js": 92805,
	"./ms": 11341,
	"./ms-my": 59900,
	"./ms-my.js": 59900,
	"./ms.js": 11341,
	"./mt": 37734,
	"./mt.js": 37734,
	"./my": 19034,
	"./my.js": 19034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 46495,
	"./ne.js": 46495,
	"./nl": 70673,
	"./nl-be": 76272,
	"./nl-be.js": 76272,
	"./nl.js": 70673,
	"./nn": 72486,
	"./nn.js": 72486,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 78444,
	"./pl.js": 78444,
	"./pt": 53170,
	"./pt-br": 66117,
	"./pt-br.js": 66117,
	"./pt.js": 53170,
	"./ro": 96587,
	"./ro.js": 96587,
	"./ru": 39264,
	"./ru.js": 39264,
	"./sd": 42135,
	"./sd.js": 42135,
	"./se": 95366,
	"./se.js": 95366,
	"./si": 93379,
	"./si.js": 93379,
	"./sk": 46143,
	"./sk.js": 46143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 21082,
	"./sq.js": 21082,
	"./sr": 91621,
	"./sr-cyrl": 98963,
	"./sr-cyrl.js": 98963,
	"./sr.js": 91621,
	"./ss": 41404,
	"./ss.js": 41404,
	"./sv": 55685,
	"./sv.js": 55685,
	"./sw": 3872,
	"./sw.js": 3872,
	"./ta": 54106,
	"./ta.js": 54106,
	"./te": 39204,
	"./te.js": 39204,
	"./tet": 83692,
	"./tet.js": 83692,
	"./tg": 86361,
	"./tg.js": 86361,
	"./th": 31735,
	"./th.js": 31735,
	"./tl-ph": 96129,
	"./tl-ph.js": 96129,
	"./tlh": 13759,
	"./tlh.js": 13759,
	"./tr": 81644,
	"./tr.js": 81644,
	"./tzl": 90875,
	"./tzl.js": 90875,
	"./tzm": 16878,
	"./tzm-latn": 11041,
	"./tzm-latn.js": 11041,
	"./tzm.js": 16878,
	"./ug-cn": 74357,
	"./ug-cn.js": 74357,
	"./uk": 74810,
	"./uk.js": 74810,
	"./ur": 86794,
	"./ur.js": 86794,
	"./uz": 28966,
	"./uz-latn": 77959,
	"./uz-latn.js": 77959,
	"./uz.js": 28966,
	"./vi": 35386,
	"./vi.js": 35386,
	"./x-pseudo": 23156,
	"./x-pseudo.js": 23156,
	"./yo": 68028,
	"./yo.js": 68028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 89380,
	"./zh-hk.js": 89380,
	"./zh-tw": 96508,
	"./zh-tw.js": 96508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 61249:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 29588:
/*!*****************************************************************************!*\
  !*** ./src/app/components/category/add-category/add-category.component.css ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 18208:
/*!************************************************************!*\
  !*** ./src/app/components/category/category.component.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#categories .category {\r\n    border: 1px solid #000;\r\n    padding: 15px;\r\n}\r\n\r\n#categories .category i {\r\n    cursor: pointer;\r\n    margin-left: 10px;\r\n    font-size: 25px;\r\n}\r\n\r\n#categories .category i:hover {\r\n    color: #0069d9;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXRlZ29yaWVzIC5jYXRlZ29yeSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuI2NhdGVnb3JpZXMgLmNhdGVnb3J5IGkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbiNjYXRlZ29yaWVzIC5jYXRlZ29yeSBpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA2OWQ5O1xyXG59Il19 */");

/***/ }),

/***/ 33553:
/*!************************************************************************!*\
  !*** ./src/app/components/create-account/create-account.component.css ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 13156:
/*!************************************************************!*\
  !*** ./src/app/components/graphics/graphics.component.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFwaGljcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 60694:
/*!***************************************************************************!*\
  !*** ./src/app/components/header/add-registry/add-registry.component.css ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcmVnaXN0cnkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 66345:
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n#header {\r\n    background: #2764a5;\r\n    min-height: 50px;\r\n}\r\n\r\n#header .router-link-active{\r\n    background: #000;\r\n    border-radius: 4px;\r\n}\r\n\r\n#header nav {\r\n    background: #2764a5;\r\n}\r\n\r\n#header .nav-link{\r\n    cursor: pointer;\r\n}\r\n\r\n#header nav li a{\r\n    color: #FFF;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyNzY0YTU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4jaGVhZGVyIC5yb3V0ZXItbGluay1hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4jaGVhZGVyIG5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjc2NGE1O1xyXG59XHJcblxyXG4jaGVhZGVyIC5uYXYtbGlua3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2hlYWRlciBuYXYgbGkgYXtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59Il19 */");

/***/ }),

/***/ 16545:
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#login{\r\n    border-radius: 4px;\r\n    background: #FFF;\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dpbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ 55139:
/*!********************************************************!*\
  !*** ./src/app/components/resume/resume.component.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#resume .date-actions{\r\n    background: #efefef;\r\n    padding: 15px\r\n}\r\n#resume .date-actions i{\r\n    cursor: pointer;\r\n    margin-left: 10px;\r\n    font-size: 25px;\r\n}\r\n#resume .date-actions i:hover{\r\n    color: #0069d9;\r\n}\r\n#resume .title-field{\r\n    color: #cccccc;\r\n}\r\n#resume .registry .rounded-left{\r\n    border-top-left-radius: 0px !important;\r\n}\r\n#resume .registry .rounded-right{\r\n    border-top-right-radius: 0px !important;\r\n}\r\n#resume .total{\r\n    text-align: center;\r\n    border-radius: 4px;\r\n    font-size: 36px;\r\n    padding: 10px;\r\n    background: #efefef;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CO0FBQ0o7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDO0FBR0E7SUFDSSx1Q0FBdUM7QUFDM0M7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7QUFDdkIiLCJmaWxlIjoicmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVzdW1lIC5kYXRlLWFjdGlvbnN7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgcGFkZGluZzogMTVweFxyXG59XHJcbiNyZXN1bWUgLmRhdGUtYWN0aW9ucyBpe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbiNyZXN1bWUgLmRhdGUtYWN0aW9ucyBpOmhvdmVye1xyXG4gICAgY29sb3I6ICMwMDY5ZDk7XHJcbn1cclxuXHJcbiNyZXN1bWUgLnRpdGxlLWZpZWxke1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbiNyZXN1bWUgLnJlZ2lzdHJ5IC5yb3VuZGVkLWxlZnR7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbiNyZXN1bWUgLnJlZ2lzdHJ5IC5yb3VuZGVkLXJpZ2h0e1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jcmVzdW1lIC50b3RhbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59Il19 */");

/***/ }),

/***/ 82828:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/detail/detail.component.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#detail{\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    background: #FFF;\r\n    padding: 15px;\r\n    border: 1px solid #000;\r\n    z-index: 10;\r\n    height: 100%;\r\n}\r\n\r\n#detail .close{\r\n    font-size: 26px;\r\n    cursor: pointer;\r\n}\r\n\r\n.overlay{\r\n    z-index: 2;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: hsla(0, 0%, 100%, .6);\r\n    cursor: default; \r\n}\r\n\r\n@media (min-width: 992px){\r\n    #detail{\r\n        width: 40%;\r\n    }\r\n}\r\n\r\n@media (max-width: 992px){\r\n    #detail{\r\n        width: 100%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGV0YWlse1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2RldGFpbCAuY2xvc2V7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5vdmVybGF5e1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIC42KTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDsgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICAjZGV0YWlse1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAjZGV0YWlse1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 10840:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 49710:
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".overlay{\r\n    z-index: 2;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: hsla(0, 0%, 100%, .6);\r\n    cursor: default; \r\n}\r\n\r\n.spinner {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1Q7QUFDSiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheXtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAuNik7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IFxyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXHJcbn0iXX0= */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container bg-white\">\n\n  <!-- Cabecera, solo aparece cuando estamos logueados -->\n  <div class=\"row mt-4\" *ngIf=\"authService.isAuthenticated()\">\n    <div class=\"col-12\">\n      <app-header></app-header>\n    </div>\n  </div>\n\n  <!-- Contenido, cuando no estamos logueados, aparece un margen superior -->\n  <div class=\"row\" [ngClass]=\"{'mt-4': !authService.isAuthenticated()}\">\n    <div class=\"col-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ 45772:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/add-category/add-category.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-detail (close)=\"closeDetail($event)\">\n\n  <h1 detail-title>{{(categoryEdit ? 'label.edit.category' : 'label.add.category' ) | translate}}</h1>\n\n  <form detail-content [formGroup]=\"formCategory\" (ngSubmit)=\"addCategory()\">\n    <div class=\"row form-group\">\n      <div class=\"col-12\">\n        <label for=\"name\">{{'label.name' | translate}}</label>\n        <input type=\"text\" name=\"name\" formControlName=\"name\" class=\"form-control\" id=\"name\"\n          [ngClass]=\"{'is-valid': name.dirty && !name.errors, 'is-invalid': name.dirty && name.errors}\">\n        <div class=\"valid-feedback\">\n          <span>{{'label.correct' | translate}}</span>\n        </div>\n        <div class=\"invalid-feedback\">\n          <span *ngIf=\"name.errors?.required\">{{'label.required' | translate}}</span>\n          <span *ngIf=\"name.errors?.existsCategory\">{{'label.exists.category' | translate}}</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <button type=\"submit\" [disabled]=\"formCategory.invalid\"\n          class=\"btn btn-block btn-primary\">{{(categoryEdit ? 'label.edit.category' : 'label.add.category' ) | translate}}</button>\n      </div>\n    </div>\n\n  </form>\n\n\n</app-detail>\n\n<ng-template #modal_success let-modal>\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{'label.success' | translate}}</h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    {{(categoryEdit ? 'label.edit.category.success' : 'label.add.category.success') | translate}}\n  </div>\n\n</ng-template>\n\n<ng-template #modal_error let-modal>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{'label.error' | translate}}</h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    {{(categoryEdit ? 'label.edit.category.error' : 'label.add.category.error') | translate}}\n  </div>\n</ng-template>");

/***/ }),

/***/ 96039:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\" id=\"categories\" *ngIf=\"showCategories\">\n  <div class=\"col-12 mt-4 mb-4\">\n\n    <div class=\"row\">\n      <div class=\"col-12 mb-4\">\n        <button type=\"button\" class=\"btn btn-block btn-primary\"\n          (click)=\"openDetail()\">{{'label.add.category' | translate}}</button>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"listCategories.length === 0\">\n      <div class=\"col-12 text-center\">\n        <span>{{'label.no.categories' | translate}}</span>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"listCategories.length > 0\">\n      <div class=\"col-12\">\n\n        <div class=\"row m-0\"\n          *ngFor=\"let category of listCategories | paginate: { itemsPerPage: itemsPage, currentPage: page}\">\n          <div class=\"col-12 category rounded mb-2\">\n\n            <div class=\"row\">\n              <div class=\"col-xl-11 col-lg-10 col-9\">\n                <span>{{category.name}}</span>\n              </div>\n              <div class=\"col-xl-1 col-lg-2 col-3 text-right\">\n                <i class=\"fa fa-pencil\" (click)=\"openEditDetail(category)\"></i>\n                <i class=\"fa fa-trash\" (click)=\"removeCategory(category)\"></i>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"itemsPage < listCategories.length\">\n          <div class=\"col-12 text-center\">\n            <pagination-controls (pageChange)=\"page = $event\" [previousLabel]=\"'label.previous' | translate\"\n              [nextLabel]=\"'label.next' | translate\"></pagination-controls>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<app-spinner [hideSpinner]=\"showCategories\"></app-spinner>\n\n<app-add-category *ngIf=\"showDetail\" \n  [categoryEdit]=\"categorySelected\"\n  [listCategories]=\"listCategories\" \n  (close)=\"closeDetail($event)\">\n</app-add-category>\n\n<ng-template #modal_confirm_delete let-modal>\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{'label.confirm' | translate}}</h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.close('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    {{'label.confirm.delete.category' | translate}}\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('yes')\">{{'label.yes' | translate}}</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('no')\">{{'label.no' | translate}}</button>\n  </div>\n\n</ng-template>\n\n<ng-template #modal_success let-modal>\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{'label.success' | translate}}</h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    {{'label.delete.category.success' | translate}}\n  </div>\n\n</ng-template>\n\n\n<ng-template #modal_error let-modal>\n\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">{{'label.error' | translate}}</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      {{'label.delete.category.error' | translate}}\n    </div>\n  \n  </ng-template>");

/***/ }),

/***/ 19760:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-account/create-account.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row mt-4 mb-4\">\n  <div class=\"col-12\">\n\n    <!-- Muestra el error el error del usuario -->\n    <div class=\"row\" *ngIf=\"showCreateUserError\">\n      <div class=\"col-12\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <strong>{{'label.create.user.error' | translate}}</strong>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <form [formGroup]=\"formCreateAccount\" (ngSubmit)=\"addUser()\">\n\n          <!-- Email -->\n          <div class=\"row form-group\">\n            <div class=\"col-12\">\n              <label for=\"email\">{{'label.email' | translate}}</label>\n              <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\"\n                [ngClass]=\"{'is-valid': email.dirty && !email.errors, 'is-invalid': email.dirty && email.errors}\">\n              <div class=\"valid-feedback\">\n                <span>{{'label.correct' | translate}}</span>\n              </div>\n              <div class=\"invalid-feedback\">\n                <span *ngIf=\"email.errors?.email\">{{'label.invalid.email' | translate}}</span>\n                <span *ngIf=\"email.errors?.required\">{{'label.required' | translate}}</span>\n              </div>\n            </div>\n          </div>\n\n          <!-- Password -->\n          <div class=\"row form-group\">\n            <div class=\"col-12\">\n              <label for=\"password\">{{'label.pass' | translate}}</label>\n              <input type=\"password\" formControlName=\"pass\" class=\"form-control\" id=\"pass\"\n                [ngClass]=\"{'is-valid': pass.dirty && !pass.errors}\">\n              <div class=\"valid-feedback\">\n                <span>{{'label.correct' | translate}}</span>\n              </div>\n            </div>\n          </div>\n\n          <!-- Confirmar password -->\n          <div class=\"row form-group\">\n            <div class=\"col-12\">\n              <label for=\"confirm-pass\">{{'label.confirm.pass' | translate}}</label>\n              <input type=\"password\" formControlName=\"confirmPass\" class=\"form-control\" id=\"confirm-pass\"\n                [ngClass]=\"{'is-valid': confirmPass.dirty && !formCreateAccount.errors, 'is-invalid': confirmPass.dirty && (confirmPass.errors || formCreateAccount.errors)}\">\n              <div class=\"valid-feedback\">\n                <span>{{'label.correct' | translate}}</span>\n              </div>\n              <div class=\"invalid-feedback\">\n                <span class=\"d-block\" *ngIf=\"confirmPass.errors?.required\">{{'label.required' | translate}}</span>\n                <span class=\"d-block\" *ngIf=\"formCreateAccount.errors?.confirmPassword\">{{'label.error.confirm' | translate}}</span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row form-group\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-block btn-primary\" [disabled]=\"formCreateAccount.invalid\" type=\"submit\">\n                {{'label.create.user' | translate}}\n              </button>\n            </div>\n          </div>\n\n          <!-- Volver -->\n          <div class=\"row form-group\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-block btn-primary\" [routerLink]=\"['/login']\">\n                {{'label.back' | translate}}\n              </button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n\n\n  </div>\n</div>");

/***/ }),

/***/ 72915:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/graphics/graphics.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\" *ngIf=\"showGraphics\">\n  <div class=\"col-12 mt-4 mb-4\">\n\n    <!-- Filtro -->\n    <div class=\"row\">\n      <div class=\"col-12\">\n          <app-filter \n            [showYears]=\"true\"\n            [listOriginal]=\"listRegistries\" \n            (filter)=\"fillData($event)\"></app-filter>\n      </div>\n    </div>\n\n    <!-- Grafico -->\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <p-chart type=\"bar\" [data]=\"data\" [responsive]=\"true\"></p-chart>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<app-spinner [hideSpinner]=\"showGraphics\"></app-spinner>");

/***/ }),

/***/ 7407:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/add-registry/add-registry.component.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-detail (close)=\"closeDetail($event)\" *ngIf=\"loadCategories\">\n\n  <!-- Titulo -->\n  <h1 detail-title>\n    {{ (registrySelected ? 'label.edit.registry' : (typeRegistry === 'deposit' ? 'label.add.deposit' : 'label.add.expense')) | translate }}\n  </h1>\n\n  <!-- Contenido -->\n  <form detail-content [formGroup]=\"formRegistry\" (ngSubmit)=\"addRegistry()\">\n\n    <!-- Descripcion -->\n    <div class=\"row form-group\">\n      <div class=\"col-12 mb-2\">\n        <label for=\"description\">{{'label.description' | translate}}</label>\n        <input type=\"text\" name=\"descripcion\" formControlName=\"description\" class=\"form-control\" id=\"description\">\n      </div>\n    </div>\n\n    <!-- Fecha -->\n    <div class=\"row form-group\">\n      <div class=\"col-12 mb-2\">\n        <label for=\"date\">{{'label.date' | translate}}</label>\n        <p-calendar inputStyleClass=\"form-control\" name=\"date\" dateFormat=\"dd/mm/yy\" formControlName=\"date\" id=\"date\"\n          [readonlyInput]=\"true\" [locale]=\"locale\"></p-calendar>\n      </div>\n    </div>\n\n    <!-- Tipo registro -->\n    <div class=\"row form-group\" *ngIf=\"registrySelected\">\n      <div class=\"col-12 mb-2\">\n        <label for=\"type\">{{'label.type' | translate}}</label>\n        <select class=\"custom-select\" name=\"type\" id=\"type\" formControlName=\"type\">\n          <option value=\"deposit\" [selected]=\"type.value === 'deposit'\">{{'deposit' | translate}}</option>\n          <option value=\"expense\" [selected]=\"type.value === 'expense'\">{{'expense' | translate}}</option>\n        </select>\n      </div>\n    </div>\n\n    <!-- Categorias -->\n    <div class=\"row form-group\">\n      <div class=\"col-12 mb-2\">\n        <label for=\"category\">{{'label.category' | translate}}</label>\n        <select class=\"custom-select\" name=\"category\" id=\"category\" formControlName=\"idCategory\">\n          <option [value]=\"category.id\" [selected]=\"idCategory.value === category.id\" *ngFor=\"let category of listCategories\">{{category.name}}</option>\n        </select>\n      </div>\n    </div>\n\n    <!-- Cantidad -->\n    <div class=\"row form-group\">\n      <div class=\"col-12 mb-2\">\n        <label for=\"quantity\">{{'label.quantity' | translate}}</label>\n        <input type=\"text\" name=\"quantity\" formControlName=\"quantity\" class=\"form-control\" id=\"quantity\" \n          [ngClass]=\"{'is-valid': quantity.dirty && !quantity.errors, 'is-invalid': quantity.dirty && quantity.errors}\">\n        <div class=\"valid-feedback\">\n          <span>{{'label.correct' | translate}}</span>\n        </div>\n        <div class=\"invalid-feedback\">\n          <span *ngIf=\"quantity.errors?.required\">{{'label.required' | translate}}</span>\n          <span *ngIf=\"quantity.errors?.isNotNumber\">{{'label.is.not.number' | translate}}</span>\n          <span *ngIf=\"quantity.errors?.isZero\">{{'label.is.zero' | translate}}</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row form-group\">\n      <div class=\"col-12\">\n        <button type=\"submit\"\n          class=\"btn btn-block btn-primary mt-4\"> {{ (registrySelected ? 'label.edit.registry' : (typeRegistry === 'deposit' ? 'label.add.deposit' : 'label.add.expense')) | translate }}</button>\n      </div>\n    </div>\n\n  </form>\n\n</app-detail>\n\n<!-- Templates -->\n\n<ng-template #modal_success let-modal>\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{'label.success' | translate}}</h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    {{(registrySelected ? 'label.edit.registry.success' : 'label.add.registry.success') | translate}}\n  </div>\n\n</ng-template>\n\n<ng-template #modal_error let-modal>\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{'label.error' | translate}}</h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    {{(registrySelected ? 'label.edit.registry.error' : 'label.add.registry.error') | translate}}\n  </div>\n</ng-template>");

/***/ }),

/***/ 97911:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\" id=\"header\">\n  <div class=\"col-12\">\n\n    <!-- Nombre de la app -->\n    <div class=\"row\">\n      <div class=\"col-12 text-center text-light mt-4 mb-4\">\n        <h1>{{'label.name.app' | translate}}</h1>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n        <!-- Navbar -->\n        <nav class=\"navbar navbar-expand-sm navbar-light\">\n          <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\"\n            aria-controls=\"collapsibleNavId\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n            <ul class=\"navbar-nav m-auto mt-2 mt-lg-0\">\n              <!-- Link Resume -->\n              <li class=\"nav-item\" [routerLink]=\"['/resume']\" routerLinkActive=\"router-link-active\">\n                <a class=\"nav-link\">{{'label.resume' | translate}} </a>\n              </li>\n              <!-- Abre el detalle de ingresos -->\n              <li class=\"nav-item\" (click)=\"openDetail('deposit')\">\n                <a class=\"nav-link\">{{'label.add.deposit' | translate}}</a>\n              </li>\n              <!-- Abre el detalle de gastos -->\n              <li class=\"nav-item\" (click)=\"openDetail('expense')\">\n                <a class=\"nav-link\">{{'label.add.expense' | translate}} </a>\n              </li>\n              <!-- Link categorias -->\n              <li class=\"nav-item\" [routerLink]=\"['/categories']\" routerLinkActive=\"router-link-active\">\n                <a class=\"nav-link\">{{'label.categories' | translate}}</a>\n              </li>\n              <!-- Link graficos -->\n              <li class=\"nav-item\" [routerLink]=\"['/graphics']\" routerLinkActive=\"router-link-active\">\n                <a class=\"nav-link\">{{'label.graphics' | translate}}</a>\n              </li>\n              <!-- Logout -->\n              <li class=\"nav-item\" (click)=\"logout()\">\n                <a class=\"nav-link\">{{'label.logout' | translate}}</a>\n              </li>\n            </ul>\n          </div>\n        </nav>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!-- Detalle para añadir un registro -->\n<app-add-registry *ngIf=\"showDetail\" \n  [typeRegistry]=\"typeRegistry\"\n  [registrySelected]=\"registrySelected\"\n  (close)=\"closeDetail($event)\">\n</app-add-registry>");

/***/ }),

/***/ 17104:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\" id=\"login\">\n  <div class=\"col-12\">\n\n    <!-- Nombre de la app -->\n    <div class=\"row\">\n      <div class=\"col-12 text-center\">\n        <img width=\"75\" [src]=\"config.logoLogin\" />\n        <span class=\"h1 ml-2\">{{'label.name.app' | translate}}</span>\n      </div>\n    </div>\n\n    <!-- Muestra el error -->\n    <div class=\"row\" *ngIf=\"showLoginError\">\n      <div class=\"col-12\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <strong>{{'label.login.error' | translate}}</strong>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <form [formGroup]=\"formLogin\" (ngSubmit)=\"checkLogin()\">\n\n          <!-- Email -->\n          <div class=\"row form-group\">\n            <div class=\"col-12\">\n              <label for=\"email\">{{'label.email' | translate}}</label>\n              <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\">\n            </div>\n          </div>\n\n          <!-- Password -->\n          <div class=\"row form-group\">\n            <div class=\"col-12\">\n              <label for=\"pass\">{{'label.pass' | translate}}</label>\n              <input type=\"password\" formControlName=\"pass\" class=\"form-control\" id=\"pass\">\n            </div>\n          </div>\n\n          <div class=\"row form-group\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-block btn-primary\" type=\"submit\" [disabled]=\"formLogin.invalid\">\n                {{'label.login' | translate}}\n              </button>\n            </div>\n          </div>\n\n          <!-- Link enlace create account -->\n          <div class=\"row form-group\">\n            <div class=\"col-12\">\n              <a href=\"#\" [routerLink]=\"['/create-account']\">{{'label.create.account' | translate}}</a>\n            </div>\n          </div>\n\n\n        </form>\n      </div>\n    </div>\n\n\n  </div>\n</div>");

/***/ }),

/***/ 80233:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/resume/resume.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\" id=\"resume\" *ngIf=\"showResume\">\n  <div class=\"col-12 mt-4 mb-4\">\n\n    <!-- Filtro -->\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <app-filter [showDateStartEnd]=\"true\" [listOriginal]=\"listRegistriesOriginal\" (filter)=\"filter($event)\">\n        </app-filter>\n      </div>\n    </div>\n\n    <!-- Total -->\n    <div class=\"row no-gutters\">\n      <div class=\"col-12 total mb-4\">\n        <span>{{('label.total' | translate) + ': '}}\n          <span [ngClass]=\"{'text-danger': total < 0, 'text-success': total > 0}\">{{total}} €</span>\n        </span>\n      </div>\n    </div>\n\n    <!-- Sin registros -->\n    <div class=\"row\" *ngIf=\"listRegistriesFiltered.length == 0\">\n      <div class=\"col-12 text-center\">\n        <span>{{'label.no.registries' | translate}}</span>\n      </div>\n    </div>\n\n    <!-- Registros -->\n    <div class=\"row\" *ngIf=\"listRegistriesFiltered.length > 0\">\n      <div class=\"col-12\">\n\n        <div class=\"row  m-0\"\n          *ngFor=\"let registry of listRegistriesFiltered | paginate: {itemsPerPage: itemsRegistries, currentPage: page}\">\n          <div class=\"col-12 registry mb-2\">\n\n            <div class=\"row\">\n              <div class=\"col-12 date-actions rounded-top border-top border-left border-right\">\n\n                <div class=\"row\">\n                  <!-- Fecha -->\n                  <div class=\"col-xl-11 col-lg-10 col-9\">\n                    <span>{{registry.date | date: 'dd MMM yyyy'}}</span>\n                  </div>\n                  <!-- Iconos de accion -->\n                  <div class=\"col-xl-1 col-lg-2 col-3 text-right\">\n                    <i class=\"fa fa-pencil\" (click)=\"openEditDetail(registry)\"></i>\n                    <i class=\"fa fa-trash\" (click)=\"removeRegistry(registry)\"></i>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-12 rounded-left rounded-right border-bottom border-right border-left\">\n\n                <div class=\"row\">\n                  <!-- Descripcion -->\n                  <div class=\"col-4 p-3\">\n                    <span class=\"title-field d-block\">{{'label.description' | translate}}</span>\n                    <span class=\"d-block\">{{registry.description}}</span>\n                  </div>\n\n                  <!-- Categoria -->\n                  <div class=\"col-4 p-3\">\n                    <span class=\"title-field d-block\">{{'label.category' | translate}}</span>\n                    <span\n                      class=\"d-block\">{{registry.category ? registry.category.name : ('label.unknown' | translate)}}</span>\n                  </div>\n\n                  <!-- Cantidad -->\n                  <div class=\"col-4 p-3\">\n                    <span class=\"title-field d-block\">{{'label.quantity' | translate}}</span>\n                    <span class=\"d-block\"\n                      [ngClass]=\"{'text-danger': registry.type==='expense', 'text-success': registry.type === 'deposit'}\">{{registry.quantity}}</span>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- Paginacion -->\n    <div class=\"row\" *ngIf=\"itemsRegistries < listRegistriesFiltered.length\">\n      <div class=\"col-12 mt-2 text-center\">\n        <pagination-controls (pageChange)=\"page = $event\" [previousLabel]=\"'label.previous' | translate\"\n          [nextLabel]=\"'label.next' | translate\"></pagination-controls>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!-- Spinner -->\n<app-spinner [hideSpinner]=\"showResume\"></app-spinner>\n\n<!-- Templates -->\n\n<ng-template #modal_confirm_delete let-modal>\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{'label.confirm' | translate}}</h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.close('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    {{'label.confirm.delete.registry' | translate}}\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('yes')\">{{'label.yes' | translate}}</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('no')\">{{'label.no' | translate}}</button>\n  </div>\n\n</ng-template>\n\n<ng-template #modal_success let-modal>\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{'label.success' | translate}}</h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    {{'label.delete.registry.success' | translate}}\n  </div>\n\n</ng-template>\n\n\n<ng-template #modal_error let-modal>\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{'label.error' | translate}}</h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    {{'label.delete.registry.error' | translate}}\n  </div>\n\n</ng-template>");

/***/ }),

/***/ 41114:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/detail/detail.component.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"detail\" [@slide] *ngIf=\"showDetail\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-11 col-md-9 col-8\">\n      <ng-content select=\"[detail-title]\"></ng-content>\n    </div>\n    <div class=\"col-lg-1 col-md-3 col-4 p-3\">\n      <i class=\"fa fa-times close\" (click)=\"closeDetail()\"></i>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <ng-content select=\"[detail-content]\"></ng-content>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"overlay\"></div>");

/***/ }),

/***/ 78854:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/filter/filter.component.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form>\n  <div class=\"row form-group\">\n\n    <!-- Select de años -->\n    <div class=\"col-lg-4 col-md-3 col-12\" *ngIf=\"showYears\">\n      <label for=\"category\">{{'label.year' | translate}}</label>\n      <select \n        class=\"custom-select\"\n        name=\"year\" \n        id=\"year\"\n        [(ngModel)]=\"filterForm.year\"\n        (change)=\"filterData()\">\n        <option value=\"{{year}}\" *ngFor=\"let year of years\">{{year}}</option>\n      </select>\n    </div>\n\n    <!-- Fecha de inicio -->\n    <div class=\"col-lg-2 col-md-3 col-12 align-self-end\" *ngIf=\"showDateStartEnd\">\n      <label for=\"dateStart\">{{'label.date.start' | translate}}</label>\n      <p-calendar\n        showButtonBar=\"true\"\n        dateFormat=\"dd/mm/yy\"\n        inputStyleClass=\"form-control\"\n        name=\"dateStart\"\n        id=\"dateStart\"\n        [locale]=\"locale\"\n        [readonlyInput]=\"true\"\n        [(ngModel)]=\"filterForm.dateStart\"\n        (onSelect)=\"filterData()\"\n        (onTodayClick)=\"filterData()\"\n        (onClearClick)=\"filterData()\">\n      </p-calendar>\n    </div>\n\n    <!-- Fecha de fin -->\n    <div class=\"col-lg-2 col-md-3 col-12 align-self-end\" *ngIf=\"showDateStartEnd\">\n      <label for=\"dateEnd\">{{'label.date.end' | translate}}</label>\n      <p-calendar\n        showButtonBar=\"true\"\n        dateFormat=\"dd/mm/yy\"\n        inputStyleClass=\"form-control\"\n        name=\"dateEnd\"\n        id=\"dateEnd\"\n        [locale]=\"locale\"\n        [readonlyInput]=\"true\"\n        [(ngModel)]=\"filterForm.dateEnd\"\n        (onSelect)=\"filterData()\"\n        (onTodayClick)=\"filterData()\"\n        (onClearClick)=\"filterData()\">\n      </p-calendar>\n    </div>\n\n    <!-- Cantidad Minima -->\n    <div class=\"col-lg-2 col-12 align-self-end\" [ngClass]=\"{'col-md-3': showYears, 'col-md-2': !showYears}\">\n      <label for=\"quantityMin\">{{'label.quantity.min' | translate}}</label>\n      <input type=\"text\"\n        class=\"form-control\"\n        name=\"quantityMin\"\n        id=\"quantityMin\"\n        (keyup)=\"filterData()\"\n        [(ngModel)]=\"filterForm.quantityMin\">\n    </div>\n\n    <!-- Cantidad Maxima -->\n    <div class=\"col-lg-2 col-12 align-self-end\" [ngClass]=\"{'col-md-3': showYears, 'col-md-2': !showYears}\">\n      <label for=\"quantityMax\">{{'label.quantity.max' | translate}}</label>\n      <input type=\"text\"\n        class=\"form-control\"\n        name=\"quantityMax\"\n        id=\"quantityMax\"\n        (keyup)=\"filterData()\"\n        [(ngModel)]=\"filterForm.quantityMax\">\n    </div>\n\n    <!-- Categorias -->\n    <div class=\"col-lg-4 col-12 align-self-end\" [ngClass]=\"{'col-md-3': showYears, 'col-md-2': !showYears}\">\n      <label for=\"category\">{{'label.category' | translate}}</label>\n      <select \n        class=\"custom-select\"\n        name=\"category\" \n        id=\"category\"\n        [(ngModel)]=\"filterForm.idCategory\"\n        (change)=\"filterData()\">\n        <option value=\"{{category.id}}\" *ngFor=\"let category of listCategories\">{{category.name}}</option>\n      </select>\n    </div>\n\n  </div>\n\n</form>\n");

/***/ }),

/***/ 79934:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div class=\"h-100 overlay\" *ngIf=\"!hideSpinner\">\n  <div class=\"spinner\">\n    <img src=\"assets/img/spinner.gif\"/>\n  </div>\n</div>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map