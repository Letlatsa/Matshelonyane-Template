import CustomCard from '../components/CustomCard';
import LoginForm from '../components/forms/LoginForm';
import LogoCard from '../components/Logo';
import '../styles/login.css';

const LoginPage = () => {
  return (
    <div className="Login-container">
      <LogoCard />
      <CustomCard>
        <LoginForm />
      </CustomCard>
    </div>
  );
};

export default LoginPage;
