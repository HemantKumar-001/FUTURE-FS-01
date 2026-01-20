import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/contact';
import ProjectsForm from './pages/ProjectsForm';
import Login from './pages/login';
import ProtectedRoutes from './ProtectedRoutes';

const App = () => {
  return (
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route element={<ProtectedRoutes />}>
          <Route path='/projectAddingForm' element={<ProjectsForm/>}/>
          </Route>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
  )
}

export default App
