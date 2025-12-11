// components/About.jsx
import { 
  CubeIcon, 
  CursorArrowRaysIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowPathIcon,
  BoltIcon,
  SparklesIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from 'react';
import groupPhoto from '../../assets/123.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const sectionRef = useRef(null);

  const metrics = [
    { number: '300+', label: 'Стратегических проектов', change: '+12%', color: 'from-emerald-500 to-emerald-300' },
    { number: '8 лет', label: 'Глубокой экспертизы', change: 'в 12 странах', color: 'from-cyan-500 to-cyan-300' },
    { number: '95%', label: 'Результативности', change: 'сверх цели', color: 'from-violet-500 to-violet-300' },
    { number: '24/7', label: 'Доступность команды', change: 'средний ответ 15м', color: 'from-amber-500 to-amber-300' },
  ];

  const features = [
    {
      title: "Стратегическая аналитика",
      description: "Глубокий анализ бизнес-процессов и правовых рисков",
      icon: ChartBarIcon,
      color: 'emerald'
    },
    {
      title: "Системный подход",
      description: "Комплексные решения вместо точечных исправлений",
      icon: CubeIcon,
      color: 'cyan'
    },
    {
      title: "Технологическая экспертиза",
      description: "Правовое сопровождение цифровой трансформации",
      icon: CursorArrowRaysIcon,
      color: 'violet'
    },
    {
      title: "Проактивная защита",
      description: "Предупреждение рисков до их возникновения",
      icon: ShieldCheckIcon,
      color: 'amber'
    }
  ];

  const achievements = [
    { text: "Лидеры по сложным корпоративным сделкам в СНГ", year: "2023" },
    { text: "Трансформация юридических отделов для Fortune 500", year: "2022" },
    { text: "Пионеры в правовом сопровождении AI проектов", year: "2021" },
    { text: "Интеграция blockchain-решений в корпоративное право", year: "2020" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Геометрический фон */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-small" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="0.3" />
            </pattern>
            <radialGradient id="gradient-center" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-small)" />
          <circle cx="50%" cy="50%" r="40%" fill="url(#gradient-center)" />
        </svg>
      </div>

      {/* Анимированные элементы фона */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-emerald-500/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border border-cyan-500/10 rotate-45 animate-spin-slower"></div>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-emerald-500/20 via-cyan-500/20 to-transparent"
            style={{
              left: `${(i + 1) * 8.33}%`,
              animation: `scanVertical ${3 + i * 0.2}s ease-in-out infinite ${i * 0.1}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-16 lg:mb-24">
          <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-5 py-2 mb-6 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <CubeIcon className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium tracking-wider text-emerald-300">
              СТРАТЕГИЧЕСКИЙ ПОДХОД
            </span>
          </div>

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-cyan-100">
                Архитекторы
              </span>
            </span>
            <span className="block mt-2">
              <span className="relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 blur-xl rounded-full"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-white">
                  правовой трансформации
                </span>
              </span>
            </span>
          </h2>

          <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Мы не просто юристы. Мы — инженеры правовых решений, 
            которые строят фундамент для вашего устойчивого роста
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Левый блок - Текст и метрики */}
          <div>
            {/* Основной текст */}
            <div className={`space-y-6 mb-12 transition-all duration-1000 delay-600 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                В эпоху цифровой трансформации традиционные правовые решения перестают работать. 
                <span className="text-emerald-300 font-medium"> Мы создаем новую парадигму</span> — 
                где право становится не ограничением, а инструментом для инноваций и роста.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Наша команда объединяет <span className="text-cyan-300 font-medium">юридическую экспертизу</span> с 
                <span className="text-violet-300 font-medium"> технологическим мышлением</span>, 
                превращая сложные вызовы в конкурентные преимущества.
              </p>
            </div>

            {/* Анимированные метрики */}
            <div className={`mb-12 transition-all duration-1000 delay-800 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className={`relative group cursor-pointer transition-all duration-500 ${
                      currentMetric === index ? 'scale-105' : 'scale-100'
                    }`}
                    onMouseEnter={() => setCurrentMetric(index)}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${metric.color} rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500`}></div>
                    <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/30 border border-gray-800/50 rounded-xl p-5 backdrop-blur-sm transition-all duration-500 group-hover:border-gray-700/80">
                      <div className={`text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                        {metric.number}
                      </div>
                      <div className="text-sm text-gray-300 font-medium mb-1">{metric.label}</div>
                      <div className="text-xs text-gray-500">{metric.change}</div>
                      
                      {/* Активный индикатор */}
                      {currentMetric === index && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Прогресс индикатор */}
              <div className="flex justify-center mt-4 space-x-1">
                {metrics.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentMetric === index 
                        ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 scale-125' 
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                    onClick={() => setCurrentMetric(index)}
                  />
                ))}
              </div>
            </div>

            {/* Ключевые фичи */}
            <div className={`space-y-4 transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-300 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500`}></div>
                  <div className={`relative bg-gradient-to-b from-gray-900/30 to-gray-900/10 border ${
                    hoveredFeature === index ? `border-${feature.color}-500/30` : 'border-gray-800/50'
                  } rounded-xl p-5 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-2`}>
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br from-${feature.color}-500/10 to-${feature.color}-300/10 border border-${feature.color}-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className={`h-6 w-6 text-${feature.color}-400`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Правый блок - Фото и достижения */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Фото с эффектами */}
            <div className="relative group mb-12">
              <div className="absolute -inset-4">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition duration-700"></div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden border border-gray-800/50 backdrop-blur-sm transform group-hover:scale-[1.01] transition duration-700">
                <img 
                  src={groupPhoto}
                  alt="Команда стратегических архитекторов" 
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-1000"
                />
                
                {/* Наложение с информацией */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <UserGroupIcon className="h-5 w-5 text-emerald-400" />
                    <span className="text-sm font-medium text-emerald-300">СТРАТЕГИЧЕСКАЯ КОМАНДА</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">Эксперты будущего</h3>
                  <p className="text-gray-300 text-sm mb-4">Объединяем правовую экспертизу с технологическим видением</p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <BoltIcon className="h-4 w-4 mr-2" />
                    <span>Средний опыт эксперта: 12+ лет</span>
                  </div>
                </div>
              </div>

              {/* Плавающие элементы */}
              <div className="absolute -top-5 -right-5 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-5 transform group-hover:-rotate-6 transition duration-500 z-20">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 rounded-xl p-2">
                    <SparklesIcon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">Инновации</div>
                    <div className="text-xs text-gray-400">в каждом решении</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-5 transform group-hover:rotate-6 transition duration-500 z-20">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-violet-500/20 to-violet-500/10 border border-violet-500/30 rounded-xl p-2">
                    <LightBulbIcon className="h-5 w-5 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">Прозрачность</div>
                    <div className="text-xs text-gray-400">полная отчетность</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Достижения */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-gradient-to-b from-gray-900/30 to-gray-900/10 border border-gray-800/50 rounded-xl p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-700/80">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <p className="text-gray-300 text-sm group-hover:text-emerald-100 transition-colors">
                          {achievement.text}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 text-emerald-300 border border-emerald-500/20">
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA секция */}
        <div className={`mt-20 lg:mt-32 transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-gray-800/50 overflow-hidden">
              
              {/* Анимированный фон CTA */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
              </div>

              <div className="relative text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Готовы к трансформации?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Начните строить правовой фундамент для устойчивого роста уже сегодня
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 font-medium py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                    <span className="relative flex items-center justify-center space-x-2">
                      <ArrowPathIcon className="h-5 w-5" />
                      <span>Начать стратегическую сессию</span>
                    </span>
                  </button>
                  
                  <button className="group relative border border-gray-700 hover:border-emerald-500/50 text-white hover:text-emerald-100 font-medium py-4 px-8 rounded-xl transition-all duration-500 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                    <span className="relative flex items-center justify-center space-x-2">
                      <CursorArrowRaysIcon className="h-5 w-5" />
                      <span>Изучить кейсы трансформации</span>
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scanVertical {
          0%, 100% {
            opacity: 0.2;
            transform: translateY(-20px);
          }
          50% {
            opacity: 0.5;
            transform: translateY(20px);
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

        @keyframes spin-slower {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slower {
          animation: spin-slower 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;