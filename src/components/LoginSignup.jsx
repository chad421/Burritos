import {useState} from "react"
import "./LoginSignup.css"
import emailIcon from "/src/assets/images/mail.png"
import usernameIcon from "/src/assets/images/user.png"
import passwordIcon from "/src/assets/images/padlock.png"

function LoginSignup () {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitting", email, firstName, lastName, password);
    }
    
    function handleReset(e) {
        setEmail("")
        setFirstName("")
        setLastName("")
        setPassword("")
    }
    return(
        <>
            <h2>Welcome, sign up below</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="email-container">
                    <img 
                        src={emailIcon} 
                        className="input-icon" 
                        alt="Mail icon" 
                    />
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john.smith@example.com" 
                    />
                </div>
                <div className="name-container">
                    <img 
                        src={usernameIcon} 
                        className="input-icon" 
                        alt="User icon" 
                    />
                    <input 
                        type="text"
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                    />
                    <input 
                        type="text" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                    />
                </div>
                <div className="password-container">
                    <img
                        src={passwordIcon} 
                        className="input-icon" 
                        alt="Padlock icon" 
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                    />
                </div>
                <div className="submit-container">
                    <button type="submit" className="signUp">Sign Up</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                </div>
            </form>
            <hr />
        </>
    )
}

export default LoginSignup