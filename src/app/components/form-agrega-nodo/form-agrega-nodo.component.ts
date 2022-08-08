import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodoDto } from '../ArbolPiramidal/nodo.model';

@Component({
  selector: 'app-form-agrega-nodo',
  templateUrl: './form-agrega-nodo.component.html',
  styleUrls: ['./form-agrega-nodo.component.css']
})
export class FormAgregaNodoComponent implements OnInit {
  @Input() nodo:any;
  nuevoNodo:NodoDto=new NodoDto();
  @Output() _crearNodo= new EventEmitter<NodoDto>();
  constructor() { }

  async ngOnInit(){
    this.nuevoNodo=this.nodo
  }
  apell(){
    document.getElementById("ape")?.focus()
  }

  async agregar(){
    //if(this.nuevoNodo.nombre=="" && this.nuevoNodo.apellidos=="") return;
    this._crearNodo.emit(this.nuevoNodo);
  }

}
