import constants from '../constants/game.constant';

const initialState = {
    loading: false,
  };
  
  function gameReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
  
  export default gameReducer;