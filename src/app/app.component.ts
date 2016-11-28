import { Component, ViewChild } from '@angular/core';
import * from 'hammer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @ViewChild('slidebar') slidebar;

  toggleSidebar(){
    this.slidebar.toggle()
  }
}
