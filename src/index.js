import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './Styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = (
    <div>
        <App />
    </div>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
