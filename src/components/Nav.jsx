import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/logo.png'; // Caminho para a imagem da logo

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Oswald', sans-serif;
`;

const Logo = styled.img`
    height: 50px;
    object-fit: contain;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 2rem;  /* Espaçamento entre os links */
    justify-content: center;
    flex: 1;  /* Faz os links ocuparem o centro */
`;

const NavLink = styled(Link)`
    color: #333333;
    text-decoration: none;
    font-size: 1.1rem;
    padding: 0.5rem 0.7rem;
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
        bottom: -6px;
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
    border: 2px solid #333333;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1.1rem;
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
            {/* Logo no lado esquerdo */}
            <Link to="/">
                <Logo src={logo} alt="PowerRide Logo" />
            </Link>

            {/* Links de navegação centralizados */}
            <NavLinks>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/produtos">Produtos</NavLink>
                <NavLink to="/sobre">Sobre</NavLink>
                <NavLink to="/login">Login</NavLink>
            </NavLinks>

            {/* Botão de logout no lado direito */}
            <NavLink to="/"><LogoutButton>Logout</LogoutButton></NavLink>
        </NavContainer>
    );
}

export default Nav;
