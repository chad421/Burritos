export default function () {
    return(
        <section id="login-form">
            <input
                type="text"
                id="username"
                placeholder="youremail@here.com"
            />
            <input
                type="password"
                id="passwprd"
                placeholder="Enter Password"
            />
            <button type="submit">Submit</button>
            <button type="reset" onClick="console.log('working')">Reset</button>
        </section>
    )
}