import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../services/httpservice.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  posts = []
  private host = "http://"+location.hostname+":3001"

  constructor(private service: HttpserviceService) { }

  ngOnInit() {
    /*
    this.service.socket.on('AllArticles', function(data) {
      console.log(data)
      this.posts = data.articles
    }.bind(this));
    this.service.loadArticles()
    */
  }

}
