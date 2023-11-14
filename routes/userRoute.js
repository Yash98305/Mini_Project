const express = require('express')
const router = express.Router()
const pages = require('../controllers/userController.js')

router.route('/login').post(pages.userLoginController)
router.route('/register').post(pages.userRegisterController)

module.exports = router