import React from 'react'
import '../styles/components/SignUp.css'
import '../styles/components/Login.css'
import {Link} from 'react-router-dom'
import Footer from './Footer'


function SignUp() {
    return (
        <div className="signUp">
            <div className="login__background">
                <div className="login__gradient"/>
                
            </div>
            {/* onClick={()=> setSignIn(true)} */}
            <div className="login__body">
                    {/* {signIn?(<SignupPage/>): } */}
                    <div className="mirrorContainer">
                        <div className="mirrorContainer__left">
                            <div className="imageContainerSignUp">
                                
                            </div>
                        </div>
                        <div className="mirrorContainer__right">
                            <form >
                                <div className="form__text">
                                    <h1>Sign Up</h1>
                                    <h2>Start Playing.</h2>
                                </div>
                                <input class="form__input" placeholder="User Name" type="email"/>
                                <input class="form__input" placeholder="First Name" type="email"/>
                                <input class="form__input" placeholder="Last Name" type="email"/>
                                <input class="form__input" placeholder="Email Address" type="email"/>
                                <input placeholder="Password" type="password"/>
                                <input placeholder="Date of Birth MM/DD/YY" type="password"/>
                                <input placeholder="Phone Number" type="password"/>

                                <button type="submit">Sign Up</button>
                                <h3>By clicking on SignUp, you agree to our Terms of Service and Privacy policy.</h3>
                                <div className="horLine">
                                    <hr/>
                                </div>
                              

                                <div className="redirect">
                                    <h2>Already have an account?</h2>
                                    <Link  to="/Login" className="redirect__signUp">
                                        <h2>Log In</h2>
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

export default SignUp
