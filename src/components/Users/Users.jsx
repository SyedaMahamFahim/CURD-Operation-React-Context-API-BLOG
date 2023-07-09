import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Users = () => {
    const { users,getUserData,deleteUser } = useContext(UserContext);

  return (
    <div>
        <h1>All User</h1>
        {users.length > 0 ? (
          users?.map((user, index) => (
            <div key={index}>
              <h1>Id:{index}</h1>
              <h3>Name: {user.name}</h3>
              <h3>Email: {user.email}</h3>
              <button onClick={() => getUserData(index, user)}>Edit</button>
              <button onClick={() => deleteUser(index)}>Delete</button>
            </div>
          ))
        ) : (
          <h3>No User</h3>
        )}
      </div>
  )
}

export default Users