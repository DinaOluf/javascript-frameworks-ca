import './App.css';
import './styles.scss';
import React from 'react'; //Check for unused , { useState, useEffect, useReducer, createContext, useContext }
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom'; //Check for unused
import useApi from './components/useApi';
import Nav from './components/navbar';
import searchIcon from './components/icons/search-icon.png';
// import styled from 'styled-components';

// const Button = styled.button`
//   border: 0;
//   background: none;
//   background-color: lightcoral;
// `;

// const Input = styled.input`
//   border: solid 2px #5B7A70;
//   border-radius: 5px;
// `;

function Header() {
  return (
    <header>
      <Nav />
    </header>
  );
}

function Footer() {
  return <footer>© Dina Olufsen 2023</footer>;
}

function Layout() {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
}


function Home() {
  const { data, isLoading, isError } = useApi(
    'https://api.noroff.dev/api/v1/online-shop',
  );

  if (isLoading) {
    return <main id='home'>
    <div className='container'>
      <h1 className='home-heading'>
        Homepage
      </h1>
      <div className='searchInput'>
        <img src={searchIcon} alt='Search icon'/>
        <input aria-label='search input' />
      </div>
      <div className='loading' aria-label='loading'>
      </div>
    </div>
  </main>;
  }

  if (isError) {
    return <main id='home'>
    <div className='container'>
      <h1 className='home-heading'>
        Homepage
      </h1>
      <div className='searchInput'>
        <img src={searchIcon} alt='Search icon'/>
        <input aria-label='search input' />
      </div>
      <div className='error'>
        Error! Please refresh.
      </div>
    </div>
  </main>;
  }

  console.log(data); //Remove

  return (<main id='home'>
      <div className='container'>
        <h1 className='home-heading'>
          Homepage
        </h1>
        <div className='searchInput'>
          <img src={searchIcon} alt='Search icon'/>
          <input aria-label='search input' />
        </div>
        <div className='products-container'>
          {data.map((data) => (
            <Link key={data.id} to={`/product/${data.id}`}>
              <div className='product-img-wrap'>
                <img src={data.imageUrl} className='product-img' alt='Product' />
              </div>
              <div>
                <div className='product-title'>{data.title}</div>
                <div className='product-price'>
                  {
                    data.discountedPrice === data.price
                      ? data.price+',-'
                      : <span className='discount'>{data.discountedPrice},- <span className='discount-off'>({(data.price - data.discountedPrice).toFixed(2)},- OFF)</span></span>
                    }
                  </div> 
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>);
}

function Contact() {
  return <div>Contact</div>;
}

function Cart() {
  return <div>Cart</div>;
}


function Product() {
  let params = useParams();
  // console.log(params);
  // Logs the id of whichever product page you are on e.g.
  // {id: '1'} or {id: '2'}
  return <div>Individual product page: {params.id}</div>;
}

function RouteNotFound() {
  return <div>Page not found</div>;
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="*" element={<RouteNotFound />} />
          {/* <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<Success />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
