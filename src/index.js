import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

//LINK CONTEXT
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <Router>
    <App />
  </Router>

  
);