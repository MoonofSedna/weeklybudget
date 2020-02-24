import React from 'react';
import PropTypes from 'prop-types';


    const Expend = ({expend, deletebudget}) => (
        <li className="expends">
            <p><span className ="expend-l">{expend.name}</span>
                <span className="expends">$ {expend.amount}</span>
                <input 
                    type='submit' 
                    className="btn btn-danger" 
                    value="Delete"
                    onClick= {() => deletebudget(expend.id, expend.amount)}
                />
            </p>
        </li>

    );

Expend.propTypes ={
    expend: PropTypes.object.isRequired
}
export default Expend;
