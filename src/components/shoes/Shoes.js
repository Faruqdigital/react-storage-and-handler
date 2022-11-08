import React from 'react';
import { add, multiply } from '../utilities/Calculate';

const Shoes = () => {
    const first = 4;
    const second = 12;
    const result = multiply(first, second);
    const sum = add(first, second);

    return (
        <div>
            <h2>my shoes component!!</h2>
            <p>Result: {result} and total: {sum}</p>
        </div>
    );
};

export default Shoes;