import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  posts = [{ title : 'aaaa' }, { title : 'bbbb' }]

  constructor() { }

  ngOnInit() {
  }

}
