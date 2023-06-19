"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Component1Component = void 0;
var core_1 = require("@angular/core");
var serviceComunication_service_1 = require("src/app/service/comunicationService/serviceComunication.service");
var Component1Component = /** @class */ (function () {
    function Component1Component() {
        this.service = core_1.inject(serviceComunication_service_1.serviceComunication);
        this.dataComponent1 = 'Component 1';
    }
    Component1Component.prototype.ngOnInit = function () {
        console.log('ng');
        this.service.serviceData.next(this.dataComponent1);
    };
    Component1Component = __decorate([
        core_1.Component({
            selector: 'app-component1',
            templateUrl: './component1.component.html',
            styleUrls: ['./component1.component.scss']
        })
    ], Component1Component);
    return Component1Component;
}());
exports.Component1Component = Component1Component;
