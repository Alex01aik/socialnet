import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavMenu from './components/Navigation/NavMenu';
import Profile from './components/Profile/Profile';
// import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <NavMenu />
        <div className="appContent">
          {/* <Route path="/dialogs" render={()=>
            <Dialogs
              dialogsItems={props.mystore.dialogs.dialogsItems}
              messages={props.mystore.dialogs.messages}/>}/> */}
          <Route path="/profile" render={()=>
            <Profile />}/>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
