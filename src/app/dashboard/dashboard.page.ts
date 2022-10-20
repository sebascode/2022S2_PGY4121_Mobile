import { Component, OnInit } from '@angular/core';
import { GpsService } from '../api/gps.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private gps : GpsService) { }
  

  ngOnInit() {
    this.gps.obtenerPosicion();
    this.gps.obtenerFoto();
  }

}
