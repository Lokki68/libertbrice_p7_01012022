import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { colors } from '../../Utils/styles/color';
import { isEmpty } from '../../Utils/utils';
import ProfilSquelette from './ProfilSquelette';

export default function Profil() {
  const { infos } = useSelector((state) => state.user);

  const [image, setImage] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  console.log(infos);

  useEffect(() => {
    if (infos !== null) {
      setImage(infos.image);
      setUsername(infos.username);
      setEmail(infos.email);
      setPhoneNumber(infos.phoneNumber);
    }
  }, [infos]);

  const handleSubmit = () => {
    const data = {
      username,
    };

    console.log('submit', data);
  };

  return (
    <Container>
      {!isEmpty(infos) ? (
        <Formulaire
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <h1>Mon Profil</h1>
          </div>

          <div className='info profil-picture'>
            <img src={image} alt='profil' />
            <label htmlFor='image'>Photo de profil</label>
            <input type='file' id='image' accept='.jpg, .jpeg, .png' />
          </div>

          <div className='info'>
            <input
              type='text'
              name='username'
              id='username'
              value={username}
              placeholder="Nom d'utilisateur"
              onInput={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='info'>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              placeholder='Adresse Mail'
            />
          </div>
          <div className='info password'>
            <input
              type='number'
              name='phoneNumber'
              id='phoneNumber'
              value={phoneNumber}
              placeholder='Votre numéro de poste'
            />
          </div>
          <button>Envoyer</button>
        </Formulaire>
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
  background: url('../img/photo_entreprise.jpg') no-repeat center/cover;
`;

const Formulaire = styled.form`
  width: 50%;
  height: 75%;
  margin: 50px auto;
  padding: 20px;
  background: url('../../img/logo_planete.jpg') no-repeat center/cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .info input {
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
    width: 80%;
  }

  .profil-picture {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 160px;
      height: 160px;
      border-radius: 4px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    }

    label {
      margin: 15px;
      padding: 8px;
      background-color: ${colors.primary};
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: ${colors.secondary};
      }
    }

    input[type='file'] {
      display: none;
    }
  }

  .info.password input {
    margin-top: 15px;
  }

  button {
    border: none;
    color: #fff;
    background-color: ${colors.tertiary};
    box-shadow: 2px 2px 2px ${colors.black}, inset 2px 2px 2px ${colors.primary};
    font-size: 20px;
    font-family: Roboto, sans-serif;
    margin: 0 15px;

    &:hover {
      box-shadow: 2px 2px 2px ${colors.primary},
        inset 2px 2px 2px ${colors.black};
      color: ${colors.black};
    }
  }
`;
