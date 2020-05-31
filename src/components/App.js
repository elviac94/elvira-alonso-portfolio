import React, { useState, Component } from 'react';
import InitialPage from './Landing';
import Header from './Header';
import Footer from './Footer';
import ProjectsList from './ProjectsList';
import { Switch, Route } from 'react-router-dom';
import projects from '../data/projects.json';
import '../stylesheets/App.scss';


const App = () => {

  const [data, setData] = useState(projects.projects);
  const [selection, setSelection] = useState('home')

  const componentShown = (component) => {
    if (component !== selection) {
      setSelection(component)
    }
  };

  return (
    <div className="App">
      <Header selection={selection} />
      <Switch>
        <Route exact path='/'>
          <InitialPage onShow={componentShown} />
        </Route>
        <Route path='/projects'>
          <ProjectsList
            onShow={componentShown}
            data={data}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
