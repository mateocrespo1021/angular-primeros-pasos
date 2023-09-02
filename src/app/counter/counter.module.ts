import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter.component';

//Un modulo es un agrupador

@NgModule({
   declarations:[
    CounterComponent
   ],
   exports:[
    CounterComponent
   ]
})

export class CounterModule{

}