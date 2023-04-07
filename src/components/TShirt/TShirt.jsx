import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt, handleAddToCart}) => {
    const {_id, name, picture, price, gender} = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            {/* <button onClick={() => handleAddToCart(_id)}>Buy Now</button> */}
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;