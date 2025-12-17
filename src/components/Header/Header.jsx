// components/Header.jsx
import { useState, useEffect } from 'react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronRightIcon,
  PhoneIcon,
  CalendarDaysIcon 
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Определяем активную секцию при скролле
      const sections = ['services', 'cases', 'about', 'process', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { name: 'Услуги', id: 'services', icon: '⚖️' },
    { name: 'Кейсы', id: 'cases', icon: '📊' },
    { name: 'Отзывы', id: 'testimonials', icon: '💬' },
    { name: 'Контакты', id: 'contact', icon: '📍' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl py-3 border-b border-gray-800/50 shadow-2xl shadow-emerald-900/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Логотип */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="group flex items-center space-x-3"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gray-900 border border-emerald-500/30 rounded-lg p-2 group-hover:border-emerald-500/50 transition-colors">
                <div className="text-lg">⚖️</div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              } group-hover:text-emerald-300`}>
                Lex<span className="text-emerald-400">Strategic</span>
              </span>
              <span className="text-xs text-gray-400 tracking-wider font-medium mt-1">
                БИЗНЕС-ПРАВО
              </span>
            </div>
          </button>

          {/* Десктопное меню */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group
                  ${activeSection === item.id 
                    ? 'text-emerald-300 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20' 
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm tracking-wide">{item.name}</span>
                </div>
                
                {/* Активный индикатор */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                )}
                
                {/* Ховер эффект */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Контактная информация и CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            
            {/* Разделитель */}
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

            {/* Кнопка консультации */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 font-medium py-3 px-6 rounded-xl text-sm transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <span className="relative flex items-center justify-center space-x-2">
                <CalendarDaysIcon className="h-4 w-4" />
                <span>Стратегическая сессия</span>
                <ChevronRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Мобильное меню */}
          <button 
            className={`lg:hidden relative group ${isScrolled ? 'text-white' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
            {isMenuOpen ? 
              <XMarkIcon className="h-7 w-7 relative text-emerald-400" /> : 
              <Bars3Icon className="h-7 w-7 relative text-white group-hover:text-emerald-300 transition-colors" />
            }
          </button>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 bg-gradient-to-b from-gray-900/95 to-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800/50 overflow-hidden animate-slideDown">
            
            {/* Заголовок мобильного меню */}
            <div className="p-4 border-b border-gray-800/50">
              <div className="text-sm text-gray-400 mb-2">НАВИГАЦИЯ</div>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 p-3 rounded-xl">
                  <div className="text-xl">⚖️</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">FUTURE-TECH</div>
                  <div className="text-xs text-gray-400">Бизнес-правовые решения</div>
                </div>
              </div>
            </div>

            {/* Навигационные пункты */}
            <div className="p-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl mb-2 transition-all duration-300 group
                    ${activeSection === item.id 
                      ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30' 
                      : 'hover:bg-gray-800/50'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`text-lg ${activeSection === item.id ? 'text-emerald-300' : 'text-gray-400'}`}>
                      {item.icon}
                    </div>
                    <span className={`font-medium ${activeSection === item.id ? 'text-white' : 'text-gray-300'}`}>
                      {item.name}
                    </span>
                  </div>
                  <ChevronRightIcon className={`h-4 w-4 ${activeSection === item.id ? 'text-emerald-400' : 'text-gray-500'}`} />
                </button>
              ))}
            </div>

            {/* Контактная информация в мобильном меню */}
            <div className="p-4 border-t border-gray-800/50">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button className="bg-gradient-to-r from-emerald-600/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-3 text-center hover:border-emerald-500/50 transition-colors group">
                  <PhoneIcon className="h-5 w-5 text-emerald-400 mx-auto mb-2" />
                  <div className="text-xs text-gray-400">Позвонить</div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-300">+7 (999) 123-45-67</div>
                </button>
                <button className="bg-gradient-to-r from-cyan-600/20 to-cyan-600/10 border border-cyan-500/30 rounded-xl p-3 text-center hover:border-cyan-500/50 transition-colors group">
                  <CalendarDaysIcon className="h-5 w-5 text-cyan-400 mx-auto mb-2" />
                  <div className="text-xs text-gray-400">Запись</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300">На сессию</div>
                </button>
              </div>

              {/* Основная CTA кнопка */}
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 font-medium py-4 rounded-xl text-white transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2"
              >
                <CalendarDaysIcon className="h-5 w-5" />
                <span>Бесплатная консультация</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Прогресс-бар скролла */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-emerald-500/30">
          <div 
            className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300"
            style={{ 
              width: `${Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100, 100)}%` 
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;