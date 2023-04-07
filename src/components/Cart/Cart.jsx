import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please pick some t-shirt..</p>
    }
    else{
       message = <p className={`bold ${cart.length > 2 ? 'tomato' : 'purple'}`}>Thank you</p>
    }
    return (
        <div>
            <h2 className={`bold ${cart.length > 2 ? 'tomato' : 'pink'}`}>You added {cart.length}</h2>
            {message}
            <p>

            {
                cart.length > 2 ? "Boroloxx": "fokira"
            }
            </p>

            {
                cart.length > 3 
                ? <h3>Hey, aro kino..</h3>
                : <h4>Tumar to beil nai</h4>
            }
            {
                cart.map(tshirt => <p key={tshirt._id}
                >
                    {tshirt.name}
                    <button style={{marginLeft:'10px'}} onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                    </p>)
            }

            
                {
                    cart.length === 2 && <p className={cart.length>2?'blue':'red'}>Double bonazzzz</p>
                }
                {
                    cart.length === 3 || <p>3 ta to hoilo na</p>
                }
            
        </div>
    );
};

export default Cart;

/* Conditional Rendering:
*
* 1. Use if ese to se a variable that will contain an element, component 
* 2. Ternary: condition ? 'for true' : 'for false'
* 3. Logical && : (if the condition is true then the next thing will be displayed) 
* 4. Logical ||: (if the condition is false then the next thing will be displayed)
*  
*/ 


/* conditional styles (css):
* 1. normal: className={condition ? "class_1" : "class_2"}
* 2. use template string: className={` common_class1, common_class2 ${condition ? "class_1" : "class_2"}`}
*
*
*
*/ 