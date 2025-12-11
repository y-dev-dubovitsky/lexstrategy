// components/CaseDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  CalendarIcon, 
  UserIcon, 
  BuildingOfficeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  BoltIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  ArrowUpRightIcon,
  CursorArrowRaysIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const CaseDetail = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('challenge');

  // Детальные данные кейсов
  const casesData = {
    1: {
      title: "Трансформация правовой архитектуры девелопера",
      client: "«СтройИнвест Холдинг»",
      result: "Оптимизация 25 млн ₽ + системные изменения",
      duration: "6 месяцев",
      year: "2024",
      metrics: [
        { label: "Снижение затрат", value: "25 млн ₽", change: "+35%" },
        { label: "Ускорение процессов", value: "2.4x", change: "быстрее" },
        { label: "Снижение рисков", value: "92%", change: "эффективность" }
      ],
      challenge: "Девелоперский холдинг сталкивался с каскадными исками от субподрядчиков, что парализовало новые проекты. Отсутствие системной документации и устаревшие процессы создавали ежегодные убытки в 40+ млн рублей.",
      solution: "Мы разработали и внедрили правовую операционную модель нового поколения: автоматизированный контракт-менеджмент, риск-ориентированную систему due diligence и переговорные протоколы на базе ИИ.",
      outcome: "Не только отстояли интересы по текущим искам (экономия 25 млн ₽), но и создали масштабируемую правовую экосистему. В результате холдинг смог запустить 3 новых проекта параллельно.",
      services: [
        { name: "Цифровая трансформация", icon: "💻" },
        { name: "Арбитражная стратегия", icon: "⚖️" },
        { name: "Операционная оптимизация", icon: "🔄" }
      ],
      team: [
        { name: "Анна Иванова", role: "Lead Architect", color: "emerald" },
        { name: "Петр Сидоров", role: "Tech Strategy", color: "cyan" }
      ],
      tags: ["Digital Transformation", "Risk Mitigation", "Scalability"],
      complexity: "Высокая",
      industry: "Real Estate & Construction"
    },
    2: {
      title: "Реинжиниринг налоговой экосистемы IT-компании",
      client: "«ТехноСити Групп»",
      result: "Стратегическая защита от 12 млн ₽",
      duration: "8 месяцев",
      year: "2023",
      metrics: [
        { label: "Защищенный капитал", value: "12 млн ₽", change: "полная защита" },
        { label: "Оптимизация налогов", value: "18%", change: "годовая экономия" },
        { label: "Процесс автоматизации", value: "85%", change: "охват" }
      ],
      challenge: "Технологическая компания получила налоговое доначисление на 15 млн ₽ после перехода на новые бизнес-модели. Устаревшая налоговая структура не соответствовала инновационной деятельности.",
      solution: "Создали адаптивную налоговую архитектуру, интегрированную с технологическим стэком компании. Внедрили систему мониторинга в реальном времени и предиктивную аналитику налоговых рисков.",
      outcome: "Полностью защитили капитал от доначислений, оптимизировали налоговую нагрузку на 18% ежегодно. Компания получила конкурентное преимущество на рынке.",
      services: [
        { name: "Tax Technology", icon: "🧮" },
        { name: "Compliance Automation", icon: "🤖" },
        { name: "Strategic Defense", icon: "🛡️" }
      ],
      team: [
        { name: "Петр Сидоров", role: "Tax Innovation Lead", color: "cyan" },
        { name: "Мария Козлова", role: "Compliance Architect", color: "violet" }
      ],
      tags: ["Tax Tech", "Compliance 4.0", "Predictive Analytics"],
      complexity: "Средняя",
      industry: "Technology & SaaS"
    },
    3: {
      title: "Архитектура стратегического поглощения",
      client: "«ПромМаш Холдинг»",
      result: "Бесшовная интеграция + рост 40%",
      duration: "4 месяца",
      year: "2024",
      metrics: [
        { label: "Рост капитализации", value: "40%", change: "post-acquisition" },
        { label: "Срок интеграции", value: "30 дней", change: "вместо 90" },
        { label: "Синергетический эффект", value: "2.1x", change: "ожиданий" }
      ],
      challenge: "Производственный гигант планировал поглотить технологического конкурента, но сделка блокировалась скрытыми обязательствами, IP-рисками и культурными различиями.",
      solution: "Разработали multi-layer структуру сделки с динамическими эскроу-счетами и AI-powered due diligence. Создали roadmap поэтапной интеграции с risk-adjusted механиками.",
      outcome: "Сделка закрыта на 30% быстрее плана. Post-merger интеграция создала синергию в 2.1x превышающую ожидания. Холдинг укрепил лидерство на рынке.",
      services: [
        { name: "M&A Architecture", icon: "🏢" },
        { name: "AI Due Diligence", icon: "🤝" },
        { name: "Integration Strategy", icon: "🎯" }
      ],
      team: [
        { name: "Анна Иванова", role: "M&A Director", color: "emerald" },
        { name: "Петр Сидоров", role: "Integration Lead", color: "cyan" },
        { name: "Мария Козлова", role: "Risk Strategy", color: "violet" }
      ],
      tags: ["Strategic M&A", "AI Integration", "Growth Architecture"],
      complexity: "Очень высокая",
      industry: "Industrial Manufacturing"
    }
  };

  const caseItem = casesData[id];

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseItem) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Кейс не найден</h1>
          <Link 
            to="/" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="group flex items-center space-x-3"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-gray-900 border border-emerald-500/30 rounded-lg p-2 group-hover:border-emerald-500/50 transition-colors">
                  <ArrowLeftIcon className="h-5 w-5 text-emerald-400" />
                </div>
              </div>
              <span className="text-gray-300 group-hover:text-emerald-300 transition-colors">
                Назад к кейсам
              </span>
            </Link>

            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500 px-3 py-1 bg-gray-900/50 rounded-full border border-gray-800">
                CASE #{id}
              </span>
              <span className="text-xs text-emerald-400 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                {caseItem.industry}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Основной контент */}
      <main className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок и мета-информация */}
          <div className={`relative mb-8 lg:mb-12 transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 rounded-3xl blur-xl opacity-0 lg:opacity-50"></div>
            
            <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800/50">
              {/* Клиент и теги */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="flex items-center space-x-2">
                  <BuildingOfficeIcon className="h-5 w-5 text-emerald-400" />
                  <span className="text-emerald-300 font-medium">{caseItem.client}</span>
                </div>
                <div className="hidden lg:block text-gray-500">•</div>
                <div className="text-sm text-gray-400">{caseItem.year}</div>
                <div className="hidden lg:block text-gray-500">•</div>
                <span className="text-xs px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700">
                  {caseItem.complexity}
                </span>
              </div>

              {/* Главный заголовок */}
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-cyan-100">
                  {caseItem.title}
                </span>
              </h1>

              {/* Ключевой результат */}
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl p-4 mb-6">
                <BoltIcon className="h-6 w-6 text-emerald-400" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">СТРАТЕГИЧЕСКИЙ РЕЗУЛЬТАТ</div>
                  <div className="text-xl font-bold text-white">{caseItem.result}</div>
                </div>
              </div>

              {/* Метрики */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {caseItem.metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-gradient-to-b from-gray-900/30 to-gray-900/10 border border-gray-800/50 rounded-xl p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-700/80">
                      <div className="text-2xl lg:text-3xl font-bold mb-1 bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-300 mb-1">{metric.label}</div>
                      <div className="text-xs text-emerald-400 font-medium">{metric.change}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Длительность и команда */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4 text-cyan-400" />
                  <span className="text-gray-300">Длительность: <span className="text-cyan-300 font-medium">{caseItem.duration}</span></span>
                </div>
                <div className="hidden lg:block text-gray-500">•</div>
                <div className="flex items-center space-x-2">
                  <UserIcon className="h-4 w-4 text-violet-400" />
                  <span className="text-gray-300">Команда: <span className="text-violet-300 font-medium">{caseItem.team.length} эксперта</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Контент с навигацией */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Навигация по разделам */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                {[
                  { id: 'challenge', label: 'Вызов', icon: LightBulbIcon },
                  { id: 'solution', label: 'Архитектура решения', icon: ChartBarIcon },
                  { id: 'outcome', label: 'Трансформация', icon: CheckCircleIcon }
                ].map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                      activeSection === section.id 
                        ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30' 
                        : 'hover:bg-gray-900/50 border border-gray-800/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        activeSection === section.id 
                          ? 'bg-gradient-to-br from-emerald-500/20 to-emerald-500/10' 
                          : 'bg-gray-800/50'
                      }`}>
                        <section.icon className={`h-5 w-5 ${
                          activeSection === section.id ? 'text-emerald-400' : 'text-gray-400'
                        }`} />
                      </div>
                      <span className={`font-medium ${
                        activeSection === section.id ? 'text-white' : 'text-gray-300'
                      }`}>
                        {section.label}
                      </span>
                    </div>
                    <ArrowUpRightIcon className={`h-4 w-4 ${
                      activeSection === section.id ? 'text-emerald-400' : 'text-gray-500'
                    }`} />
                  </button>
                ))}

                {/* Теги */}
                <div className="pt-6 border-t border-gray-800/50">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Технологии</div>
                  <div className="flex flex-wrap gap-2">
                    {caseItem.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 text-xs bg-gray-900/50 text-gray-300 rounded-lg border border-gray-800 hover:border-emerald-500/30 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Детали кейса */}
            <div className="lg:col-span-2 space-y-8">
              {/* Вызов */}
              <div 
                id="challenge"
                className={`relative transition-all duration-1000 delay-500 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-3xl blur-xl opacity-0 lg:opacity-30"></div>
                <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800/50">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 rounded-lg">
                      <LightBulbIcon className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Бизнес-вызов</div>
                      <h2 className="text-2xl font-bold text-white">Проблематика</h2>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {caseItem.challenge}
                  </p>
                </div>
              </div>

              {/* Решение */}
              <div 
                id="solution"
                className={`relative transition-all duration-1000 delay-700 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-3xl blur-xl opacity-0 lg:opacity-30"></div>
                <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800/50">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-lg">
                      <ChartBarIcon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Стратегический подход</div>
                      <h2 className="text-2xl font-bold text-white">Архитектура решения</h2>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {caseItem.solution}
                  </p>
                </div>
              </div>

              {/* Результат */}
              <div 
                id="outcome"
                className={`relative transition-all duration-1000 delay-900 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-violet-500/5 rounded-3xl blur-xl opacity-0 lg:opacity-30"></div>
                <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800/50">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-lg">
                      <CheckCircleIcon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Трансформационный эффект</div>
                      <h2 className="text-2xl font-bold text-white">Результат трансформации</h2>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {caseItem.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Команда */}
            <div className={`relative transition-all duration-1000 delay-1100 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-3xl blur-xl opacity-0 lg:opacity-30"></div>
              <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800/50">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">Экспертиза</div>
                    <h3 className="text-xl font-bold text-white">Архитекторы проекта</h3>
                  </div>
                  <ShieldCheckIcon className="h-6 w-6 text-emerald-400" />
                </div>
                <div className="space-y-4">
                  {caseItem.team.map((member, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-900/30 to-gray-900/10 border border-gray-800/50 hover:border-gray-700/80 transition-colors group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br from-${member.color}-500/10 to-${member.color}-500/5 border border-${member.color}-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <UserIcon className={`h-6 w-6 text-${member.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white mb-1">{member.name}</div>
                        <div className="text-sm text-gray-400">{member.role}</div>
                      </div>
                      <ArrowUpRightIcon className="h-4 w-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Услуги и CTA */}
            <div className={`relative transition-all duration-1000 delay-1300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/5 to-amber-500/5 rounded-3xl blur-xl opacity-0 lg:opacity-30"></div>
              <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800/50 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">Специализация</div>
                    <h3 className="text-xl font-bold text-white">Ключевые решения</h3>
                  </div>
                  <DocumentTextIcon className="h-6 w-6 text-violet-400" />
                </div>
                
                {/* Услуги */}
                <div className="space-y-3 mb-8">
                  {caseItem.services.map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-gray-900/30 to-gray-900/10 border border-gray-800/50 hover:border-gray-700/80 transition-colors"
                    >
                      <span className="text-xl">{service.icon}</span>
                      <span className="text-gray-300">{service.name}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 pt-8 border-t border-gray-800/50">
                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-4">
                      <CursorArrowRaysIcon className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm font-medium text-emerald-300">
                        ГОТОВЫ К ТРАНСФОРМАЦИИ?
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">
                      Разработаем архитектуру для вашего роста
                    </h4>
                    <p className="text-gray-400 text-sm mb-6">
                      Обсудим ваши вызовы и создадим стратегию трансформации
                    </p>
                    <Link 
                      to="/#contact" 
                      className="group inline-flex items-center justify-center w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 font-medium py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                      <span className="relative flex items-center space-x-2">
                        <span>Начать стратегическую сессию</span>
                        <ArrowUpRightIcon className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseDetail;