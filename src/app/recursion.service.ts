import { Injectable, Optional } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class RecursionService {
  yy: number = 0;
  private x: string[] = [];
  private y: string[] = [];

  constructor(@Optional() private logService: LogService) {}

  getRecursion(x: number, sum: number = 1, term: number = x / 2, n: number = 1, min: number = 1e-10): number {
    if (Math.abs(term) <= min) {
        this.yy = sum;
        return sum;
    }


    sum += term;
    term *= (-1) * (x * (2 * n - 1)) / (2 * (2 * n + 2));
    n++;

    return this.getRecursion(x, sum, term, n, min); 
}

  getTab(start: number, stop: number, step: number) {
    let x = start,
        y = 1.0;
    this.x = [];
    this.y = [];
    while (x <= stop) {
      this.getRecursion(x, x / 2, 1, 1);
      this.x.push(x.toFixed(2)); 
      this.y.push(this.yy.toFixed(4));

      if (this.logService) {
        this.logService.write(`X: ${x.toFixed(2)} Y: ${this.yy.toFixed(4)}`);
      }

      x += step;
    }

    return { x: this.x, y: this.y }; 
  }
}
