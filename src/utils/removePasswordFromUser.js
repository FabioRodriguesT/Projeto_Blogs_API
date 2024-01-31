const removePasswordFromUser = (user) => {
  const { password, ...rest } = user;
  return rest;
};

module.exports = {
  removePasswordFromUser,
};