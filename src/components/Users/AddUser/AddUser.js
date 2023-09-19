import { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

import classes from "./AddUser.module.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


  function AddUserHandler(event) {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title: 'Invalid input!',
            message: 'Please enter a valid name and age (non-empty values).',
        })
        return;
    };

    if (+enteredAge < 1) {
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).'
        })
        return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  }

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  } 

  
  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  } 

    function errorHandler() {
        setError(null);
    }


  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} ></ErrorModal>}
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Usrname</label>
        <input id="usermane" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
}

export default AddUser;
