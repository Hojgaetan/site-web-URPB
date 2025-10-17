import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Heart, Handshake, Users, CreditCard, Building, Lightbulb } from 'lucide-react';

interface SoutenirProps {
  onNavigate: (page: string) => void;
}

export function Soutenir({ onNavigate }: SoutenirProps) {
  const optionsSoutien = [
    {
      icon: Heart,
      title: 'Faire un don',
      description: 'Soutenez financièrement nos projets selon vos moyens',
      actions: ['Don ponctuel', 'Don mensuel', 'Don pour un projet spécifique'],
      color: 'bg-gradient-to-br from-[#DC2626] to-[#B91C1C]',
      iconColor: 'text-[#DC2626]',
      bgColor: 'bg-red-50',
      borderColor: 'border-[#DC2626]',
      button: 'Donner maintenant'
    },
    {
      icon: Handshake,
      title: 'Devenir partenaire',
      description: 'Établissons un partenariat durable pour le développement',
      actions: ['Partenariat institutionnel', 'Partenariat technique', 'Partenariat commercial'],
      color: 'bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]',
      iconColor: 'text-[#2563EB]',
      bgColor: 'bg-blue-50',
      borderColor: 'border-[#2563EB]',
      button: 'Nous contacter'
    },
    {
      icon: Users,
      title: 'Bénévolat',
      description: 'Apportez votre expertise et votre temps à nos projets',
      actions: ['Expertise technique', 'Formation', 'Accompagnement'],
      color: 'bg-gradient-to-br from-[#16A34A] to-[#15803D]',
      iconColor: 'text-[#16A34A]',
      bgColor: 'bg-green-50',
      borderColor: 'border-[#16A34A]',
      button: 'Proposer son aide'
    }
  ];

  const niveauxDon = [
    {
      montant: '500 XOF',
      impact: 'Fournitures scolaires pour 5 enfants',
      badge: 'Ami',
      color: 'bg-yellow-100 text-[#EAB308]',
      buttonColor: 'border-[#EAB308] text-[#EAB308] hover:bg-yellow-50'
    },
    {
      montant: '1000 XOF',
      impact: 'Équipement médical de base',
      badge: 'Soutien',
      color: 'bg-red-100 text-[#DC2626]',
      buttonColor: 'border-[#DC2626] text-[#DC2626] hover:bg-red-50'
    },
    {
      montant: '2000 XOF',
      impact: 'Formation d\'un jeune en informatique',
      badge: 'Parrain',
      color: 'bg-blue-100 text-[#2563EB]',
      buttonColor: 'border-[#2563EB] text-[#2563EB] hover:bg-blue-50'
    },
    {
      montant: '5000 XOF',
      impact: 'Contribution au barrage anti-sel',
      badge: 'Bienfaiteur',
      color: 'bg-green-100 text-[#16A34A]',
      buttonColor: 'border-[#16A34A] text-[#16A34A] hover:bg-green-50'
    },
    {
      montant: '10.000 XOF',
      impact: 'Équipement pour le centre de santé',
      badge: 'Mécène',
      color: 'bg-orange-100 text-[#F97316]',
      buttonColor: 'border-[#F97316] text-[#F97316] hover:bg-orange-50'
    },
    {
      montant: 'Plus',
      impact: 'Impact majeur sur nos projets',
      badge: 'Partenaire',
      color: 'bg-purple-100 text-purple-600',
      buttonColor: 'border-purple-600 text-purple-600 hover:bg-purple-50'
    }
  ];

  const partenaires = [
    'Ministère de l\'Éducation du Sénégal',
    'ONG Internationale de Développement',
    'Fondation pour l\'Afrique',
    'Association des Sénégalais de France',
    'Coopération Technique Allemande'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl mb-6">
                Nous Soutenir
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Rejoignez-nous dans cette aventure extraordinaire et contribuez à transformer Brindiago. 
                Chaque geste compte dans notre mission de développement durable et solidaire.
              </p>
              <Button 
                className="bg-[#F97316] text-white hover:bg-[#EA580C] rounded-full px-8"
                onClick={() => onNavigate('contact')}
              >
                Prendre contact
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1656278345211-b98013b5cc57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwbWVldGluZyUyMHZpbGxhZ2V8ZW58MXx8fHwxNzU4Nzk5NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Communauté unie"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Message d'introduction */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Votre soutien fait la différence</h2>
          <p className="text-orange-100 text-lg mb-8 leading-relaxed">
            Chaque geste compte dans notre mission de développement. Que vous soyez un particulier, 
            une entreprise ou une institution, il existe de nombreuses façons de nous accompagner 
            dans la réalisation de nos projets pour Brindiago.
          </p>
          <p className="text-white text-xl">
            Ensemble, nous construisons un avenir meilleur pour notre communauté, 
            en respectant nos valeurs et en préservant notre identité.
          </p>
        </div>
      </section>

      {/* Options de soutien */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Comment nous soutenir ?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez les différentes façons de contribuer à nos projets et de rejoindre notre communauté.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {optionsSoutien.map((option, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow text-center border-2 ${option.borderColor}`}>
                <CardHeader>
                  <div className={`w-16 h-16 ${option.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <option.icon className={`h-8 w-8 ${option.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl mb-4">{option.title}</CardTitle>
                  <p className="text-gray-600">{option.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {option.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 ${option.color} rounded-full mr-3`}></div>
                        {action}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${option.color} text-white rounded-full`}
                    onClick={() => onNavigate('contact')}
                  >
                    {option.button}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Niveaux de don */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Niveaux de contribution</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Chaque montant a un impact concret sur nos projets. Découvrez comment votre contribution transforme notre communauté.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {niveauxDon.map((niveau, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2">
                <CardContent className="p-6">
                  <Badge className={`mb-4 ${niveau.color} border-2`}>{niveau.badge}</Badge>
                  <h3 className="text-2xl mb-2">{niveau.montant}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{niveau.impact}</p>
                  <Button 
                    variant="outline" 
                    className={`${niveau.buttonColor} border-2 rounded-full`}
                    onClick={() => onNavigate('contact')}
                  >
                    Choisir ce montant
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparence */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-8">Transparence et impact</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nous nous engageons à une transparence totale dans l'utilisation des fonds collectés. 
                Chaque don est utilisé de manière responsable et optimale pour maximiser l'impact sur nos projets.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                    <CreditCard className="h-6 w-6 text-[#2563EB]" />
                  </div>
                  <span className="text-gray-700">Système de paiement sécurisé</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-[#16A34A]" />
                  </div>
                  <span className="text-gray-700">Rapports financiers réguliers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mr-4">
                    <Lightbulb className="h-6 w-6 text-[#EAB308]" />
                  </div>
                  <span className="text-gray-700">Suivi de l'impact des projets</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border-2 border-gray-200">
              <h3 className="text-xl mb-6 text-center">Répartition des fonds</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Projets d'infrastructure</span>
                  <div className="flex items-center">
                    <div className="w-24 h-3 bg-gray-200 rounded-full mr-3">
                      <div className="w-16 h-3 bg-gradient-to-r from-[#16A34A] to-[#15803D] rounded-full"></div>
                    </div>
                    <span>65%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Éducation et formation</span>
                  <div className="flex items-center">
                    <div className="w-24 h-3 bg-gray-200 rounded-full mr-3">
                      <div className="w-12 h-3 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] rounded-full"></div>
                    </div>
                    <span>20%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Santé et bien-être</span>
                  <div className="flex items-center">
                    <div className="w-24 h-3 bg-gray-200 rounded-full mr-3">
                      <div className="w-6 h-3 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] rounded-full"></div>
                    </div>
                    <span>10%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Fonctionnement</span>
                  <div className="flex items-center">
                    <div className="w-24 h-3 bg-gray-200 rounded-full mr-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#EAB308] to-[#CA8A04] rounded-full"></div>
                    </div>
                    <span>5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires actuels */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Nos partenaires</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nous collaborons avec des organisations de confiance pour maximiser l'impact de nos actions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partenaires.map((partenaire, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-2">
                <CardContent className="flex items-center justify-center h-20">
                  <p className="text-gray-600 text-sm text-center">{partenaire}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action final */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#16A34A] to-[#15803D] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl mb-8">Prêt à nous rejoindre ?</h2>
          <p className="text-green-100 text-xl mb-8 leading-relaxed">
            Votre soutien, quel qu'il soit, contribue directement à l'amélioration des conditions de vie 
            à Brindiago et au développement durable de notre communauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-[#16A34A] hover:bg-green-50 rounded-full px-8"
              onClick={() => onNavigate('contact')}
            >
              Prendre contact
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#16A34A] rounded-full px-8"
              onClick={() => onNavigate('projets')}
            >
              Voir nos projets
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
