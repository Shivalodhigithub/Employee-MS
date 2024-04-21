const leaveModel=require('../model/leave.model')
exports.createLeave=async(req,res)=>{
    try {
        //read the request body 
        // console.log(req.params._id)
        // console.log("from leave controller")
        const _id=req.params._id
        // console.log(req.body)
        const persent = await leaveModel.findOne({employeeId:_id})
        if(persent){
            return res.json({Status:false,Error:"Your Leave Request already exits"})
        }
        const leaveObj={
            employeeId:_id,
            startDate:req.body.startDate,
            endDate:req.body.endDate,
            reason:req.body.reason   
        }
        // console.log(leaveObj) 
        //and store in db 
        const leaveCreated= await leaveModel.create(leaveObj)

        //and send response to the server 
        return res.json({Status:true,leaveCreated})
    } catch (error) {
        console.log("Internal Error",error)
        return res.Status({Status:false})
    }
}