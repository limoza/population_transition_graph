import React, { useEffect, useState } from 'react';
import { Loading } from '@/Components/Loading/Loading';
import { Error } from '@/Components/Error/Error';
import { useGetPrefsData } from '@/lib/hooks/useGetPrefsData';
import { PrefecturesCheckbox } from '@/Components/PrefecturesCheckbox/PrefecturesCheckbox';
import type { Prefectures } from '@/types';
import { css } from '@linaria/core';
import { spacing } from '@/styles/variables';

export const PrefecturesCheckboxList = () => {
  const [prefsData, setPrefsData] = useState<Prefectures>([]);
  const { data, loading, error } = useGetPrefsData();

  useEffect(() => {
    if (data) setPrefsData(data);
  }, [data]);

  if (error) return <Error>{error.message}</Error>;
  if (loading) return <Loading />;

  return (
    <section className={listWrap}>
      <ul className={list}>
        {prefsData.map((prefData) => (
          <PrefecturesCheckbox key={prefData.prefCode} prefData={prefData} />
        ))}
      </ul>
    </section>
  );
};

const listWrap = css`
  margin-top: ${spacing[4]};
`;

const list = css`
  margin-bottom: ${spacing[0]};
  padding: ${spacing[0]};
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[2]};
`;
