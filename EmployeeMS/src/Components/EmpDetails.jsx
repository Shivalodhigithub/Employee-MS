import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const EmpDetails = () => {
    const {_id}=useParams();
    const [emp,SetEmp]=useState([])
    console.log(_id)
    useEffect(()=>{
        axios.get('http://localhost:3000/auth/employee/'+_id).then((result) => {
            console.log(result)
            SetEmp(result.data.empdata)
        }).catch((err) => {
            console.log(err)
            
        });

    },[])
  return (
    <>
      <h1>Employee Details</h1>
    </>
  )
}

export default EmpDetails
