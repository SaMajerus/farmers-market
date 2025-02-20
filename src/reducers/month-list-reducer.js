const reducer = (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
    case 'ADD_MONTH':
      return Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          id: id
        }
      });

    case 'DELETE_MONTH':
      let newState = {...state};
      delete newState[id];
      return newState;

    default:
      return state;
    }
  };  

export default reducer;