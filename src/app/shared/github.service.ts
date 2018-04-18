import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class GithubService {

  private client_secret: '73d7efbedebdb0713d0b316032058629dc231f66';
  private client_id: '982be8efef69d15a3bf1';


  constructor(private _http: HttpClient) {
    console.log('Github Service Ready...');
  }

  getUser(userName: string) {
    return this._http.get(`https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .map((res: any) => {
          return res
      })
  }

  getRepos(userName: string) {
    return this._http.get('https://api.github.com/users/' + userName + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map((resp: any) => {
      return resp
      })
  }
}
