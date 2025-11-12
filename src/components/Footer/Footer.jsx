// components/Footer.jsx
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Основной контент подвала */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Колонка 1: О компании */}
          <div>
            <h3 className="text-xl font-bold mb-4">Юргруп</h3>
            <p className="text-gray-400 mb-4">
              Профессиональные юридические услуги для бизнеса и частных лиц. 
              Ваша уверенность в правовой безопасности.
            </p>
            <div className="flex space-x-3">
              {/* Социальные сети можно добавить позже */}
            </div>
          </div>

          {/* Колонка 2: Услуги */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition duration-200">Корпоративное право</button></li>
              <li><button className="hover:text-white transition duration-200">Налоговые споры</button></li>
              <li><button className="hover:text-white transition duration-200">Банкротство</button></li>
              <li><button className="hover:text-white transition duration-200">Недвижимость</button></li>
            </ul>
          </div>

          {/* Колонка 3: Контакты */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>г. Москва, ул. Тверская, д. 1, офис 100</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>info@lawfirm.ru</span>
              </div>
            </div>
          </div>

          {/* Колонка 4: Время работы */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Время работы</h4>
            <div className="flex items-start text-gray-400">
              <ClockIcon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <div>Пн-Пт: 9:00 - 18:00</div>
                <div>Сб: 10:00 - 16:00</div>
                <div>Вс: Выходной</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя часть */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-2 md:mb-0">
              © {currentYear} Юргруп. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition duration-200">Политика конфиденциальности</button>
              <button className="hover:text-white transition duration-200">Пользовательское соглашение</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;