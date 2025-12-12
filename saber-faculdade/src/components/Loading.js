export default function Loading({ message = 'Carregando...' }) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">{message}</p>
      
      <style jsx>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          gap: 1rem;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-top-color: #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .loading-text {
          color: #666;
          font-size: 1rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .spinner {
            width: 40px;
            height: 40px;
          }
          
          .loading-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}