import { useLayoutEffect, useRef } from 'react'
import ImageCarousel from './ImageCarousel.jsx'

// Image paths in the data are relative to public/; prefix them with the site base.
function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

// Fades the row in once it scrolls into view. Runs before paint so rows never flash;
// skipped entirely under reduced motion, leaving the row plainly visible.
function useReveal() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const element = ref.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    element.classList.add('reveal')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        element.classList.add('is-visible')
        observer.disconnect()
      },
      { threshold: 0.15 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}

export default function ProjectRow({ project, number, onOpenImage, titleRef }) {
  const { title, description, role, tags, images, mediaAspect, color, link, repoUrl } = project
  const rowRef = useReveal()
  const slides = images.map((image) => ({
    ...image,
    src: assetUrl(image.src),
    poster: image.poster && assetUrl(image.poster),
  }))

  return (
    <li className={color ? `project project--${color}` : 'project'} ref={rowRef}>
      <div className="project__text">
        <p className="project__number" aria-hidden="true">
          {String(number).padStart(2, '0')}
        </p>
        <h3 className="project__title" ref={titleRef} tabIndex={titleRef ? -1 : undefined}>
          {title}
        </h3>
        <p className="project__description">{description}</p>
        {role && <p className="project__role">{role}</p>}
        {tags.length > 0 && (
          <ul className="project__tags" aria-label="Technologies">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        <div className="project__links">
          {link && (
            <a className="link" href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}<span className="visually-hidden">: {title}</span>
            </a>
          )}
          <a className="link" href={repoUrl} target="_blank" rel="noopener noreferrer">
            View on GitHub<span className="visually-hidden">: {title}</span>
          </a>
        </div>
      </div>

      <div className="project__media" style={mediaAspect ? { '--media-aspect': mediaAspect } : undefined}>
        {slides.length > 0 ? (
          <ImageCarousel images={slides} title={title} onOpen={onOpenImage} />
        ) : (
          <div className="project__placeholder">TODO: add project images</div>
        )}
      </div>
    </li>
  )
}
