export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h3 className="error-title">Ops! Algo deu errado</h3>
      <p className="error-message">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="retry-button">
          🔄 Tentar novamente
        </button>
      )}
      
      <style jsx>{`
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          padding: 2rem;
          text-align: center;
          background: #fff3cd;
          border: 2px solid #ffc107;
          border-radius: 12px;
          margin: 2rem auto;
          max-width: 500px;
        }

        .error-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .error-title {
          color: #856404;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .error-message {
          color: #856404;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .retry-button {
          background: #ffc107;
          color: #000;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .retry-button:hover {
          background: #ffca2c;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .error-container {
            margin: 1rem;
            padding: 1.5rem;
          }

          .error-icon {
            font-size: 3rem;
          }

          .error-title {
            font-size: 1.25rem;
          }

          .error-message {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}