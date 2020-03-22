const initialState = [];

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGES':
      return action.messages;

    case 'CREATE_MESSAGE':
      return [...state, action.message];

    case 'DELETE_MESSAGE':
      return state.filter(message => message._id !== action.id);

    case 'UPDATE_MESSAGE':
      return state.map(message =>
        message._id === action.message._id ? action.message : message,
      );

    case 'SELECT_MESSAGE':
      return state;
    default:
      return state;
  }
};

export default messageReducer;
