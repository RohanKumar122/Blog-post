import React, { useEffect, useState } from "react";
import axios from "axios";

const Register = () => {

  const [buttonText, setButtonText] = useState("Submit");
  
useEffect(() => {
  const res =async()=>{
    try{

      const dataawait = await axios.get('https://node-js-backend-h2po.onrender.com/')
      console.log(dataawait.data)
    }  
    catch(error){
      console.log(error)
    }

  }
  res()

}, []);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setButtonText("please wait...")
    e.preventDefault();

    try {
      const response = await fetch(
        "https://node-js-backend-h2po.onrender.com/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), 
        }
      );
      
    
      if (response.ok) {
        console.log("Registration successful!");
        setFormData({
          name: "",
          email: "",
        });
        setButtonText("Done")
      } else {
        setButtonText("failed!!")
        const errorData = await response.json(); 
        console.log(
          "Registration failed:",
          errorData.message || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center  font-bold ">
      <div className="flex flex-col text-3xl text-center py-10  ">
        <h1>Register</h1>
      </div>

      <div className="flex flex-row border-2 absolute my-4 py-20 align-middle">
        <form className="flex flex-col align-middle">
          <div className="flex flex-col gap-2 m-auto w-max h-max">
            <input
              className="mx-4 px-2 py-2 placeholder:text-center border-2 rounded-lg"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="mx-4 px-2 py-2 placeholder:text-center border-2 rounded-lg"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button
              className="mx-10 my-4 px-2 py-2 bg-green-600 text-white rounded-lg"
              type="submit" // Submit the form on click
              onClick={handleSubmit }
            >
               {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
