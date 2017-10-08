import { combineReducers } from 'redux';

function arrangeViewing(state, action) {
  switch(action.type) {
    case "ARRANGE_VIEWING":
      const { model, id } = action.data;
      return `${model} and ${id}`
    default:
      return ""
  }
}

function requestInfo(state, action) {
  switch(action.type) {
    case "REQUEST_INFO":
      const { model, id } = action.data;
      return `${model} and ${id}`
    default:
      return ""
  }
}

function buyVehicle(state, action) {
  switch(action.type) {
    case "BUY_VEHICLE":
      const { model, id } = action.data;
      return `${model} and ${id}`
    default:
      return false
  }
}

const rootReducer = combineReducers({
  arrangeViewing,
  requestInfo,
  buyVehicle
});

export default rootReducer;
