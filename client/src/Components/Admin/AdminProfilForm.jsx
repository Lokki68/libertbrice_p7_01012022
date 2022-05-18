import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { updateUser } from '../../Api/user';
import { colors } from '../../Utils/styles/color';
import { isEmpty } from '../../Utils/utils';
import AdminProfilFormSquelette from "./AdminProfilFormSquelette";

export default function AdminProfilForm() {
  const location = useLocation()
  const {user} = location.state
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  useEffect(() => {
    if (user !== null) {
      setEmail(user.email);
      setPhoneNumber(user.phoneNumber);
    }
  }, [user]);

  const handleSubmit = () => {
    const id = user.id;

    const data = {
      email,
      phoneNumber,
    };

    updateUser(id, data).then((res) => {
      if(res.status === 200) navigate(-1)
    });
  };

  return (
    <Container>
      {!isEmpty(user) ? (
        <Formulaire
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className='info'>
           <h3>{user.username}</h3>
          </div>
          <div className='info'>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              placeholder='Adresse Mail'
              onInput={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='info password'>
            <input
              type='number'
              name='phoneNumber'
              id='phoneNumber'
              value={phoneNumber}
              placeholder='Votre numéro de poste'
              onInput={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <button>Envoyer</button>
          <button
            className='close'
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            X
          </button>
        </Formulaire>
      ) : (
        <AdminProfilFormSquelette />
      )}
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  padding-top: 10px;
  height: calc(100vh - 90px);
  background: url('../img/photo_entreprise.jpg') no-repeat center/cover;
`;

const Formulaire = styled.form`
  position: relative;
  width: 50%;
  height: 75%;
  margin: 50px auto;
  padding: 20px;
  background: url('../../asset/logo_planete.jpg') no-repeat center/cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  h3{
    font-family: Inconsolata, sans-serif;
    color: #000;
    font-size: 4em;
  }

  .info input {
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
    width: 80%;
    text-align: center;
    font-family: Inconsolata, sans-serif;
    font-size: 1.6rem;
  }

  button {
    border: none;
    color: #fff;
    background-color: ${colors.tertiary};
    box-shadow: 2px 2px 2px ${colors.black}, inset 2px 2px 2px ${colors.primary};
    font-size: 20px;
    font-family: Roboto, sans-serif;

    &:hover {
      box-shadow: 2px 2px 2px ${colors.primary},
      inset 2px 2px 2px ${colors.black};
      color: ${colors.black};
    }
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);
    border-radius: 50%;
    font-size: 1rem;
    width: 30px;
    height: 30px;
    padding: 10px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
