import React from "react";
import { Link} from "react-router-dom";
import axios from 'axios';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                name: '',
                pwd: '',
                msg: ''
            };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        const target = event.target;
        this.setState(
            {name: target.value});


    }

    handleChangePwd(event) {
        const target = event.target;
        this.setState(
            {pwd: target.value});

    }

    handleSubmit() {
        axios
            .get("/api/login/"+this.state.name)
            .then(res =>{
                if(res.status == '200')
                {
                    localStorage.setItem('username',this.state.name);
                    localStorage.setItem('password',this.state.pwd);
                    this.props.history.push('/Profile');
                }

              })
            .catch(err => {
                this.setState(
                    {msg: 'User not found'});

            })
    }


    render() {
        return ( <form  className="formStyle" onSubmit={this.handleSubmit}>
            <br/>
            <br/>
            <table className="loginStyle">
                <tbody >
                <tr>
                    <td><label>
                        Name:
                    </label></td>
                    <td>
                        <input type="text" value={this.state.name} onChange={this.handleChangeName}/></td>
                </tr>
                <tr>
                    <td>
                        <label>

                            Password:
                        </label>
                    </td>
                    <td>
                        <input type="password" value={this.state.pwd} onChange={this.handleChangePwd}/></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="button" className="submit"  value="Submit" onClick={this.handleSubmit}/>


                    </td>


                </tr>
                <tr>
                </tr>
                <tr>
                    <td></td>
                    <td> <span >{this.state.msg}</span></td>

                </tr>
                </tbody>
            </table>

        </form>
    );
    }

    }
const error = () => (

        <h2>Invalid :) </h2>


);



    export default LoginPage;
