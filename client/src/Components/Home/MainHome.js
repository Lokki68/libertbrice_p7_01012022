import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { isEmpty } from '../../utils/utils';
import { getPosts } from '../../redux/actions/post.actions';
import Loader from '../Loader/Loader';
import CardHome from './CardHome';
import PostForm from './PostForm';

export default function MainHome() {
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.postsReducer);
  const { data } = useSelector((state) => state.userReducer);

  const [formToggle, setFormToggle] = useState(false);

  const handleForm = () => {
    setFormToggle(!formToggle);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [postsData]);

  return (
    <Container>
      {formToggle ? (
        !isEmpty(data) && <PostForm user={data} toggleFunc={handleForm} />
      ) : (
        <button onClick={handleForm}>Formulaire Post</button>
      )}
      {isEmpty(postsData) && <Loader />}
      {!isEmpty(postsData) && (
        <ContainerHomeCard>
          {postsData.map((post) => {
            return <CardHome key={post.id} post={post} />;
          })}
        </ContainerHomeCard>
      )}
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    margin: 50px;
    border-radius: 4px;
    background-color: ${colors.tertiary};

    &:hover {
      background-color: ${colors.secondary};
    }
  }
`;

const ContainerHomeCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;

  button {
    margin: 10px;
    border-radius: 20px;
    background-color: ${colors.primary};
  }
`;
