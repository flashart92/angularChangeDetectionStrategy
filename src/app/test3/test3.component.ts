import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-test-3',
  templateUrl: './test3.component.html'
})
export class Test3Component implements DoCheck {
  public counter3 = 0;

  ngDoCheck(): void {
    console.log(`ngDoCheck3`);
    this.counter3++;
  }

  doEvent(): void {
  }
}
