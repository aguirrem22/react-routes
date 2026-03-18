import { experiences, studies } from '../data/resume';

function Resume() {
  return (
    <section>
      <h2>Currículum</h2>

      <h3>Experiencia laboral</h3>
      <ul>
        {experiences.map((experience) => (
          <li key={experience.id}>
            <strong>{experience.title}</strong> - {experience.company} ({experience.date})
          </li>
        ))}
      </ul>

      <h3>Educación</h3>
      <ul>
        {studies.map((study) => (
          <li key={study.id}>
            <strong>{study.title}</strong> - {study.institution} ({study.date})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;