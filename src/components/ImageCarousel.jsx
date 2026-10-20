import { useEffect, useRef, useState } from 'react'

function isVideo(src) {
  return /\.(mp4|webm)$/i.test(src)
}

// Plays muted on a loop while on screen and pauses when scrolled away.
// With reduced motion it never autoplays; the native controls still work.
function SlideVideo({ video, tabIndex }) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) element.play().catch(() => {})
        else element.pause()
      },
      { threshold: 0.5 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      className="carousel__video"
      src={video.src}
      poster={video.poster}
      aria-label={video.alt}
      tabIndex={tabIndex}
      muted
      loop
      playsInline
      controls
      preload="metadata"
    />
  )
}

// One item at a time in a scroll-snap track: swipe on touch screens, Previous/Next elsewhere.
// The slide animation comes from CSS scroll-behavior, so reduced-motion users get none.
export default function ImageCarousel({ images, title, onOpen }) {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const count = images.length

  function goTo(i) {
    const track = trackRef.current
    track.scrollTo({ left: i * track.clientWidth })
  }

  function handleScroll() {
    const track = trackRef.current
    setIndex(Math.round(track.scrollLeft / track.clientWidth))
  }

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label={`${title}: images`}>
      <div className="carousel__track" ref={trackRef} onScroll={handleScroll}>
        {images.map((image, i) => (
          <div
            key={image.src}
            className="carousel__slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            {isVideo(image.src) ? (
              <SlideVideo video={image} tabIndex={i === index ? 0 : -1} />
            ) : (
              <button
                type="button"
                className="image-button"
                onClick={() => onOpen(image)}
                aria-label={`View larger: ${image.alt}`}
                tabIndex={i === index ? 0 : -1}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </button>
            )}
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="carousel__controls">
          <p className="carousel__count" aria-live="polite">
            {index + 1} / {count}
          </p>
          <div className="carousel__buttons">
            <button type="button" className="text-button" onClick={() => goTo(index - 1)} disabled={index === 0}>
              Previous
            </button>
            <button type="button" className="text-button" onClick={() => goTo(index + 1)} disabled={index === count - 1}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
