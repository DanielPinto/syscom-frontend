import React, { useState } from 'react';
import axios from 'axios';

import apiLink from '../../Components/Api';

import './style.css';

const Login = () => {

    const apiUrl = apiLink();

    const initialValues = {
        email: '',
        password: ''
    };

    const [form, setForm] = useState(initialValues);

    const onChange = ev => {
        let name = ev.target.name;
        let value = ev.target.value;

        setForm(
            {
                ...form,
                [name]: value
            }
        );
    }

    const onSubmit = ev => {
        ev.preventDefault();

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
          
          axios.post(apiUrl + "/api/login", 
          form,
          {
            headers: headers
          })
            .then((response) => {

              if(response.data.token){
                localStorage.setItem('user', response.data.user);
                localStorage.setItem('token', response.data.token);
                window.location.href = '/';
              }
              
              if(response.message)
                alert(response.message)

              
                
            })
            .catch((error,message) => {
                console.log("ERRO_APP:" + error);
                alert("ERRO_APP:" + error , message);
            });
    }

    return (
        <div className="container">
            <form className="form-signin" onSubmit={onSubmit}>

                <div>
                    <h2>LOGIN</h2>
                </div>

                <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus name="email" onChange={onChange} />
                    <label for="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required name="password" onChange={onChange} />
                    <label for="inputPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted text-center">&copy; 2021</p>
            </form>
        </div>
    );
}

export default Login;