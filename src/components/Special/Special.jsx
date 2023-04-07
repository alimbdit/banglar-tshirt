import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {

    const angti = useContext(RingContext);
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h3>Special</h3>
            <p><small>Grandpa's money: {money}</small></p>
            {/* <p>Ring: {ring}</p> */}
            <p>Ring: {angti}</p>
        </div>
    );
};

export default Special;