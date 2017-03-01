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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var AppCallback = (function () {
    function AppCallback(http) {
        this.http = http;
        this.codeStatus = false;
        this.likes = 'no one';
        this.comments = 'no one';
        this.recentPost = 'none';
        alert(9);
    }
    AppCallback.prototype.ngOnInit = function () {
        /*const queryParams = this.router.routerState.snapshot.root.queryParams;
        const code = queryParams['code'];
        const error = queryParams['error'];
        const error_description = queryParams['error_description'];*/
        var endpoint = "https://api.instagram.com/v1/media/{media-id}/comments?access_token=4710675377.0f3c3e4.604fa9e87a86491c8fa58db1ab91069d";
        var j = this.http.get(endpoint, {});
        console.log(j);
        /* if (code) {
         alert(3);
           this.codeStatus = true;
           this.http.post(`localhost:3000/exchange_code_with_token`, {code: code})
             .map(data => data.json())
             .subscribe((data) => console.log(data));
         }
         else {
           console.log(error, ": ", error_description);
         }*/
    };
    AppCallback = __decorate([
        core_1.Component({
            selector: 'callback',
            templateUrl: 'app/app.callback.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppCallback);
    return AppCallback;
}());
exports.AppCallback = AppCallback;
//# sourceMappingURL=app.callback.js.map