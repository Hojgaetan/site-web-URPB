import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

export default function Projects() {
  // Correction TS2347 : initialisation explicite des types d'état
  const [projets, setProjets] = useState([] as Projet[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({} as Partial<Projet>);
  const [editId, setEditId] = useState(null as number | null);
  const [imageFile, setImageFile] = useState(null as File | null);
  const [besoins, setBesoins] = useState([] as string[]);

  useEffect(() => {
    fetchProjets();
  }, []);
  useEffect(() => {
    // Synchronise le champ besoins avec le form.besoin (utile pour l'édition)
    if (form.besoin) {
      setBesoins(form.besoin.split(',').map((b: string) => b.trim()).filter(Boolean));
    } else {
      setBesoins([]);
    }
  }, [form.besoin]);

  const fetchProjets = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('projets').select('*').order('id', { ascending: true });
    if (error) setError(error.message);
    else setProjets(data || []);
    setLoading(false);
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Correction TS2709 : utiliser 'any' pour le type d'événement
  const handleImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleBesoinsChange = (e: any) => {
    const value = e.target.value;
    // Si l'utilisateur tape une virgule, on ajoute le tag
    if (value.endsWith(',')) {
      const tag = value.slice(0, -1).trim();
      if (tag && !besoins.includes(tag)) {
        setBesoins([...besoins, tag]);
        setForm({ ...form, besoin: [...besoins, tag].join(',') });
      }
      e.target.value = '';
    }
  };
  const handleRemoveBesoin = (tag: string) => {
    const newBesoins = besoins.filter((b: string) => b !== tag);
    setBesoins(newBesoins);
    setForm({ ...form, besoin: newBesoins.join(',') });
  };

  const handleContentChange = (value: string) => {
    setForm({ ...form, content: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    let imageUrl = form.image || '';
    // Correction besoin : toujours une chaîne, jamais null
    const besoinValue = (form.besoin !== undefined && form.besoin !== null) ? form.besoin : '';
    if (imageFile) {
      // Upload image to Supabase Storage
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
      const { error: uploadError } = await supabase.storage.from('projets').upload(fileName, imageFile);
      if (uploadError) {
        setError('Erreur lors de l\'upload de l\'image : ' + uploadError.message);
        return;
      }
      imageUrl = supabase.storage.from('projets').getPublicUrl(fileName).data.publicUrl;
    }
    if (editId) {
      // Update
      const { error } = await supabase.from('projets').update({ ...form, image: imageUrl, besoin: besoinValue }).eq('id', editId);
      if (error) setError(error.message);
    } else {
      // Insert
      const { error } = await supabase.from('projets').insert([{ ...form, image: imageUrl, besoin: besoinValue }]);
      if (error) setError(error.message);
    }
    setForm({});
    setEditId(null);
    setImageFile(null);
    fetchProjets();
  };

  const handleEdit = (projet: Projet) => {
    setForm(projet);
    setEditId(projet.id);
    setImageFile(null);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Supprimer ce projet ?')) return;
    const { error } = await supabase.from('projets').delete().eq('id', id);
    if (error) setError(error.message);
    fetchProjets();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-8">
      <h1 className="text-3xl font-bold mb-4">Gestion des projets</h1>
      <form onSubmit={handleSubmit} className="mb-8 space-y-2 bg-white p-6 rounded-lg shadow-lg border max-w-xl w-full min-h-[700px] relative">
        {error && (
          <div className="text-red-700 font-bold text-center my-4 border border-red-300 bg-red-100 p-2 rounded">
            {error}
          </div>
        )}
        <input name="title" value={form.title||''} onChange={handleChange} placeholder="Titre" className="border p-2 rounded w-full" required />
        <input type="file" accept="image/*" onChange={handleImageChange} className="border p-2 rounded w-full" />
        {form.image && !imageFile && (
          <img src={form.image} alt="Aperçu" className="w-32 h-20 object-cover mb-2" />
        )}
        <select name="priority" value={form.priority||''} onChange={handleChange} className="border p-2 rounded w-full" required>
          <option value="">Sélectionner la priorité</option>
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
        <select name="status" value={form.status||''} onChange={handleChange} className="border p-2 rounded w-full" required>
          <option value="">Sélectionner le statut</option>
          <option value="En plannification">En plannification</option>
          <option value="Recherche de financement">Recherche de financement</option>
          <option value="Etude en cours">Etude en cours</option>
          <option value="Négociation en cours">Négociation en cours</option>
          <option value="Collecte de fonds">Collecte de fonds</option>
          <option value="lancement imminent">lancement imminent</option>
          <option value="Recherche de partenaire">Recherche de partenaire</option>
          <option value="Plannification">Plannification</option>
          <option value="Terrain acquis">Terrain acquis</option>
        </select>
        <input name="impact" value={form.impact||''} onChange={handleChange} placeholder="Impact" className="border p-2 rounded w-full" required />
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {besoins.map((tag: string) => (
              <span key={tag} className="bg-green-200 text-green-800 px-2 py-1 rounded-full flex items-center">
                {tag}
                <button type="button" className="ml-1 text-red-600" onClick={() => handleRemoveBesoin(tag)}>&times;</button>
              </span>
            ))}
          </div>
          <input
            type="text"
            placeholder="Ajouter un besoin et taper une virgule"
            onChange={handleBesoinsChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <textarea name="description" value={form.description||''} onChange={handleChange} placeholder="Description courte" className="border p-2 rounded w-full" required />
        <label className="block font-semibold">Contenu détaillé du projet</label>
        <ReactQuill
          value={form.content || ''}
          onChange={handleContentChange}
          theme="snow"
          className="mb-4 bg-white"
        />
        <div className="h-8" />
        <button type="submit" style={{display: 'block', background: '#2563eb', color: 'white', fontWeight: 'bold', fontSize: '1.3rem', borderRadius: '0.5rem', width: '100%', padding: '1.2rem', marginTop: '2rem', boxShadow: '0 4px 16px #2563eb33', border: '3px solid #1e40af', zIndex: 1000, position: 'relative'}}>
          {editId ? 'Modifier' : 'Ajouter'}
        </button>
        {editId && <button type="button" onClick={()=>{setForm({});setEditId(null);setImageFile(null);}} className="ml-2 px-4 py-2 rounded bg-gray-300">Annuler</button>}
      </form>
      <hr className="w-full max-w-5xl border-t-4 border-blue-700 my-8" />
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Liste des projets</h2>
        {loading ? (
          <div className="text-center text-lg text-gray-700">Chargement...</div>
        ) : error ? (
          <div className="text-red-600 text-center">{error}</div>
        ) : projets.length === 0 ? (
          <div className="text-center text-gray-500 py-8">Aucun projet enregistré pour le moment.</div>
        ) : (
          <table className="w-full border bg-white rounded-lg shadow overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Titre</th>
                <th className="p-2">Image</th>
                <th className="p-2">Priorité</th>
                <th className="p-2">Statut</th>
                <th className="p-2">Impact</th>
                <th className="p-2">Besoins</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projets.map((projet: Projet) => (
                <tr key={projet.id} className="border-t">
                  <td className="p-2">{projet.title}</td>
                  <td className="p-2"><img src={projet.image} alt="" className="w-16 h-10 object-cover" /></td>
                  <td className="p-2">{projet.priority}</td>
                  <td className="p-2">{projet.status}</td>
                  <td className="p-2">{projet.impact}</td>
                  <td className="p-2">
                    <div className="flex flex-wrap gap-1">
                      {projet.besoin.split(',').map((tag: string) => (
                        <span key={tag} className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">{tag}</span>
                      ))}
                    </div>
                  </td>
                  <td className="p-2">
                    <button onClick={()=>handleEdit(projet)} className="text-blue-600 mr-2">Éditer</button>
                    <button onClick={()=>handleDelete(projet.id)} className="text-red-600">Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
