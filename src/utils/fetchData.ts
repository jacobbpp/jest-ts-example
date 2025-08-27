export async function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve('data received'), 100);
  });
}
