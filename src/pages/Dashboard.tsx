import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user] = useState({
    name: 'Алексей Иванов',
    email: 'alexey.ivanov@example.com',
    avatar: 'АИ',
    plan: 'Профессиональный',
    startDate: '15 сентября 2024',
    completedLessons: 18,
    totalLessons: 48,
    streak: 7,
    points: 2450
  });

  const stats = [
    {
      title: 'Пройдено уроков',
      value: user.completedLessons,
      total: user.totalLessons,
      icon: 'BookOpen',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Дней подряд',
      value: user.streak,
      icon: 'Flame',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      suffix: ' дней'
    },
    {
      title: 'Набрано баллов',
      value: user.points,
      icon: 'Trophy',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Общий прогресс',
      value: Math.round((user.completedLessons / user.totalLessons) * 100),
      icon: 'Target',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      suffix: '%'
    }
  ];

  const achievements = [
    { id: 1, title: 'Первый урок', description: 'Завершили первый урок', icon: '🎯', unlocked: true, date: '15 сен' },
    { id: 2, title: 'Неделя в деле', description: '7 дней подряд обучения', icon: '🔥', unlocked: true, date: '22 сен' },
    { id: 3, title: 'HTML мастер', description: 'Завершили модуль по HTML', icon: '📝', unlocked: true, date: '29 сен' },
    { id: 4, title: 'JavaScript начало', description: 'Первый проект на JS', icon: '⚡', unlocked: true, date: '10 окт' },
    { id: 5, title: 'Месяц учёбы', description: '30 дней обучения', icon: '🎓', unlocked: false, date: null },
    { id: 6, title: 'React разработчик', description: 'Завершите модуль React', icon: '⚛️', unlocked: false, date: null }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'lesson',
      title: 'Завершили урок "Функции и замыкания"',
      time: '2 часа назад',
      points: '+50 баллов',
      icon: 'CheckCircle2',
      color: 'text-green-600'
    },
    {
      id: 2,
      type: 'practice',
      title: 'Сдали практическое задание',
      time: '5 часов назад',
      points: '+100 баллов',
      icon: 'Code',
      color: 'text-blue-600'
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Получили достижение "JavaScript начало"',
      time: '1 день назад',
      points: '+200 баллов',
      icon: 'Award',
      color: 'text-yellow-600'
    },
    {
      id: 4,
      type: 'lesson',
      title: 'Завершили урок "DOM манипуляции"',
      time: '1 день назад',
      points: '+50 баллов',
      icon: 'CheckCircle2',
      color: 'text-green-600'
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: 'Практика: TO-DO приложение',
      module: 'Модуль 2',
      deadline: '3 дня',
      priority: 'high',
      type: 'practice'
    },
    {
      id: 2,
      title: 'Асинхронность: Promise и async/await',
      module: 'Модуль 2',
      deadline: '5 дней',
      priority: 'medium',
      type: 'lesson'
    },
    {
      id: 3,
      title: 'Групповой созвон с наставником',
      module: 'Общее',
      deadline: '25 ноября',
      priority: 'medium',
      type: 'event'
    }
  ];

  const moduleProgress = [
    { id: 1, name: 'Модуль 1: Основы веб-разработки', completed: 5, total: 5, progress: 100, status: 'completed' },
    { id: 2, name: 'Модуль 2: JavaScript с нуля', completed: 5, total: 7, progress: 71, status: 'in-progress' },
    { id: 3, name: 'Модуль 3: React и современные фреймворки', completed: 0, total: 7, progress: 0, status: 'locked' },
    { id: 4, name: 'Модуль 4: TypeScript', completed: 0, total: 5, progress: 0, status: 'locked' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 border-4 border-white/30">
                <AvatarFallback className="bg-white text-purple-600 text-xl font-bold">
                  {user.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-heading text-2xl font-bold">Привет, {user.name.split(' ')[0]}! 👋</h1>
                <p className="text-white/90 text-sm">Продолжай в том же духе</p>
              </div>
            </div>
            <Button variant="secondary" onClick={() => navigate('/course')}>
              <Icon name="BookOpen" className="mr-2" size={18} />
              Продолжить обучение
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardDescription className="text-sm">{stat.title}</CardDescription>
                  <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                    <Icon name={stat.icon as any} className={stat.color} size={20} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">
                    {stat.value}
                  </span>
                  {stat.total && (
                    <span className="text-lg text-gray-500">/ {stat.total}</span>
                  )}
                  {stat.suffix && (
                    <span className="text-lg text-gray-500">{stat.suffix}</span>
                  )}
                </div>
                {stat.total && (
                  <Progress 
                    value={(stat.value / stat.total) * 100} 
                    className="mt-3 h-2"
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="BarChart3" size={24} />
                  Прогресс по модулям
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {moduleProgress.map((module) => (
                  <div key={module.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {module.status === 'completed' && (
                          <Icon name="CheckCircle2" className="text-green-600" size={20} />
                        )}
                        {module.status === 'in-progress' && (
                          <Icon name="PlayCircle" className="text-blue-600" size={20} />
                        )}
                        {module.status === 'locked' && (
                          <Icon name="Lock" className="text-gray-400" size={20} />
                        )}
                        <span className={`font-medium ${module.status === 'locked' ? 'text-gray-400' : ''}`}>
                          {module.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {module.completed}/{module.total}
                      </span>
                    </div>
                    <Progress value={module.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="Activity" size={24} />
                  Последняя активность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                      <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0`}>
                        <Icon name={activity.icon as any} className={activity.color} size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.title}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm text-gray-500">{activity.time}</span>
                          <Badge variant="secondary" className="text-xs">
                            {activity.points}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="CheckSquare" size={24} />
                  Предстоящие задачи
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div 
                    key={task.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer hover:shadow-md transition-all ${
                      task.priority === 'high' ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant={task.priority === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                        {task.module}
                      </Badge>
                      <Icon 
                        name={task.type === 'practice' ? 'Code' : task.type === 'event' ? 'Calendar' : 'Video'} 
                        size={16}
                        className="text-gray-400"
                      />
                    </div>
                    <p className="font-medium text-sm mb-2">{task.title}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Icon name="Clock" size={12} />
                      {task.deadline}
                    </div>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate('/course')}
                >
                  Перейти к обучению
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="Award" size={24} />
                  Достижения
                </CardTitle>
                <CardDescription>{achievements.filter(a => a.unlocked).length} из {achievements.length}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`relative aspect-square rounded-xl flex flex-col items-center justify-center p-2 transition-all cursor-pointer ${
                        achievement.unlocked
                          ? 'bg-gradient-to-br from-yellow-100 to-orange-100 hover:scale-105 shadow-md'
                          : 'bg-gray-100 opacity-50 grayscale'
                      }`}
                      title={achievement.description}
                    >
                      <span className="text-3xl mb-1">{achievement.icon}</span>
                      <span className="text-[10px] font-semibold text-center leading-tight">
                        {achievement.title}
                      </span>
                      {achievement.unlocked && achievement.date && (
                        <span className="text-[8px] text-gray-600 mt-1">{achievement.date}</span>
                      )}
                      {achievement.unlocked && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <Icon name="Check" size={12} className="text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="User" size={24} />
                  Информация о тарифе
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gradient-primary rounded-lg text-white">
                  <span className="font-semibold">{user.plan}</span>
                  <Icon name="Crown" size={20} />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Дата начала:</span>
                    <span className="font-medium">{user.startDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium text-xs">{user.email}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  <Icon name="Settings" className="mr-2" size={16} />
                  Настройки профиля
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
