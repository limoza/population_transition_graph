import React from 'react';
import { css } from '@linaria/core';
import { spacing, colors } from '@/styles/variables';

type Props = {
  children: React.ReactNode;
};

export const ErrorBox = ({ children }: Props) => (
  <div className={errorBox} role='alert'>
    {children}
  </div>
);

const errorBox = css`
  margin-top: ${spacing[4]};
  text-align: center;
  padding: ${spacing[20]} ${spacing[4]};
  background-color: ${colors.red[100]};
`;
