import { css } from 'styled-components';
import { sizes } from './sizes';

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const colors = {
  blueRoyal: '#2A62F4',
  blueRoyalDarken: '#1242C0',
  lightGrey: '#DFE1E6',
  regularGrey: '#C4C4C4',
  darkBlue: '#091E42',
  white: '#FFFFFF',
  black: '#000000'
};
