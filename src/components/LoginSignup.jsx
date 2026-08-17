import "./LoginSignup.css"
import emailIcon from "/src/assets/images/mail.png"
import usernameIcon from "/src/assets/images/user.png"
import passwordIcon from "/src/assets/images/padlock.png"

function LoginSignup () {
    return(
        <>
            <h2>Welcome, sign up below</h2>
            <div className="form-container">
                <div className="email-container">
                    <img 
                        src={emailIcon} 
                        className="input-icon" 
                        alt="Mail icon" 
                    />
                    <input type="email" placeholder="john.smith@example.com" />
                </div>
                <div className="name-container">
                    <img 
                        src={usernameIcon} 
                        className="input-icon" 
                        alt="User icon" 
                    />
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                </div>
                <div className="password-container">
                    <img
                        src={passwordIcon} 
                        className="input-icon" 
                        alt="Padlock icon" 
                    />
                    <input type="password" placeholder="password"/>
                </div>
                <div className="submit-container">
                    <div className="forgotPassword"><span>Forgot Password</span></div>
                    <div className="signUp"><span>Sign Up</span></div>
                    <div className="logIn"><span>Log In</span></div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default LoginSignup