import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent implements OnInit {

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

    this.paisService.buscarCapital(termino)
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


