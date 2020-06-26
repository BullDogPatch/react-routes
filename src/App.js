import React from "react";

import { LandingPage } from "./LandingPage";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import { AppLayout } from "./app.layout";
import { ProtectedRoute } from "./protected.route";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}
export default App;
