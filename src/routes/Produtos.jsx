import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Produtos = () => {
  // Produtos principais hardcoded
  const produtosPrincipais = [
    { id: 1, nome: 'Volvo EX30', preco: 229.950, img: '/volvoex30.avif' },
    { id: 2, nome: 'Baojun Cloud', preco: 65.700, img: '/baojun-cloud.jpg' },
    { id: 3, nome: 'BYD Dolphin', preco: 99.800, img: '/BYD-Dolphin.webp' },
  ];

  const [produtosAdicionais, setProdutosAdicionais] = useState([]);

  useEffect(() => {
    // Carregar produtos adicionais do JSON Server
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:3001/produtos');
        const data = await response.json();
        setProdutosAdicionais(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  const handleDelete = async (id) => {
    // Função para excluir um produto
    const confirmacao = window.confirm('Você tem certeza que deseja excluir este produto?');
    if (!confirmacao) return;

    try {
      const response = await fetch(`http://localhost:3001/produtos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Atualiza a lista de produtos removendo o produto deletado
        setProdutosAdicionais(produtosAdicionais.filter(produto => produto.id !== id));
        alert('Produto excluído com sucesso!');
      } else {
        throw new Error('Erro ao excluir o produto.');
      }
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
      alert('Falha ao excluir o produto.');
    }
  };

  return (
    <div className="produtos-container">
      <h1 className="titulo">Lista de Produtos</h1>

      <div className="produtos-lista">
        {/* Exibir os produtos principais */}
        {produtosPrincipais.map((produto) => (
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
              <p className="produto-preco">R$ {produto.preco.toFixed(3)}</p>
            </div>
          </div>
        ))}

        {/* Exibir os produtos adicionais cadastrados */}
        {produtosAdicionais.map((produto) => (
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
              <button className="btn-excluir" onClick={() => handleDelete(produto.id)}>
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>

      <Link to="/cadastrarproduto">
        <button className="btn-cadastrar">Cadastrar Produto</button>
      </Link>

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
          justify-items: center;
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
          max-width: 300px;
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
          background-color: transparent;
          color: #333333;
          border: 2px solid #333333;
          border-radius: 4px;
          padding: 0.5rem 1rem;
          cursor: pointer;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .btn-cadastrar:hover {
          background-color: #00bfa6;
          color: #ffffff;
          border-color: #00bfa6;
        }

        .btn-excluir {
          padding: 10px 20px;
          background-color: #ff4d4f;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }

        .btn-excluir:hover {
          background-color: #ff0000;
        }
      `}</style>
    </div>
  );
};

export default Produtos;



