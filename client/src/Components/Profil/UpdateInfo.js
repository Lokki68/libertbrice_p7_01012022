import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import EditProfilInfo from './EditProfilInfo';

export default function UpdateInfo({ userData }) {
  const [edit, setEdit] = useState(false);

  const { email, phoneNumber, description } = userData;

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <Container>
      {edit && <EditProfilInfo toggleFunc={toggleEdit} />}
      {!edit && (
        <Fragment>
          <Info>
            <h2>email : {email ? email : 'N/A'}</h2>
            <h3>Phone Number: {phoneNumber ? phoneNumber : 'N/A'}</h3>
          </Info>
          <Description>
            <h2>Description :</h2>
            <p>{description ? description : 'N/A'}</p>
          </Description>
          <Validation>
            <button className='material-icons' onClick={() => toggleEdit()}>
              edit
            </button>
          </Validation>
        </Fragment>
      )}
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
  margin: auto 0;

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
  margin: auto 0;

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

  button {
    margin: 10px;
    border-radius: 20px;
    background-color: ${colors.primary};

    &:hover {
      background-color: ${colors.secondary};
    }
  }
`;
