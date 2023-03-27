import './App.css';
import './styles.scss';
import searchIcon from './components/icons/search-icon.png';
import React from 'react'; //Check for unused , { useState, useEffect, useReducer, createContext, useContext }
import { Routes, Route, Link, Outlet } from 'react-router-dom'; //Check for unused
import useApi from './components/useApi';
import Nav from './components/navbar';
import Search from './components/search';
import ProductPage from './components/pages/product';
import CartPage from './components/pages/cart';
import ContactPage from './components/pages/contact';
import SuccessPage from './components/pages/success';
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

// SearchProduct = styled.input`
//     height: 85%;
//     width: 100%;
//     border: none;
//     border-radius: 5px;
//     font-size: 1.2em;
//     font-family: 'Times New Roman', Times, serif;
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
      {/* <div className='search-input'>
        <img src={searchIcon} alt='Search icon'/>
        <input aria-label='search input' />
      </div> */}
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
      <div className='search-input'>
        <img src={searchIcon} alt='Search icon'/>
        <input aria-label='search input' />
      </div>
      <div className='error'>
        Error! Please refresh.
      </div>
    </div>
  </main>;
  }  

  return (<main id='home'>
      <div className='container'>
        <h1 className='home-heading'>
          Homepage
        </h1>
        <div className='search-input'>
          <img src={searchIcon} alt='Search icon'/>
          <Search />
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
                      ? data.discountedPrice+',-'
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
  return <ContactPage />;
}

function Cart() {
  return <CartPage />;
}

function Product() {
  return <ProductPage />;
}

function Success() {
  return <SuccessPage />;
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
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
