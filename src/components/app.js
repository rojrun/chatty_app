import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Chat from './chat';
import Nav from './nav';
import SetName from './set_name';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/chat" component={Chat}/>
            <Route path="/set-name" component={SetName}/>
        </div>
    </div>
);

export default App;
