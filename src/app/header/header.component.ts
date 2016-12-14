import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() togglesidebar = new EventEmitter<any>()
  title: String = "Titulo"

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.togglesidebar.emit()
  }

}
