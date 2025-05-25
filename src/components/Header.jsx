import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Moon from "../assets/icons/moon.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import { useState } from "react";
import CartDetails from "./CartDetails";

export default function Header() {
  const [showCart, setShowCart] = useState(false);

  function handleCartShow() {
    setShowCart(true);
  }

  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="/">
          <img src={Logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Moon} width="24" height="24" alt="moon" />
            </a>
          </li>
          <li>
            <a
              onClick={handleCartShow}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ShoppingCart} width="24" height="24" alt="cart" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
