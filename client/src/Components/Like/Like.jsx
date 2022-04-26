import React, {useEffect, useState} from 'react';
import {createLike, deleteLike} from "../../Api/like";

export default function Like({likes, postId}) {

  const [isLiked, setIsLiked] = useState(false);
  const [userLikeId, setUserLikeId] = useState('');
  const userId = parseInt(localStorage.getItem('groupomania-id'))

  useEffect(() => {

    if (likes !== null || likes.length >= 1 ){
      const result = likes.filter(like => like.userId === userId)

      console.log(result)
      if(result.length >=1){
        setUserLikeId(result[0].id)
        setIsLiked(true)
      } else {
        setIsLiked(false)
      }
    }
  }, [])

  const handleLike = () => {
    const dataLike = {
      postId: parseInt(postId),
      userId
    }

    const dataDislike = {
      id: userLikeId,
      userId
    }


    console.log('Like', dataLike)
    console.log('DisLike', dataDislike)

    if (!isLiked) {
      createLike(dataLike)
        .then(res => {
          if(res.status === 200){
            setIsLiked(true)
          }
        }).catch(err => console.log({err: err.message}))
    } else {
      deleteLike(dataDislike)
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

