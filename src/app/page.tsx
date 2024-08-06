'use client';

import React from 'react';
import { Application } from '@/Components/Application/Application';
import { SelectedPrefsProvider } from '@/lib/context/SelectedPrefsProvider';
import { css } from '@linaria/core';
import { colors, spacing, fontSize } from '@/styles/variables';

export default function Home() {
  return (
    <main>
      <header>
        <h1 className={mainTitle}>都道府県別 人口推移グラフ</h1>
      </header>
      <SelectedPrefsProvider>
        <Application />
      </SelectedPrefsProvider>
    </main>
  );
}

const mainTitle = css`
  font-size: ${fontSize.xxl.fontSize};
  line-height: ${fontSize.xxl.lineHeight};
  background-color: ${colors.green[800]};
  padding: ${spacing[4]};
  margin: ${spacing[0]};
  text-align: center;
  color: #fff;
`;
