import React from 'react';
import styled from 'styled-components';

export default function UpdateInfo() {
  return (
    <Container>
      <FormContainer>
        <Info>
          <input type='text' name='name' id='name' placeholder='name ...' />
          <input
            type='text'
            name='firstName'
            id='firstName'
            placeholder='first name ...'
          />
          <input type='email' name='email' id='email' placeholder='Email ...' />

          <input
            type='number'
            name='phoneNumber'
            id='phoneNumbe'
            placeholder='Phone Number ...'
          />
        </Info>
        <Description>
          <label htmlFor='description'>Description :</label>
          <textarea
            name='description'
            id='description'
            cols='50'
            rows='8'
            placeholder='Description ...'
          ></textarea>
        </Description>
        <Validation>
          <input type='submit' value='Valider' />
        </Validation>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

const FormContainer = styled.form`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'I'
    'D'
    'V';
`;

const Info = styled.div`
  grid-area: I;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  input {
    width: 180px;
    text-align: center;
    margin: 10px 20px;
  }
`;

const Description = styled.div`
  grid-area: D;
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
