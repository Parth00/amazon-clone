import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';
<<<<<<< HEAD
import { store } from 'react-notifications-component';
=======
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49

function Subtotal() {
    const [{ basket }] = useStateValue();

    const history = useHistory();
    let subTotalPrice = basket.reduce((amount, item) => { return amount + item.price }, 0);

<<<<<<< HEAD
    const handleCheckout = () => {
        if (subTotalPrice === 0) {
            store.addNotification({
                title: "Basket is empty",
                message: "You need something in the basket to checkout! Please click on 'Go shopping' and add some items",
                type: "danger",
                insert: "top",
                container: "bottom-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 4000,
                    onScreen: true
                }
            });
        } else {
            history.push('/payment');
        }
    }
=======
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={subTotalPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

<<<<<<< HEAD
            <button onClick={handleCheckout}>Proceed to Checkout</button>
=======
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49
        </div>
    )
}

export default Subtotal
