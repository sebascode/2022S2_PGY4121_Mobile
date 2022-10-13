import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../api/manager.service';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
})
export class ConfiguracionesPage implements OnInit {

  constructor(
    private api : ManagerService
  ) { }

  ngOnInit() {
    const pokemon = {
      nombre: "Pikachu",
      tipo: "Electrico"
    }
    this.api.Create("tablaPokemon", pokemon);
    
    console.log(this.api.Get("tablaPokemon"));
  }

}
