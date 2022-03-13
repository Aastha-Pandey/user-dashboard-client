import { cakeIcon, emailIcon, phoneIcon, userIcon } from '../svgicons';

const UserDetailsCard = ({ user, setUser }) => {
  return (
    <>
      <div className='flex flex-col  w-1/2 space-y-4'>
        <div className='flex flex-col space-y-8 shadow-violet-900 shadow-lg bg-violet-800 rounded-lg justify-center items-center w-full py-4'>
          <div className='flex flex-col space-y-1 content-center items-center  '>
            {userIcon}
            <p className=' text-violet-300 font-medium text-lg'>{user[0].name}</p>
            <p className=' text-violet-300 font-medium text-xs'>{user[0].username}</p>
            <p className=' text-violet-300 font-medium text-xs uppercase'>{user[0].address}</p>
          </div>
          <div className='flex flex-col space-y-1'>
            <div className='flex space-x-4'>
              {cakeIcon}
              <p className=' text-violet-300 font-medium text-xs'>{user[0].dateOfBirth}</p>
            </div>
            <div className='flex space-x-4'>
              {phoneIcon}
              <div className=' text-violet-300 font-medium text-xs'>{user[0].phoneNumber}</div>
            </div>
            <div className='flex space-x-4'>
              {emailIcon}
              <div className=' text-violet-300 font-medium text-xs'>{user[0].email}</div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setUser(false)}
          className='transition ease-in-out delay-150  hover:scale-110 hover:text-violet-900 hover:bg-violet-600 duration-300 text-violet-300 w-auto text-lg font-medium bg-violet-800 shadow-lg rounded-lg  py-2'
        >
          Check another user
        </button>
      </div>
    </>
  );
};

export default UserDetailsCard;
