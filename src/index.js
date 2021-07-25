import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from "./Components/ContextProvider";
import reducer, { userDetails } from "./Components/reducer"


ReactDOM.render(
  <React.StrictMode>
    <UserProvider initialState={userDetails} reducer={reducer}>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
