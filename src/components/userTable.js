import { useEffect, useState } from 'react';
import { getUsers } from '../services/service';
const headings = ['name', 'username', 'address', 'phoneNumber', 'email', 'dateOfBirth'];
const UserTable = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    getUsers().then((data) => setUser(data));
  });

  return (
    <>
      <div className='grid grid-cols-6 gap-y-10 gap-x-2 place-content-center text-center rounded-md p-10 border divide-x divide-solid divide-violet-400 border-violet-400'>
        {headings.map((value) => (
          <div className='bg-violet-800 text-violet-300 font-semibold text-lg p-2 rounded-md capitalize'>
            {value}
          </div>
        ))}

        {headings.map((heading) => (
          <div
            className={`grid grid-rows-${
              user && user.length
            } gap-y-2 divide-y divide-solid divide-violet-400`}
          >
            {user &&
              user.map((userObject) => (
                <div className='text-violet-300 font-medium text-sm p-2'>{userObject[heading]}</div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default UserTable;
