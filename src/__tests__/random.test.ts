import { getRandomInt } from '../utils/random';

test('getRandomInt returns a number less than max', () => {
  const max = 10;
  const result = getRandomInt(max);
  expect(result).toBeGreaterThanOrEqual(0);
  expect(result).toBeLessThan(max);
});
