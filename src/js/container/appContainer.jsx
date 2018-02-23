import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../index.css';


const AppContainer = () => (
    <Router>
        <div>
            <h1>
                Welcome
            </h1>
            <ul>

                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>

            <Route path="/login" component={login} />
            <Route path="/profile" component={Profile} />

        </div>
    </Router>
);


const Profile = () => (
    <div>
        <h2>User Details</h2>
        <Link to="/HomePage">Back</Link>
    </div>
);

const login = () => (
    <div>
        <h3>User ID</h3>
        <h4>PWD</h4>
        <Link to="/HomePage">Back</Link>
    </div>
);

class HomePage extends React.Component{
    render(){
        return (

            <h1>Welcome to HomePage</h1>
    );
    }
}

export default AppContainer;
