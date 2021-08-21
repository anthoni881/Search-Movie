import { AppContext } from "./AppProvider";
import { useContext } from "react";

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  return {
    state: appContext[0],
    dispatch: appContext[1],
  };
};
