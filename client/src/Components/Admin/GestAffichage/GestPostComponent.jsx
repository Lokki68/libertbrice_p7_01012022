import React, {useEffect, useState} from 'react';
import {dateParser, isEmpty} from "../../../Utils/utils";
import styled from "styled-components";
import {colors} from "../../../Utils/styles/color";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, getAllPosts} from "../../../Api/posts";
import {getAllPostsReducer} from "../../../Redux/Posts/postsReducer";

export default function GestPostComponent() {
  const posts = useSelector(state => state.posts.data)
  const [isLoaded, setIsloaded] = useState(false);
  const dispatch = useDispatch()

  const getAllPostFunction = () => {
    getAllPosts().then(res => {
      dispatch(getAllPostsReducer(res))
    })
  }
  useEffect(() => {
    getAllPostFunction()
    setIsloaded(!isLoaded)
  }, [])

  const handleDelete = (post) => {
    deletePost(post.id)
      .then(() => {
        getAllPosts().then(res => {
          dispatch(getAllPostsReducer(res))
        })
      })
  }


  return (
    <GestPost>
      {
        isLoaded && !isEmpty(posts) > 0 ?
          (
            <ul>
              {
                posts.map(post => {
                  console.log(post)
                  return (
                    <li key={post.id}>
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
                        >delete
                        </button>
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
    </GestPost>
  );
}

// ---- Styled

const GestPost = styled.div`
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

  li {
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

    .info {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h3 {
        font-size: 24px;
      }

      span {
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