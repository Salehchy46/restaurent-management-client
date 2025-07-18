import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import login from '../../../assets/lotties/login.json'

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = e => {
        e.preventDefault();

        setError('');
        setSuccess('');

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        signIn(email, password)
            .then(result => {
                console.log(result.user.email);
                setSuccess('Login successful!')
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <Lottie className='w-96' animationData={login}></Lottie>
                    <p className="text-red-600 ml-4 text-center">{error}</p>
                    <p className="text-green-600 ml-4 text-center">{success}</p>
                </div>
                <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold">Log-in now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Log-in</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;