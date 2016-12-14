import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() filtrar = new EventEmitter<any>()
  filtros: any = {
    titular: ""
  }
  constructor() { }

  ngOnInit() {

  }

  filtrar_aux() {
    this.filtrar.emit(this.filtros)
  }

}
