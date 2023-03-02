import { StenghtPipe } from './stenght.pipe';

describe('StenghtPipe', () => {
  it('should have a title name Strength Pipe', () => {
    const pipe = new StenghtPipe();
    expect(pipe.title).toContain('Strength Pipe');
  });
  it('create a pipe instance', () => {
    const pipe = new StenghtPipe();
    expect(pipe).toBeTruthy();
  });
  it('should display weak if 5 value is passed', () => {
    const pipe = new StenghtPipe();
    expect(pipe.transform(5)).toEqual('5(weak)');
  });
  it('should display strong if value is greater than 10 and less than 15', () => {
    const pipe = new StenghtPipe();
    expect(pipe.transform(12)).toEqual('12(strong)');
  });
  it('should display strongest if value is greater than 15', () => {
    const pipe = new StenghtPipe();
    expect(pipe.transform(16)).toEqual('16(strongest)');
  });
});
