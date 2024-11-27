<<<<<<< HEAD
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
=======
import PropTypes from "prop-types";
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";

function LoginPage({ setUser }) {
    return (
        <>
            <div>
                <Login setUser={setUser} />
                <Footer />
            </div>
        </>
    );
}

LoginPage.propTypes = {
    setUser: PropTypes.func.isRequired,
>>>>>>> 9590658e6abb814592da6e227a5ebe3a2637a748
};

export default LoginPage;
