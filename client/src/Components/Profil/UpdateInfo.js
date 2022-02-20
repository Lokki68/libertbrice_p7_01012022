import React, { useState } from 'react';
import styled from 'styled-components';

export default function UpdateInfo({ userData }) {
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');

  const { email, phoneNumber, description } = userData;

  console.log(userData);

  const handleSubmit = () => {};

  return (
    <Container>
      <Info>
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
      </Info>
      <Description>
        <label htmlFor='description'>Description :</label>
        <textarea
          name='description'
          id='description'
          cols='50'
          rows='8'
          placeholder={!description ? 'Description ...' : description}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </Description>
      <Validation>
        <input type='submit' value='Valider' onClick={() => handleSubmit()} />
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  input {
    width: 180px;
    text-align: center;
    margin: 20px 20px;
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
`;

const Validation = styled.div`
  grid-area: V;
  display: flex;
  justify-content: center;
  align-items: center;
`;
