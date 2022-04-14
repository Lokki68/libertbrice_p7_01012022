import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { deletePost, getOnePost } from '../../Api/posts';
import { colors } from '../../Utils/styles/color';
import PostDetailSquelette from './PostDetailSquelette';

export default function PostDetail() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPoster, setIsPoster] = useState(false);
  const [data, setData] = useState();
  const params = useParams();
  const userId = localStorage.getItem('groupomania-id');
  const id = params.id;

  useEffect(() => {
    getOnePost(id).then((res) => {
      setData(res.data);
      setIsLoaded(!isLoaded);
    });
  }, []);

  const handleDelete = () => {
    deletePost(id).then((_) => {
      navigate('/');
    });
  };

  return (
    <Container>
      {!isLoaded ? (
        <PostDetailSquelette />
      ) : (
        <Content>
          <CardHeader>
            <h1>{data.message}</h1>

            {data.userId.toString() === userId ? (
              <div className='admin-section'>
                <button>Modifier</button>
                <button onClick={handleDelete}>supprimer</button>
              </div>
            ) : (
              ''
            )}
          </CardHeader>
        </Content>
      )}
    </Container>
  );
}

// ----- Styled
const Container = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../img/photo_entreprise.jpg') no-repeat center/cover;
`;

const Content = styled.div`
  position: relative;
  height: 85%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);

  width: 80%;
  padding: 30px 0;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .admin-section {
    display: flex;

    button {
      margin: 0 15px;
      border: none;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);

      &:last-of-type {
        color: #fff;
        background-color: ${colors.alert};
      }

      &:hover {
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
      }
    }
  }
`;
