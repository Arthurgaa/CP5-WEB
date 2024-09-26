import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                <p>Siga-nos nas redes sociais</p>
                <div style={iconStyle}>
                    <FaFacebook size={30} style={{ margin: '0 10px' }} />
                    <FaInstagram size={30} style={{ margin: '0 10px' }} />
                    <FaLinkedin size={30} style={{ margin: '0 10px' }} />
                </div>
                <p>Email: contato@lojadecarroseletricos.com</p>
                <h5>@2024 - Direitos reservados</h5>
            </div>
        </footer>
    );
};

const footerStyle = {
    width: '100%',
    height: '150px', // Aumentei a altura para acomodar melhor os elementos
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: '0',
    textAlign: 'center',
};

const footerContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const iconStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0',
};

export default Footer;

