import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
<<<<<<< HEAD
import { store } from 'react-notifications-component';
=======
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49

function Header() {
    const [{ basket, user }] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
<<<<<<< HEAD
            if (auth.signOut()) {
                store.addNotification({
                    title: "Success!",
                    message: "Logged out successfully!",
                    type: "success",
                    insert: "top",
                    container: "bottom-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 4000,
                        onScreen: true
                    }
                });
            }
=======
            auth.signOut();
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img
                    alt="Amazon logo"
                    className='header__logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                />
            </Link>
            <div
                className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon
                    className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">
<<<<<<< HEAD
                            {user ? "Hey " + user.email : "Hello Guest"}
=======
                            {user ? user.email : "Hello Guest"}
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49
                        </span>

                        <span className="header__optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>
<<<<<<< HEAD
                <Link to={'/orders'}>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Returns
                    </span>
                        <span className="header__optionLineTwo">
                            & Orders
                    </span>
                    </div>
                </Link>
=======
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
