import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import login from '../../../assets/lotties/login.json'
import SocialLogins from '../../contexts/AuthContext/SocialLogins';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state || '/';
    const readyAxios = useAxios();

    const { signIn, forgetPass } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [email, setEmail] = useState('');

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
                const user = { email: email };
                readyAxios.post('/jwt', user, {
                    withCredentials: true,
                })
                    .then(res => {
                        console.log(res.data);
                    })

                Swal.fire({
                    title: "Login successful!",
                    icon: "success",
                    draggable: false
                });
                navigate(from)
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            })
    }

    const handleForgetPassword = () => {

        if (!email) {
            setError('Please enter your email to reset password.');
            return;
        }

        forgetPass(email)
            .then(() => {
                Swal.fire('Reset link sent!', 'Check your email inbox.', 'success');
            })
            .catch((error) => {
                console.log(error.message);
                Swal.fire({
                    title: "Problem Occurs!",
                    icon: "error",
                });
                setError(error.message);
            });
    };

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
                                <input
                                    name='email'
                                    type="email"
                                    className="input"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div>
                                    <button
                                        type="button"
                                        onClick={handleForgetPassword}
                                        className="link link-hover text-sm mt-2"
                                    >
                                        Forgot password?
                                    </button>
                                </div>
                                <button className="btn btn-neutral mt-4">Log-in</button>
                            </fieldset>
                        </form>
                        <p>Don't you have an account? Please <Link className='font-bold' to='/signup'>Sign up</Link></p>
                        <SocialLogins></SocialLogins>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;