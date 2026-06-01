import { Component, signal, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: `
    button {
      margin-right: 5px;
      padding: 5px 10px;
      font-size: 16px;
      border-radius: 5px;
    }
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  counter = 0;
  counterSignal = signal(0);

  increaseByValue(value: number) {
    this.counterSignal.update(current => current + value);
  }

  resetCounter() {
    this.counterSignal.set(0);
  }

  constructor() {
    // // Simulación de actualización del contador cada segundo
    // setInterval(() => {
    //   // this.increaseByValue(1);
    //   this.counter += 1;
    //   console.log('Tick');

    // }, 1000);
  }
}


