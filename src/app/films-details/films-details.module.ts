import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmsDetailsPageRoutingModule } from './films-details-routing.module';

import { FilmsDetailsPage } from './films-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmsDetailsPageRoutingModule
  ],
  declarations: [FilmsDetailsPage]
})
export class FilmsDetailsPageModule {}
