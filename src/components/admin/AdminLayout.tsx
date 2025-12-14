import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Projects from './Projects';
import Blog from './Blog';
import Media from './Media';
import Users from './Users';

const pages = [
  { name: 'Tableau de bord', path: 'dashboard', component: <Dashboard /> },
  { name: 'Projets', path: 'projects', component: <Projects /> },
  { name: 'Blog', path: 'blog', component: <Blog /> },
  { name: 'Médias', path: 'media', component: <Media /> },
  { name: 'Utilisateurs', path: 'users', component: <Users /> },
];

export default function AdminLayout() {
  // Synchronisation de l'onglet sélectionné avec le hash de l'URL
  const getPageIndexFromHash = () => {
    const hash = window.location.hash.replace('#', '');
    const idx = pages.findIndex(p => p.path === hash);
    return idx >= 0 ? idx : 0;
  };
  const [selected, setSelected] = useState(getPageIndexFromHash());

  // Met à jour l'onglet sélectionné si le hash change (navigation via liens ou retour arrière)
  React.useEffect(() => {
    const onHashChange = () => {
      const idx = getPageIndexFromHash();
      setSelected(idx);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Met à jour le hash lors d'un clic sur un lien
  const handleSidebarClick = (idx: number) => {
    window.location.hash = pages[idx].path;
    setSelected(idx);
  };

  return (
    <div className="flex min-h-screen">
      {/* Barre latérale */}
      <aside className="w-64 flex flex-col p-6 shadow-lg z-50" style={{fontSize: '1.3rem', background: '#b91c1c', color: '#fff', minHeight: '100vh'}}>
        <h2 style={{color: '#fff'}} className="text-3xl font-extrabold mb-8 uppercase tracking-widest">Admin</h2>
        <nav className="flex-1">
          <ul className="space-y-4">
            {pages.map((page, idx) => (
              <li key={page.path}>
                <a
                  href={`#${page.path}`}
                  className={`w-full flex items-center gap-2 text-left px-4 py-3 rounded transition-colors text-lg block ${selected === idx ? 'bg-white font-extrabold shadow' : 'hover:bg-red-800'}`}
                  style={{color: selected === idx ? '#b91c1c' : '#fff', background: selected === idx ? '#fff' : 'transparent'}}
                  onClick={(e: any) => {
                    e.preventDefault();
                    handleSidebarClick(idx);
                  }}
                  aria-current={selected === idx ? 'page' : undefined}
                  data-testid={`sidebar-link-${idx}`}
                >
                  <span className="truncate" style={{color: selected === idx ? '#b91c1c' : '#fff'}}>{page.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {/* Contenu principal */}
      <main className="flex-1 p-8 bg-gray-50 min-h-screen">
        <div className="w-full max-w-4xl mx-auto" data-testid="admin-content">
          <div className="text-2xl font-bold mb-6 text-gray-800">{pages[selected].name}</div>
          <div className="bg-white rounded shadow p-6 min-h-[200px]">
            {pages[selected].component}
          </div>
        </div>
      </main>
    </div>
  );
}
