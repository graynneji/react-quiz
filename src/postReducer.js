export const INITIAL_STATE = {
  count: 0,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  toggle: false,
};

export const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return {
        count: state.count + 1,
      };
    case "DECREAMENT":
      return {
        count: state.count - 1,
      };
    case "ON_CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "TOGGLE":
      return {
        toggle: !state.toggle,
      };
    default:
      return state;
  }
};
