'use client';

import { use } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useDisciplina } from '@/hooks/useDisciplinas';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';

export default function DisciplinaPage({ params }) {
  const unwrappedParams = use(Promise.resolve(params));
  const { data: disciplina, loading, error } = useDisciplina(unwrappedParams.id);
  const [videoAtual, setVideoAtual] = useState(0);

  if (loading) {
    return (
      <>
        <Header />
        <main className="loading-container">
          <Loading message="Carregando conteúdo..." />
        </main>
        <style jsx>{`
          .loading-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%);
          }
        `}</style>
      </>
    );
  }

  if (error || !disciplina) {
    return (
      <>
        <Header />
        <main className="error-container">
          <div className="error-content">
            <ErrorMessage message={error || 'Disciplina não encontrada'} />
            <Link href="/" className="back-button">
              ← Voltar para o início
            </Link>
          </div>
        </main>
        <style jsx>{`
          .error-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            background: linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%);
          }
          .error-content {
            text-align: center;
            max-width: 600px;
          }
          .back-button {
            display: inline-block;
            margin-top: 2rem;
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            color: white;
            padding: 1rem 2rem;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
          }
          .back-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="main">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link href="/" className="breadcrumb-link">
              <span className="breadcrumb-icon">🏠</span>
              Início
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">{disciplina.nome}</span>
          </nav>

          {/* Header da Disciplina */}
          <header className="disciplina-header">
            <div className="header-gradient"></div>
            <div className="header-content">
              <div className="header-emoji">{disciplina.emoji}</div>
              <div className="header-text">
                <h1 className="disciplina-title">{disciplina.nome}</h1>
                <p className="disciplina-description">{disciplina.descricao}</p>
                <div className="header-badges">
                  <span className="badge badge-videos">
                    📹 {disciplina.videos.length} aulas
                  </span>
                  <span className="badge badge-free">
                    ✨ 100% Grátis
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div className="content-layout">
            {/* Coluna Principal - Vídeo */}
            <div className="main-column">
              <section className="video-section">
                <div className="video-wrapper">
                  <iframe
                    src={disciplina.videos[videoAtual].url}
                    title={disciplina.videos[videoAtual].titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-player"
                  ></iframe>
                </div>
                
                <div className="video-info">
                  <div className="video-details">
                    <h2 className="video-title">
                      {disciplina.videos[videoAtual].titulo}
                    </h2>
                    <div className="video-meta">
                      <span className="video-number">
                        Aula {videoAtual + 1} de {disciplina.videos.length}
                      </span>
                      <span className="video-duration">
                        ⏱️ {disciplina.videos[videoAtual].duracao}
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tópicos Abordados */}
              <section className="topicos-section">
                <h3 className="section-title">
                  <span className="title-icon">📝</span>
                  Tópicos Abordados
                </h3>
                <div className="topicos-grid">
                  {disciplina.topicos.map((topico, index) => (
                    <div key={index} className="topico-card">
                      <span className="topico-icon">✓</span>
                      <span className="topico-text">{topico}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar - Playlist */}
            <aside className="sidebar">
              <div className="playlist-section">
                <div className="playlist-header">
                  <h3 className="playlist-title">
                    📚 Playlist de Aulas
                  </h3>
                  <span className="playlist-count">
                    {disciplina.videos.length} vídeos
                  </span>
                </div>
                
                <div className="playlist">
                  {disciplina.videos.map((video, index) => (
                    <button
                      key={video.id}
                      onClick={() => setVideoAtual(index)}
                      className={`playlist-item ${videoAtual === index ? 'active' : ''}`}
                    >
                      <div className="playlist-thumbnail">
                        <span className="playlist-number">{index + 1}</span>
                        {videoAtual === index && (
                          <span className="playing-pulse"></span>
                        )}
                      </div>
                      <div className="playlist-content">
                        <span className="playlist-item-title">{video.titulo}</span>
                        <span className="playlist-item-duration">
                          ⏱️ {video.duracao}
                        </span>
                      </div>
                      {videoAtual === index && (
                        <span className="playing-indicator">▶️</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <style jsx>{`
        .main {
          min-height: 100vh;
          background: linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%);
          padding: 2rem 0 4rem;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }

        /* Breadcrumb */
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          font-size: 0.95rem;
          flex-wrap: wrap;
        }

        .breadcrumb-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #4f46e5;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
        }

        .breadcrumb-link:hover {
          background: rgba(79, 70, 229, 0.1);
          color: #7c3aed;
        }

        .breadcrumb-icon {
          font-size: 1.1rem;
        }

        .breadcrumb-separator {
          color: #9ca3af;
          font-weight: 300;
        }

        .breadcrumb-current {
          color: #4b5563;
          font-weight: 600;
        }

        /* Header da Disciplina */
        .disciplina-header {
          position: relative;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .header-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%);
        }

        .header-content {
          display: flex;
          gap: 2rem;
          align-items: center;
          padding: 2.5rem;
        }

        .header-emoji {
          font-size: 5rem;
          line-height: 1;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
          flex-shrink: 0;
        }

        .header-text {
          flex: 1;
          min-width: 0;
        }

        .disciplina-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1f2937;
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.02em;
        }

        .disciplina-description {
          color: #4b5563;
          font-size: 1.1rem;
          line-height: 1.7;
          margin: 0 0 1.5rem 0;
        }

        .header-badges {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .badge {
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .badge-videos {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
        }

        .badge-free {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
        }

        /* Layout de Conteúdo */
        .content-layout {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 2rem;
          align-items: start;
        }

        /* Coluna Principal */
        .main-column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          min-width: 0;
        }

        /* Video Section */
        .video-section {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          background: #000;
        }

        .video-player {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .video-info {
          padding: 2rem;
        }

        .video-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .video-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
          line-height: 1.3;
        }

        .video-meta {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .video-number {
          color: #6b7280;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .video-duration {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        /* Tópicos Section */
        .topicos-section {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.75rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 1.5rem 0;
        }

        .title-icon {
          font-size: 2rem;
        }

        .topicos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }

        .topico-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
          border-radius: 16px;
          border: 2px solid #f3f4f6;
          transition: all 0.3s;
        }

        .topico-card:hover {
          border-color: #4f46e5;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.15);
        }

        .topico-icon {
          color: #10b981;
          font-weight: 700;
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .topico-text {
          font-weight: 600;
          color: #1f2937;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        /* Sidebar - Playlist */
        .sidebar {
          position: sticky;
          top: 2rem;
          max-height: calc(100vh - 4rem);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .playlist-section {
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          max-height: 100%;
        }

        .playlist-header {
          padding: 1.5rem;
          border-bottom: 2px solid #f3f4f6;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%);
          flex-shrink: 0;
        }

        .playlist-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 0.25rem 0;
        }

        .playlist-count {
          color: #6b7280;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .playlist {
          overflow-y: auto;
          flex: 1;
          padding: 0.75rem;
        }

        .playlist::-webkit-scrollbar {
          width: 6px;
        }

        .playlist::-webkit-scrollbar-track {
          background: transparent;
        }

        .playlist::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 3px;
        }

        .playlist::-webkit-scrollbar-thumb:hover {
          background: #d1d5db;
        }

        .playlist-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border: 2px solid transparent;
          border-radius: 12px;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          width: 100%;
          margin-bottom: 0.5rem;
        }

        .playlist-item:hover {
          background: rgba(79, 70, 229, 0.05);
          border-color: rgba(79, 70, 229, 0.2);
        }

        .playlist-item.active {
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%);
          border-color: #4f46e5;
        }

        .playlist-thumbnail {
          position: relative;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          border-radius: 10px;
          flex-shrink: 0;
        }

        .playlist-number {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          z-index: 1;
          position: relative;
        }

        .playing-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 10px;
          animation: pulse 1.5s ease-in-out infinite;
          opacity: 0.3;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }

        .playlist-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          min-width: 0;
        }

        .playlist-item-title {
          font-weight: 600;
          color: #1f2937;
          font-size: 0.95rem;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .playlist-item-duration {
          font-size: 0.8rem;
          color: #6b7280;
          font-weight: 500;
        }

        .playing-indicator {
          font-size: 1.25rem;
          animation: blink 1s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .content-layout {
            grid-template-columns: 1fr;
          }

          .sidebar {
            position: static;
            max-height: 600px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }

          .main {
            padding: 1.5rem 0 3rem;
          }

          .breadcrumb {
            margin-bottom: 1.5rem;
            font-size: 0.9rem;
          }

          .disciplina-header {
            border-radius: 16px;
          }

          .header-content {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1.5rem;
            gap: 1.5rem;
          }

          .header-emoji {
            font-size: 4rem;
          }

          .disciplina-title {
            font-size: 2rem;
          }

          .disciplina-description {
            font-size: 1rem;
          }

          .header-badges {
            justify-content: center;
          }

          .video-section,
          .playlist-section,
          .topicos-section {
            border-radius: 16px;
          }

          .video-info {
            padding: 1.5rem;
          }

          .video-title {
            font-size: 1.35rem;
          }

          .topicos-section {
            padding: 1.5rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .topicos-grid {
            grid-template-columns: 1fr;
          }

          .sidebar {
            max-height: 500px;
          }
        }

        @media (max-width: 480px) {
          .main {
            padding: 1rem 0 2rem;
          }

          .container {
            padding: 0 0.75rem;
          }

          .breadcrumb {
            font-size: 0.85rem;
            gap: 0.5rem;
          }

          .header-content {
            padding: 1.5rem 1rem;
          }

          .header-emoji {
            font-size: 3rem;
          }

          .disciplina-title {
            font-size: 1.65rem;
          }

          .disciplina-description {
            font-size: 0.95rem;
          }

          .header-badges {
            flex-direction: column;
            width: 100%;
            gap: 0.75rem;
          }

          .badge {
            width: 100%;
            justify-content: center;
          }

          .video-info {
            padding: 1.25rem;
          }

          .video-title {
            font-size: 1.2rem;
          }

          .video-meta {
            gap: 1rem;
          }

          .topicos-section {
            padding: 1.25rem;
          }

          .section-title {
            font-size: 1.35rem;
          }

          .topico-card {
            padding: 1rem;
          }

          .playlist-header {
            padding: 1.25rem;
          }

          .playlist-item {
            padding: 0.875rem;
            gap: 0.875rem;
          }

          .playlist-thumbnail {
            width: 40px;
            height: 40px;
          }

          .playlist-number {
            font-size: 1rem;
          }

          .playlist-item-title {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}