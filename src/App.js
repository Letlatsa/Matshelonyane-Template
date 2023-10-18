import CreateAccount from './pages/CreateAccount';
import ForgotPassword from './pages/ForgotPassword';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import OneTimePin from './pages/OneTimePin';
import Dashboard from './pages/Dashboard';

/*New imports */
import ClientHome from './pages/Home-pages/ClientHome';
import ClientProfile from './pages/Home-pages/ClientProfile';
import ClientTruckerProfile from './pages/Home-pages/ClientTruckerProfile';
import Truckerhome from './pages/Home-pages/TruckerHome';
import TruckerProfileView from './pages/Home-pages/TruckerProfileView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/createaccount" element={<CreateAccount />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/onetimepin" element={<OneTimePin />}></Route>

        {/*New routes*/}
        <Route path="/clienthome" element={<ClientHome />}></Route>
        <Route path="/clientprofile" element={<ClientProfile />}></Route>
        <Route path="/clienttruckerprofile" element={<ClientTruckerProfile />}></Route>
        <Route path="/truckerhome" element={<Truckerhome />}></Route>
        <Route path="/truckerprofileview" element={<TruckerProfileView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
