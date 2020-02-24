import React, {Fragment} from 'react';
import {ColorBudget} from '../helpers';
import PropTypes from 'prop-types';

    const ControlBudget = ({budget, remaining}) =>{

        return(
            <Fragment>
                <div className ="alert alert-primary">
                    Budget: $ {budget}
                </div>
                <div className={ColorBudget(budget, remaining)}>
                    Rest: ${remaining}
                </div>

            </Fragment>
        );
    };

ControlBudget.propTypes ={
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}
export default ControlBudget;
