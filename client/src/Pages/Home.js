import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/styles/colors';
import Header from '../Components/Header/Header';
import MainHome from '../Components/Home/MainHome';

export default function Home() {
  return (
    <HomePage>
      <Header />
      <MainHome />
    </HomePage>
  );
}

// ----- Styled

const HomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.fond};
`;
