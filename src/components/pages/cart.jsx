import React from "react";
import { useCart } from "../useCart";
import { ButtonLink, ButtonRed } from "../styles/cart.styles";


function CartPage() {
  const { cart, clearTheCart, findTotal } = useCart();

  function onCheckoutClick() {
    clearTheCart();
  }

  const total = findTotal();

  return (
  <main id='cart'>
    <div className='container'>
      <div className="cart-wrap">
        <h1>Cart</h1>
        <div className="cart-list-wrap">
          { cart.length !== 0
            ?   <ul>
              {cart.map((cart, index) => (
                  <li key={cart.id+"_"+index}>
                    <div className="cart-images">
                      <img src={cart.imageUrl} alt="product" />
                    </div>
                    <h2>{cart.title}</h2>
                    <div className="cart-item-price">{cart.discountedPrice},-</div>
                  </li>
              ))}
              </ul>
            : <div className="empty-cart-msg">Your cart is empty!</div>
          }
          <div className="total"><span>Total</span><span className="total-price">{total},-</span></div>
          <div className="buttons-wrap">
            <ButtonRed onClick={onCheckoutClick}>Clear Cart</ButtonRed>
            { total >= 0.01
              ? <ButtonLink to="/success" onClick={() => clearTheCart()}>Checkout</ButtonLink> 
              : <ButtonRed>Checkout</ButtonRed> 
            }
          </div>
        </div>
      </div>
    </div>
  </main>);
}

export default CartPage;