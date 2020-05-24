import React, {useState} from 'react';
import InitialPage from './Landing';
import ProjectsList from './ProjectsList';
import { Switch, Route } from 'react-router-dom';
import projects from '../data/projects.json';
import '../stylesheets/App.scss';


const App = () => {
  const [data, setData] = useState(projects.projects)
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <InitialPage />
        </Route>
        <Route path='/projects'>
          <ProjectsList
           data={data}
           />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
