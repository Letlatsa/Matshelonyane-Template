import CustomCard from '../components/CustomCard';
import LoginForm from '../components/forms/LoginForm';
import '../styles/login.css';

const LoginPage = () => {
  return (
    <div>
      <CustomCard>
        <LoginForm />
      </CustomCard>
    </div>
  );
};

export default LoginPage;
