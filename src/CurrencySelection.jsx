import "./CurrencySelection.scss";
import { useEffect, useState, useContext } from "react";
import CurrencyContext from "./CurrencyContext";
import Context from "./Context";

export default function CurrencySelection() {
  console.log("component CurrencySelection runs");
  const [currencies, setCurrencies] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(1);

  // const [currency, setCurrency] = useState("EUR");
  // const { currency, setCurrency } = useContext(CurrencyContext);
  const {
    state: { currency },
    dispatch,
  } = useContext(Context);

  const loadCurrencies = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php"
    );
    const data = await response.json();
    setCurrencies(data);
  };

  useEffect(() => {
    loadCurrencies();
  }, []);

  const loadExchangeRates = async (currency) => {
    // load exchange rates from the bank for the given currency
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency=" +
        currency
    );
    const data = await response.json();
    setExchangeRate(data.rate);
  };

  const handleSelect = (event) => {
    // setCurrency(event.target.value);
    dispatch({
      type: "currency/set",
      payload: event.target.value,
    });
  };

  useEffect(() => {
    loadExchangeRates(currency);
  }, [currency]);

  return (
    <div className="currencies">
      <select name="currencies" value={currency} onChange={handleSelect}>
        <option value="">-- please choose --</option>
        {currencies.map((index) => (
          <option key={index} value={index}>
            {index}
          </option>
        ))}
      </select>
      <div>
        Exchange rate (to EUR): {exchangeRate}
        <br />
        Currency from context: {currency}
      </div>
    </div>
  );
}
