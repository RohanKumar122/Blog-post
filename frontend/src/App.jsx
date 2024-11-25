import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";
import calender from "./assets/images/calender.png";

function App() {

  const clickHandler = () => {
    <Link to="/pending"></Link>
  }

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
    <div className="w-full h-full font-mono  ">
      <div className="my-4 mx-4 flex flex-col  ">
        <div className="flex flex-wrap w-full h-full items-start  py-3 justify-center   rounded-md">
          {users.map((user) => (
            <div
              key={user.id}
              className="w-full sm:w-full md:w-1/2  lg:w-1/4 lg:m-4 lg:mx-3  p-4 mx-3 my-2 justify-center border-2 border-slate-600 rounded-lg"
            >
              <img
                className="hover:border-green-600 border-2 rounded-md w- h-auto"
                src={user.image}
                alt=""
              />
              <div className="flex flex-col my-4">
                <h2 className="font-bold text-white font-sans text-2xl ">{user.heading}</h2>
                <p className="text-gray-400 my-3">
                  {user.para.length > 40
                    ? `${user.para.substring(0, 110)}...`
                    : user.para}
                </p>

              <div className="text-gray-200 justify-end flex text-xs ">{
                  <img className="w-4 h-4 mx-2" src={calender} alt="" />
              
                }
                {new Date(user.publishedAt).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                }).replace(/ /g, '-')}
                {/* {user.publishedAt } */}
              </div>

                <hr className="my-3"></hr>

                <div className="flex justify-end">
                  <Link to='/pending'>
                  <button className="bg-green-600 justify-end  px-3 py-2 rounded-md text-white" onClick={clickHandler}>
                    Read More
                  </button>
                  </Link>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default App;
