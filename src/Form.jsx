import { useContext } from "react";
import "./App.css";
import { UserContext } from "./context/UserContext";

import Users from "./components/Users/Users";
function App() {
  const { data, isEdit, handleChange, handleSubmit } = useContext(UserContext);

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
      <Users />
    </>
  );
}

export default App;
