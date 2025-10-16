const express =require('express')
const userController=require('../contollers/userController')
const router =express.Router()


//register
router.post('/register',userController.registerController)
module.exports =router 