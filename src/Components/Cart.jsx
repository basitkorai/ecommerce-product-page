import { useGlobalContext } from '../context'
import productImage from '../assets/images/image-product-1-thumbnail.jpg'
import IconDelete from '../assets/images/icon-delete.svg'

const Cart = ({ toggle }) => {
  const { totalItems, totalAmount, isCartOpen, removeCartItems } =
    useGlobalContext()

  return (
    <article
      role="dialog"
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          toggle()
        }
      }}
      id="cart"
      className={isCartOpen ? 'cart show-cart xcart' : 'cart xcart'}
      aria-hidden={!isCartOpen}
    >
      <header className="cart__header xcart">
        <h4 className="xcart">Cart</h4>
      </header>
      <div className="cart__body xcart">
        {totalItems ? (
          <>
            <div className="cart__product xcart">
              <span className="cart-product__image xcart">
                <img src={productImage} alt="" className="xcart" />
              </span>
              <span className="cart-product__info xcart">
                <h5 className="cart-product__title xcart">
                  Fall Limited Edition Sneakers
                </h5>
                <p className="cart-product__quantity xcart">
                  $125.00 * {totalItems}
                  <span className="total-amount xcart">${totalAmount}</span>
                </p>
              </span>
              <button onClick={removeCartItems} className="btn-remove xcart">
                <img src={IconDelete} alt="" className="xcart" />
              </button>
            </div>
            <button className="btn-checkout btn xcart">Checkout</button>
          </>
        ) : (
          <span className="empty xcart">Your cart is empty.</span>
        )}
      </div>
    </article>
  )
}
export default Cart
