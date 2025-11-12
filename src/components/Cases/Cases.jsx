// components/Cases.jsx
import { Link } from 'react-router-dom';
import { ArrowRightIcon, TrophyIcon, ShieldCheckIcon, ClockIcon, BuildingLibraryIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from 'react';

const Cases = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCase, setHoveredCase] = useState(null);
  const sectionRef = useRef(null);

  const cases = [
    { 
      id: 1, 
      title: "Защита интересов в строительном споре", 
      result: "Сэкономлено 25 млн руб.", 
      client: "Девелоперская компания",
      shortDescription: "Успешное оспаривание исковых требований в сложном корпоративном споре",
      duration: "6 месяцев",
      complexity: "Высокая",
      category: "Корпоративное право",
      icon: BuildingLibraryIcon,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    { 
      id: 2, 
      title: "Оспаривание налоговых доначислений", 
      result: "Отменено доначисление на 12 млн руб.", 
      client: "ИТ-компания",
      shortDescription: "Защита интересов клиента в налоговом споре с госорганами",
      duration: "8 месяцев",
      complexity: "Средняя",
      category: "Налоговое право",
      icon: ChartBarIcon,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-500"
    },
    { 
      id: 3, 
      title: "Сопровождение сделки по поглощению", 
      result: "Сделка завершена в срок", 
      client: "Производственный холдинг",
      shortDescription: "Комплексное юридическое сопровождение сделки M&A",
      duration: "4 месяца",
      complexity: "Очень высокая",
      category: "M&A",
      icon: TrophyIcon,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
  ];

  const stats = [
    { number: "50+", label: "Завершенных кейсов" },
    { number: "95%", label: "Успешных решений" },
    { number: "150M+", label: "Сэкономлено клиентам" },
    { number: "100%", label: "Конфиденциальность" }
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

  return (
    <section ref={sectionRef} id="cases" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-white/20">
            Наши работы
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Успешные
            <span className="block text-cyan-400">кейсы</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Реальные примеры успешного решения сложных юридических задач для наших клиентов. 
            Каждый кейс — это история победы и доказательство нашего профессионализма.
          </p>
        </div>

        {/* Статистика */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition duration-500 hover:scale-105"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Карточки кейсов */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((caseItem, index) => (
            <div 
              key={caseItem.id}
              className={`group relative transform transition-all duration-700 delay-${index * 200} ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
              }`}
              onMouseEnter={() => setHoveredCase(caseItem.id)}
              onMouseLeave={() => setHoveredCase(null)}
            >
              {/* Основная карточка */}
              <Link 
                to={`/cases/${caseItem.id}`}
                className="block relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Градиентная полоса */}
                <div className={`h-2 ${caseItem.bgColor}`}></div>
                
                <div className="p-6">
                  {/* Заголовок и иконка */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block bg-white/10 text-white/80 text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                      {caseItem.client}
                    </span>
                    <div className={`w-12 h-12 ${caseItem.bgColor} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition duration-300`}>
                      <caseItem.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Заголовок кейса */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition duration-300 leading-tight">
                    {caseItem.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-white/70 text-sm mb-6 leading-relaxed">
                    {caseItem.shortDescription}
                  </p>

                  {/* Детали кейса */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <ClockIcon className="h-4 w-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-white text-sm">{caseItem.duration}</div>
                      <div className="text-white/60 text-xs">Срок работы</div>
                    </div>
                    <div className="text-center">
                      <ShieldCheckIcon className="h-4 w-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-white text-sm">{caseItem.complexity}</div>
                      <div className="text-white/60 text-xs">Сложность</div>
                    </div>
                  </div>

                  {/* Результат */}
                  <div className="bg-white/10 rounded-2xl p-4 mb-6 border border-white/10">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400 mb-1">{caseItem.result}</div>
                      <div className="text-white/60 text-xs">Достигнутый результат</div>
                    </div>
                  </div>

                  {/* Категория и CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs">{caseItem.category}</span>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition duration-300">
                      <span className="text-sm font-medium mr-2">Подробнее</span>
                      <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Hover эффект */}
                <div className={`absolute inset-0 ${caseItem.bgColor} opacity-0 group-hover:opacity-5 transition duration-500 rounded-3xl`}></div>
              </Link>

              {/* Анимированный бэкграунд при hover */}
              {hoveredCase === caseItem.id && (
                <div className={`absolute inset-0 ${caseItem.bgColor} opacity-10 blur-xl rounded-3xl -z-10 animate-pulse`}></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA секция */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition duration-500 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Есть похожая задача?
            </h3>
            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
              Наша команда готова взяться за ваш проект и достичь максимального результата
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/cases/1"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                <TrophyIcon className="h-5 w-5 mr-2" />
                Смотреть все кейсы
              </Link>
              <button className="border-2 border-white/20 hover:border-white/40 text-white font-semibold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 backdrop-blur-sm">
                Обсудить проект
              </button>
            </div>
          </div>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Cases;