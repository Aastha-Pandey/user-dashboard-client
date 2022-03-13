const UserLoginCard = ({ sendRequest, setUserIdValue }) => {
  return (
    <>
      <div className='flex flex-col space-y-4 justify-center bg-violet-900 w-5/6 h-1/4 p-4 md:w-1/4 md:h-1/4 lg:w-1/4 lg:h-1/4 rounded-lg'>
        <input
          onChange={setUserIdValue}
          autoFocus
          type='text'
          placeholder='Enter user id'
          className='shadow-violet-900 placeholder:px-2 text-violet-300 shadow-lg bg-violet-800 rounded-lg caret-violet-300 focus:outline-none px-10 py-2'
        ></input>
        <button
          onClick={sendRequest}
          className='transition ease-in-out delay-150  hover:scale-110 hover:text-violet-900 hover:bg-violet-600 duration-300 text-violet-300 w-auto text-lg font-medium bg-violet-700 shadow-lg rounded-lg  py-2'
        >
          Show details
        </button>
      </div>
    </>
  );
};

export default UserLoginCard;
