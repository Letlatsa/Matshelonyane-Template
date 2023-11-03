import CreateAccount from './pages/CreateAccount';
import ForgotPassword from './pages/ForgotPassword';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import OneTimePin from './pages/OneTimePin';
import Dashboard from './pages/Dashboard';
import AccountCreated from './components/onboardingpages/AccountCreated';
import OnboardingLicense from './components/onboardingpages/OnboardingLicense';
import TruckerOnboardingProfile from './components/onboardingpages/TruckerOnboardingProfile';
import TruckOnboardingProfile from './components/onboardingpages/TruckOnboardingProfile';
import TruckProfileComplete from './components/onboardingpages/TruckProfileComplete';
import ClientOnboardingProfile from './components/onboardingpages/ClientOnboardingProfile';
import ClientProfileComplete from './components/onboardingpages/ClientProfileComplete';
import ClientAccountCreated from './components/onboardingpages/ClientAccountCreated';

/*New imports */
import ClientHome from './pages/Home-pages/ClientHome';
import ClientProfile from './pages/Home-pages/ClientProfile';
import ClientTruckerProfile from './pages/Home-pages/ClientTruckerProfile';
import Truckerhome from './pages/Home-pages/TruckerHome';
import TruckerProfileView from './pages/Home-pages/TruckerProfileView';
import TruckerProposalPage from './pages/Home-pages/TruckerProposalPage';
import MenuOverlay from './components/HomeComponents/MenuOverlay';
import ClientOverlay from './pages/Home-pages/ClientOverlay';
import ClientHomeProfile from './pages/Home-pages/ClientHomeProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/createaccount" element={<CreateAccount />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/onetimepin" element={<OneTimePin />}></Route>
        <Route path="/accountcreated" element={<AccountCreated />}></Route>
        <Route path="/clientaccountcreated" element={<ClientAccountCreated />}></Route>
        <Route path="/truckeronboardingprofile" element={<TruckerOnboardingProfile />}></Route>
        <Route path="/truckonboardingprofile" element={<TruckOnboardingProfile />}></Route>
        <Route path="/onboardinglicense" element={<OnboardingLicense />}></Route>
        <Route path="/truckprofilecomplete" element={<TruckProfileComplete />}></Route>
        <Route path="/clientonboardingprofile" element={<ClientOnboardingProfile />}></Route>
        <Route path="/clientprofilecomplete" element={<ClientProfileComplete />}></Route>
        {/*New routes*/}
        <Route path="/clienthome" element={<ClientHome />}></Route>
        <Route path="/clientprofile" element={<ClientProfile />}></Route>
        <Route path="/clienttruckerprofile" element={<ClientTruckerProfile />}></Route>
        <Route path="/truckerhome" element={<Truckerhome />}></Route>
        <Route path="/truckerprofileview" element={<TruckerProfileView />}></Route>
        <Route path="/overlay" element={<MenuOverlay />}></Route>
        <Route path="/clientoverlay" element={<ClientOverlay />}></Route>
        <Route path="/truckerproposalpage" element={<TruckerProposalPage />}></Route>
        <Route path='clienteditprofile' element={<ClientHomeProfile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
