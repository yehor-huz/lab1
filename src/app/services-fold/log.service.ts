import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  write (logMsg: string){
    console.log(logMsg);
  }
  constructor() { }
}
