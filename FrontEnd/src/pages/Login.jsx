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
};

export default LoginPage;
