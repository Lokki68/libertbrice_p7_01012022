import React from 'react';
import styled from 'styled-components';
import searchLogo from '../../img/searchLogo.svg';
import { colors } from '../../utils/styles/colors';

export default function SearchBar() {
  return (
    <Container>
      <img src={searchLogo} alt='logo' />
      <input
        type='search'
        name='searchBar'
        id='searchBar'
        placeholder='Username ...'
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 700px;
  min-width: 300px;
  margin-top: 50px;

  img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }

  input {
    font-family: Roboto, sans-serif;
    text-align: center;
    font-size: 1.17em;
    width: 700px;
    background-color: ${colors.primary};
    outline: none;
    border: none;
    height: 50px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  }
`;
