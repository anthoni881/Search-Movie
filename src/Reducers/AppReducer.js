export const initialState = {
  isLoading: false,
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADER":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      throw new Error("Unexpected action");
  }
};
