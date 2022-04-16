import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../Utils/styles/color';
import { dateParser } from '../../Utils/utils';

export default function PostCard({ post, users }) {
  console.log(post);

  const posterUserName = users.find((user) => user.id === post.userId).username;
  const date = dateParser(post.date);

  return (
    <Card>
      <CardHeader>
        <span>{posterUserName}</span>
        <span>{date} </span>
      </CardHeader>
      <h2>{post.message}</h2>
      <CardFooter>
        <span>Commentaire: {post.comments.length}</span>
        <NavLink className='more-info' to={`post/${post.id}`}>
          plus
        </NavLink>
        <span>Likes: {post.likes.length}</span>
      </CardFooter>
    </Card>
  );
}

// ----- Styled

const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%;
  height: 120px;
  margin: 20px auto;
  background-color: ${colors.primary};
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);

  h2 {
    color: #333;
  }

  .more-info {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    background-color: ${colors.tertiary};
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    color: #fff;

    &:hover {
      background-color: ${colors.secondary};
      box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.6);
    }
  }
`;

const CardHeader = styled.div`
  margin: 5px 15px;
  display: flex;
  justify-content: space-between;
`;

const CardFooter = styled.div`
  margin: auto 15px 5px;
  display: flex;
  justify-content: space-between;
`;
