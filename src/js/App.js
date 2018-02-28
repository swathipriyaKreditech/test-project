import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import './styles.scss';
class App extends React.Component {
    constructor(props) {
        super(props);
        const partial={};
    }
    render() {

        return <Router>
            <div>
                <div className="topnav">
                    <Link  to="/Home">Home</Link>
                    <Link  to="/login">Login</Link>
                    <Link to="/news">News</Link>

                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>


                </div>
                <h1>Welcome</h1>
                <div>
                    <Route exact path="/Home" component={Home}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/profile" component={ProfilePage}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/about" component={About}/>
                </div>
            </div>
        </Router>;
    }
}
const Home = () => (
    <div className="profileStyle">
        <h2>Good Day :) </h2>

    </div>
);
const News = () => (
    <div className="profileStyle">
        <h2>News </h2>

    </div>
);
const Contact = () => (
    <div className="profileStyle">
        <h2>Contact Details </h2>

    </div>
);
const About = () => (
    <div className="profileStyle">
        <h2>About Us </h2>

    </div>
);
export default App;
