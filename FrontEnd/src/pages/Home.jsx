import Header from "../components/Header/Header";
import Slide from "../components/Slide/Slide";
import Destaques from "../components/Destaques/Destaques";
import Footer from "../components/Footer/Footer";

function Home({ user }) {
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

export default Home;