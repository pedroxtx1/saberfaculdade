'use client';

import Link from 'next/link';

export default function DisciplinaCard({ disciplina }) {
  return (
    <Link href={`/disciplina/${disciplina.id}`} className="card-link">
      <div className="card" style={{ borderTopColor: disciplina.cor }}>
        <div className="card-emoji">{disciplina.emoji}</div>
        <h3 className="card-title">{disciplina.nome}</h3>
        <p className="card-description">{disciplina.descricao}</p>
        
        <div className="card-footer">
          <span className="badge">📺 Aulas em Vídeo</span>
          <span className="badge">🎯 grátis+</span>
        </div>

        <div className="card-hover-overlay">
          <span className="hover-text">Ver Conteúdo →</span>
        </div>
      </div>

      <style jsx>{`
        .card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: all 0.4s ease;
          border-top: 5px solid;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }

        .card-emoji {
          font-size: 3rem;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .card:hover .card-emoji {
          transform: scale(1.2) rotate(10deg);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #333;
        }

        .card-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .card-footer {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .badge {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .card-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card:hover .card-hover-overlay {
          opacity: 1;
        }

        .hover-text {
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }

        .card:hover .hover-text {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .card {
            padding: 1.5rem;
          }

          .card-emoji {
            font-size: 2.5rem;
          }

          .card-title {
            font-size: 1.25rem;
          }

          .card-description {
            font-size: 0.9rem;
          }

          .badge {
            font-size: 0.75rem;
            padding: 0.3rem 0.6rem;
          }
        }
      `}</style>
    </Link>
  );
}