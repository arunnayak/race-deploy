webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-designer/list/list.module": [
		"../../../../../src/app/app-designer/list/list.module.ts",
		"list.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-designer/sanitize-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeHtmlPipe = (function () {
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    return SanitizeHtmlPipe;
}());
SanitizeHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'sanitizeHtml'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SanitizeHtmlPipe);

var _a;
//# sourceMappingURL=sanitize-html.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/app-designer/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<title>Race Enterprise: App Designer</title>\n<div class=\"wrapper active\">  \n<app-sidebar></app-sidebar>\n<app-topmenu></app-topmenu>\n<p style=\"padding: 10px;\">\n  app designer welcome works!\n  <br/>\n<br/>\n  \n  <a href=\"#/app-designer/list\" class=\"btn btn-primary\">Launch app designer</a>\n</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app-designer/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-designer/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
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

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__("../../../../../src/app/app-designer/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-designer/welcome/welcome.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-generation-portal/app-generation-portal.component.html":
/***/ (function(module, exports) {

module.exports = "<title>Race Enterprise: App generation portal</title>\n<div class=\"wrapper active\">\n  <app-sidebar></app-sidebar>\n  <app-topmenu></app-topmenu>\n  <div class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-md-12 content__header\">\n        <div class=\"col-md-6\">\n          <h1 class=\"content__header-text\">App Settings</h1>\n        </div>\n        <div class=\"col-md-6\">\n          <button type=\"button\" class=\"content__button button pull-right\" data-toggle=\"modal\" data-target=\"#createAppModal\"><span class=\"glyphicon glyphicon-plus\"></span>&nbsp;&nbsp;App</button>\n        </div>\n      </div>\n    </div>\n\n    <table class=\"table table-striped table-responsive table-sortable content__table\">\n      <thead>\n        <tr>\n          <th class=\"pointer\" (click)=\"sort('ProductName')\">Product Name&nbsp;<span [ngClass]=\"isDesc === true ? 'icon-descending' : 'icon-ascending'\"></span></th>\n          <th class=\"pointer\" (click)=\"sort('Platform')\">Platform&nbsp;<span [ngClass]=\"isDesc === true ? 'icon-descending' : 'icon-ascending'\"></span></th>\n          <th class=\"pointer\" (click)=\"sort('HostName')\">Host Name&nbsp;<span [ngClass]=\"isDesc === true ? 'icon-descending' : 'icon-ascending'\"></span></th>\n          <th class=\"pointer\" (click)=\"sort('Port')\">Port&nbsp;<span [ngClass]=\"isDesc === true ? 'icon-descending' : 'icon-ascending'\"></span></th>\n          <th class=\"pointer\" (click)=\"sort('ApplicationId')\">Application Id&nbsp;<span [ngClass]=\"isDesc === true ? 'icon-descending' : 'icon-ascending'\"></span></th>\n          <th class=\"pointer\" (click)=\"sort('SecurityType')\">Security Type&nbsp;<span [ngClass]=\"isDesc === true ? 'icon-descending' : 'icon-ascending'\"></span></th>\n          <th class=\"pointer\" (click)=\"sort('Environment')\">Environment&nbsp;<span [ngClass]=\"isDesc === true ? 'icon-descending' : 'icon-ascending'\"></span></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let appsetting of appsettings |  orderBy: {property: column, direction: direction}\">\n          <td>{{appsetting.ProductName}} </td>\n          <td>{{appsetting.Platform}}</td>\n          <td>{{appsetting.HostName}}</td>\n          <td>{{appsetting.Port}}</td>\n          <td>{{appsetting.ApplicationId}}</td>\n          <td>{{appsetting.SecurityType}}</td>\n          <td>{{appsetting.Environment}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"createAppModal\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" routerLink=\"/app-generation-portal\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal__title bold\">NEW SETTING</h4>\n        </div>\n        <div class=\"modal__body\">\n          <form #appSettingsForm=\"ngForm\" name=\"appSettingsForm\" (ngSubmit)=\"onSubmit(appSettingsForm)\">\n            <div class=\"tabs-wrap\">\n              \n              <ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li role=\"presentation\" class=\"active\">\n                  <a class=\"modal__tab-item\" href=\"#productlist\" id=\"tabZero\" aria-controls=\"productlist\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"true\">Proudcts</a>\n                </li>\n                <li>\n                  <a class=\"modal__tab-item\" href=\"#connectionsettings\" id=\"tabOne\" aria-controls=\"connectionsettings\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"true\">Connection Settings</a>\n                </li>\n                <li>\n                  <a class=\"modal__tab-item\" href=\"#branding\" id=\"tabTwo\" aria-controls=\"branding\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"false\">Branding</a>\n                </li>\n                <li>\n                  <a class=\"modal__tab-item\" href=\"#othersettings\" id=\"tabThree\" aria-controls=\"othersettings\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"false\">Other Settings</a>\n                </li>\n              </ul>\n\n              <div class=\"tab-content\">\n                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"productlist\">\n                  <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <div class=\"col-md-4\">\n                            <label for=\"TimeOut\">Product</label>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <select #StoreName name=\"StoreName\" [ngModel]=\"''\" class=\"new-todo\" class=\"form-control\">\n                                <option value=\"\">Select Product</option>\n                                <option value=\"RACE_SDK\">RACE_SDK</option>\n                                <option value=\"mInventory\">mInventory</option>\n                                <option value=\"mWorkOrder\">mWorkOrder</option>\n                                <option value=\"mWorkList\">mWorkList</option>\n                              </select>\n                          </div>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"modal__footer\">\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <button type=\"button\" class=\"btn btn-primary pull-right\" data-dismiss=\"modal\">Cancel</button>\n                        </div>\n                        <div class=\"col-md-6\" align=\"left\">\n                          <a class=\"btn btn-nonprimary Next\" (click)=\"clickHighlighted('tabOne')\">Next</a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane\" id=\"connectionsettings\">\n                  <div class=\"modal__scroll\">\n                      <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"row modalControl_centercontent\">\n                          <div class=\"col-md-4\">\n                            <label class=\"modalControl_modalControlLabel\">App Name</label>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <input type=\"text\" #AppName class=\"form-control modalControl_inputtext\" name=\"AppName\" [ngModel]=\"AppName.value\" placeholder=\"App Name\"\n                              autofocus=\"\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <label for=\"Platform\">Platform</label>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <select class=\"form-control\" #Platform name=\"Platform\" [ngModel]=\"''\">\n                                <option value=\"\">Select Platform</option>\n                                <option value=\"IOS\">IOS</option>\n                                <option value=\"Andorid\">Android</option>\n                              </select>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <label for=\"HostName\">Host Name</label>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <input type=\"text\" #HostName name=\"HostName\" [ngModel]=\"HostName.value\" class=\"new-todo\" class=\"form-control\" placeholder=\"Host Name\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <label for=\"portnumber\">Port Number</label>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <input type=\"text\" #Port name=\"Port\" [ngModel]=\"Port.value\" class=\"new-todo\" class=\"form-control\" placeholder=\"Port Number\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <label for=\"applicationid\">Application ID</label>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <input type=\"text\" #ApplicationId name=\"ApplicationId\" [ngModel]=\"ApplicationId.value\" class=\"new-todo\" class=\"form-control\"\n                              placeholder=\"Application ID\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <label for=\"SecurityType\">SecurityType</label>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <select class=\"form-control\" #SecurityType name=\"SecurityType\" [ngModel]=\"''\">\n                                  <option value=\"\">Select Security Type</option>\n                                  <option value=\"saml\">SAML</option>\n                                  <option value=\"basic\">BASIC</option>\n                                  <option value=\"adsso\">ADSSO</option>\n                                  <option value=\"x509\">X509</option>\n                                </select>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <label for=\"Environment\">Environment</label>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <select class=\"form-control\" #Environment name=\"Environment\" [ngModel]=\"''\">\n                                  <option value=\"\">Select Environment</option>\n                                  <option value=\"Development\">Development</option>\n                                  <option value=\"Quality\">Quality</option>\n                                  <option value=\"Production\">Production</option>\n                                  </select>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <label for=\"Https\">Https</label>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <input type=\"checkbox\" #Https name=\"Https\" [value]=\"Https.value\" [ngModel]=\"Https.value\" placeholder=\"Https\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <label for=\"SampleData\">Sample Data</label>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <input type=\"checkbox\" #SampleData name=\"SampleData\" [value]=\"SampleData.value\" [ngModel]=\"SampleData.value\" placeholder=\"Sample Data\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"modal__footer\">\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <button type=\"button\" class=\"btn btn-primary pull-right\" data-dismiss=\"modal\">Cancel</button>\n                        </div>\n                        <div class=\"col-md-6\" align=\"left\">\n                          <a class=\"btn btn-nonprimary Next\" (click)=\"clickHighlighted('tabTwo')\">Next</a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div role=\"tabpanel\" class=\"tab-pane\" id=\"branding\">\n                  <div class=\"modal__scroll\">\n                      <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <label for=\"Logo\">Select Logo</label><br/>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <input class=\"content__file-input\" #Logo name=\"Logo\" [ngModel]=\"\" type=\"file\" placeholder=\"Browse\" (change)=\"imageUploadLogo($event)\" accept=\"image/png\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <label for=\"App Icon\">App Icon</label><br/>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <input class=\"content__file-input\" #AppIcon name=\"AppIcon\" [ngModel]=\"\" type=\"file\" placeholder=\"Browse\" (change)=\"imageUploadAppIcon($event)\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <label for=\"splashscreen\">Splash Screen</label><br/>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <input class=\"content__file-input\" type=\"file\" #SplashScreen name=\"SplashScreen\" [ngModel]=\"\" placeholder=\"Browse\" (change)=\"imageUploadSplashScreen($event)\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <label for=\"AppBackground\">Splash Screen</label><br/>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <input class=\"content__file-input\" type=\"file\" #AppBackground name=\"AppBackground\" [ngModel]=\"\" placeholder=\"Browse\" (change)=\"imageUploadBackGround($event)\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <label for=\"theme\">Theme</label>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <input type=\"color\" #Theme name=\"Theme\" [ngModel]=\"Theme.value\" style=\"width: 60px; padding: 0; border: 0; border-radius: 0; box-shadow: none;\"\n                            />\n                            <span style=\"width: 60px;display: block; color:black;text-align:center; padding: 0;background-color:#e0e0e0 ;border: 1; border-radius: 1; box-shadow: none;\">{{Theme.value}}</span>\n\n                          </div>\n\n                        </div>\n                        <div class=\"row\">\n\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <label for=\"ShowDemoButton\">Show Demo Button</label>\n                          </div>\n                          <div class=\"col-md-8\">\n                            <input type=\"checkbox\" #ShowDemoButton [value]=\"ShowDemoButton.value\" name=\"ShowDemoButton\" [ngModel]=\"ShowDemoButton.value\"\n                              placeholder=\"Store Demo Button\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                  <div class=\"modal__footer\">\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <button type=\"button\" class=\"btn btn-primary pull-right\" data-dismiss=\"modal\">Cancel</button>\n                        </div>\n                        <div class=\"col-md-6\" align=\"left\">\n                          <a class=\"btn btn-nonprimary Next\" (click)=\"clickHighlighted('tabThree')\">Next</a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div role=\"tabpanel\" class=\"tab-pane\" id=\"othersettings\">\n                  <div class=\"modal__scroll\">\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <div class=\"row\">\n                            <div class=\"col-md-4\">\n                              <label for=\"TimeOut\">Time Duration</label>\n                            </div>\n                            <div class=\"col-md-8\">\n                              <select #TimeOut name=\"TimeOut\" [ngModel]=\"''\" class=\"new-todo\" class=\"form-control\">\n                                <option value=\"\">Select TimeOut</option>\n                                <option value=\"20\">D20</option>\n                                <option value=\"50\">D50</option>\n                                </select>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <div class=\"row\">\n                            <div class=\"col-md-4\">\n                              <label for=\"languages\">Languages</label>\n                            </div>\n                            <div class=\"col-md-8\">\n                              <select #Languages multiple class=\"content__multi-select\" name=\"Languages\" [ngModel]=\"''\">\n                                <option value=\"\">Select Languages</option>\n                                <option value=\"0\">English</option>\n                                <option value=\"1\">German</option>\n                                <option value=\"2\">French</option>\n                                <option value=\"3\">Spanish</option>\n                                <option value=\"4\">Portuguese</option>\n                                <option value=\"5\">Chinese</option>\n                              </select>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <div class=\"row\">\n                            <div class=\"col-md-4\">\n                              <label for=\"AppPassCode\">App Pass Code</label>\n                            </div>\n                            <div class=\"col-md-8\">\n                              <input type=\"checkbox\" #AppPassCode name=\"AppPassCode\" [value]=\"AppPassCode.value\" [ngModel]=\"AppPassCode.value\" placeholder=\"App Pass Code\">\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <div class=\"row\">\n                            <div class=\"col-md-4\">\n                              <label for=\"TouchId\">Touch ID</label>\n                            </div>\n                            <div class=\"col-md-8\">\n                              <input type=\"checkbox\" #TouchId name=\"TouchId\" [value]=\"TouchId.value\" [ngModel]=\"TouchId.value\" placeholder=\"Touch ID\">\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <div class=\"row\">\n                            <div class=\"col-md-4\">\n                              <label for=\"Website URL\">Website URL</label>\n                            </div>\n                            <div class=\"col-md-8\">\n                              <table class=\"content__table-website\">\n                                <thead>\n                                  <tr>\n                                    <th class=\"content__table-header\">#</th>\n                                    <th class=\"content__table-header\">URL</th>\n                                    <th class=\"content__table-header\">Store Name</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <ng-container #whiteListUrls *ngFor=\"let whiteListUrl of whiteListUrls; let rowIndex=index\">\n                                    <tr>\n                                      <td class=\"content__table-text\">{{rowIndex+1}}</td>\n                                      <td class=\"content__table-text\"><input class=\"form-control\" id='url{{rowIndex}}' name='url{{rowIndex}}' class=\"website-input\"\n                                          [(ngModel)]=\"whiteListUrl.url\" required/>\n                                      </td>\n                                      <td class=\"content__table-text\"><input class=\"form-control\" id='storename{{rowIndex}}' name='storename{{rowIndex}}' class=\"website-input\"\n                                          [(ngModel)]=\"whiteListUrl.storename\" required/>\n                                      </td>\n                                    </tr>\n                                    <tr>\n\n                                    </tr>\n                                  </ng-container>\n                                  <tr>\n                                    <td></td>\n                                    <td></td>\n                                    <td>\n                                      <button class=\"content__table-button button-adddel pull-right\" (click)=\"remove(); $event.preventDefault()\"><span class=\"glyphicon glyphicon-minus\"></span></button>\n                                      <button class=\"content__table-button button-adddel pull-right\" (click)=\"addNew(); $event.preventDefault()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\n                                    </td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n                  </div>\n                  <div class=\"modal__footer\">\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <button type=\"button\" class=\"btn btn-primary pull-right\" data-dismiss=\"modal\">Cancel</button>\n                        </div>\n                        <div class=\"col-md-6\" align=\"left\">\n                          <button type=\"submit\" class=\"btn btn-nonprimary Next\">Submit</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app-generation-portal/app-generation-portal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*************\n // google fonts available on this page\n 'Roboto', \n 'Roboto Condensed' \n=======================\n font-size, padding, margin, line-height should be in rem\n ****************/\n/************ mixins ***************/\n/************ mixins ***************/\n/************ conversions this needs to be moved in diff file later ***************/\n/************ conversions ***************/\n.content__header {\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.content__header-text {\n  font-size: 24px;\n  margin: 0; }\n\n.content__table thead {\n  background: #93a1ac;\n  color: #fff;\n  font-size: 13px; }\n\n.content__table tbody {\n  color: #606060;\n  font-size: 12px; }\n\n.content__table tbody td {\n  padding: 15px 10px; }\n\n.content__button {\n  font-size: 1.3rem; }\n\n.content__file-input {\n  font-size: 1.5rem; }\n\n.content__multi-select {\n  padding: 6px 6px 6px 6px;\n  border: solid 1px #dcdcdc;\n  border-radius: 15px;\n  height: 70px;\n  width: 275px;\n  font-size: 1.5rem; }\n\n.content__table-website {\n  font-size: 1.3rem;\n  padding: 0; }\n\n.content__table-website-header {\n  padding: 0.5rem; }\n\n.content__table-website-text {\n  padding: 1rem 0; }\n\nlabel {\n  font-size: 11px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  width: 250px;\n  color: #cccccc; }\n\ninput[type=\"text\"], select {\n  padding: 6px 6px 6px 6px;\n  border: solid 1px #dcdcdc;\n  border-radius: 15px;\n  height: 33px;\n  width: 275px; }\n\ninput[type=\"color\"] {\n  height: 30px;\n  width: 275px;\n  border: solid 1px #dcdcdc;\n  border-radius: 15px; }\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 2px solid #0B72CA;\n  font-weight: bold;\n  color: #0B72CB; }\n\n.nav-tabs > li > a {\n  color: #787D79; }\n\n/* remove the \"grey\" border when hovering the li elements */\n.nav-tabs > li > a:hover {\n  border: 1px solid transparent; }\n\n/* remove the \"grey\" background colour when hovering the li elements */\n.nav > li > a:focus, .nav > li > a:hover {\n  background-color: transparent; }\n\n.modal-footerContent {\n  -ms-flex-line-pack: center;\n      align-content: center; }\n\n.tab-content .tab-pane {\n  padding: 20px 10px 0 0; }\n\n.nav-tabs {\n  box-shadow: 0 10px 5px -6px #ccc; }\n\n.website-input {\n  height: 20px;\n  width: 125px; }\n\n.website-head {\n  margin: auto; }\n\n.button-adddel {\n  height: 25px;\n  width: 25px; }\n\n.pointer {\n  cursor: pointer; }\n\n.btn {\n  padding: 6px 40px;\n  border-radius: 500px; }\n\n.btn.btn-primary {\n  color: #2A9FD9;\n  background-color: #ffffff; }\n\n.btn.btn-nonprimary {\n  color: #ffffff;\n  background-color: #0B00FF;\n  border-color: #0B00FF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-generation-portal/app-generation-portal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppGenerationPortalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_AppSettingsList_service__ = __webpack_require__("../../../../../src/app/app-generation-portal/services/AppSettingsList.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AppSettingsPost_service__ = __webpack_require__("../../../../../src/app/app-generation-portal/services/AppSettingsPost.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppGenerationPortalComponent = (function () {
    function AppGenerationPortalComponent(_getDataService, _appsettingsPostService) {
        this._getDataService = _getDataService;
        this._appsettingsPostService = _appsettingsPostService;
        this.isDesc = false;
        this.column = 'ProductName';
        this.appsettings = [];
        this.whiteListUrls = [{ id: 'ch1', url: 'sam', storename: 'sam' }];
        this.AllLanguages = [{ "id": 1, "key": "E", "value": "English" }, { "id": 2, "key": "D", "value": "German" }, { "id": 3, "key": "F", "value": "French" }, { "id": 4, "key": "S", "value": "Spanish" }, { "id": 5, "key": "P", "value": "Portuguese" }, { "id": 6, "key": "1", "value": "Chinese" }];
        this.urls = "[";
        //post request 1
        this.appSettingPayload = {
            "AppsettingsId": "AppSId2",
            "CustomerId": "customer1",
            "ProductCode": "ProductA",
            "ProductName": "ProuductA",
            "Platform": "",
            "HostName": "smpprd.innovapptive.com",
            "Port": "30015",
            "ApplicationId": "com.proudct.innovapptive",
            "Https": true,
            "SampleData": true,
            "AppName": "Demo",
            "SecurityType": "SSO2",
            "Environment": "Unix",
            "Logo": "",
            "AppIcon": "",
            "SplashScreen": "",
            "AppBackground": "",
            "Theme": "",
            "StoreName": "store1",
            "ShowDemoButton": true,
            "AppPassCode": true,
            "TouchId": true,
            "TimeOut": "5",
            "Languages": "{id:1,key:E,value:English}",
            "WhiteListUrl": "[{ApplicationID: com.innovapptive.cc.race,StoreName:RACE},{ApplicationID: com.innovapptive.cc.race1,StoreName:RACE1}]",
            "BuildNo": 1,
            "BuildLink": "",
            "CreatedOn": "",
            "CreatedBy": "Sunil",
            "Modified": "",
            "Settings": ""
        };
    }
    AppGenerationPortalComponent.prototype.ngOnInit = function () {
        this.getData();
        this.sort(this.column);
        // this.PostSettings();
    };
    AppGenerationPortalComponent.prototype.getData = function () {
        var _this = this;
        this._getDataService.getDataSources()
            .subscribe(function (appsettings) { return _this.appsettings = appsettings; }, function (error) { return console.log(error); });
    };
    AppGenerationPortalComponent.prototype.PostSettings = function () {
        var _this = this;
        this._appsettingsPostService.doPost(this.appSettingPayload)
            .subscribe(function (data) { return _this.postData = data; }, function (error) { return console.log(error); }, function () {
            _this.getData();
            //console.log(this.postData)
        });
    };
    AppGenerationPortalComponent.prototype.onSubmit = function (form) {
        //this is a hack for the demo purpose
        this.appSettingPayload.AppName = form.value.AppName;
        this.appSettingPayload.Platform = form.value.Platform;
        this.appSettingPayload.HostName = form.value.HostName;
        this.appSettingPayload.Port = form.value.Port;
        this.appSettingPayload.ApplicationId = form.value.ApplicationId;
        this.appSettingPayload.Environment = form.value.Environment;
        //this.appSettingPayload.Https = form.value.Https;
        //this.appSettingPayload.SampleData = form.value.SampleData;
        /* this.appSettingPayload.Logo="";
         this.appSettingPayload.AppIcon="";
         this.appSettingPayload.SplashScreen="";*/
        this.appSettingPayload.Theme = form.value.Theme;
        //this.appSettingPayload.StoreName = form.value.StoreName;
        //this.appSettingPayload.ShowDemoButton = form.value.ShowDemoButton;
        this.appSettingPayload.TimeOut = form.value.TimeOut;
        this.appSettingPayload.Languages = form.value.Languages;
        this.appSettingPayload.Languages = this.appSettingPayload.Languages.toString();
        this.appSettingPayload.StoreName = form.value.StoreName;
        //this.appSettingPayload.AppPassCode = form.value.AppPassCode;
        //this.appSettingPayload.TouchId = form.value.TouchId;
        //this.appSettingPayload.WhiteListUrl = this.appSettingPayload.WhiteListUrl.toString();
        for (var i = 0; i < this.whiteListUrls.length; i++) {
            var strid = "{id:" + (i + 1) + ",";
            var a = this.whiteListUrls[i].url;
            var b = this.whiteListUrls[i].storename;
            var res = "";
            if (i != (this.whiteListUrls.length - 1)) {
                res = strid + "\"ApplicationID\":\"" + a + "\"," + "\"StoreName\":\"" + b + "\"},";
            }
            else {
                res = strid + ",\"ApplicationID\":\"" + a + "\"," + "\"StoreName\":\"" + b + "\"}]";
            }
            this.urls += res;
            //console.log(this.whiteListUrls[i])
        }
        //console.log(this.urls);
        this.appSettingPayload.WhiteListUrl = this.urls;
        //based on selected languages need to do formatting which accepts service
        var selectedLanguagesPayload = "[";
        //console.log(this.appSettingPayload.Languages);
        var selectedLanguages = this.appSettingPayload.Languages.split(",");
        for (var j = 0; j < selectedLanguages.length; j++) {
            var element_languages = selectedLanguages[j];
            var objLanugage = this.AllLanguages[element_languages];
            var id = j + 1;
            var key = objLanugage.key;
            var value = objLanugage.value;
            var langVals = "{id:" + id + ",key:" + "\"" + key + "\",value:\"" + value + "\"},";
            if (id == selectedLanguages.length)
                langVals = "{id:" + id + ",key:" + "\"" + key + "\",value:\"" + value + "\"}]";
            selectedLanguagesPayload += langVals;
        }
        this.appSettingPayload.Languages = selectedLanguagesPayload;
        //console.log(selectedLanguagesPayload);
        //console.log(this.appSettingPayload);
        //Calls
        this.PostSettings();
        //reset all the binding fields
        this.resetForm();
    };
    AppGenerationPortalComponent.prototype.imageUploadLogo = function (e) {
        var _this = this;
        var reader = new FileReader();
        //get the selected file from event
        var file = e.target.files[0];
        var baseval = "";
        reader.onloadend = function () {
            var base64val = reader.result;
            baseval = base64val.substring(base64val.indexOf("base64,") + 7);
            _this.appSettingPayload.Logo = baseval;
            //console.log(baseval);
        };
        reader.readAsDataURL(file);
    };
    AppGenerationPortalComponent.prototype.imageUploadAppIcon = function (e) {
        var _this = this;
        var reader = new FileReader();
        //get the selected file from event
        var file = e.target.files[0];
        var baseval = "";
        reader.onloadend = function () {
            var base64val = reader.result;
            baseval = base64val.substring(base64val.indexOf("base64,") + 7);
            _this.appSettingPayload.AppIcon = baseval;
            //console.log(baseval);
        };
        reader.readAsDataURL(file);
    };
    AppGenerationPortalComponent.prototype.imageUploadSplashScreen = function (e) {
        var _this = this;
        var reader = new FileReader();
        //get the selected file from event
        var file = e.target.files[0];
        var baseval = "";
        reader.onloadend = function () {
            var base64val = reader.result;
            baseval = base64val.substring(base64val.indexOf("base64,") + 7);
            _this.appSettingPayload.SplashScreen = baseval;
            //console.log(baseval);
        };
        reader.readAsDataURL(file);
    };
    AppGenerationPortalComponent.prototype.imageUploadBackGround = function (e) {
        var _this = this;
        var reader = new FileReader();
        //get the selected file from event
        var file = e.target.files[0];
        var baseval = "";
        reader.onloadend = function () {
            var base64val = reader.result;
            baseval = base64val.substring(base64val.indexOf("base64,") + 7);
            _this.appSettingPayload.AppBackground = baseval;
            //console.log(baseval);
        };
        reader.readAsDataURL(file);
    };
    AppGenerationPortalComponent.prototype.clickHighlighted = function (id) {
        jQuery("#" + id).click();
    };
    AppGenerationPortalComponent.prototype.addNew = function () {
        var num = this.whiteListUrls.length + 1;
        this.whiteListUrls.push({ id: 'ch' + num, url: '', storename: '' });
    };
    AppGenerationPortalComponent.prototype.remove = function () {
        //check wether the array contains one element
        var lastitem = this.whiteListUrls.length;
        console.log("lastitem:" + lastitem);
        if (lastitem > 1)
            this.whiteListUrls.splice(lastitem - 1);
    };
    AppGenerationPortalComponent.prototype.resetForm = function () {
        jQuery("#createAppModal").click();
        /*this.appSettingPayload.AppBackground="";
        this.appSettingPayload.AppIcon="";
        this.appSettingPayload.ApplicationId="";
        this.appSettingPayload.AppName="";
        this.appSettingPayload.AppPassCode=false;
        this.appSettingPayload.AppsettingsId="";
        this.appSettingPayload.BuildLink="";
        this.appSettingPayload.BuildNo=0;
        this.appSettingPayload.CreatedBy="";
        this.appSettingPayload.CreatedOn="";
        this.appSettingPayload.CustomerId="";
        this.appSettingPayload.Environment="";
        this.appSettingPayload.HostName="";
        this.appSettingPayload.Https=false;
        this.appSettingPayload.Languages="";
        this.appSettingPayload.Logo="";
        this.appSettingPayload.Modified="";
        this.appSettingPayload.Platform="";
        this.appSettingPayload.Platform="";
        this.appSettingPayload.Port="";
        this.appSettingPayload.ProductCode="";
        this.appSettingPayload.ProductName="";
        this.appSettingPayload.SampleData=false;
        this.appSettingPayload.SecurityType="";
        this.appSettingPayload.Settings="";
        this.appSettingPayload.ShowDemoButton=false;
        this.appSettingPayload.SplashScreen="";
        this.appSettingPayload.StoreName="";
        this.appSettingPayload.Theme="";
        this.appSettingPayload.TimeOut="";
        this.appSettingPayload.TouchId=false;
        this.appSettingPayload.WhiteListUrl="";*/
    };
    AppGenerationPortalComponent.prototype.sort = function (property) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ;
    return AppGenerationPortalComponent;
}());
AppGenerationPortalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-app-generation-portal',
        template: __webpack_require__("../../../../../src/app/app-generation-portal/app-generation-portal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-generation-portal/app-generation-portal.component.scss"), __webpack_require__("../../../../../src/assets/scss/_buttons.scss"), __webpack_require__("../../../../../src/assets/scss/_modal.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_AppSettingsList_service__["a" /* AppSettingsListService */], __WEBPACK_IMPORTED_MODULE_2__services_AppSettingsPost_service__["a" /* AppSettingsPostService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_AppSettingsList_service__["a" /* AppSettingsListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_AppSettingsList_service__["a" /* AppSettingsListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_AppSettingsPost_service__["a" /* AppSettingsPostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_AppSettingsPost_service__["a" /* AppSettingsPostService */]) === "function" && _b || Object])
], AppGenerationPortalComponent);

var _a, _b;
//# sourceMappingURL=app-generation-portal.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-generation-portal/orderby.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (records, args) {
        return records.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.direction;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.direction;
            }
            else {
                return 0;
            }
        });
    };
    ;
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({ name: 'orderBy' })
], OrderByPipe);

//# sourceMappingURL=orderby.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/app-generation-portal/services/AppSettingsList.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppSettingsListService = (function () {
    function AppSettingsListService(http) {
        this.http = http;
        this._baseApiUrl = 'https://appgenerationportalb70068d2c.us1.hana.ondemand.com/AppGenerationPortal/AGPServlet.svc/AppSettings';
        this._formatJson = '?&$format=json';
        this._headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this._headers.append("Access-Control-Allow-Credentials", "true");
        this._headers.append('Access-Control-Allow-Origin', '*');
        this._headers.append('Content-Type', 'application/json');
        this._headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        this._headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this._headers.append('Authorization', "Basic " + btoa("customer1:password"));
        // this._options = new RequestOptions();
        this._options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, headers: this._headers });
    }
    AppSettingsListService.prototype.getDataSources = function () {
        console.log(this._options);
        return this.http.get(this._baseApiUrl, this._options)
            .map(function (res) { return res.json().value; });
    };
    return AppSettingsListService;
}());
AppSettingsListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppSettingsListService);

var _a;
//# sourceMappingURL=AppSettingsList.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-generation-portal/services/AppSettingsPost.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsPostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppSettingsPostService = (function () {
    function AppSettingsPostService(http) {
        this.http = http;
        this._baseApiUrl = 'https://appgenerationportalb70068d2c.us1.hana.ondemand.com/AppGenerationPortal/AGPServlet.svc/AppSettings';
        this._headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this._headers.append("Access-Control-Allow-Credentials", "true");
        this._headers.append('Access-Control-Allow-Origin', '*');
        this._headers.append('Content-Type', 'application/json');
        this._headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        //this._headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this._headers.append('Authorization', "Basic " + btoa("customer1:password"));
        //this._options = new RequestOptions();
        this._options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, headers: this._headers });
        //,{headers:this._options}
    }
    AppSettingsPostService.prototype.doPost = function ($obj1) {
        // console.log('posting... from doPOst')
        //console.log(JSON.stringify($obj1));
        return this.http.post(this._baseApiUrl, JSON.stringify($obj1), this._options).map(function (res) {
            {
                res.json();
            }
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return AppSettingsPostService;
}());
AppSettingsPostService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppSettingsPostService);

var _a;
//# sourceMappingURL=AppSettingsPost.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_generation_portal_app_generation_portal_component__ = __webpack_require__("../../../../../src/app/app-generation-portal/app-generation-portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_designer_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/app-designer/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signin_signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__landing_landing_component__["a" /* LandingComponent */], data: { name: 'Landing' } },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], data: { name: 'Home' } },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */], data: { name: 'Signup' } },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_7__signin_signin_component__["a" /* SignInComponent */], data: { name: 'Signin' } },
    { path: 'app-designer', component: __WEBPACK_IMPORTED_MODULE_4__app_designer_welcome_welcome_component__["a" /* WelcomeComponent */], data: { name: 'App Designer Landing' } },
    { path: 'app-generation-portal', component: __WEBPACK_IMPORTED_MODULE_3__app_generation_portal_app_generation_portal_component__["a" /* AppGenerationPortalComponent */], data: { name: 'App Genaration Landing' } },
    //{ path: 'app-designer/applauncher', component: AppsComponent, data:{ name: 'List of apps'}},
    //{ path: 'list', component: DevicepageComponent, data:{ name: 'Apps Designer'}}
    {
        path: 'app-designer/list',
        loadChildren: './app-designer/list/list.module#ListModule'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

var routingComponents = [
    __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__app_designer_welcome_welcome_component__["a" /* WelcomeComponent */], __WEBPACK_IMPORTED_MODULE_3__app_generation_portal_app_generation_portal_component__["a" /* AppGenerationPortalComponent */], __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_7__signin_signin_component__["a" /* SignInComponent */]
];
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".applauncher {\n  padding: 50px 0 0 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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
    function AppComponent(location) {
        this.location = '';
        this.location = location.path();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "\n    <router-outlet></router-outlet>\n  ",
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_designer_sanitize_html_pipe__ = __webpack_require__("../../../../../src/app/app-designer/sanitize-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__firebaseConfig__ = __webpack_require__("../../../../../src/app/firebaseConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__topmenu_topmenu_component__ = __webpack_require__("../../../../../src/app/topmenu/topmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_generation_portal_orderby_pipe__ = __webpack_require__("../../../../../src/app/app-generation-portal/orderby.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["b" /* routingComponents */],
            __WEBPACK_IMPORTED_MODULE_8__app_designer_sanitize_html_pipe__["a" /* SanitizeHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_10__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__topmenu_topmenu_component__["a" /* TopmenuComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__app_generation_portal_orderby_pipe__["a" /* OrderByPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__firebaseConfig__["a" /* firebaseConfig */]),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/firebaseConfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
// Must export the config
// Must export the config
var firebaseConfig = {
    apiKey: 'AIzaSyAkvSXEKIo9kOT2NldjljPj8kEtJoSL5Xg',
    authDomain: 'mytestapp-d87cd.firebaseio.com',
    databaseURL: 'https://mytestapp-d87cd.firebaseio.com',
    storageBucket: 'mytestapp-d87cd.appspot.com'
    //messagingSenderId: '<your-messaging-sender-id>'
};
//# sourceMappingURL=firebaseConfig.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"container\">\n        &copy; 2017 Innovapptive All Rights Reserved.\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*************\n // google fonts available on this page\n 'Roboto', \n 'Roboto Condensed' \n=======================\n font-size, padding, margin, line-height should be in rem\n ****************/\n/************ mixins ***************/\n/************ mixins ***************/\n/************ conversions this needs to be moved in diff file later ***************/\n/************ conversions ***************/\n.footer {\n  background: #f5f6f8;\n  padding: 1.5rem;\n  color: #5d5e60;\n  font-size: 1.2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<title>Race Enterprise: Home</title>\n<div class=\"wrapper active\">\n  <app-sidebar></app-sidebar>\n  <app-topmenu></app-topmenu>\n  <p style=\"padding: 10px;\">\n    This is home\n  </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"brand\">\n    <div class=\"brand__top\">\n        <!--navigation start-->\n       <app-navbar></app-navbar>\n        <!--navigation end-->\n        <!-- hero area start-->\n        <div class=\"brand__hero\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"brand__hero-left col-md-7\">\n                        <h1 class=\"brand__hero-text\">Build Mobile and Web <br/> Apps Instantly-Coding Optional!</h1>\n                        <div class=\"brand__hero-buttons-wrapper\">\n                            <a href=\"#/signup\" class=\"brand__hero-button btn btn-default brand__hero-button--try\">Try for free</a>\n                            <a href=\"#\" class=\"brand__hero-button btn btn-primary brand__hero-button--demo\">Watch demo</a>\n                        </div>\n                        <div class=\"brand__hero-link-wrapper\">\n                            <span>OR</span>\n                            <a href=\"#\" class=\"brand__hero-link\">PURCHASE</a>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"brand__hero-description col-md-9\">\n                                <h2 class=\"brand__hero-description-title\">Build Once &amp; Deploy Everywhere</h2>\n                                <p class=\"brand__hero-description-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae, recusandae blanditiis, consequuntur vero maxime soluta enim est tempore quaerat aperiam facere. Fuga cumque quis in labore est sunt inventore?</p>\n                                <a class=\"brand__hero-description-link\" href=\"#\">\n                                    How can race accelerate app development?\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"brand__hero-right\">\n                        <img class=\"brand__hero-right-img\" src=\"./assets/img/brand-hero-image.png\" alt=\"Product Image\"/>\n                    </div>\n                </div>\n            </div>  \n        </div>\n        <!-- hero area end -->\n    </div>\n    <!--productinfo bar-->\n    <div class=\"brand__info\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"col-md-4\">\n                        <h4 class=\"brand__info-heading\">200%</h4>\n                        <p class=\"brand__info-text\">Improve Productivity</p>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <h4 class=\"brand__info-heading\">5X</h4>\n                        <p class=\"brand__info-text\">Time Saving</p>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <h4 class=\"brand__info-heading\">200%</h4>\n                        <p class=\"brand__info-text\">Empowers Enterprises</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--productinfo bar end-->\n\n    <!--services-->\n        <div class=\"brand__services\">\n            <div class=\"brand__tiles brand__tiles--one\">\n                <h4 class=\"brand__services-title\">\n                    <span class=\"brand__services-icon glyphicon glyphicon-stats\"></span>Simple dumy text</h4>\n                <p class=\"brand__services-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae, recusandae blanditiis, consequuntur vero maxime soluta enim est tempore quaerat aperiam facere. Fuga cumque quis in labore est sunt inventore.</p>\n            </div>\n            <div class=\"brand__tiles brand__tiles--two\">\n                <h4 class=\"brand__services-title\"><span class=\"brand__services-icon glyphicon glyphicon-stats\"></span>Simple dumy text</h4>\n                <p class=\"brand__services-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae, recusandae blanditiis, consequuntur vero maxime soluta enim est tempore quaerat aperiam facere. Fuga cumque quis in labore est sunt inventore.</p>\n            </div>\n            <div class=\"brand__tiles brand__tiles--three\">\n                <h4 class=\"brand__services-title\"><span class=\"brand__services-icon glyphicon glyphicon-stats\"></span>Simple dumy text</h4>\n                <p class=\"brand__services-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae, recusandae blanditiis, consequuntur vero maxime soluta enim est tempore quaerat aperiam facere. Fuga cumque quis in labore est sunt inventore.</p>\n            </div>\n            <div class=\"brand__tiles brand__tiles--four\">\n                <h4 class=\"brand__services-title\"><span class=\"brand__services-icon glyphicon glyphicon-bell\"></span>Simple dumy text</h4>\n                <p class=\"brand__services-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae, recusandae blanditiis, consequuntur vero maxime soluta enim est tempore quaerat aperiam facere. Fuga cumque quis in labore est sunt inventore.</p>\n                <p class=\"brand__services-text\"></p>\n            </div>\n        </div>\n    <!--services end-->\n\n    <!-- responsive -->\n    <div class=\"brand__responsive\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"brand__responsive-left\">\n                    <img class=\"brand__responsive-img\" src=\"./assets/img/brand-responsive.png\" alt=\"Product information\" />\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"brand__responsive-right\">\n                    <h3 class=\"brand__responsive-title\">Simple dumy text</h3>\n                    <p class=\"brand__responsive-text\">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae, recusandae blanditiis, consequuntur vero maxime soluta enim est tempore quaerat aperiam facere. Fuga cumque quis in labore est sunt inventore.   \n                    </p>\n                    <ul class=\"brand__responsive-links\">\n                        <li class=\"brand__responsive-items\">\n                            <a class=\"brand__responsive-link\" href=\"#\">Simply dummy</a>\n                        </li>\n                        <li class=\"brand__responsive-items\">\n                            <a class=\"brand__responsive-link\" href=\"#\">Simply dummy</a>\n                        </li>\n                        <li class=\"brand__responsive-items\">\n                            <a class=\"brand__responsive-link\" href=\"#\">Simply dummy</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- responsive end -->\n\n    <!--footer -->\n    <app-footer></app-footer>\n    <!--footer end-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*************\n // google fonts available on this page\n 'Roboto', \n 'Roboto Condensed' \n=======================\n font-size, padding, margin, line-height should be in rem\n ****************/\n/************ mixins ***************/\n/************ mixins ***************/\n/************ conversions this needs to be moved in diff file later ***************/\n/************ conversions ***************/\n.brand__top {\n  background: url(" + __webpack_require__("../../../../../src/assets/img/landing-home-top.svg") + ") no-repeat left top/100% auto; }\n  @media (min-width: 768px) {\n    .brand__top {\n      min-height: 730px; } }\n  @media (max-width: 768px) {\n    .brand__top {\n      background-size: 1170px auto; } }\n\n.brand__hero-left {\n  padding: 4rem 0 0; }\n  @media (max-width: 768px) {\n    .brand__hero-left {\n      padding: 2rem; } }\n\n.brand__hero-text {\n  color: #fff;\n  font-family: 'Roboto', sans-serif;\n  font-weight: normal;\n  line-height: 7rem;\n  font-size: 5rem; }\n  @media (max-width: 768px) {\n    .brand__hero-text {\n      font-size: 4rem;\n      margin: 0;\n      line-height: 5rem; } }\n\n.brand__hero-buttons-wrapper {\n  padding: 5rem 0 0; }\n\n.brand__hero-button {\n  font-family: 'Roboto Condensed', sans-serif;\n  font-size: 2rem;\n  text-transform: uppercase;\n  padding: 1.3rem 3.5rem;\n  border-radius: 7px; }\n  .brand__hero-button--try {\n    color: #0279d8;\n    margin-right: 20px; }\n  .brand__hero-button--demo {\n    color: #fff;\n    background-color: #007bdb; }\n\n.brand__hero-link-wrapper {\n  padding: 2rem 0;\n  font-family: 'Roboto Condensed', sans-serif;\n  font-size: 1.8rem;\n  color: #fff;\n  letter-spacing: 2px; }\n\n.brand__hero-link {\n  color: #fff;\n  text-decoration: underline; }\n  .brand__hero-link:hover {\n    text-decoration: none; }\n\n.brand__hero-description {\n  padding-top: 4rem;\n  color: #D5DCEF; }\n  @media (max-width: 768px) {\n    .brand__hero-description {\n      padding-right: 8rem; } }\n\n.brand__hero-description-title {\n  font-family: 'Roboto', sans-serif;\n  font-size: 3.6rem; }\n\n.brand__hero-description-text {\n  font-family: 'Roboto Condensed', sans-serif;\n  font-size: 1.5rem; }\n\n.brand__hero-description-link {\n  color: #060e16;\n  font-size: 1.8rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  display: block;\n  margin-top: 2rem;\n  text-decoration: underline;\n  font-family: 'Roboto Condensed', sans-serif; }\n  .brand__hero-description-link:hover {\n    text-decoration: none; }\n\n.brand__hero-right {\n  position: absolute;\n  right: 0;\n  top: 15%; }\n  @media (max-width: 768px) {\n    .brand__hero-right {\n      display: none; } }\n\n.brand__hero-right-img {\n  height: 490px;\n  margin-top: 10%; }\n\n.brand__info {\n  padding: 2rem 0;\n  background: #e4eaf6;\n  text-align: center;\n  font-family: 'Roboto Condensed', sans-serif; }\n\n.brand__info-heading {\n  font-size: 6rem;\n  font-weight: bold;\n  color: #3c396c; }\n\n.brand__info-text {\n  font-size: 2.2rem;\n  color: #67687d; }\n\n.brand__services {\n  background: url(" + __webpack_require__("../../../../../src/assets/img/brand-services-images.png") + ") no-repeat 50% bottom/80% auto;\n  height: 80rem;\n  padding-top: 20rem;\n  position: relative; }\n\n.brand__tiles {\n  width: 400px;\n  position: absolute;\n  background: #fff;\n  box-shadow: 0 0 15px #eee;\n  padding: 2rem;\n  top: 0;\n  left: 0; }\n  .brand__tiles--one {\n    top: 12%;\n    left: 19%; }\n  .brand__tiles--two {\n    top: 28%;\n    left: 55%; }\n  .brand__tiles--three {\n    top: 51%;\n    left: 12%; }\n  .brand__tiles--four {\n    top: 61%;\n    left: 62%; }\n\n.brand__services-title {\n  font-size: 2rem;\n  font-family: 'Roboto Condensed', sans-serif;\n  font-weight: bold; }\n\n.brand__services-text {\n  color: #676767;\n  font-size: 1.1rem; }\n\n.brand__services-icon {\n  margin-right: 1rem;\n  background: #0096ff;\n  border-radius: 20px;\n  min-height: 3rem;\n  color: #fff;\n  padding: 0.5rem; }\n\n.brand__responsive {\n  background: #007bdb;\n  padding: 10rem; }\n\n.brand__responsive-img {\n  width: 90%; }\n\n.brand__responsive-title {\n  font-family: 'Roboto Condensed', sans-serif;\n  font-size: 4rem;\n  color: #fff;\n  font-weight: bold; }\n\n.brand__responsive-text {\n  color: #fff;\n  font-size: 1.3rem;\n  padding-top: 3rem; }\n\n.brand__responsive-links {\n  margin: 0;\n  padding-top: 3rem;\n  -webkit-padding-start: 0; }\n\n.brand__responsive-items {\n  display: inline-block;\n  margin: 1rem;\n  border-right: solid 1px #fff;\n  padding-right: 1rem; }\n  .brand__responsive-items:last-child {\n    border: 0; }\n\n.brand__responsive-link {\n  display: block;\n  color: #fff;\n  font-size: 1.4rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.scss")]
    })
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle navbar__button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                    <span class=\"icon-bar navbar__icon\"></span>\n                    <span class=\"icon-bar navbar__icon\"></span>\n                    <span class=\"icon-bar navbar__icon\"></span>                        \n                </button>\n                <a class=\"navbar-brand navbar__logo\" href=\"#\">\n                    <img class=\"brand__logo-img\" src=\"./assets/img/logo.svg\" alt=\"Innovapptive\" />\n                </a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li class=\"navbar__item dropdown\">\n                        <a class=\"navbar__link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Products</a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Product overview</a></li>\n                            <li><a href=\"#\">Pricing</a></li>\n                            <li><hr/></li>\n                            <li><a href=\"#\">Mbile app store</a></li>\n                            <li><a href=\"#\">Mbile app security</a></li>\n                            <li><hr/></li>\n                            <li><a href=\"#\">Learn more</a></li>\n                        </ul>\n                    </li>\n                    <li class=\"navbar__item\"><a class=\"navbar__link\" href=\"#\">App Catalog</a></li>\n                    <li class=\"navbar__item\"><a class=\"navbar__link\" href=\"#\">Support</a></li>\n                    <li class=\"navbar__item\"><a class=\"navbar__link navbar__contact\" href=\"#\">Contact Us</a></li>\n                    <li class=\"navbar__item\"><a class=\"navbar__link navbar__login\" href=\"#/signin\">Login</a></li>\n                </ul>\n            </div>\n        </div>\n    </nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*************\n // google fonts available on this page\n 'Roboto', \n 'Roboto Condensed' \n=======================\n font-size, padding, margin, line-height should be in rem\n ****************/\n/************ mixins ***************/\n/************ mixins ***************/\n/************ conversions this needs to be moved in diff file later ***************/\n/************ conversions ***************/\n.navbar {\n  padding: 1rem 0; }\n  .navbar__logo {\n    height: 45px;\n    padding: 10px 0;\n    overflow: hidden; }\n    @media (max-width: 768px) {\n      .navbar__logo {\n        padding-left: 2rem; } }\n  .navbar__button {\n    border: solid 1px #fff; }\n  .navbar__icon {\n    background: #fff; }\n  .navbar__link {\n    color: #fff;\n    text-transform: uppercase;\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 1.3rem;\n    padding: 1.5rem 2rem;\n    letter-spacing: 0.1rem; }\n    .navbar__link:hover {\n      background-color: transparent;\n      color: #000; }\n  .navbar__login {\n    border: solid 1px #fff;\n    border-radius: 15px;\n    padding: 0.3rem 3rem;\n    margin-top: 1.2rem;\n    text-transform: capitalize; }\n  .navbar__contact {\n    text-transform: capitalize; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.scss")]
    })
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <ul id=\"sidebar_menu\" class=\"sidebar__nav\">\n    <li class=\"sidebar__name\" (click)=\"toggleSidebar()\" id=\"menu-toggle\">\n        Name\n        <div id=\"main_icon\" class=\"sidebar__menu-icon pull-right active\">\n          <span></span>\n        </div>\n    </li>\n  </ul>\n  <ul class=\"sidebar__nav\" id=\"sidebar\">\n    <li class=\"sidebar__menu-item\"><a class=\"sidebar__menu-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/home\">Home <span class=\"glyphicon glyphicon-home\"></span></a></li>\n    <li class=\"sidebar__menu-item\"><a class=\"sidebar__menu-link\" routerLinkActive=\"active\" routerLink=\"/app-designer\">App Designer<span class=\"glyphicon glyphicon-book\"></span></a></li>\n    <li class=\"sidebar__menu-item\"><a class=\"sidebar__menu-link\" routerLinkActive=\"active\" routerLink=\"/a\">Race SDK Access <span class=\"glyphicon glyphicon-cloud-download\"></span></a></li>\n    <li class=\"sidebar__menu-item\"><a class=\"sidebar__menu-link\" routerLinkActive=\"active\" routerLink=\"/b\">Race API Explorer <span class=\"glyphicon glyphicon-hdd\"></span></a></li>\n    <li class=\"sidebar__menu-item\"><a class=\"sidebar__menu-link\" routerLinkActive=\"active\" routerLink=\"/app-generation-portal\">App Generation Portal <span class=\"glyphicon glyphicon-th\"></span></a></li>\n    <li class=\"sidebar__menu-item\"><a class=\"sidebar__menu-link\" routerLinkActive=\"active\" routerLink=\"/c\">User Managment <span class=\"glyphicon glyphicon-user\"></span></a></li>\n    <li class=\"sidebar__menu-item\"><a class=\"sidebar__menu-link\" routerLinkActive=\"active\" routerLink=\"/d\">Product Documentation <span class=\"glyphicon glyphicon-file\"></span></a></li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\n  margin-left: -220px;\n  width: 220px;\n  background: #071D2B;\n  position: fixed;\n  height: 100%;\n  z-index: 10000;\n  transition: all .4s ease 0s; }\n  .sidebar__name {\n    height: 65px;\n    font-size: 18px;\n    color: #fff;\n    opacity: 0.7;\n    padding: 20px 5px 20px 20px; }\n  .sidebar__menu-icon {\n    border: solid 1px #CACDCC;\n    padding: 10px 0 0 2px;\n    border-radius: 3px;\n    font-size: 0;\n    width: 25px;\n    height: 25px;\n    font-weight: normal; }\n    .sidebar__menu-icon.active span {\n      background: transparent; }\n      .sidebar__menu-icon.active span:before {\n        -webkit-transform: rotate(45deg) translate(5px, 6px);\n                transform: rotate(45deg) translate(5px, 6px); }\n      .sidebar__menu-icon.active span:after {\n        -webkit-transform: rotate(-45deg) translate(5px, -6px);\n                transform: rotate(-45deg) translate(5px, -6px); }\n    .sidebar__menu-icon span {\n      position: relative;\n      display: inline-block;\n      width: 20px;\n      height: 3px;\n      background: #929698;\n      transition: all .6s ease-in-out;\n      vertical-align: bottom; }\n      .sidebar__menu-icon span:before, .sidebar__menu-icon span:after {\n        position: absolute;\n        background: #929698;\n        content: '';\n        width: 20px;\n        height: 3px;\n        transition: all .6s ease-in-out; }\n      .sidebar__menu-icon span:before {\n        top: -8px; }\n      .sidebar__menu-icon span:after {\n        top: 8px; }\n  .sidebar a.active span {\n    background: transparent; }\n    .sidebar a.active span:before {\n      -webkit-transform: rotate(45deg) translate(5px, 6px);\n              transform: rotate(45deg) translate(5px, 6px); }\n    .sidebar a.active span:after {\n      -webkit-transform: rotate(-45deg) translate(5px, -6px);\n              transform: rotate(-45deg) translate(5px, -6px); }\n  .sidebar__nav {\n    display: block;\n    float: left;\n    width: 220px;\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n  .sidebar__menu-item {\n    border-top: 1px solid #112735;\n    border-bottom: 1px solid #112735;\n    transition: background .5s;\n    height: 40px; }\n    .sidebar__menu-item:hover {\n      background: #152735; }\n      .sidebar__menu-item:hover .sidebar__menu-link {\n        color: #2A99B9; }\n      .sidebar__menu-item:hover .glyphicon {\n        color: #2A99B9; }\n  .sidebar__menu-link {\n    color: #929698;\n    text-decoration: none;\n    text-indent: 10px;\n    display: block;\n    font-size: 13px;\n    padding: 10px; }\n    .sidebar__menu-link.active {\n      background: #152735;\n      color: #2A99B9; }\n      .sidebar__menu-link.active .glyphicon {\n        color: #2A99B9; }\n  .sidebar .glyphicon {\n    margin-right: 5px;\n    float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(location) {
        this.location = '';
        this.location = location.path();
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        event.preventDefault();
        jQuery(".wrapper").toggleClass("active");
        jQuery('#main_icon').toggleClass('active');
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signin\">\n    <app-navbar></app-navbar>\n    <div class=\"signin__container\">\n        <div class=\"signin__form\">\n            <div class=\"signin__logo\">\n                <img src=\"./assets/img/signin-logo.png\" alt=\"Race Logo\" />\n            </div>\n            <form name=\"login\">\n                <div class=\"form-group\">\n                    <input type=\"email\" required class=\"form-control\" placeholder=\"Email\"/>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" required class=\"form-control\" placeholder=\"Password\"/>\n                </div>\n                <div class=\"buttons\">\n                    <button class=\"btn btn-primary signin__button\">Sign In </button>\n                </div>  \n            </form>\n            <div class=\"row\">\n                <div class=\"col-xs-6 col-md-6 col-lg-6 signin__remember-me\">\n                    <input type=\"checkbox\" id=\"rememberme\" />\n                    <label for=\"rememberme\" class=\"signin__remember-me-text\">Remember Me</label>\n                </div>\n                <div class=\"col-xs-6 col-md-6 col-lg-6 signin__forgot-password\">\n                    <a href=\"#\" class=\"signin__link\">Forgot Password?</a>\n                </div>\n            </div>\n            <div class=\"signin__footer\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6 col-md-6 col-lg-6 text-right\">\n                        <a href=\"#\" class=\"signin__link signin__link--spacing\">Not a customer</a>\n                    </div>\n                    <div class=\"col-xs-6 col-md-6 col-lg-6 text-left\">\n                        <a href=\"#/home\" class=\"btn btn-default signin__footer-button\">Try for free</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-footer></app-footer>        \n</div>"

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*************\n // google fonts available on this page\n 'Roboto', \n 'Roboto Condensed' \n=======================\n font-size, padding, margin, line-height should be in rem\n ****************/\n/************ mixins ***************/\n/************ mixins ***************/\n/************ conversions this needs to be moved in diff file later ***************/\n/************ conversions ***************/\n.signin {\n  background: #3e63b1;\n  width: 100%;\n  height: 100vh; }\n  .signin__container {\n    background: #fff url(" + __webpack_require__("../../../../../src/assets/img/signin-bg.png") + ") no-repeat 0 -105px;\n    width: 100%; }\n    @media (min-width: 768px) {\n      .signin__container {\n        width: 90rem;\n        margin: 5rem auto 5rem auto;\n        min-height: 45rem; } }\n  .signin__form {\n    text-align: center;\n    width: 100%;\n    padding: 0 2rem;\n    background: #fff; }\n    @media (min-width: 768px) {\n      .signin__form {\n        width: 40rem;\n        margin: 3rem;\n        float: right;\n        padding: 0; } }\n  .signin__logo {\n    padding-bottom: 2rem; }\n  .signin__button {\n    width: 100%;\n    background: #007bdb;\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 2rem;\n    font-weight: bold; }\n  .signin__remember-me {\n    text-align: left;\n    font-size: 1.5rem;\n    color: #929cc3;\n    font-family: 'Roboto Condensed', sans-serif;\n    padding-top: 1rem;\n    padding-bottom: 1rem; }\n  .signin__remember-me-text {\n    font-weight: normal; }\n  .signin__forgot-password {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    text-align: right; }\n  .signin__link {\n    color: #929cc3;\n    font-family: 'Roboto Condensed', sans-serif;\n    text-align: right;\n    font-size: 1.5rem;\n    display: inline-block; }\n    .signin__link--spacing {\n      padding-top: 7px; }\n  .signin__footer {\n    padding: 2rem 0;\n    border-top: dashed 1px #ccc;\n    margin-top: 3rem; }\n  .signin__footer-button {\n    border: solid 1px #007bdb;\n    color: #007bdb; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SignInComponent = (function () {
    function SignInComponent() {
    }
    return SignInComponent;
}());
SignInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signin/signin.component.scss")]
    })
], SignInComponent);

//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup\">\n    <app-navbar></app-navbar>\n    <div class=\"signup__container\">\n        <h1 class=\"signup__title\">Start with RACE Enterprise</h1>\n        <span class=\"signup__caption\">FREE 30-DAYS</span>\n        <span class=\"signup__help\">Questions? Call us +1 (713) 275 1804</span>\n        <form name=\"signup\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Job title\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" placeholder=\"Business email\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"number\" class=\"form-control\" placeholder=\"Phone\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Company\">\n            </div>\n            <div class=\"form-group\">\n                <select class=\"form-control\">\n                    <option>1-100 Employees</option>\n                    <option>100-200 Employees</option>\n                    <option>200-300 Employees</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <select class=\"form-control\">\n                    <option>India</option>\n                    <option>United States</option>\n                    <option>Australia</option>\n                    <option>New Zealand</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <select class=\"form-control\">\n                    <option disabled>States</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <select class=\"form-control\">\n                    <option disabled>Languages</option>\n                </select>\n            </div>\n            <input type=\"submit\" value=\"Start free trail\" class=\"btn btn-primary signup__button\" />\n        </form>\n        <p class=\"signup__terms\">\n            By submitting this form, you are confirming you have read and agree to our\n            <a href=\"#\" class=\"signup__terms-link\">Terms and privacy statement</a>\n        </p>\n    </div>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*************\n // google fonts available on this page\n 'Roboto', \n 'Roboto Condensed' \n=======================\n font-size, padding, margin, line-height should be in rem\n ****************/\n/************ mixins ***************/\n/************ mixins ***************/\n/************ conversions this needs to be moved in diff file later ***************/\n/************ conversions ***************/\n.signup {\n  background: #3e63b1; }\n  .signup__container {\n    margin: 0 auto;\n    width: 100%;\n    padding: 0 2rem; }\n    @media (min-width: 768px) {\n      .signup__container {\n        width: 45rem; } }\n  .signup__title {\n    font-family: 'Roboto', sans-serif;\n    font-size: 2.8rem;\n    color: #fff;\n    text-align: center; }\n  .signup__caption {\n    text-transform: uppercase;\n    color: #fff;\n    text-align: center;\n    padding: 0 0 1rem 0;\n    font-size: 2rem;\n    display: block; }\n  .signup__help {\n    color: #fff;\n    text-align: center;\n    padding: 0 0 1rem 0;\n    font-size: 1.5rem;\n    display: block; }\n  .signup__button {\n    background: #263c66;\n    font-family: 'Roboto condensed', sans-serif;\n    color: #fff;\n    font-size: 2rem;\n    font-weight: bold;\n    width: 100%; }\n  .signup__terms {\n    padding: 1rem 0 0 0;\n    color: #9fb1d5;\n    font-size: 1.2rem;\n    line-height: 2rem;\n    clear: left;\n    text-align: center; }\n  .signup__terms-link {\n    color: #9fb1d5;\n    text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SignupComponent = (function () {
    function SignupComponent() {
    }
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.scss")]
    })
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/topmenu/topmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"location.indexOf('list') === -1\" class=\"topmenu\">\n  <ul class=\"topmenu__container\">\n    <li class=\"topmenu__item\"><a href=\"#\" class=\"topmenu__link\">Home</a></li>\n    <li class=\"topmenu__item\"><a href=\"#\" class=\"topmenu__link\">Settings</a></li>\n    <li class=\"topmenu__item\"><a href=\"#\" class=\"topmenu__link\">License</a></li>\n    <li class=\"topmenu__item\"><a href=\"#\" class=\"topmenu__link\">Day left in trail</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/topmenu/topmenu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".topmenu__container {\n  box-shadow: 0px 2px 5px #ccc;\n  padding: 0; }\n\n.topmenu__item {\n  display: inline-block;\n  font-size: 11px;\n  text-transform: uppercase;\n  list-style: none; }\n\n.topmenu__link {\n  color: #9F9F9F;\n  padding: 15px;\n  display: block;\n  border-bottom: solid 2px #fff;\n  border-top: solid 2px #fff;\n  transition: border-color 0.8s ease; }\n  .topmenu__link:hover {\n    color: #2A99B9;\n    text-decoration: none;\n    border-bottom: solid 2px #2A99B9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topmenu/topmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopmenuComponent = (function () {
    function TopmenuComponent(location) {
        this.location = '';
        this.location = location.path();
    }
    TopmenuComponent.prototype.ngOnInit = function () {
    };
    return TopmenuComponent;
}());
TopmenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-topmenu',
        template: __webpack_require__("../../../../../src/app/topmenu/topmenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topmenu/topmenu.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object])
], TopmenuComponent);

var _a;
//# sourceMappingURL=topmenu.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/brand-services-images.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "brand-services-images.0b2629541fd47c706ea3.png";

/***/ }),

/***/ "../../../../../src/assets/img/landing-home-top.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "landing-home-top.ca41da7795db3b68ef76.svg";

/***/ }),

/***/ "../../../../../src/assets/img/signin-bg.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "signin-bg.0ea4093e47994125c341.png";

/***/ }),

/***/ "../../../../../src/assets/scss/_buttons.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\n  background: #fff;\n  border: solid 1px #ccc;\n  border-radius: 20px;\n  padding: 5px 20px;\n  color: #1283df; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/scss/_modal.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*************\n // google fonts available on this page\n 'Roboto', \n 'Roboto Condensed' \n=======================\n font-size, padding, margin, line-height should be in rem\n ****************/\n/************ mixins ***************/\n/************ mixins ***************/\n/************ conversions this needs to be moved in diff file later ***************/\n/************ conversions ***************/\n.modal__header {\n  padding-bottom: 5px;\n  border: 0px; }\n\n.modal__title {\n  padding-left: 15px; }\n\n.modal__body {\n  position: relative; }\n\n.modal__footer {\n  box-shadow: 0px -10px 5px -8px #ccc;\n  text-align: center;\n  padding-top: 2rem; }\n\n.modal__tab-item {\n  font-size: 1.5rem; }\n\n.modal__scroll {\n  max-height: 300px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-bottom: 15px; }\n\n.modal__label {\n  font-size: 1.3rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
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