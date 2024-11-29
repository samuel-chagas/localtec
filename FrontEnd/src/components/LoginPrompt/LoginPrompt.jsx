import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './LoginPrompt.css';

function LoginPrompt({ user }) {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        if (!user) {
            navigate('/Login');
        }
    };

    return (
        <div className="login-prompt">
            <h2>Você precisa estar logado para acessar esta página</h2>
            <p>Por favor, faça login para continuar.</p>
            <button onClick={handleLoginClick}>Login</button>
        </div>
    );
}

LoginPrompt.propTypes = {
    user: PropTypes.object,
};

export default LoginPrompt;