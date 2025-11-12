// components/Hero.jsx
import hero from '../../assets/document_5233690569577892701.mp4';

// components/Hero.jsx
import { ChevronRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Видео фон с затемнением и эффектами */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover scale-105"
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={hero} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        
        {/* Градиентное затемнение для лучшей читаемости */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-purple-900/60"></div>
        
        {/* Анимированные элементы фона */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white rounded-full opacity-10 animate-ping"></div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Бейдж */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <PlayCircleIcon className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Юридическая компания с 2016 года</span>
          </div>

          {/* Главный заголовок с градиентом */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
              Правовая
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-blue-100">
              уверенность
            </span>
          </h1>

          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Комплексное юридическое сопровождение бизнеса. 
            <span className="block text-blue-200 font-medium">Решаем сложные вопросы — вы занимаетесь своим делом.</span>
          </p>

          {/* Ключевые преимущества */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { text: 'Опыт более 8 лет', highlight: '95%' },
              { text: 'Успешных кейсов', highlight: '50+' },
              { text: 'Довольных клиентов', highlight: '100%' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 transform hover:scale-105 transition duration-300"
              >
                <div className="text-2xl font-bold text-blue-200 mb-1">{item.highlight}</div>
                <div className="text-sm text-white/80">{item.text}</div>
              </div>
            ))}
          </div>

          {/* CTA кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center">
              Бесплатная консультация
              <ChevronRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white text-white hover:bg-white/10 font-medium py-4 px-8 rounded-xl text-lg transition-all duration-300 backdrop-blur-sm">
              Смотреть кейсы
            </button>
          </div>

          {/* Доверительные элементы */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/70 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Онлайн консультации 24/7
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              Полная конфиденциальность
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              Результат гарантирован
            </div>
          </div>
        </div>
      </div>

      {/* Скролл индикатор */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Дополнительные декоративные элементы */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-400/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;