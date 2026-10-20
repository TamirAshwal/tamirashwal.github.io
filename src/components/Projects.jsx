import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects.js'
import ImageDialog from './ImageDialog.jsx'
import ProjectRow from './ProjectRow.jsx'

const featured = projects.filter((project) => project.featured !== false)
const more = projects.filter((project) => project.featured === false)

export default function Projects() {
  const [activeImage, setActiveImage] = useState(null)
  const [showMore, setShowMore] = useState(false)
  const firstMoreRef = useRef(null)

  // The button disappears once clicked, so move focus to the first project it revealed.
  useEffect(() => {
    if (showMore) firstMoreRef.current?.focus()
  }, [showMore])

  return (
    <section id="projects" className="section section--wide" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section__label">Projects</h2>
      <ul className="section__body project-list">
        {featured.map((project) => (
          <ProjectRow key={project.id} project={project} onOpenImage={setActiveImage} />
        ))}
        {showMore &&
          more.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              onOpenImage={setActiveImage}
              titleRef={i === 0 ? firstMoreRef : undefined}
            />
          ))}
      </ul>
      {more.length > 0 && !showMore && (
        <div className="section__body project-more">
          <button type="button" className="button" onClick={() => setShowMore(true)}>
            More projects ({more.length})
          </button>
        </div>
      )}
      <ImageDialog image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  )
}
