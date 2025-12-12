'use client';

import { useDisciplinas } from '@/hooks/useDisciplinas';
import Header from '@/components/Header';
import DisciplinaCard from '@/components/DisciplinaCard';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';

export default function Home() {
  const { data: disciplinas, loading, error } = useDisciplinas();

  const destaques = disciplinas.filter(d => d.categoria === 'destaque');
  const adicionais = disciplinas.filter(d => d.categoria === 'adicional');

  return (
    <>
      <Header />
      
      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-background"></div>
          <div className="container hero-content">
            <div className="hero-badge">✨ Educação Gratuita</div>
            <h1 className="hero-title">
              Bem-vindo ao <span className="highlight">Saber+</span>
            </h1>
            <p className="hero-subtitle">
              Sua plataforma completa de estudos com aulas gratuitas em vídeo
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">{disciplinas.length}+</div>
                <div className="stat-label">Disciplinas</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Grátis</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">HD</div>
                <div className="stat-label">Qualidade</div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          {loading && (
            <div className="loading-wrapper">
              <Loading message="Carregando disciplinas..." />
            </div>
          )}
          
          {error && (
            <div className="error-wrapper">
              <ErrorMessage message={error} />
            </div>
          )}

          {!loading && !error && (
            <>
              {/* Destaques Section */}
              <section className="section">
                <div className="section-header">
                  <div className="section-icon">📌</div>
                  <div>
                    <h2 className="section-title">Destaques</h2>
                    <p className="section-description">As disciplinas mais populares</p>
                  </div>
                </div>
                <div className="cards-grid">
                  {destaques.map(disciplina => (
                    <DisciplinaCard 
                      key={disciplina.id} 
                      disciplina={disciplina} 
                    />
                  ))}
                </div>
              </section>

              {/* Veja Também Section */}
              <section className="section">
                <div className="section-header">
                  <div className="section-icon">🎓</div>
                  <div>
                    <h2 className="section-title">Veja Também</h2>
                    <p className="section-description">Explore mais conteúdos</p>
                  </div>
                </div>
                <div className="cards-grid">
                  {adicionais.map(disciplina => (
                    <DisciplinaCard 
                      key={disciplina.id} 
                      disciplina={disciplina} 
                    />
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>📚 Saber+</h3>
              <p>Educação de qualidade e gratuita para todos</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Plataforma</h4>
                <a href="#sobre">Sobre</a>
                <a href="#disciplinas">Disciplinas</a>
                <a href="#contato">Contato</a>
              </div>
              <div className="footer-column">
                <h4>Suporte</h4>
                <a href="#ajuda">Ajuda</a>
                <a href="#faq">FAQ</a>
                <a href="#feedback">Feedback</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Saber+ | Todos os direitos reservados</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .main {
          min-height: 100vh;
          background: linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%);
        }

        /* Hero Section */
        .hero {
          position: relative;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%);
          color: white;
          padding: 6rem 0 5rem;
          margin-bottom: 4rem;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          animation: fadeInUp 0.8s ease-out;
        }

        .highlight {
          background: linear-gradient(135deg, #fff 0%, #f0f9ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
        }

        .hero-subtitle {
          font-size: 1.35rem;
          opacity: 0.95;
          max-width: 700px;
          margin: 0 auto 3rem;
          line-height: 1.6;
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: rgba(255, 255, 255, 0.3);
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Section */
        .section {
          margin-bottom: 4rem;
        }

        .section-header {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .section-icon {
          font-size: 3rem;
          line-height: 1;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .section-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 0.25rem;
          letter-spacing: -0.02em;
        }

        .section-description {
          color: #6b7280;
          font-size: 1rem;
        }

        /* Cards Grid */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        /* Loading & Error */
        .loading-wrapper,
        .error-wrapper {
          padding: 4rem 0;
        }

        /* Footer */
        .footer {
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          color: white;
          margin-top: 6rem;
          padding: 3rem 0 1.5rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 1.5rem;
        }

        .footer-brand h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .footer-brand p {
          color: #9ca3af;
          font-size: 0.95rem;
        }

        .footer-links {
          display: flex;
          gap: 3rem;
        }

        .footer-column h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #fff;
        }

        .footer-column a {
          display: block;
          color: #9ca3af;
          text-decoration: none;
          margin-bottom: 0.75rem;
          transition: color 0.3s;
          font-size: 0.9rem;
        }

        .footer-column a:hover {
          color: #06b6d4;
        }

        .footer-bottom {
          text-align: center;
        }

        .footer-bottom p {
          color: #6b7280;
          font-size: 0.9rem;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.75rem;
          }

          .cards-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }

          .footer-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 4rem 0 3rem;
          }

          .hero-title {
            font-size: 2.25rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .section-icon {
            font-size: 2.5rem;
          }

          .cards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .container {
            padding: 0 1rem;
          }

          .footer-links {
            flex-direction: column;
            gap: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 3rem 0 2rem;
          }

          .hero-title {
            font-size: 1.85rem;
          }

          .hero-stats {
            gap: 1rem;
          }

          .stat-divider {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
