import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastrarProduto = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [img, setImg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se os campos estão preenchidos
    if (!nome || !preco) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const novoProduto = {
      nome,
      preco: parseFloat(preco), // Converte o preço para número
      img: img || 'https://via.placeholder.com/150' // Imagem padrão caso não seja inserida
    };

    try {
      const response = await fetch('http://localhost:3001/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoProduto),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar produto');
      }

      alert('Produto cadastrado com sucesso!');
      navigate('/produtos'); // Redireciona para a página de produtos
    } catch (error) {
      console.error('Erro ao cadastrar o produto:', error);
      alert('Falha ao cadastrar o produto.');
    }
  };

  return (
    <div className="cadastrar-produto-container">
      <h1 className="titulo">Cadastrar Produto</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-group">
          <label htmlFor="nome">Nome do Produto:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="preco">Preço:</label>
          <input
            type="number"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="img">URL da Imagem (opcional):</label>
          <input
            type="text"
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-submit">Cadastrar Produto</button>
      </form>

      <style jsx>{`
        *{
          font-family: "Orbitron", sans-serif;
        }

        .cadastrar-produto-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }

        .titulo {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 40px;
        }

        .formulario {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 18px;
          margin-bottom: 8px;
        }

        .form-group input {
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ddd;
        }

        .btn-submit {
          padding: 15px 30px;
          background-color: #00bfa6;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }

        .btn-submit:hover {
          background-color: #008f7a;
        }
      `}</style>
    </div>
  );
};

export default CadastrarProduto;

