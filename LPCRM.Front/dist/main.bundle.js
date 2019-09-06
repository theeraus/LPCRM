webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/default/angular/ng-bootstrap/ng-bootstrap.module": [
		"../../../../../src/app/theme/pages/default/angular/ng-bootstrap/ng-bootstrap.module.ts",
		"ng-bootstrap.module",
		"common"
	],
	"./pages/default/angular/primeng/primeng.module": [
		"../../../../../src/app/theme/pages/default/angular/primeng/primeng.module.ts",
		"primeng.module"
	],
	"./pages/default/index/index.module": [
		"../../../../../src/app/theme/pages/default/index/index.module.ts",
		"index.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_directives/href-prevent-default.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrefPreventDefaultDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HrefPreventDefaultDirective = (function () {
    function HrefPreventDefaultDirective(el) {
        this.el = el;
    }
    HrefPreventDefaultDirective.prototype.ngAfterViewInit = function () {
    };
    HrefPreventDefaultDirective.prototype.preventDefault = function (event) {
        if (this.href.length === 0 || this.href === '#') {
            event.preventDefault();
        }
    };
    return HrefPreventDefaultDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], HrefPreventDefaultDirective.prototype, "href", void 0);
HrefPreventDefaultDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[href]",
        host: { '(click)': 'preventDefault($event)' },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], HrefPreventDefaultDirective);

var _a;
//# sourceMappingURL=href-prevent-default.directive.js.map

/***/ }),

/***/ "../../../../../src/app/_directives/unwrap-tag.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnwrapTagDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnwrapTagDirective = (function () {
    function UnwrapTagDirective(el) {
        this.el = el;
    }
    UnwrapTagDirective.prototype.ngAfterViewInit = function () {
        var nativeElement = this.el.nativeElement;
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].unwrapTag(nativeElement);
    };
    return UnwrapTagDirective;
}());
UnwrapTagDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[appunwraptag]",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], UnwrapTagDirective);

var _a;
//# sourceMappingURL=unwrap-tag.directive.js.map

/***/ }),

/***/ "../../../../../src/app/_services/error-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalErrorHandler = (function () {
    function GlobalErrorHandler() {
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
    };
    return GlobalErrorHandler;
}());
GlobalErrorHandler = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], GlobalErrorHandler);

//# sourceMappingURL=error-handler.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/script-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        this.tag = tag;
        scripts.forEach(function (script) { return _this._scripts[script] = { src: script, loaded: false }; });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptLoaderService.prototype.loadScript = function (src) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //resolve if already loaded
            if (_this._scripts[src].loaded) {
                resolve({ script: src, loaded: true, status: 'Already Loaded' });
            }
            else {
                //load script
                var script = __WEBPACK_IMPORTED_MODULE_1_jquery__('<script/>')
                    .attr('type', 'text/javascript')
                    .attr('src', _this._scripts[src].src);
                __WEBPACK_IMPORTED_MODULE_1_jquery__(_this.tag).append(script);
                resolve({ script: src, loaded: true, status: 'Loaded' });
            }
        });
    };
    return ScriptLoaderService;
}());
ScriptLoaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ScriptLoaderService);

//# sourceMappingURL=script-loader.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Page loader -->\n<div class=\"m-page-loader m-page-loader--non-block\" style=\"margin-left: -80px; margin-top: -20px;\">\n\t<div class=\"m-blockui\">\n\t\t<span>\n\t\t\tPlease wait...\n\t\t</span>\n\t\t<span>\n\t\t\t<div class=\"m-loader m-loader--brand\"></div>\n\t\t</span>\n\t</div>\n</div>\n<!-- end::Page loader -->\n<!-- begin:: Page -->\n<router-outlet></router-outlet>\n<!-- end:: Page -->\n<app-quick-sidebar></app-quick-sidebar>\n<app-scroll-top></app-scroll-top>\n\n<!--begin::Base Scripts -->\n<!--end::Base Scripts -->\n<!--begin::Page Snippets -->\n<!--end::Page Snippets -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
        this.globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (route) {
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(true);
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].bodyClass(_this.globalBodyClass);
            }
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'body',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_component__ = __webpack_require__("../../../../../src/app/theme/theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theme_theme_routing_module__ = __webpack_require__("../../../../../src/app/theme/theme-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_error_handler_service__ = __webpack_require__("../../../../../src/app/_services/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__theme_theme_component__["a" /* ThemeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__theme_layouts_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__theme_theme_routing_module__["a" /* ThemeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_script_loader_service__["a" /* ScriptLoaderService */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_11__services_error_handler_service__["a" /* GlobalErrorHandler */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helpers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

var Helpers = (function () {
    function Helpers() {
    }
    Helpers.loadStyles = function (tag, src) {
        if (Array.isArray(src)) {
            __WEBPACK_IMPORTED_MODULE_0_jquery__["each"](src, function (k, s) {
                __WEBPACK_IMPORTED_MODULE_0_jquery__(tag).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<link/>').attr('href', s).attr('rel', 'stylesheet').attr('type', 'text/css'));
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(tag).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<link/>').attr('href', src).attr('rel', 'stylesheet').attr('type', 'text/css'));
        }
    };
    Helpers.unwrapTag = function (element) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__(element).removeAttr('appunwraptag').unwrap();
    };
    /**
     * Set title markup
     * @param title
     */
    Helpers.setTitle = function (title) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__title').text(title);
    };
    /**
     * Breadcrumbs markup
     * @param breadcrumbs
     */
    Helpers.setBreadcrumbs = function (breadcrumbs) {
        if (breadcrumbs)
            __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__title').addClass('m-subheader__title--separator');
        var ul = __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__breadcrumbs');
        if (__WEBPACK_IMPORTED_MODULE_0_jquery__(ul).length === 0) {
            ul = __WEBPACK_IMPORTED_MODULE_0_jquery__('<ul/>').addClass('m-subheader__breadcrumbs m-nav m-nav--inline')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__item')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<a/>').addClass('m-nav__link m-nav__link--icon')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<i/>').addClass('m-nav__link-icon la la-home'))));
        }
        __WEBPACK_IMPORTED_MODULE_0_jquery__(ul).find('li:not(:first-child)').remove();
        __WEBPACK_IMPORTED_MODULE_0_jquery__["each"](breadcrumbs, function (k, v) {
            var li = __WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__item')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<a/>').addClass('m-nav__link m-nav__link--icon').attr('routerLink', v.href).attr('title', v.title)
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<span/>').addClass('m-nav__link-text').text(v.text)));
            __WEBPACK_IMPORTED_MODULE_0_jquery__(ul).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__separator').text('-')).append(li);
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader .m-stack__item:first-child').append(ul);
    };
    Helpers.setLoading = function (enable) {
        var body = __WEBPACK_IMPORTED_MODULE_0_jquery__('body');
        if (enable) {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(body).addClass('m-page--loading-non-block');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(body).removeClass('m-page--loading-non-block');
        }
    };
    Helpers.bodyClass = function (strClass) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__('body').attr('class', strClass);
    };
    return Helpers;
}());

//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Left Aside -->\n<button class=\"m-aside-left-close  m-aside-left-close--skin-dark\" id=\"m_aside_left_close_btn\" appunwraptag=\"\">\n\t<i class=\"la la-close\"></i>\n</button>\n<div id=\"m_aside_left\" class=\"m-grid__item\tm-aside-left  m-aside-left--skin-dark\">\n\t<!-- BEGIN: Aside Menu -->\n\t<div  \t\tid=\"m_ver_menu\"  \t\tclass=\"m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark\"  \t\tdata-menu-vertical=\"true\" \t\t data-menu-scrollable=\"false\" data-menu-dropdown-timeout=\"500\"   \t\t>\n\t\t<ul class=\"m-menu__nav  m-menu__nav--dropdown-submenu-arrow\">\n\t\t\t<li class=\"m-menu__item  \" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t<a  routerLink=\"/index\" class=\"m-menu__link\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-line-graph\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\tDashboard\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__section\">\n\t\t\t\t<h4 class=\"m-menu__section-text\">\n\t\t\t\t\tAngular\n\t\t\t\t</h4>\n\t\t\t\t<i class=\"m-menu__section-icon flaticon-more-v3\"></i>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t<a  routerLink=\"/angular/ng-bootstrap\" class=\"m-menu__link\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-settings\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tNg-Bootstrap\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-settings\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tPrimeNG\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tPrimeNG\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/angular/primeng/input\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tInput\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/angular/primeng/button\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tButton\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/angular/primeng/panel\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tPanel\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\n\t\t\n\t\t</ul>\n\t</div>\n\t<!-- END: Aside Menu -->\n</div>\n<!-- END: Left Aside -->\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideNavComponent = (function () {
    function AsideNavComponent() {
    }
    AsideNavComponent.prototype.ngOnInit = function () {
    };
    AsideNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initAside();
        var menu = $('#m_aside_left').mMenu();
        var item = $(menu).find('a[href="' + window.location.pathname + '"]').parent('.m-menu__item');
        $(menu).data('menu').setActiveItem(item);
    };
    return AsideNavComponent;
}());
AsideNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-aside-nav",
        template: __webpack_require__("../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [])
], AsideNavComponent);

//# sourceMappingURL=aside-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Footer -->\n<footer class=\"m-grid__item\t\tm-footer\" appunwraptag=\"\">\n\t<div class=\"m-container m-container--fluid m-container--full-height m-page__container\">\n\t\t<div class=\"m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop\">\n\t\t\t<div class=\"m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last\">\n\t\t\t\t<span class=\"m-footer__copyright\">\n\t\t\t\t\t2017 &copy; Metronic theme by\n\t\t\t\t\t<a href=\"#\" class=\"m-link\">\n\t\t\t\t\t\tKeenthemes\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first\">\n\t\t\t\t<ul class=\"m-footer__nav m-nav m-nav--inline m--pull-right\">\n\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\tAbout\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\"  class=\"m-nav__link\">\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\tPrivacy\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\tT&C\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\tPurchase\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"m-nav__item m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\" data-toggle=\"m-tooltip\" title=\"Support Center\" data-placement=\"left\">\n\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info m--icon-font-size-lg3\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n<!-- end::Footer -->\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-footer",
        template: __webpack_require__("../../../../../src/app/theme/layouts/footer/footer.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/layouts/header-nav/header-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Header -->\n<header class=\"m-grid__item    m-header\"  data-minimize-offset=\"200\" data-minimize-mobile-offset=\"200\" appunwraptag=\"\" >\n\t<div class=\"m-container m-container--fluid m-container--full-height\">\n\t\t<div class=\"m-stack m-stack--ver m-stack--desktop\">\n\t\t\t<!-- BEGIN: Brand -->\n\t\t\t<div class=\"m-stack__item m-brand  m-brand--skin-dark\">\n\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general\">\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__logo\">\n\t\t\t\t\t\t<a routerLink=\"/index\" class=\"m-brand__logo-wrapper\">\n\t\t\t\t\t\t\t<img alt=\"\" src=\"./assets/demo/default/media/img/logo/logo_default_dark.png\"/>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__tools\">\n\t\t\t\t\t\t<!-- BEGIN: Left Aside Minimize Toggle -->\n\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_aside_left_minimize_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<!-- END -->\n\t\t\t\t\t\t<!-- BEGIN: Responsive Aside Left Menu Toggler -->\n\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_aside_left_offcanvas_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<!-- END -->\n\t\t\t\t\t\t<!-- BEGIN: Responsive Header Menu Toggler -->\n\t\t\t\t\t\t<a id=\"m_aside_header_menu_mobile_toggle\" href=\"javascript:;\" class=\"m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<!-- END -->\n\t\t\t\t\t\t<!-- BEGIN: Topbar Toggler -->\n\t\t\t\t\t\t<a id=\"m_aside_header_topbar_mobile_toggle\" href=\"javascript:;\" class=\"m-brand__icon m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<i class=\"flaticon-more\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<!-- BEGIN: Topbar Toggler -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- END: Brand -->\n\t\t\t<div class=\"m-stack__item m-stack__item--fluid m-header-head\" id=\"m_header_nav\">\n\t\t\t\t<!-- BEGIN: Horizontal Menu -->\n\t\t\t\t<button class=\"m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark\" id=\"m_aside_header_menu_mobile_close_btn\">\n\t\t\t\t\t<i class=\"la la-close\"></i>\n\t\t\t\t</button>\n\t\t\t\t<div id=\"m_header_menu\" class=\"m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark\"  >\n\t\t\t\t\t<ul class=\"m-menu__nav  m-menu__nav--submenu-arrow\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"   data-menu-submenu-toggle=\"click\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-add\"></i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-down\"></i>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow m-menu__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"   aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tCreate New Post\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-diagram\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tGenerate Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"   data-menu-submenu-toggle=\"hover\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-business\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tManage Orders\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--right\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLatest Orders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPending Orders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProcessed Orders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelivery Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPayments\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCustomers\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"   data-menu-submenu-toggle=\"hover\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tCustomer Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--right\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCustomer Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupplier Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReviewed Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tResolved Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFeedback Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-users\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tRegister Member\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"   data-menu-submenu-toggle=\"click\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-line-graph\"></i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tReports\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-down\"></i>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu  m-menu__submenu--fixed m-menu__submenu--left\" style=\"width:1000px\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow m-menu__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t<div class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__content\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" >\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-menu__heading m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tFinance Reports\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-map\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAnnual Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHR Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPO Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFinance Margins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic-2\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRevenue Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" >\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-menu__heading m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tProject Reports\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCoca Cola CRM\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelta Airlines Booking Site\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMalibu Accounting\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tVineseed Website Rewamp\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tZircon Mobile App\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMercury CMS\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" >\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-menu__heading m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tHR Reports\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStaff Directory\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tClient Directory\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSalary Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStaff Payslips\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCorporate Expenses\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProject Expenses\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" >\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-menu__heading m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tReporting Apps\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReport Adjusments\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSources & Mediums\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReporting Settings\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tConversions\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReport Flows\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAudit & Logs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"   data-menu-submenu-toggle=\"click\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-paper-plane\"></i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\tApps\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--brand m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\t\t\tnew\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-down\"></i>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow m-menu__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-business\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\teCommerce\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"   data-menu-submenu-toggle=\"hover\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/crud/datatable_v1\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-computer\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tAudience\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--right\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-users\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActive Users\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-interface-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUser Explorer\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUsers Flows\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMarket Segments\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUser Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-map\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMarketing\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic-2\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tCampaigns\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"   data-menu-submenu-toggle=\"hover\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-infinity\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tCloud Manager\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-add\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFile Upload\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-signs-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFile Attributes\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-folder\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFolders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-cogwheel-2\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem Settings\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- END: Horizontal Menu -->\n\t\t\t\t<!-- BEGIN: Topbar -->\n\t\t\t\t<div id=\"m_header_topbar\" class=\"m-topbar  m-stack m-stack--ver m-stack--general\">\n\t\t\t\t\t<div class=\"m-stack__item m-topbar__nav-wrapper\">\n\t\t\t\t\t\t<ul class=\"m-topbar__nav m-nav m-nav--inline\">\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light\tm-list-search m-list-search--skin-light\"  \tdata-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\" id=\"m_quicksearch\" data-search-type=\"dropdown\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-search-1\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header\">\n\t\t\t\t\t\t\t\t\t\t\t<form  class=\"m-list-search__form\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-search__form-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-search__form-input-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"m_quicksearch_input\" autocomplete=\"off\" type=\"text\" name=\"q\" class=\"m-list-search__form-input\" value=\"\" placeholder=\"Search...\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-search__form-icon-close\" id=\"m_quicksearch_close\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-remove\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__scrollable m-scrollable\" data-scrollable=\"true\" data-max-height=\"300\" data-mobile-max-height=\"200\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center \tm-dropdown--mobile-full-width\" data-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\" id=\"m_topbar_notification_icon\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-music-2\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/misc/notification_bg.jpg); background-size: cover;\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t9 New\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-subtitle\">\n\t\t\t\t\t\t\t\t\t\t\t\tUser Notifications\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#topbar_notifications_notifications\" role=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAlerts\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#topbar_notifications_events\" role=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEvents\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#topbar_notifications_logs\" role=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"topbar_notifications_notifications\" role=\"tabpanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-scrollable\" data-scrollable=\"true\" data-max-height=\"250\" data-mobile-max-height=\"200\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline m-list-timeline--skin-light\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge -m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpending\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t14 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDB overloaded 80%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsettled\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem error -\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCheck\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\turgent\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"topbar_notifications_events\" role=\"tabpanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-scrollable\" m-scrollabledata-scrollable=\"true\" data-max-height=\"250\" data-mobile-max-height=\"200\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline m-list-timeline--skin-light\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-danger\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"topbar_notifications_logs\" role=\"tabpanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general\" style=\"min-height: 180px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAll caught up!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo new logs.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light\"  data-dropdown-toggle=\"click\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/misc/quick_actions_bg.jpg); background-size: cover;\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-title\">\n\t\t\t\t\t\t\t\t\t\t\t\tQuick Actions\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-subtitle\">\n\t\t\t\t\t\t\t\t\t\t\t\tShortcuts\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body m-dropdown__body--paddingless\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-scrollable\" data-scrollable=\"false\" data-max-height=\"380\" data-mobile-max-height=\"200\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid m-nav-grid--skin-light\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid__row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGenerate Report\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-time\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd New Event\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid__row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-folder\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCreate New Task\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCompleted Tasks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\" data-dropdown-toggle=\"click\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__userpic\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img/users/user4.jpg\" class=\"m--img-rounded m--marginless m--img-centered\" alt=\"\"/>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__username m--hide\">\n\t\t\t\t\t\t\t\t\t\tNick\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/misc/user_profile_bg.jpg); background-size: cover;\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user m-card-user--skin-dark\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user__pic\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img/users/user4.jpg\" class=\"m--img-rounded m--marginless\" alt=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user__details\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-card-user__name m--font-weight-500\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tMark Andre\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-card-user__email m--font-weight-300 m-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tmark.andre@gmail.com\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-nav m-nav--skin-light\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m--hide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSection\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-profile-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMy Profile\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActivity\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMessages\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupport\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/snippets/pages/user/login-1\" class=\"btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\" routerLink=\"/logout\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogout\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li id=\"m_quick_sidebar_toggle\" class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-grid-menu\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- END: Topbar -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</header>\n<!-- END: Header -->\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/header-nav/header-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderNavComponent = (function () {
    function HeaderNavComponent() {
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
    };
    HeaderNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initHeader();
    };
    return HeaderNavComponent;
}());
HeaderNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-header-nav",
        template: __webpack_require__("../../../../../src/app/theme/layouts/header-nav/header-nav.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [])
], HeaderNavComponent);

//# sourceMappingURL=header-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/layouts/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_layout_component__ = __webpack_require__("../../../../../src/app/theme/layouts/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_nav_header_nav_component__ = __webpack_require__("../../../../../src/app/theme/layouts/header-nav/header-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_default_default_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aside_nav_aside_nav_component__ = __webpack_require__("../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/theme/layouts/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quick_sidebar_quick_sidebar_component__ = __webpack_require__("../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scroll_top_scroll_top_component__ = __webpack_require__("../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_href_prevent_default_directive__ = __webpack_require__("../../../../../src/app/_directives/href-prevent-default.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_unwrap_tag_directive__ = __webpack_require__("../../../../../src/app/_directives/unwrap-tag.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__layout_layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_2__header_nav_header_nav_component__["a" /* HeaderNavComponent */],
            __WEBPACK_IMPORTED_MODULE_3__pages_default_default_component__["a" /* DefaultComponent */],
            __WEBPACK_IMPORTED_MODULE_4__aside_nav_aside_nav_component__["a" /* AsideNavComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__quick_sidebar_quick_sidebar_component__["a" /* QuickSidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__scroll_top_scroll_top_component__["a" /* ScrollTopComponent */],
            __WEBPACK_IMPORTED_MODULE_10__directives_href_prevent_default_directive__["a" /* HrefPreventDefaultDirective */],
            __WEBPACK_IMPORTED_MODULE_11__directives_unwrap_tag_directive__["a" /* UnwrapTagDirective */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__layout_layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_2__header_nav_header_nav_component__["a" /* HeaderNavComponent */],
            __WEBPACK_IMPORTED_MODULE_3__pages_default_default_component__["a" /* DefaultComponent */],
            __WEBPACK_IMPORTED_MODULE_4__aside_nav_aside_nav_component__["a" /* AsideNavComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__quick_sidebar_quick_sidebar_component__["a" /* QuickSidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__scroll_top_scroll_top_component__["a" /* ScrollTopComponent */],
            __WEBPACK_IMPORTED_MODULE_10__directives_href_prevent_default_directive__["a" /* HrefPreventDefaultDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["RouterModule"],
        ]
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ "../../../../../src/app/theme/layouts/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
        template: __webpack_require__("../../../../../src/app/theme/layouts/layout/layout.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);

//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Quick Sidebar -->\n<div id=\"m_quick_sidebar\" class=\"m-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light\" appunwraptag=\"\">\n\t<div class=\"m-quick-sidebar__content m--hide\">\n\t\t<span id=\"m_quick_sidebar_close\" class=\"m-quick-sidebar__close\">\n\t\t\t<i class=\"la la-close\"></i>\n\t\t</span>\n\t\t<ul id=\"m_quick_sidebar_tabs\" class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\n\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t<a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_messenger\" role=\"tab\">\n\t\t\t\t\tMessages\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t<a class=\"nav-link m-tabs__link\" \t\tdata-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_settings\" role=\"tab\">\n\t\t\t\t\tSettings\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_logs\" role=\"tab\">\n\t\t\t\t\tLogs\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t\t<div class=\"tab-content\">\n\t\t\t<div class=\"tab-pane active m-scrollable\" id=\"m_quick_sidebar_tabs_messenger\" role=\"tabpanel\">\n\t\t\t\t<div class=\"m-messenger m-messenger--message-arrow m-messenger--skin-light\">\n\t\t\t\t\t<div class=\"m-messenger__messages\">\n\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\" alt=\"\"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\tHi Bob. What time will be the meeting ?\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\tHi Megan. It's at 2.30PM\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\" alt=\"\"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\tWill the development team be joining ?\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\tYes sure. I invited them as well\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__datetime\">\n\t\t\t\t\t\t\t2:30PM\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\"  alt=\"\"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\tNoted. For the Coca-Cola Mobile App project as well ?\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\tYes, sure.\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\tPlease also prepare the quotation for the Loop CRM project as well.\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__datetime\">\n\t\t\t\t\t\t\t3:15PM\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-no-pic m--bg-fill-danger\">\n\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\tM\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\tNoted. I will prepare it.\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\tThanks Megan. I will see you later.\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\"  alt=\"\"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\tSure. See you in the meeting soon.\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-messenger__seperator\"></div>\n\t\t\t\t\t<div class=\"m-messenger__form\">\n\t\t\t\t\t\t<div class=\"m-messenger__form-controls\">\n\t\t\t\t\t\t\t<input type=\"text\" name=\"\" placeholder=\"Type here...\" class=\"m-messenger__form-input\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__form-tools\">\n\t\t\t\t\t\t\t<a href=\"\" class=\"m-messenger__form-attachment\">\n\t\t\t\t\t\t\t\t<i class=\"la la-paperclip\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_settings\" role=\"tabpanel\">\n\t\t\t\t<div class=\"m-list-settings\">\n\t\t\t\t\t<div class=\"m-list-settings__group\">\n\t\t\t\t\t\t<div class=\"m-list-settings__heading\">\n\t\t\t\t\t\t\tGeneral Settings\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tEmail Notifications\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tSite Tracking\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tSMS Alerts\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tBackup Storage\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tAudit Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-list-settings__group\">\n\t\t\t\t\t\t<div class=\"m-list-settings__heading\">\n\t\t\t\t\t\t\tSystem Settings\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tSystem Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tError Reporting\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tApplications Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tBackup Servers\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tAudit Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_logs\" role=\"tabpanel\">\n\t\t\t\t<div class=\"m-list-timeline\">\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\n\t\t\t\t\t\t\tSystem Logs\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--warning m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\timportant\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\tresolved\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem error\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\tpending\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\n\t\t\t\t\t\t\tApplications Logs\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\turgent\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t7 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew invoices received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem error\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\tpending\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\n\t\t\t\t\t\t\tServer Logs\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t7 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem error\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1117 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- end::Quick Sidebar -->\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuickSidebarComponent = (function () {
    function QuickSidebarComponent() {
    }
    QuickSidebarComponent.prototype.ngOnInit = function () {
    };
    return QuickSidebarComponent;
}());
QuickSidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-quick-sidebar",
        template: __webpack_require__("../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [])
], QuickSidebarComponent);

//# sourceMappingURL=quick-sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Scroll Top -->\n<div class=\"m-scroll-top m-scroll-top--skin-top\" data-toggle=\"m-scroll-top\" data-scroll-offset=\"500\" data-scroll-speed=\"300\" appunwraptag=\"\">\n\t<i class=\"la la-arrow-up\"></i>\n</div>\n<!-- end::Scroll Top -->\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollTopComponent = (function () {
    function ScrollTopComponent() {
    }
    ScrollTopComponent.prototype.ngOnInit = function () {
    };
    return ScrollTopComponent;
}());
ScrollTopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-scroll-top",
        template: __webpack_require__("../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [])
], ScrollTopComponent);

//# sourceMappingURL=scroll-top.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/default.component.html":
/***/ (function(module, exports) {

module.exports = "<app-aside-nav></app-aside-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultComponent = (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    return DefaultComponent;
}());
DefaultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
        template: __webpack_require__("../../../../../src/app/theme/pages/default/default.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [])
], DefaultComponent);

//# sourceMappingURL=default.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/theme-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_component__ = __webpack_require__("../../../../../src/app/theme/theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_1__theme_component__["a" /* ThemeComponent */],
        "children": [
            {
                "path": "angular\/ng-bootstrap",
                "loadChildren": ".\/pages\/default\/angular\/ng-bootstrap\/ng-bootstrap.module#NgBootstrapModule"
            },
            {
                "path": "angular\/primeng",
                "loadChildren": ".\/pages\/default\/angular\/primeng\/primeng.module#PrimengModule"
            },
            {
                "path": "index",
                "loadChildren": ".\/pages\/default\/index\/index.module#IndexModule"
            },
            {
                "path": "",
                "redirectTo": "angular/ng-bootstrap",
                "pathMatch": "full"
            }
        ]
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];
var ThemeRoutingModule = (function () {
    function ThemeRoutingModule() {
    }
    return ThemeRoutingModule;
}());
ThemeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]]
    })
], ThemeRoutingModule);

//# sourceMappingURL=theme-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/theme/theme.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-nav></app-header-nav>\n<!-- begin::Body -->\n<router-outlet></router-outlet>\n<!-- end:: Body -->\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/theme/theme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemeComponent = (function () {
    function ThemeComponent(_script, _router) {
        this._script = _script;
        this._router = _router;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/default/base/scripts.bundle.js', 'assets/default/custom/components/forms/widgets/bootstrap-select.js')
            .then(function (result) {
            __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
        });
        this._router.events.subscribe(function (route) {
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
                mApp.scrollTop();
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(true);
                // hide visible popover
                $('[data-toggle="m-popover"]').popover('hide');
            }
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                // init required js
                mApp.init();
                mUtil.init();
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
                // content m-wrapper animation
                var animation_1 = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation_1);
                }).removeClass(animation_1).addClass(animation_1);
            }
        });
    };
    return ThemeComponent;
}());
ThemeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
        template: __webpack_require__("../../../../../src/app/theme/theme.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_script_loader_service__["a" /* ScriptLoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_script_loader_service__["a" /* ScriptLoaderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], ThemeComponent);

var _a, _b;
//# sourceMappingURL=theme.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map