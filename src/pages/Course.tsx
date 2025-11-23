import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Course = () => {
  const navigate = useNavigate();
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [currentLesson, setCurrentLesson] = useState(0);

  const modules = [
    {
      id: 1,
      title: 'Модуль 1: Основы веб-разработки',
      duration: '2 недели',
      lessons: [
        {
          id: 1,
          title: 'Введение в веб-разработку',
          duration: '45 мин',
          type: 'video',
          description: 'Узнаете что такое Frontend и Backend, как работает интернет, какие технологии используются',
          materials: ['Презентация', 'Конспект', 'Дополнительные ссылки']
        },
        {
          id: 2,
          title: 'HTML5: структура веб-страницы',
          duration: '1 час 20 мин',
          type: 'video',
          description: 'Изучите семантические теги, формы, таблицы, мультимедиа элементы',
          materials: ['Шпаргалка по тегам', 'Практические задания', 'Код примеров']
        },
        {
          id: 3,
          title: 'CSS3: стилизация и layout',
          duration: '1 час 40 мин',
          type: 'video',
          description: 'Селекторы, каскад, специфичность, box model, позиционирование',
          materials: ['CSS шпаргалка', 'Задания', 'Готовые примеры']
        },
        {
          id: 4,
          title: 'Flexbox и Grid Layout',
          duration: '1 час 30 мин',
          type: 'video',
          description: 'Современные методы создания адаптивных макетов',
          materials: ['Flexbox guide', 'Grid guide', 'Практика']
        },
        {
          id: 5,
          title: 'Практика: создание первой страницы',
          duration: '2 часа',
          type: 'practice',
          description: 'Создадите лендинг для кофейни с адаптивным дизайном',
          materials: ['Макет в Figma', 'Техническое задание', 'Чек-лист']
        }
      ]
    },
    {
      id: 2,
      title: 'Модуль 2: JavaScript с нуля',
      duration: '3 недели',
      lessons: [
        {
          id: 6,
          title: 'Основы JavaScript: переменные и типы',
          duration: '1 час',
          type: 'video',
          description: 'Переменные, типы данных, операторы, преобразование типов',
          materials: ['Конспект', 'Интерактивные упражнения']
        },
        {
          id: 7,
          title: 'Условия и циклы',
          duration: '1 час 15 мин',
          type: 'video',
          description: 'if/else, switch, циклы for/while, break/continue',
          materials: ['Примеры кода', 'Задачи для решения']
        },
        {
          id: 8,
          title: 'Функции и области видимости',
          duration: '1 час 30 мин',
          type: 'video',
          description: 'Объявление функций, параметры, return, замыкания, стрелочные функции',
          materials: ['Шпаргалка', 'Практические задания']
        },
        {
          id: 9,
          title: 'Массивы и объекты',
          duration: '1 час 45 мин',
          type: 'video',
          description: 'Методы массивов, spread/rest, деструктуризация, работа с объектами',
          materials: ['Методы массивов', 'Примеры', 'Задачи']
        },
        {
          id: 10,
          title: 'DOM манипуляции',
          duration: '2 часа',
          type: 'video',
          description: 'Поиск элементов, изменение контента, стилей, обработка событий',
          materials: ['DOM API reference', 'Интерактивные примеры']
        },
        {
          id: 11,
          title: 'Асинхронность: Promise и async/await',
          duration: '1 час 50 мин',
          type: 'video',
          description: 'Колбэки, промисы, async/await, fetch API',
          materials: ['Конспект', 'Примеры API']
        },
        {
          id: 12,
          title: 'Практика: TO-DO приложение',
          duration: '3 часа',
          type: 'practice',
          description: 'Создадите полноценное приложение для управления задачами',
          materials: ['Техническое задание', 'Starter code', 'Решение']
        }
      ]
    },
    {
      id: 3,
      title: 'Модуль 3: React и современные фреймворки',
      duration: '4 недели',
      lessons: [
        {
          id: 13,
          title: 'Введение в React',
          duration: '1 час 20 мин',
          type: 'video',
          description: 'Что такое React, Virtual DOM, JSX, создание первого компонента',
          materials: ['React docs', 'Установка окружения']
        },
        {
          id: 14,
          title: 'Компоненты и Props',
          duration: '1 час 40 мин',
          type: 'video',
          description: 'Функциональные компоненты, передача данных через props, композиция',
          materials: ['Примеры компонентов', 'Best practices']
        },
        {
          id: 15,
          title: 'State и useState',
          duration: '1 час 30 мин',
          type: 'video',
          description: 'Управление состоянием, хук useState, обновление state',
          materials: ['Шпаргалка по хукам', 'Задания']
        },
        {
          id: 16,
          title: 'useEffect и жизненный цикл',
          duration: '1 час 45 мин',
          type: 'video',
          description: 'Побочные эффекты, зависимости, cleanup функции',
          materials: ['useEffect guide', 'Примеры']
        },
        {
          id: 17,
          title: 'React Router',
          duration: '1 час 20 мин',
          type: 'video',
          description: 'Навигация в SPA, роуты, параметры, защищенные роуты',
          materials: ['Router documentation', 'Код примеров']
        },
        {
          id: 18,
          title: 'Context API и управление состоянием',
          duration: '2 часа',
          type: 'video',
          description: 'Глобальное состояние, useContext, useReducer',
          materials: ['State management guide', 'Примеры']
        },
        {
          id: 19,
          title: 'Практика: Интернет-магазин',
          duration: '5 часов',
          type: 'practice',
          description: 'Создадите многостраничное приложение магазина с корзиной',
          materials: ['Дизайн макет', 'API документация', 'Starter']
        }
      ]
    },
    {
      id: 4,
      title: 'Модуль 4: TypeScript',
      duration: '2 недели',
      lessons: [
        {
          id: 20,
          title: 'Введение в TypeScript',
          duration: '1 час',
          type: 'video',
          description: 'Зачем нужен TypeScript, базовые типы, настройка окружения',
          materials: ['TypeScript handbook', 'tsconfig']
        },
        {
          id: 21,
          title: 'Интерфейсы и типы',
          duration: '1 час 30 мин',
          type: 'video',
          description: 'Создание типов, интерфейсы, type vs interface, union types',
          materials: ['Шпаргалка типов', 'Примеры']
        },
        {
          id: 22,
          title: 'Generics',
          duration: '1 час 20 мин',
          type: 'video',
          description: 'Обобщенные типы, дженерик функции и компоненты',
          materials: ['Generics guide', 'Задачи']
        },
        {
          id: 23,
          title: 'TypeScript + React',
          duration: '1 час 40 мин',
          type: 'video',
          description: 'Типизация компонентов, props, hooks, событий',
          materials: ['React TypeScript cheatsheet']
        },
        {
          id: 24,
          title: 'Практика: Рефакторинг на TypeScript',
          duration: '3 часа',
          type: 'practice',
          description: 'Переведете JS проект на TypeScript с полной типизацией',
          materials: ['Исходный код', 'Чек-лист миграции']
        }
      ]
    }
  ];

  const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0);
  const progress = (completedLessons.length / totalLessons) * 100;

  const toggleLesson = (lessonId: number) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId));
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => navigate('/dashboard')}
              >
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <div>
                <h1 className="font-heading text-3xl font-bold mb-2">Веб-разработка с нуля</h1>
                <p className="text-white/90">Ваш прогресс: {completedLessons.length} из {totalLessons} уроков</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => navigate('/dashboard')}
              >
                <Icon name="LayoutDashboard" className="mr-2" size={20} />
                Дашборд
              </Button>
              <Button variant="secondary" size="lg">
                <Icon name="Award" className="mr-2" size={20} />
                Сертификат
              </Button>
            </div>
          </div>
          <Progress value={progress} className="mt-4 h-3" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-gradient-primary text-white border-0">
                  <Icon name="Play" size={14} className="mr-1" />
                  Текущий урок
                </Badge>
                <CardTitle className="font-heading text-2xl">
                  {modules[0].lessons[currentLesson].title}
                </CardTitle>
                <CardDescription className="flex items-center gap-4 text-base">
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    {modules[0].lessons[currentLesson].duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name={modules[0].lessons[currentLesson].type === 'video' ? 'Video' : 'Code'} size={16} />
                    {modules[0].lessons[currentLesson].type === 'video' ? 'Видео урок' : 'Практика'}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <Icon name="Play" size={40} />
                    </div>
                    <p className="text-lg font-semibold">Видео урок</p>
                    <p className="text-sm text-white/70">Нажмите для просмотра</p>
                  </div>
                </div>

                <Tabs defaultValue="description" className="mb-6">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="description">Описание</TabsTrigger>
                    <TabsTrigger value="materials">Материалы</TabsTrigger>
                    <TabsTrigger value="notes">Заметки</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="space-y-4 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {modules[0].lessons[currentLesson].description}
                    </p>
                  </TabsContent>
                  <TabsContent value="materials" className="space-y-3 pt-4">
                    {modules[0].lessons[currentLesson].materials.map((material, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Icon name="FileText" className="text-purple-600" size={20} />
                          <span className="font-medium">{material}</span>
                        </div>
                        <Icon name="Download" className="text-gray-400" size={20} />
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="notes" className="pt-4">
                    <textarea 
                      className="w-full h-40 p-4 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                      placeholder="Делайте заметки во время просмотра урока..."
                    />
                  </TabsContent>
                </Tabs>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    disabled={currentLesson === 0}
                    onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                  >
                    <Icon name="ChevronLeft" className="mr-2" size={18} />
                    Предыдущий
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-primary text-white"
                    onClick={() => {
                      toggleLesson(modules[0].lessons[currentLesson].id);
                      if (currentLesson < modules[0].lessons.length - 1) {
                        setCurrentLesson(currentLesson + 1);
                      }
                    }}
                  >
                    {completedLessons.includes(modules[0].lessons[currentLesson].id) ? 'Следующий урок' : 'Завершить и продолжить'}
                    <Icon name="ChevronRight" className="ml-2" size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="font-heading">Программа курса</CardTitle>
                <CardDescription>4 модуля • {totalLessons} уроков</CardDescription>
              </CardHeader>
              <CardContent className="max-h-[calc(100vh-200px)] overflow-y-auto space-y-4">
                {modules.map((module) => (
                  <div key={module.id}>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-bold">
                        {module.id}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm mb-1">{module.title}</h3>
                        <p className="text-xs text-gray-500">{module.duration} • {module.lessons.length} уроков</p>
                      </div>
                    </div>
                    <div className="ml-11 space-y-2">
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className={`p-3 rounded-lg border-2 transition-all cursor-pointer hover:border-purple-300 ${
                            completedLessons.includes(lesson.id)
                              ? 'bg-green-50 border-green-200'
                              : 'bg-white border-gray-200'
                          }`}
                          onClick={() => {
                            setCurrentLesson(modules.findIndex(m => m.lessons.some(l => l.id === lesson.id)));
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 flex-1">
                              {completedLessons.includes(lesson.id) ? (
                                <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0" size={16} />
                              ) : (
                                <Icon name="Circle" className="text-gray-400 flex-shrink-0" size={16} />
                              )}
                              <span className="text-sm font-medium line-clamp-1">{lesson.title}</span>
                            </div>
                            <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{lesson.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;