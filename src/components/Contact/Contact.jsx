// components/Contact.jsx
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь логика отправки формы, например, на EmailJS, Telegram Bot или сервер
    alert("Форма отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Наши контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-blue-400 mr-4" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-blue-400 mr-4" />
                <span>info@lawfirm.ru</span>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                <span>г. Москва, ул. Тверская, д. 1, офис 100</span>
              </div>
            </div>
          </div>
          
          {/* Форма */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Ваше имя</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Телефон</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;