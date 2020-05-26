import React, {useState} from 'react';
import InitialPage from './Landing';
import Header from './Header';
import Footer from './Footer';
import ProjectsList from './ProjectsList';
import { Switch, Route } from 'react-router-dom';
import projects from '../data/projects.json';
import '../stylesheets/App.scss';


const App = () => {
  const [data, setData] = useState(projects.projects)
  return (
    <div className="App">
      <Header />
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
      <Footer/>
    </div>
  );
}

export default App;
