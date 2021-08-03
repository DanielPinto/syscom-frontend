import React, { useState } from 'react';
import axios from 'axios';

import './style.css';

const Login = () => {

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

          console.log(form);
          
          axios.post("http://localhost:8000/api/login", 
          form,
          {
            headers: headers
          })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
                console.log("ERRO_APP:" + error);
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