import { Injectable, Optional } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class TabulatingService {
  private x: string[] = [];
  private y: string[] = [];
  constructor(@Optional() private logService: LogService) { }
  getTab (start: number, stop: number, step: number)
  {
    let tempX = start;
    let tempY = 0.0;
    this.x = [];
    this.y = [];
    while (tempX <= stop) {
      tempY = Math.sqrt(1 + tempX);
      this.x.push(tempX.toString());
      this.y.push(tempY.toFixed(2));
      if (this.logService){
        this.logService.write("X:" + tempX + "Y:" + tempY);
      }
      tempX = tempX + step;
    }
    return {x : this.x, y : this.y};
  }
}
