import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stenght',
})
export class StenghtPipe implements PipeTransform {
  title = 'Strength Pipe';
  transform(value: number): string {
    if (value < 10) {
      return value + '(weak)';
    } else if (value >= 10 && value < 15) {
      return value + '(strong)';
    } else {
      return value + '(strongest)';
    }
  }
}
