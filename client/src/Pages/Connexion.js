import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Connexion/Header';
import MainConnexion from '../Components/Connexion/MainConnexion';
import Footer from '../Components/Footer/Footer';

export default function Connexion() {
  return (
    <Container>
      <Header />
      <MainConnexion />
      <Footer />
    </Container>
  );
}

// ----- Styled


const Container = styled.div`
  padding: 0;
  font-family: Roboto, sans-serif;
  font-size: 15px;
`;
