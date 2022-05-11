import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {colors} from "../../../Utils/styles/color";

export default function CardBody({data, id}) {
    const userId = localStorage.getItem('groupomania-id');

    return (
        <CardBody>
            <h2>{data.message}</h2>

            <Link
                to={`/post/${id}/commentform`}
                state={{
                    id, userId,

                }}
            >
                Nouveau Commentaire
            </Link>
        </CardBody>
    );
}

// ---- Styled

const CardBody = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 300px;
  margin: 10px auto;
  
  h2 {
    margin: 0 auto;
  }

  a {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
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

