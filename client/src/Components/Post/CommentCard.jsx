import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../Utils/styles/color';
import { dateParser } from '../../Utils/utils';
import {Link, useNavigate} from "react-router-dom";

export default function CommentCard({ data, users }) {
  const navigate = useNavigate();
  const id = data.id;
  const userId = localStorage.getItem('groupomania-id');
  const [posterUserName, setPosterUserName] = useState('');


  useEffect(() => {
    if (users.length > 0) {
      const user = users.filter((user) => user.id === data.userId);

      setPosterUserName(user[0].username);
    }

  }, []);



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
                onClick={ () => navigate(`/post/delete/${id}`)}
              >delete</button>
              <Link
                to={`/post/${data.postId}/commentForm`}
                state={{
                  id,
                  postId: data.postId,
                  userId,
                  oldContent: data.content,
                  edit: true
                }}
                className='material-icons'
              >edit</Link>
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
  
  button, a{
    padding: 5px;
    color: #fff;
    margin: 0 5px;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
    &:hover {
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
    }
  }

  button {
    border: none;
    background-color: ${colors.alert};
  }
  
  a{
    background-color: ${colors.secondary};

  }
  
  
`;
