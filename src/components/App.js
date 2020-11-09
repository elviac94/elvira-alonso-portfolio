import React, { useState } from 'react';
import InitialPage from './Landing';
import Header from './Header';
import Footer from './Footer';
import ProjectsList from './ProjectsList';
import { Switch, Route } from 'react-router-dom';
import projects from '../data/projects.json';
import '../stylesheets/App.scss';
import About from './About';


const App = () => {

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
            data={projects.projects}
          />
        </Route>
        <Route  path='/about'>
          <About onShow={componentShown} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
