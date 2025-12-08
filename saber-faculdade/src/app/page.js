'use client';

import { useState } from 'react';

export default function SaberPlus() {
  const [busca, setBusca] = useState('');
  const [telaAtual, setTelaAtual] = useState('home'); // 'home' ou nome da matéria
  const [materiaAtual, setMateriaAtual] = useState(null);

  // Dados das matérias com vídeos e livros
  const materias = {
    'Matemática': {
      cor: 'linear-gradient(135deg, #1a4d0f, #2d5016)',
      icone: '∑ π',
      videos: [
        { titulo: 'Conjuntos numéricos', imagem: '🔢' },
        { titulo: 'Função', imagem: '📊' },
        { titulo: 'Geometria Plana', imagem: '📐' }
      ],
      livros: [
        { titulo: 'Funções Matemática', capa: '📘' },
        { titulo: 'Conjuntos Numéricos', capa: '📗' },
        { titulo: 'Matemática Ensino Médio', capa: '📕' },
        { titulo: 'Geometria Plana', capa: '📙' },
        { titulo: 'Funções - Teoria', capa: '📔' },
        { titulo: 'Geometria Espacial', capa: '📓' },
        { titulo: 'Conjuntos Avançados', capa: '📒' },
        { titulo: 'Funções Compostas', capa: '📖' }
      ]
    },
    'Química': {
      cor: 'linear-gradient(135deg, #ff8c1a, #ffaa44)',
      icone: '⚗️',
      videos: [
        { titulo: 'Tabela Periódica', imagem: '🧪' },
        { titulo: 'Reações Químicas', imagem: '⚗️' },
        { titulo: 'Química Orgânica', imagem: '🔬' }
      ],
      livros: [
        { titulo: 'Química Geral', capa: '📘' },
        { titulo: 'Química Orgânica', capa: '📗' },
        { titulo: 'Reações Químicas', capa: '📕' },
        { titulo: 'Tabela Periódica', capa: '📙' }
      ]
    },
    'Português': {
      cor: 'linear-gradient(135deg, #003366, #0052a3)',
      icone: 'PT',
      videos: [
        { titulo: 'Gramática', imagem: '📝' },
        { titulo: 'Literatura', imagem: '📚' },
        { titulo: 'Redação', imagem: '✍️' }
      ],
      livros: [
        { titulo: 'Gramática Completa', capa: '📘' },
        { titulo: 'Literatura Brasileira', capa: '📗' },
        { titulo: 'Redação ENEM', capa: '📕' }
      ]
    },
    'Artes': {
      cor: 'linear-gradient(135deg, #6b8e6f, #87a988)',
      icone: '🎨',
      videos: [
        { titulo: 'História da Arte', imagem: '🖼️' },
        { titulo: 'Teoria das Cores', imagem: '🎨' }
      ],
      livros: [
        { titulo: 'História da Arte', capa: '📘' },
        { titulo: 'Artes Visuais', capa: '📗' }
      ]
    },
    'Inglês': {
      cor: 'white',
      icone: '🇬🇧',
      videos: [
        { titulo: 'Gramática Inglesa', imagem: '📖' },
        { titulo: 'Vocabulário', imagem: '📚' }
      ],
      livros: [
        { titulo: 'English Grammar', capa: '📘' },
        { titulo: 'Vocabulary Builder', capa: '📗' }
      ]
    },
    'Educação Física': {
      cor: 'linear-gradient(135deg, #002855, #003d7a)',
      icone: '⛹️',
      videos: [
        { titulo: 'Esportes Coletivos', imagem: '⚽' },
        { titulo: 'Nutrição Esportiva', imagem: '🥗' }
      ],
      livros: [
        { titulo: 'Educação Física', capa: '📘' },
        { titulo: 'Nutrição', capa: '📗' }
      ]
    },
    'Biologia': {
      cor: 'linear-gradient(135deg, #4a7c2a, #6b9d3f)',
      icone: '🧬',
      videos: [
        { titulo: 'Citologia', imagem: '🔬' },
        { titulo: 'Ecologia', imagem: '🌍' }
      ],
      livros: [
        { titulo: 'Biologia Celular', capa: '📘' },
        { titulo: 'Ecossistemas', capa: '📗' }
      ]
    }
  };

  function abrirMateria(nome) {
    setMateriaAtual(nome);
    setTelaAtual('materia');
  }

  function voltarHome() {
    setTelaAtual('home');
    setMateriaAtual(null);
  }

  function buscar() {
    if (busca) {
      alert('Buscando: ' + busca);
    }
  }

  // TELA DA MATÉRIA (como a imagem que você mostrou)
  if (telaAtual === 'materia' && materiaAtual) {
    const materia = materias[materiaAtual];
    
    return (
      <div>
        <style jsx global>{`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #fafafa;
          }
          .cabecalho-materia {
            background-color: white;
            padding: 20px 40px;
            display: flex;
            align-items: center;
            gap: 20px;
            border-bottom: 1px solid #ddd;
          }
          .botao-voltar {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #0066cc;
          }
          .logo-pequeno {
            font-size: 20px;
            font-weight: bold;
            color: #0066cc;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .titulo-materia {
            font-size: 28px;
            font-weight: bold;
            color: #0066cc;
            margin-left: auto;
          }
          .conteudo-materia {
            padding: 40px;
          }
          .secao {
            margin-bottom: 40px;
          }
          .titulo-secao {
            font-size: 24px;
            color: #0066cc;
            margin-bottom: 20px;
          }
          .grade-videos {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
          }
          .card-video {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: all 0.3s;
          }
          .card-video:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
          }
          .thumbnail-video {
            height: 150px;
            background: ${materia.cor};
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 60px;
          }
          .info-video {
            padding: 15px;
          }
          .titulo-video {
            font-size: 16px;
            font-weight: bold;
            color: #333;
          }
          .grade-livros {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 20px;
          }
          .card-livro {
            background: white;
            border-radius: 10px;
            padding: 15px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: all 0.3s;
          }
          .card-livro:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
          }
          .capa-livro {
            font-size: 60px;
            margin-bottom: 10px;
          }
          .titulo-livro {
            font-size: 12px;
            color: #333;
            font-weight: bold;
          }
          .botao-ver-mais {
            background: white;
            border: 2px solid #0066cc;
            color: #0066cc;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            margin-top: 10px;
          }
          .botao-ver-mais:hover {
            background: #0066cc;
            color: white;
          }
          .setas-navegacao {
            display: flex;
            gap: 10px;
            margin-top: 20px;
          }
          .seta {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: white;
            border: 2px solid #0066cc;
            color: #0066cc;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
          }
          .seta:hover {
            background: #0066cc;
            color: white;
          }
        `}</style>

        <div className="cabecalho-materia">
          <button className="botao-voltar" onClick={voltarHome}>
            ← 
          </button>
          <div className="logo-pequeno">
            📚 Saber+
          </div>
          <div className="titulo-materia">
            {materiaAtual}
          </div>
        </div>

        <div className="conteudo-materia">
          {/* Seção de Vídeos */}
          <div className="secao">
            <div className="grade-videos">
              {materia.videos.map((video, index) => (
                <div key={index} className="card-video" onClick={() => alert('Abrindo: ' + video.titulo)}>
                  <div className="thumbnail-video">
                    {video.imagem}
                  </div>
                  <div className="info-video">
                    <div className="titulo-video">{video.titulo}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seção de Livros */}
          <div className="secao">
            <h3 className="titulo-secao">Por Dentro Do Assunto...</h3>
            <div className="grade-livros">
              {materia.livros.map((livro, index) => (
                <div key={index} className="card-livro" onClick={() => alert('Abrindo: ' + livro.titulo)}>
                  <div className="capa-livro">{livro.capa}</div>
                  <div className="titulo-livro">Ver mais...</div>
                </div>
              ))}
            </div>
            <div className="setas-navegacao">
              <div className="seta">←</div>
              <div className="seta">→</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // TELA HOME (página inicial com todos os cards)
  return (
    <div>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #fafafa;
        }
        .cabecalho {
          background-color: white;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          gap: 20px;
          border-bottom: 1px solid #ddd;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .logo {
          font-size: 28px;
          font-weight: bold;
          color: #0066cc;
          display: flex;
          align-items: center;
        }
        .icone-logo {
          display: inline-block;
          background: linear-gradient(135deg, #0066cc, #004999);
          padding: 10px;
          border-radius: 8px;
          margin-right: 10px;
        }
        .caixa-busca {
          flex: 1;
          max-width: 500px;
        }
        .caixa-busca input {
          width: 100%;
          padding: 12px 20px;
          border: 1px solid #ddd;
          border-radius: 25px;
          font-size: 14px;
          box-sizing: border-box;
        }
        .caixa-busca input:focus {
          outline: none;
          border-color: #0066cc;
        }
        .usuario {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #0066cc;
          font-weight: 500;
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 20px;
          transition: all 0.3s;
        }
        .usuario:hover {
          background-color: #f0f7ff;
        }
        .icone-usuario {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #0066cc, #004999);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
        }
        .conteudo {
          padding: 40px;
        }
        .titulo {
          font-size: 32px;
          color: #0066cc;
          margin-bottom: 20px;
        }
        .grade {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }
        .cartao {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: all 0.3s;
        }
        .cartao:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        }
        .imagem-cartao {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 60px;
          color: white;
        }
        .matematica { background: linear-gradient(135deg, #1a4d0f, #2d5016); }
        .quimica { background: linear-gradient(135deg, #ff8c1a, #ffaa44); }
        .portugues { background: linear-gradient(135deg, #003366, #0052a3); }
        .artes { background: linear-gradient(135deg, #6b8e6f, #87a988); }
        .ingles { 
          background: white; 
          border-bottom: 2px solid #f0f0f0;
          flex-direction: column;
          gap: 10px;
        }
        .educacao { background: linear-gradient(135deg, #002855, #003d7a); }
        .biologia { background: linear-gradient(135deg, #4a7c2a, #6b9d3f); }
        .corpo-cartao {
          padding: 20px;
        }
        .titulo-cartao {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .descricao {
          color: #666;
          font-size: 14px;
          margin-bottom: 15px;
          line-height: 1.5;
        }
        .rodape-cartao {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 10px;
          border-top: 1px solid #f0f0f0;
          font-size: 12px;
        }
        .botao-adicionar {
          background: white;
          border: 2px solid #0066cc;
          color: #0066cc;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
          transition: all 0.3s;
        }
        .botao-adicionar:hover {
          background: #0066cc;
          color: white;
        }
      `}</style>
      
      <div className="cabecalho">
        <div className="logo">
          <span className="icone-logo">📚</span>
          Saber+
        </div>
        <div className="caixa-busca">
          <input 
            type="text" 
            placeholder="O que está procurando?"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && buscar()}
          />
        </div>
        <div className="usuario">
          <div className="icone-usuario">👤</div>
          <span>Minha Conta</span>
        </div>
      </div>

      <div className="conteudo">
        <h2 className="titulo">Destaques..</h2>
        <div className="grade">
          
          <div className="cartao" onClick={() => abrirMateria('Matemática')}>
            <div className="imagem-cartao matematica">
              ∑ π
            </div>
            <div className="corpo-cartao">
              <h3 className="titulo-cartao">Matemática</h3>
              <p className="descricao">Explore conceitos e práticas na sua jornada com da aritmética até cálculo nas suas aulas...</p>
              <div className="rodape-cartao">
                <span>📺 Aulas em Vídeo | 🎯 grátis</span>
                <button className="botao-adicionar">+</button>
              </div>
            </div>
          </div>

          <div className="cartao" onClick={() => abrirMateria('Química')}>
            <div className="imagem-cartao quimica">
              ⚗️
            </div>
            <div className="corpo-cartao">
              <h3 className="titulo-cartao">Química</h3>
              <p className="descricao">Explore dos elementos naturais e sintéticas nas suas composições...</p>
              <div className="rodape-cartao">
                <span>📺 Aulas em Vídeo | 🎯 grátis</span>
                <button className="botao-adicionar">+</button>
              </div>
            </div>
          </div>

          <div className="cartao" onClick={() => abrirMateria('Português')}>
            <div className="imagem-cartao portugues">
              PT
            </div>
            <div className="corpo-cartao">
              <h3 className="titulo-cartao">Português</h3>
              <p className="descricao">Interpretação de textos para uso escrito e oral, enriquecendo e...</p>
              <div className="rodape-cartao">
                <span>📺 Aulas em Vídeo | 🎯 grátis</span>
                <button className="botao-adicionar">+</button>
              </div>
            </div>
          </div>

        </div>

        <h2 className="titulo">Veja Também..</h2>
        <div className="grade">
          
          <div className="cartao" onClick={() => abrirMateria('Artes')}>
            <div className="imagem-cartao artes">
              🎨
            </div>
            <div className="corpo-cartao">
              <h3 className="titulo-cartao">Artes</h3>
              <p className="descricao">Explore diversas atividades sobre teoria das cores, composição, perspectiva e...</p>
              <div className="rodape-cartao">
                <span>📺 Aulas em Vídeo | 🎯 grátis</span>
                <button className="botao-adicionar">+</button>
              </div>
            </div>
          </div>

          <div className="cartao" onClick={() => abrirMateria('Inglês')}>
            <div className="imagem-cartao ingles">
              <div>🇬🇧</div>
              <div style={{color: '#333', fontSize: '20px'}}>❤️ ENGLISH</div>
            </div>
            <div className="corpo-cartao">
              <h3 className="titulo-cartao">Inglês</h3>
              <p className="descricao">Aprenda gramática, vocabulário, e leitura. Tudo o que você precisa para dominar...</p>
              <div className="rodape-cartao">
                <span>📺 Aulas em Vídeo | 🎯 grátis</span>
                <button className="botao-adicionar">+</button>
              </div>
            </div>
          </div>

          <div className="cartao" onClick={() => abrirMateria('Educação Física')}>
            <div className="imagem-cartao educacao">
              ⛹️
            </div>
            <div className="corpo-cartao">
              <h3 className="titulo-cartao">Educação Física</h3>
              <p className="descricao">Teoria e prática em esportes, nutrição e importância da atividade física...</p>
              <div className="rodape-cartao">
                <span>📺 Aulas em Vídeo | 🎯 grátis</span>
                <button className="botao-adicionar">+</button>
              </div>
            </div>
          </div>

          <div className="cartao" onClick={() => abrirMateria('Biologia')}>
            <div className="imagem-cartao biologia">
              🧬 🌍
            </div>
            <div className="corpo-cartao">
              <h3 className="titulo-cartao">Biologia</h3>
              <p className="descricao">Estude sobre a vida de seres vivos da estrutura da célula até ecossistemas...</p>
              <div className="rodape-cartao">
                <span>📺 Aulas em Vídeo | 🎯 grátis</span>
                <button className="botao-adicionar">+</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}