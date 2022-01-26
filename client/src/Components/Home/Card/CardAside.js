import React from 'react';
import styled from 'styled-components';

export default function CardAside() {
  return (
    <CardAsideContainer>
      <img src='./uploads/profils/random_user.jpg' alt='profil' />
      <h2>Username</h2>
      <p>Time information</p>
      <CommandPost>
        <button className='material-icons '>favorite_border</button>
        <span>10</span>
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

const CommandPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

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
