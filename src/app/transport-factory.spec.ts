import { TransportFactory } from './transport-factory';

describe('TransportFactory', () => {
  it('should create an instance', () => {
    expect(new TransportFactory()).toBeTruthy();
  });
});
