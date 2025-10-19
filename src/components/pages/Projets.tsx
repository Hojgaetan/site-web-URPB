import image_4cf7f880c3cc4cfbadbad6906e9a81b920afc94a from 'figma:asset/4cf7f880c3cc4cfbadbad6906e9a81b920afc94a.png';
import image_25cc1061e2adcff08a2aa6a14d820727b85b6402 from 'figma:asset/25cc1061e2adcff08a2aa6a14d820727b85b6402.png';
import image_925ac374130a154c2d944d5f7807d72665f4bdf9 from 'figma:asset/925ac374130a154c2d944d5f7807d72665f4bdf9.png';
import image_22230d8ec1dff2f8765d24488eaeee0784d12041 from 'figma:asset/22230d8ec1dff2f8765d24488eaeee0784d12041.png';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { GraduationCap, Book, Heart, Zap, Church, Shield, Computer, Users, Trophy } from 'lucide-react';

interface ProjetsProps {
  onNavigate: (page: string) => void;
}

export function Projets({ onNavigate }: ProjetsProps) {
  const projets = [
    {
      id: 1,
      icon: GraduationCap,
      title: 'Création de Lycée',
      description: 'Permettre aux jeunes du village et des localités environnantes de poursuivre leurs études secondaires.',
      impact: 'Éducation de 200+ élèves du secondaire',
      priority: 'Haute',
      status: 'En planification',
      image: image_22230d8ec1dff2f8765d24488eaeee0784d12041,
      besoin: 'Rénovation des bâtiments, équipement pédagogique, formation des enseignants, laboratoire scientifique, bibliothèque, salle informatique, construction de toilettes'
    },
    {
      id: 2,
      icon: Book,
      title: 'Daara moderne multifonctionel',
      description: 'Offrir un espace dédié à l\'éducation religieuse et culturelle de nos enfants.',
      impact: 'Formation spirituelle de 150+ enfants',
      priority: 'Moyenne',
      status: 'Recherche de financement',
      image: 'https://images.unsplash.com/photo-1745683512464-3d20bf25eff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbW9zcXVlJTIwdHJhZGl0aW9uYWwlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU4Nzk5NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      besoin: 'Construction du bâtiment, mobilier, recrutement d\'enseignants coraniques'
    },
    {
      id: 3,
      icon: Heart,
      title: 'Améliorer la case de santé',
      description: 'Transformer notre case de santé en dispensaire ou poste de santé moderne.',
      impact: 'Soins de qualité pour 2000+ habitants',
      priority: 'Haute',
      status: 'Étude en cours',
      image: image_4cf7f880c3cc4cfbadbad6906e9a81b920afc94a,
      besoin: 'Extension du bâtiment, équipements médicaux, formation du personnel'
    },
    {
      id: 4,
      icon: Zap,
      title: 'Électrification rurale',
      description: 'Raccorder Brindiago au réseau électrique national pour transformer notre économie.',
      impact: 'Éclairage public et domestique pour tout le village',
      priority: 'Très haute',
      status: 'Négociations en cours',
      image: image_4cf7f880c3cc4cfbadbad6906e9a81b920afc94a,
      besoin: 'Raccordement au réseau, installation de transformateurs, câblage'
    },
    {
      id: 5,
      icon: Church,
      title: 'Grande mosquée et église',
      description: 'Construire des lieux de culte dignes pour renforcer la cohésion communautaire.',
      impact: 'Espaces de prière pour toute la communauté',
      priority: 'Moyenne',
      status: 'Collecte de fonds',
      image: 'https://images.unsplash.com/photo-1745683512464-3d20bf25eff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbW9zcXVlJTIwdHJhZGl0aW9uYWwlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU4Nzk5NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      besoin: 'Terrain, matériaux de construction, main d\'œuvre spécialisée'
    },
    {
      id: 6,
      icon: Shield,
      title: 'Barrage anti-sel',
      description: 'Construire un barrage pour protéger nos rizières de l\'intrusion saline.',
      impact: 'Protection de 50 hectares de terres agricoles',
      priority: 'Très haute',
      status: 'Lancement imminent',
      image: image_925ac374130a154c2d944d5f7807d72665f4bdf9,
      besoin: 'Études techniques, matériaux de construction, ingénierie spécialisée'
    },
    {
      id: 7,
      icon: Computer,
      title: 'Centre polyvalent informatique',
      description: 'Créer un centre de formation informatique pour préparer nos jeunes au numérique.',
      impact: 'Formation de 100+ jeunes aux technologies',
      priority: 'Moyenne',
      status: 'Recherche de partenaires',
      image: image_4cf7f880c3cc4cfbadbad6906e9a81b920afc94a,
      besoin: 'Équipements informatiques, connexion internet, formateurs qualifiés'
    },
    {
      id: 8,
      icon: Computer,
      title: 'Centre de formation aux métiers',
      description: 'Former les jeunes de la commune et de celles environnantes aux métiers du bâtiment, de l’agriculture, de l’artisanat et du numérique, pour favoriser leur insertion.',
      impact: 'Insertion professionnelle de 300+ jeunes et création de micro-entreprises',
      priority: 'Moyenne',
      status: 'Planification',
      image: image_25cc1061e2adcff08a2aa6a14d820727b85b6402,
      besoin: 'Ateliers équipés, formateurs certifiés, partenariats avec entreprises, kits d’outillage'
    },
    {
      id: 9,
      icon: Trophy,
      title: 'Terrain de football',
      description: 'Aménager le nouveau terrain de football et un complexe sportif multifonctionnel pour les activités sportives.',
      impact: 'Infrastructure sportive pour toute la communauté et les communes environnantes',
      priority: 'Basse',
      status: 'Terrain acquis',
      image: image_4cf7f880c3cc4cfbadbad6906e9a81b920afc94a,
      besoin: 'Nivellement, gazon, buts, gradins'
    },
    {
      id: 10,
      icon: Users,
      title: 'Maison d’hôte',
      description: 'Construire une maison d’hôte pour accueillir les visiteurs et générer des revenus pour la communauté.',
      impact: 'Capacité d’hébergement de 10+ chambres et retombées économiques locales',
      priority: 'Moyenne',
      status: 'Recherche de financement',
      image: image_4cf7f880c3cc4cfbadbad6906e9a81b920afc94a,
      besoin: 'Construction, aménagement intérieur, mobilier, raccordements eau/électricité, gestion et entretien'
    },
   {
         id: 11,
         icon: Users,
         title: 'Espace culturel pour tous',
         description: 'Création d\'un espace culturel pour tous pour la commune et des localités environnantes.',
         impact: 'Accès à des activités artistiques, sportives et culturelles pour 200+ jeunes et adultes',
         priority: 'Moyenne',
         status: 'Planification',
         image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral',
         besoin: 'Salle polyvalente, bibliothèque, équipements audiovisuels, animateurs, budget d\'activités'
       },
   {
         id: 12,
         icon: Shield,
         title: 'Pisciculture communautaire',
         description: 'Mettre en place des bassins de pisciculture pour diversifier les revenus et renforcer la sécurité alimentaire.',
         impact: 'Production annuelle de 5+ tonnes de poisson, 20+ emplois directs/indirects',
         priority: 'Moyenne',
         status: 'Planification',
         image: image_925ac374130a154c2d944d5f7807d72665f4bdf9,
         besoin: 'Construction des bassins, alevins, alimentation, pompes/forage, formation, chaîne du froid'
       },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Très haute': return 'bg-red-100 text-red-800';
      case 'Haute': return 'bg-orange-100 text-orange-800';
      case 'Moyenne': return 'bg-yellow-100 text-yellow-800';
      case 'Basse': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Lancement imminent': return 'bg-blue-100 text-blue-800';
      case 'Négociations en cours': return 'bg-purple-100 text-purple-800';
      case 'Étude en cours': return 'bg-indigo-100 text-indigo-800';
      case 'Terrain acquis': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl mb-6">
                Nos Projets
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Des projets ambitieux pour transformer Brindiago et créer un avenir prospère pour notre communauté.
                Chaque initiative répond à un besoin réel identifié par nos habitants.
              </p>
              <Button
                className="bg-[#F97316] text-white hover:bg-[#EA580C] rounded-full px-8"
                onClick={() => onNavigate('soutenir')}
              >
                Soutenir nos projets
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src={image_22230d8ec1dff2f8765d24488eaeee0784d12041}
                  alt="Éducation"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <ImageWithFallback
                  src={image_925ac374130a154c2d944d5f7807d72665f4bdf9}
                  alt="Agriculture"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745683512464-3d20bf25eff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbW9zcXVlJTIwdHJhZGl0aW9uYWwlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU4Nzk5NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Culture"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <ImageWithFallback
                  src={image_25cc1061e2adcff08a2aa6a14d820727b85b6402}
                  alt="Communauté"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#16A34A] to-[#15803D] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Une vision, des projets concrets</h2>
            <p className="text-green-100 text-lg max-w-3xl mx-auto leading-relaxed">
              Chaque projet que nous menons répond à un besoin réel de notre communauté.
              Ensemble, ils forment une vision cohérente du développement durable de Brindiago,
              alliant tradition et modernité, éducation et santé, spiritualité et technologie.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-[#16A34A]" />
              </div>
              <h3 className="text-xl mb-2">Éducation</h3>
              <p className="text-green-100">Du primaire au lycée, formation coranique et numérique</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-[#16A34A]" />
              </div>
              <h3 className="text-xl mb-2">Santé</h3>
              <p className="text-green-100">Amélioration des infrastructures de soins</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#16A34A]" />
              </div>
              <h3 className="text-xl mb-2">Environnement</h3>
              <p className="text-green-100">Protection agricole et développement durable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des projets */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projets.map((projet) => (
              <Card key={projet.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  <ImageWithFallback
                    src={projet.image}
                    alt={projet.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#16A34A] rounded-lg flex items-center justify-center mr-4">
                      <projet.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-2">{projet.title}</h3>
                      <div className="flex gap-2 flex-wrap">
                        <Badge className={getPriorityColor(projet.priority) + " text-xs"}>
                          {projet.priority}
                        </Badge>
                        <Badge className={getStatusColor(projet.status) + " text-xs"}>
                          {projet.status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{projet.description}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm mb-1">Impact attendu</h4>
                      <p className="text-sm text-gray-600">{projet.impact}</p>
                    </div>

                    <div>
                      <h4 className="text-sm mb-1">Besoins identifiés</h4>
                      <p className="text-sm text-gray-600">{projet.besoin}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section
        className="py-16 lg:py-24 relative text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(249, 115, 22, 0.95), rgba(220, 38, 38, 0.95)), url('https://images.unsplash.com/photo-1713164833944-7c1e13aaac55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5lZ2FsJTIwdmlsbGFnZSUyMGNvbW11bml0eSUyMHBlb3BsZXxlbnwxfHx8fDE3NTg4MDEwODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl mb-8">Ensemble, transformons Brindiago</h2>
          <p className="text-xl text-white/95 mb-8 leading-relaxed">
            Chaque contribution compte. Que ce soit par un don, un partenariat ou votre expertise,
            vous pouvez nous aider à concrétiser ces projets qui changeront la vie de notre communauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-[#F97316] hover:bg-gray-100 rounded-full px-8"
              onClick={() => onNavigate('soutenir')}
            >
              Faire un don
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#F97316] rounded-full px-8"
              onClick={() => onNavigate('contact')}
            >
              Devenir partenaire
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
