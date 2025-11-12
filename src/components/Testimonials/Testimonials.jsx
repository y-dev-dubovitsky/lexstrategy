// components/Testimonials.jsx
import { useState } from 'react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Дмитрий Волков',
      company: 'ИТ-компания "ТехноСити"',
      text: 'Благодаря команде Юридическая фирма смогли успешно завершить сложную сделку по поглощению. Профессионализм и внимание к деталям на высшем уровне!',
      rating: 5
    },
    {
      id: 2,
      name: 'Ольга Семенова',
      company: 'Сеть ресторанов "Вкусно и Точка"',
      text: 'Решили наш многолетний спор с арендодателем, который тянулся 3 года. Результат превзошел все ожидания. Рекомендую!',
      rating: 5
    },
    {
      id: 3,
      name: 'Сергей Петров',
      company: 'Строительная компания "ПроектСтрой"',
      text: 'Юристы помогли отстоять наши интересы в налоговой проверке. Сэкономили компании более 15 миллионов рублей. Отличная работа!',
      rating: 5
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Что говорят наши клиенты о сотрудничестве с нами
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Карусель */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                    {/* Звезды рейтинга */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-6 w-6 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Текст отзыва */}
                    <blockquote className="text-lg text-gray-700 text-center mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    {/* Информация о клиенте */}
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопки навигации */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition duration-300"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition duration-300"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
          </button>

          {/* Индикаторы */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;