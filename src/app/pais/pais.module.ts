import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisComponent } from './pages/pais/pais.component';
import { HomeComponent } from './pages/home/home.component';
import { PaisRoutingModule } from './pais-routing.module';


import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
  PaisComponent,
  HomeComponent,
  VerPaisComponent,

  PaisTablaComponent,
  PaisInputComponent,

  PorCapitalComponent,
  PorRegionComponent
  ],
  imports: [
    CommonModule,
    PaisRoutingModule,
    FormsModule,
    RouterModule,
    MaterialModule

  ],
  exports: [
  PaisComponent,
  VerPaisComponent,
  PorCapitalComponent,
  PorRegionComponent
  ]
})
export class PaisModule { }
