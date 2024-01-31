const removePasswordFromUser = (user) => {
  console.log('USER', user);
  const { password, ...rest } = user;
  return rest;
};

module.exports = {
  removePasswordFromUser,
};