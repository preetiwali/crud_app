import React from 'react';  
import ReactDOM from 'react-dom';  
import './index.css';  
import * as serviceWorker from './serviceWorker';  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import UserActionApp from './UserCrud/UserAction';  
ReactDOM.render(<UserActionApp />, document.getElementById('root'));  
serviceWorker.unregister();  