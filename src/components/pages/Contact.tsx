import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const informationsContact = [
    {
      icon: MapPin,
      titre: 'Adresse',
      details: ['Brindiago', 'Région de Kaolack', 'Sénégal'],
      color: 'text-[#16A34A]',
      bgColor: 'bg-green-50'
    },
    {
      icon: Phone,
      titre: 'Téléphone',
      details: ['+221 XX XXX XX XX', '+221 YY YYY YY YY'],
      color: 'text-[#2563EB]',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Mail,
      titre: 'Email',
      details: ['contact@urpb-brindiago.org', 'president@urpb-brindiago.org'],
      color: 'text-[#F97316]',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Clock,
      titre: 'Horaires',
      details: ['Lundi - Vendredi: 8h00 - 17h00', 'Samedi: 8h00 - 12h00'],
      color: 'text-[#EAB308]',
      bgColor: 'bg-yellow-50'
    }
  ];

  const typesMessages = [
    'Demande d\'information générale',
    'Proposition de partenariat',
    'Offre de bénévolat',
    'Don ou financement',
    'Support technique',
    'Médias et presse',
    'Autre'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl mb-6">
                Contactez-nous
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nous sommes à votre écoute pour répondre à vos questions et étudier vos propositions de collaboration. 
                Que vous souhaitiez devenir partenaire, bénévole ou simplement en savoir plus sur nos actions.
              </p>
              <Button className="bg-[#16A34A] text-white hover:bg-[#15803D] rounded-full px-8">
                Nous écrire
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1656278345211-b98013b5cc57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwbWVldGluZyUyMHZpbGxhZ2V8ZW58MXx8fHwxNzU4Nzk5NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Contactez-nous"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Nos coordonnées</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Plusieurs moyens s'offrent à vous pour nous contacter. Choisissez celui qui vous convient le mieux.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {informationsContact.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className={`h-8 w-8 ${info.color}`} />
                </div>
                <h3 className="text-xl mb-4">{info.titre}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-blue-100 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de contact et carte */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                <p className="text-gray-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="prenom">Prénom *</Label>
                    <Input id="prenom" placeholder="Votre prénom" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom *</Label>
                    <Input id="nom" placeholder="Votre nom" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telephone">Téléphone</Label>
                  <Input id="telephone" type="tel" placeholder="+221 XX XXX XX XX" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organisation">Organisation</Label>
                  <Input id="organisation" placeholder="Nom de votre organisation (optionnel)" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Type de message *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le type de votre message" />
                    </SelectTrigger>
                    <SelectContent>
                      {typesMessages.map((type, index) => (
                        <SelectItem key={index} value={type.toLowerCase().replace(/\s+/g, '-')}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sujet">Sujet *</Label>
                  <Input id="sujet" placeholder="L'objet de votre message" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Détaillez votre demande ou proposition..." 
                    rows={6}
                    required 
                  />
                </div>

                <Button className="w-full bg-[#F97316] text-white hover:bg-[#EA580C] rounded-full">
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer le message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Champs obligatoires. Vos données sont protégées et ne seront pas transmises à des tiers.
                </p>
              </CardContent>
            </Card>

            {/* Carte et informations supplémentaires */}
            <div className="space-y-8">
              {/* Carte fictive */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Notre localisation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-[#16A34A] mx-auto mb-2" />
                      <p className="text-gray-700">Carte de Brindiago</p>
                      <p className="text-sm text-gray-600">Région de Kaolack, Sénégal</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Informations pratiques */}
              <Card className="border-2 border-[#16A34A]">
                <CardHeader>
                  <CardTitle className="text-[#16A34A]">Informations pratiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2 text-[#16A34A]">Comment nous rejoindre ?</h4>
                    <p className="text-gray-600 text-sm">
                      Brindiago est accessible par la route nationale depuis Kaolack. 
                      Des transports en commun relient régulièrement la ville au village.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="mb-2 text-[#2563EB]">Langues parlées</h4>
                    <p className="text-gray-600 text-sm">
                      Français, Wolof, Peul, Sérère
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 text-[#F97316]">Réseaux sociaux</h4>
                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="rounded-full border-[#2563EB] text-[#2563EB] hover:bg-blue-50"
                      >
                        Facebook
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="rounded-full border-[#16A34A] text-[#16A34A] hover:bg-green-50"
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ rapide */}
              <Card className="border-2 border-[#EAB308]">
                <CardHeader>
                  <CardTitle className="text-[#EAB308]">Questions fréquentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2 text-[#F97316]">Comment puis-je vous aider ?</h4>
                    <p className="text-gray-600 text-sm">
                      Vous pouvez nous aider par un don, un partenariat, du bénévolat ou en partageant notre mission.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="mb-2 text-[#2563EB]">Puis-je visiter Brindiago ?</h4>
                    <p className="text-gray-600 text-sm">
                      Bien sûr ! Contactez-nous pour organiser une visite de notre village et de nos projets.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 text-[#16A34A]">Délai de réponse</h4>
                    <p className="text-gray-600 text-sm">
                      Nous nous engageons à répondre à vos messages dans un délai de 48 heures.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl mb-8">Une question urgente ?</h2>
          <p className="text-orange-100 text-xl mb-8 leading-relaxed">
            Pour les demandes urgentes ou les opportunités de partenariat stratégique, 
            contactez directement notre président ou notre coordinateur de projets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-[#F97316] hover:bg-orange-50 rounded-full px-8"
            >
              <Phone className="h-4 w-4 mr-2" />
              Appeler maintenant
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#F97316] rounded-full px-8"
            >
              <Mail className="h-4 w-4 mr-2" />
              Email direct
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
