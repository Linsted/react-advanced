import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputRef = useRef(); // second approach utilizing   useRef

  const isInputInValid = enteredName.trim() === "";
  const nameInputIsInvalid = isInputInValid & enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const inputBlurHandler = () => {
    if (enteredName.trim().length === 0) {
      setEnteredNameTouched(true);
    } else {
      setEnteredNameTouched(false);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (isInputInValid) {
      setEnteredNameTouched(true);

      return;
    }

    console.log(enteredName);
    setEnteredName("");
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={inputBlurHandler}
        />
        {!!nameInputIsInvalid && <p>Please, type your Name</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
