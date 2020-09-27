import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'

import Home from './components/Home';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Project from './components/Project';


function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="demo-content">
      <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
          <Header transparent title="Portfolio" style={{color: 'white'}} scroll>
              <Navigation >
                  <Link to="/">ABOUTME</Link>
                  
                  <Link to="/contact" >CONTACT</Link>
                  <Link to="/project" >PROJECTS</Link>
                  <Link to="/resume" >RESUME</Link>
              </Navigation>
          </Header>
          <Drawer title="Portfolio">
              <Navigation >
                  <Link to="/" >ABOUTME</Link>
                  
                  <Link to="/contact" >CONTACT</Link>
                  <Link to="/project" >PROJECTS</Link>
                  <Link to="/resume" >RESUME</Link>
              </Navigation>
          </Drawer>
          <Content >
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Route exact path="/resume" component={Resume}></Route>
              <Route exact path="/project" component={Project}></Route>
              
            </Switch>
          </Content>
          
      </Layout>
  </div>
  </BrowserRouter>
</div>
  );
}

export default App;
