import React from 'react';
import './Father.css';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div >
            
            <h3>Father</h3>
            <section className='flex' >
            <MySelf ring={ring}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>

        </div>
    );
};

export default Father;