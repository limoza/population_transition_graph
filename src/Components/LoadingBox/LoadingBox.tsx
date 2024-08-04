import React from 'react';
import { css } from '@linaria/core';
import { spacing, colors } from '@/styles/variables';

export const LoadingBox = () => <div className={loadingBox}>Loading...</div>;

const loadingBox = css`
  margin-top: ${spacing[4]};
  text-align: center;
  padding: ${spacing[20]} ${spacing[4]};
  background-color: ${colors.gray[100]};
`;
