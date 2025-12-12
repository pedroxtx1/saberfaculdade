'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function MinhaContaPage() {
  // Dados de exemplo - substitua pelos dados reais do seu backend/contexto
  const [userData] = useState({
    nome: 'Estudante Saber+',
    email: 'estudante@saberfaculdade.com',
    dataInicio: '01/12/2024',
    disciplinasEmAndamento: 3,
    videosAssistidos: 6,
    progressoMedio: 67
  });

  const [disciplinas] = useState([
    { 
      id: 'matematica', 
      nome: 'Matemática', 
      emoji: '∑ π',
      progresso: 33,
      videosAssistidos: 1,
      totalVideos: 3
    },
    { 
      id: 'quimica', 
      nome: 'Química', 
      emoji: '⚗️',
      progresso: 67,
      videosAssistidos: 2,
      totalVideos: 3
    },
    { 
      id: 'portugues', 
      nome: 'Português', 
      emoji: 'PT',
      progresso: 100,
      videosAssistidos: 3,
      totalVideos: 3
    }
  ]);

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
            <span className="breadcrumb-current">Minha Conta</span>
          </nav>

          {/* Header do Perfil */}
          <header className="profile-header">
            <div className="header-gradient"></div>
            <div className="profile-content">
              <div className="profile-avatar">
                <span className="avatar-emoji">🎓</span>
              </div>
              <div className="profile-info">
                <h1 className="profile-name">{userData.nome}</h1>
                <p className="profile-email">{userData.email}</p>
                <div className="profile-badges">
                  <span className="badge badge-student">
                    🎓 Estudante Saber+
                  </span>
                  <span className="badge badge-date">
                    📅 Desde {userData.dataInicio}
                  </span>
                </div>
              </div>
              <button className="edit-button">
                <span className="edit-icon">✏️</span>
                Editar Perfil
              </button>
            </div>
          </header>

          {/* Estatísticas */}
          <section className="stats-section">
            <h2 className="section-title">
              <span className="title-icon">📊</span>
              Minhas Estatísticas
            </h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-content">
                  <div className="stat-value">{userData.disciplinasEmAndamento}</div>
                  <div className="stat-label">Disciplinas em Andamento</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📹</div>
                <div className="stat-content">
                  <div className="stat-value">{userData.videosAssistidos}</div>
                  <div className="stat-label">Vídeos Assistidos</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-content">
                  <div className="stat-value">{userData.progressoMedio}%</div>
                  <div className="stat-label">Progresso Médio</div>
                </div>
              </div>
            </div>
          </section>

          {/* Disciplinas em Progresso */}
          <section className="progress-section">
            <h2 className="section-title">
              <span className="title-icon">📚</span>
              Meu Progresso
            </h2>
            <div className="progress-grid">
              {disciplinas.map(disciplina => (
                <Link 
                  key={disciplina.id} 
                  href={`/disciplina/${disciplina.id}`}
                  className="progress-card-link"
                >
                  <article className="progress-card">
                    <div className="progress-header">
                      <div className="progress-emoji">{disciplina.emoji}</div>
                      <h3 className="progress-name">{disciplina.nome}</h3>
                    </div>
                    <div className="progress-stats">
                      <span className="progress-text">
                        {disciplina.videosAssistidos} de {disciplina.totalVideos} aulas
                      </span>
                    </div>
                    <div className="progress-bar-container">
                      <div 
                        className="progress-bar"
                        style={{ width: `${disciplina.progresso}%` }}
                      ></div>
                    </div>
                    <div className="progress-footer">
                      <span className="progress-percentage">
                        {disciplina.progresso}% completo
                      </span>
                      {disciplina.progresso === 100 && (
                        <span className="completed-badge">✅ Concluído</span>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          {/* Seção de Ações */}
          <section className="actions-section">
            <div className="action-card">
              <div className="action-icon">🔍</div>
              <h3 className="action-title">Explorar Novas Disciplinas</h3>
              <p className="action-description">
                Descubra mais conteúdos gratuitos para expandir seus conhecimentos
              </p>
              <Link href="/" className="action-button">
                Ver Todas as Disciplinas
              </Link>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .main {
          min-height: 100vh;
          background: linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%);
          padding: 2rem 0 4rem;
        }

        .container {
          max-width: 1200px;
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
        }

        .breadcrumb-current {
          color: #4b5563;
          font-weight: 600;
        }

        /* Header do Perfil */
        .profile-header {
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

        .profile-content {
          display: flex;
          gap: 2rem;
          align-items: center;
          padding: 2.5rem;
          flex-wrap: wrap;
        }

        .profile-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 24px rgba(79, 70, 229, 0.3);
        }

        .avatar-emoji {
          font-size: 4rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .profile-info {
          flex: 1;
          min-width: 250px;
        }

        .profile-name {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1f2937;
          margin: 0 0 0.5rem 0;
          letter-spacing: -0.02em;
        }

        .profile-email {
          color: #6b7280;
          font-size: 1.1rem;
          margin: 0 0 1rem 0;
        }

        .profile-badges {
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

        .badge-student {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
        }

        .badge-date {
          background: #f3f4f6;
          color: #4b5563;
        }

        .edit-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          background: white;
          border: 2px solid #4f46e5;
          color: #4f46e5;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .edit-button:hover {
          background: #4f46e5;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
        }

        .edit-icon {
          font-size: 1.1rem;
        }

        /* Seções */
        .stats-section,
        .progress-section,
        .actions-section {
          margin-bottom: 3rem;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 2rem;
          font-weight: 800;
          color: #1f2937;
          margin: 0 0 1.5rem 0;
          letter-spacing: -0.02em;
        }

        .title-icon {
          font-size: 2.25rem;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .stat-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          display: flex;
          gap: 1.5rem;
          align-items: center;
          transition: all 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .stat-icon {
          font-size: 3.5rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .stat-content {
          flex: 1;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: #4f46e5;
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          color: #6b7280;
          font-size: 0.95rem;
          font-weight: 600;
        }

        /* Progress Grid */
        .progress-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .progress-card-link {
          text-decoration: none;
          display: block;
        }

        .progress-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 2px solid #f3f4f6;
          transition: all 0.3s;
          cursor: pointer;
        }

        .progress-card:hover {
          border-color: #4f46e5;
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(79, 70, 229, 0.15);
        }

        .progress-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .progress-emoji {
          font-size: 2.5rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .progress-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .progress-stats {
          color: #6b7280;
          font-size: 0.95rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .progress-bar-container {
          width: 100%;
          height: 12px;
          background: #f3f4f6;
          border-radius: 50px;
          overflow: hidden;
          margin-bottom: 0.75rem;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #4f46e5 0%, #06b6d4 100%);
          border-radius: 50px;
          transition: width 0.5s ease;
        }

        .progress-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .progress-percentage {
          font-weight: 700;
          color: #4f46e5;
          font-size: 0.95rem;
        }

        .completed-badge {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Actions Section */
        .action-card {
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
          padding: 3rem;
          border-radius: 24px;
          text-align: center;
          border: 2px solid #f3f4f6;
        }

        .action-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }

        .action-title {
          font-size: 2rem;
          font-weight: 800;
          color: #1f2937;
          margin: 0 0 1rem 0;
        }

        .action-description {
          color: #6b7280;
          font-size: 1.1rem;
          margin: 0 0 2rem 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .action-button {
          display: inline-block;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
        }

        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }

          .profile-content {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1.5rem;
          }

          .profile-avatar {
            width: 100px;
            height: 100px;
          }

          .avatar-emoji {
            font-size: 3rem;
          }

          .profile-name {
            font-size: 2rem;
          }

          .profile-badges {
            justify-content: center;
          }

          .edit-button {
            width: 100%;
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .progress-grid {
            grid-template-columns: 1fr;
          }

          .action-card {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .profile-name {
            font-size: 1.65rem;
          }

          .section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}