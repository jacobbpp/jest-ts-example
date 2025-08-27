import { logMessage } from '../utils/logger';

test('logMessage calls console.log with correct format', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
  logMessage('Hello');
  expect(spy).toHaveBeenCalledWith('LOG: Hello');
  spy.mockRestore();
});