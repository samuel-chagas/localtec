import PropTypes from 'prop-types';
import Slide from "../components/Slide/Slide";
import Destaques from "../components/Destaques/Destaques";
import Footer from "../components/Footer/Footer";

function Home({ user }) {
    return (
        <>
            <div>
                <Slide />
                <Destaques />
                <Footer />
            </div>
        </>
    );
}

Home.propTypes = {
    user: PropTypes.object
};

export default Home;