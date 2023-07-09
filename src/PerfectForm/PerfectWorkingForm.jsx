import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({});
  const [cardIndex, setCardIndex] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const addData = (input) => {
    setUsers([...users, input]);
  };

  const getUser = (isedit, index, input) => {
    setData(input);
    setCardIndex(index);
    setIsEdit(isedit);
  };

  const editData = (input) => {
    console.log(cardIndex, "cardIndex");
    users[cardIndex] = input;
    setUsers([...users]);
    setIsEdit(false);
  };

  const deleteUser = (index) => {
    console.log("delete", index);
    const newUsers = users.filter((user, idx) => idx !== index);
    setUsers(newUsers);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      editData(data);
      return;
    } else {
      addData(data);
    }
    setData({
      name: "",
      email: "",
      id: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{isEdit ? "Update" : "Add"}</button>
      </form>
      <div>
        <h1>All User</h1>
        {users.length > 0 ? (
          users?.map((user, index) => (
            <div key={index}>
              <h3>Name: {user.name}</h3>
              <h3>Email: {user.email}</h3>
              <button onClick={() => getUser(true, index, user)}>Edit</button>
              <button onClick={() => deleteUser(index)}>Delete</button>
            </div>
          ))
        ) : (
          <h3>No User</h3>
        )}
      </div>
    </>
  );
}

export default App;
