import React from 'react';
import { Routes, Route } from "react-router-dom";
import SideBar from './components/SideBar/SideBar';
import Employees from './components/Employees/Employees';
import Dashboard from './components/Dashboard/Dashboard';
import Teams from './components/Teams/Teams';
import Settings from './components/Settings/Settings';
import Not_Found from './components/Not-Found.jsx/Not_Found';


function App() {

  return (
    <div className="overflow-hidden flex">
    <SideBar/>
    <div className="flex-grow p-4 ml-16 sm:ml-64">
    <Routes>
          <Route exact path="/" element={<Employees />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/teams" element={<Teams/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/not-found" element={<Not_Found/>}/>

        </Routes>
    </div>
    </div>
  )
}

export default App
