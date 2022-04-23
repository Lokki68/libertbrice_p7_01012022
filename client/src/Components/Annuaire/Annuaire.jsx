import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { VscSearch } from 'react-icons/vsc';
import { colors } from '../../Utils/styles/color';
import { isEmpty } from '../../Utils/utils';
import { getAllUsers } from '../../Api/user';
import { getUsersReducer } from '../../Redux/User/usersReducer';
import CardAnnuaire from './CardAnnuaire';
import AnnuaireSquelette from './AnnuaireSquelette';

export default function Annuaire() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.users);
  const [search, setSearch] = useState('');
  const [dataFiltered, setDataFiltered] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => {
      dispatch(getUsersReducer(res.data));
    });
  }, []);

  const searchUser = (name) => {
    setSearch(name.toLowerCase());

    const filterArray = data.filter((user) =>
      user.username.toLowerCase().includes(search)
    );

    setDataFiltered(filterArray);
  };

  return (
    <Container>
      <SearchBar>
        <label htmlFor='searchBar'>
          <VscSearch />
        </label>
        <input
          type='search'
          id='searchBar'
          placeholder='Username ...'
          onInput={(e) => {
            e.preventDefault();
            searchUser(e.target.value);
          }}
        />
      </SearchBar>
      <Content>
        {isEmpty(data) ? (
          <AnnuaireSquelette />
        ) : search.length >= 1 ? (
          !isEmpty(dataFiltered) &&
          dataFiltered.map((user) => {
            return user && <CardAnnuaire user={user} key={user.id} />;
          })
        ) : (
          data.map((user) => {
            return user && <CardAnnuaire user={user} key={user.id} />;
          })
        )}
      </Content>
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  padding-top: 10px;
  height: calc(100vh - 90px);
  background: url('../../img/photo_entreprise.jpg') no-repeat center/cover;
`;

const SearchBar = styled.div`
  position: relative;
  margin: 0px auto;
  padding: 0 15px;
  width: 30%;
  border-radius: 5px;
  background: ${colors.primary};
  text-align: left;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);

  label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }

  input {
    margin-left: 20px;
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 50px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
