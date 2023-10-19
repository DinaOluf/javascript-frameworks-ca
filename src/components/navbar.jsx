import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useCart } from './useCart'; 
import homeIcon from './icons/home-icon.png';
import mailIcon from './icons/mail-icon.png';
import cartIcon from './icons/cart-icon.png';

function Nav() {
  const { cart } = useCart();
  useEffect(() => {
    const count = document.querySelector("#cartCount");
    count.innerHTML = cart.length;
  });

    return (
      <nav>
        <div>
            <Link className='navLink' to="/">
                <img src={homeIcon} alt='Home icon' />
                <span>Home</span>
            </Link>
        </div>
        <ul>
          <li>
            <Link className='navLink' to="/contact">
                <img src={mailIcon} alt='Mail icon' />
                <span>Contact</span>   
            </Link>
          </li>
          <li>
            <Link className='navLink' to="/cart">
              <div id='cartCount'>0</div>
                <img src={cartIcon} alt='Cart icon' />
                <span>Cart</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  export default Nav;