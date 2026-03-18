import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h2>Bienvenido a mi portfolio</h2>
      <p>
        Soy desarrollador web y en este sitio puedes ver mis proyectos y mi
        experiencia académica y laboral.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to='/projects'>Ver proyectos</Link>
        <Link to='/resume'>Ver currículum</Link>
      </div>
    </section>
  );
}

export default Home;