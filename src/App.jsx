import { useReducer, useState } from "react";
import "./App.scss";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import CurrencyContext from "./CurrencyContext";
import Context from "./Context";
import reducer from "./reducer";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [currentItem, setCurrentItem] = useState("");
  // const [currency, setCurrency] = useState("EUR");

  const [state, dispatch] = useReducer(reducer, {
    user: null,
    theme: "light",
    language: "en",
    currency: "USD",
    authHash: null,
    shoppingCart: [],
    // ...
  });

  // const [contextValue, setContextValue] = useReducer(0);

  return (
    <BrowserRouter>
      <Context.Provider value={{ state, dispatch }}>
        {/* <CurrencyContext.Provider
        value={{ currency: currency, setCurrency: setCurrency }}
      > */}
        <div className="app">
          <Header currentItem={currentItem} setCurrentItem={setCurrentItem} />

          <MainContent currentItem={currentItem} />

          <Footer />
        </div>
        {/* </CurrencyContext.Provider> */}
      </Context.Provider>
    </BrowserRouter>
  );
}
export default App;
