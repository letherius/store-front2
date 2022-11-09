import "./quantityPicker.css";
import {useState} from 'react';

function QuantityPicker() {
        const [quantity, setQuantity] = useState(1);

        function increase() {
           let val = quantity + 1;
            setQuantity(val);
        }

        function decrease() {
            let val = quantity - 1;
            if(val > 0) {
               setQuantity(val);
            }
        }

    return (
        <div className="qt-picker">
            <button onClick={increase}>+</button>
            <label>{quantity}</label>
            <button disabled={quantity === 1} onClick={decrease}>-</button>
        </div>
    );
};

export default QuantityPicker;