import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArbolComponent } from './ArbolPiramidal/arbol/arbol.component';
import { NodoComponent } from './ArbolPiramidal/nodo/nodo.component';
import { FormAgregaNodoComponent } from './form-agrega-nodo/form-agrega-nodo.component';

@NgModule({
  declarations: [
    ArbolComponent,
    NodoComponent,
    FormAgregaNodoComponent
  ],
  imports:[
    RouterModule, 
    CommonModule,
    FormsModule
  ],
  exports:[
    ArbolComponent,
    NodoComponent,
    FormAgregaNodoComponent
  ]
})
export class ComponentesModule { }
