import { createBrowserRouter, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function Layout() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '1.5rem' }}>
      <header>
        <h1>Portfolio</h1>
        <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <Link to='/'>Inicio</Link>
          <Link to='/projects'>Proyectos</Link>
          <Link to='/resume'>Currículum</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

export default router;