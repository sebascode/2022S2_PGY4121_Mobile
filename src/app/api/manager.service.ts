import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(
    private db : Storage
  ) { }

  async Create(nombreTabla : string, obj : Object){
    await this.db.set(nombreTabla, obj);
  }

  async Get(nombreTabla : string){
    await this.db.get(nombreTabla).then((response) => {
      return response;
    }).catch((exception)=>{
      console.error(exception);
      return null;
    }).finally(() => {
      console.log("terminó el proceso!");
    })
  }
}