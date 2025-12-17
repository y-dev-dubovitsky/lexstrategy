// components/Hero.jsx
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Определяем активную секцию при скролле
      const sections = ['services', 'cases', 'about', 'process', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    console.log(`Пытаемся скроллить к секции: ${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Элемент найден:', element);
      const top = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: top - 80, // Отступ сверху для фиксированной навигации
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    } else {
      console.error(`Элемент с id="${sectionId}" не найден!`);
    }
  };

  const handleStartSession = () => {
    console.log('Клик по "Начать стратегическую сессию"');
    scrollToSection('contact');
  };

  const handleViewResults = () => {
    console.log('Клик по "Смотреть результаты"');
    scrollToSection('cases');
  };

  const handleServiceClick = (serviceTitle) => {
    console.log(`Выбран сервис: ${serviceTitle}`);
    // Можно добавить дополнительную логику здесь
    scrollToSection('services');
  };

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'
    >
      {/* Абстрактный геометрический фон */}
      <div className='absolute inset-0 z-0 bg-gradient-to-br from-gray-950 via-black to-gray-900'>
        {/* Геометрические узоры */}
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
              <defs>
                <pattern
                  id='grid'
                  width='80'
                  height='80'
                  patternUnits='userSpaceOnUse'
                >
                  <path
                    d='M 80 0 L 0 0 0 80'
                    fill='none'
                    stroke='#10b981'
                    strokeWidth='0.5'
                    opacity='0.3'
                  />
                </pattern>
                <linearGradient
                  id='gradient'
                  x1='0%'
                  y1='0%'
                  x2='100%'
                  y2='100%'
                >
                  <stop offset='0%' stopColor='#10b981' stopOpacity='0.1' />
                  <stop offset='50%' stopColor='#0ea5e9' stopOpacity='0.05' />
                  <stop offset='100%' stopColor='#8b5cf6' stopOpacity='0.1' />
                </linearGradient>
              </defs>
              <rect width='100%' height='100%' fill='url(#grid)' />
              <rect width='100%' height='100%' fill='url(#gradient)' />
            </svg>
          </div>
        </div>

        {/* Анимированные линии */}
        <div className='absolute inset-0 overflow-hidden'>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className='absolute h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent'
              style={{
                width: '100%',
                top: `${(i + 1) * 12.5}%`,
                animation: `scanLine ${3 + i * 0.5}s ease-in-out infinite ${
                  i * 0.2
                }s`,
                filter: 'blur(1px)',
              }}
            />
          ))}
        </div>

        {/* Плавающие геометрические формы */}
        <div className='absolute inset-0'>
          <div className='absolute top-1/4 left-1/4 w-32 h-32 border border-emerald-500/10 rounded-full animate-pulse'></div>
          <div className='absolute bottom-1/4 right-1/4 w-48 h-48 border border-cyan-500/10 rotate-45 animate-spin-slow'></div>
          <div className='absolute top-1/3 right-1/3 w-24 h-24 border border-violet-500/10 rounded-lg animate-pulse delay-1000'></div>
        </div>
      </div>

      {/* Основной контент */}
      <div className='relative z-10 text-center text-white max-w-6xl mx-auto px-4 py-20'>
        <div
          className={`transform transition-all duration-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Верхний лейбл */}
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-12 backdrop-blur-sm'>
            <ShieldCheckIcon className='h-5 w-5 text-emerald-400' />
            <span className='text-sm font-medium tracking-wider text-emerald-300'>
              Стратегическое партнерство для бизнеса
            </span>
          </div>

          {/* Главный заголовок */}
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight'>
            <span className='block'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-cyan-100'>
                Преобразуем
              </span>
            </span>
            <span className='block mt-2'>
              <span className='relative'>
                <span className='absolute -inset-1 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 blur-xl rounded-full'></span>
                <span className='relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-white'>
                  правовые вызовы
                </span>
              </span>
            </span>
            <span className='block mt-2 text-3xl md:text-4xl lg:text-5xl font-light text-gray-300'>
              в бизнес-возможности
            </span>
          </h1>

          {/* Описание */}
          <p className='text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300 font-light'>
            Мы создаем правовую архитектуру для масштабирования вашего бизнеса.
            <span className='block mt-3 text-emerald-300 font-medium'>
              От стратегического планирования до операционного совершенства.
            </span>
          </p>

          {/* Ключевые показатели */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto'>
            {[
              {
                value: '300+',
                label: 'Проектов',
                icon: '🎯',
                color: 'emerald',
              },
              { value: '8 лет', label: 'Опыта', icon: '⚡', color: 'cyan' },
              {
                value: '95%',
                label: 'Успешных дел',
                icon: '📈',
                color: 'violet',
              },
              { value: '24/7', label: 'Поддержка', icon: '🛡️', color: 'amber' },
            ].map((item, index) => (
              <div 
                key={index} 
                className='relative group'
                onClick={() => console.log(`Клик по статистике: ${item.label}`)}
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-${item.color}-500 to-${item.color}-300 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500`}
                ></div>
                <div className='relative bg-gradient-to-b from-gray-900/50 to-gray-900/30 border border-gray-800/50 rounded-xl p-4 backdrop-blur-sm hover:border-gray-700/80 transition-all duration-300'>
                  <div className='flex flex-col items-center'>
                    <div
                      className={`text-3xl font-bold mb-1 bg-gradient-to-r from-${item.color}-300 to-${item.color}-200 bg-clip-text text-transparent`}
                      style={{ color: 'white' }}
                    >
                      {item.value}
                    </div>
                    <div className='text-sm text-gray-400 font-medium tracking-wide'>
                      {item.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA кнопки */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'>
            <button 
              onClick={handleStartSession}
              className='group relative bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 font-bold py-4 px-10 rounded-xl text-lg transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/20 cursor-pointer'
            >
              <div className='absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500'></div>
              <span className='relative flex items-center justify-center space-x-3'>
                <span>Начать стратегическую сессию</span>
                <ArrowRightIcon className='h-5 w-5 group-hover:translate-x-2 transition-transform duration-300' />
              </span>
            </button>

            <button
              onClick={handleViewResults}
              className='group relative border border-gray-700 hover:border-emerald-500/50 text-white hover:text-emerald-100 font-medium py-4 px-10 rounded-xl text-lg transition-all duration-500 backdrop-blur-sm bg-white/5 hover:bg-white/10 cursor-pointer'
            >
              <span className='relative flex items-center justify-center space-x-3'>
                <ChartBarIcon className='h-5 w-5' />
                <span>Смотреть результаты</span>
              </span>
              <div className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
            </button>
          </div>

          {/* Ключевые направления */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            {[
              {
                id: 'corporate',
                title: 'Корпоративное право',
                desc: 'Структурирование сделок и корпоративное управление',
                icon: '🏛️',
                gradient: 'from-emerald-500/20 to-cyan-500/20',
              },
              {
                id: 'digital',
                title: 'Цифровая трансформация',
                desc: 'Правовая поддержка IT и технологических проектов',
                icon: '💻',
                gradient: 'from-violet-500/20 to-purple-500/20',
              },
              {
                id: 'international',
                title: 'Международная экспансия',
                desc: 'Выход на новые рынки и трансграничные операции',
                icon: '🌍',
                gradient: 'from-blue-500/20 to-cyan-500/20',
              },
            ].map((service, index) => (
              <div 
                key={service.id} 
                className='group cursor-pointer'
                onClick={() => handleServiceClick(service.title)}
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500`}
                ></div>
                <div className='relative bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 transition-all duration-300 group-hover:border-gray-700/80 group-hover:translate-y-[-2px]'>
                  <div className='flex items-start space-x-4'>
                    <div className='text-3xl flex-shrink-0'>{service.icon}</div>
                    <div className='text-left'>
                      <h3 className='text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors'>
                        {service.title}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Анимированные элементы */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-full blur-3xl'></div>

      <style jsx>{`
        @keyframes scanLine {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;