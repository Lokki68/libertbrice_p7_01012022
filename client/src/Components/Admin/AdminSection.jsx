import React from 'react';
import styled from "styled-components";
import {colors} from "../../Utils/styles/color";
import {deleteAdmin, saveAdmin} from "../../Api/admin";
import {Link} from "react-router-dom";

export default function AdminSection({user, toggleFunc}) {
  console.log(user)

  const handleDelete = () => {
    const id = user.admin;

    deleteAdmin(id)
      .then(res => {
        if(res.status === 200){
          toggleFunc()
        }
      })
  }

  const handleSave = () => {
    const id = user.id;
    const data = {
      username: user.username
    }

    saveAdmin(id, data)
      .then(res => {
        if(res.status === 200){
          toggleFunc()
        }
      })
  }
  return (
    <AdminBarre>
      <button
      className='material-icons btn btn-upgrade'
      onClick={() => handleSave()}
      >upgrade</button>
      <Link
      to='/admin/profilForm'
      state={{
        user: user,
      }}
      className='material-icons btn btn-modif'
      >edit</Link>
      <button
      className='material-icons btn btn-delete'
      onClick={() => handleDelete()}
      >delete</button>
    </AdminBarre>
  );
}


// ---- Styled

const AdminBarre = styled.div`
  position: absolute;
  height: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(100%);
  border-radius: 0 0 10px 10px;
  background: ${colors.secondary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  .btn {
    font-size: 18px;
    color: #fff;
    padding: 5px;
    border: none;
    border-radius: 50%;
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.4);
    transition: .2s linear;
    
    &:hover{
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);

    }
  }
  
  .btn-upgrade{
    background-color: ${colors.success};
  }
  
  .btn-modif{
    background-color: ${colors.tertiary};
  }

  .btn-delete{
    background-color: ${colors.alert};
  }
  
`;

