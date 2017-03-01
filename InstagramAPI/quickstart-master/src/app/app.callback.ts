import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import {Http, HttpModule, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'callback',
  templateUrl: 'app/app.callback.html',
})

export class AppCallback implements OnInit {
  
  codeStatus: boolean = false;
  likes = 'no one';
  comments = 'no one';
  recentPost = 'none';

  constructor(private http: Http) {
    alert(9);
     }

  ngOnInit() {
    /*const queryParams = this.router.routerState.snapshot.root.queryParams;
    const code = queryParams['code'];
    const error = queryParams['error'];
    const error_description = queryParams['error_description'];*/
 var Access_token;
    var endpoint = "https://api.instagram.com/v1/media/{media-id}/comments?access_token="+Access_token;
                
		var j =this.http.get(endpoint, {})
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
  }

}