import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import HeroSection from './components/HeroSection'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Home/>  
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
