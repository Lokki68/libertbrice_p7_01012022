import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

export default function CardAnnuaire({ user }) {
  const isAdmin = user.admin;

  const [toggle, setToggle] = useState(false);
  const [modify, setModify] = useState(false);

  const toggleModal = () => {
    setToggle(!toggle);
  };

  const toggleModify = () => {
    setModify(!modify);
  };
  return (
    <Container>
      {toggle && (
        <OverlayModal>
          <CardModal>
            <PictureModal>
              <img src={user.image} alt='profil' />
            </PictureModal>
            <InfoModal>
              <div className='username'>
                <h2>{user.username}</h2>
              </div>
              <div className='contact'>
                {!modify ? (
                  <div>
                    <p>
                      Email : <strong>{user.email}</strong>
                    </p>
                    <p>
                      Numéro de poste : <strong>{user.phoneNumber}</strong>
                    </p>
                  </div>
                ) : (
                  <form className='formContact'>
                    <input type='email' id='email' placeholder='Email ...' />
                    <input
                      type='number'
                      id='phoneNumber'
                      placeholder='Phone Number ...'
                    />

                    <button type='submit'>Enregistrer modifications</button>
                  </form>
                )}
              </div>
              <p>
                Un peu d'info : <strong>Descritpion</strong>
              </p>
            </InfoModal>
            {isAdmin && (
              <AdminModalCommand>
                <h3>Admin</h3>
                <button className='btn btn-modify' onClick={toggleModify}>
                  Modifier
                </button>
                <button className='btn btn-delete'>Supprimer</button>
              </AdminModalCommand>
            )}
            <button className='material-icons btn-close' onClick={toggleModal}>
              close
            </button>
          </CardModal>
        </OverlayModal>
      )}
      <Card>
        <span className='btn-info' onClick={toggleModal}>
          info
        </span>
        <Picture>
          <img src={user.image} alt='profil' />
          {user.admin !== null ? (
            <span className='material-icons'>star</span>
          ) : (
            ''
          )}
        </Picture>
        <InfoCard>
          <h3>{user.username}</h3>
          <p>{user.email}</p>
          <p>{user.phoneNumber}</p>
        </InfoCard>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 330px;
  height: 115px;
  margin: 20px;
  background-color: ${colors.primary};
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);

  &:hover {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  }

  .btn-info {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    margin-top: 5px;
    margin-right: 5px;
  }
`;

const Picture = styled.div`
  height: 100%;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.2);

  img {
    height: inherit;
    width: 100px;
    border-radius: 4px 0 0 4px;
  }

  span {
    position: absolute;
    top: -10px;
    left: -10px;
    color: ${colors.tertiary};
  }
`;

const InfoCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
`;

const OverlayModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(49, 49, 49, 0.8);
  z-index: 10;
`;

const CardModal = styled.div`
  position: relative;
  min-width: 700px;
  max-width: 700px;
  height: 300px;
  border: 1px solid ${colors.black};
  border-radius: 10px 10px 0 0;
  background-color: ${colors.primary};
  display: flex;
  flex-direction: row;

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background-color: transparent;
    border-radius: 50%;
    color: ${colors.black};
    cursor: pointer;
  }
`;

const PictureModal = styled.div`
  width: 30%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 60%;
    margin: 5px 0 0 5px;
    border-radius: 50%;
  }
`;

const InfoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 75%;
  height: inherit;

  .formContact {
    display: flex;
    flex-direction: column;

    input {
      margin-top: 10px;
    }

    button {
      margin-top: 10px;
      border-radius: 4px;
      background-color: ${colors.secondary};
    }
  }
`;

const AdminModalCommand = styled.div``;
