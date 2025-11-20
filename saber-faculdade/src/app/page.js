
import React from 'react';
import { BookOpen, Search, User } from 'lucide-react'; // Importamos ícones para o menu e cards

// Componente para o Card de Destaque
const FeaturedCard = ({ icon, title, description, color, imageSrc }) => (
    <div className={`p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer w-full max-w-xs overflow-hidden`} style={{ backgroundColor: color }}>
        {/* Usamos a imagem como fundo do topo do card */}
        <div className="h-28 w-full bg-cover bg-center rounded-lg mb-3" style={{ backgroundImage: `url(${imageSrc})` }}>
            {/* Onde estava a fórmula/estrutura química/etc */}
        </div>
        <h3 className="text-lg font-semibold mb-1 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 h-10 overflow-hidden">{description}</p>
        
        <div className="flex justify-between items-center text-xs text-gray-700 mt-2">
            <div className="flex items-center">
                <span className="mr-1">🎥</span> Aulas em Vídeo
            </div>
            <div className="flex items-center">
                <span className="mr-1">⏳</span> 4-8h
            </div>
            <button className="p-1 rounded-full border border-gray-400 hover:bg-gray-100 transition-colors">
                i
            </button>
        </div>
    </div>
);

// Componente para o Card "Veja Também"
const SeeAlsoCard = ({ title, description, imageSrc }) => (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer w-full max-w-[200px] overflow-hidden">
        {/* A imagem principal que aparece no topo */}
        <div className="h-32 w-full bg-cover bg-center" style={{ backgroundImage: `url(${imageSrc})` }}></div>
        <div className="p-3">
            <h3 className="text-md font-semibold mb-1 text-gray-800">{title}</h3>
            <p className="text-xs text-gray-500 mb-3 h-8 overflow-hidden">{description}</p>
            
            <div className="flex justify-between items-center text-xs text-gray-700 mt-2">
                <div className="flex items-center">
                    <span className="mr-1">🎥</span> Aulas em Vídeo
                </div>
                <div className="flex items-center">
                    <span className="mr-1">⏳</span> 4-8h
                </div>
                <button className="p-1 rounded-full border border-gray-400 hover:bg-gray-100 transition-colors text-xs">
                    i
                </button>
            </div>
        </div>
    </div>
);


export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* 1. Header (Topo) */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="text-blue-600 w-8 h-8" />
            <span className="text-2xl font-bold text-gray-800">Saber+</span>
          </div>

          {/* Barra de Busca */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-50 hover:bg-white focus-within:border-blue-500 transition-colors w-full max-w-md">
            <input
              type="text"
              placeholder="Qual assunto você gostaria de aprender?"
              className="bg-transparent outline-none w-full text-sm text-gray-700"
            />
            <button className="text-gray-500 hover:text-blue-600 ml-2">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Minha Conta */}
          <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
            <User className="w-5 h-5" />
            <span>Minha Conta</span>
          </button>
        </div>
      </header>
      
      {/* 2. Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Destaques */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 border-b-2 border-blue-600 inline-block pb-1">
            Destaques..
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Cards de Destaque */}
            <FeaturedCard 
                title="Matemática"
                description="Resolva problemas com lógica e pratique fórmulas que vão facilitar sua vida nos estudos."
                color="#e0f2fe" // Cor de fundo suave
                imageSrc="/images/math_bg.jpg" // Você precisará criar essa imagem!
            />
            <FeaturedCard 
                title="Química"
                description="Aprenda os conceitos essenciais que vão turbinar seu desempenho nas provas e vestibulares."
                color="#fef3c7" // Cor de fundo suave
                imageSrc="/images/chem_bg.jpg.png"
            />
            <FeaturedCard 
                title="Português"
                description="Domine a gramática, a escrita e a interpretação de textos para se destacar em qualquer prova."
                color="#fee2e2" // Cor de fundo suave
                imageSrc="/images/port_bg.jpg.png"
            />
            
            {/* Adicione mais cards se precisar, ou deixe 3 para o layout inicial */}

          </div>
        </section>

        {/* Veja Também */}
        <section>
          <h2 className="text-2xl font-bold text-gray-700 mb-6 border-b-2 border-blue-600 inline-block pb-1">
            Veja Também..
          </h2>
          <div className="flex flex-wrap gap-6 justify-start">
            {/* Cards de Veja Também */}
            <SeeAlsoCard 
                title="Artes"
                description="Descubra sua criatividade aprendendo sobre cores, formas e as expressões que inspiram o mundo."
                imageSrc="/images/arts_thumb.jpg"
            />
            <SeeAlsoCard 
                title="Inglês"
                description="Aprenda vocabulário, gramática e conversação de forma leve e prática para o dia a dia."
                imageSrc="/images/english_thumb.jpg"
            />
            <SeeAlsoCard 
                title="Educação Física"
                description="Entenda o funcionamento do corpo, os benefícios dos exercícios e a importância do esporte para a saúde."
                imageSrc="/images/pe_thumb.jpg"
            />
             <SeeAlsoCard 
                title="Biologia"
                description="Explore o corpo humano, a vida das células e os segredos da natureza de forma simples e prática."
                imageSrc="/images/bio_thumb.jpg"
            />
            {/* Adicione mais cards aqui */}
          </div>
        </section>

      </main>
    </div>
  );
}
