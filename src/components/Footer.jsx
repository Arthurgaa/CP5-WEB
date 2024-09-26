import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Ícones de redes sociais

const FooterContainer = styled.footer`
font-family: "Orbitron", sans-serif;
  background-color: #111;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
`;

const SocialIcons = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: #00bfa6;
  }
`;

const FooterLink = styled.a`
  color: #bbb;
  text-decoration: none;
  margin: 0 1rem;
  &:hover {
    color: white;
  }
`;

const FooterBottom = styled.div`
  font-size: 0.8rem;
  margin-top: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <IconLink href="https://facebook.com" target="_blank" aria-label="Facebook">
          <FaFacebook />
        </IconLink>
        <IconLink href="https://twitter.com" target="_blank" aria-label="Twitter">
          <FaTwitter />
        </IconLink>
        <IconLink href="https://instagram.com" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </IconLink>
      </SocialIcons>
      <div>
        <FooterLink href="#">Termos de Uso</FooterLink> | <FooterLink href="#">Política de Privacidade</FooterLink> | <FooterLink href="#">Contato</FooterLink>
      </div>
      <FooterBottom>
        © 2024 PowerRide. Todos os direitos reservados.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
