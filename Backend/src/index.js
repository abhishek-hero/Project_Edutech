const express = require("express");
const cors = require('cors')
const cookieParser = require('cookie-parser')

const userController = require('./controllers/userController')
const { register, login, verify, refresh, logout } = require('./controllers/authController')

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(cookieParser())
app.use(express.json())

// app.use('/users', userController)

app.post('/register', register)
app.post('/login', login)
app.post('/verify', verify)
app.post('/refresh', refresh)
app.get('/logout', logout)

module.exports = app