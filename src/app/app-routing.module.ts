import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'pais',
    loadChildren: ()=> import('./pais/pais.module').then(m => m.PaisModule)
  },

//creacion de nuestra primera ruta
{
  path: '404',
  component: ErrorComponent
},
{
  path: '**',
  //component: ErrorPageComponent
  redirectTo: '404'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
