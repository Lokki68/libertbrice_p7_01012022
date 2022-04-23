import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPostReducer } from '../../Redux/Posts/postReducers';
import { deletePost, getOnePost } from '../../Api/posts';
import { colors } from '../../Utils/styles/color';

import PostDetailSquelette from './PostDetailSquelette';
import CommentCard from './CommentCard';

export default function PostDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.post);
  const users = useSelector((state) => state.users.data);

  const [isLoaded, setIsLoaded] = useState(false);
  const [like, setLike] = useState(false);
  const params = useParams();
  const userId = localStorage.getItem('groupomania-id');
  const id = params.id;

  useEffect(() => {
    getOnePost(id).then((res) => {
      dispatch(getPostReducer(res.data));
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
            <NavLink to={'/'} className='btn-back'>
              Retour
            </NavLink>
            <h1>{data.message}</h1>

            {data.userId.toString() === userId ? (
              <div className='admin-section'>
                <button>Modifier</button>
                <button onClick={handleDelete}>supprimer</button>
              </div>
            ) : (
              !like ?
                <button className="btn-like material-icons">favorite_border</button> :
                <button className="btn-like material-icons">favorite</button>

            )}
          </CardHeader>
          <CardBody>
            {data.image && <img src={data.image} alt='content' />}


            <Link
              to={`/post/${id}/commentform`}
              state={{
                id,
                userId,

              }}
            >
              Nouveau Commentaire
            </Link>
          </CardBody>
          {data.comments.length > 0 && (
            <CardComment>
              <ul>
                {data.comments.map((comment) => (
                  <li key={comment.id}>
                    <CommentCard data={comment} users={users} />
                  </li>
                ))}
              </ul>
            </CardComment>
          )}
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
  justify-content: center;
  align-items: center;
  position: relative;
  
  .btn-like{
    background-color: transparent;
    padding: 5px 5px;
    margin-left: 20px;
    
    color: ${colors.tertiary};
  }

  .btn-back,
  .admin-section {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .btn-back {
    left: 0;
    margin-left: 15px;
    text-decoration: none;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: bold;
    background-color: ${colors.secondary};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);

    &:hover {
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
    }
  }

  .admin-section {
    display: flex;
    right: 0;

    button {
      margin: 0 15px;
      border: none;
      border-radius: 5px;
      font-weight: bold;
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

const CardBody = styled.div`
  position: relative;
  width: 80%;
  height: 300px;
  margin: 10px auto;

  img {
    width: 400px;
    height: 300px;
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

const CardComment = styled.div`
  width: 100%;
  height: 342px;
  border-radius: 0 0 10px 10px;
  box-shadow: inset 0px 8px 10px rgba(0, 0, 0, 0.6);

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${colors.secondary};
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${colors.tertiary};
    border-radius: 10px;

    &:hover {
      background-color: ${colors.secondary};
    }
  }
`;