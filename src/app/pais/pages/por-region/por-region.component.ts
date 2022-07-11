import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  termino: string = '';
  hayError: boolean = false;
  paises: Country[]= [];


  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    this.paisService.buscarRegion(termino)
    .subscribe((paises) =>{
      console.log(paises);
      this.paises= paises;

    },(err)=>{
      this.hayError = true;
      this.paises = [];
    });


  }
  sugerencias(termino: string ){
      this.hayError = false;
      //TODO crear sugerencias
  }

}
