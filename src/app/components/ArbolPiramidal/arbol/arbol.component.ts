import { Component, Input, OnInit } from '@angular/core';
import { NodoDto } from '../nodo.model';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-piramide',
  templateUrl: './arbol.component.html',
  styleUrls: ['./arbol.component.scss']
})
export class ArbolComponent implements OnInit {
  @Input() NodosPadres: NodoDto[] = []
  constructor() { }

  async ngOnInit(){

  }

  async cargaArbolPrincipal(data:NodoDto[]){
   this.NodosPadres=data;
  }


}
