import React from "react";

const TestBody = () => {
const [users, setUsers] = useState([])

useEffect(() =>{
    // axios.get('https://blog-backend-opal-nine.vercel.app/getUsers')
    axios.get('http://localhost:3001/getUsers')
    .then(users=>setUsers(users.data))
    .catch(err=>console.log(err))

})
  return (
    <div className="w-100 vh-100 d-flex justify-center align-items-center">
      <div className="w-50">
        <table className="table">
          <thead>
            <tr>
              <th>Name: </th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td key={user.id}>{user.name}</td>
                <td key={user.id}>{user.email}</td>
                <td key={user.id}>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestBody;
