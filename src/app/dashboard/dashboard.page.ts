import { Component, OnInit } from '@angular/core';
import { APIService } from '../apiservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private api : APIService) { }
  

  ngOnInit() {
    this.api.getPokemon().subscribe((response) => {
      console.log(response);
    });
  }

}
