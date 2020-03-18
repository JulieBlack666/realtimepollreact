import React from 'react';
import  Survey  from './components/Survey/Survey';
import { AdminPanel } from './components/AdminPanel/AdminPanel';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
         <Route path="/" exact>
            <Survey />
          </Route>
          <Route path="/login">
            {/* <LoginPanel /> */}
          </Route>
          <Route path="/admin">
            <AdminPanel />
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
