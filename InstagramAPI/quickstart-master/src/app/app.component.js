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
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var http_1 = require('@angular/http');
var AppComponent = (function () {
    function AppComponent(http, activatedRouter, router) {
        this.http = http;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.likes = 'no one likes your post';
        this.comments = 'no one has commented on your post';
        this.recentPost = 'none';
    }
    AppComponent.prototype.onLoginWithInstagram = function () {
        //logs onto the instagram api
        var Client_Id = "0f3c3e4d9d234028a14c18fd8b8523d7";
        var Media_Id;
        window.location.href = "https://api.instagram.com/oauth/authorize/?client_id=" + Client_Id + "&redirect_uri=http://localhost:3000/app/app.component.html&response_type=code";
        this.activatedRouter.queryParams.subscribe(function (params) {
            var userId = params['userId'];
            console.log(userId);
        });
        //try to read the cod parameter from the url
        var queryParams = this.router.routerState.snapshot.root.queryParams;
        var code = queryParams['code'];
        console.log(code);
        //try to get the access token from the api
        this.http.get("https://www.instagram.com/oauth/authorize/?client_id=" + Client_Id + "&redirect_uri=http://localhost:3000/app/app.component.html&response_type=token&scope=public_content")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return Media_Id = data; });
        //try to get media data
        var endpoint = "https://api.instagram.com/v1/media/comments?access_token=" + Media_Id + "";
        this.http.get(endpoint)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return console.log(data); });
        //next find out what data gives and put into the likes and comments field.
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map