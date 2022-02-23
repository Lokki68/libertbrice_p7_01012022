import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

import { updateOne } from '../../redux/actions/user.actions';

export default function EditProfilInfo({ toggleFunc }) {
  const dispatch = useDispatch();

  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = localStorage.getItem('UserId');
    let data;


    console.log(data);
    // dispatch(updateOne(id, data));

    /*     setMail('');
    setPhone('');
    setBio('');
    toggleFunc(); */
  };

  return (
    <Container>
      <FormWrapper>
        <label htmlFor='email'>Edit Email : </label>
        <input
          type='text'
          id='email'
          onChange={(e) => setMail(e.target.value)}
        />

        <label htmlFor='phone'>Edit Phone Number : </label>
        <input
          type='text'
          id='phone'
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor='description'>Edit Description : </label>
        <textarea id='description' cols='30' rows='10'></textarea>

        <ButtonContainer>
          <button className='material-icons' onClick={() => toggleFunc()}>
            cancel
          </button>
          <button className='material-icons' onClick={handleSubmit}>
            send
          </button>
        </ButtonContainer>
      </FormWrapper>
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const FormWrapper = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  label {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 15px;
  button {
    margin: 0 10px;
    font-size: 15px;
    border: none;

    &:hover {
      background-color: ${colors.secondary};
      border: none;
    }
  }
`;
