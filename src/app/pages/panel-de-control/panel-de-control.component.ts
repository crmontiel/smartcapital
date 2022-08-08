import { Component, Input, OnInit } from '@angular/core';
import { NodoDto } from 'src/app/components/ArbolPiramidal/nodo.model';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/database.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-panel-de-control',
  templateUrl: './panel-de-control.component.html',
  styleUrls: ['./panel-de-control.component.css']
})
export class PanelDeControlComponent implements OnInit {
  id:any
  userLogged: any;
  noGrupo:number=0
  datos:NodoDto[]=[];
  verF:boolean=true
  actualizar:boolean=false;
  verArbol:boolean=false;
  constructor(private database: DataBaseService,
    private authService: AuthService) {
    this.authService.getUserLogged().subscribe(res => {
      this.userLogged = res;
    })
  }
  grupos:any=[]
  async ngOnInit() {
      await this.cargaGrupos();
  }

  async cargaGrupos(){
    this.grupos=[]
    await this.database.obtenerTodos('grupos').subscribe(usuariosRef => {
      usuariosRef.map(userRef => {
        let data: any = userRef.payload.doc.data();
        data["id"]=userRef.payload.doc.id;
        this.grupos.push(data)
        this.grupos=  _.sortBy(this.grupos, [function(o) { return o.grupo; }]);
        return
      });

      this.totalPagaronGrupos()
    })
  }
  //
  agregar(){
    this.verF=!this.verF;
    this.verArbol=true
    this.datos= this.database.obtenerDatos();
  }

   async creaGrupo(){
    if(this.noGrupo==0) return;
    if(this.datos[0].nombre=="" || this.datos[0].nombre==null)return;
    this.database.crear('grupos', {grupo:this.noGrupo,datos:this.datos});
  }

  actualizaGrupo(){
    this.database.actualizar("grupos",{grupo:this.noGrupo,datos:this.datos},this.id)
  }

  totalPagaronGrupos(){
   let pagados=0;
    for (let index = 0; index < this.grupos.length; index++) {
      if(this.grupos[index].datos[0].invitados[0].invitados[0].pago){
        pagados++
      }
      if(this.grupos[index].datos[0].invitados[0].invitados[1].pago){
        pagados++
      }
      if(this.grupos[index].datos[0].invitados[1].invitados[0].pago){
        pagados++
      }
      if(this.grupos[index].datos[0].invitados[1].invitados[1].pago){
        pagados++
      }
      this.grupos[index].datos[0].pagosRecibidos=pagados;
      
      pagados=0;   
      
    }   
    

  }

  dividirGrupo(){}
 
}
