import { injectGlobal, css } from 'styled-components';

export const grid = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '425px'
};

export const media = {
  mobile: (...args) => css`
    @media (max-width: ${grid.mobile}) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: ${grid.tablet}) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (max-width: ${grid.desktop}) {
      ${css(...args)}
    }
  `
};

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #eaeaea;
    height: 100%;
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: #FFF;
  }

  ${media.mobile`
    body {
      font-size: 12px;
    }
  `}
`;
