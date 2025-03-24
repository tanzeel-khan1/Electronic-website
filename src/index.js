// import React from 'react';
// import ReactDOM from 'react-dom'; 
// import './index.css';
// import App from './App';

// import {createStore} from 'redux'
// import  {Provider} from 'react-redux'
// import rootReducer from './Services/Reducers/index'

import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css';
import App from './App';





const root = ReactDOM.createRoot(document.getElementById('root')); // Correct way to create root

root.render(
  <React.StrictMode>
      <App />
    
  </React.StrictMode>
);



