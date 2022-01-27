import React from 'react';
import styled from 'styled-components';

export default function CardAside() {
  return (
    <CardAsideContainer>
      <InfoPost>
        <img src='./uploads/profils/random_user.jpg' alt='profil' />
        <span>
          <h2>Username</h2>
          <p>Time information</p>
        </span>
      </InfoPost>
      <CommandPost>
        <button className='material-icons '>favorite_border</button>
        <span>10</span>
        <button className='material-icons'>comment</button>
      </CommandPost>
    </CardAsideContainer>
  );
}

// ----- Styled

const CardAsideContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 100%;

  @media screen and (max-width: 970px) {
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
  }

  img {
    margin-top: 20px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 12px;
  }
`;

const InfoPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 970px) {
    flex-direction: row;
    margin-left: 15px;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const CommandPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;

  @media (max-width: 970px) {
    flex-direction: row;
  }

  button {
    border: 0;
    margin: 5px 0;
    color: grey;

    &:hover {
      color: black;
    }

    &.likeOn {
      color: #35591a;
    }
  }
`;