import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UserList/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler (uName, uAge) {
    setUsersList((prev) => {
      return [...prev, {name: uName, age: uAge, id: Math.random().toString()}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
