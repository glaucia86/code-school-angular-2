"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.heading = "Ultra Racing Schedule";
        this.race = {
            "id": 1,
            "name": "Daytona Thunderdome",
            "date": new Date('2512-01-04T14:00:00'),
            "about": "Race through the ruins of an ancient Florida battle arena.",
            "entryFee": 3200
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'racing-app',
            template: "\n   <h1>{{heading}}</h1>\n   <h2>{{race.name}}</h2>\n   <h3>{{race.date}}</h3>\n   <p>{{race.about}}</p>\n   "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/* Boostrap */
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=main.js.map