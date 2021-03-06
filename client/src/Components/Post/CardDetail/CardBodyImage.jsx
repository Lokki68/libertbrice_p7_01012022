import React from 'react';
import styled from "styled-components";
import {colors} from "../../../Utils/styles/color";
import {Link} from "react-router-dom";

export default function CardBodyImage({data, id}) {
    const userId = localStorage.getItem('groupomania-id');

    return (
        <CardBodyImageContainer>
            <h2>{data.message}</h2>

            <img src={data.image} alt="test"/>


            <Link
                to={`/post/${id}/commentform`}
                state={{
                    id, userId,

                }}
            >
                Nouveau Commentaire
            </Link>
        </CardBodyImageContainer>
    );
}


// ---- Styled

const CardBodyImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: auto;
  margin: 20px auto;
  padding: 40px 0;
  
 

  h2 {
    width: 90%;
    margin: 10px auto;
    font-weight: normal;
    font-size: 1rem;

    
  }

  img {
    max-width: 400px;
    width: 70%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 3px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);

  }

  a {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    margin: 10px 15px;
    padding: 10px 15px;
    border-radius: 5px;
    color: #fff;
    background-color: ${colors.secondary};
    font-weight: bold;
    font-size: .5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);

    &:hover {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    }
  }

  @media (min-width: 735px) {
    h2{
      font-size: 1.5rem;
    }
    
    a {
      font-size: .8rem;
    }
  }
`;

