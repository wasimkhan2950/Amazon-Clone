import React from 'react'
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css"
import Subtotal from "./Subtotal";

function Checkout() {
const [{basket}]=useStateValue();


    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Avicii/November/4thWeek/ILM/D18785254_Jupiter2020_Phase4_ILMs_640x45._CB416153341_.jpg"/>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shoppping basket is empty</h2>
                    <p>
                        You have no items in your basket. to buy one or more items,click "Add to basket" next to the item.
                    </p>
                </div>
            ):(
                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {basket?.map((item) =>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                    />
                    ))}
                    
                </div>
            )}   
            </div>
            {basket.length>0 &&(
                <div className="checkout__right">
                    <Subtotal/>

                </div>
            )}
        </div>
    );
}

export default Checkout;
