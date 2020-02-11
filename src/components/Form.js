import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import shortid from "shortid";

const Form = ({ saveExpend, saveCreateExpend, close }) => {
  const [name, saveName] = useState("");
  const [amount, saveAmount] = useState(0);
  const [error, saveerror] = useState(false);

  //****When the user adds an amount***//

  const addAmount = e => {
        e.preventDefault();

        // ****Validation****//

            if (amount < 1 || isNaN(amount) ||  name.trim() === "" ) {
              saveerror(true);
              return;
            }

                saveerror(false);

        //****Expense Builder****//

            const expend = {
              name,
              amount,
              id: shortid.generate()
            };

        //****Place the expense in the list.****//

            saveExpend(expend);
            saveCreateExpend(true);

        // reset form

            saveName("");
            saveAmount(0);
  };

  return (
    <Fragment>
      <form onSubmit={addAmount}>
        <input
          type="button"
          className="btn btn-info btn-close"
          value="X"
          onClick={close}
        />
        <h3>Add your expends here</h3>
        {error ? (
          <Error message="All fields are required. Enter a correct amount." />
        ) : null}
        <div className="camp">
          <label> Expense </label>

          <input
            type="text"
            className="col-md-12"
            placeholder="Exm. food"
            value={name}
            onChange={e => saveName(e.target.value)}
          />
        </div>

        <div className="camp">
          <label> Amount of the expense </label>
          <input
            type="number"
            className="col-md-12"
            placeholder="Exm. 300"
            value={amount}
            onChange={e => saveAmount(parseInt(e.target.value, 10))}
          />
        </div>

        <input type="submit" className="btn btn-info btn-block" value="Add" />
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  saveExpend: PropTypes.func.isRequired,
  saveCreateExpend: PropTypes.func.isRequired
};

export default Form;
