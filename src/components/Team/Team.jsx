// components/Team.jsx
import { EnvelopeIcon, PhoneIcon, AcademicCapIcon, BriefcaseIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { useState, useEffect, useRef } from 'react';

// Импортируем реальные фото из assets
import p1 from '../../assets/photo_5233690570037859135_y.jpg';
import p2 from '../../assets/photo_5233690570037859133_y.jpg';
import p3 from '../../assets/photo_5233690570037859134_y.jpg';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMember, setActiveMember] = useState(null);
  const sectionRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Анна Иванова',
      position: 'Управляющий партнер',
      specialization: 'Корпоративное право, M&A',
      experience: '12 лет',
      education: 'МГУ им. Ломоносова',
      location: 'Москва',
      achievements: ['Топ-100 юристов России', 'Эксперт по M&A'],
      rating: 5,
      cases: 150,
      image: p1,
      email: 'anna@lawfirm.ru',
      phone: '+7 (495) 123-45-67',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      id: 2,
      name: 'Петр Сидоров',
      position: 'Старший юрист',
      specialization: 'Налоговые споры, Арбитраж',
      experience: '9 лет',
      education: 'СПбГУ',
      location: 'Санкт-Петербург',
      achievements: ['Победитель налоговых споров на 2 млрд+', 'Спикер юридических форумов'],
      rating: 5,
      cases: 95,
      image: p2,
      email: 'petr@lawfirm.ru',
      phone: '+7 (495) 123-45-68',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Мария Козлова',
      position: 'Юрист',
      specialization: 'Недвижимость, Сделки',
      experience: '6 лет',
      education: 'ВШЭ',
      location: 'Москва',
      achievements: ['Эксперт по коммерческой недвижимости', 'Автор статей в Forbes'],
      rating: 5,
      cases: 70,
      image: p3,
      email: 'maria@lawfirm.ru',
      phone: '+7 (495) 123-45-69',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
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
    <section ref={sectionRef} id="team" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-white/20">
            Наша команда
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Профессионалы
            <span className="block text-cyan-400">высшего класса</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Сильнейшие юристы с экспертизой в различных областях права, объединенные 
            стремлением к достижению лучших результатов для наших клиентов
          </p>
        </div>

        {/* Карточки команды */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className={`group relative transform transition-all duration-700 delay-${index * 200} ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
              }`}
              onMouseEnter={() => setActiveMember(member.id)}
              onMouseLeave={() => setActiveMember(null)}
            >
              {/* Основная карточка */}
              <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Градиентная полоса */}
                <div className={`h-2 ${member.bgColor}`}></div>
                
                <div className="p-6">
                  {/* Аватар с эффектом */}
                  <div className="relative mb-6">
                    <div className="relative mx-auto w-32 h-32">
                      <div className={`absolute inset-0 ${member.bgColor} rounded-full blur-lg opacity-50 group-hover:opacity-70 transition duration-500`}></div>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="relative w-32 h-32 rounded-full object-cover border-4 border-white/20 group-hover:border-white/40 transition duration-500 transform group-hover:scale-110"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                        <div className={`w-8 h-8 ${member.bgColor} rounded-full flex items-center justify-center`}>
                          <BriefcaseIcon className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Информация */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-200 transition duration-300">
                      {member.name}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}>
                      {member.position}
                    </p>
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                      {member.specialization}
                    </p>

                    {/* Рейтинг */}
                    <div className="flex justify-center items-center space-x-1 mb-4">
                      {[...Array(member.rating)].map((_, i) => (
                        <StarSolid key={i} className="h-4 w-4 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Статистика */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{member.experience}</div>
                      <div className="text-white/60 text-xs">Опыт работы</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{member.cases}+</div>
                      <div className="text-white/60 text-xs">Кейсов</div>
                    </div>
                  </div>

                  {/* Дополнительная информация */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-white/70 text-sm">
                      <AcademicCapIcon className="h-4 w-4 mr-2 text-cyan-400" />
                      {member.education}
                    </div>
                    <div className="flex items-center text-white/70 text-sm">
                      <MapPinIcon className="h-4 w-4 mr-2 text-cyan-400" />
                      {member.location}
                    </div>
                  </div>

                  {/* Достижения */}
                  <div className="mb-6">
                    {member.achievements.map((achievement, i) => (
                      <span 
                        key={i}
                        className="inline-block bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full mr-2 mb-2 border border-white/20"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Контакты */}
                  <div className="border-t border-white/10 pt-4 space-y-3">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center text-white/70 hover:text-cyan-400 transition duration-300 group/contact text-sm"
                    >
                      <EnvelopeIcon className="h-4 w-4 mr-2 group-hover/contact:scale-110 transition-transform" />
                      {member.email}
                    </a>
                    <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center text-white/70 hover:text-cyan-400 transition duration-300 group/contact text-sm"
                    >
                      <PhoneIcon className="h-4 w-4 mr-2 group-hover/contact:scale-110 transition-transform" />
                      {member.phone}
                    </a>
                  </div>
                </div>

                {/* Hover эффект */}
                <div className={`absolute inset-0 ${member.bgColor} opacity-0 group-hover:opacity-5 transition duration-500 rounded-3xl`}></div>
              </div>

              {/* Анимированный бэкграунд при hover */}
              {activeMember === member.id && (
                <div className={`absolute inset-0 ${member.bgColor} opacity-10 blur-xl rounded-3xl -z-10 animate-pulse`}></div>
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
              Готовы работать с лучшими?
            </h3>
            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
              Наша команда готова взяться за ваш проект и обеспечить максимальный результат
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Начать сотрудничество
              </button>
              <button className="border-2 border-white/20 hover:border-white/40 text-white font-semibold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 backdrop-blur-sm">
                Задать вопрос
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;