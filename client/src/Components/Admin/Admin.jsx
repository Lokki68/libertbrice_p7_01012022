import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {deletePost, getAllPosts} from "../../Api/posts";
import {useDispatch, useSelector} from "react-redux";
import {getAllPostsReducer} from "../../Redux/Posts/postsReducer";
import {dateParser, isEmpty} from "../../Utils/utils";
import {colors} from "../../Utils/styles/color";

export default function Admin(props) {
  const [isLoaded, setIsloaded] = useState(false)
  const posts = useSelector(state => state.posts.data)
  const dispatch = useDispatch()

  useEffect(() => {
    getAllPosts().then(res => {
      setIsloaded(!isLoaded)
      dispatch(getAllPostsReducer(res))
    })
  },[])

  const handleDelete = (post) => {
    deletePost(post.id)
      .then(() => {
        getAllPosts().then(res => {
          dispatch(getAllPostsReducer(res))
        })
      })
  }



  return (
    <Container>
      <h2>Gestion Post</h2>

      <Content>
        {
          isLoaded && !isEmpty(posts) > 0 ?
            (
              <ul>
                {
                  posts.map(post => {
                    console.log(post)
                    return (
                      <li key={post.id} >
                        <div className="info">
                          <h3>
                            {post.message}
                          </h3>
                          <span>
                            {dateParser(post.createdAt)}
                          </span>
                        </div>
                        <div className="admin">
                          <button
                          className='material-icons btn'
                          onClick={() => handleDelete(post)}
                          >delete</button>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            ) :
            (
              <h2>Chargement en cours ...</h2>
            )
        }
      </Content>
    </Container>
  );
}

// ---- Styled

const Container = styled.div`
height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('../img/photo_entreprise.jpg') no-repeat center/cover;
  
  h2 {
    background: ${colors.secondary};
    padding: 5px 10px;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

  }
`;

const Content = styled.div`
  height: 85%;
  aspect-ratio: 16/9;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

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
  
  li{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.4);
    margin: 20px auto;
    height: 70px;
    border-radius: 5px;
    
    .info{
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      
      h3{
        font-size: 24px;
      }
      
      span{
        font-size: 13px;
        color: #333;
      }
      
    }
    
    .btn {
      margin-right: 15px;
      padding: 10px;
      border: none;
      border-radius: 50%;
      font-size: 18px;
      color: #fff;
      background: ${colors.alert};
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.4);
      
      &:hover {
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
      }
    }
  }

`;

