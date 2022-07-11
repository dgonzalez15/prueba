import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }
  termino: string = '';
  hayError: boolean = false;
  paises: Country[]= [];

  //Nueva propiedad para los paises sugeridos
  paisesSugeridos: Country[]= [];


  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    this.paisService.buscarPais(termino)
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
      this.paisService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0,6),
          (err) => this.paisesSugeridos = []
        );
  }

}
