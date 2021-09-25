import './Cart.css';
import {CatalogContext} from './CatalogContext';
import {CartContext} from './CartContext';
import {useContext, useMemo, useState} from 'react';

function CartItem({name, quantity}) {
    return (
        <div className="cart-item">
            <span className="cart-item-name">{name}</span>
            <span className="cart-item-quantity">{quantity}</span>
        </div>
    );
}

export default function Cart() {
    const {products} = useContext(CatalogContext);
    const {cartItems: items} = useContext(CartContext);
    const [isCartShown, setIsCartShown] = useState(false);

    const itemCount = useMemo(() => {
        const itemsEntries = Object.entries(items);
        const count = itemsEntries.reduce(
            (sum, item) => {
                const quantity = item[1];
                return sum + quantity;
            }, 0);
        return count;
    }, [items]);

    return (
        <div className="cart-wrapper">
            <button className="cart-button" onClick={() => setIsCartShown(true)}>
                <img 
                    className="cart-show" 
                    src="/shopping-cart.png"
                    alt="show cart" />
                {`${itemCount === 0 ? 'No' : itemCount} item${itemCount === 1 ? '' : 's'}`}
            </button>
            <div className={`cart ${!isCartShown ? 'hidden' : ''}`}>
                <div className="cart-header">
                    <img 
                        className="cart-hide" 
                        src="/close.png"
                        onClick={() => setIsCartShown(false)} 
                        alt="hide cart" />
                </div>
                {Object.keys(items).length === 0 ? <div className="cart-empty">The cart is empty</div> : null}
                {Object.entries(items)
                    .map(([id, quantity]) =>
                        <CartItem
                            name={products[id].title}
                            quantity={quantity}
                        />)}
            </div>
        </div>
    );
}
