import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UidContext } from './Components/AppContext';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/actions/user.actions';

import Connexion from './Pages/Connexion';
import Home from './Pages/Home';
import Profil from './Pages/Profil';
import Annuaire from './Pages/Annuaire';

export default function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem('UserId');

    if (userId === null) {
      console.log('No Id');
    } else {
      setUid(userId);
    }

    if (uid) {
      dispatch(getUser(uid));
    }
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Connexion />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profil' element={<Profil />} />
          <Route path='/annuaire' element={<Annuaire />} />
        </Routes>
      </BrowserRouter>
    </UidContext.Provider>
  );
}
