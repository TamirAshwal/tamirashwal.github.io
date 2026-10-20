import ImageCarousel from './ImageCarousel.jsx'

// Image paths in the data are relative to public/; prefix them with the site base.
function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export default function ProjectRow({ project, onOpenImage }) {
  const { title, description, role, tags, images, link, repoUrl } = project
  const slides = images.map((image) => ({
    ...image,
    src: assetUrl(image.src),
    poster: image.poster && assetUrl(image.poster),
  }))

  return (
    <li className="project">
      <div className="project__text">
        <h3 className="project__title">{title}</h3>
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

      <div className="project__media">
        {slides.length > 0 ? (
          <ImageCarousel images={slides} title={title} onOpen={onOpenImage} />
        ) : (
          <div className="project__placeholder">TODO: add project images</div>
        )}
      </div>
    </li>
  )
}
