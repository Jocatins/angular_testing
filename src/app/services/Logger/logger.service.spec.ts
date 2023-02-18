import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  //arrange
  let service: LoggerService;
  beforeEach(() => {
    service = new LoggerService();
  });
  it('should not have any messages at starting', () => {
    // act
    let count = service.messages.length;
    // assert
    expect(count).toBe(0);
  });
  it('should add the message when the log is called', () => {
    //act
    service.log('message');
    // assert
    expect(service.messages.length).toBe(1);
  });
  it('should clear all the messages when clear is called', () => {
    service.log('message');
    //act
    service.clear();
    // assert
    expect(service.messages.length).toBe(0);
  });
});
