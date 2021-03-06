import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';

function Subtotal() {
  const [{ basket }] = useStateValue();

//   const getBasketTotal = () => {
//     return basket?.reduce((acc, currentValue) => acc + currentValue.price, 0);
//   };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // {getBasketTotal(basket)}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thouandSeparator={true}
        prefix={"$"}
      />
      <button> Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
