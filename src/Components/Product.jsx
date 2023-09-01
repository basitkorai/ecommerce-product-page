import { useState } from 'react'
import images, { thumbnails } from '../data'
import iconPrev from '../assets/images/icon-previous.svg'
import iconNext from '../assets/images/icon-next.svg'
import iconPlus from '../assets/images/icon-plus.svg'
import iconMinus from '../assets/images/icon-minus.svg'
import { RiShoppingCartLine } from 'react-icons/ri'
import Lightbox from './Lightbox'
import { useGlobalContext } from '../context'

const Product = () => {
  const [tempState, setTempState] = useState(0)
  const {
    setLightbox,
    index,
    setIndex,
    prevImage,
    nextImage,
    totalItems,
    setTotalItems,
    isCartOpen,
    isSidebarOpen,
  } = useGlobalContext()

  const increaseCart = () => {
    setTempState((index) => {
      const newIndex = index + 1
      return newIndex
    })
  }
  const decreaseCart = () => {
    setTempState((index) => {
      if (index <= 0) {
        return 0
      }
      const newIndex = index - 1
      return newIndex
    })
  }

  return (
    <section className="product">
      <div className="product__image-wrapper">
        <div className="product__image">
          <button
            onClick={prevImage}
            className={`${
              isCartOpen || isSidebarOpen ? 'btn-prev' : 'btn-prev zindex'
            }`}
            aria-label="previous image"
          >
            <img src={iconPrev} alt="" />
          </button>
          <img
            src={images[index]}
            alt=""
            aria-controls="lightbox"
            onClick={() => {
              setLightbox(true)
            }}
          />
          <button
            onClick={nextImage}
            className={`${
              isCartOpen || isSidebarOpen ? 'btn-next' : 'btn-next zindex'
            }`}
            aria-label="next image"
          >
            <img src={iconNext} alt="" />
          </button>
        </div>
        <div className="">
          <ul className="product__thumbnails">
            {thumbnails.map((thumbnail, index) => {
              return (
                <li key={index}>
                  <button
                    aria-label={`toggle image ${index + 1}`}
                    className="btn-thumbnail"
                    onClick={() => {
                      setIndex(index)
                    }}
                  >
                    <img className="thumbnail" src={thumbnail} alt="" />
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <Lightbox />
      </div>
      <div className="product__details-wrapper">
        <div className="product__details">
          <p className="product__vendor">Sneakers Company</p>
          <h4 className="product__title">Fall Limited Edition Sneakers</h4>
          <p className="product__desc">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="product__price">
            <div className="current-price">
              <span className="price">$125.00</span>
              <span className="discount">50%</span>
            </div>
            <p className="original-price">$250.00</p>
          </div>
        </div>
        <div className="product__add-to-cart">
          <div className="product__quantity btn">
            <button
              onClick={decreaseCart}
              className="btn-decrease"
              aria-label="decrease quantity"
            >
              <img src={iconMinus} alt="" />
            </button>
            <span className="quantity">{tempState}</span>
            <button
              onClick={increaseCart}
              className="btn-increase"
              aria-label="increase quantity"
            >
              <img src={iconPlus} alt="" />
            </button>
          </div>
          <button
            onClick={() => {
              if (tempState === 0) {
                return
              }
              setTotalItems(tempState)
            }}
            className="btn-add-to-cart btn"
          >
            <span className="btn-group">
              <RiShoppingCartLine />
              <span>add to cart</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
export default Product
