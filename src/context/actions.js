export const register = (values) => {
  return {
    type: 'REGISTER',
    payload: values,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
