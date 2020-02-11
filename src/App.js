import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import ControlBudget from "./components/ControlBudget";

function App() {

  //**** Define state ****//

  const [budget, savebudget] = useState(0);
  const [remaining, saveRemaining] = useState(0);
  const [showquestion, updateQuestion] = useState(true);
  const [expends, saveExpends] = useState([]);
  const [expend, saveExpend] = useState({});
  const [createexpend, saveCreateExpend] = useState(false);

  //****Usefecct to update the remaining ****//

      useEffect(() => {
            if (createexpend) {

              //****Add the new expense****//

                  saveExpends([...expends, expend]);

              //****Subtract from current budget****//

                  const remainingBudget = remaining - expend.amount;

                  saveRemaining(remainingBudget);

              //Reseat false

                  saveCreateExpend(false);
            }
      }, [expend, createexpend, expends, remaining]);

  //****Delete expense****//

  const deletebudget = (id, amount) => {
        const newBudget = expends.filter(expend => expend.id !== id);
        saveExpends(newBudget);
        const remainingBudget = remaining + amount;
        saveRemaining(remainingBudget);
  };

  // Close Window
  const close = e => {
        window.location.reload();
        updateQuestion(true);
  };

  return (
    <div className="container">
      <header>
        <h1>Weekly budget</h1>
        <div className="main-content content">
          {showquestion ? (
            <Question
              savebudget={savebudget}
              saveRemaining={saveRemaining}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row">

                <div className="col-md-6">
                  <Form
                    saveExpend={saveExpend}
                    saveCreateExpend={saveCreateExpend}
                    close={close}
                    savebudget={savebudget}
                    remaining={remaining}
                  />
                </div>


                <div className="col-md-6">
                  <List expends={expends} deletebudget={deletebudget} />

                  <ControlBudget budget={budget} remaining={remaining} />
                </div>

            </div>

          )}
        </div>
      </header>
    </div>
  );
}

export default App;
