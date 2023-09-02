import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


//Un modulo es un agrupador

@NgModule({
   declarations:[
    HeroComponent,
    ListComponent
   ],
   exports:[
    HeroComponent,
    ListComponent
   ],
   imports:[
      CommonModule
   ]
})

export class HeroesModule{
  
}