import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      title: "Релаксирующий массаж",
      description: "Классический массаж всего тела для полного расслабления",
      price: "от 3 500 ₽",
      duration: "60 мин",
      image: "/img/d79b2d52-10db-4292-bdf5-732325aec63b.jpg"
    },
    {
      title: "Уход за лицом",
      description: "Глубокое очищение и увлажнение с натуральными компонентами",
      price: "от 4 500 ₽", 
      duration: "90 мин",
      image: "/img/fbffec47-603b-43ad-8a51-23fb235f64d6.jpg"
    },
    {
      title: "Стоун-терапия",
      description: "Массаж горячими камнями для глубокого расслабления",
      price: "от 5 500 ₽",
      duration: "75 мин", 
      image: "/img/fdac3ae3-3f30-4f6e-b965-74f630198a00.jpg"
    }
  ];

  const packages = [
    {
      title: "Пакет Гармония",
      services: ["Массаж", "Уход за лицом", "Ароматерапия"],
      price: "8 500 ₽",
      savings: "Экономия 1 500 ₽"
    },
    {
      title: "Пакет Релакс",
      services: ["Стоун-терапия", "Массаж ног", "Медитация"],
      price: "7 900 ₽", 
      savings: "Экономия 1 200 ₽"
    },
    {
      title: "VIP Программа",
      services: ["Все процедуры", "Персональный терапевт", "Органическая косметика"],
      price: "12 900 ₽",
      savings: "Экономия 3 000 ₽"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-secondary/30">
        <div className="absolute inset-0">
          <img 
            src="/img/fdac3ae3-3f30-4f6e-b965-74f630198a00.jpg" 
            alt="Spa Interior" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-background/40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Spa Practices
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Откройте мир глубокого расслабления и восстановления с нашими авторскими СПА-программами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full">
              <Icon name="Calendar" className="mr-2" />
              Записаться на сеанс
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full">
              <Icon name="Phone" className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши Услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Индивидуальные программы для восстановления души и тела
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-scale-in border-0 shadow-lg">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center justify-between">
                    {service.title}
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {service.duration}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button className="rounded-full">
                      Выбрать
                      <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">СПА-Программы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для максимального эффекта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                {index === 2 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Популярное
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground bg-green-50 text-green-700 px-3 py-1 rounded-full">
                    {pkg.savings}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pkg.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Icon name="Check" className="h-5 w-5 text-primary" />
                      <span>{service}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-6 rounded-full" size="lg">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Атмосфера</h2>
            <p className="text-xl text-muted-foreground">
              Погрузитесь в мир спокойствия и гармонии
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl aspect-square">
                <img 
                  src={service.image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Записаться на Сеанс</h2>
            <p className="text-xl text-muted-foreground">
              Выберите удобное время для своего путешествия к гармонии
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Ваше имя" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input placeholder="+7 (999) 000-00-00" className="h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="your@email.com" className="h-12" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Услуга</label>
                    <select className="w-full h-12 rounded-lg border border-input bg-background px-3 text-sm">
                      <option>Выберите услугу</option>
                      {services.map((service) => (
                        <option key={service.title}>{service.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Дата</label>
                    <Input type="date" className="h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Комментарий</label>
                  <Textarea 
                    placeholder="Расскажите о ваших пожеланиях..."
                    className="min-h-24"
                  />
                </div>
                <Button size="lg" className="w-full rounded-full text-lg py-6">
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">ул. Тверская, 15, Москва</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@spapractices.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Clock" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Часы работы</p>
                    <p className="text-muted-foreground">Ежедневно с 9:00 до 22:00</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Phone" className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Mail" className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Быстрая связь</h3>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" />
                <Textarea placeholder="Сообщение" />
                <Button className="w-full rounded-full">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Spa Practices</h3>
          <p className="text-background/70 mb-6">
            Ваш путь к гармонии и внутреннему покою
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
              <Icon name="Phone" className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
              <Icon name="Mail" className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
              <Icon name="MapPin" className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-background/20">
            <p className="text-background/60">
              © 2024 Spa Practices. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}