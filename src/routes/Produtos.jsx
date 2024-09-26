import React, { useState } from 'react';

const Produtos = () => {
  // Estado inicial com alguns produtos cadastrados
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Produto 1', preco: 100, img: '' },
    { id: 2, nome: 'Produto 2', preco: 200, img: '' },
    { id: 3, nome: 'Produto 3', preco: 300, img: '' }
  ]);

  // Função para adicionar um novo produto
  const cadastrarProduto = () => {
    const novoProduto = {
      id: produtos.length + 1,
      nome: `Produto ${produtos.length + 1}`,
      preco: Math.random() * 1000,
      img: '' // Você pode colocar uma URL de imagem padrão aqui
    };
    setProdutos([...produtos, novoProduto]);
  };

  return (
    <div className="produtos-container">
      <h1 className="titulo">Lista de Produtos</h1>

      <div className="produtos-lista">
        {produtos.map(produto => (
          <div key={produto.id} className="produto-card">
            <div className="produto-img-container">
              <img
                src={produto.img || 'https://via.placeholder.com/150'}
                alt={produto.nome}
                className="produto-img"
              />
            </div>
            <div className="produto-info">
              <h2 className="produto-nome">{produto.nome}</h2>
              <p className="produto-preco">R$ {produto.preco.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="btn-cadastrar" onClick={cadastrarProduto}>
        Cadastrar Produto
      </button>

      <style jsx>{`

        *{
            font-family: "Orbitron", sans-serif;
        }

        .produtos-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .titulo {
          font-size: 32px;
          font-weight: bold;
          color: #333;
          margin-bottom: 40px;
        }

        .produtos-lista {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          justify-items: center; /* Centraliza os itens na grid */
          margin-bottom: 40px;
        }

        .produto-card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          max-width: 300px; /* Define um tamanho máximo para os cards */
        }

        .produto-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .produto-img-container {
          height: 200px;
          background-color: #f4f4f4;
        }

        .produto-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .produto-info {
          padding: 15px;
        }

        .produto-nome {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #333;
        }

        .produto-preco {
          font-size: 16px;
          color: #666;
        }

        .btn-cadastrar {
          padding: 15px 30px;
          background-color: #ffffff;
          color: black;
          border: 2px solid #000000;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn-cadastrar:hover {
          background-color: #00bfa6;
          color: white;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default Produtos;
