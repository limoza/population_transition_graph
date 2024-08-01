import React from 'react';
import { css } from '@linaria/core';
import { spacing, colors } from '@/styles/variables';

type Props = {
  children: React.ReactNode;
};

export const Error = ({ children }: Props) => (
  <div className={errorStyle}>{children}</div>
);

const errorStyle = css`
  text-align: center;
  padding: ${spacing[20]};
  background-color: ${colors.red[100]};
`;
