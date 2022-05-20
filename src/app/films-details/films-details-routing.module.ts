import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsDetailsPage } from './films-details.page';

const routes: Routes = [
  {
    path: '',
    component: FilmsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsDetailsPageRoutingModule {}
