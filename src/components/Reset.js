import React from 'react'
import '../styles/components/SignUp.css'
import '../styles/components/Login.css'
import '../styles/components/Reset.css'

import {Link} from 'react-router-dom'
import Footer from './Footer'

function reset() {
    return (
        <div className="reset">
            <div className="login__background">
                <div className="login__gradient"/>
                
            </div>
            {/* onClick={()=> setSignIn(true)} */}
            <div className="login__body">
                    {/* {signIn?(<SignupPage/>): } */}
                    <div className="mirrorContainer">
                        <div className="mirrorContainer__left">
                            <div className="imageContainerReset">
                                
                            </div>
                        </div>
                        <div className="mirrorContainer__right">
                            <form >
                                <div className="form__text">
                                    <h1>Forgot your password?</h1>
                                    <h2>Enter email address. We'll send you instructions to reset password.</h2>
                                </div>
                               
                                <input class="form__input" placeholder="Email Address" type="email"/>
                                

                                <button type="submit">Send</button>
                                <div className="horLine">
                                    <hr/>
                                </div>
                              

                                <div className="redirect">
                                    <h2>Remember password?</h2>
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

export default reset
