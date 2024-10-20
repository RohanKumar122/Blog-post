import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // axios.get('https://blog-backend-opal-nine.vercel.app/getUsers')
    axios
      .get("http://localhost:3001/getUsers")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  });
return (
<div class="w-full h-full font-serif">
    <div class="my-5 mx-40 text-2xl ">
      <tbody class="my-8 mx-8">
        {users.map((user) => (
          <tr class="flex my-6 items-start space-x-6 ">
            {/* IMAGE */}
            <td key={user.id} class="w-1/3">
              <img
                class="border-green-600   w-full object-cover border-2 rounded-md"
                src={user.image}
                alt=""
              />
            </td>
            {/* HEADING + PARA container */}
            <div class="flex flex-col space-y-4">
              {/* HEADING */}
              <td class="font-bold  text-white" key={user.id}>
                {user.heading}
              </td>
              {/* para */}
              <td class="text-gray-400" key={user.id}>
                {user.para.length > 20
                  ? `${user.para.substring(0, 230)}...`
                  : user.para}
              </td>
            </div>
          </tr>
        ))}
      </tbody>
    </div>
  </div>
);

}

export default App;
