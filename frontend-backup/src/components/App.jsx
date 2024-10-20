import { useState,useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() =>{
    // axios.get('https://blog-backend-opal-nine.vercel.app/getUsers')
    axios.get('http://localhost:3001/getUsers')
    .then(users=>setUsers(users.data))
    .catch(err=>console.log(err))

    
  })

  return(
    
    <div className='w-100 vh-100 d-flex justify-center align-items-center'>
      <div class="bg-green-500 font-bold #6b7280 px-7 py-4">
        <h1>Hello Rohan</h1>
      </div>

        <tbody>
          {users.map(  user=>(
            <tr >
              <td key={user.id}><img src={user.image} alt="" /></td>
              <td key={user.id}>{user.heading}</td>
              <td key={user.id}>{user.para}</td>
              
            </tr>
          ))}
        </tbody>
    </div>) 
}

export default App
