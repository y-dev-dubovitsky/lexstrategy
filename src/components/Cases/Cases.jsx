// components/Cases.jsx
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  ArrowUpRightIcon,
  BoltIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  CubeIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  SparklesIcon,
  LightBulbIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from 'react';

const Cases = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCase, setHoveredCase] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const sectionRef = useRef(null);

  const cases = [
    { 
      id: 1, 
      title: "Архитектура правовой трансформации", 
      result: "Системная оптимизация 25 млн ₽", 
      client: "«СтройИнвест Холдинг»",
      shortDescription: "Цифровая трансформация правовой функции девелоперского гиганта",
      duration: "6 месяцев",
      complexity: "High",
      category: "Digital Transformation",
      impact: "3.2x ROI",
      icon: CubeIcon,
      color: "emerald",
      tags: ["Automation", "Risk Mitigation", "Scalability"],
      gradient: "from-emerald-500 to-cyan-500",
      metrics: [
        { label: "Efficiency", value: "+240%" },
        { label: "Risk", value: "-92%" },
        { label: "Scalability", value: "3x" }
      ]
    },
    { 
      id: 2, 
      title: "Реинжиниринг налоговой экосистемы", 
      result: "Стратегическая защита 12 млн ₽", 
      client: "«ТехноСити Групп»",
      shortDescription: "Создание адаптивной налоговой архитектуры для IT-компании",
      duration: "8 месяцев",
      complexity: "Medium-High",
      category: "Tax Innovation",
      impact: "18% annual saving",
      icon: ChartBarIcon,
      color: "cyan",
      tags: ["Tax Tech", "Compliance AI", "Predictive Analytics"],
      gradient: "from-cyan-500 to-blue-500",
      metrics: [
        { label: "Automation", value: "85%" },
        { label: "Compliance", value: "100%" },
        { label: "Efficiency", value: "+150%" }
      ]
    },
    { 
      id: 3, 
      title: "Стратегическое поглощение нового поколения", 
      result: "Бесшовная интеграция +40%", 
      client: "«ПромМаш Холдинг»",
      shortDescription: "AI-powered due diligence и пост-мержер интеграция",
      duration: "4 месяца",
      complexity: "Very High",
      category: "M&A Innovation",
      impact: "2.1x synergy",
      icon: ShieldCheckIcon,
      color: "violet",
      tags: ["AI Due Diligence", "Integration Strategy", "Growth Architecture"],
      gradient: "from-violet-500 to-purple-500",
      metrics: [
        { label: "Speed", value: "+30%" },
        { label: "Synergy", value: "2.1x" },
        { label: "Growth", value: "+40%" }
      ]
    },
    { 
      id: 4, 
      title: "Киберправовая защита финтеха", 
      result: "Zero incidents за 12 месяцев", 
      client: "FinTech Startup",
      shortDescription: "Построение resilience-архитектуры для цифровых активов",
      duration: "3 месяца",
      complexity: "High",
      category: "Cybersecurity Law",
      impact: "100% compliance",
      icon: ShieldCheckIcon,
      color: "amber",
      tags: ["Blockchain", "Cybersecurity", "RegTech"],
      gradient: "from-amber-500 to-orange-500",
      metrics: [
        { label: "Security", value: "100%" },
        { label: "Compliance", value: "100%" },
        { label: "Uptime", value: "99.99%" }
      ]
    },
    { 
      id: 5, 
      title: "Глобальная экспансия SaaS", 
      result: "Быстрый выход в 8 стран", 
      client: "SaaS Platform",
      shortDescription: "Международная правовая архитектура для быстрого scaling",
      duration: "5 месяцев",
      complexity: "High",
      category: "Global Expansion",
      impact: "3x market reach",
      icon: BoltIcon,
      color: "blue",
      tags: ["International Law", "Scaling", "Market Entry"],
      gradient: "from-blue-500 to-indigo-500",
      metrics: [
        { label: "Markets", value: "8 countries" },
        { label: "Speed", value: "2x faster" },
        { label: "Compliance", value: "100%" }
      ]
    },
    { 
      id: 6, 
      title: "Интеллектуальная собственность 2.0", 
      result: "Портфель из 50+ IP активов", 
      client: "DeepTech Venture",
      shortDescription: "Стратегия защиты и монетизации технологических инноваций",
      duration: "7 месяцев",
      complexity: "Medium",
      category: "IP Strategy",
      impact: "10x valuation increase",
      icon: LightBulbIcon,
      color: "pink",
      tags: ["AI Patents", "IP Monetization", "Tech Valuation"],
      gradient: "from-pink-500 to-rose-500",
      metrics: [
        { label: "IP Assets", value: "50+" },
        { label: "Valuation", value: "10x" },
        { label: "Protection", value: "Global" }
      ]
    },
  ];

  const filters = [
    { id: 'all', label: 'Все проекты', count: 6 },
    { id: 'digital', label: 'Digital Transformation', count: 2 },
    { id: 'tax', label: 'Tax Innovation', count: 1 },
    { id: 'ma', label: 'M&A', count: 1 },
    { id: 'cyber', label: 'Cybersecurity', count: 1 },
    { id: 'global', label: 'Global Expansion', count: 1 }
  ];

  const stats = [
    { number: "300+", label: "Стратегических проектов", trend: "+12% YoY" },
    { number: "95%", label: "Результативности", trend: "Above target" },
    { number: "8 лет", label: "Глубокой экспертизы", trend: "в 12 странах" },
    { number: "100%", label: "Конфиденциальности", trend: "Zero breaches" }
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredCases = cases.filter(caseItem => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'digital') return caseItem.category.includes('Digital');
    if (activeFilter === 'tax') return caseItem.category.includes('Tax');
    if (activeFilter === 'ma') return caseItem.category.includes('M&A');
    if (activeFilter === 'cyber') return caseItem.category.includes('Cybersecurity');
    if (activeFilter === 'global') return caseItem.category.includes('Global');
    return true;
  });

  return (
    <section ref={sectionRef} id="cases" className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Геометрический фон */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.2" />
            </pattern>
            <linearGradient id="section-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          <rect width="100%" height="100%" fill="url(#section-gradient)" />
        </svg>
      </div>

      {/* Анимированные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-emerald-500/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-cyan-500/10 rotate-45 animate-spin-slower"></div>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animation: `float ${4 + i}s ease-in-out infinite ${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className={`text-center mb-12 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-5 py-2 mb-6">
            <DocumentTextIcon className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium tracking-wider text-emerald-300">
              ТРАНСФОРМАЦИОННЫЕ КЕЙСЫ
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-cyan-100">
                Архитектура
              </span>
            </span>
            <span className="block mt-2">
              <span className="relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 blur-xl rounded-full"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-white">
                  успешных решений
                </span>
              </span>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Реальные примеры как мы превращаем сложные бизнес-вызовы в стратегические преимущества
          </p>
        </div>

        {/* Статистика */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 lg:mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 lg:p-6 transition-all duration-300 group-hover:border-gray-700/80">
                <div className="text-2xl lg:text-3xl font-bold mb-1 bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300 mb-1">{stat.label}</div>
                <div className="text-xs text-emerald-400 font-medium">{stat.trend}</div>
                
                {/* Индикатор тренда */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Фильтры и управление */}
        <div className={`mb-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <CursorArrowRaysIcon className="h-5 w-5 text-cyan-400" />
              <span className="text-sm text-gray-400">Категории трансформации</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-gray-800/50 text-emerald-400' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <div className="grid grid-cols-2 gap-1 w-5 h-5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`rounded-sm ${viewMode === 'grid' ? 'bg-emerald-400' : 'bg-gray-600'}`}></div>
                  ))}
                </div>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-gray-800/50 text-emerald-400' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <div className="space-y-1 w-5 h-5">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={`h-1 rounded-full ${viewMode === 'list' ? 'bg-emerald-400' : 'bg-gray-600'}`}></div>
                  ))}
                </div>
              </button>
            </div>
          </div>

          {/* Фильтры */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-gray-400 hover:text-gray-300 border border-gray-800/50 hover:border-gray-700/80'
                }`}
              >
                <span className="relative z-10">{filter.label}</span>
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                  activeFilter === filter.id
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : 'bg-gray-800/50 text-gray-500'
                }`}>
                  {filter.count}
                </span>
                {activeFilter === filter.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка кейсов */}
        <div className={`grid grid-cols-1 ${viewMode === 'grid' ? 'lg:grid-cols-3' : 'lg:grid-cols-1'} gap-6 lg:gap-8 mb-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {filteredCases.map((caseItem, index) => (
            <div 
              key={caseItem.id}
              className="group relative"
              onMouseEnter={() => setHoveredCase(caseItem.id)}
              onMouseLeave={() => setHoveredCase(null)}
            >
              <Link 
                to={`/cases/${caseItem.id}`}
                className={`block relative bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden transition-all duration-500 ${
                  viewMode === 'grid' ? 'h-full' : ''
                } ${hoveredCase === caseItem.id ? 'border-emerald-500/30 scale-[1.02]' : 'hover:border-gray-700/80'}`}
              >
                {/* Градиентный акцент */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${caseItem.gradient} opacity-80`}></div>

                <div className={`relative ${viewMode === 'grid' ? 'p-6' : 'p-8'} ${viewMode === 'list' ? 'flex items-start gap-6' : ''}`}>
                  {/* Иконка и метки */}
                  <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'} flex items-start justify-between`}>
                    <div className={`${viewMode === 'grid' ? 'w-12 h-12' : 'w-14 h-14'} bg-gradient-to-br from-${caseItem.color}-500/10 to-${caseItem.color}-500/5 border border-${caseItem.color}-500/20 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                      <caseItem.icon className={`${viewMode === 'grid' ? 'h-6 w-6' : 'h-7 w-7'} text-${caseItem.color}-400`} />
                    </div>
                    
                    {viewMode === 'grid' && (
                      <div className="text-xs text-gray-500 px-2 py-1 bg-gray-800/50 rounded-full border border-gray-700/50">
                        {caseItem.complexity}
                      </div>
                    )}
                  </div>

                  {/* Контент */}
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    {/* Клиент и категория */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs text-emerald-400 font-medium px-2 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                        {caseItem.client}
                      </span>
                      <span className="text-xs text-gray-400 px-2 py-1 bg-gray-800/50 rounded-full">
                        {caseItem.category}
                      </span>
                      {viewMode === 'list' && (
                        <span className="text-xs text-gray-500 px-2 py-1 bg-gray-800/50 rounded-full border border-gray-700/50 ml-auto">
                          {caseItem.duration}
                        </span>
                      )}
                    </div>

                    {/* Заголовок */}
                    <h3 className={`${viewMode === 'grid' ? 'text-lg' : 'text-xl'} font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors leading-tight`}>
                      {caseItem.title}
                    </h3>

                    {/* Описание */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {caseItem.shortDescription}
                    </p>

                    {/* Теги */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseItem.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs text-gray-500 px-2 py-1 bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-gray-700/80 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Детали */}
                    <div className={`${viewMode === 'grid' ? 'space-y-3' : 'flex items-center gap-6'}`}>
                      {/* Результат */}
                      <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <div className="text-sm text-gray-400 mb-1">Стратегический результат</div>
                        <div className="text-lg font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                          {caseItem.result}
                        </div>
                        <div className="text-xs text-emerald-400 font-medium mt-1">{caseItem.impact}</div>
                      </div>

                      {/* Метрики */}
                      <div className={`${viewMode === 'list' ? 'flex-1' : ''} grid ${viewMode === 'grid' ? 'grid-cols-3' : 'grid-cols-3'} gap-2`}>
                        {caseItem.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <div className="text-sm font-semibold text-white">{metric.value}</div>
                            <div className="text-xs text-gray-400">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Кнопка для list view */}
                      {viewMode === 'list' && (
                        <div className="flex-shrink-0">
                          <div className="flex items-center text-emerald-400 group-hover:text-emerald-300 transition-colors">
                            <span className="text-sm font-medium mr-2">Исследовать</span>
                            <ArrowUpRightIcon className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Кнопка для grid view */}
                  {viewMode === 'grid' && (
                    <div className="absolute bottom-6 right-6">
                      <div className="flex items-center text-emerald-400 group-hover:text-emerald-300 transition-colors">
                        <span className="text-sm font-medium mr-2">Исследовать</span>
                        <ArrowUpRightIcon className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  )}

                  {/* Hover эффект */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-${caseItem.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                </div>
              </Link>

              {/* Анимированный фон при hover */}
              {hoveredCase === caseItem.id && (
                <div className={`absolute inset-0 bg-gradient-to-r from-${caseItem.color}-500/10 to-${caseItem.color}-300/10 blur-xl rounded-2xl -z-10 opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA секция */}
        <div className={`relative transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 rounded-3xl blur-2xl opacity-0 lg:opacity-30"></div>
          
          <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-gray-800/50 overflow-hidden">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-5 py-2 mb-6">
                <SparklesIcon className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-medium tracking-wider text-emerald-300">
                  ГОТОВЫ К ТРАНСФОРМАЦИИ?
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Разработаем архитектуру для вашего роста
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Обсудим ваши вызовы и создадим стратегию трансформации, основанную на реальном опыте
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/#contact"
                  className="group relative bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 font-medium py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <span className="relative flex items-center justify-center space-x-2">
                    <CursorArrowRaysIcon className="h-5 w-5" />
                    <span>Начать стратегическую сессию</span>
                  </span>
                </Link>
                
                <button className="group relative border border-gray-700 hover:border-emerald-500/50 text-white hover:text-emerald-100 font-medium py-4 px-8 rounded-xl transition-all duration-500 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                  <span className="relative flex items-center justify-center space-x-2">
                    <BoltIcon className="h-5 w-5" />
                    <span>Смотреть все кейсы</span>
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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

export default Cases; 