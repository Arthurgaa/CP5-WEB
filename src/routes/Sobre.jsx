import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animação para o título e subtítulo
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container principal
const SobreContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  color: #333;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

// Título principal
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #00bfa6;
  font-family: "Orbitron", sans-serif;
  animation: ${fadeIn} 1s ease;
`;

// Subtítulo com animação
const Subtitle = styled.h2`
  font-size: 2rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: #00bfa6;
  font-family: "Orbitron", sans-serif;
  animation: ${fadeIn} 1.2s ease;
`;

// Parágrafo estilizado
const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #555;
  font-family: 'Open Sans', sans-serif;
  animation: ${fadeIn} 1.5s ease;
`;

// Lista estilizada
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  animation: ${fadeIn} 1.8s ease;
`;

// Itens da lista com estilo moderno
const ListItem = styled.li`
font-family: "Orbitron", sans-serif;
  font-size: 1rem;
  color: #333;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #00bfa6;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  strong {
    color: #000;
    display: block;
    margin-bottom: 0.5rem;
  }
`;

const Sobre = () => {
  return (
    <SobreContainer>
      <Title>Sobre a PowerRide</Title>
      <Paragraph>
        Na PowerRide, estamos moldando o futuro da mobilidade. Fundada com a missão de transformar o transporte urbano,
        nossa paixão por inovação e sustentabilidade nos impulsiona a oferecer as melhores soluções em veículos elétricos.
        Acreditamos que o futuro é elétrico, e cada veículo que projetamos reflete nosso compromisso com a eficiência,
        desempenho e respeito ao meio ambiente.
      </Paragraph>
      <Paragraph>
        Nosso portfólio de carros elétricos é desenvolvido com tecnologia de ponta, proporcionando uma experiência de
        condução silenciosa, potente e, acima de tudo, sustentável. Além de reduzir as emissões de carbono, nossos
        veículos são projetados para otimizar a autonomia e garantir o máximo conforto e segurança para nossos clientes.
      </Paragraph>
      <Paragraph>
        Somos mais do que uma marca de veículos elétricos. Na PowerRide, buscamos criar uma comunidade de motoristas
        conscientes, que entendem o impacto positivo que podem gerar no mundo ao escolher uma alternativa sustentável.
        Cada PowerRide que chega às ruas é um passo em direção a um futuro mais limpo e mais inteligente.
      </Paragraph>
      <Subtitle>Nosso Compromisso</Subtitle>
      <List>
        <ListItem><strong>Inovação</strong> Tecnologia de ponta para maximizar eficiência e desempenho.</ListItem>
        <ListItem><strong>Sustentabilidade</strong> Reduzir as emissões de carbono e promover o transporte verde.</ListItem>
        <ListItem><strong>Segurança</strong> Garantir o conforto e a proteção em todas as etapas da sua jornada.</ListItem>
        <ListItem><strong>Experiência</strong> Conduzir o futuro com uma experiência única de mobilidade elétrica.</ListItem>
      </List>
      <Paragraph>
        Junte-se a nós e seja parte da revolução elétrica. Descubra o poder do transporte sustentável com a PowerRide.
      </Paragraph>
    </SobreContainer>
  );
};

export default Sobre;
