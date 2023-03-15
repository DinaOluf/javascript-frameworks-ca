import './App.css';
import './styles.scss';
import React from 'react'; //Check for unused , { useState, useEffect, useReducer, createContext, useContext }
import { Routes, Route, Outlet, useParams } from 'react-router-dom'; //Check for unused
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
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data); //Remove

  return <main id='home'>
      <div className='container'>
        <h1 className='home-heading'>
          Homepage
        </h1>
        <div className='searchInput'>
          <img src={searchIcon} alt='Search icon'/>
          <input aria-label='search input' />
        </div>
        <div>
          Data loaded
        </div>
      </div>
    </main>;
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
