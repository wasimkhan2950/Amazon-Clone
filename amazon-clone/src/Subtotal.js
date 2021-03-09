import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from './reducer';

function Subtotal() {
    const[{basket},dispatch]=useStateValue();
    return ( 
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>
                        Subtotal({basket.length}items):<strong>{`${ value}`}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/>This Order Contains A Gift
                    </small>
                    </>
                )}
                decimalScale={4}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal;
