import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Projects from './Projects';
import Blog from './Blog';
import Media from './Media';
import Users from './Users';

const pages = [
  { name: 'Tableau de bord', component: <Dashboard /> },
  { name: 'Projets', component: <Projects /> },
  { name: 'Blog', component: <Blog /> },
  { name: 'Médias', component: <Media /> },
  { name: 'Utilisateurs', component: <Users /> },
];

export default function AdminLayout() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8">Admin</h2>
        <nav className="flex-1">
          <ul className="space-y-4">
            {pages.map((page, idx) => (
              <li key={page.name}>
                <button
                  className={`w-full text-left px-4 py-2 rounded ${selected === idx ? 'bg-gray-700' : 'hover:bg-gray-800'}`}
                  onClick={() => setSelected(idx)}
                >
                  {page.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-50">
        {pages[selected].component}
      </main>
    </div>
  );
}
