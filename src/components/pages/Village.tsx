import image_273b44ab6fee54dfe12fdf332a50bcfb3c01d5b6 from 'figma:asset/273b44ab6fee54dfe12fdf332a50bcfb3c01d5b6.png';
import image_74493c68144d3506fe192b8f1a2eeebf9a97b230 from 'figma:asset/74493c68144d3506fe192b8f1a2eeebf9a97b230.png';
import image_56138fd638aafa6c159f4f46f63fab4011690b82 from 'figma:asset/56138fd638aafa6c159f4f46f63fab4011690b82.png';
import image_d66bbfebbc1acdc9f6a2608b0b4bbbbe5a589bfe from 'figma:asset/d66bbfebbc1acdc9f6a2608b0b4bbbbe5a589bfe.png';
import image_b94c0c4240a0ba07f9a554ed6f22d5fcf880ac65 from 'figma:asset/b94c0c4240a0ba07f9a554ed6f22d5fcf880ac65.png';
import image_e45830bbd6563c54a4549adc04cf90558f47d4ae from 'figma:asset/e45830bbd6563c54a4549adc04cf90558f47d4ae.png';
import image_17b05c1508b7a0baf1b90afca6567166348e3058 from 'figma:asset/17b05c1508b7a0baf1b90afca6567166348e3058.png';
import image_25cc1061e2adcff08a2aa6a14d820727b85b6402 from 'figma:asset/25cc1061e2adcff08a2aa6a14d820727b85b6402.png';
import image_665cb7f41d6c472ad445801a59acefe4405dd740 from 'figma:asset/665cb7f41d6c472ad445801a59acefe4405dd740.png';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { School, Building, Heart, Zap, Wheat, Fish, Users, Target, TrendingUp } from 'lucide-react';

export function Village() {
  const stats = [
    { icon: Users, value: '2000+', label: 'Habitants', color: 'bg-gradient-to-br from-[#F97316] to-[#EA580C]' },
    { icon: School, value: '4', label: 'Infrastructures éducatives', color: 'bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]' },
    { icon: Target, value: '9', label: 'Projets en développement', color: 'bg-gradient-to-br from-[#16A34A] to-[#15803D]' },
  ];

  const infrastructures = [
    {
      icon: School,
      name: 'École Primaire',
      description: 'Une école primaire moderne qui accueille les enfants du village et des environs.',
      status: 'Opérationnelle',
      color: 'text-[#2563EB]',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Building,
      name: 'CEM (Centre d\'examen)',
      description: 'Ancien Collège d\'Enseignement Moyen reconverti en centre d\'examen.',
      status: 'Actif',
      color: 'text-[#EAB308]',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Heart,
      name: 'Case de Santé',
      description: 'Point de santé communautaire pour les soins de base.',
      status: 'Fonctionnelle',
      color: 'text-[#DC2626]',
      bgColor: 'bg-red-50'
    },
    {
      icon: Heart,
      name: 'Maternité',
      description: 'Maternité communautaire pour accompagner les naissances.',
      status: 'Opérationnelle',
      color: 'text-[#F97316]',
      bgColor: 'bg-orange-50'
    }
  ];

  const activites = [
    {
      icon: Wheat,
      name: 'Agriculture diversifiée',
      description: 'Cultures variées adaptées au climat local, principale source de revenus.',
      participants: 'Familles agricoles',
      image: image_d66bbfebbc1acdc9f6a2608b0b4bbbbe5a589bfe,
      color: 'text-[#16A34A]',
      bgColor: 'bg-green-50'
    },
    {
      icon: Wheat,
      name: 'Élevage',
      description: 'Élevage de bovins, caprins et volaille selon les traditions locales.',
      participants: 'Éleveurs traditionnels',
      image: image_74493c68144d3506fe192b8f1a2eeebf9a97b230,
      color: 'text-[#F97316]',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Wheat,
      name: 'Maraîchage',
      description: 'Culture de légumes menée principalement par les femmes et les jeunes.',
      participants: 'Femmes et jeunes',
      image: image_273b44ab6fee54dfe12fdf332a50bcfb3c01d5b6,
      color: 'text-[#EAB308]',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Fish,
      name: 'Pêche',
      description: 'Activité de pêche traditionnelle malgré les défis de l\'avancée des eaux salées.',
      participants: 'Pêcheurs locaux',
      image: image_74493c68144d3506fe192b8f1a2eeebf9a97b230,
      color: 'text-[#2563EB]',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl mb-6">
                Notre Village
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Brindiago est un village dynamique du Sénégal, où tradition et modernité se rencontrent 
                harmonieusement. Notre communauté de plus de 2000 habitants est unie par une vision commune : 
                construire ensemble un avenir prospère pour tous.
              </p>
              <Button className="bg-[#16A34A] text-white hover:bg-[#15803D] rounded-full px-8">
                Découvrir nos projets
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <ImageWithFallback
                src={image_b94c0c4240a0ba07f9a554ed6f22d5fcf880ac65}
                alt="Village de Brindiago"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Présentation du village */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-8">Brindiago en quelques mots</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Le village dispose déjà d'infrastructures importantes qui témoignent de notre engagement 
                pour l'éducation et la santé. Ces acquis constituent la base solide sur laquelle nous 
                bâtissons nos projets d'avenir.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Notre économie locale repose sur l'agriculture, l'élevage, le maraîchage et la pêche, 
                des activités qui nous permettent de maintenir notre autonomie tout en préservant nos traditions.
              </p>
              <Button className="bg-[#2563EB] text-white hover:bg-[#1D4ED8] rounded-full px-8">
                Nos activités économiques
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <ImageWithFallback
                src={image_17b05c1508b7a0baf1b90afca6567166348e3058}
                alt="Enfants de l'école de Brindiago"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructures existantes */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Nos infrastructures actuelles</h2>
            <p className="text-orange-100 text-lg max-w-3xl mx-auto leading-relaxed">
              Brindiago dispose déjà d'infrastructures essentielles qui constituent les fondations 
              de notre développement futur et témoignent de notre engagement pour l'éducation et la santé.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructures.map((infrastructure, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <infrastructure.icon className={`h-8 w-8 ${infrastructure.color}`} />
                </div>
                <h3 className="text-xl mb-4">{infrastructure.name}</h3>
                <p className="text-orange-100 mb-4 leading-relaxed">{infrastructure.description}</p>
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                  {infrastructure.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activités économiques */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Nos activités économiques</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              L'économie de Brindiago repose sur des activités traditionnelles diversifiées qui 
              assurent la subsistance de notre communauté.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activites.map((activite, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-2">
                <div className="aspect-video">
                  <ImageWithFallback
                    src={activite.image}
                    alt={activite.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className={`w-10 h-10 ${activite.bgColor} rounded-lg flex items-center justify-center mr-3`}>
                      <activite.icon className={`h-5 w-5 ${activite.color}`} />
                    </div>
                    <h3 className="text-xl">{activite.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{activite.description}</p>
                  <p className="text-sm">
                    <strong className={activite.color}>Participants : </strong>{activite.participants}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Défis actuels */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Nos défis actuels</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comme de nombreuses communautés rurales, Brindiago fait face à des défis que nous 
              sommes déterminés à surmonter ensemble.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#2563EB] pl-6 bg-white p-6 rounded-r-lg">
              <h3 className="text-xl mb-3 text-[#2563EB]">Avancée des eaux salées</h3>
              <p className="text-gray-600">
                L'intrusion saline affecte nos rizières et limite notre production agricole, 
                nécessitant des solutions innovantes pour préserver nos terres cultivables.
              </p>
            </div>
            <div className="border-l-4 border-[#EAB308] pl-6 bg-white p-6 rounded-r-lg">
              <h3 className="text-xl mb-3 text-[#EAB308]">Accès à l'électricité</h3>
              <p className="text-gray-600">
                Le village n'est pas encore raccordé au réseau électrique national, 
                limitant les opportunités de développement économique et social.
              </p>
            </div>
            <div className="border-l-4 border-[#16A34A] pl-6 bg-white p-6 rounded-r-lg">
              <h3 className="text-xl mb-3 text-[#16A34A]">Infrastructures à développer</h3>
              <p className="text-gray-600">
                Malgré nos acquis, nous avons besoin d'infrastructures supplémentaires 
                pour répondre aux besoins croissants de notre population.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
