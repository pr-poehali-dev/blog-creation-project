import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'grove', label: 'THE GROVE', icon: 'Flower2' },
    { id: 'teplitsa', label: 'TEPLITSA', icon: 'Sprout' },
    { id: 'compost', label: 'THE COMPOST', icon: 'Leaf' },
    { id: 'grot', label: 'GROT', icon: 'Mountain' }
  ];

  const posts = [
    {
      id: 1,
      category: 'teplitsa',
      title: 'Каменные истории',
      description: 'Открытие, давность, искусственные переживания и земной оттенок тишь',
      image: 'https://cdn.poehali.dev/files/96cba508-0c2d-48f4-aad2-3333a764b498.png',
      date: '21.10.2025'
    },
    {
      id: 2,
      category: 'grove',
      title: 'Моя главная цель года: просто быть красивой',
      description: 'Эстетика повседневности и поиск красоты в деталях',
      image: 'https://cdn.poehali.dev/files/5455cced-e832-4333-8eb8-fe4a0896427b.png',
      date: '21.08.2025'
    },
    {
      id: 3,
      category: 'compost',
      title: 'Сторителлинг новая индустрия',
      description: 'Как я выгораю создавая контент: контент-расписание на неделю',
      image: 'https://cdn.poehali.dev/files/9933a416-011b-4702-9c93-46b952dc6a0b.png',
      date: '21.08.2025'
    }
  ];

  const filteredPosts = activeCategory === 'all' || activeCategory === 'home' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'secondary'}
                className="rounded-full px-4 md:px-6 py-2 text-sm md:text-base transition-all hover:scale-105"
                onClick={() => setActiveCategory(cat.id)}
              >
                <Icon name={cat.icon as any} className="mr-2 h-4 w-4" />
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <header className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/c2dced24-cb27-4fec-b1d1-dd4721806cb5.png')`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center px-4 fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-6 tracking-wider">
            TEPLITSA
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Теплица идей — бэкстейдж моего творчества: как рождаются мои идеи, тексты и какие источники вдохновляют
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="h-8 w-8 text-primary" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs uppercase tracking-wider font-medium">
                    {categories.find(c => c.id === post.category)?.label}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Читать
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <Icon name="FileText" className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">Пока нет публикаций в этой категории</p>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 TEPLITSA. Художественный блог
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
