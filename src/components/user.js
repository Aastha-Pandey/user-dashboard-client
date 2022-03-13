import { useState } from 'react';
import { getUserById } from '../services/service';

import UserDetailsCard from './userDetailsCard';
import UserLoginCard from './userLoginCard';

const User = () => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();

  const sendRequest = () => {
    getUserById(userId).then((data) => setUser(data));
  };
  const setUserIdValue = (event) => setUserId(event.target.value);

  return (
    <div className='bg-violet-700 '>
      <section className='container mx-auto justify-center flex items-center h-screen '>
        {user ? (
          <UserDetailsCard user={user} setUser={(value) => setUser(value)} />
        ) : (
          <UserLoginCard sendRequest={sendRequest} setUserIdValue={setUserIdValue} />
        )}
      </section>
    </div>
  );
};

export default User;
