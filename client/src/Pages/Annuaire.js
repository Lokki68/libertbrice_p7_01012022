import React from 'react';
import styled from 'styled-components';
import MainAnnuaire from '../Components/Annuaire/MainAnnuaire';
import Header from '../Components/Header/Header';

export default function Annuaire() {
  return (
    <AnnuairePage>
      <Header />
      <MainAnnuaire />
    </AnnuairePage>
  );
}

const AnnuairePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
