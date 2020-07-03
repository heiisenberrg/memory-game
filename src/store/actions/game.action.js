import {SET_GAME_LEVEL} from '../constants/game.constant';

export const setGameLevel = (data) => ({
  type: SET_GAME_LEVEL,
  data,
});