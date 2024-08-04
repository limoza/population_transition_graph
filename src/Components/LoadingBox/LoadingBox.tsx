import React from 'react';
import { css } from '@linaria/core';
import { spacing, colors } from '@/styles/variables';

export const LoadingBox = () => (
  <div className={loadingBox}>
    <span className={loader}></span>
  </div>
);

const loadingBox = css`
  margin-top: ${spacing[4]};
  text-align: center;
  padding: ${spacing[20]} ${spacing[4]};
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
