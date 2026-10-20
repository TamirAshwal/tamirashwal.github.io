import { useState } from 'react'
import { projects } from '../data/projects.js'
import ImageDialog from './ImageDialog.jsx'
import ProjectRow from './ProjectRow.jsx'

export default function Projects() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <section id="projects" className="section section--wide" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section__label">Projects</h2>
      <ul className="section__body project-list">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} onOpenImage={setActiveImage} />
        ))}
      </ul>
      <ImageDialog image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  )
}
