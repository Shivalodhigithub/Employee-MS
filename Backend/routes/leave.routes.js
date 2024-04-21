const leaveController = require('../controller/leave.controller')
/**
 * I need to intercept this with controller 
 * http://localhost:3000/employeedetails/${_id}/leave
 *  
 */
module.exports=(app)=>{
     
    app.post('/employeedetails/:_id/leave',leaveController.createLeave)
}