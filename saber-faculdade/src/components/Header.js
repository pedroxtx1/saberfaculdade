'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          <span className="logo-icon">📚</span>
          <span className="logo-text">Saber+</span>
        </Link>

        <nav className="nav">
          <Link 
            href="/" 
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
          >
            Início
          </Link>
          <Link 
            href="/minha-conta" 
            className={`nav-link ${pathname === '/minha-conta' ? 'active' : ''}`}
          >
            👤 Minha Conta
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1rem 0;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .logo-icon {
          font-size: 2rem;
        }

        .nav {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          background: rgba(255,255,255,0.2);
        }

        .nav-link.active {
          background: rgba(255,255,255,0.3);
          font-weight: 700;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 3px;
          background: white;
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .logo-text {
            font-size: 1.25rem;
          }

          .nav {
            gap: 0.5rem;
          }

          .nav-link {
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            flex-direction: column;
            gap: 1rem;
          }

          .nav {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}