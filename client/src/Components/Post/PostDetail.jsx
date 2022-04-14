import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getOnePost } from '../../Api/posts';
import { colors } from '../../Utils/styles/color';
import PostDetailSquelette from './PostDetailSquelette';

export default function PostDetail() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState();
  const params = useParams();
  const id = params.id;

  console.log(data);

  useEffect(() => {
    getOnePost(id).then((res) => {
      setData(res.data);
      setIsLoaded(!isLoaded);
    });
  }, []);

  return (
    <Container>
      {!isLoaded ? (
        <PostDetailSquelette />
      ) : (
        <Content>
          <h1>{data.message}</h1>
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
