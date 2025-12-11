// components/Contact.jsx
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  ClockIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    challenge: '',
    timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('consultation');
  const [mapZoom, setMapZoom] = useState(14);
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);

  const contactMethods = [
    {
      type: 'call',
      title: 'Прямой звонок',
      value: '+7 (495) 123-45-67',
      action: 'Позвонить сейчас',
      icon: PhoneIcon,
      color: 'emerald',
      available: '24/7',
    },
    {
      type: 'email',
      title: 'Стратегическая почта',
      value: 'strategy@lexstrategic.ru',
      action: 'Написать письмо',
      icon: EnvelopeIcon,
      color: 'cyan',
      response: '2-4 часа',
    },
    {
      type: 'visit',
      title: 'Офис трансформации',
      value: 'Москва, Цифровой проспект, д. 8, Бизнес-хаб "Innovation"',
      action: 'Посмотреть на карте',
      icon: BuildingOfficeIcon,
      color: 'violet',
      hours: '9:00-21:00',
    },
  ];

  const consultationTypes = [
    { id: 'consultation', label: 'Стратегическая сессия', duration: '60 мин' },
    { id: 'audit', label: 'Экспресс-аудит', duration: '30 мин' },
    { id: 'workshop', label: 'Воркшоп', duration: '90 мин' },
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Срочно (в течение 24 часов)' },
    { value: 'week', label: 'На этой неделе' },
    { value: 'month', label: 'В этом месяце' },
    { value: 'planning', label: 'Планирование на квартал' },
  ];

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки данных
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Сброс формы через 5 секунд
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        challenge: '',
        timeline: '',
      });
    }, 5000);
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 1, 20));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 1, 8));
  };

  const toggleFullscreen = () => {
    setIsMapFullscreen(!isMapFullscreen);
  };

  // Закрытие полноэкранного режима по Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isMapFullscreen) {
        setIsMapFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isMapFullscreen]);

  return (
    <section
      id='contact'
      className='py-20 lg:py-32 bg-black relative overflow-hidden'
    >
      {/* Геометрический фон */}
      <div className='absolute inset-0 opacity-30'>
        <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <pattern
              id='contact-grid'
              width='80'
              height='80'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M 80 0 L 0 0 0 80'
                fill='none'
                stroke='#10b981'
                strokeWidth='0.5'
                opacity='0.2'
              />
            </pattern>
            <radialGradient id='contact-gradient' cx='50%' cy='50%' r='50%'>
              <stop offset='0%' stopColor='#10b981' stopOpacity='0.1' />
              <stop offset='100%' stopColor='#000000' stopOpacity='0' />
            </radialGradient>
          </defs>
          <rect width='100%' height='100%' fill='url(#contact-grid)' />
          <circle cx='50%' cy='50%' r='40%' fill='url(#contact-gradient)' />
        </svg>
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Заголовок */}
        <div className='text-center mb-12 lg:mb-20'>
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-5 py-2 mb-6'>
            <ChatBubbleLeftRightIcon className='h-4 w-4 text-emerald-400' />
            <span className='text-sm font-medium tracking-wider text-emerald-300'>
              СТРАТЕГИЧЕСКАЯ СВЯЗЬ
            </span>
          </div>

          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight'>
            <span className='block'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-cyan-100'>
                Начните свою
              </span>
            </span>
            <span className='block mt-2'>
              <span className='relative'>
                <span className='absolute -inset-1 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 blur-xl rounded-full'></span>
                <span className='relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-white'>
                  трансформацию сегодня
                </span>
              </span>
            </span>
          </h2>

          <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light'>
            Опишите ваш вызов — мы построим архитектуру решения
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
          {/* Левая колонка - Форма и контакты (40% ширины) */}
          <div className='lg:col-span-5 space-y-8'>
            {/* Типы консультаций */}
            <div className='bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='p-2 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-lg'>
                  <ClockIcon className='h-6 w-6 text-emerald-400' />
                </div>
                <div>
                  <div className='text-sm text-gray-400 uppercase tracking-wider'>
                    Формат работы
                  </div>
                  <h3 className='text-xl font-bold text-white'>
                    Выберите тип сессии
                  </h3>
                </div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
                {consultationTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setActiveTab(type.id)}
                    className={`group relative p-4 rounded-xl border transition-all duration-300 ${
                      activeTab === type.id
                        ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-500/30'
                        : 'border-gray-800/50 hover:border-gray-700/80'
                    }`}
                  >
                    <div className='text-left'>
                      <div
                        className={`text-sm font-medium mb-1 ${
                          activeTab === type.id ? 'text-white' : 'text-gray-300'
                        }`}
                      >
                        {type.label}
                      </div>
                      <div className='text-xs text-emerald-400'>
                        {type.duration}
                      </div>
                    </div>
                    {activeTab === type.id && (
                      <div className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full'></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Форма */}
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50'>
                {isSubmitted ? (
                  <div className='text-center py-8'>
                    <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 rounded-full mb-4'>
                      <CheckCircleIcon className='h-8 w-8 text-emerald-400' />
                    </div>
                    <h3 className='text-2xl font-bold text-white mb-2'>
                      Заявка отправлена!
                    </h3>
                    <p className='text-gray-300 mb-4'>
                      Мы свяжемся с вами в течение 15 минут
                    </p>
                    <div className='text-sm text-emerald-400 animate-pulse'>
                      Готовим стратегические материалы для нашей встречи...
                    </div>
                  </div>
                ) : (
                  <>
                    <div className='grid grid-cols-1 gap-4'>
                      <div>
                        <label className='block text-sm text-gray-400 mb-2 uppercase tracking-wider'>
                          Имя
                        </label>
                        <input
                          type='text'
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className='w-full px-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-xl focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 outline-none transition-all text-white placeholder-gray-500'
                          placeholder='Александр Петров'
                        />
                      </div>

                      <div>
                        <label className='block text-sm text-gray-400 mb-2 uppercase tracking-wider'>
                          Компания
                        </label>
                        <input
                          type='text'
                          name='company'
                          value={formData.company}
                          onChange={handleChange}
                          className='w-full px-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500'
                          placeholder='Название компании'
                        />
                      </div>

                      <div>
                        <label className='block text-sm text-gray-400 mb-2 uppercase tracking-wider'>
                          Email
                        </label>
                        <input
                          type='email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className='w-full px-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500'
                          placeholder='strategy@company.ru'
                        />
                      </div>

                      <div>
                        <label className='block text-sm text-gray-400 mb-2 uppercase tracking-wider'>
                          Телефон
                        </label>
                        <input
                          type='tel'
                          name='phone'
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className='w-full px-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-xl focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 outline-none transition-all text-white placeholder-gray-500'
                          placeholder='+7 (900) 123-45-67'
                        />
                      </div>
                    </div>

                    <div className='mt-4'>
                      <label className='block text-sm text-gray-400 mb-2 uppercase tracking-wider'>
                        Опишите ваш вызов
                      </label>
                      <textarea
                        name='challenge'
                        value={formData.challenge}
                        onChange={handleChange}
                        rows='4'
                        className='w-full px-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-xl focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 outline-none transition-all text-white placeholder-gray-500 resize-none'
                        placeholder='Какой бизнес-вызов вы хотите решить? Что мешает вашему росту?'
                      ></textarea>
                    </div>

                    <div className='mt-4'>
                      <label className='block text-sm text-gray-400 mb-2 uppercase tracking-wider'>
                        Тайминг решения
                      </label>
                      <select
                        name='timeline'
                        value={formData.timeline}
                        onChange={handleChange}
                        className='w-full px-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-xl focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 outline-none transition-all text-white'
                      >
                        <option value=''>Выберите сроки</option>
                        {timelineOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className={`group relative w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 font-medium py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/25 mt-6 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      <div className='absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500'></div>
                      <span className='relative flex items-center justify-center space-x-2'>
                        {isSubmitting ? (
                          <>
                            <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                            <span>Отправляем...</span>
                          </>
                        ) : (
                          <>
                            <PaperAirplaneIcon className='h-5 w-5' />
                            <span>Начать трансформацию</span>
                            <ArrowRightIcon className='h-5 w-5 group-hover:translate-x-1 transition-transform' />
                          </>
                        )}
                      </span>
                    </button>
                  </>
                )}
              </div>

              <div className='text-center text-sm text-gray-500'>
                Нажимая кнопку, вы соглашаетесь с нашей политикой
                конфиденциальности
              </div>
            </form>
          </div>

          {/* Правая колонка - Карта и информация (60% ширины) */}
          <div className='lg:col-span-7 space-y-8'>
            {/* Увеличенная карта */}
            <div className={`relative ${isMapFullscreen ? 'fixed inset-0 z-50' : ''}`}>
              <div className={`bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden ${isMapFullscreen ? 'h-screen' : ''}`}>
                <div className='p-6'>
                  <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center space-x-3'>
                      <div className='p-2 bg-gradient-to-br from-violet-500/10 to-violet-500/5 border border-violet-500/20 rounded-lg'>
                        <GlobeAltIcon className='h-6 w-6 text-violet-400' />
                      </div>
                      <div>
                        <div className='text-sm text-gray-400 uppercase tracking-wider'>
                          Наше расположение
                        </div>
                        <h3 className='text-2xl font-bold text-white'>
                          Цифровой хаб трансформаций
                        </h3>
                      </div>
                    </div>

                    {/* Элементы управления картой */}
                    <div className='flex items-center space-x-2'>
                      <button
                        onClick={handleZoomOut}
                        className='p-2 bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800/50 rounded-lg transition-colors group'
                        title='Уменьшить'
                      >
                        <MagnifyingGlassMinusIcon className='h-5 w-5 text-gray-400 group-hover:text-white' />
                      </button>
                      <button
                        onClick={handleZoomIn}
                        className='p-2 bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800/50 rounded-lg transition-colors group'
                        title='Увеличить'
                      >
                        <MagnifyingGlassPlusIcon className='h-5 w-5 text-gray-400 group-hover:text-white' />
                      </button>
                      <button
                        onClick={toggleFullscreen}
                        className='p-2 bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800/50 rounded-lg transition-colors group'
                        title={isMapFullscreen ? 'Выйти из полноэкранного режима' : 'Полноэкранный режим'}
                      >
                        <ArrowsPointingOutIcon className='h-5 w-5 text-gray-400 group-hover:text-white' />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Карта */}
                <div className={`relative ${isMapFullscreen ? 'h-[calc(100vh-120px)]' : 'h-[500px] lg:h-[600px]'}`}>
                  <iframe
                    src={`https://yandex.ru/map-widget/v1/?ll=37.617644%2C55.755819`}
                    width='100%'
                    height='100%'
                    allowFullScreen
                    style={{ border: 0 }}
                    title='Карта офиса'
                    className='rounded-b-2xl'
                  />
                  
                  {/* Легенда на карте */}
                  <div className='absolute bottom-6 left-6 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50 max-w-[280px] shadow-2xl'>
                    <div className='flex items-start space-x-3'>
                      <div className='flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center'>
                        <BuildingOfficeIcon className='h-5 w-5 text-white' />
                      </div>
                      <div>
                        <div className='text-xs text-emerald-400 uppercase tracking-wider font-medium mb-1'>
                          Наш хаб
                        </div>
                        <div className='text-white font-semibold mb-1'>
                          Innovation Business Hub
                        </div>
                        <div className='text-sm text-gray-300'>Цифровой проспект, 8</div>
                      </div>
                    </div>
                  </div>

                  {/* Элемент масштабирования */}
                  <div className='absolute bottom-6 right-6'>
                    <div className='bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-800/50'>
                      <div className='text-sm text-gray-300'>
                        Масштаб: <span className='text-white font-semibold'>{mapZoom}x</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Оверлей для полноэкранного режима */}
              {isMapFullscreen && (
                <div className='absolute top-6 right-6'>
                  <button
                    onClick={toggleFullscreen}
                    className='p-3 bg-gray-900/90 hover:bg-gray-800/90 backdrop-blur-sm border border-gray-800/50 rounded-xl transition-all group'
                  >
                    <div className='flex items-center space-x-2'>
                      <ArrowRightIcon className='h-5 w-5 text-gray-400 group-hover:text-white rotate-180' />
                      <span className='text-sm font-medium text-gray-300 group-hover:text-white'>
                        Закрыть
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Дополнительная информация под картой */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              <div className='bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50'>
                <div className='text-sm text-gray-400 uppercase tracking-wider mb-2'>
                  Как добраться
                </div>
                <div className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-300'>Метро</span>
                    <span className='text-emerald-400 font-medium'>Охотный ряд</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-300'>Парковка</span>
                    <span className='text-cyan-400 font-medium'>Подземная</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-300'>Wi-Fi</span>
                    <span className='text-violet-400 font-medium'>10 Gbps</span>
                  </div>
                </div>
              </div>

              <div className='bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50'>
                <div className='text-sm text-gray-400 uppercase tracking-wider mb-2'>
                  Часы работы
                </div>
                <div className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-300'>Пн-Пт</span>
                    <span className='text-white font-medium'>9:00-21:00</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-300'>Сб-Вс</span>
                    <span className='text-white font-medium'>10:00-18:00</span>
                  </div>
                </div>
              </div>

              <div className='bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50'>
                <div className='text-sm text-gray-400 uppercase tracking-wider mb-2'>
                  Контакты
                </div>
                <div className='space-y-2'>
                  <div className='text-white font-medium hover:text-emerald-400 transition-colors cursor-pointer'>
                    +7 (495) 123-45-67
                  </div>
                  <div className='text-cyan-300 text-sm hover:text-cyan-400 transition-colors cursor-pointer truncate'>
                    strategy@lexstrategic.ru
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;