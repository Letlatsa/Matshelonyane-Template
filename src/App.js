import CreateAccount from './pages/CreateAccount';
import ForgotPassword from './pages/ForgotPassword';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import OneTimePin from './pages/OneTimePin';
import Dashboard from './pages/Dashboard';
import AccountCreated from './components/onboardingpages/AccountCreated';
import TruckerOnboardingProfile from './components/onboardingpages/TruckerOnboardingProfile';

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
      </Routes>
    </div>
  );
}

export default App;
