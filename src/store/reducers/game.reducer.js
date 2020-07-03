import constants from '../constants/game.constant';

const initialState = {
    loading: false,
    currentLevel: 1,
    levels: {
      1: {
        numberOfCards: 4,
        numberOfColumns: 2,
        isCompleted: false,
        data: [1, 1, 2, 2]
      },
      2: {
        numberOfCards: 6,
        numberOfColumns: 2,
        isCompleted: false,
        data: [3, 1, 2, 3, 1, 2]
      },
      3: {
        numberOfCards: 8,
        numberOfColumns: 3,
        isCompleted: false,
        data: [3, 1, 4, 2, 3, 1, 4, 2]
      },
      4: {
        numberOfCards: 10,
        numberOfColumns: 3,
        isCompleted: false,
        data: [4, 3, 5, 1, 2, 4,  3, 1, 2, 5]
      },
      5: {
        numberOfCards: 12,
        numberOfColumns: 3,
        isCompleted: false,
        data: [3, 4, 6, 1, 2, 5, 6, 3, 1, 4, 5, 2]
      },
      6: {
        numberOfCards: 14,
        numberOfColumns: 4,
        isCompleted: false,
        data: [7, 5, 4, 3, 4, 1, 5, 2, 6, 3, 7, 1, 2, 6]
      },
      7: {
        numberOfCards: 16,
        numberOfColumns: 4,
        isCompleted: false,
        data: [4, 3, 6, 1, 8, 6, 2, 7, 8, 3, 1, 7, 2, 5, 4, 5]
      },
      8: {
        numberOfCards: 18,
        numberOfColumns: 4,
        isCompleted: false,
        data: [3, 4, 4, 1, 5, 6, 8, 2, 9, 3, 5, 7, 1, 6, 7, 2, 8, 9]
      },
      9: {
        numberOfCards: 20,
        numberOfColumns: 4,
        isCompleted: false,
        data: [5, 7, 9, 10, 7, 3, 1, 6, 4, 9, 10, 8, 2, 3, 1, 4, 6, 2, 5, 8]
      },
      10: {
        numberOfCards: 22,
        numberOfColumns: 4,
        isCompleted: false,
        data: [9, 3, 5, 8, 1, 7, 6, 4, 10, 2, 11, 9, 5, 11, 3, 8, 4, 1, 2, 10, 7, 6]
      },
    },
  };
  
  function gameReducer(state = initialState, action) {
    switch (action.type) {
      case constants.SET_GAME_LEVEL: 
        return {
          ...state,
          currentLevel: action.data
        }
      default:
        return state;
    }
  }
  
  export default gameReducer;