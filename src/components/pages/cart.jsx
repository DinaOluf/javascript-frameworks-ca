import React from "react";
// import useApi from "../useApi";
import styled from "styled-components";
import { useCart } from "../useCart";


const Button = styled.button`
    font-family: AmaticSC, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
    background-color: #5B7A70;
    border: solid 2px white;
    border-radius: 5px;
    font-size: 1.8em;
    padding: 0.2rem 1rem;

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
  const { cart, clearTheCart } = useCart();

  console.log(cart); //REMOVE

  function onCheckoutClick() {
    clearTheCart();
  console.log("cleared cart");
  }



  return (
  <main id='cart'>
    <div className='container'>
      <h1>Cart</h1>
      { cart !== []
        ?   <ul>
          {cart.map((cart, index) => (
              <li key={cart.id+"_"+index}>
                <img src={cart.imageUrl} alt="product" />
                <h2>{cart.title}</h2>
                <div className="cart-item-price">{cart.price}</div>
              </li>
          ))}
          </ul>
        : <div>Nothing in cart</div>
      }

      <Button>Checkout</Button> 
      {/* Change to link */}
      <ButtonRed onClick={onCheckoutClick}>Clear Cart</ButtonRed>
    </div>
  </main>);
}

export default CartPage;