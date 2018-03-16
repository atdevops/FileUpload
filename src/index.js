import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
<Routes>
    <App/>
</Routes> , document.getElementById('root'));
registerServiceWorker();
