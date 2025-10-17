import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export function Actualites() {
  const articles = [
    {
      id: 1,
      title: 'Lancement officiel du projet de barrage anti-sel',
      excerpt: 'Les travaux préparatoires pour la construction du barrage anti-sel ont officiellement commencé avec la participation de toute la communauté.',
      content: 'Ce projet crucial pour l\'avenir agricole de Brindiago entre dans sa phase active. Les études techniques sont terminées et les premiers travaux de terrassement débuteront la semaine prochaine. Ce barrage permettra de protéger plus de 50 hectares de rizières contre l\'intrusion saline.',
      date: '15 Janvier 2024',
      auteur: 'Comité URPB',
      categorie: 'Projets',
      image: 'https://images.unsplash.com/photo-1686538653803-76ba115bd629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5lZ2FsJTIwcmljZSUyMGZhcm1pbmclMjBmaWVsZHN8ZW58MXx8fHwxNzU4Nzk5NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true
    },
    {
      id: 2,
      title: 'Signature du partenariat pour l\'électrification',
      excerpt: 'Un accord historique a été signé avec la SENELEC pour raccorder Brindiago au réseau électrique national.',
      content: 'Après des mois de négociations, nous avons signé un partenariat avec la SENELEC qui permettra l\'électrification complète du village d\'ici la fin de l\'année. Ce projet transformera radicalement la vie quotidienne des habitants.',
      date: '28 Décembre 2023',
      auteur: 'Président URPB',
      categorie: 'Partenariats',
      image: 'https://images.unsplash.com/photo-1567471945805-069e09c11098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdmlsbGFnZSUyMGNvbW11bml0eSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1ODc5OTQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    },
    {
      id: 3,
      title: 'Nouvelle récolte de riz réussie malgré les défis',
      excerpt: 'Malgré les défis liés au sel, notre communauté a réussi une excellente récolte cette saison grâce aux techniques adaptées.',
      content: 'Les agriculteurs de Brindiago ont su s\'adapter aux contraintes environnementales. Cette récolte exceptionnelle démontre la résilience de notre communauté et l\'importance des formations techniques dispensées cette année.',
      date: '15 Décembre 2023',
      auteur: 'Association des Agriculteurs',
      categorie: 'Agriculture',
      image: 'https://images.unsplash.com/photo-1686538653803-76ba115bd629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5lZ2FsJTIwcmljZSUyMGZhcm1pbmclMjBmaWVsZHN8ZW58MXx8fHwxNzU4Nzk5NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    },
    {
      id: 4,
      title: 'Programme de formation en informatique pour les jeunes',
      excerpt: 'Lancement d\'un programme de formation en informatique pour 30 jeunes du village en partenariat avec une ONG locale.',
      content: 'Ce programme innovant permettra aux jeunes de Brindiago d\'acquérir des compétences numériques essentielles. Les formations se déroulent chaque weekend et incluent la bureautique, la programmation de base et l\'entrepreneuriat digital.',
      date: '10 Décembre 2023',
      auteur: 'Comité Jeunesse',
      categorie: 'Éducation',
      image: 'https://images.unsplash.com/photo-1567471945805-069e09c11098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdmlsbGFnZSUyMGNvbW11bml0eSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1ODc5OTQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    },
    {
      id: 5,
      title: 'Extension de la maternité de Brindiago',
      excerpt: 'Inauguration de la nouvelle aile de la maternité qui double la capacité d\'accueil pour les mères et les nouveau-nés.',
      content: 'La nouvelle aile de la maternité comprend deux salles d\'accouchement supplémentaires et une unité de soins néonataux. Cette extension permet d\'offrir de meilleures conditions pour les naissances dans notre communauté.',
      date: '25 Novembre 2023',
      auteur: 'Comité Santé',
      categorie: 'Santé',
      image: 'https://images.unsplash.com/photo-1567471945805-069e09c11098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdmlsbGFnZSUyMGNvbW11bml0eSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1ODc5OTQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    },
    {
      id: 6,
      title: 'Festival culturel annuel de Brindiago',
      excerpt: 'Le festival culturel annuel a réuni plus de 1000 participants pour célébrer nos traditions et notre patrimoine.',
      content: 'Trois jours de festivités ont mis à l\'honneur la richesse culturelle de Brindiago : musique traditionnelle, danse, artisanat local et gastronomie. Cet événement renforce les liens communautaires et valorise notre identité.',
      date: '20 Novembre 2023',
      auteur: 'Comité Culturel',
      categorie: 'Culture',
      image: 'https://images.unsplash.com/photo-1656278345211-b98013b5cc57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwbWVldGluZyUyMHZpbGxhZ2V8ZW58MXx8fHwxNzU4Nzk5NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    }
  ];

  const categories = ['Tous', 'Projets', 'Partenariats', 'Agriculture', 'Éducation', 'Santé', 'Culture'];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Projets': return 'bg-blue-100 text-[#2563EB] border-[#2563EB]';
      case 'Partenariats': return 'bg-orange-100 text-[#F97316] border-[#F97316]';
      case 'Agriculture': return 'bg-green-100 text-[#16A34A] border-[#16A34A]';
      case 'Éducation': return 'bg-yellow-100 text-[#EAB308] border-[#EAB308]';
      case 'Santé': return 'bg-red-100 text-[#DC2626] border-[#DC2626]';
      case 'Culture': return 'bg-purple-100 text-purple-600 border-purple-600';
      default: return 'bg-gray-100 text-gray-800 border-gray-800';
    }
  };

  const getCategoryBgColor = (category: string) => {
    switch (category) {
      case 'Projets': return 'bg-[#2563EB] hover:bg-[#1D4ED8]';
      case 'Partenariats': return 'bg-[#F97316] hover:bg-[#EA580C]';
      case 'Agriculture': return 'bg-[#16A34A] hover:bg-[#15803D]';
      case 'Éducation': return 'bg-[#EAB308] hover:bg-[#CA8A04]';
      case 'Santé': return 'bg-[#DC2626] hover:bg-[#B91C1C]';
      case 'Culture': return 'bg-purple-600 hover:bg-purple-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  const articlePrincipal = articles.find(article => article.featured);
  const autresArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl mb-6">
                Actualités
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Suivez l'évolution de nos projets et la vie de notre communauté à travers nos dernières nouvelles. 
                Découvrez les réalisations, les partenariats et les événements qui façonnent l'avenir de Brindiago.
              </p>
              <Button className="bg-[#F97316] text-white hover:bg-[#EA580C] rounded-full px-8">
                S'abonner aux actualités
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1686538653803-76ba115bd629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5lZ2FsJTIwcmljZSUyMGZhcm1pbmclMjBmaWVsZHN8ZW58MXx8fHwxNzU4Nzk5NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Projets agricoles"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjaGlsZHJlbiUyMGFmcmljYSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTg3OTk0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Éducation"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1567471945805-069e09c11098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdmlsbGFnZSUyMGNvbW11bml0eSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1ODc5OTQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Communauté"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1656278345211-b98013b5cc57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwbWVldGluZyUyMHZpbGxhZ2V8ZW58MXx8fHwxNzU4Nzk5NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Événements"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres par catégorie */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className={`border-2 rounded-full ${
                  category === 'Tous' 
                    ? 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200' 
                    : `${getCategoryColor(category)} hover:opacity-80`
                }`}
              >
                <Tag className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Article principal */}
      {articlePrincipal && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge className={`mb-4 border-2 ${getCategoryColor(articlePrincipal.categorie)}`}>
                  {articlePrincipal.categorie}
                </Badge>
                <h2 className="text-4xl mb-4">{articlePrincipal.title}</h2>
                <div className="flex items-center text-gray-500 mb-6 space-x-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{articlePrincipal.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span className="text-sm">{articlePrincipal.auteur}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{articlePrincipal.content}</p>
                <Button className={`${getCategoryBgColor(articlePrincipal.categorie)} text-white rounded-full px-8`}>
                  Lire l'article complet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={articlePrincipal.image}
                    alt={articlePrincipal.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Autres articles */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Dernières nouvelles</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez les derniers développements de nos projets et les événements marquants de notre communauté.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {autresArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow border-2">
                <div className="aspect-video">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className={`mb-3 border-2 ${getCategoryColor(article.categorie)}`}>
                    {article.categorie}
                  </Badge>
                  <h3 className="text-xl mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-xs">{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span className="text-xs">{article.auteur}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className={`p-0 ${getCategoryColor(article.categorie).split(' ')[1]}`}>
                    Lire la suite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#16A34A] to-[#15803D] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl mb-8">Restez informé</h2>
          <p className="text-green-100 text-xl mb-8 leading-relaxed">
            Inscrivez-vous à notre newsletter pour recevoir les dernières actualités de Brindiago directement dans votre boîte email.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-full border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900"
            />
            <Button className="bg-white text-[#16A34A] hover:bg-green-50 px-6 rounded-full">
              S'inscrire
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
