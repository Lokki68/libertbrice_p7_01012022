import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { getUserInfo } from '../../Api/user';
import { loadUserInfosReducer } from '../../Redux/User/userReducer';
import { colors } from '../../Utils/styles/color';
import { isEmpty } from '../../Utils/utils';

import ProfilSquelette from './ProfilSquelette';

export default function Profil() {
  const dispatch = useDispatch();
  const { infos } = useSelector((state) => state.user);

  useEffect(() => {
    const id = localStorage.getItem('groupomania-id');
    getUserInfo(id).then((res) => {
      dispatch(loadUserInfosReducer(res.data));
    });
  }, []);

  return (
    <Container>
      {!isEmpty(infos) ? (
        <Card>
          <Picture>
            <img src={infos.image} alt='profil' />
            {infos.admin !== false ? (
              <span className='material-icons'>star</span>
            ) : (
              ''
            )}
          </Picture>
          <InfoCard>
            <h3>{infos.username}</h3>
            <p>{infos.email}</p>
            <p>{infos.phoneNumber}</p>
          </InfoCard>

          <NavLink to='/profilform'>Modifier</NavLink>
        </Card>
      ) : (
        <ProfilSquelette />
      )}
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  padding-top: 10px;
  height: calc(100vh - 90px);
  background: url('../../img/photo_entreprise.jpg') no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  width: 80%;
  height: 70%;
  margin: auto;
  background-color: url('../../asset/logo_planete.jpg') no-repeat center/cover;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  display: flex;
  flex-direction: row;

  a {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 30%;
    height: 40px;
    color: #fff;
    font-size: 20px;
    background-color: ${colors.tertiary};
    cursor: pointer;
    box-shadow: 2px 2px 2px ${colors.black}, inset 2px 2px 2px ${colors.primary};

    &:hover {
      box-shadow: 2px 2px 2px ${colors.primary},
      inset 2px 2px 2px ${colors.black};
      color: ${colors.black};
    }
  }
`;

const Picture = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
    height: 70%;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
  
  span{
    position: absolute;
    top: 0;
    margin-top: 45px;
    color: ${colors.tertiary};
    font-size: 35px;
      
  }
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 70%;
  height: 100%;
  font-family: Inconsolata, sans-serif;

  h3 {
    font-size: 5rem;
  }

  p {
    font-size: 3rem;
  }
`;
