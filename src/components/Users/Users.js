import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function Users() {
  const [users, setUsers] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`${baseURL}/1`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!users) return "No users!";
  console.log(users);
  console.log(users.name);
  return (
    <div>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {users.name}
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item" href="#" style={{ color: "black" }}>
              {users.website}
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#" style={{ color: "black" }}>
              {users.phone}
            </a>
          </li>

          <li>
            <a class="dropdown-item" href="#">
              <button>logout</button>
            </a>
          </li>
        </ul>
      </li>
    </div>
  );
}
