import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png'; // Caminho para a imagem da logo

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;  /* Fundo branco */
    padding: 0.5rem 1rem;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    font-family: 'Oswald', sans-serif;
`;

const Logo = styled.img`
    height: 50px;  /* Ajustei a altura para 50px, um tamanho intermediário */
    object-fit: contain;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 1rem;
`;

const NavLink = styled(Link)`
    color: #333333;
    text-decoration: none;
    font-size: 0.9rem;
    padding: 0.3rem 0;
    position: relative;

    &:hover {
        color: #00bfa6;
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #00bfa6;
        left: 0;
        bottom: -4px;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: scaleX(1);
    }
`;

const LogoutButton = styled.button`
    background-color: transparent;
    color: #333333;
    border: 1px solid #333333;
    border-radius: 4px;
    padding: 0.3rem 0.8rem;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;

    &:hover {
        background-color: #00bfa6;
        color: #ffffff;
        border-color: #00bfa6;
    }
`;

const Nav = () => {
    return (
        <NavContainer>
            {/* Logo da loja substituindo o texto "PowerRide" */}
            <Link to="/">
                <Logo src={logo} alt="PowerRide Logo" />
            </Link>

            {/* Links de navegação */}
            <NavLinks>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/produtos">Produtos</NavLink>
                <NavLink to="/sobre">Sobre</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/"><LogoutButton>Logout</LogoutButton></NavLink>
            </NavLinks>
        </NavContainer>
    );
}

export default Nav;
