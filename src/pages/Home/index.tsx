import React, { useState, useEffect } from 'react';
import './style.scss'
import { AppDispatch, useAppDispatch, useAppSelector } from '../../redux/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/User/index';
import { RootState } from '../../redux/store';
import { User as IUser } from '../../redux/User/types';
import User from '../../components/User';
import Search from '../../components/Search';
import Statistics from '../../components/Statistics';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.User);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, fetchUsers]);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
    <div className="header">
    <Search />
    <button className="refresh">Refresh Users</button>
    </div>
    <div className="home">
    <div className="main">
    <div className='userList'>
      {users.map((user: IUser) => (
        <User key={user.email} user={user} />
      ))}
    </div>
    <Statistics />
    </div>
    </div>
    </div>
  );
};

export default Home;
