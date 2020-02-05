import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoryPage from './components/StoryPage/StoryPage'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import DetailsPage from "./components/DetailsPage/DetailsPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from "./components/LogIn"
import Register from "./components/Register/Register"
import {AuthProvider} from "./Auth";
import EventDetails from "./components/EventDetails/EventDetails"
import DonateForm from "./components/DonateForm.js"

const routing=(
    <AuthProvider>
        <Router>
            <div>
                <Route exact path="/stories" component={StoryPage}/>
                <Route exact path="/donateForm" component={DonateForm}/>
                <Route exact path="/login" component={LogIn}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/details/:id" component={DetailsPage}/>
                <Route exact path="/events/:location" component={EventDetails}/>
                <Route exact path="/" component={App}/>
            </div>
        </Router>
    </AuthProvider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
