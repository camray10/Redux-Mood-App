const INITIAL_STATE = {
  mood: 'โ๏∀๏ใ'
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CHANGE_MOOD":
      return { ...state, mood: action.payload};
  }
}

const store = Redux.createStore(rootReducer);
