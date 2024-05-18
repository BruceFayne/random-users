import React, { useEffect } from 'react';
import { AppDispatch, useAppDispatch, useAppSelector } from '../../redux/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/User/index';
import { RootState } from '../../redux/store';
import { User as IUser } from '../../redux/User/types';
import User from '../../components/User';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.User);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, fetchUsers]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {users.map((user: IUser) => (
        <User key={user.email} user={user} />
      ))}
    </div>
  );
};

export default Home;
