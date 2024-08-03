import React from 'react';
import { css } from '@linaria/core';
import { spacing, colors } from '@/styles/variables';

type Props = {
  children: React.ReactNode;
};

export const NoteBox = ({ children }: Props) => (
  <div className={noteBoxStyle}>{children}</div>
);

export const noteBoxStyle = css`
  margin-top: ${spacing[4]};
  text-align: center;
  padding: ${spacing[20]} ${spacing[4]};
  background-color: ${colors.gray[100]};
`;
