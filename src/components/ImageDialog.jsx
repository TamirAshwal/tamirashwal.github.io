import { useEffect, useRef } from 'react'

// Native <dialog>: Esc closes it, and focus returns to the button that opened it.
export default function ImageDialog({ image, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (image && !dialog.open) dialog.showModal()
    if (!image && dialog.open) dialog.close()
  }, [image])

  // The inner wrapper fills the dialog, so a click on the dialog itself is a backdrop click.
  function handleClick(event) {
    if (event.target === ref.current) ref.current.close()
  }

  return (
    <dialog
      ref={ref}
      className="image-dialog"
      aria-label={image ? image.alt : undefined}
      onClose={onClose}
      onClick={handleClick}
    >
      {image && (
        <div className="image-dialog__inner">
          <button type="button" className="text-button image-dialog__close" onClick={() => ref.current.close()}>
            Close
          </button>
          <img src={image.src} alt={image.alt} />
        </div>
      )}
    </dialog>
  )
}
