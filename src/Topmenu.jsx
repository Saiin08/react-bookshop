import { useState } from "react";
import "./Topmenu.scss";
import TopmenuItem from "./TopmenuItem";

export default function Topmenu({ currentItem, setCurrentItem }) {
  console.log(currentItem);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      {open ? (
        <>
          <button className="burger-icon" onClick={toggleMenu}>
            ☰
          </button>
          <nav className="topmenu__links">
            <TopmenuItem
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
              slug=""
              label="Home"
            />
            <TopmenuItem
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
              slug="products"
              label="Products"
            />
            <TopmenuItem
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
              slug="about"
              label="About us"
            />
            <TopmenuItem
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
              slug="contact"
              label="Contact"
            />
          </nav>
        </>
      ) : (
        <button className="burger-icon" onClick={toggleMenu}>
          ☰
        </button>
      )}
    </div>
  );
}
