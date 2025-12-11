// components/Footer.jsx
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ArrowUpRightIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  LockClosedIcon,
  ArrowRightIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import { 
  SparklesIcon as SparklesSolid,
  ShieldCheckIcon as ShieldCheckSolid
} from '@heroicons/react/24/solid';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const legalServices = [
    { name: "Корпоративное право", color: "emerald" },
    { name: "M&A и сделки", color: "cyan" },
    { name: "Налоговые споры", color: "violet" },
    { name: "Арбитражные споры", color: "amber" },
    { name: "Банкротство", color: "rose" },
    { name: "Недвижимость", color: "blue" }
  ];

  const quickLinks = [
    { name: "Главная", href: "#" },
    { name: "Услуги", href: "#services" },
    { name: "О компании", href: "#about" },
    { name: "Кейсы", href: "#testimonials" },
    { name: "Команда", href: "#team" },
    { name: "Контакты", href: "#contact" }
  ];

  const contacts = [
    {
      icon: BuildingOfficeIcon,
      title: "Офис трансформаций",
      value: "Москва, Цифровой проспект, д. 8, Бизнес-хаб 'Innovation'",
      color: "emerald"
    },
    {
      icon: PhoneIcon,
      title: "Стратегическая связь",
      value: "+7 (495) 123-45-67",
      color: "cyan"
    },
    {
      icon: EnvelopeIcon,
      title: "Директор по стратегиям",
      value: "strategy@lexstrategic.ru",
      color: "violet"
    },
    {
      icon: ClockIcon,
      title: "Время трансформаций",
      value: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
      color: "amber"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", color: "blue", href: "#" },
    { name: "Telegram", color: "cyan", href: "#" },
    { name: "WhatsApp", color: "emerald", href: "#" },
    { name: "Email", color: "violet", href: "#" }
  ];

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        {/* Геометрический фон */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#10b981" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="1" fill="#3b82f6" opacity="0.3" />
            </pattern>
            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
          <rect width="100%" height="100%" fill="url(#footer-gradient)" />
        </svg>

        {/* Анимированные элементы */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Верхняя секция с CTA */}
        <div className="py-16 border-b border-gray-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-5 py-2 mb-6">
              <SparklesSolid className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium tracking-wider text-emerald-300">
                ГОТОВЫ К ТРАНСФОРМАЦИИ?
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-cyan-100">
                Начните свой юридический
              </span>
              <span className="block mt-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-white">
                  прорыв сегодня
                </span>
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Запланируйте стратегическую сессию с нашими экспертами и получите дорожную карту трансформации вашего бизнеса
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 font-semibold py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/25">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <span className="relative flex items-center justify-center space-x-2">
                  <PaperAirplaneIcon className="h-5 w-5" />
                  <span>Записаться на сессию</span>
                  <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group relative bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800/50 font-semibold py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-[1.02] backdrop-blur-sm">
                <span className="relative flex items-center justify-center space-x-2 text-gray-300 group-hover:text-white">
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  <span>Задать вопрос</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Основное содержимое */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Колонка 1: О компании */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-lg">
                <ShieldCheckSolid className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  LEX STRATEGIC
                </h3>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Юридический интеллект</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Мы трансформируем юридические вызовы в стратегические возможности. Наша миссия — 
              построить для каждого клиента правовой фундамент будущего успеха через инновационные 
              решения и экспертизу высшего уровня.
            </p>

            {/* Гарантии */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <LockClosedIcon className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Конфиденциальность</div>
                  <div className="text-xs text-gray-400">100% защита данных</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <DocumentTextIcon className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Результат</div>
                  <div className="text-xs text-gray-400">Гарантия качества</div>
                </div>
              </div>
            </div>
          </div>

          {/* Колонка 2: Услуги */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <SparklesIcon className="h-5 w-5 text-emerald-400 mr-2" />
              <span>Экспертиза</span>
            </h4>
            <div className="space-y-3">
              {legalServices.map((service, index) => (
                <button
                  key={index}
                  className="group flex items-center justify-between w-full text-left p-3 rounded-xl border border-gray-800/50 hover:border-emerald-500/30 transition-all duration-300 hover:translate-x-2"
                >
                  <span className="text-gray-300 group-hover:text-white">{service.name}</span>
                  <ArrowUpRightIcon className="h-4 w-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Колонка 3: Контакты */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <GlobeAltIcon className="h-5 w-5 text-cyan-400 mr-2" />
              <span>Связь с нами</span>
            </h4>
            <div className="space-y-4">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={index}
                    className="group p-3 rounded-xl border border-gray-800/50 hover:border-emerald-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 bg-${contact.color}-500/10 border border-${contact.color}-500/20 rounded-lg`}>
                        <Icon className={`h-5 w-5 text-${contact.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 mb-1">{contact.title}</div>
                        <div className="text-white text-sm">{contact.value}</div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Социальные сети */}
              <div className="pt-4 border-t border-gray-800/50">
                <div className="text-sm text-gray-400 mb-3">Мы в сети</div>
                <div className="flex space-x-2">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      className={`p-2 bg-gradient-to-br from-${social.color}-500/10 to-${social.color}-500/5 border border-${social.color}-500/20 rounded-lg hover:border-${social.color}-500/30 transition-all duration-300 hover:scale-110`}
                    >
                      <span className="text-sm text-gray-300 hover:text-white">{social.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Быстрые ссылки и дополнительная информация */}
        <div className="py-8 border-t border-gray-800/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">Навигация</div>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">Документы</div>
              <div className="space-y-2">
                <button className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  <DocumentTextIcon className="h-4 w-4 mr-2" />
                  Политика конфиденциальности
                </button>
                <button className="flex items-center text-gray-300 hover:text-violet-400 transition-colors text-sm">
                  <DocumentTextIcon className="h-4 w-4 mr-2" />
                  Пользовательское соглашение
                </button>
                <button className="flex items-center text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  <DocumentTextIcon className="h-4 w-4 mr-2" />
                  Согласие на обработку данных
                </button>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">Подписка</div>
              <p className="text-gray-300 text-sm mb-4">
                Получайте стратегические инсайты и обновления
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-2 bg-gray-900/50 border border-gray-800/50 rounded-l-xl focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 outline-none text-white placeholder-gray-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 rounded-r-xl transition-colors">
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="py-8 border-t border-gray-800/50">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <div className="text-gray-400 text-sm mb-2">
                © {currentYear} LEX STRATEGIC. Все права защищены.
              </div>
              <div className="text-xs text-gray-500">
                Интеллектуальная собственность защищена законодательством РФ
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-sm text-gray-400">
                <span className="text-emerald-400 font-medium">ISO 27001</span> Certified
              </div>
              <div className="text-sm text-gray-400">
                <ShieldCheckIcon className="h-4 w-4 inline mr-1 text-emerald-400" />
                GDPR Compliant
              </div>
              <div className="text-sm text-gray-400">
                Made with <span className="text-rose-400">♥</span> in Moscow
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;