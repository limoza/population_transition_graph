import { css } from '@linaria/core';

const test = css`
  color: blue;
`;

export default function Home() {
  return <main className={test}>test</main>;
}
