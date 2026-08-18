import {useState} from "react"
import "./LoginSignup.css"
import emailIcon from "/src/assets/images/mail.png"
import usernameIcon from "/src/assets/images/user.png"
import passwordIcon from "/src/assets/images/padlock.png"

function LoginSignup () {
    // Collects data from input fields and stores it into these variables
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // When form is submitted this function is called
    async function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            email: email,
            username: email,
            password: password
        }

        try {
            const request = await fetch('http://localhost:3001/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })

            console.log(`Success sending user data!`)
        } catch (error) {
            console.log(`Error submitting user data:${error}`)
        }
        //console.log("submitting", email, username, password);
    }
    
    // When the reset button is pressed, all input fields are cleared
    function handleReset(e) {
        setEmail("")
        setUsername("")
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
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
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