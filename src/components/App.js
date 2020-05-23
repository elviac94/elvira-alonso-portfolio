import React from 'react';
import InitialPage from './Landing';
import ProjectsList from './ProjectsList';
import { Switch, Route } from 'react-router-dom';
import '../stylesheets/App.scss';


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <InitialPage />
        </Route>
        <Route path='/projects'>
          <ProjectsList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
