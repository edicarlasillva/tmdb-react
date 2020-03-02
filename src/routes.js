import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import MovieDetail from "./pages/MovieDetail";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </BrowserRouter>
  );
}
