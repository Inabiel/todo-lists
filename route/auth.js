const route = require('express').Router()
const authController = require('../controller/auth')

route.get('/daftar/', authController.renderPageDaftar)
route.get('/masuk', authController.renderPageMasuk)
route.post('/daftar', authController.handleSignUp)

module.exports = route