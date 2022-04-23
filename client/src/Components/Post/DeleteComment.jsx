import React from 'react';
import styled from 'styled-components';
import {colors} from "../../Utils/styles/color";
import {useNavigate, useParams} from "react-router-dom";


export default  function DeleteComment(){
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();




  return(
    <Container>
      <DeleteWrapper>
        <h2>Voulez-vous effacer ce commentaire ?</h2>

        <div className='btn-wrapper'>
          <button
            className='done material-icons'

          >done</button>
          <button
            className='close material-icons'
            onClick={() => navigate(-1)}
          >close</button>
        </div>

      </DeleteWrapper>
    </Container>
  )
}

// ----- Styled
const Container = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../img/photo_entreprise.jpg') no-repeat center/cover;
`;

const DeleteWrapper = styled.div `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  
  h2{
    text-align: center;
    font-size: 2rem;
    color: ${colors.tertiary};
  }
  
  .btn-wrapper{
    margin-top: 30px;
    
    button{
      margin: 0 15px;
      font-weight: bold;
      color: #f1f1f1;
      box-shadow: 4px 4px 2px rgba(0, 0, 0, .8);
      
      &:hover{
        box-shadow: 2px 2px 2px rgba(0, 0, 0, .8);

      }
      
    }

    .done{
      background: ${colors.success};
    }

    .close{
      background: ${colors.alert};

    }
  }

`;