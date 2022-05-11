import React from 'react';
import styled from "styled-components";
import {colors} from "../../../Utils/styles/color";
import {Link} from "react-router-dom";

export default function CardBodyImage({data, id}) {
    const userId = localStorage.getItem('groupomania-id');

    return (
        <CardBodyImage>
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
        </CardBodyImage>
    );
}


// ---- Styled

const CardBodyImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 400px;
  margin: 20px auto;
  padding: 40px 0;

  h2 {
    margin: 0 auto;
  }

  img {
    width: 400px;
    height: 300px;
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
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);

    &:hover {
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
    }
  }
`;

