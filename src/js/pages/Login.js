import React from "react";
import { Link} from "react-router-dom";
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                name: '',
                pwd: ''
            };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        const target = event.target;
        this.setState(
            {name: target.value});
        localStorage.setItem('username',target.value)

    }

    handleChangePwd(event) {
        const target = event.target;
        this.setState(
            {pwd: target.value});
        localStorage.setItem('password',target.value)
    }

    handleSubmit(event) {

        event.preventDefault();
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <br/>
                <br/>
                <table className="loginStyle">
                    <tbody className="tableStyle">
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

                                Passwords:
                            </label>
                        </td>
                        <td>
                            <input type="text" value={this.state.pwd} onChange={this.handleChangePwd}/></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>

                            <Link className="submit" to="/Profile" onChange={this.handleSubmit}>Submit</Link>

                        </td>
                    </tr>

                    </tbody>
                </table>
            </form>
        );
    }
}


export default LoginPage;
