import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit{

  ngOnInit(): void {
    this.debounce
      .pipe(
        debounceTime(300))
    .subscribe(valor =>{
      this.onDebounce.emit(valor);//para mostrar sugerencia
      console.log('debounce:', valor);
    });

  }



  @Output() onEnter: EventEmitter<string>= new EventEmitter();

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input () placeholder: string = '';

  debounce: Subject<string> = new Subject();//emitimos algo cuando dejamos de escribir

  termino : string = '';

  buscar(){
    this.onEnter.emit(this.termino);

  }
  teclaPresionada( ){
    this.debounce.next(this.termino);
  }

}
