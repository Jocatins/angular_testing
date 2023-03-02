import { LoggerService } from '../Logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let mockLoggerService: any;
  let calcService: CalculatorService;
  beforeEach(() => {
    //  console.log('before each');
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calcService = new CalculatorService(mockLoggerService);
  });
  it('should add two numbers', () => {
    //  console.log('add block');

    let result = calcService.add(3, 4);
    expect(result).toBe(7);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    //  console.log('subtract block');
    let result = calcService.subtract(5, 7);
    expect(result).toBe(-2);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
