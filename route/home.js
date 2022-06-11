const route = require('express').Router()
const homeController = require('../controller/home')

route.get('/', homeController.renderPageHome)

module.exports = route