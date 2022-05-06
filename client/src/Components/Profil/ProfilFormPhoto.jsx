import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {updatePictureUser} from '../../Api/user';
import {loadUserInfosReducer} from '../../Redux/User/userReducer';
import {colors} from '../../Utils/styles/color';
import {isEmpty} from '../../Utils/utils';
import ProfilFormSquelette from './ProfilFormSquelette';

export default function ProfilFormPhoto() {
  const {infos} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState('');

  useEffect(() => {
    if (infos !== null) {
      setImage(infos.image);
    }
  }, [infos]);

  const handleSubmit = () => {
    const id = localStorage.getItem('groupomania-id');

    const data = {
      image
    }


    updatePictureUser(id, data).then((res) => {
      dispatch(loadUserInfosReducer(res.data));
    });


    navigate(-1);
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
          <div className='info profil-picture'>
            <img src={image} alt=""/>

            <label htmlFor="imageFile">Changer la photo de profil</label>
            <input
              type="file"
              id="imageFile"
              onChange={(e) => setImage(e.target.files[0])}
            />

          </div>
          <button>Envoyer</button>
          <button
            className='close'
            onClick={(e) => {
              e.preventDefault();
              navigate('/profil');
            }}
          >
            X
          </button>
        </Formulaire>
      ) : (
        <ProfilFormSquelette/>
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
    text-align: center;
    font-family: Inconsolata, sans-serif;
    font-size: 1.6rem;
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
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
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
