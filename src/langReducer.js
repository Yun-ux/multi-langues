const initialState = {
  lang: "en"
};
const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return { lang: action.data }; // on choisit le nom du parametre data
    case "DEFAULT_LANG":
      return initialState;
    default:
      return state;
  }
};
export default langReducer;
