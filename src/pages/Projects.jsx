import projects from '../data/projects';

function Projects() {
  return (
    <section>
      <h2>Proyectos</h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
        {projects.map((project) => (
          <li key={project.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>{project.name}</h3>
            <img
              src={project.image}
              alt={project.name}
              style={{ width: '100%', maxWidth: '320px' }}
            />
            <p>{project.description}</p>
            <a href={project.url} target='_blank' rel='noreferrer'>
              Ir al proyecto
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;