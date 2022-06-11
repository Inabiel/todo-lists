const Express = require('express')
const layout = require('express-ejs-layouts')
const authRouter = require('./route/auth')
const homeRouter = require('./route/home')
const session = require('cookie-session')
const flashMessage = require('express-flash')

const app = Express()

app.use(session({
    name: "cookie-sess",
    keys: ["key-for-session"],
    path: '/',
    maxAge: 1000 * 60 * 60 * 24 * 7
}))
app.use(flashMessage()) //dipakai agar express bisa menggunakan flash message

app.use(Express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(layout)

app.use('/auth', authRouter)
app.use('/home', homeRouter)

app.listen(5002, () => {
    console.log('app berjalan pada port 5002')
})