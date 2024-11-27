import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from "../components/Footer/Footer";
import Agendar from "../components/Agendar/Agendar";
import LoginPrompt from '../components/LoginPrompt/LoginPrompt';

function AgendarPage({ user }) {
  const { id } = useParams();

  if (!user) {
    return (
      <>
        <div>
          <Agendar id={id} />
          <Footer />
        </div>
      </>
    );
  }

  else {
    return <LoginPrompt />;
  }

  
}

AgendarPage.propTypes = {
  user: PropTypes.object
};

export default AgendarPage;



