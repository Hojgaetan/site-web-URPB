import image_0f1cb8a0e90633710f1103b0894e93b1e53a2ebd from 'figma:asset/0f1cb8a0e90633710f1103b0894e93b1e53a2ebd.png';
import image_c6f9996a53725c368ec1adb976c9d79f9f2b6f4c from 'figma:asset/c6f9996a53725c368ec1adb976c9d79f9f2b6f4c.png';
import image_25cc1061e2adcff08a2aa6a14d820727b85b6402 from 'figma:asset/25cc1061e2adcff08a2aa6a14d820727b85b6402.png';
import image_d66bbfebbc1acdc9f6a2608b0b4bbbbe5a589bfe from 'figma:asset/d66bbfebbc1acdc9f6a2608b0b4bbbbe5a589bfe.png';
import image_4d08182c2e6165329b31a6fa041ac521cc7ac01d from 'figma:asset/4d08182c2e6165329b31a6fa041ac521cc7ac01d.png';
import image_bb00bf204ddf657bd680be33b6a9a45038c851ea from 'figma:asset/bb00bf204ddf657bd680be33b6a9a45038c851ea.png';
import image_17b05c1508b7a0baf1b90afca6567166348e3058 from 'figma:asset/17b05c1508b7a0baf1b90afca6567166348e3058.png';
import image_fcd9807e6dd7bddbd28d64d1b4c76b5e54c8c12f from 'figma:asset/fcd9807e6dd7bddbd28d64d1b4c76b5e54c8c12f.png';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight, Users, Target, Heart, CheckCircle, Award, Lightbulb } from 'lucide-react';

interface AccueilProps {
  onNavigate: (page: string) => void;
}

export function Accueil({ onNavigate }: AccueilProps) {
  const heroImages = [
    image_c6f9996a53725c368ec1adb976c9d79f9f2b6f4c,
    image_17b05c1508b7a0baf1b90afca6567166348e3058,
    image_0f1cb8a0e90633710f1103b0894e93b1e53a2ebd,
    image_bb00bf204ddf657bd680be33b6a9a45038c851ea,
    image_4d08182c2e6165329b31a6fa041ac521cc7ac01d,
    image_d66bbfebbc1acdc9f6a2608b0b4bbbbe5a589bfe
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Représentation et Organisation',
      description: 'Nous travaillons ensemble pour promouvoir des changements politiques qui bénéficient à toute notre communauté et développons des plans qui répondent aux besoins que nous avons identifiés.'
    },
    {
      icon: Award,
      title: 'Emplois, Ressources et Éducation',
      description: 'Nous créons des opportunités d\'emploi, facilitons l\'accès aux ressources et développons des programmes éducatifs adaptés aux besoins de notre communauté.'
    },
    {
      icon: Lightbulb,
      title: 'Voix Unifiée de notre Communauté',
      description: 'Nous rassemblons les voix de Brindiago pour parler d\'une seule voix et défendre efficacement les intérêts de notre village sur la scène locale et nationale.'
    }
  ];

  const blogPosts = [
    {
      image: image_c6f9996a53725c368ec1adb976c9d79f9f2b6f4c,
      title: 'La Culture de Brindiago',
    },
    {
      image: image_17b05c1508b7a0baf1b90afca6567166348e3058,
      title: 'Outils, Ressources et Éducation',
    },
    {
      image: image_0f1cb8a0e90633710f1103b0894e93b1e53a2ebd,
      title: 'L\'Agriculture Durable à Brindiago',
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {heroImages.map((image, index) => (
                <div key={index} className={`${index === 0 ? 'row-span-2' : ''} ${index === 2 ? 'col-span-2' : ''}`}>
                  <ImageWithFallback
                    src={image}
                    alt={`Brindiago community ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* Content */}
            <div>
              <h1 className="text-4xl lg:text-6xl mb-6">
                Agir ensemble pour Brindiago
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nous sommes une organisation communautaire dédiée au développement et à la promotion du village de Brindiago au Sénégal. 
                À travers des projets concrets et des initiatives durables, nous œuvrons ensemble pour construire un avenir meilleur pour notre communauté.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-[#16A34A] text-white hover:bg-[#15803D] rounded-full px-8"
                  onClick={() => onNavigate('projets')}
                >
                  Rejoignez-nous
                </Button>
                <Button 
                  variant="outline" 
                  className="rounded-full px-8 border-[#16A34A] text-[#16A34A] hover:bg-green-50"
                  onClick={() => onNavigate('village')}
                >
                  Découvrir
                </Button>
              </div>
              <div className="mt-12">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">MEMBRES URPB</p>
                <p className="text-4xl">+2000 MEMBRES</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-8">À propos de nous</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                L'Union pour la Rénovation et la Promotion de Brindiago (URPB) est une organisation communautaire 
                axée sur le développement durable de notre village. Nous rassemblons les résidents, la diaspora et les partenaires 
                autour d'une vision partagée de progrès et de prospérité.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Notre travail couvre l'éducation, la santé, l'agriculture et le développement des infrastructures, créant un changement 
                positif durable pour plus de 2 000 membres de la communauté. Grâce à la collaboration et à la détermination, nous 
                construisons l'avenir de Brindiago tout en honorant nos traditions.
              </p>
              <Button 
                className="bg-[#16A34A] text-white hover:bg-[#15803D] rounded-full px-8"
                onClick={() => onNavigate('village')}
              >
                En savoir plus
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <ImageWithFallback
                src={image_c6f9996a53725c368ec1adb976c9d79f9f2b6f4c}
                alt="Brindiago community"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Members Benefit Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Avantages pour nos membres</h2>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
              Quand vous rejoignez l'URPB, vous devenez partie d'une communauté puissante qui œuvre ensemble pour un changement positif. 
              Voici quelques-unes des façons dont l'adhésion vous profite ainsi qu'à toute notre communauté.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-[#2563EB]" />
                </div>
                <h3 className="text-xl mb-4">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Nos derniers articles</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Restez informé des dernières nouvelles, histoires et développements de notre communauté à Brindiago.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">{post.title}</h3>
                  <Button variant="ghost" className="text-[#16A34A] hover:text-[#15803D] p-0">
                    Lire la suite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-8">Faire un don</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Votre soutien a un impact direct sur nos projets de développement communautaire. Chaque contribution, 
                quelle que soit sa taille, nous aide à construire un avenir meilleur pour Brindiago.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                De l'éducation et des soins de santé aux infrastructures et à l'agriculture, vos dons financent des 
                projets concrets qui transforment des vies et renforcent notre communauté pour les générations à venir.
              </p>
              <Button 
                className="bg-[#F97316] text-white hover:bg-[#EA580C] rounded-full px-8"
                onClick={() => onNavigate('soutenir')}
              >
                Faire un don
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <ImageWithFallback
                src={image_bb00bf204ddf657bd680be33b6a9a45038c851ea}
                alt="Community work"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section 
        className="py-16 lg:py-24 relative text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(22, 163, 74, 0.9), rgba(37, 99, 235, 0.9)), url(${image_c6f9996a53725c368ec1adb976c9d79f9f2b6f4c})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl mb-8">Pourquoi nous rejoindre ?</h2>
          <p className="text-xl text-white/95 mb-8 leading-relaxed">
            Rejoignez une communauté qui fait vraiment bouger les choses. Ensemble, nous construisons un avenir 
            plus fort et plus prospère pour tous à Brindiago.
          </p>
          <Button 
            className="bg-white text-[#16A34A] hover:bg-gray-100 rounded-full px-8"
            onClick={() => onNavigate('soutenir')}
          >
            Rejoignez-nous
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Questions Fréquentes</h2>
            <p className="text-gray-600 text-lg">
              Trouvez des réponses aux questions couramment posées sur l'URPB et nos initiatives communautaires.
            </p>
          </div>
          <div className="space-y-8">
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl mb-2">Comment puis-je devenir membre de l'URPB ?</h3>
              <p className="text-gray-600">
                Rejoindre l'URPB est ouvert à tous ceux qui partagent notre vision pour le développement de Brindiago. 
                Vous pouvez devenir membre en nous contactant directement ou en assistant à l'une de nos réunions communautaires.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl mb-2">Sur quels projets l'URPB travaille-t-elle actuellement ?</h3>
              <p className="text-gray-600">
                Nous avons neuf projets de développement majeurs incluant les infrastructures éducatives, l'amélioration des soins de santé, 
                l'électrification et les initiatives de protection agricole.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl mb-2">Comment les dons sont-ils utilisés ?</h3>
              <p className="text-gray-600">
                Tous les dons vont directement vers nos projets de développement communautaire. Nous maintenons une transparence totale 
                avec des rapports financiers réguliers montrant exactement comment les fonds sont alloués et utilisés.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}