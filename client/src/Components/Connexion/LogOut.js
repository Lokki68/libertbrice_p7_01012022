import React from 'react';

export default function LogOut() {
  const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  const logOut = () => {
    removeLocalStorage('UserId');
    removeLocalStorage('Token');

    window.location = '/';
  };

  return <button onClick={logOut}>Se deconnecter</button>;
}

// ----- Styled
