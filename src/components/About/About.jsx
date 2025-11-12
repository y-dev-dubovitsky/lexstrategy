// components/About.jsx
import { CheckBadgeIcon, TrophyIcon, HeartIcon, ShieldCheckIcon, ClockIcon, UserGroupIcon, StarIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { useState, useEffect, useRef } from 'react';
import groupPhoto from '../../assets/123.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const sectionRef = useRef(null);

  const stats = [
    { number: '50+', label: 'Успешных кейсов', icon: TrophyIcon, color: 'text-yellow-500', bg: 'bg-yellow-100' },
    { number: '8+', label: 'Лет опыта', icon: ClockIcon, color: 'text-blue-500', bg: 'bg-blue-100' },
    { number: '95%', label: 'Довольных клиентов', icon: HeartIcon, color: 'text-red-500', bg: 'bg-red-100' },
    { number: '100%', label: 'Конфиденциальность', icon: ShieldCheckIcon, color: 'text-green-500', bg: 'bg-green-100' },
  ];

  const features = [
    {
      title: "Глубокая экспертиза",
      description: "Специализируемся на сложных корпоративных и налоговых спорах",
      icon: CheckBadgeIcon,
      delay: 200
    },
    {
      title: "Индивидуальный подход",
      description: "Разрабатываем персональные стратегии для каждого клиента",
      icon: UserGroupIcon,
      delay: 400
    },
    {
      title: "Прозрачность работы",
      description: "Вы всегда в курсе этапов работы и результатов",
      icon: ShieldCheckIcon,
      delay: 600
    }
  ];

  const achievements = [
    "Топ-100 юристов России по версии Legal Awards",
    "Более 200 успешных сделок M&A",
    "Эксперты в международном арбитраже",
    "Спикеры ведущих юридических форумов"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-100/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Текстовый блок */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {/* Заголовок с градиентом */}
            <div className="mb-8">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-blue-200">
                О компании
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Команда 
                <span className="block text-blue-600">профессионалов</span>
              </h2>
            </div>

            {/* Основной текст */}
            <div className="space-y-6 mb-8">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Мы — <span className="text-blue-600 font-semibold">сплоченная команда высококлассных юристов</span> с многолетним опытом 
                в решении самых сложных правовых задач. Наш подход сочетает глубокую отраслевую экспертизу, 
                индивидуальное внимание к каждому клиенту и бескомпромиссную нацеленность на результат.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Мы не просто предоставляем юридические услуги — мы становимся вашими 
                <span className="text-blue-600 font-semibold"> стратегическими партнерами</span> в бизнесе и надежными защитниками ваших интересов.
              </p>
            </div>

            {/* Достижения */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Наши достижения:</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 transform transition-all duration-500"
                    style={{ transitionDelay: `${index * 100 + 800}ms` }}
                  >
                    <StarSolid className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Особенности */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 transform transition-all duration-500 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${feature.delay}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center group hover:bg-blue-50 hover:shadow-xl transition duration-300 border border-gray-100">
                    <feature.icon className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Статистика с анимацией */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center transform transition-all duration-500 ${
                      isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
                    } ${
                      currentStat === index ? 'scale-110' : 'scale-100'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-2 transition duration-300 ${
                      currentStat === index ? 'scale-110 shadow-lg' : ''
                    }`}>
                      <stat.icon className={`h-6 w-6 ${stat.color} transition duration-300 ${
                        currentStat === index ? 'scale-110' : ''
                      }`} />
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Индикатор переключения */}
              <div className="flex justify-center mt-4 space-x-1">
                {stats.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition duration-300 ${
                      currentStat === index ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Фото команды с эффектами */}
          <div className={`relative transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Основное фото */}
            <div className="relative group">
              {/* Градиентная обводка */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              
              {/* Основное изображение */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition duration-700">
                <img 
                  src={groupPhoto}
                  alt="Наша команда профессиональных юристов" 
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition duration-1000"
                />
                
                {/* Наложение с информацией */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Сильная команда — гарантия успеха</h3>
                  <p className="text-blue-200 text-lg mb-4">Объединенные экспертизой, движимые результатом</p>
                  <div className="flex items-center text-white/80">
                    <UserGroupIcon className="h-5 w-5 mr-2" />
                    <span>15+ профессиональных юристов</span>
                  </div>
                </div>
              </div>

              {/* Плавающие элементы */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition duration-300 z-20 group-hover:rotate-12">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <ShieldCheckIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600 font-medium">Конфиденциальность</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition duration-300 delay-200 z-20 group-hover:-rotate-12">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <TrophyIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">Лидеры</div>
                    <div className="text-sm text-gray-600 font-medium">в своей области</div>
                  </div>
                </div>
              </div>

              {/* Анимированные декоративные элементы */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400/20 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400/20 rounded-full animate-ping delay-1000"></div>
            </div>

            {/* Подпись под фото */}
            <div className="text-center mt-6">
              <p className="text-gray-600 italic">
                "Объединяем лучших специалистов для решения ваших самых сложных задач"
              </p>
            </div>
          </div>
        </div>

        {/* CTA внизу секции */}
        <div className={`mt-20 text-center transform transition-all duration-700 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-4xl mx-auto hover:shadow-3xl transition duration-500">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Готовы работать с сильнейшей командой?
            </h3>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Оставьте заявку и получите бесплатную консультацию от наших ведущих экспертов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center">
                <ArrowPathIcon className="h-5 w-5 mr-2" />
                Получить консультацию
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 hover:shadow-lg">
                Изучить наши кейсы
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;