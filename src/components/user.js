import { useState } from 'react';
import { getUserById } from '../services/service';

import UserDetailsCard from './userDetailsCard';
import UserLoginCard from './userLoginCard';
import UserTable from './userTable';

const User = () => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [userDashboard, setUserDashboard] = useState();
  const [getbyId, setGetbyId] = useState();
  const sendRequest = () => {
    getUserById(userId).then((data) => setUser(data));
  };
  const setUserIdValue = (event) => setUserId(event.target.value);

  return (
    <div className='bg-violet-700 '>
      <section className='container mx-auto justify-center flex space-x-10 items-center h-screen '>
        {['user table dashboard', 'get user by id'].map((value, index) => (
          <button
            onClick={() => {
              if (index === 0) {
                setGetbyId(false);
                return setUserDashboard(true);
              }
              if (index === 1) {
                setUserDashboard(false);
                return setGetbyId(true);
              }
            }}
            className='transition capitalize px-4 ease-in-out delay-150  hover:scale-110 hover:text-violet-900 hover:bg-violet-600 duration-300 text-violet-300 w-auto text-lg font-medium bg-violet-800 shadow-lg rounded-lg  py-2'
          >
            {value}
          </button>
        ))}
        {userDashboard && <UserTable />}
        {getbyId ? (
          user ? (
            <UserDetailsCard user={user} setUser={(value) => setUser(value)} />
          ) : (
            <UserLoginCard sendRequest={sendRequest} setUserIdValue={setUserIdValue} />
          )
        ) : (
          ''
        )}
      </section>
    </div>
  );
};

export default User;
