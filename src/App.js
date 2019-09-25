import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <div className='App'> 
          <Header />
          <Nav />
          <Route path='/main' component={Main} />
          <Route path='/dialogs' component={Dialogs} />
      </div> 
    </BrowserRouter>
  );
}

export default App;