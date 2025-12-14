import image_25cc1061e2adcff08a2aa6a14d820727b85b6402 from 'figma:asset/25cc1061e2adcff08a2aa6a14d820727b85b6402.png';
import image_925ac374130a154c2d944d5f7807d72665f4bdf9 from 'figma:asset/925ac374130a154c2d944d5f7807d72665f4bdf9.png';
import image_22230d8ec1dff2f8765d24488eaeee0784d12041 from 'figma:asset/22230d8ec1dff2f8765d24488eaeee0784d12041.png';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { GraduationCap, Heart, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface Projet {
  id: number;
  title: string;
  description: string;
  image: string;
  priority: string;
  status: string;
  impact: string;
  besoin: string;
}

interface ProjetsProps {
  onNavigate: (page: string) => void;
}

export function Projets({ onNavigate }: ProjetsProps) {
  // Correction TS2347 : initialisation explicite du type
  const [projets, setProjets] = useState([] as Projet[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjets = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('projets').select('*').order('id', { ascending: true });
      if (error) setError(error.message);
      else setProjets((data ?? []) as Projet[]);
      setLoading(false);
    };
    fetchProjets();
  }, []);

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

  // Suppression d'un projet
  const handleDelete = async (id: number) => {
    if (!window.confirm('Voulez-vous vraiment supprimer ce projet ?')) return;
    setError('');
    setLoading(true);
    const { error } = await supabase.from('projets').delete().eq('id', id);
    if (error) setError(error.message);
    else setProjets((projets: Projet[]) => projets.filter((p: Projet) => p.id !== id));
    setLoading(false);
  };

  if (loading) return <div>Chargement des projets...</div>;
  if (error) return <div>Erreur : {error}</div>;

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
            {projets.map((projet: Projet) => (
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
                      <GraduationCap className="h-6 w-6 text-white" />
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
                      <div className="flex flex-wrap gap-1">
                        {projet.besoin.split(',').map((tag: string) => (
                          <span key={tag} className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button
                      variant="destructive"
                      className="bg-red-600 text-white hover:bg-red-800 rounded px-4 py-2 text-sm font-bold"
                      onClick={() => handleDelete(projet.id)}
                    >
                      Supprimer
                    </Button>
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
