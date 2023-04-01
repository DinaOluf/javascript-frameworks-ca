import './App.css';
import './styles.scss';
import React from 'react'; //Check for unused , { useState, useEffect, useReducer, createContext, useContext }
import { Routes, Route, Outlet } from 'react-router-dom'; //Check for unused
import Nav from './components/navbar';
import HomePage from './components/pages/index';
import ProductPage from './components/pages/product';
import CartPage from './components/pages/cart';
import ContactPage from './components/pages/contact';
import SuccessPage from './components/pages/success';


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
  return <HomePage />
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
