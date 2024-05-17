import React from 'react';
import { User as IUser } from '../../redux/User/types';

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  const { first, last } = user.name;
  const { city, state, country } = user.location;
  const dob = new Date(user.dob.date).toLocaleDateString();

  return (
    <div>
      <img src={user.picture.thumbnail} alt={`${first} ${last}`} />
      <h3>{`${first} ${last}`}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{dob}</p>
      <p>{`${city}, ${state}, ${country}`}</p>
    </div>
  );
};

export default User;
