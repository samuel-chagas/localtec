import PropTypes from 'prop-types';
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";

function LoginPage({ setUser, user }) {
  return (
    <>
      <div>
        <Header user={user} />
        <Login setUser={setUser} />
        <Footer />
      </div>
    </>
  );
}

LoginPage.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LoginPage;
