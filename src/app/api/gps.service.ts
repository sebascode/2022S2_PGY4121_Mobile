import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class GpsService {

  constructor(
    private gps : Geolocation,
    private cam : Camera
    ) { }

  async obtenerPosicion(){
    await this.gps.getCurrentPosition().then((valors) => {
      console.log({valors});
    });
  }

  async obtenerFoto(){
    await this.cam.getPicture().then((foto) => {
      console.log({foto});
    })
  }
}
