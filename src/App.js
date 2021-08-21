import React, { useReducer } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import { AppProvider } from "./Providers/AppProvider";
import { appReducer, initialState } from "./Reducers/AppReducer";
import Loader from "./Components/Loader";

const App = () => {
  const state = useReducer(appReducer, initialState);
  const { isLoading } = state[0];
  return (
    <BrowserRouter>
      <Loader isLoading={isLoading} />
      <AppProvider value={state}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:title" component={Home} exact />
          <Route path="/detail/:movieId" component={Detail} />
        </Switch>
      </AppProvider>
    </BrowserRouter>
  );
};
export default App;
