import CreateAccount from './pages/CreateAccount';
import ForgotPassword from './pages/ForgotPassword';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import OneTimePin from './pages/OneTimePin';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/createaccount" element={<CreateAccount />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/onetimepin" element={<OneTimePin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
