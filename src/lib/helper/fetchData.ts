export const fetchData = async (fetchURL: string) => {
  try {
    const response = await fetch(fetchURL, {
      headers: {
        'X-API-KEY': `${process.env.NEXT_PUBLIC_RESAS_API_KEY}`,
      },
    });
    if (!response.ok) {
      throw new Error('RESAS-APIへのリクエストが失敗しました');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('RESAS-API データの取得中にエラーが発生しました:', error);
    throw error;
  }
};
