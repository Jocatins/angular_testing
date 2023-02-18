import { Injectable } from '@angular/core';
import { LoggerService } from '../Logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private logService: LoggerService) {}

  public add(n1: number, n2: number) {
    let result = n1 + n2;
    this.logService.log('Add operation is called');
    return result;
  }

  public subtract(n1: number, n2: number) {
    let result = n1 - n2;
    this.logService.log('Subtract operation is called');

    return result;
  }
}
