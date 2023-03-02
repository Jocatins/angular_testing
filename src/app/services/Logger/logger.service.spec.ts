import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  //arrange
  let logService: LoggerService;
  beforeEach(() => {
    logService = new LoggerService();
  });
  it('should not have any messages at starting', () => {
    // act
    let count = logService.messages.length;
    // assert
    expect(count).toBe(0);
  });
  it('should add the message when the log is called', () => {
    //act
    logService.log('message');
    // assert
    expect(logService.messages.length).toBe(1);
  });
  it('should clear all the messages when clear is called', () => {
    logService.log('message');
    //act
    logService.clear();
    // assert
    expect(logService.messages.length).toBe(0);
  });
  it('should call the clear function once', () => {
    spyOn(logService, 'clear');
    logService.clear();
    expect(logService.clear).toHaveBeenCalled();
  });
});
