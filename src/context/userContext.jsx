import { createContext, useState } from "react";
// Create the context
export const UserContext = createContext();

// Create a provider component
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    id: "",
  });
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addUser = (user) => {
    const id = users.length;
    setUsers([...users, { ...user, id }]);
  };

  const getUserData = (id, user) => {
    setIsEdit(true);
    setData(user);
  };

  const editData = (user) => {
    console.log("editData", user);
    users[user.id] = user;
    setUsers([...users]);
    setIsEdit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data, "data");
    if (isEdit) {
      editData(data);
    } else {
      addUser(data);
    }
    setData({
      name: "",
      email: "",
      id: "",
    });
  };

  const deleteUser = (id) => {
    const confirmation = window.confirm("Are you sure?");
    if (!confirmation) return;
    const newUsers = users.filter((user, idx) => idx !== id);
    setUsers(newUsers);
  };
  return (
    <UserContext.Provider
      value={{
        data,
        users,
        isEdit,
        handleChange,
        handleSubmit,
        getUserData,
        deleteUser,
        editData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
