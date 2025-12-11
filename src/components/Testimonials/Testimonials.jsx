// components/Testimonials.jsx
import { useState, useEffect } from 'react';
import { 
  StarIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  TrophyIcon,
  BoltIcon,
  FireIcon,
  HeartIcon,
  UserGroupIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/solid';
import { 
  PlayIcon,
  PauseIcon 
} from '@heroicons/react/24/outline';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: 'Дмитрий Волков',
      position: 'Генеральный директор',
      company: 'ИТ-компания "ТехноСити"',
      text: 'Благодаря стратегическому видению команды Lex Strategic мы трансформировали нашу бизнес-модель и увеличили капитализацию на 300% за 18 месяцев. Инновационные решения вывели нас на новые рынки.',
      rating: 5,
      result: 'Капитализация +300%',
      icon: BoltIcon,
      color: 'emerald',
      duration: '18 месяцев'
    },
    {
      id: 2,
      name: 'Ольга Семенова',
      position: 'Основатель',
      company: 'Сеть ресторанов "Вкусно и Точка"',
      text: 'Команда построила нам франчайзинговую архитектуру, которая позволила масштабироваться с 5 до 45 точек за 2 года. Юридическая инфраструктура стала нашим конкурентным преимуществом.',
      rating: 5,
      result: 'Масштабирование 9x',
      icon: FireIcon,
      color: 'cyan',
      duration: '24 месяца'
    },
    {
      id: 3,
      name: 'Сергей Петров',
      position: 'Председатель правления',
      company: 'Строительная группа "ПроектСтрой"',
      text: 'Стратегическая сессия с Lex Strategic открыла новые векторы развития. Мы оптимизировали холдинговую структуру и вышли на международные рынки с уникальным продуктом.',
      rating: 5,
      result: 'Выход на 3 новых рынка',
      icon: TrophyIcon,
      color: 'violet',
      duration: '12 месяцев'
    },
    {
      id: 4,
      name: 'Александр Иванов',
      position: 'Инвестор',
      company: 'Венчурный фонд "Future Capital"',
      text: 'Lex Strategic — наши стратегические партнеры в due diligence. Их экспертиза позволила избежать рисков на $25M+ в портфельных сделках. Профессионализм экстра-класса.',
      rating: 5,
      result: 'Сэкономлено $25M+',
      icon: CheckBadgeIcon,
      color: 'amber',
      duration: '36 месяцев'
    },
  ];

  const stats = [
    { label: 'Довольных клиентов', value: '200+', color: 'emerald' },
    { label: 'Завершенных проектов', value: '500+', color: 'cyan' },
    { label: 'Средний рост клиента', value: '150%', color: 'violet' },
    { label: 'Экспертов в команде', value: '25+', color: 'amber' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Автоплей
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/3 rounded-full blur-3xl"></div>
        
        {/* Геометрическая сетка */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="testimonials-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonials-grid)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Заголовок с анимацией */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8">
            <SparklesIcon className="h-5 w-5 text-emerald-400 animate-pulse" />
            <span className="text-sm font-medium tracking-wider text-emerald-300 uppercase">
              РЕЗУЛЬТАТЫ ТРАНСФОРМАЦИЙ
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            <span className="block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-cyan-100">
                Истории успеха
              </span>
            </span>
            <span className="block mt-4">
              <span className="relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 blur-xl rounded-full"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-white">
                  клиентов Lex Strategic
                </span>
              </span>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Реальные кейсы трансформации бизнесов под стратегическим руководством нашей команды
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-24">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-emerald-500/30 transition-all duration-500 transform hover:scale-[1.02]">
                <div className={`text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-300 mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-300 group-hover:w-3/4 transition-all duration-500`}></div>
              </div>
              
              {/* Анимированный эффект при наведении */}
              <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Основная карусель */}
          <div className="relative">
            {/* Большая центральная карточка */}
            <div className="mb-12">
              <div 
                className="relative bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm rounded-3xl border border-gray-800/50 p-8 lg:p-12 overflow-hidden group transition-all duration-700 transform hover:scale-[1.005]"
                onMouseEnter={() => setHoveredCard(currentSlide)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Анимированный фон карточки */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-violet-500/5"></div>
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id={`card-gradient-${testimonials[currentSlide].id}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={`var(--color-${testimonials[currentSlide].color}-500)`} stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#card-gradient-${testimonials[currentSlide].id})`} />
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Верхняя часть с рейтингом и иконкой */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-8 gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 bg-gradient-to-br from-${testimonials[currentSlide].color}-500/10 to-${testimonials[currentSlide].color}-500/5 border border-${testimonials[currentSlide].color}-500/20 rounded-xl`}>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                            РЕЗУЛЬТАТ ПРОЕКТА
                          </div>
                          <div className={`text-2xl font-bold text-${testimonials[currentSlide].color}-400`}>
                            {testimonials[currentSlide].result}
                          </div>
                        </div>
                      </div>
                      
                      {/* Рейтинг */}
                      <div className="flex items-center gap-2">
                        {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                          <StarIcon key={i} className={`h-6 w-6 text-${testimonials[currentSlide].color}-400 animate-pulse`} style={{ animationDelay: `${i * 100}ms` }} />
                        ))}
                        <span className="ml-2 text-gray-400 text-sm">
                          ({testimonials[currentSlide].duration})
                        </span>
                      </div>
                    </div>

                    <div className="lg:text-right">
                      <div className="inline-flex items-center px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800/50">
                        <span className="text-sm text-gray-400 mr-2">Кейс</span>
                        <span className="text-white font-medium">#{String(testimonials[currentSlide].id).padStart(2, '0')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Текст отзыва */}
                  <blockquote className="relative mb-10">
                    <div className="absolute -left-4 top-0 text-6xl text-emerald-500/20 font-serif">"</div>
                    <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed pl-8 font-light italic">
                      {testimonials[currentSlide].text}
                    </p>
                    <div className="absolute -right-4 bottom-0 text-6xl text-cyan-500/20 font-serif transform rotate-180">"</div>
                  </blockquote>

                  {/* Информация о клиенте */}
                  <div className="flex items-center justify-between pt-8 border-t border-gray-800/50">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-gray-800/50 flex items-center justify-center">
                          <UserGroupIcon className="h-8 w-8 text-emerald-400" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center border-2 border-black">
                          <HeartIcon className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">
                          {testimonials[currentSlide].name}
                        </div>
                        <div className="text-gray-400">
                          {testimonials[currentSlide].position}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonials[currentSlide].company}
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:block">
                      <div className="text-right">
                        <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                          ОТРАСЛЬ
                        </div>
                        <div className="text-white font-medium">
                          {testimonials[currentSlide].company.split('"')[1] || testimonials[currentSlide].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Анимированные элементы по углам */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-emerald-500/20 rounded-tl-3xl"></div>
                <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-cyan-500/20 rounded-tr-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-violet-500/20 rounded-bl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-amber-500/20 rounded-br-3xl"></div>
              </div>
            </div>

            {/* Миниатюры */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => goToSlide(index)}
                  className={`relative group transition-all duration-500 ${
                    index === currentSlide ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`relative bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm rounded-xl border ${
                    index === currentSlide 
                      ? `border-${testimonial.color}-500/50` 
                      : 'border-gray-800/50 hover:border-gray-700/80'
                  } p-4 overflow-hidden transition-all duration-500`}>
                    {/* Акцентная полоса */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-${testimonial.color}-500 to-${testimonial.color}-300 transition-transform duration-500 ${
                      index === currentSlide ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                    }`}></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 bg-gradient-to-br from-${testimonial.color}-500/10 to-${testimonial.color}-500/5 border border-${testimonial.color}-500/20 rounded-lg`}>
                          <testimonial.icon className={`h-5 w-5 text-${testimonial.color}-400`} />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="text-sm font-medium text-white truncate">
                            {testimonial.name.split(' ')[0]}
                          </div>
                          <div className="text-xs text-gray-400 truncate">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-300 line-clamp-2 mb-2 text-left">
                        {testimonial.text.substring(0, 80)}...
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon key={i} className={`h-3 w-3 text-${testimonial.color}-400`} />
                          ))}
                        </div>
                        <div className={`text-xs font-medium text-${testimonial.color}-400`}>
                          {testimonial.result.split(' ')[0]}
                        </div>
                      </div>
                    </div>

                    {/* Эффект выбора */}
                    {index === currentSlide && (
                      <div className={`absolute inset-0 bg-gradient-to-r from-${testimonial.color}-500/5 to-transparent rounded-xl`}></div>
                    )}
                  </div>

                  {/* Анимированный индикатор выбора */}
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${testimonial.color}-500/20 to-${testimonial.color}-300/20 rounded-xl blur-md opacity-0 ${
                    index === currentSlide ? 'opacity-100 animate-pulse' : ''
                  } transition-opacity duration-500`}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Элементы управления */}
          <div className="flex items-center justify-center mt-12 space-x-6">
            <button 
              onClick={prevSlide}
              className="group p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-emerald-500/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-400 group-hover:text-emerald-400 transition-colors" />
            </button>
            
            <button 
              onClick={toggleAutoPlay}
              className="group p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-cyan-500/30 transition-all duration-300 hover:scale-110"
            >
              {isAutoPlaying ? (
                <PauseIcon className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              ) : (
                <PlayIcon className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              )}
            </button>

            <button 
              onClick={nextSlide}
              className="group p-3 bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-violet-500/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-400 group-hover:text-violet-400 transition-colors" />
            </button>
          </div>

          {/* Индикаторы прогресса */}
          <div className="mt-8">
            <div className="relative h-1 bg-gray-900/50 rounded-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 rounded-full transition-all duration-500"
                style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-500">
                Кейс {currentSlide + 1} из {testimonials.length}
              </span>
              <span className="text-sm text-emerald-400 font-medium">
                {testimonials[currentSlide].result}
              </span>
            </div>
          </div>
        </div>

        {/* CTA секция */}
        <div className="text-center mt-24">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 border border-gray-800/50 rounded-2xl px-8 py-6 backdrop-blur-sm">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-emerald-400" />
            <div className="text-left">
              <div className="text-lg font-bold text-white mb-1">
                Станьте следующим кейсом успеха
              </div>
              <div className="text-sm text-gray-400">
                Запланируйте стратегическую сессию и начните трансформацию
              </div>
            </div>
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
              Начать
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;