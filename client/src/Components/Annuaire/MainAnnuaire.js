import React from 'react';
import styled from 'styled-components';
import CardAnnuaire from './CardAnnuaire';
import SearchBar from './SearchBar';

export default function MainAnnuaire() {
  return (
    <Container>
      <SearchBar />
      <Content>
        <CardAnnuaire />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div``;
