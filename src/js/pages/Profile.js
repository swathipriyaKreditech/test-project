import React from "react";
import LoginPage from './Login';


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                name: localStorage.getItem('username'),
                pwd: localStorage.getItem('password'),
                country: '',
                Birthday: ''
            };


    }

    componentDidMount() {
        if (this.state.name == 'swathi' ) {
            this.setState(
                {country: 'India', Birthday:'Dec 12'});
        }
       else if (this.state.name == 'priya' ) {
            this.setState(
                {country: 'India', Birthday:'Jan 12'});
        }
        if (this.state.name == 'test' ) {
            this.setState(
                {country: 'Italy', Birthday:'Feb 12'});
        }


    }


    render (){

        return (
            <div >
            <h2 className="headerstyles" >Welcome {this.state.name} </h2>
            <table className="profileStyle">
                <tbody className="profilebodyStyle">
                <tr><td>Name :</td>
                    <td>{this.state.name}
                   </td></tr>
                <tr><td>Password :</td>
                    <td>{this.state.pwd}</td></tr>
                <tr><td>Country :</td>
                    <td>{this.state.country}</td></tr>
                <tr><td>Birthday :</td>
                    <td>{this.state.Birthday}</td></tr>
                </tbody>
            </table>
            </div>
    )
    }
}

export default ProfilePage;
