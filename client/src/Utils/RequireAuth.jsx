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
      const token = localStorage.getItem('groupomania-token');
      if (token === null) {
        return navigate('/login');
      } else {
        const id = localStorage.getItem('groupomania-id');
        const data = { token, id };

        checkToken(data)
          .then((res) => {
            if (res.status === 200) {
              dispatch(loginUserReducer(res.data));
            } else {
              localStorage.removeItem('groupomania-token');
              localStorage.removeItem('groupomania-id');
              navigate('/login');
            }
          })
          .catch((err) => {
            localStorage.removeItem('groupomania-token');
            localStorage.removeItem('groupomania-id');
            navigate('/login');
          });
      }
    }
  });
  return <Fragment>{children}</Fragment>;
}
