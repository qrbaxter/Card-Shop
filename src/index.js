import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {ContextProvider} from "./Context"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<ContextProvider>
  <Router>
    <App />
  </Router>
</ContextProvider>

  
);