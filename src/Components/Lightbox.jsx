import images, { thumbnails } from '../data'
import iconPrev from '../assets/images/icon-previous.svg'
import iconNext from '../assets/images/icon-next.svg'
import { CgClose } from 'react-icons/cg'
import { useGlobalContext } from '../context'
import { FocusTrap } from '@mui/base'

const Lightbox = () => {
  const {
    lightbox,
    setLightbox,
    index,
    setIndex,
    prevImage,
    nextImage,
    closeLightbox,
  } = useGlobalContext()

  return (
    <FocusTrap open={lightbox}>
      <div
        role="dialog"
        onClick={closeLightbox}
        className={
          lightbox ? 'product__lightbox show-lightbox' : 'product__lightbox'
        }
        id="lightbox"
        aria-describedby="lightbox__header"
      >
        <div className="lightbox__header sr-only" id="lightbox__header">
          Product Photo Gallery
        </div>
        <div className="lightbox__content">
          <div className="lightbox__body">
            <button
              tabIndex={lightbox ? 0 : -1}
              className="btn-close"
              aria-label="close gallery"
              onClick={() => {
                setLightbox(false)
              }}
            >
              <CgClose />
            </button>
            <div className="lightbox__image">
              <button
                aria-label="previous image"
                tabIndex={lightbox ? 0 : -1}
                onClick={prevImage}
                className="btn-prev"
              >
                <img
                  src={iconPrev}
                  alt=""
                  aria-hidden="true"
                  width="12"
                  height="18"
                />
              </button>
              <img
                src={images[index]}
                alt="sneakers"
                width="546"
                height="546"
              />
              <button
                aria-label="next image"
                tabIndex={lightbox ? 0 : -1}
                onClick={nextImage}
                className="btn-next"
              >
                <img
                  src={iconNext}
                  alt=""
                  aria-hidden="true"
                  width="12"
                  height="18"
                />
              </button>
            </div>
            <ul className="product__thumbnails lightbox__items">
              {thumbnails.map((thumbnail, index) => {
                return (
                  <li key={index}>
                    <button
                      aria-label={`toggle image ${index + 1}`}
                      className="btn-thumbnail"
                      tabIndex={lightbox ? 0 : -1}
                      onClick={() => {
                        setIndex(index)
                      }}
                    >
                      <img src={thumbnail} alt="" width="80" height="80" />
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </FocusTrap>
  )
}
export default Lightbox
