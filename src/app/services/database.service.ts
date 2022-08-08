import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { NodoDto } from '../components/ArbolPiramidal/nodo.model';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  datos:NodoDto[]=[
    {
      id:1,
      nombre:"",
      apellidos:"",
      pagosRecibidos:0,
      invitadoPor:0,
      pago:true,
      invitados:[
        {
          id:2,
          nombre:"",
          apellidos:"",
          pagosRecibidos:0,
          invitadoPor:1,
          pago:true,
          invitados:[
            {
              id:4,
              nombre:"",
              apellidos:"",
              pagosRecibidos:0,
              invitadoPor:1,
              pago:false,
              invitados:[],
              salio:false
            },
            {
              id:5,
              nombre:"",
              apellidos:"",
              pagosRecibidos:0,
              invitadoPor:1,
              pago:false,
              invitados:[],
              salio:false
            },
          ],
          salio:false
        },
        {
          id:3,
          nombre:"",
          apellidos:"",
          pagosRecibidos:0,
          invitadoPor:1,
          pago:false,
          invitados:[{
            id:6,
            nombre:"",
            apellidos:"",
            pagosRecibidos:0,
            invitadoPor:1,
            pago:false,
            invitados:[],
            salio:false
          },{
            id:7,
            nombre:"",
            apellidos:"",
            pagosRecibidos:0,
            invitadoPor:1,
            pago:false,
            invitados:[],
            salio:false
          },],
          salio:false
        },
        
      ],
      salio:false
    }
  ]
  constructor(private firestore: AngularFirestore) { }


  public obtenerDatos(){
    return this.datos;
  }
  
  //Crea un nuevo dato   
  public crear(collection: string, data: any) {
    return this.firestore.collection(collection).add(data);
  }

  public obtenerPorId(coleccion: string, id: string) {
    return this.firestore.collection(coleccion).doc(id).snapshotChanges();
    // El documento que tenga ese id tal cual este ahora, le saca una foto y me lo devuelve
  }

  public obtenerTodos(coleccion: string) {
    return this.firestore.collection(coleccion).snapshotChanges();
  }

  public actualizar(coleccion: string, data: any, id: string) {
    return this.firestore.collection(coleccion).doc(id).set(data);
  }

  public eliminar(collection: string, id: string) {
    return this.firestore.collection(collection).doc(id).delete();
  }

  public createWithCustomId(collection: string, customId: string, data: any) {
    this.firestore.collection(collection).doc(customId).set(data);
  }

}
