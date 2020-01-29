import React from "react";
import { Switch, Route } from "react-router-dom";
import Toaster from "./Screens/Toaster/Toaster";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => (
            <Toaster
              isVisible={props.isVisible}
              header={"Success"}
              message={"This is a message"}
              onClick={props.onClick}
              type={"error"}
            />
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
