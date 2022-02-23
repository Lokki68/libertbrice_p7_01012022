import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

export default function EditProfilPicture({ toggleFunc }) {
  return (
    <Container>
      <FormWrapper>
        

        <ButtonContainer>
          <button className='material-icons' onClick={() => toggleFunc()}>
            cancel
          </button>
          <button className='material-icons'>send</button>
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
