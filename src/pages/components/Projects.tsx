export default function Projects() {
  const projects = [
    { id: 1, title: 'Project One', desc: 'Short description of project one.' },
    { id: 2, title: 'Project Two', desc: 'Short description of project two.' },
  ]

  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map(p => (
          <article key={p.id} className="project">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
