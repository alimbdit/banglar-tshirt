import React, { useContext } from 'react';
import './Uncle.css'
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {

    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h3>Uncle</h3>
            <button onClick={()=>setMoney(money+100)}>Increase money</button>
            <p><small>Grandpa's money: {money}</small></p>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Sabila</Cousin>

            </section>
        </div>
    );
};

export default Uncle;