import './App.css';
import './styles.scss';
import React from 'react'; //Check for unused , { useState, useEffect, useReducer, createContext, useContext }
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom'; //Check for unused
import useApi from './components/useApi';


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

  return <div>
      <div>
        Home
      </div>
      <div>
        Data loaded
      </div>
    </div>;
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

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <div>Header with Logo and nav</div>
      <Nav />
    </header>
  );
}

function Footer() {
  return <footer>Website footer</footer>;
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
