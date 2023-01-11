const getAuthStorage = () => {
  const auth: string = localStorage.getItem('authentication') || '{"isAuth":false, "user":{"email":""}}';
  return JSON.parse(auth);
};

export { getAuthStorage };
