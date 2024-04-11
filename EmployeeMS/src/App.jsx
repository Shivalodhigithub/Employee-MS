
import './App.css'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import Home from './Components/Home'
import Empolyee from './Components/Empolyee'
import Category from './Components/Category'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import Start from './Components/Start'
import EmpLogin from './Components/EmpLogin'
import EmpDetails from './Components/EmpDetails'
import PrivateRoute from './Components/PrivateRoute'
 
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min';
//  
function App() {
     
  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Start/>}></Route>
        <Route path='/adminlogin' element={<Login/>}></Route>
        <Route path='/employeelogin' element={<EmpLogin/>}></Route>
        <Route path='/employeedetails/:_id' element={<EmpDetails/>}></Route>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='/dashboard/employee' element={<Empolyee/>}></Route>
        <Route path='/dashboard/category' element={<Category/>}></Route>
        <Route path='/dashboard/profile' element={<Profile/>}></Route>
        <Route path='/dashboard/add_category' element={<AddCategory/>}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee/>}></Route>
        <Route path='/dashboard/edit_employee/:_id' element={<EditEmployee/>} ></Route>
         
        </Route>
    
      </Routes>
    </BrowserRouter>
    {/* <Dashboard/> */}
       
    </>
  )
}

export default App
