import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {createComment, updateComment} from '../../Api/comment';
import { colors } from '../../Utils/styles/color';

export default function CommentForm() {
  const location = useLocation();
  const { id, userId, postId, oldContent } = location.state;
  const navigate = useNavigate();
  const [edit, setEdit] = useState('');
  const [content, setContent] = useState('');


  useEffect(() => {
    if (location.state.edit){
      setEdit(true);
      setContent(oldContent)
    }
  }, [])


  const handleSubmit = () => {
    const data = {
      userId: +userId,
      content,
    };

    if(!edit) {


      createComment(id, data).then((res) => {
        if (res.status === 200) {
          navigate(`/post/${id}`);
        }
      });
    } else {
      updateComment(id, data).then(res => {
        if (res.status === 200){
          navigate(`/post/${postId}`)
        }
        console.log(res)
      })
    }

  };

  return (
    <Container>
      <Formulaire
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h1>Nouveau commentaire</h1>
        <FormContent>
          <div className='content'>
            <textarea
              id='content'
              cols='30'
              rows='10'
              value={content}
              placeholder='Nouveau commentaire ...'
              onInput={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </FormContent>

        <button className='envoyer'>Envoyer</button>
        <button
          className='close'
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          X
        </button>
      </Formulaire>
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  padding-top: 10px;
  height: calc(100vh - 90px);
  background: url('../../img/photo_entreprise.jpg') no-repeat center/cover;
`;

const Formulaire = styled.form`
  position: relative;
  width: 30%;
  height: 50%;
  margin: 50px auto;
  padding: 20px;
  background: url('../../asset/logo_planete.jpg') no-repeat center/cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  
  textarea {
    width: 80%;
  }

  .envoyer,
  .close {
    position: absolute;
    border: none;
    background-color: ${colors.tertiary};
    box-shadow: 2px 2px 2px ${colors.black}, inset 2px 2px 2px ${colors.primary};
    color: #fff;
    font-family: roboto, sans-serif;

    &:hover {
      box-shadow: 2px 2px 2px ${colors.primary},
      inset 2px 2px 2px ${colors.black};
      color: ${colors.black};
    }
  }

  .envoyer {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    font-size: 1.5rem;
  }

  .close {
    height: 30px;
    width: 30px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    border-radius: 50%;
    font-size: 0.8rem;
  }
`;

const FormContent = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .message,
  .image {
    display: flex;
    flex-direction: column;
  }

  .image {
    input {
      display: none;
    }

    label {
      margin: 15px;
      padding: 8px;
      background-color: ${colors.primary};
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: ${colors.secondary};
      }
    }
  }
`;
