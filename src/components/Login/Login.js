import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div>
                <form> 
                    Email:<br />
                    <input type="text" name="firstname" value="Mickey" />
                    <br/>
                    Password:<br />
                    <input type="text" name="lastname" value="Mouse" />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    };
};