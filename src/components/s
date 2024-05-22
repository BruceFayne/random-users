import React from 'react';
import 'reset-css';
import { User as IUser } from '../../redux/User/types';
import './style.scss'

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  const { first, last } = user.name;
  const { city, state, country } = user.location;
  const dob = new Date(user.dob.date).toLocaleDateString();

  return (
    <div className="userCard">
      <div className="userCard__delete">
      <img className="userCard__delete-icon" src='./img/delete.svg'/>
      </div>
      <div className="userCard__header">
      <img className="userCard__header__photo" src={user.picture.thumbnail} alt={`${first} ${last}`} />
      <div className="userCard__header__info">
      <h3 className="userCard__header__info__name">{`${first} ${last}`}</h3>
      <p className='userCard__header__info__email'>{user.email}</p>
      </div>
      </div>
      <div className="userCard__info">
      <div className="userCard__info__titles">
      <p>Phone No</p>
      <p>Birthday</p>
      <p>Adress</p>
      </div>
      <div className="userCard__info__subtitles">
      <p>{user.phone}</p>
      <p>{dob}</p>
      <p>{`${city}, ${state}, ${country}`}</p>
      </div>
      </div>
    </div>
  );
};

export default User;
