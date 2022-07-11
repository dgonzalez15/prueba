import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaisComponent } from './pages/pais/pais.component';

import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [

      { path: '', component: PaisComponent, pathMatch: 'full' },


      {
        path: 'pais/:id',
        component: VerPaisComponent
    },

      { path: '**', redirectTo: 'pais' }

    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PaisRoutingModule { }
