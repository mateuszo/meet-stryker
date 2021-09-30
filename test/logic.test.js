import {isAdult} from '../src/logic';

test('30 yo in PL is adult', () => {
  expect(isAdult(30, 'PL')).toBe(true)
})

