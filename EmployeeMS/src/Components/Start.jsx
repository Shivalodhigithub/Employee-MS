import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
const Start = () => {
  const navigate=useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get('http://localhost:3000/auth/verifyuser').then((result) => {
      // console.log(result)
      if(result.data.Status){
        if(result.data.role === 'admin'){
          
          navigate('/dashboard') 
        }
        else{
          navigate('/employeedetails/'+result.data._id)

        }
      }
 
    }).catch((err) => {
      console.log(err)
      
    });

  },[])

  return (
    <>
                <div className=' d-flex justify-content-center vh-100 align-items-center loginPage'>
            {/* <ToastContainer /> */}
                <div className=' p-3  w-25   rounded border loginForm'> <div className=" text-warning ">
                <h2 className=' text-center'>Login As</h2>
                <div className='d-flex justify-content-around align-items-center'>
                    <button className=' btn btn-primary' onClick={()=>{navigate('/employeelogin')}}>Employee</button>
                    <button className=' btn btn-primary' onClick={()=>{navigate('/adminlogin')}}>Admin</button>
                </div>
         
                       
                    </div>
                     
                     
                     
                </div>
            </div>
      
    </>
  )
}

export default Start
