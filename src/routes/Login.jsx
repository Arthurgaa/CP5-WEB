import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.section`

    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
`;

const LoginContainer = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
`;

const Title = styled.span`
    display: block;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
    font-weight: bold;
`;

const InputWrapper = styled.div`
    margin-bottom: 1rem;
    position: relative;

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
        transition: border-color 0.3s;

        &:focus {
            border-color: #007bff;
            outline: none;
        }
    }

    span {
        position: absolute;
        top: 10px;
        left: 10px;
        color: #aaa;
        transition: 0.3s;
        pointer-events: none;
    }

    input:focus + span,
    input:not(:placeholder-shown) + span {
        top: -10px;
        left: 10px;
        font-size: 0.8rem;
        color: #007bff;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const UteisList = styled.ul`
    margin-top: 1rem;
    list-style: none;
    padding: 0;
    text-align: center;

    li {
        margin: 0.5rem 0;
    }

    a {
        color: #007bff;
        text-decoration: none;
    }
`;

const Login = () => {
    const usuario = useRef();
    const senha = useRef();
    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();

    function validar() {
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].usuario === usuario.current.value &&
                usuarios[i].senha === senha.current.value) {
                return true;
            }
        }
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validar()) {
            const token = Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2);
            sessionStorage.setItem("usuario", usuario.current.value);
            sessionStorage.setItem("senha", token);
            navigate("/dashboard");
        } else {
            alert("Usuário/senha inválidos");
        }
    }

    useEffect(() => {
        fetch("http://localhost:5000/usuarios")
            .then(res => res.json())
            .then(res => setUsuarios(res));
    }, []);

    return (
        <Container>
            <LoginContainer>
                <Title>Faça seu Login</Title>
                <form onSubmit={handleSubmit}>
                    <InputWrapper>
                        <input type="text" id="usuario" ref={usuario} required placeholder=" " />
                        <span>Usuário</span>
                    </InputWrapper>

                    <InputWrapper>
                        <input type="password" id="senha" ref={senha} required placeholder=" " />
                        <span>Senha</span>
                    </InputWrapper>

                    <Button type="submit">Login</Button>

                    <UteisList>
                        <li><span>Esqueceu sua senha?</span></li>
                        <li>
                            <span>Não possui Conta? </span>
                            <a href="#">Criar</a>
                        </li>
                    </UteisList>
                </form>
            </LoginContainer>
        </Container>
    );
}

export default Login;
