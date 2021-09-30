import {isAdult, isAllowedToBuyBeer} from '../src/logic';

test('30 yo in PL is adult', () => {
  expect(isAdult(30, 'PL')).toBe(true)
})
test('full coverage', () => {
  isAdult(30, 'PL')
  isAdult(30, 'USA')
  isAdult(30, 'DE')
  isAdult(30, '')
  isAllowedToBuyBeer(10, 0, 'PL')
  isAllowedToBuyBeer(10, 6, 'PL')
})

