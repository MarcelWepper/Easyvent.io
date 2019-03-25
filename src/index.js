import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './Components/App';
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";




render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
), document.getElementById('root'));
