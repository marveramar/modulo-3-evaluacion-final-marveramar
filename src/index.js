import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';
import './stylesheet/App.css'
import App from './components/App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root'));



