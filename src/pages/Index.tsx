import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', plan: '' });

  useEffect(() => {
    const targetDate = new Date('2024-12-15T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Мы свяжемся с вами в ближайшее время.`);
    setShowForm(false);
    setFormData({ name: '', email: '', phone: '', plan: '' });
  };

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Базовый',
      price: '24 990',
      description: 'Для старта в веб-разработке',
      features: [
        'Доступ к 4 модулям курса',
        'Основы HTML, CSS, JavaScript',
        'Проверка домашних заданий',
        'Доступ к сообществу',
        'Сертификат об окончании'
      ],
      gradient: 'from-purple-500 to-pink-500',
      popular: false
    },
    {
      id: 'pro',
      name: 'Профессиональный',
      price: '39 990',
      description: 'Полное погружение в разработку',
      features: [
        'Доступ ко всем 8 модулям',
        'React, TypeScript, Node.js',
        'Персональный наставник',
        'Код-ревью каждого проекта',
        'Помощь в трудоустройстве',
        'Lifetime доступ к материалам',
        'Участие в real-проектах'
      ],
      gradient: 'from-blue-500 to-purple-600',
      popular: true
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: '59 990',
      description: 'Максимальный результат',
      features: [
        'Все из тарифа Pro',
        'Индивидуальные 1-на-1 созвоны',
        'Разработка портфолио с нуля',
        'Подготовка к собеседованиям',
        'Гарантия трудоустройства',
        'Доступ к закрытым вакансиям',
        'Годовое менторство после курса'
      ],
      gradient: 'from-pink-500 to-orange-500',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Александр Петров',
      role: 'Junior Frontend Developer в Яндекс',
      avatar: '👨‍💻',
      text: 'Прошел курс 6 месяцев назад, сейчас работаю в Яндексе. Программа очень структурированная, наставники всегда помогали. Особенно понравились реальные проекты в портфолио.',
      rating: 5
    },
    {
      name: 'Мария Соколова',
      role: 'Fullstack Developer в Сбер',
      avatar: '👩‍💻',
      text: 'До курса работала в продажах. Благодаря менторам и поддержке смогла переквалифицироваться. Через 3 месяца после выпуска получила оффер. Лучшая инвестиция в себя!',
      rating: 5
    },
    {
      name: 'Дмитрий Козлов',
      role: 'React Developer в стартапе',
      avatar: '🧑‍💻',
      text: 'Курс превзошел ожидания. Много практики, актуальный стек технологий. Код-ревью от опытных разработчиков — это просто золото. Рекомендую всем, кто хочет войти в IT.',
      rating: 5
    }
  ];

  const courseModules = [
    {
      title: 'Модуль 1: Основы веб-разработки',
      duration: '2 недели',
      topics: ['HTML5 семантика', 'CSS3 и Flexbox/Grid', 'Адаптивная верстка', 'Accessibility']
    },
    {
      title: 'Модуль 2: JavaScript с нуля',
      duration: '3 недели',
      topics: ['Переменные и типы данных', 'Функции и замыкания', 'DOM манипуляции', 'Асинхронность']
    },
    {
      title: 'Модуль 3: React и современные фреймворки',
      duration: '4 недели',
      topics: ['Компоненты и props', 'Хуки и состояние', 'React Router', 'Context API']
    },
    {
      title: 'Модуль 4: TypeScript',
      duration: '2 недели',
      topics: ['Типизация', 'Интерфейсы и типы', 'Generics', 'Интеграция с React']
    },
    {
      title: 'Модуль 5: Backend разработка',
      duration: '3 недели',
      topics: ['Node.js основы', 'Express.js', 'REST API', 'Работа с базами данных']
    },
    {
      title: 'Модуль 6: Деплой и DevOps',
      duration: '2 недели',
      topics: ['Git и GitHub', 'CI/CD', 'Docker основы', 'Хостинг и домены']
    },
    {
      title: 'Модуль 7: Реальный проект',
      duration: '4 недели',
      topics: ['Планирование', 'Разработка full-stack приложения', 'Тестирование', 'Запуск в продакшн']
    },
    {
      title: 'Модуль 8: Карьера и трудоустройство',
      duration: '1 неделя',
      topics: ['Создание резюме', 'Подготовка портфолио', 'Прохождение собеседований', 'Первая работа']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-pink-600/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-1 bg-gradient-primary text-white border-0">
              🚀 Старт новой группы 15 декабря
            </Badge>
            <h1 className="font-heading text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Веб-разработка<br />с нуля до первого проекта
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              За 5 месяцев освой профессию веб-разработчика и создай реальный проект для своего портфолио
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105"
                onClick={() => navigate('/course')}
              >
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать обучение
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-8 py-6 text-lg rounded-xl"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="DollarSign" className="mr-2" size={20} />
                Тарифы и цены
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { icon: 'Users', label: '500+ выпускников', color: 'text-purple-600' },
                { icon: 'Award', label: '4.9/5 рейтинг', color: 'text-blue-600' },
                { icon: 'Briefcase', label: '85% трудоустройство', color: 'text-pink-600' },
                { icon: 'Clock', label: '5 месяцев', color: 'text-orange-600' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <Icon name={stat.icon as any} className={`mx-auto mb-2 ${stat.color}`} size={32} />
                  <p className="font-semibold text-sm text-gray-800">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-secondary text-white border-0">Программа</Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">8 модулей обучения</h2>
              <p className="text-xl text-gray-600">От основ до real-проекта и трудоустройства</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {courseModules.map((module, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`module-${idx}`}
                  className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-300 transition-all bg-white shadow-sm hover:shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-purple-50/50">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-lg">{module.title}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                          <Icon name="Clock" size={14} />
                          {module.duration}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="pl-16 space-y-2">
                      {module.topics.map((topic, topicIdx) => (
                        <div key={topicIdx} className="flex items-start gap-2">
                          <Icon name="CheckCircle2" className="text-green-500 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-0">⏰ Успей записаться</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">До старта курса осталось:</h2>
            
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              {[
                { value: timeLeft.days, label: 'дней' },
                { value: timeLeft.hours, label: 'часов' },
                { value: timeLeft.minutes, label: 'минут' },
                { value: timeLeft.seconds, label: 'секунд' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="font-heading text-4xl md:text-5xl font-black mb-2">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-white/80">{item.label}</div>
                </div>
              ))}
            </div>
            
            <p className="text-xl mb-6 text-white/90">Количество мест ограничено — осталось 12 из 30</p>
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-gray-100 font-bold px-8 py-6 text-lg rounded-xl shadow-xl"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Zap" className="mr-2" size={20} />
              Забронировать место
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-primary text-white border-0">Отзывы</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Что говорят наши выпускники</h2>
            <p className="text-xl text-gray-600">Истории успеха реальных студентов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-3xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-secondary text-white border-0">FAQ</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-gray-600">Ответы на популярные вопросы о курсе</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1" className="border-2 border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <Icon name="HelpCircle" className="text-purple-600 flex-shrink-0" size={24} />
                    <span className="font-semibold text-lg">Подойдет ли мне курс, если я совсем новичок?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed pl-9">
                    Да, курс специально разработан для начинающих. Мы начинаем с самых основ: что такое HTML, CSS, как работает интернет. 
                    Не требуется никаких предварительных знаний в программировании. Главное — желание учиться и время на практику (10-15 часов в неделю).
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="border-2 border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <Icon name="Clock" className="text-blue-600 flex-shrink-0" size={24} />
                    <span className="font-semibold text-lg">Сколько времени нужно уделять обучению?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed pl-9">
                    Рекомендуем выделять 10-15 часов в неделю: 5-7 часов на просмотр видеоуроков и 5-8 часов на практические задания. 
                    Курс длится 5 месяцев при таком темпе. Если у вас больше времени, можете проходить быстрее. 
                    Доступ к материалам остается навсегда, так что можете учиться в своем ритме.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="border-2 border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <Icon name="Laptop" className="text-pink-600 flex-shrink-0" size={24} />
                    <span className="font-semibold text-lg">Какой компьютер нужен для обучения?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed pl-9">
                    Подойдет любой современный компьютер или ноутбук (Windows, Mac или Linux). Минимальные требования: 4 ГБ RAM, 
                    процессор Intel i3 или аналог, 20 ГБ свободного места на диске. Все инструменты, которые мы используем — бесплатные. 
                    Подробная инструкция по установке предоставляется в первом модуле.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="border-2 border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <Icon name="Briefcase" className="text-orange-600 flex-shrink-0" size={24} />
                    <span className="font-semibold text-lg">Помогаете ли вы с трудоустройством?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed pl-9">
                    Да! В тарифах Pro и Премиум включена помощь с трудоустройством: подготовка резюме и портфолио, 
                    mock-интервью, доступ к закрытым вакансиям партнеров. 85% наших выпускников находят работу в течение 3 месяцев после окончания. 
                    В тарифе Премиум мы даём гарантию трудоустройства или возврат денег.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="border-2 border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <Icon name="CreditCard" className="text-green-600 flex-shrink-0" size={24} />
                    <span className="font-semibold text-lg">Можно ли оплатить в рассрочку?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed pl-9">
                    Да, мы предоставляем рассрочку на 12 месяцев без процентов и переплат. Например, тариф Профессиональный 
                    обойдётся всего в 3 333 ₽/месяц. Оформление рассрочки занимает 5 минут онлайн, одобрение моментальное. 
                    Также принимаем оплату картой, СБП и от юридических лиц.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6" className="border-2 border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <Icon name="Users" className="text-purple-600 flex-shrink-0" size={24} />
                    <span className="font-semibold text-lg">Как проходит обратная связь и поддержка?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed pl-9">
                    Каждое домашнее задание проверяется наставником с подробными комментариями. Ответы на вопросы в чате сообщества — 
                    в течение 2 часов в рабочее время. В тарифах Pro и Премиум доступны еженедельные групповые созвоны с преподавателем. 
                    В Премиуме — ещё и индивидуальные 1-на-1 сессии каждые 2 недели.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-7" className="border-2 border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <Icon name="Award" className="text-blue-600 flex-shrink-0" size={24} />
                    <span className="font-semibold text-lg">Получу ли я сертификат?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed pl-9">
                    Да, после успешного завершения курса и защиты финального проекта вы получите именной сертификат. 
                    Сертификат подтверждает, что вы прошли программу обучения и владеете навыками веб-разработки. 
                    Он будет полезен при поиске работы и пополнении портфолио.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-8" className="border-2 border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <Icon name="RefreshCw" className="text-pink-600 flex-shrink-0" size={24} />
                    <span className="font-semibold text-lg">Можно ли вернуть деньги, если не подойдёт?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed pl-9">
                    Да, первые 14 дней — пробный период. Если поймёте, что курс вам не подходит, мы вернём 100% оплаты без лишних вопросов. 
                    Это наш способ показать уверенность в качестве обучения. Просто напишите в поддержку, и мы оформим возврат в течение 3 рабочих дней.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-primary text-white border-0">Тарифы</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Выберите свой путь</h2>
            <p className="text-xl text-gray-600">Рассрочка без процентов на 12 месяцев</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <Card 
                key={plan.id}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  plan.popular ? 'border-4 border-purple-500 shadow-xl' : 'border-2'
                } ${selectedPlan === plan.id ? 'ring-4 ring-purple-300' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className={`bg-gradient-${plan.gradient.split(' ')[0].replace('from-', '')} text-white border-0 rounded-bl-xl rounded-tr-xl px-4 py-2`}>
                      🔥 Популярный
                    </Badge>
                  </div>
                )}
                
                <div className={`h-2 bg-gradient-to-r ${plan.gradient}`} />
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-heading text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="font-heading text-5xl font-black bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent">
                      {plan.price} ₽
                    </span>
                    <p className="text-sm text-gray-500 mt-1">или {Math.round(parseInt(plan.price.replace(' ', '')) / 12).toLocaleString()} ₽/мес</p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className={`w-full font-semibold py-6 rounded-xl transition-all ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:opacity-90 text-white shadow-lg' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                    onClick={() => {
                      setFormData({ ...formData, plan: plan.name });
                      setShowForm(true);
                    }}
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    Записаться на курс
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Не уверены в выборе?</p>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
              onClick={() => setShowForm(true)}
            >
              <Icon name="MessageCircle" className="mr-2" size={18} />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="w-full max-w-md animate-scale-in">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-heading text-2xl">Записаться на курс</CardTitle>
                  <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowForm(false)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                {formData.plan && (
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm font-medium">Выбранный тариф:</p>
                    <p className="text-lg font-bold text-purple-600">{formData.plan}</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowForm(false)}
                >
                  Отмена
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-gradient-primary text-white"
                >
                  <Icon name="Send" className="mr-2" size={16} />
                  Отправить
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="font-heading text-2xl font-bold mb-2">Готов начать свой путь в IT?</h3>
            <p className="text-gray-400">Присоединяйся к новому потоку и получи бесплатный вводный урок</p>
          </div>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 text-white px-8 py-6 rounded-xl shadow-xl"
            onClick={() => setShowForm(true)}
          >
            <Icon name="Rocket" className="mr-2" size={20} />
            Начать бесплатно
          </Button>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">© 2024 WebDev Academy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;