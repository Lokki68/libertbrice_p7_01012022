import React, {useEffect, useState} from 'react';
import { isEmpty} from "../../../Utils/utils";
import styled from "styled-components";
import {colors} from "../../../Utils/styles/color";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getAllUsers} from "../../../Api/user";
import {getUsersReducer} from "../../../Redux/User/usersReducer";

export default function GestProfilComponent() {
  const users = useSelector(state => state.users.data)
  const [isLoaded, setIsloaded] = useState(false);
  const dispatch = useDispatch()

  const getAllUserFunction = () => {
    getAllUsers().then((res) => {
      dispatch(getUsersReducer(res.data));
    })
  }

  useEffect(() => {
    getAllUserFunction()
    setIsloaded(!isLoaded)
  }, []);

  const handleDelete = (user) => {
    const id = +user.id
    deleteUser(id)
      .then(() => {
        getAllUsers().then(res => {
          dispatch(getUsersReducer(res.data))
        })
      })
  }


  return (
    <GestProfil>
      {
        isLoaded && !isEmpty(users) > 0 ?
          (
            <ul>
              {
                users.map(user => {
                  console.log(user)
                  return (
                    <li key={user.id}>
                      <div className="info">
                        <img src={user.image} alt={user.username}/>
                        <h3>
                          {user.username}
                        </h3>
                      </div>
                      <div className="admin">
                        <button
                          className='material-icons btn'
                          onClick={() => handleDelete(user)}
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
    </GestProfil>
  );
}


// ---- Styled

const GestProfil = styled.div`
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
    height: 80px;
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.4);
    margin: 20px auto;
    height: 70px;
    border-radius: 5px;

    .info {
      margin-left: 15px;
      display: flex;
      justify-content: center;
      align-items: flex-start;

      h3 {
        font-size: 24px;
        margin: auto 15px;
      }

      img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 50%;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.4);
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
