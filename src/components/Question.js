import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

    const Question = ({savebudget, saveRemaining, updateQuestion}) =>{

        //State

        const [quantity, savequantity] = useState(0);
        const [error, saverror] = useState(false);

        //Set Submit
        const addbudget = e =>{
            e.preventDefault();

            //Validation
            if(quantity < 1 || isNaN(quantity)){
                saverror(true);
                return;
            }

            //Successful validation
            saverror(false);
            savebudget(quantity);
            saveRemaining(quantity);
            updateQuestion(false);
        }

        return(

            <Fragment>
            <h2 className="mb-2">What is your budget?</h2>
            {error
            ? <Error message="An error has occured. Please enter a valid amount."/>
            :null}
                <form onSubmit= {addbudget}>
                    <div className="card-body">
                        <div className="form-group">
                            <input
                                type ="number"
                                className="col-md-12 form-control"
                                placeholder="Exm. 5000"
                                onChange={ e => savequantity(parseInt(e.target.value, 10))}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type ="submit"
                                className="btn btn-info btn-block"
                                value="Send"
                            />
                        </div>
                    </div>
                </form>
            </Fragment>

        )

    }

    Question.propTypes ={
        savebudget: PropTypes.func.isRequired,
        saveRemaining: PropTypes.func.isRequired,
        updateQuestion: PropTypes.func.isRequired
    }


export default Question;
