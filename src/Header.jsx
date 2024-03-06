import CurrencySelection from "./CurrencySelection";
import "./Header.scss";
import TopMenu from "./Topmenu";

export default function Header({ currentItem, setCurrentItem }) {
  return (
    <header className="header">
      <TopMenu currentItem={currentItem} setCurrentItem={setCurrentItem} />

      <CurrencySelection />

      <div className="header__sitename" onClick={() => setCurrentItem("")}>
        Flourish and Blotts
      </div>
    </header>
  );
}
