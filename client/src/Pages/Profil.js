import React from 'react';
import styled from 'styled-components';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import MainProfil from '../Components/Profil/MainProfil';

export default function Profil() {
  return (
    <ProfilPage>
      <Header />
      <MainProfil />
      <Footer />
    </ProfilPage>
  );
}

// ----- Styled

const ProfilPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url('../img/photo_entreprise.jpg') no-repeat center/cover;
`;
