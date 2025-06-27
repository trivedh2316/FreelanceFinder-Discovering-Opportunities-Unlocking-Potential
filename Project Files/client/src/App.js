

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';


import Admin from './pages/admin/Admin';
import AdminProjects from './pages/admin/AdminProjects';
import AllApplications from './pages/admin/AllApplications';
import AllUsers from './pages/admin/AllUsers';


import Client from './pages/client/Client';
import NewProject from './pages/client/NewProject';
import ProjectApplications from './pages/client/ProjectApplications';
import ProjectWorking from './pages/client/ProjectWorking';


import AllProjects from './pages/freelancer/AllProjects';
import Freelancer from './pages/freelancer/Freelancer';
import MyApplications from './pages/freelancer/MyApplications';
import MyProjects from './pages/freelancer/MyProjects';
import ProjectData from './pages/freelancer/ProjectData';
import WorkingProject from './pages/freelancer/WorkingProject';


import Authenticate from './pages/Authenticate';
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Authenticate />} />
        <Route path="/register" element={<Authenticate />} />

        {}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<AllUsers />} />
        <Route path="/admin/applications" element={<AllApplications />} />
        <Route path="/admin/projects" element={<AdminProjects />} />

        {}
        <Route path="/client" element={<Client />} />
        <Route path="/client/newproject" element={<NewProject />} />
        <Route path="/client/applications" element={<ProjectApplications />} />
        <Route path="/client/working" element={<ProjectWorking />} />

        {}
        <Route path="/freelancer" element={<Freelancer />} />
        <Route path="/freelancer/allprojects" element={<AllProjects />} />
        <Route path="/freelancer/myapplications" element={<MyApplications />} />
        <Route path="/freelancer/myprojects" element={<MyProjects />} />
        <Route path="/freelancer/project/:id" element={<ProjectData />} />
        <Route path="/freelancer/working" element={<WorkingProject />} />
      </Routes>
    </>
  );
}

export default App;
