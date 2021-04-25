import { combineReducers } from "redux";

const song = (state = "", action) => {
  switch (action.type) {
    case "SELECTED_SONG":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  song: song,
});
