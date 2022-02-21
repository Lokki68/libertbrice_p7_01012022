import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateOne, getUser } from '../../redux/actions/user.actions';

export default function UpdateInfo({ userData }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');

  const { email, phoneNumber, description } = userData;

  console.log(userData);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const handleSubmit = () => {
    const id = localStorage.getItem('UserId');

    const data = {
      email: '',
      phoneNumber: '',
      description: '',
    };

    mail.length === 0 ? (data.email = email) : (data.email = mail);

    phone.length === 0
      ? (data.phoneNumber = phoneNumber)
      : (data.phoneNumber = phone);

    bio.length === 0
      ? (data.description = description)
      : (data.description = bio);

    dispatch(updateOne(id, data));
    setEdit(!edit);
  };

  return (
    <Container>
      <Info>
        {edit ? (
          <Fragment>
            <input
              type='email'
              name='email'
              id='email'
              placeholder={!email ? 'Email ...' : email}
              onChange={(e) => setMail(e.target.value)}
            />

            <input
              type='number'
              name='phoneNumber'
              id='phoneNumbe'
              placeholder={!phoneNumber ? 'Phone Number ...' : phoneNumber}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Fragment>
        ) : (
          <Fragment>
            <h2>email : {email ? email : 'N/A'}</h2>
            <h3>Phone Number: {phoneNumber ? phoneNumber : 'N/A'}</h3>
          </Fragment>
        )}
      </Info>
      <Description>
        {edit ? (
          <Fragment>
            <label htmlFor='description'>Description :</label>
            <textarea
              name='description'
              id='description'
              cols='50'
              rows='8'
              placeholder={!description ? 'Description ...' : description}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </Fragment>
        ) : (
          <Fragment>
            <h2>Description :</h2>
            <p>{description ? description : 'N/A'}</p>
          </Fragment>
        )}
      </Description>
      <Validation>
        <input
          type='submit'
          value={!edit ? 'Editer' : 'Valider'}
          onClick={!edit ? () => toggleEdit() : () => handleSubmit()}
        />
      </Validation>
    </Container>
  );
}

const Container = styled.div`
  height: 580px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  input {
    width: 180px;
    text-align: center;
    margin: 20px 20px;
  }

  h2,
  h3 {
    margin-top: 15px;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  label {
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 600;
  }

  h2 {
    font-size: 25px;
  }

  p {
    font-size: 18px;
    padding: 15px;
    margin-top: 15px;
  }
`;

const Validation = styled.div`
  grid-area: V;
  display: flex;
  justify-content: center;
  align-items: center;
`;
