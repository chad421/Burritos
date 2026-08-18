import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from the back end, brought to you by an express server!')
})

app.post('/signup', (req, res) => {
    const {email, username, password} = req.body
    console.log("Email: ", email)
    console.log("Username: ", username)
    console.log("Password: ", password)

    res.json({
        message: "User recieved successfully!"
    })
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})