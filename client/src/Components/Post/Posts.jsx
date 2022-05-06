import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { getAllPosts } from '../../Api/posts';
import { getAllPostsReducer } from '../../Redux/Posts/postsReducer';
import { colors } from '../../Utils/styles/color';
import { isEmpty } from '../../Utils/utils';
import PostCard from './PostCard';

export default function Posts() {
  const { data } = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllPosts().then((res) => {
      dispatch(getAllPostsReducer(res));
    });
  }, []);

  return (
    <Fragment>
      <NavLink to='/postform' className='new-post'>
        Nouveau post
      </NavLink>
      <Container>
        {!isEmpty(data) ? (
          <Content>
            {data.map((post) => {
              return (
                post && <PostCard post={post} users={users} key={post.id} />
              );
            })}
          </Content>
        ) : (
          <h1>Pas de post pour le moment ...</h1>
        )}
      </Container>
    </Fragment>
  );
}

// ----- Styled

const Container = styled.div`
  position: relative;
  height: 85%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  aspect-ratio: 16/9;
  padding: 30px 0;

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

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
