import React, {useEffect, useState} from 'react';
import {Link, NavLink, useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {getPostReducer} from '../../Redux/Posts/postReducers';
import {deletePost, getOnePost} from '../../Api/posts';
import {colors} from '../../Utils/styles/color';

import PostDetailSquelette from './PostDetailSquelette';
import CommentCard from './CommentCard';
import Like from "../Like/Like";
import CardBody from "./CardDetail/CardBody";
import CardBodyImage from "./CardDetail/CardBodyImage";

export default function PostDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.post);
  const users = useSelector((state) => state.users.data);

  const [isLoaded, setIsLoaded] = useState(false);
  const {id} = useParams();
  const userId = localStorage.getItem('groupomania-id');


  useEffect(() => {
    getOnePost(id).then((res) => {
      dispatch(getPostReducer(res.data));
      setIsLoaded(!isLoaded);
    });
  }, []);

  const handleDelete = () => {
    deletePost(id).then((res) => {
      if(res.status === 200){
        navigate('/');
      }
    });
  };

  return (<Container>
      {!isLoaded ? (<PostDetailSquelette/>) : (<Content>
          <CardHeader>
            <NavLink to={'/'} className='btn-back'>
              Retour
            </NavLink>

            {data.userId.toString() === userId ? (
              <div className='admin-section'>
                <Link
                  to={`/post/${id}/editform `}
                  state={{
                    data,
                  }}
                  className='material-icons'
                >edit</Link>
                <button
                  onClick={handleDelete}
                  className='material-icons'
                >delete</button>
              </div>
            ): ''}
            <Like likes={data.likes} postId={id}/>
          </CardHeader>
        {
          !data.image ? (
              <CardBody data={data} id={id}/>
          ) : (
              <CardBodyImage data={data} id={id}/>

          )
        }
          {data.comments.length > 0 && (<CardComment>
              <ul>
                {data.comments.map((comment) => (<li key={comment.id}>
                    <CommentCard data={comment} users={users}/>
                  </li>))}
              </ul>
            </CardComment>)}
        </Content>)}
    </Container>);
}

// ----- Styled
const Container = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: url('../../img/photo_entreprise.jpg') no-repeat center/cover;
`;

const Content = styled.div`
  position: relative;
  margin: auto 0;
  height: 90%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);

  width: 80%;
  padding: 30px 0;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn-like {
    background-color: transparent;
    padding: 5px 5px;
    margin: 0 20px;
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    color: ${colors.tertiary};
  
    &:hover {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
    }
    
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
    position: absolute;
    top: -15px;
    right: -30px;
    display: flex;



    button {
      margin: 0 15px;
      padding: 10px;
      border: none;
      border-radius: 50%;
      font-size: 1em;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
      color: #fff;
      background-color: ${colors.alert};

      &:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
      }
    }

    a {
      padding: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      background-color: ${colors.success};
      color: #fff;
      font-size: 1em;
      border-radius: 50%;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
      
      &:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
      }
    }
  }
`;

const CardComment = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0 0 10px 10px;
  box-shadow: inset 0px 8px 10px rgba(0, 0, 0, 0.6);

  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${colors.secondary};
  }

    &:hover {
      background-color: ${colors.secondary};
    }
  }
`;
