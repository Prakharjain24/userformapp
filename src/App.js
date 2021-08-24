import React from 'react';
import { UserForm, RenderTable } from './redux/component';
import { Switch, Route, Redirect } from "react-router-dom";

export const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' render={props => <UserForm {...props} />} />
        <Route exact path='/user-form' render={props => <UserForm {...props} />} />
        <Route exact path='/render-table' render={props => <RenderTable {...props} />} />
        <Redirect to='/' />
      </Switch>
    </React.Fragment>
  );
}

export default App;
