'use client';

import { useState, useEffect } from 'react';
import { disciplinas, getDisciplinaById } from '@/data/disciplinas';

export function useDisciplinas() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        await new Promise(resolve => 
          setTimeout(resolve, Math.random() * 1000 + 500)
        );
        
        if (Math.random() < 0.05) {
          throw new Error('Erro ao carregar disciplinas. Tente novamente.');
        }
        
        setData(disciplinas);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

export function useDisciplina(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        await new Promise(resolve => 
          setTimeout(resolve, Math.random() * 800 + 400)
        );
        
        const disciplina = getDisciplinaById(id);
        
        if (!disciplina) {
          throw new Error('Disciplina não encontrada');
        }
        
        setData(disciplina);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return { data, loading, error };
}