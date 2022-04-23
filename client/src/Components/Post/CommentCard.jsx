import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../Utils/styles/color';
import { dateParser } from '../../Utils/utils';
import {deleteComment} from "../../Api/comment";
import {useNavigate} from "react-router-dom";

export default function CommentCard({ data, users }) {
  const navigate = useNavigate();
  const userId = localStorage.getItem('groupomania-id');
  const [posterUserName, setPosterUserName] = useState('');


  useEffect(() => {
    if (users.length > 0) {
      const user = users.filter((user) => user.id === data.userId);

      setPosterUserName(user[0].username);
    }

  }, []);

  const handleDelete = () => {
    const {postId} = data;
    const id  = data.id;
    deleteComment(id).then(res => {
      if(res.status === 200){
        navigate(`/`)
      }
    } )
  }

  return (
    <Container>
      <Comment>
        <InfoComment>
          <span>{posterUserName}</span>
          <span>{dateParser(data.createdAt)}</span>
        </InfoComment>
        <ContentComment>
          <p>{data.content}</p>
        </ContentComment>
        {
          parseInt(userId, 10) === data.userId &&
          (
            <AdminComment>
              <button
                className='material-icons'
                onClick={(e) => {
                  e.preventDefault()
                  handleDelete()
                }}
              >delete</button>
              <button className='material-icons'>edit</button>
            </AdminComment>
          )
        }

      </Comment>
    </Container>
  );
}

// ----- Styled
const Container = styled.div``;

const Comment = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  margin: 10px 10px;
  height: 60px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.6);
`;

const InfoComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto 0;
  color: ${colors.tertiary};
`;

const ContentComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const AdminComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  button {
    padding: 5px;
    color: #fff;
    margin: 0 5px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);

    &:first-child {
      background-color: ${colors.alert};
    }

    &:last-child {
      background-color: ${colors.secondary};
    }

    &:hover {
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
    }
  }
`;
