import React from 'react';
import { css } from '@linaria/core';
import { spacing, colors } from '@/styles/variables';

export const Loading = () => <div className={loading}>Loading...</div>;

const loading = css`
  text-align: center;
  padding: ${spacing[20]};
  background-color: ${colors.gray[100]};
`;
