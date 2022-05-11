import React, {useState} from 'react';
import styled from "styled-components";
import {colors} from "../../Utils/styles/color";
import GestPostComponent from "./GestAffichage/GestPostComponent";
import GestProfilComponent from "./GestAffichage/GestProfilComponent";

export default function Admin() {
  const [gestPost, setGestPost] = useState(false);
  const [gestProfil, setGestProfil] = useState(true);


  const toggleGest = () => {
    setGestPost(!gestPost);
    setGestProfil(!gestProfil)
  }

  return (
    <Container>
      <button onClick={toggleGest}>
        {
          gestPost ? (
            'Gestion Post'
          ) : (
            'Gestion Profil'
          )
        }
      </button>


      {
        gestPost ? (
          <GestPostComponent />
        ) : (
          <GestProfilComponent />
        )
      }
    </Container>
  );
}

// ---- Styled

const Container = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('../img/photo_entreprise.jpg') no-repeat center/cover;

  button {
    font-size: 2rem;
    background: ${colors.secondary};
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 0 6px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: .2s linear;

    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    }

  }
`;


