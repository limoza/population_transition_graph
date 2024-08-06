import React from 'react';
import { css } from '@linaria/core';
import { spacing, colors } from '@/styles/variables';

export const LoadingBox = () => (
  <div className={loadingBox}>
    <span className={loader} role='status'></span>
  </div>
);

const loadingBoxPadding = {
  padding: `6.5rem ${spacing[4]}`,
  '@media (max-width: 430px)': {
    padding: `15.5rem ${spacing[4]}`,
  },
};

const loadingBox = css`
  ${loadingBoxPadding};
  margin-top: ${spacing[4]};
  text-align: center;
  background-color: ${colors.gray[100]};
`;

const loader = css`
  width: 48px;
  height: 48px;
  border: 5px solid ${colors.white};
  border-bottom-color: ${colors.green[500]};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotate 1s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
