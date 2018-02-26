import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import './index.css';
class App extends React.Component {

    render() {

        return (

            <Router>
                <div>
            <div className="topnav">
                <Link className="active" to="/login">Login</Link>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>

            </div>
                <div>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/profile" component={ProfilePage}/>
</div>
                </div>
            </Router>

        );
    }
}
export default App;
