import React from "react";
import useApi from "./useApi";
import styled from "styled-components";
import { useCart } from "./useCart";

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

function CartPage() {
  const { data, isLoading, isError } = useApi(
    'https://api.noroff.dev/api/v1/online-shop/'
  );

  if (isLoading) {
    return <main id='cart'>
    <div className='container'>
      <h1 className='home-heading'>
        Product Page
      </h1>
      <div className='loading' aria-label='loading'>
      </div>
    </div>
  </main>;
  }

  if (isError) {
    return <main id='cart'>
    <div className='container'>
      <h1 className='home-heading'>
        Product Page
      </h1>
      <div className='error'>
        Error! Please refresh.
      </div>
    </div>
  </main>;
  }




    return (<main id='cart'>
      <div className='container'>
        <h1>Cart</h1>
        <div>
          <div>Title</div>
          <div>Price,-</div>
        </div>
        <Button>Checkout</Button> 
        {/* Change to link */}
      </div>
    </main>);
}

export default CartPage;