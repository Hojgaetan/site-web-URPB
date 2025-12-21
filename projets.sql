-- Table projets pour Supabase
create table if not exists projets (
  id serial primary key,
  title text not null,
  description text not null, -- description courte
  image text not null,       -- URL de l'image (stockée sur Supabase Storage)
  priority text not null,    -- Haute, Moyenne, Basse
  status text not null,      -- Statut du projet
  impact text not null,      -- Impact attendu
  besoin text not null,      -- Besoins (tags, séparés par des virgules)
  content text               -- Contenu détaillé (HTML de l'éditeur visuel)
);

