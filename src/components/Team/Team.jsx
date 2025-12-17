// components/CEO.jsx
import {
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  TrophyIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  HandThumbUpIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

// Импортируем фото директора (замените на ваше фото)
import ceoPhoto from '../../assets/5321365833395146140.jpg';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);

  const quotes = [
    {
      id: 1,
      text: 'Мы не просто решаем юридические задачи — мы строим архитектуру успеха наших клиентов. Каждый бизнес уникален, и наша миссия — найти оптимальный путь его трансформации.',
      highlight: 'архитектуру успеха',
      stat: '300+',
      label: 'трансформированных компаний',
    },
    {
      id: 2,
      text: 'В эпоху цифровой революции юридическое сопровождение должно быть не обузой, а катализатором роста. Мы создаем юридические решения, которые ускоряют развитие бизнеса.',
      highlight: 'катализатором роста',
      stat: '150%',
      label: 'средний рост клиентов',
    },
    {
      id: 3,
      text: 'Наша философия — предвидеть изменения до того, как они станут проблемой. Мы помогаем клиентам не просто адаптироваться к новым реалиям, а формировать их.',
      highlight: 'предвидеть изменения',
      stat: '25+',
      label: 'экспертов в команде',
    },
  ];

  const achievements = [
    { icon: TrophyIcon, value: '12 лет', label: 'На рынке', color: 'emerald' },
    {
      icon: BuildingOfficeIcon,
      value: '200+',
      label: 'Клиентов',
      color: 'cyan',
    },
    {
      icon: ChartBarIcon,
      value: '95%',
      label: 'Успешных кейсов',
      color: 'violet',
    },
    {
      icon: ArrowTrendingUpIcon,
      value: '×3',
      label: 'Рост портфеля',
      color: 'amber',
    },
  ];

  const principles = [
    {
      icon: LightBulbIcon,
      title: 'Инновации',
      desc: 'Внедряем передовые legal-tech решения',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Надежность',
      desc: 'Гарантия результата и конфиденциальности',
    },
    {
      icon: HandThumbUpIcon,
      title: 'Партнерство',
      desc: 'Становимся частью команды клиента',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('ceo');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote(prev => (prev + 1) % quotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const nextQuote = () => {
    setActiveQuote(prev => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setActiveQuote(prev => (prev - 1 + quotes.length) % quotes.length);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    console.log("onClick={() => scrollToSection('contact')}");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <section
      id='ceo'
      className='relative py-24 lg:py-32 bg-black overflow-hidden'
    >
      {/* Фоновые элементы */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Анимированные градиенты */}
        <div className='absolute -top-40 -right-40 w-[800px] h-[800px] bg-emerald-500/3 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-cyan-500/3 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className='absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-violet-500/2 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>

        {/* Геометрические линии */}
        <svg
          className='absolute inset-0 w-full h-full opacity-5'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <pattern
              id='ceo-grid'
              width='120'
              height='120'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M 120 0 L 0 0 0 120'
                fill='none'
                stroke='#10b981'
                strokeWidth='1'
              />
              <circle cx='60' cy='60' r='2' fill='#10b981' opacity='0.3' />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#ceo-grid)' />
        </svg>

        {/* Плавающие элементы */}
        <div className='absolute top-20 right-1/4 animate-float-slow'>
          <div className='w-4 h-4 bg-emerald-500/20 rounded-full'></div>
        </div>
        <div className='absolute bottom-40 left-1/3 animate-float-slower'>
          <div className='w-6 h-6 bg-cyan-500/20 rounded-full'></div>
        </div>
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Заголовок с анимацией */}
        <div
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8'>
            <SparklesIcon
              className='h-5 w-5 text-emerald-400 animate-spin'
              style={{ animationDuration: '3s' }}
            />
            <span className='text-sm font-medium tracking-wider text-emerald-300 uppercase'>
              ВИДЕНИЕ ОСНОВАТЕЛЯ
            </span>
          </div>

          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight'>
            <span className='block'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-cyan-100'>
                Стратегическое лидерство
              </span>
            </span>
            <span className='block mt-4'>
              <span className='relative'>
                <span className='absolute -inset-1 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 blur-xl rounded-full'></span>
                <span className='relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-white'>
                  от основателя компании
                </span>
              </span>
            </span>
          </h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
          {/* Левая колонка - Фото и информация о директоре */}
          <div
            className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <div className='relative group'>
              {/* Основное фото */}
              <div className='relative rounded-3xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
                <img
                  src={ceoPhoto}
                  alt='Генеральный директор Lex Strategic'
                  className='w-full h-[600px] object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700'
                />

                {/* Эффект свечения */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl'></div>
                <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent rounded-b-3xl'></div>

                {/* Информационная панель на фото */}
                <div className='absolute bottom-0 left-0 right-0 p-6 lg:p-8'>
                  <div className='bg-gradient-to-b from-gray-900/80 to-gray-900/90 backdrop-blur-md rounded-2xl p-6 border border-gray-800/50'>
                    <div className='flex items-start justify-between'>
                      <div>
                        <div className='text-sm text-emerald-400 uppercase tracking-wider mb-1'>
                          Генеральный директор
                        </div>
                        <div className='text-2xl lg:text-3xl font-bold text-white mb-2'>
                          Александр Волков
                        </div>
                        <div className='text-gray-300'>
                          Основатель Lex Strategic
                        </div>
                      </div>
                      <div className='hidden lg:block'>
                        <div className='flex items-center space-x-1'>
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className='h-5 w-5 text-amber-400'
                            />
                          ))}
                        </div>
                        <div className='text-sm text-gray-400 mt-1'>
                          Рейтинг Forbes
                        </div>
                      </div>
                    </div>

                    <div className='mt-4 flex items-center space-x-4'>
                      <div className='flex items-center space-x-2'>
                        <RocketLaunchIcon className='h-5 w-5 text-cyan-400' />
                        <span className='text-sm text-gray-300'>
                          Основана в 2012
                        </span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <TrophyIcon className='h-5 w-5 text-emerald-400' />
                        <span className='text-sm text-gray-300'>
                          Топ-10 Legal Tech
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Декор элементы */}
              <div className='absolute -top-4 -left-4 w-24 h-24 border-t border-l border-emerald-500/30 rounded-tl-3xl'></div>
              <div className='absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-cyan-500/30 rounded-br-3xl'></div>
            </div>

            {/* Достижения */}
            <div className='grid grid-cols-2 gap-4 mt-8'>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-4 border border-gray-800/50 hover:border-${achievement.color}-500/30 transition-all duration-300 group`}
                >
                  <div className='flex items-center space-x-3'>
                    <div
                      className={`p-2 bg-gradient-to-br from-${achievement.color}-500/10 to-${achievement.color}-500/5 border border-${achievement.color}-500/20 rounded-lg`}
                    >
                      <achievement.icon
                        className={`h-5 w-5 text-${achievement.color}-400`}
                      />
                    </div>
                    <div>
                      <div
                        className={`text-2xl font-bold text-${achievement.color}-400`}
                      >
                        {achievement.value}
                      </div>
                      <div className='text-sm text-gray-400'>
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка - Цитаты и философия */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 transform ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Цитаты с автоплейем */}
            <div className='relative'>
              <div className='bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-800/50 p-6 lg:p-8'>
                <div className='flex items-center space-x-3 mb-6'>
                  <div className='p-2 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-lg'>
                    <ChatBubbleLeftRightIcon className='h-6 w-6 text-cyan-400' />
                  </div>
                  <div>
                    <div className='text-sm text-gray-400 uppercase tracking-wider'>
                      ФИЛОСОФИЯ КОМПАНИИ
                    </div>
                    <h3 className='text-xl font-bold text-white'>
                      Слова основателя
                    </h3>
                  </div>
                </div>

                <div className='relative h-64 lg:h-72'>
                  {quotes.map((quote, index) => (
                    <div
                      key={quote.id}
                      className={`absolute inset-0 transition-all duration-1000 transform ${
                        index === activeQuote
                          ? 'translate-x-0 opacity-100'
                          : index < activeQuote
                          ? '-translate-x-full opacity-0'
                          : 'translate-x-full opacity-0'
                      }`}
                    >
                      <blockquote className='relative'>
                        <div className='text-5xl lg:text-6xl text-emerald-500/20 font-serif absolute -top-6 -left-2'>
                          "
                        </div>
                        <p className='text-xl lg:text-2xl text-gray-200 leading-relaxed pl-8 pt-4 font-light'>
                          {quote.text
                            .split(quote.highlight)
                            .map((part, i, arr) => (
                              <span key={i}>
                                {part}
                                {i < arr.length - 1 && (
                                  <span className='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-semibold'>
                                    {quote.highlight}
                                  </span>
                                )}
                              </span>
                            ))}
                        </p>
                        <div className='text-5xl lg:text-6xl text-cyan-500/20 font-serif absolute -bottom-6 -right-2 transform rotate-180'>
                          "
                        </div>
                      </blockquote>

                      <div className='mt-8 flex items-center justify-between'>
                        <div>
                          <div
                            className={`text-3xl font-bold bg-gradient-to-r from-${
                              index === 0
                                ? 'emerald'
                                : index === 1
                                ? 'cyan'
                                : 'violet'
                            }-400 to-${
                              index === 0
                                ? 'cyan'
                                : index === 1
                                ? 'violet'
                                : 'amber'
                            }-400 bg-clip-text text-transparent`}
                          >
                            {quote.stat}
                          </div>
                          <div className='text-sm text-gray-400'>
                            {quote.label}
                          </div>
                        </div>
                        <div className='text-right'>
                          <div className='text-sm text-gray-500'>
                            Цитата {index + 1}/{quotes.length}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Элементы управления цитатами */}
                <div className='flex items-center justify-between mt-6 pt-6 border-t border-gray-800/50'>
                  <div className='flex space-x-2'>
                    {quotes.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveQuote(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === activeQuote
                            ? 'w-8 bg-gradient-to-r from-emerald-400 to-cyan-400'
                            : 'bg-gray-700 hover:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <div className='flex space-x-2'>
                    <button
                      onClick={prevQuote}
                      className='p-2 bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800/50 rounded-lg transition-colors group'
                    >
                      <svg
                        className='h-5 w-5 text-gray-400 group-hover:text-emerald-400'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 19l-7-7 7-7'
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextQuote}
                      className='p-2 bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800/50 rounded-lg transition-colors group'
                    >
                      <svg
                        className='h-5 w-5 text-gray-400 group-hover:text-cyan-400'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Принципы работы */}
            <div className='bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-800/50 p-6 lg:p-8'>
              <div className='mb-6'>
                <div className='text-sm text-gray-400 uppercase tracking-wider mb-2'>
                  КЛЮЧЕВЫЕ ПРИНЦИПЫ
                </div>
                <h3 className='text-2xl font-bold text-white'>
                  Как мы работаем
                </h3>
              </div>

              <div className='space-y-4'>
                {principles.map((principle, index) => (
                  <div
                    key={index}
                    className='flex items-start space-x-4 p-4 bg-gray-900/30 rounded-2xl border border-gray-800/30 hover:border-emerald-500/30 transition-all duration-300 group'
                  >
                    <div className='flex-shrink-0 p-2 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-lg group-hover:scale-110 transition-transform'>
                      <principle.icon className='h-6 w-6 text-emerald-400' />
                    </div>
                    <div>
                      <div className='text-lg font-semibold text-white mb-1'>
                        {principle.title}
                      </div>
                      <div className='text-gray-400 text-sm'>
                        {principle.desc}
                      </div>
                    </div>
                    <CheckCircleIcon className='h-5 w-5 text-emerald-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity' />
                  </div>
                ))}
              </div>
            </div>

            {/* Призыв к действию */}
            <div className='bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 backdrop-blur-sm rounded-3xl border border-gray-800/50 p-6 lg:p-8'>
              <div className='flex items-center justify-between'>
                <div>
                  <div className='text-lg font-bold text-white mb-2'>
                    Личная встреча с основателем
                  </div>
                  <div className='text-sm text-gray-400'>
                    Запланируйте стратегическую сессию
                  </div>
                </div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className='px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25'
                >
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Миссия компании */}
        <div
          className={`mt-20 lg:mt-24 text-center transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className='inline-block bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-6'>
            <span className='text-sm font-medium text-emerald-300'>
              МИССИЯ LEX STRATEGIC
            </span>
          </div>
          <h3 className='text-3xl lg:text-4xl font-bold text-white mb-6 max-w-4xl mx-auto'>
            "Создавать юридические решения, которые не просто решают проблемы,
            <span className='text-emerald-400'>
              {' '}
              а открывают новые возможности
            </span>
            "
          </h3>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            — Александр Волков, основатель Lex Strategic
          </p>
        </div>
      </div>
    </section>
  );
};

// Добавляем анимацию для плавающих элементов
const styles = `
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(-20px) translateX(10px); }
  }
  @keyframes float-slower {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(-10px) translateX(-15px); }
  }
  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }
  .animate-float-slower {
    animation: float-slower 12s ease-in-out infinite;
  }
`;

export default function CEOWithStyles() {
  return (
    <>
      <style>{styles}</style>
      <Team />
    </>
  );
}
