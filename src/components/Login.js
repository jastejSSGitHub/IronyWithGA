import React,{useState} from 'react'
import Footer from './Footer'
import '../styles/components/Login.css'
import {Link} from 'react-router-dom'


function Login() {
    const [signIn, setSignIn]= useState(false);
    

    return (
        <div className="login">
            <div className="login__background">
                <div className="login__gradient"/>
                
            </div>
            {/* onClick={()=> setSignIn(true)} */}
            <div className="login__body">
                    <div className="mirrorContainer">
                        <div className="mirrorContainer__left">
                            <div className="imageContainerLogin">
                                
                            </div>
                        </div>
                        <div className="mirrorContainer__right">
                            <form >
                                <div className="form__text">
                                    <h1>Log in</h1>
                                    <h2>Start Playing.</h2>
                                </div>
                                <input class="form__input" placeholder="Email Address" type="email"/>
                                <input placeholder="Password" type="password"/>

                                
                                <button type="submit">Log in</button>
                                <h3>By clicking on Login, you agree to our Terms of Service and Privacy policy.</h3>
                                <div className="horLine">
                                    <hr/>
                                </div>
                                <Link to="/reset"  className="forgotText">
                                    <h2 >Forgot your password?</h2>
                                </Link>

                                <div className="redirect">
                                    <h2>Don't have an account?</h2>
                                    <Link to="/signUp"  className="redirect__signUp">
                                        <h2>Sign Up</h2>
                                    </Link>
                                </div>



                            </form>
                        </div>

                    </div>
                </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Login
