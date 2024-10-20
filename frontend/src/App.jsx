import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // axios.get('https://blog-backend-opal-nine.vercel.app/getUsers')
    axios
      .get("https://blog-backend-opal-nine.vercel.app/getUsers/")
      // .get("http://localhost:3001/getUsers")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  });
return (
<div class="w-full h-full  font-mono">
    <div class="my-8 mx-40 text-lg  ">
      <tbody class="my-8 mx-8 ">
        {users.map((user) => (
          <tr class="my-6 items-start py-8 space-x-4 hover:border-green-600 ">
            {/* IMAGE */}
            <td key={user.id} class="w-96  my-8">
              <img
                class="hover:border-green-600 w-full h-full object-cover border-2 rounded-md"
                src={user.image}
                alt=""
              />
            </td>
            {/* HEADING + PARA container */}
            <div class="flex flex-col  my-8 ">
              {/* HEADING */}
              <td class="font-bold  text-white " key={user.id}>
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
