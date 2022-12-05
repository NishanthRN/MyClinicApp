import { Routes, Route } from 'react-router-dom'
import DashLayout from './components/DashLayout';
// import Layout from './components/Layout';  
import Login from './features/auth/Login';
import Welcome from './components/Welcome'
import AddPatient from './features/patients/AddPatient';
import SearchPatient from './features/patients/SearchPatient';
import ViewDatabase from './features/patients/ViewDatabase';
import Profile from './features/admin/Profile';
import Help from './features/admin/Help';
import Singlept from './features/patients/Singlept';
import Techteam from './features/admin/Techteam';
// import { useState } from 'react';
import EditPatient from './features/patients/EditPatient';


function App() {
  // const [data, setData] = useState();

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      {/* <Route index element={<Login />} /> */}

      <Route path="dash" element={<DashLayout />}>
        <Route index element={<Welcome />} />
      </Route>


      <Route path="addpt" element={<AddPatient />} />
      {/* <Route index element={<AddPatient />} />
        </Route> */}
      <Route path="downloadcsv" >
        <Route index element={<SearchPatient />} />
      </Route>
      <Route path="viewdb">
        <Route index element={<ViewDatabase />} />
      </Route>

      <Route path="profile" element={<Profile />} />

      <Route path="help" element={<Help />} />

      <Route path="tteam" element={<Techteam />} />

      <Route path="indpt/:id" element={<Singlept />} />

      <Route path="addpt/:id" element={<EditPatient />} />
      <Route path="searchpt" element={<SearchPatient />} />


      {/* </Route> */}
      {/* </Route> */}
    </Routes>
  );
}

export default App;
