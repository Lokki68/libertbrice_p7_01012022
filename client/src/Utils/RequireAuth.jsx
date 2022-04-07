import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../Api/user';
import { loginUserReducer } from '../Redux/User/userReducer';

export default function RequireAuth({ children, withAuth }) {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.isLogged && withAuth) {
      const token = window.localStorage.getItem('groupomania-token');
      if (token === null) {
        return navigate('/login');
      } else {
        const id = window.localStorage.getItem('groupomania-id');
        const data = { token, id };

        console.log(data);
        checkToken(data)
          .then((res) => {
            console.log(res.data);
            if (res.status === 200) {
              dispatch(loginUserReducer(res.data));
            } else {
              window.localStorage.removeItem('groupomania-token');
              navigate('/login');
            }
          })
          .catch((err) => {
            console.log(err);
            /*  window.localStorage.removeItem('groupomania-token');
            navigate('/login'); */
          });
      }
    }
  });
  return <Fragment>{children}</Fragment>;
}
