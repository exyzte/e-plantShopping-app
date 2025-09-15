import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity} from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping}) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const calculateTotalAmount = () => {

    };

    const handleContinueShopping = () => {

    };

    const handleIncrement = (item) => {

    };

    const handleDecrement = (item) => {

    };

    const handleRemove = (item) => {

    };

    const calculateTotalCost = (item) => {

    };

    return (
        <div className="cart-container">
            <h2 style={{ color:'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {cart.map((item)=>{
                    <div className="cart-item" key={item.name}>
                        <img src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item cost">{item.cost}</div>
                            <div className="cart-item-quantity">
                                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                                <span>{item.quantity}</span>
                                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                            </div>
                            <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                            <button className="cart-item-delete" onClick={handleRemove(item)}>Delete</button>
                        </div>
                    </div>
                })}
            </div>
            <div style={{ margintTop: '20px', color: 'black' }}className="total_cart_amount"></div>
            <div className="continue_shopping_btn">
                <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shipping</button>
                <br />
                <button className="get-started-button1">Checkout</button>
            </div>
        </div>
    );
};

export default CartItem;