import { Component, Input, OnInit } from '@angular/core';
import { DataBaseService } from './../../../../app/services/database.service';
import { NodoDto } from '../nodo.model';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-nodo',
  templateUrl: './nodo.component.html',
  styleUrls: ['./nodo.component.scss']
})
export class NodoComponent implements OnInit {
  @Input() Nodo:NodoDto= new NodoDto();
  @Input() level:string=""
  nodoInv:NodoDto= new NodoDto();
  verForm:boolean=true
  constructor(private _db:DataBaseService) { }

  ngOnInit(){
  }

  async Agrega(nodo:any){
    if(this.Nodo.id==nodo.id){
      this.Nodo.nombre=nodo.nombre
      this.Nodo.apellidos=nodo.apellidos
      this.Nodo.pago=nodo.pago
      this.verForm=true
    }
  }

  async vopen(){
    this.verForm=false;
    
  }

}
