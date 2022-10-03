import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionesPage } from './configuraciones.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionesPageRoutingModule {}
