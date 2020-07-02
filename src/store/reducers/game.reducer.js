import constants from '../constants/game.constant';

const initialState = {
    loading: false,
    levels: {
      1: {
        numberOfCards: 4,
        numberOfColumns: 2,
        isCompleted: false
      },
      2: {
        numberOfCards: 6,
        numberOfColumns: 2,
        isCompleted: false
      },
      3: {
        numberOfCards: 8,
        numberOfColumns: 2,
        isCompleted: false
      },
      4: {
        numberOfCards: 10,
        numberOfColumns: 3,
        isCompleted: false
      },
      5: {
        numberOfCards: 12,
        numberOfColumns: 3,
        isCompleted: false
      },
      6: {
        numberOfCards: 14,
        numberOfColumns: 3,
        isCompleted: false
      },
      7: {
        numberOfCards: 16,
        numberOfColumns: 4,
        isCompleted: false
      },
      8: {
        numberOfCards: 18,
        numberOfColumns: 4,
        isCompleted: false
      },
      9: {
        numberOfCards: 20,
        numberOfColumns: 5,
        isCompleted: false
      },
      10: {
        numberOfCards: 22,
        numberOfColumns: 5,
        isCompleted: false
      },
    },
  };
  
  function gameReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
  
  export default gameReducer;