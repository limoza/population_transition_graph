import React, { useEffect, useState } from 'react';
import { LoadingBox } from '@/Components/LoadingBox/LoadingBox';
import { ErrorBox } from '@/Components/ErrorBox/ErrorBox';
import { useGetPrefsData } from '@/lib/hooks/useGetPrefsData';
import { PrefecturesCheckbox } from '@/Components/PrefecturesCheckbox/PrefecturesCheckbox';
import type { Prefectures } from '@/types';
import { css } from '@linaria/core';
import { spacing, fontSize } from '@/styles/variables';

export const PrefecturesCheckboxList = () => {
  const [prefsData, setPrefsData] = useState<Prefectures>([]);
  const { data, loading, error } = useGetPrefsData();

  useEffect(() => {
    if (data) setPrefsData(data);
  }, [data]);

  if (error) return <ErrorBox>{error.message}</ErrorBox>;
  if (loading) return <LoadingBox />;

  return (
    <section className={listContainer}>
      <ul className={list}>
        {prefsData.map((prefData) => (
          <PrefecturesCheckbox key={prefData.prefCode} prefData={prefData} />
        ))}
      </ul>
    </section>
  );
};

const listContainer = css`
  margin-top: ${spacing[4]};
`;

const listWidth = {
  gridTemplateColumns: `repeat(
    auto-fill,
    minmax(calc(6rem - ${spacing[2]}), 1fr)
  );`,
  '@media (max-width: 430px)': {
    gridTemplateColumns: `repeat(
      auto-fill,
      minmax(calc(25% - ${spacing[2]}), 1fr)
    );`,
  },
  '@media (max-width: 375px)': {
    fontSize: `${fontSize.sm.fontSize}`,
    lineHeight: `${fontSize.sm.lineHeight}`,
  },
  '@media (max-width: 345px)': {
    fontSize: `${fontSize.xs.fontSize}`,
    lineHeight: `${fontSize.xs.lineHeight}`,
  },
};

const list = css`
  ${listWidth};
  margin-bottom: ${spacing[0]};
  padding: ${spacing[0]};
  list-style: none;
  display: grid;
  gap: ${spacing[2]};
`;
