import React from "react";
import { useParams } from 'react-router-dom';
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

function ProductPage() {
    let params = useParams();

    const { data, isLoading, isError } = useApi(
        'https://api.noroff.dev/api/v1/online-shop/'+params.id
      );
    
      if (isLoading) {
        return <main id='home'>
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
        return <main id='home'>
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
    
      console.log(data); //Remove
      const reviews = data.reviews;

      // function CartProduct ({
      //   product: { id, title, description, imageUrl, price, discountedPrice },
      // }) {
      //   const {addToCart} = useCart();
      //   function onAddToCartButtonClick() {
      //     addToCart(id);
      //   }
      // }

    return (
        <main id='product'>
            <div className='container'>
                <div className="product-info">
                    <div className="product-image">
                        <img src={data.imageUrl} alt='Product' />
                    </div>
                    <div>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <div className="product-price">{ 
                            data.discountedPrice === data.price
                            ? data.discountedPrice+',-'
                            : <span className='discount'>{data.discountedPrice},- <span className='discount-off'>({(data.price - data.discountedPrice).toFixed(2)},- OFF)</span></span>
                            }
                        </div>
                        <Button className="buttons">Add to Cart</Button>
                    </div>
                </div>
                <h2 className="review-heading">Reviews</h2>
                { 
                    reviews 
                    ?   reviews.map((review) => (
                            <div className="review-container" key={review.id}>
                                <div className="reviews">
                                    <h3>{review.username}</h3>
                                    <p>{review.description}</p>
                                    <div>{review.rating}/5</div>
                                </div>
                            </div>
                        ))
                    :   ''
                }
            </div>
        </main>
    );
  }

  export default ProductPage;