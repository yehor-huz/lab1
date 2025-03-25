import { Injectable, Optional } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private x: string[] = [];
  private y: string[] = [];

  constructor(@Optional() private logService: LogService) {}

  getSeries(x: number) {
    let sum: number = 1,
        term: number = x / 2,
        n = 1,
        min = 1e-12;
    do {
      sum += term;
      term *= (-1) * (x * (2 * n - 1)) / (2 * (2 * n + 2));
      n++;
    } while (Math.abs(term) > min);
    return sum;
  }

  getTab(start: number, stop: number, step: number) {
    this.x = [];
    this.y = [];
    
    let x = start,
        y = 0.0;

    while (x <= stop) {
      y = this.getSeries(x);
      this.x.push(x.toFixed(2));
      this.y.push(y.toFixed(4));
      
      if (this.logService) {
        this.logService.write(`X: ${x.toFixed(2)} Y: ${y.toFixed(4)}`);
      }

      x += step;
    }

    return { x: this.x, y: this.y };
  }
}
