import React from "react";
// import useApi from "../useApi";
import styled from "styled-components";
import { useCart } from "../useCart";
import { Link } from 'react-router-dom';


const ButtonLink = styled(Link)`
    font-family: AmaticSC, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
    background-color: #5B7A70;
    border: solid 2px white;
    border-radius: 5px;
    font-size: 1.8em;
    padding: 0.2rem 1rem;
    text-decoration: none;

    :hover {
    background-color:#000000;
    cursor: pointer;
}
`;

const ButtonRed = styled.button`
    font-family: AmaticSC, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
    background-color: #8A4343;
    border: solid 2px white;
    border-radius: 5px;
    font-size: 1.8em;
    padding: 0.2rem 1rem;

    :hover {
    background-color:#414141;
    cursor: pointer;
}
`;

function CartPage() {
  const { cart, clearTheCart, findTotal } = useCart();

  console.log(cart); //REMOVE

  function onCheckoutClick() {
    clearTheCart();
  console.log("cleared cart");
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