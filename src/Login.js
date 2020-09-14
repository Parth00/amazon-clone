import React, { useState } from 'react'
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
<<<<<<< HEAD
import { auth } from "./firebase";
import { store } from 'react-notifications-component';
=======
import { auth } from "./firebase"
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
<<<<<<< HEAD
                store.addNotification({
                    title: "Success!",
                    message: "Login successful!",
                    type: "success",
                    insert: "top",
                    container: "bottom-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 4000,
                        onScreen: true
                    }
                });
                history.push('/')
            })
            .catch(error => {
                setEmail('');
                setPassword('');
                store.addNotification({
                    title: "Error!",
                    message: error.message,
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 4000,
                        onScreen: true
                    }
                })
            });
=======
                console.log(auth);
                history.push('/')
            })
            .catch(error => alert(error.message))
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // successfully created a new user with email and password
                if (auth) {
<<<<<<< HEAD
                    setEmail('');
                    setPassword('');
                    store.addNotification({
                        title: "Registration successful",
                        message: "Please login to continue",
                        type: "success",
                        insert: "top",
                        container: "top-center",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                            duration: 4000,
                            onScreen: true
                        }
                    });
                    history.push('/login')
                }
            })
            .catch(error => {
                setEmail('');
                setPassword('');
                store.addNotification({
                    title: "Error!",
                    message: error.message,
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 4000,
                        onScreen: true
                    }
                })
            });
=======
                    history.push('/login')
                }
            })
            .catch(error => alert(error.message))
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""
                />
<<<<<<< HEAD
                {/* <img
                    className="login__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""
                /> */}
=======
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn}
                        className="login__signInButton"> Sign in</button>

                    <p className="login__agreement">
                        By sigining-in you agree to AMAZON FAKE CLONE conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.
                    </p>

                    <button onClick={register}
                        className="login__registerButton"> Create your Amazon Account </button>
<<<<<<< HEAD

                    <button onClick={e => { history.push('/') }}
                        className="login__registerButton"> Continue using guest </button>
=======
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49
                </form>
            </div>
        </div>
    )
}

export default Login
