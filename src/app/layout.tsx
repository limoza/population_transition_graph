import React from 'react';
import type { Metadata } from 'next';
import 'normalize.css';

export const metadata: Metadata = {
  title: '都道府県別 人口推移グラフ',
  description: '都道府県別の人口推移データを取得しグラフで表示します。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
