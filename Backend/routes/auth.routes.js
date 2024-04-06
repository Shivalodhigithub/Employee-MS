/**
 * I need to intercept this http://localhost:3000/auth/adminlogin
 */
const authController=require('../controller/auth.controller')
module.exports=(app)=>{
    app.post('/auth/adminlogin' , authController.signIn)
}