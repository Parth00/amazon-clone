import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal"
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad"
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                        // <CheckoutProduct
                        //     id="12345"
                        //     title="Test product"
                        //     image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
                        //     price={199.99}
                        //     rating={5}
                        // />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
