import React, {useEffect, useState} from 'react';
import {createLike, deleteLike} from "../../Api/like";

export default function Like({likes, postId}) {

  const [isLiked, setIsLiked] = useState(false);
  const [userLikeId, setUserLikeId] = useState('');
  const user_id = localStorage.getItem('groupomania-id')

  useEffect(() => {

    if (likes !== null || likes.length >= 1 ){
      const result = likes.filter(like => like.userId === +user_id)

      console.log(result)
      if(result.length >=1){
        setUserLikeId(result[0].id)
        setIsLiked(true)
      } else {
        setIsLiked(false)
      }
    }
  }, [])

  console.log(userLikeId)

  const handleLike = () => {
    const dataLike = {
      postId: parseInt(postId, 10),
      userId: +user_id
    }

    const id = userLikeId;




    console.log('Like', dataLike)
    console.log('DisLike', id)

    if (!isLiked) {
      createLike(dataLike)
        .then(res => {
          if(res.status === 200){
            setIsLiked(true)
          }
        }).catch(err => console.log({err: err.message}))
    } else {
      deleteLike(id)
        .then(res => {
          if (res.status === 200){
            setIsLiked(false)
          }
        })
    }
  }

  return (
    <button
      className="btn-like material-icons"
      onClick={(e) => {
        e.preventDefault()
        handleLike()
      }}
    >
      {
        isLiked ?
          'favorite' :
          'favorite_border'
      }
      </button>
  );
}

