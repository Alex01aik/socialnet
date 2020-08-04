import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import { Provider } from 'react-redux';

// let mystore = {
//   dialogs: {
//     dialogsItems: [
//       {id: 1, name: "Alex"},
//       {id: 2, name: "Dmitriy"},
//       {id: 3, name: "Oleg"},
//       {id: 4, name: "Ivan"},
//       {id: 5, name: "Vlad"},
//     ],
//     messages:[
//       {id: 1, text: "Hi"},
//       {id: 2, text: "How are you?"},
//       {id: 3, text: "Yo"},
//     ]
//   }
  
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
