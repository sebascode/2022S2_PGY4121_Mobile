import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../Pokemon/pokemon-service.service';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
})
export class ConfiguracionesPage implements OnInit {

  constructor(
    private dbService : PokemonServiceService
  ) { }

  ngOnInit() {
    this.dbService.Guardar("pokemoncito", { nombre: "Chorizard", tipo: "Electrico" });
    this.dbService.Obtener(this);
  }

}
