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
        <Route path="/truckeronboardingprofile" element={<TruckerOnboardingProfile />}></Route>
        <Route path="/truckonboardingprofile" element={<TruckOnboardingProfile />}></Route>
        <Route path="/onboardinglicense" element={<OnboardingLicense />}></Route>
        <Route path="/truckprofilecomplete" element={<TruckProfileComplete />}></Route>
        <Route path="/clientonboardingprofile" element={<ClientOnboardingProfile />}></Route>
        <Route path="/clientprofilecomplete" element={<ClientProfileComplete />}></Route>
      </Routes>
    </div>
  );
}

export default App;
