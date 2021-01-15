import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-test-2',
  templateUrl: './test2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test2Component implements DoCheck {
  public counter2 = 0;

  ngDoCheck(): void {
    console.log(`ngDoCheck2`);
    this.counter2++;
  }
}
