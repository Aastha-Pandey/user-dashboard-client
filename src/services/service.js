export const getUserById = async (userId) => {
  const url = new URL('https://mak-user-dashboard.vercel.app/user');
  url.searchParams.set('id', userId);

  let result = await fetch(url)
    .then((val) => val.json())
    .then((data) => data);

  return result;
};

export const getUsers = async () => {
  const url = new URL('https://mak-user-dashboard.vercel.app/alluser');

  let result = await fetch(url)
    .then((val) => val.json())
    .then((data) => data);

  return result;
};
