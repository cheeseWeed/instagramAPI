import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Router, ActivatedRoute, RouterModule, Params} from '@angular/router';
import 'rxjs/add/operator/map';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  {
  likes = 'no one likes your post';
  comments = 'no one has commented on your post';
  recentPost = 'none';
  constructor(private http: Http, private activatedRouter: ActivatedRoute, private router: Router) { }

  onLoginWithInstagram() {
    //logs onto the instagram api
    var Client_Id = "0f3c3e4d9d234028a14c18fd8b8523d7";
    var Media_Id;
    window.location.href = "https://api.instagram.com/oauth/authorize/?client_id="+Client_Id+"&redirect_uri=http://localhost:3000/app/app.component.html&response_type=code";
        this.activatedRouter.queryParams.subscribe((params: Params) => {
        let userId = params['userId'];
        console.log(userId);
      });

      //try to read the cod parameter from the url
    const queryParams = this.router.routerState.snapshot.root.queryParams;
    const code = queryParams['code'];
        console.log(code);

//try to get the access token from the api
    this.http.get("https://www.instagram.com/oauth/authorize/?client_id="+Client_Id+"&redirect_uri=http://localhost:3000/app/app.component.html&response_type=token&scope=public_content")
.map((res:Response) => res.json())
        .subscribe((data) => Media_Id = data);
    
    
//try to get media data
    var endpoint = "https://api.instagram.com/v1/media/comments?access_token="+Media_Id+"";    
		this.http.get(endpoint )
        .map((res:Response) => res.json())
        .subscribe((data) => console.log(data));

        //next find out what data gives and put into the likes and comments field.
    
  }
}

