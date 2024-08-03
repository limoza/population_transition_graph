import React from 'react';
import { css } from '@linaria/core';
import { spacing, colors } from '@/styles/variables';

export const LoadingBox = () => <div className={loading}>Loading...</div>;

const loading = css`
  margin-top: ${spacing[4]};
  text-align: center;
  padding: ${spacing[20]} ${spacing[4]};
  background-color: ${colors.gray[100]};
`;
