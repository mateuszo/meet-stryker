import {isAdult} from '../src/logic';

describe('test should test', () => {
  it('should fail', () => {
    expect(false).toBe(true);
  })
  it('should pass', () => {
    expect(isAdult(30, 'PL')).toBe(true);
  })
})