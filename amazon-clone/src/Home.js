import React from 'react';
import Product from './Product';
import "./Home.css";
//import Login from './Login';

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/AStarIsBorn/ASTAR_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB414595666_.jpg"/>
            <div className="home__row">
            <Product
                id="11110"
                title="New Apple iPhone 12 Pro Max (256GB) - Pacific Blue"
                price={139900}
                rating={5}
                image="https://m.media-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
            />

            <Product
                id="11111"
                title="Samsung 810 L Frost Free Side-by-Side Refrigerator(RF28N9780SG/TL, Black, Inverter Compressor)"
                price={247000}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71O31clz6mL._SL1500_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
                id="11112"
                title="Google GA00124-US Pixelbook (i7, 16 GB RAM, 512 GB)"
                price={169999}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51TxM4dNYhL.jpg"
            />

            <Product
                id="11113"
                title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
                price={3499}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg"
            />

            <Product
                id="11114"
                title="Apple Watch Series 5 (GPS + Cellular, 44mm) - Space Gray Aluminium Case with Black Sport Band"
                price={47900}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71fp5ankbqL._SL1500_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
                id="11115"
                title="Sony Bravia 138.8 cm (55 Inches) 4K Ultra HD OLED Smart Android TV KD-55A9F (Black) (2018 model)"
                price={327190}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71LE7vyJyNL._SL1500_.jpg"
            />
           </div> 
        </div>
    );
}

export default Home
