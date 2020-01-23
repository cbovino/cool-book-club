import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './Components/App.js';


render(
    
    <App />,
    document.getElementById('root'),
)