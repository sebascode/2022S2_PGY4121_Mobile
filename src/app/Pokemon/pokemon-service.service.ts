import { Injectable } from '@angular/core';
import { ExceptionCode } from '@capacitor/core';
import { IonList } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(
    private db : Storage
  ) { }

  async Guardar(nombreTabla : string, obj : any){
    await this.db.set(nombreTabla, obj);
  }

  async Obtener(nombreTabla : any){
    await this.db.get(nombreTabla)
    .then((value) => {
      console.log("entro!");

      return value;
    })
    .catch((exception) => {
      console.log("exception ===========");
      console.error(exception);
      return null;
    })
    .finally(() => {
      console.log("Se terminó el proceso");
    });
  }
}
