import React from "react";
import Expend from "./Expend";
import PropTypes from "prop-types";

const List = ({ expends, deletebudget }) => (
  <div className="expenses-incurred">
    <h3>List</h3>

    {expends.map(expend => (
      <Expend
        key={expend.id}
        expend={expend}
        deletebudget={deletebudget} />
    ))}
  </div>
);

List.propTypes = {
  expends: PropTypes.array.isRequired
};
export default List;
