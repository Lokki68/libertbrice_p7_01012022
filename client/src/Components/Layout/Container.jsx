import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header';

export default function Container({ children }) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
}

// ----- Styled
