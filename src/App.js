import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavMenu from './components/Navigation/NavMenu';
import Profile from './components/Profile/ProfileContainer';
import Dialogs from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <NavMenu />
        <div className="appContent">
          <Route path="/dialogs" render={()=>
            <Dialogs/>}/>
          <Route path="/profile" render={()=>
            <Profile />}/>
          <Route path="/users" render={()=>
            <Users />}/>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
