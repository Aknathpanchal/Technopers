import React, { useState } from "react";
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {
      addFailure,
      addRequest,
      addSuccess 
    } from '../red/Redux/Action'

function Add() {
  // const registerAuth = useSelector((state)=> state.isAuth.registerAuth)
  // const navigate = useNavigate() ;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");

   const dispatch = useDispatch()
  // const dispatch=useDispatch()
  // const [,setTodo]=useState("")

  // const add = (payload) => {
  //   console.log(payload);
  //   dispatch(addRequest());
  //   axios
  //     .post("/datas", payload)
  //     .then((r) => dispatch(addSuccess(r.data)))

  //     .catch((e) => dispatch(addFailure(e)));
  // };
  const handleAdd = (e) => {
    if (email !== "" && age !== "" && name !== "" && mobile !== "") {
      const payload = { name: name, email: email, mobile: mobile, age: age };
      console.log("handleaddd");
      // add(payload);
      setName("");
      setEmail("");
      setMobile("");
      setAge("");
    } else {
      alert("Fill Complete Data");
    }
  };
  // useEffect(()=> {
  //     if(registerAuth)
  //     {
  //          navigate('/')
  //     }
  //    },[registerAuth])

  return (
    <div>
      <div className="flex flex-col items-center sm:justify-center bg-gray-70">
        <div className=" px-6 py-4 overflow-hidden bg-white shadow-md sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex items-start">
                <input
                  type="text"
                  name="name"
                  className="block w-full mt-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Age
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="number"
                  name="age"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Mobile Number
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="number"
                  name="phone"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                onClick={() => handleAdd()}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;
