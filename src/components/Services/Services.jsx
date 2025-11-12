// components/Services.jsx
import { BuildingLibraryIcon, ScaleIcon, UserGroupIcon, DocumentCheckIcon, ArrowRightIcon, ShieldCheckIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Корпоративное право",
      description: "Полное юридическое сопровождение бизнеса: от регистрации компаний до сложных сделок M&A и реструктуризации.",
      detailedDescription: "Комплексные решения для вашего бизнеса включая due diligence, корпоративное управление и защиту интересов акционеров.",
      icon: BuildingLibraryIcon,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
      features: ["Сделки M&A", "Регистрация компаний", "Корпоративное управление", "Due Diligence"],
      stats: "200+ успешных сделок",
      duration: "от 1 дня"
    },
    {
      id: 2,
      title: "Налоговые споры",
      description: "Профессиональная защита в налоговых проверках и судебных спорах. Оспаривание доначислений и оптимизация налоговой нагрузки.",
      detailedDescription: "Защищаем ваши интересы в спорах с налоговыми органами, помогаем легально оптимизировать налоговые платежи.",
      icon: ScaleIcon,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-500",
      features: ["Налоговые проверки", "Оспаривание доначислений", "Налоговая оптимизация", "Судебные споры"],
      stats: "95% успешных дел",
      duration: "от 2 недель"
    },
    {
      id: 3,
      title: "Банкротство",
      description: "Комплексное сопровождение процедур банкротства для кредиторов и должников. Финансовая санация и защита активов.",
      detailedDescription: "Помогаем выйти из финансового кризиса с минимальными потерями или вернуть долги через процедуру банкротства.",
      icon: UserGroupIcon,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
      features: ["Банкротство юрлиц", "Банкротство физлиц", "Финансовая санация", "Защита активов"],
      stats: "30+ завершенных процедур",
      duration: "от 6 месяцев"
    },
    {
      id: 4,
      title: "Недвижимость и сделки",
      description: "Юридическая экспертиза сделок с недвижимостью, сопровождение инвестиционных проектов и разрешение споров.",
      detailedDescription: "Обеспечиваем юридическую чистоту сделок с коммерческой и жилой недвижимостью, защищаем ваши инвестиции.",
      icon: DocumentCheckIcon,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
      features: ["Due Diligence", "Сопровождение сделок", "Разрешение споров", "Инвестиционные проекты"],
      stats: "150+ объектов",
      duration: "от 1 недели"
    }
  ];

  const serviceStats = [
    { number: "500+", label: "Завершенных проектов" },
    { number: "98%", label: "Удовлетворенных клиентов" },
    { number: "15+", label: "Лет опыта" },
    { number: "24/7", label: "Поддержка клиентов" }
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
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Функция для рендеринга иконки активной услуги
  const renderActiveServiceIcon = () => {
    const service = services[activeService];
    if (!service) return null;
    
    const IconComponent = service.icon;
    return <IconComponent className="h-6 w-6 text-white" />;
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-100/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-blue-200">
            Наши услуги
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Экспертные
            <span className="block text-blue-600">решения</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Комплексные юридические услуги для бизнеса и частных лиц. 
            Мы предлагаем индивидуальный подход и гарантируем результат в самых сложных правовых ситуациях.
          </p>
        </div>

        {/* Статистика */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {serviceStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition duration-500 hover:scale-105"
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Основные услуги */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`group relative transform transition-all duration-700 delay-${index * 200} ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
              } ${
                activeService === index ? 'scale-105 z-10' : 'scale-100'
              }`}
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Основная карточка */}
              <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Градиентная шапка */}
                <div className={`h-3 ${service.bgColor}`}></div>
                
                <div className="p-6 flex-1 flex flex-col">
                  {/* Иконка и заголовок */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition duration-300 shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className={`w-3 h-3 rounded-full transition duration-300 ${
                      activeService === index ? 'bg-green-400 scale-125' : 'bg-gray-300'
                    }`}></div>
                  </div>

                  {/* Заголовок и описание */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Особенности */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Статистика и длительность */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <ChartBarIcon className="h-4 w-4 text-green-500 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900">{service.stats}</div>
                    </div>
                    <div className="text-center">
                      <ClockIcon className="h-4 w-4 text-blue-500 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900">{service.duration}</div>
                    </div>
                  </div>

                  {/* CTA кнопка */}
                  <button className="w-full bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-xl transition duration-300 transform hover:scale-105 group/btn flex items-center justify-center border border-gray-200 hover:border-blue-200">
                    <span className="text-sm">Узнать подробнее</span>
                    <ArrowRightIcon className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Hover эффект */}
                <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-5 transition duration-500 rounded-3xl pointer-events-none`}></div>
              </div>

              {/* Анимированный бэкграунд при hover */}
              {activeService === index && (
                <div className={`absolute inset-0 ${service.bgColor} opacity-10 blur-xl rounded-3xl -z-10 animate-pulse`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Детальная информация об активной услуге */}
        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 transform transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${services[activeService]?.bgColor} rounded-2xl flex items-center justify-center mr-4`}>
                  {renderActiveServiceIcon()}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{services[activeService]?.title}</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {services[activeService]?.detailedDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {services[activeService]?.features.map((feature, index) => (
                  <span 
                    key={index}
                    className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-6 text-white">
                <ShieldCheckIcon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">Гарантия</div>
                <div className="text-blue-100">качества</div>
                <div className="text-3xl font-bold mt-4">{services[activeService]?.stats.split(' ')[0]}</div>
                <div className="text-blue-100 text-sm">{services[activeService]?.stats.split(' ').slice(1).join(' ')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA секция */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Нужна профессиональная юридическая помощь?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Оставьте заявку и получите бесплатную консультацию по вашему вопросу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg">
                Получить консультацию
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 backdrop-blur-sm">
                Задать вопрос
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;