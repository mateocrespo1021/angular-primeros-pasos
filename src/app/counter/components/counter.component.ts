import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {

  constructor() {

  }
  public counter: number = 0

  reset() {
    this.counter = 0
  }


  increaseBy(value: string): void {
    value == '+' ? this.counter += 1 : this.counter -= 1
  }
}