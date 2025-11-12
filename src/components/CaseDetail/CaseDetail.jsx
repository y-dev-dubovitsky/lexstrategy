// components/CaseDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, CalendarIcon, UserIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const CaseDetail = () => {
  const { id } = useParams();

  // Детальные данные кейсов (в реальном приложении это может быть API)
  const casesData = {
    1: {
      title: "Защита интересов в строительном споре",
      client: "Девелоперская компания «СтройИнвест»",
      result: "Сэкономлено 25 млн руб.",
      duration: "6 месяцев",
      year: "2024",
      challenge: "Клиент столкнулся с исковыми требованиями от subcontractor на сумму 30 млн рублей за allegedly невыполненные работы. Ситуация осложнялась отсутствием proper документации.",
      solution: "Наша команда провела тщательный аудит всех договоров и актов выполненных работ. Мы собрали compelling evidence выполнения обязательств и подготовили встречный иск.",
      outcome: "В результате суд полностью отказал в удовлетворении первоначального иска и удовлетворил наши встречные требования на 5 млн рублей. Общая экономия составила 25 млн рублей.",
      services: ["Корпоративное право", "Арбитражные споры", "Договорное право"],
      team: ["Анна Иванова", "Петр Сидоров"]
    },
    2: {
      title: "Оспаривание налоговых доначислений",
      client: "ИТ-компания «ТехноСити»",
      result: "Отменено доначисление на 12 млн руб.",
      duration: "8 месяцев",
      year: "2023",
      challenge: "Налоговая инспекция провела выездную проверку и вынесла решение о доначислении 15 млн рублей налогов и 3 млн рублей штрафов.",
      solution: "Мы проанализировали все хозяйственные операции клиента, подготовили апелляционную жалобу и представили интересы в суде.",
      outcome: "Суд признал доначисления необоснованными. Клиент сэкономил 12 млн рублей, остальная сумма была уменьшена за счет оптимизации.",
      services: ["Налоговое право", "Судебные споры", "Финансовое право"],
      team: ["Петр Сидоров", "Мария Козлова"]
    },
    3: {
      title: "Сопровождение сделки по поглощению",
      client: "Производственный холдинг «ПромМаш»",
      result: "Сделка завершена в срок",
      duration: "4 месяца",
      year: "2024",
      challenge: "Клиент планировал поглощение конкурента, но сделка осложнялась наличием скрытых обязательств и сложной структурой активов.",
      solution: "Мы провели комплексную юридическую экспертизу, разработали оптимальную структуру сделки и подготовили все необходимые документы.",
      outcome: "Сделка успешно завершена в запланированные сроки. Все риски были минимизированы, клиент получил полный контроль над целевыми активами.",
      services: ["M&A", "Корпоративное право", "Due Diligence"],
      team: ["Анна Иванова", "Петр Сидоров", "Мария Козлова"]
    }
  };

  const caseItem = casesData[id];

  if (!caseItem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Кейс не найден</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Назад к кейсам
          </Link>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок и мета-информация */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {caseItem.client}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {caseItem.title}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <BuildingOfficeIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Результат</div>
                  <div className="text-lg font-semibold text-green-600">{caseItem.result}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <CalendarIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Срок работы</div>
                  <div className="text-lg font-semibold">{caseItem.duration}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <UserIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Год</div>
                  <div className="text-lg font-semibold">{caseItem.year}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Детали кейса */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Основной текст */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Задача</h2>
                <p className="text-gray-700 leading-relaxed">{caseItem.challenge}</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Решение</h2>
                <p className="text-gray-700 leading-relaxed">{caseItem.solution}</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Результат</h2>
                <p className="text-gray-700 leading-relaxed">{caseItem.outcome}</p>
              </div>
            </div>

            {/* Сайдбар */}
            <div className="space-y-6">
              {/* Услуги */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Услуги</h3>
                <div className="space-y-2">
                  {caseItem.services.map((service, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Команда */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Команда проекта</h3>
                <div className="space-y-3">
                  {caseItem.team.map((member, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <UserIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{member}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-blue-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-3">Нужна похожая помощь?</h3>
                <p className="text-blue-100 text-sm mb-4">Мы готовы обсудить ваш проект</p>
                <Link 
                  to="/#contact" 
                  className="block w-full bg-white text-blue-600 text-center font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
                >
                  Обсудить проект
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseDetail;