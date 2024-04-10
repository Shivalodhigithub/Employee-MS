import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Empolyee = () => {
  const [emp,SetEmp]=useState([])
  const navigate=useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:3000/auth/empolyee').then((result) => {
      console.log(result)
      if(result.data.Status){
        SetEmp(result.data.empdata)
      }
      else{
        toast.warning("did'nt access")
      }
      
    }).catch((err) => {
      console.log('Internal server error',err)
      toast.error(err,{autoClose:3000})
    });

  },[])

  const deleteEmp=(_id)=>{
 
    axios.delete('http://localhost:3000/auth/employee/'+_id).then((result) => {
      // console.log(result)
      if(result.data.Status){
        window.location.reload() //reload on current page
        // navigate('/dashboard/employee')
      }
      else{
        toast.warning("didn't deleted")
      }
      
    }).catch((err) => {
      console.log(err)
    });
  }
  return (
    <>
      <div className="px-5 mt-3">
        <ToastContainer />
        <div className=' d-flex justify-content-center align-items-center'>
          <h3 className=''>Employee List</h3>
        </div>
        <Link to='/dashboard/add_employee' className=' btn btn-success my-4'>Add Empolyee</Link>
        <div className="row">
          <div className="col">
          <table class="table  table-bordered table-responsive table-light table-hover border-primary ">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Email</th>
      <th scope="col">Salary</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {emp.map((val,ind)=>{
    return (
      <>
        <tr key={ind}>
          <th>{ind+1}</th>
          <td>{val.name}</td>
          <td className=' d-flex justify-content-center align-items-center'><img src={"http://localhost:3000/Images/"+val.img}  alt="" className=' img-fluid' style={{width:'40px', height:'40px',borderRadius:'50%'}} /></td>
          <td>{val.email}</td>
          <td>{val.salary}</td>
          <td>{val.address}</td>
          <td >
            <Link to={`/dashboard/edit_employee/`+val._id} className='btn btn-sm btn-success mx-1   '>Update</Link>
            <Link className=' btn btn-sm btn-danger mx-1  ' onClick={()=>deleteEmp(val._id)}>Delete</Link>
          </td>
        </tr>
      </>
    )
  })}
     
  </tbody>
</table>

          </div>
        </div>
        </div>
    </>
  )
}

export default Empolyee
