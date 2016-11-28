import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpserviceService {
  public socket: any;

  constructor(private http: Http) {
    this.socket = io("http://"+location.hostname+":3001");
    /*
    this.socket.on('AllArticles', function(data) {
      console.log(data)
    }.bind(this));
    */
  }

  public getSocket() {
    return this.socket
  }

  public loadArticles() {
    this.socket.emit('getAllArticles')
  }

  public addArticle() {
    this.socket.emit('setArticles', {autor: "josep", menssage: "lol"})
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    console.log(error)
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
