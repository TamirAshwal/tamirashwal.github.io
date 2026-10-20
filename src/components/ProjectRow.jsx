// Image paths in the data are relative to public/; prefix them with the site base.
function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

function ImageButton({ image, className, onOpen }) {
  return (
    <button
      type="button"
      className={`image-button ${className}`}
      onClick={() => onOpen(image)}
      aria-label={`View larger: ${image.alt}`}
    >
      <img src={image.src} alt={image.alt} loading="lazy" />
    </button>
  )
}

export default function ProjectRow({ project, onOpenImage }) {
  const { title, description, tags, images, repoUrl } = project
  const [main, ...thumbs] = images
    .slice(0, 3)
    .map((image) => ({ ...image, src: assetUrl(image.src) }))

  return (
    <li className="project">
      <div className="project__text">
        <h3 className="project__title">{title}</h3>
        <p className="project__description">{description}</p>
        {tags.length > 0 && (
          <ul className="project__tags" aria-label="Technologies">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        <a className="link project__repo" href={repoUrl} target="_blank" rel="noopener noreferrer">
          View on GitHub<span className="visually-hidden">: {title}</span>
        </a>
      </div>

      <div className="project__media">
        {main ? (
          <>
            <ImageButton image={main} className="project__image" onOpen={onOpenImage} />
            {thumbs.length > 0 && (
              <div className="project__thumbs">
                {thumbs.map((image) => (
                  <ImageButton key={image.src} image={image} className="project__thumb" onOpen={onOpenImage} />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="project__placeholder">TODO: add project images</div>
        )}
      </div>
    </li>
  )
}
