// Home.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../redux/User/index';
import User from '../../components/User';
import { RootState } from '../../redux/store';


const Home = () => {
  const dispatch = useDispatch();
  // const state = useAppSelector((state: any) => state);
  // console.log('state:', state); // добавлено
  const { users, loading, error } = useSelector((state: RootState) => state.User);
  

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch, fetchUsers]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {users.map((user: User) => (
        <User key={user.email} user={user} />
      ))}
    </div>
  );
};

export default Home;
