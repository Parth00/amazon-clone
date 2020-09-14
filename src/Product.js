import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';
<<<<<<< HEAD
import { store } from 'react-notifications-component';
=======
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49

function Product({ id, title, image, price, rating }) {
    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });
<<<<<<< HEAD

        store.addNotification({
            title: "Added successfully to the basket!",
            message: title + " - $" + price,
            type: "success",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 3000,
                onScreen: true
            }
        });
=======
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49
    };

    return (
        <div className="product">
            <div className="product__info">
                <p> {title} </p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <p>{Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span className="star" role="img" aria-label="star">⭐</span>
                        ))}
                    </p>
                </div>
            </div>

            <img
                src={image}
                alt=""
            />

<<<<<<< HEAD
            <button className='fade' onClick={addToBasket}>Add to Basket</button>
=======
            <button onClick={addToBasket}>Add to Basket</button>
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49
        </div>
    )
}

export default Product
