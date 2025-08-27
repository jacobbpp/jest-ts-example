import { fetchData } from '../utils/fetchData';

test('fetchData returns expected string', async () => {
  const data = await fetchData();
  expect(data).toBe('data received');
});