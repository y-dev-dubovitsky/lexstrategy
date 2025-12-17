// components/Services.jsx
import {
  ScaleIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  BanknotesIcon,
  UserGroupIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ArrowPathIcon,
  GlobeAltIcon,
  BoltIcon,
  CursorArrowRaysIcon,
  ChartBarSquareIcon,
  ServerIcon,
  LockClosedIcon,
  ArrowRightIcon,
  PlayIcon,
  PauseIcon,
  BriefcaseIcon,
  ScaleIcon as ScaleSolid,
} from '@heroicons/react/24/solid';
import { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const legalServices = [
    {
      id: 0,
      title: 'Корпоративное право',
      description:
        'Комплексное юридическое сопровождение бизнеса и стратегические консультации',
      icon: BuildingLibraryIcon,
      color: 'emerald',
      particles: 24,
      size: 'lg',
      position: 'front',
    },
    {
      id: 1,
      title: 'M&A и сделки',
      description:
        'Сопровождение сделок по слияниям и поглощениям, due diligence',
      icon: BriefcaseIcon,
      color: 'cyan',
      particles: 18,
      size: 'md',
      position: 'right',
    },
    {
      id: 2,
      title: 'Налоговые споры',
      description: 'Защита в налоговых проверках и оспаривание доначислений',
      icon: BanknotesIcon,
      color: 'violet',
      particles: 30,
      size: 'lg',
      position: 'back',
    },
    {
      id: 3,
      title: 'Арбитражные споры',
      description: 'Представление интересов в арбитражных судах всех инстанций',
      icon: ScaleSolid,
      color: 'amber',
      particles: 22,
      size: 'md',
      position: 'left',
    },
    {
      id: 4,
      title: 'Банкротство',
      description:
        'Сопровождение процедур банкротства для кредиторов и должников',
      icon: UserGroupIcon,
      color: 'rose',
      particles: 26,
      size: 'sm',
      position: 'top',
    },
    {
      id: 5,
      title: 'Недвижимость',
      description: 'Юридическое сопровождение сделок с недвижимостью',
      icon: DocumentTextIcon,
      color: 'blue',
      particles: 20,
      size: 'sm',
      position: 'bottom',
    },
  ];

  const serviceDetails = [
    {
      id: 0,
      title: 'Корпоративное право',
      tagline: 'Правовой фундамент вашего бизнеса',
      description:
        'Обеспечиваем полное юридическое сопровождение бизнеса: от регистрации компаний до сложных корпоративных процедур. Разрабатываем внутренние документы, проводим собрания участников, помогаем в реорганизации и ликвидации компаний.',
      features: [
        'Регистрация и ликвидация компаний',
        'Корпоративное управление',
        'Разработка уставных документов',
        'Сопровождение собраний участников',
      ],
      stats: [
        { value: '500+', label: 'Зарегистрированных компаний' },
        { value: '100%', label: 'Юридическая чистота' },
        { value: '24ч', label: 'Срок регистрации' },
      ],
      technologies: [
        'Due Diligence',
        'Корпоративное право',
        'Регистрация',
        'Лицензирование',
      ],
    },
    {
      id: 1,
      title: 'M&A и сделки',
      tagline: 'Стратегические сделки под ключ',
      description:
        'Профессиональное сопровождение сделок по слияниям и поглощениям. Проводим комплексную юридическую экспертизу, готовим документы для сделок любой сложности, обеспечиваем юридическую чистоту на всех этапах.',
      features: [
        'Due diligence компаний',
        'Структурирование сделок',
        'Переговоры и согласование условий',
        'Закрытие сделок',
      ],
      stats: [
        { value: '200+', label: 'Успешных сделок' },
        { value: '15B+', label: 'Объем сделок' },
        { value: '98%', label: 'Успешность' },
      ],
      technologies: ['Due Diligence', 'M&A', 'Сделки', 'Инвестиции'],
    },
    {
      id: 2,
      title: 'Налоговые споры',
      tagline: 'Защита от налоговых претензий',
      description:
        'Представляем интересы компаний в спорах с налоговыми органами. Помогаем оспорить доначисления, защищаем от необоснованных претензий, выстраиваем налоговую стратегию для минимизации рисков.',
      features: [
        'Налоговые проверки',
        'Оспаривание решений ФНС',
        'Налоговое планирование',
        'Судебные споры с ФНС',
      ],
      stats: [
        { value: '95%', label: 'Выигранных дел' },
        { value: '2B+', label: 'Сэкономлено клиентам' },
        { value: '<30', label: 'Дней на решение' },
      ],
      technologies: [
        'Налоговое право',
        'Судебные споры',
        'Аудит',
        'Консультации',
      ],
    },
    {
      id: 3,
      title: 'Арбитражные споры',
      tagline: 'Победная стратегия в суде',
      description:
        'Представление интересов в арбитражных судах всех инстанций. Разрабатываем стратегию ведения дела, готовим процессуальные документы, обеспечиваем защиту интересов на всех стадиях процесса.',
      features: [
        'Ведение дел в арбитражных судах',
        'Досудебное урегулирование споров',
        'Исполнительное производство',
        'Обжалование судебных актов',
      ],
      stats: [
        { value: '90%', label: 'Положительных решений' },
        { value: '300+', label: 'Выигранных дел' },
        { value: '15+', label: 'Лет опыта' },
      ],
      technologies: [
        'Арбитраж',
        'Исполнительное производство',
        'Апелляция',
        'Кассация',
      ],
    },
    {
      id: 4,
      title: 'Банкротство',
      tagline: 'Защита активов и интересов',
      description:
        'Комплексное сопровождение процедур банкротства. Помогаем кредиторам вернуть долги, а должникам - пройти процедуру с минимальными потерями. Защищаем активы и обеспечиваем законность процедуры.',
      features: [
        'Банкротство юридических лиц',
        'Банкротство физических лиц',
        'Защита активов должника',
        'Взыскание долгов через банкротство',
      ],
      stats: [
        { value: '50+', label: 'Завершенных процедур' },
        { value: '85%', label: 'Успешных взысканий' },
        { value: '12', label: 'Месяцев в среднем' },
      ],
      technologies: [
        'Банкротство',
        'Финансовое право',
        'Взыскание долгов',
        'Санация',
      ],
    },
    {
      id: 5,
      title: 'Недвижимость',
      tagline: 'Безопасные сделки с недвижимостью',
      description:
        'Юридическое сопровождение сделок с коммерческой и жилой недвижимостью. Проводим проверку объектов, готовим договоры, регистрируем права, защищаем от мошенничества.',
      features: [
        'Проверка юридической чистоты',
        'Сопровождение сделок купли-продажи',
        'Регистрация прав собственности',
        'Разрешение споров по недвижимости',
      ],
      stats: [
        { value: '150+', label: 'Проверенных объектов' },
        { value: '100%', label: 'Юридическая безопасность' },
        { value: '0', label: 'Неудачных сделок' },
      ],
      technologies: [
        'Недвижимость',
        'Регистрация',
        'Договоры',
        'Судебные споры',
      ],
    },
  ];

  const serviceStats = [
    { number: '1000+', label: 'Завершенных дел', icon: BriefcaseIcon },
    { number: '98%', label: 'Удовлетворенных клиентов', icon: UserGroupIcon },
    { number: '15+', label: 'Лет опыта на рынке', icon: ScaleSolid },
    { number: '50+', label: 'Профессиональных юристов', icon: ShieldCheckIcon },
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

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const videoRef = useRef(null);
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

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setActiveService(prev => (prev + 1) % legalServices.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const selectService = index => setActiveService(index);

  const getPositionStyle = (service, rotation) => {
    const radius = 300;

    switch (service.position) {
      case 'front':
        return {
          transform: `translateZ(${radius}px) rotateY(${rotation}deg)`,
          zIndex: 20,
        };
      case 'right':
        return {
          transform: `rotateY(90deg) translateZ(${radius}px) rotateY(${rotation}deg)`,
          zIndex: 15,
        };
      case 'back':
        return {
          transform: `rotateY(180deg) translateZ(${radius}px) rotateY(${rotation}deg)`,
          zIndex: 10,
        };
      case 'left':
        return {
          transform: `rotateY(-90deg) translateZ(${radius}px) rotateY(${rotation}deg)`,
          zIndex: 15,
        };
      case 'top':
        return {
          transform: `rotateX(90deg) translateZ(${radius}px) rotateY(${rotation}deg)`,
          zIndex: 5,
        };
      case 'bottom':
        return {
          transform: `rotateX(-90deg) translateZ(${radius}px) rotateY(${rotation}deg)`,
          zIndex: 5,
        };
      default:
        return {};
    }
  };

  // Получаем текущий активный сервис
  const currentService = legalServices[activeService];
  const currentDetails = serviceDetails[activeService];

  // Функция для получения цвета из строки
  const getColorClass = color => {
    const colorMap = {
      emerald: 'text-emerald-400',
      cyan: 'text-cyan-400',
      violet: 'text-violet-400',
      amber: 'text-amber-400',
      rose: 'text-rose-400',
      blue: 'text-blue-400',
    };
    return colorMap[color] || 'text-emerald-400';
  };

  const getBgColorClass = color => {
    const colorMap = {
      emerald: 'bg-gradient-to-br from-emerald-500/10 to-emerald-500/5',
      cyan: 'bg-gradient-to-br from-cyan-500/10 to-cyan-500/5',
      violet: 'bg-gradient-to-br from-violet-500/10 to-violet-500/5',
      amber: 'bg-gradient-to-br from-amber-500/10 to-amber-500/5',
      rose: 'bg-gradient-to-br from-rose-500/10 to-rose-500/5',
      blue: 'bg-gradient-to-br from-blue-500/10 to-blue-500/5',
    };
    return (
      colorMap[color] ||
      'bg-gradient-to-br from-emerald-500/10 to-emerald-500/5'
    );
  };

  const getBorderColorClass = color => {
    const colorMap = {
      emerald: 'border-emerald-500/20',
      cyan: 'border-cyan-500/20',
      violet: 'border-violet-500/20',
      amber: 'border-amber-500/20',
      rose: 'border-rose-500/20',
      blue: 'border-blue-500/20',
    };
    return colorMap[color] || 'border-emerald-500/20';
  };

  const getColorGradientClass = color => {
    const colorMap = {
      emerald: 'from-emerald-400',
      cyan: 'from-cyan-400',
      violet: 'from-violet-400',
      amber: 'from-amber-400',
      rose: 'from-rose-400',
      blue: 'from-blue-400',
    };
    return colorMap[color] || 'from-emerald-400';
  };

  const getToColorGradientClass = color => {
    const colorMap = {
      emerald: 'to-emerald-300',
      cyan: 'to-cyan-300',
      violet: 'to-violet-300',
      amber: 'to-amber-300',
      rose: 'to-rose-300',
      blue: 'to-blue-300',
    };
    return colorMap[color] || 'to-emerald-300';
  };

  return (
    <section
      ref={containerRef}
      id='services'
      className='relative min-h-screen py-24 lg:py-32 bg-black overflow-hidden'
    >
      {/* Фон с юридической тематикой */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900'>
        {/* Геометрический паттерн */}
        <svg
          className='absolute inset-0 w-full h-full opacity-5'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <pattern
              id='legal-grid'
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
              <circle cx='60' cy='60' r='4' fill='#10b981' opacity='0.3' />
              <path
                d='M 60 0 L 60 120'
                stroke='#3b82f6'
                strokeWidth='0.5'
                opacity='0.2'
              />
              <path
                d='M 0 60 L 120 60'
                stroke='#3b82f6'
                strokeWidth='0.5'
                opacity='0.2'
              />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#legal-grid)' />
        </svg>

        {/* Градиенты */}
        <div className='absolute -top-40 -left-40 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-violet-500/3 rounded-full blur-3xl'></div>
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Заголовок */}
        <div
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8'>
            <ScaleIcon className='h-5 w-5 text-emerald-400' />
            <span className='text-sm font-medium tracking-wider text-emerald-300 uppercase'>
              ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ
            </span>
          </div>

          <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tighter'>
            <span className='block'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-cyan-100'>
                ЮРИДИЧЕСКИЕ
              </span>
            </span>
            <span className='block mt-4'>
              <span className='relative'>
                <span className='absolute -inset-1 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 blur-xl rounded-full'></span>
                <span className='relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-white'>
                  РЕШЕНИЯ
                </span>
              </span>
            </span>
          </h1>

          <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light'>
            Комплексные правовые решения для бизнеса и частных лиц. От простых
            консультаций до сложных судебных споров.
          </p>
        </div>

        {/* Статистика */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {serviceStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className='relative group'>
                <div className='bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-emerald-500/30 transition-all duration-500 transform hover:scale-[1.02]'>
                  <div className='flex items-center space-x-4'>
                    <div className='p-3 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-lg'>
                      <Icon className='h-6 w-6 text-emerald-400' />
                    </div>
                    <div>
                      <div className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-1'>
                        {stat.number}
                      </div>
                      <div className='text-sm text-gray-400'>{stat.label}</div>
                    </div>
                  </div>
                  <div className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-3/4 transition-all duration-500'></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16'>
          {/* Левая колонка - 3D Юридическая сфера */}
          <div className='lg:col-span-2 relative h-[500px] lg:h-[600px]'>
            <div className='absolute inset-0 flex items-center justify-center'>
              {/* 3D Контейнер */}
              <div className='relative w-full h-full perspective-1000'>
                <div
                  className='absolute top-1/2 left-1/2 w-0 h-0'
                  style={{
                    transform: `translate(-50%, -50%) rotateX(${
                      rotation / 3
                    }deg) rotateY(${rotation}deg)`,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.1s linear',
                  }}
                >
                  {/* Центральная сфера - Весы правосудия */}
                  <div className='absolute -translate-x-1/2 -translate-y-1/2 w-32 h-32'>
                    <div className='relative w-full h-full'>
                      {/* Весы правосудия */}
                      <div className='absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 to-violet-500 rounded-full animate-pulse shadow-2xl shadow-emerald-500/30'>
                        <div className='absolute inset-4 bg-black/30 rounded-full backdrop-blur-sm flex items-center justify-center'>
                          <ScaleIcon className='h-12 w-12 text-white opacity-80' />
                        </div>
                      </div>

                      {/* Волны правового поля */}
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className='absolute inset-0 border border-emerald-500/30 rounded-full animate-ping'
                          style={{
                            animationDelay: `${i * 0.5}s`,
                            transform: `scale(${1 + i * 0.3})`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Вращающиеся юридические услуги */}
                  {legalServices.map(service => {
                    const isActive = service.id === activeService;
                    const Icon = service.icon;
                    const style = getPositionStyle(service, rotation);
                    const colorClass = getColorClass(service.color);

                    return (
                      <div
                        key={service.id}
                        className={`absolute w-0 h-0 transition-all duration-500 ${
                          isActive ? 'scale-125' : 'scale-100'
                        }`}
                        style={style}
                      >
                        <button
                          onClick={() => selectService(service.id)}
                          className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-500 ${
                            isActive
                              ? 'shadow-2xl shadow-emerald-500/50'
                              : 'shadow-lg shadow-gray-500/30'
                          }`}
                        >
                          {/* Юридическая сфера */}
                          <div
                            className={`relative w-24 h-24 ${
                              service.size === 'lg'
                                ? 'w-28 h-28'
                                : service.size === 'sm'
                                ? 'w-20 h-20'
                                : ''
                            }`}
                          >
                            {/* Основной элемент */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-500/10 border border-gray-500/30 rounded-full backdrop-blur-sm transition-all duration-500 ${
                                isActive ? 'scale-110' : ''
                              }`}
                            ></div>

                            {/* Частицы - символы закона */}
                            {Array.from({ length: service.particles }).map(
                              (_, i) => {
                                const angle =
                                  (i / service.particles) * 2 * Math.PI;
                                const distance = isActive ? 70 : 60;
                                const x = Math.cos(angle) * distance;
                                const y = Math.sin(angle) * distance;

                                return (
                                  <div
                                    key={i}
                                    className={`absolute w-2 h-2 bg-gradient-to-r ${getColorGradientClass(
                                      service.color
                                    )} ${getToColorGradientClass(
                                      service.color
                                    )} rounded-full transition-all duration-500`}
                                    style={{
                                      left: '50%',
                                      top: '50%',
                                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotation}deg)`,
                                      opacity: isActive ? 1 : 0.5,
                                    }}
                                  />
                                );
                              }
                            )}

                            {/* Иконка услуги */}
                            <div
                              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                                isActive ? 'scale-125' : ''
                              }`}
                            >
                              <Icon
                                className={`h-8 w-8 ${colorClass} group-hover:scale-110 transition-transform`}
                              />
                            </div>
                          </div>

                          {/* Подпись услуги */}
                          <div
                            className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 whitespace-nowrap transition-all duration-500 ${
                              isActive
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-2'
                            }`}
                          >
                            <div className='text-sm font-medium text-white bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-gray-800/50'>
                              {service.title}
                            </div>
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Центральная ось правосудия */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className='w-1 h-96 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent'></div>
                </div>
              </div>
            </div>

            {/* Элементы управления */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4'>
              <button
                onClick={togglePlay}
                className='p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-emerald-500/30 transition-all group'
              >
                {isPlaying ? (
                  <PauseIcon className='h-5 w-5 text-gray-400 group-hover:text-emerald-400' />
                ) : (
                  <PlayIcon className='h-5 w-5 text-gray-400 group-hover:text-emerald-400' />
                )}
              </button>

              <div className='flex space-x-2'>
                {legalServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => selectService(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeService
                        ? 'w-6 bg-gradient-to-r from-emerald-400 to-cyan-400'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка - Детали услуги */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 transform ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
          >
            {currentService && currentDetails && (
              <div className='bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-800/50 p-6 lg:p-8'>
                <div className='flex items-center space-x-3 mb-6'>
                  <div
                    className={`p-3 ${getBgColorClass(
                      currentService.color
                    )} border ${getBorderColorClass(
                      currentService.color
                    )} rounded-xl`}
                  >
                    {currentService.icon && (
                      <currentService.icon
                        className={`h-6 w-6 ${getColorClass(
                          currentService.color
                        )}`}
                      />
                    )}
                  </div>
                  <div>
                    <div className='text-sm text-gray-400 uppercase tracking-wider'>
                      АКТИВНАЯ УСЛУГА
                    </div>
                    <h3 className='text-2xl font-bold text-white'>
                      {currentDetails.title}
                    </h3>
                    <div
                      className={`text-sm ${getColorClass(
                        currentService.color
                      )}`}
                    >
                      {currentDetails.tagline}
                    </div>
                  </div>
                </div>

                <p className='text-gray-300 leading-relaxed mb-6'>
                  {currentDetails.description}
                </p>

                {/* Ключевые компетенции */}
                <div className='mb-6'>
                  <div className='text-sm text-gray-400 uppercase tracking-wider mb-3'>
                    КЛЮЧЕВЫЕ КОМПЕТЕНЦИИ
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {currentDetails.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-sm ${getBgColorClass(
                          currentService.color
                        )} border ${getBorderColorClass(
                          currentService.color
                        )} ${getColorClass(currentService.color)} rounded-lg`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Особенности услуги */}
                <div className='space-y-3 mb-6'>
                  <div className='text-sm text-gray-400 uppercase tracking-wider'>
                    ОСОБЕННОСТИ УСЛУГИ
                  </div>
                  {currentDetails.features.map((feature, index) => (
                    <div
                      key={index}
                      className='flex items-center text-gray-300'
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${getColorGradientClass(
                          currentService.color
                        )} ${getToColorGradientClass(
                          currentService.color
                        )} rounded-full mr-3`}
                      ></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Статистика услуги */}
                <div className='grid grid-cols-3 gap-4'>
                  {currentDetails.stats.map((stat, index) => (
                    <div key={index} className='text-center'>
                      <div
                        className={`text-2xl font-bold ${getColorClass(
                          currentService.color
                        )} mb-1`}
                      >
                        {stat.value}
                      </div>
                      <div className='text-xs text-gray-400'>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA - Консультация */}
            <button
              onClick={() => scrollToSection('contact')}
              className='w-full group relative bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 font-semibold py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/25'
            >
              <div className='absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500'></div>
              <span className='relative flex items-center justify-center space-x-2'>
                <RocketLaunchIcon className='h-5 w-5' />
                <span>Получить консультацию</span>
                <ArrowRightIcon className='h-5 w-5 group-hover:translate-x-1 transition-transform' />
              </span>
            </button>

            {/* Дополнительная информация */}
            <div className='bg-gradient-to-b from-gray-900/30 to-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-4'>
              <div className='flex items-center justify-between text-sm'>
                <div className='text-gray-400'>Работаем 24/7</div>
                <div className='flex items-center space-x-1'>
                  <ShieldCheckIcon className='h-4 w-4 text-emerald-400' />
                  <span className='text-emerald-400'>Конфиденциально</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Преимущества работы с нами */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 lg:mt-24 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {[
            {
              icon: BoltIcon,
              title: 'Скорость',
              desc: 'Срочные консультации за 1 час',
              color: 'emerald',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Гарантия',
              desc: 'Фиксированная стоимость услуг',
              color: 'cyan',
            },
            {
              icon: ChartBarSquareIcon,
              title: 'Опыт',
              desc: '15+ лет на юридическом рынке',
              color: 'violet',
            },
            {
              icon: ArrowPathIcon,
              title: 'Подход',
              desc: 'Индивидуальная стратегия для каждого клиента',
              color: 'amber',
            },
          ].map((item, index) => {
            const Icon = item.icon;
            const colorClass = getColorClass(item.color);
            const bgClass = getBgColorClass(item.color);
            const borderClass = getBorderColorClass(item.color);
            const gradientFrom = getColorGradientClass(item.color);
            const gradientTo = getToColorGradientClass(item.color);

            return (
              <div
                key={index}
                className='bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 hover:border-emerald-500/30 transition-all duration-300 group'
              >
                <div
                  className={`p-3 ${bgClass} border ${borderClass} rounded-lg mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`h-6 w-6 ${colorClass}`} />
                </div>
                <div className='text-lg font-semibold text-white mb-2'>
                  {item.title}
                </div>
                <div className='text-sm text-gray-400'>{item.desc}</div>
                <div
                  className={`mt-4 w-0 h-0.5 bg-gradient-to-r ${gradientFrom} ${gradientTo} group-hover:w-full transition-all duration-500`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Финальный CTA */}
        <div
          className={`text-center mt-16 lg:mt-24 transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className='inline-flex items-center space-x-6 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 border border-gray-800/50 rounded-2xl px-8 py-6 backdrop-blur-sm'>
            <ScaleIcon className='h-8 w-8 text-emerald-400' />
            <div className='text-left'>
              <div className='text-xl font-bold text-white mb-1'>
                Нужна юридическая помощь?
              </div>
              <div className='text-sm text-gray-400'>
                Получите бесплатную первичную консультацию от наших экспертов
              </div>
            </div>
            <button className='ml-4 px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 rounded-xl font-medium transition-all duration-300 transform hover:scale-105'>
              Записаться на консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Добавляем CSS для 3D перспективы
const styles = `
  .perspective-1000 {
    perspective: 1000px;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  .animate-ping {
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
`;

export default function ServicesWithStyles() {
  return (
    <>
      <style>{styles}</style>
      <Services />
    </>
  );
}
