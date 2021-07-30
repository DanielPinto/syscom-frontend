import {React} from 'react';

const Register = () => {
    return(
        <div className="container">
        <form className="form-signin">

            <div>
                <h2>REGISTER</h2>
            </div>

            <div className="form-label-group">
                <input type="text" id="inputName" className="form-control" placeholder="User Name" required autofocus />
                <label for="inputName">Name</label>
            </div>

            <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputEmail">Email address</label>
            </div>

            <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <label for="inputPassword">Password</label>
            </div>

            <div className="form-label-group">
                <input type="password" id="inputPasswordValidate" className="form-control" placeholder="Password Validate" required />
                <label for="inputPasswordValidate">Password Validate</label>
            </div>

            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            <p className="mt-5 mb-3 text-muted text-center">&copy; 2021</p>
        </form>
    </div>
    );
}

export default Register;