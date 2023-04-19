import logo from './logo.svg';
import './App.css';
import { Front } from './Front';
import { Home } from './Home';
import { Department } from './Department';
import { Employee } from './Employee';
import {BrowserRouter, Route, Routes, NavLink, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        Hospital Management
      </h3>

      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-na'>
          <li className='nav-item- m-1'>
            <NavLink className='btn  btn-light btn-outline-primary' to='/home'>
              Home
            </NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className='btn  btn-light btn-outline-primary' to='/department'>
              Department
            </NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className='btn  btn-light btn-outline-primary' to='/employee'>
              Employee
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Front/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/employee' element={<Employee/>}/>
      </Routes>

      
    </div>



<div>
<Link to='/'>
  <button>Exit</button>
</Link>
</div>


    </BrowserRouter>
  );
}

export default App;
