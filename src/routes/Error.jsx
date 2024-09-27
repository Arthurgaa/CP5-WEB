import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: #f4f4f4; /* Cor de fundo neutra */
    color: #333;
    font-family: 'Oswald', sans-serif;
`;

const ErrorCode = styled.h1`
    font-size: 10rem;
    color: #515151; /* Cor de destaque para o código de erro */
    margin: 0;
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
`;

const ErrorMessage = styled.h2`
    font-size: 2.5rem;
    color: #ff4d4f; /* Cor vibrante para a mensagem de erro */
    margin-bottom: 20px;
    text-align: center;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
`;

const ErrorDescription = styled.p`
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 40px;
    text-align: center;
    max-width: 600px;
    line-height: 1.5;
`;

const BackButton = styled.button`
    padding: 15px 30px;
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


const Error = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <ErrorPageContainer>
            <ErrorCode>404</ErrorCode>
            <ErrorMessage>Página não encontrada</ErrorMessage>
            <ErrorDescription>
                Parece que a página que você está procurando não existe. Talvez tenha sido removida ou o endereço esteja incorreto.
            </ErrorDescription>
            <BackButton onClick={handleGoBack}>Voltar para a página inicial</BackButton>
        </ErrorPageContainer>
    );
};

export default Error;
