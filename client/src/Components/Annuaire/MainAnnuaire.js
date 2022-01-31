import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { isEmpty } from '../../utils/utils';

import CardAnnuaire from './CardAnnuaire';

import searchLogo from '../../img/searchLogo.svg';
import { colors } from '../../utils/styles/colors';

export default function MainAnnuaire() {
  const usersData = useSelector((state) => state.usersReducer);
  const [search, setSearch] = useState('');
  const [dataFiltered, setDataFiltered] = useState([]);

  const { data } = usersData;

  const searchUser = (e) => {
    setSearch(e.target.value.toLowerCase());

    const filterUser = data.filter((user) =>
      user.username.toLowerCase().includes(search),
    );

    setDataFiltered(filterUser);
  };
  return (
    <Container>
      <SearchBar>
        <img src={searchLogo} alt='logo' />
        <input
          type='search'
          name='searchBar'
          id='searchBar'
          placeholder='Username ...'
          onInput={(e) => searchUser(e)}
        />
      </SearchBar>
      <Content>
        {search.length >= 1
          ? !isEmpty(dataFiltered) &&
            dataFiltered.map((user) => {
              return user && <CardAnnuaire user={user} key={user.id} />;
            })
          : !isEmpty(data) &&
            data.map((user) => {
              return user && <CardAnnuaire user={user} key={user.id} />;
            })}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBar = styled.div`
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

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
