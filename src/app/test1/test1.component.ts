import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-test-1',
  templateUrl: './test1.component.html'
})
export class Test1Component implements DoCheck {

  public counter = 0;

  ngDoCheck(): void {
    console.log(`ngDoCheck1`);
    this.counter++;
  }

  doEvent(): void {
  }
}
