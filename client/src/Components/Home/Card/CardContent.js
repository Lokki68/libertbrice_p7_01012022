import React, { useState } from 'react';
import styled from 'styled-components';
import { isEmpty } from '../../../utils/utils';
import EditPostMessage from './EditPostMessage';

export default function CardContent({ post }) {
  const userId = parseInt(localStorage.getItem('UserId'), 10);

  const [toggleEdit, setToggleEdit] = useState(false);

  const handleToggle = () => {
    setToggleEdit(!toggleEdit);
  };

  return (
    <Container>
      <Content>
        {!isEmpty(post.image) ? <img src={post.image} alt='' /> : ''}
        {toggleEdit ? (
          <EditPostMessage post={post} toggleFunc={handleToggle} />
        ) : (
          <p>{post.message}</p>
        )}
        {userId && userId === post.userId ? (
          !toggleEdit ? (
            <button
              className='material-icons edit'
              onClick={() => handleToggle()}
            >
              edit
            </button>
          ) : (
            ''
          )
        ) : (
          ''
        )}
      </Content>
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: 50%;
    height: auto;
  }

  .edit {
    position: absolute;
    font-size: 18px;
    right: 5px;
    border: 0;
    color: grey;

    &:hover {
      color: black;
    }
  }
`;
