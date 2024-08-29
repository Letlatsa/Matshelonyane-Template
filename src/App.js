import { Route, Routes } from 'react-router-dom';

import CreateAccount from './pages/CreateAccount';
import ForgotPassword from './pages/ForgotPassword';
import LoginPage from './pages/LoginPage';
import OneTimePin from './pages/OneTimePin';
import Dashboard from './pages/Dashboard';
import AccountCreated from './pages/onboardingpages/AccountCreated';
import OnboardingLicense from './pages/onboardingpages/OnboardingLicense';
import TruckerOnboardingProfile from './pages/onboardingpages/TruckerOnboardingProfile';
import TruckOnboardingProfile from './pages/onboardingpages/TruckOnboardingProfile';
import TruckProfileComplete from './pages/onboardingpages/TruckProfileComplete';
import ClientOnboardingProfile from './pages/onboardingpages/ClientOnboardingProfile';
import ClientProfileComplete from './pages/onboardingpages/ClientProfileComplete';
import ClientAccountCreated from './pages/onboardingpages/ClientAccountCreated';

/*New imports */
import ClientHome from './pages/Home-pages/ClientHome';
import ClientProfile from './pages/Home-pages/ClientProfile';
import ClientTruckerProfile from './pages/Home-pages/ClientTruckerProfile';
import Truckerhome from './pages/Home-pages/TruckerHome';
import TruckerProfileView from './pages/Home-pages/TruckerProfileView';
import TruckerProposalPage from './pages/Home-pages/TruckerProposalPage';
import ClientOverlay from './pages/Home-pages/ClientOverlay';
import ClientHomeProfile from './pages/Home-pages/ClientEditProfile';
import TruckerHomeProfile from './pages/Home-pages/TruckerEditProfile';
//import TruckerProfile from './pages/Home-pages/TruckerProfileView';
import ClientJobPosting from './components/HomeComponents/Client/ClientJobPosting';
import ClientJobPostingForm from './components/HomeComponents/Client/ClientJobPostingForm';
import JobPosting from './components/HomeComponents/Trucker/JobPosting';
import ClientRequestSummery from './pages/Home-pages/ClientRequestSummery';

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
        <Route path="/clienttruckerprofile/:truckerId" element={<ClientTruckerProfile />} />
        <Route path="/truckerhome" element={<Truckerhome />}></Route>
        <Route path="/truckerprofileview" element={<TruckerProfileView />}></Route>
        <Route path="/clientoverlay" element={<ClientOverlay />}></Route>
        <Route path="/truckerproposalpage/:id" element={<TruckerProposalPage />}></Route>
        <Route path="/clienteditprofile" element={<ClientHomeProfile />}></Route>
        <Route path="/truckereditprofile" element={<TruckerHomeProfile />}></Route>
        <Route path="/jobposting/:truckerId" element={<ClientJobPosting />}></Route>
        <Route path="/jobpost" element={<ClientJobPostingForm />}></Route>
        <Route path="/truckerjobpost" element={<JobPosting />}></Route>
        <Route path="/truckerjobpost" element={<JobPosting />}></Route>
        <Route path="/clientrequestsummery" element={<ClientRequestSummery />}></Route>
      </Routes>
    </div>
  );
}

export default App;
