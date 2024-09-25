const Footer = () => {
    return (
        <footer style={footerStyle}>
            <h5>@2024 - Direitos reservados</h5>
        </footer>
    );
}

const footerStyle = {
    width: '100%',
    height: '100px', // Ajuste a altura conforme necessário
    backgroundColor: '#4d4d4d',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: '0',
    textAlign: 'center',
};

export default Footer;
