<<<<<<< HEAD
import Header from "../components/Header/Header";
=======
import PropTypes from 'prop-types';
>>>>>>> 9590658e6abb814592da6e227a5ebe3a2637a748
import Slide from "../components/Slide/Slide";
import Destaques from "../components/Destaques/Destaques";
import Footer from "../components/Footer/Footer";

function Home({ user }) {
<<<<<<< HEAD
  return (
    <>
      <div>
        <Header user={user} />
        <Slide />
        <Destaques />
        <Footer />
      </div>
    </>
  );
}

=======
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

>>>>>>> 9590658e6abb814592da6e227a5ebe3a2637a748
export default Home;