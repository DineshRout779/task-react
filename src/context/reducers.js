const reducers = (state, action) => {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducers;
