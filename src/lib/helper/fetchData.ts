export const fetchData = async (fetchURL: string) => {
  const response = await fetch(fetchURL, {
    headers: {
      'X-API-KEY': `${process.env.NEXT_PUBLIC_RESAS_API_KEY}`,
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result = await response.json();
  return result;
};
