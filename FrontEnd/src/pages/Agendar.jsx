import { useParams } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Agendar from "../components/Agendar/Agendar";

function AgendarPage() {
  const { id } = useParams();

  return (
    <>
      <div>
        <Header />
        <Agendar id={id} />
        <Footer />
      </div>
    </>
  );
}

export default AgendarPage;