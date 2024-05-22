import React from 'react';
import { User as IUser } from '../../redux/User/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './style.scss';

const Statistics = () => {
  const users = useSelector((state: RootState) => state.User.users);


  const countUsersInRange = (start: number, end: number) => {
    return users.filter(user => user.dob.age >= start && user.dob.age <= end).length;
  };


  const totalUsers = users.length;


  const ageRanges = [
    { label: '11-20', start: 11, end: 20 },
    { label: '21-30', start: 21, end: 30 },
    { label: '31-40', start: 31, end: 40 },
    { label: '41-50', start: 41, end: 50 },
    { label: '51+', start: 51, end: Infinity }
  ];

  const usersInAgeRanges = ageRanges.map(range => ({
    label: range.label,
    count: countUsersInRange(range.start, range.end)
  }));


  const countGenders = (gender: 'male' | 'female') => {
    return users.filter(user => user.gender === gender).length;
  };

  const maleCount = countGenders('male');
  const femaleCount = countGenders('female');

  return (
    <div className="statistics">
        <div className='statistics__total'>
        <p>{totalUsers} Users</p>
        </div>
        <div className='statistics__age'>
        <p className='statistics__age__title'>Age Groups</p>
        <div className='statistics__age__row'>
            <p className='statistics__age__subtitle'>11 to 20:</p>
            <p className='statistics__age__count'>{usersInAgeRanges[0].count} users</p>
        </div>

        <div className='statistics__age__row'>
            <p className='statistics__age__subtitle'>21 to 30:</p>
            <p className='statistics__age__count'>{usersInAgeRanges[1].count} users</p>
        </div>

        <div className='statistics__age__row'>
            <p className='statistics__age__subtitle'>31 to 40:</p>
            <p className='statistics__age__count'>{usersInAgeRanges[2].count} users</p>
        </div>

        <div className='statistics__age__row'>
            <p className='statistics__age__subtitle'>41 to 50:</p>
            <p className='statistics__age__count'>{usersInAgeRanges[3].count} users</p>
        </div>

        <div className='statistics__age__row'>
            <p className='statistics__age__subtitle'>51+:</p>
            <p className='statistics__age__count'>{usersInAgeRanges[4].count} users</p>
        </div>
      </div>
      <div className="statistics__gender">
      <p className='statistics__age__title'>Gender Groups</p>
        <div className='statistics__age__row'>
           <p className='statistics__age__subtitle'> Male:</p> 
           <p className='statistics__age__count'>{maleCount} users</p>
        </div>
        <div className='statistics__age__row'> 
            <p className='statistics__age__subtitle'>Female:</p> 
            <p className='statistics__age__count'>{femaleCount} users</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
