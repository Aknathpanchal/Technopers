import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {useParams, useNavigate} from 'react-router-dom'
import { update } from "../red/Redux/Action";

const Editpage = ({getData}) => {

  const {id} = useParams()
  const products = useSelector((store)=> store.AppReducer.datas)
const dispatch = useDispatch()
const navigate = useNavigate()

// const [title, setTitle] = useState("")
// const [price, setPrice] = useState("")

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [mobile, setMobile] = useState("");
const [age, setAge] = useState("");

const handleUpdate =(type)=>{
  if(type==="updatedData"){
     dispatch(update(id,{
      name: name, email: email, mobile: mobile, age: age 
     })).then(()=>dispatch(getData))
     navigate("/")
  }
}
useEffect(()=>{
  if(products.length===0){
    dispatch(getData)
  }
},[dispatch,products.length])

useEffect(()=>{
  if(products){
    const prod =products.find(item=> item.id === Number(id))
    if(prod){
      // setTitle(prod.title)
      // setPrice(prod.price)
      setName(prod.name);
      setEmail(prod.email);
      setMobile(prod.mobile);
      setAge(prod.age);
    }
  }
},[id,products])

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
          {/* <div className="mt-4">
                          <label
                              htmlFor="gender"
                              className="block text-sm font-medium text-gray-700 undefined"
                          >
                              Gender
                          </label>
                          <div className="flex flex-col items-start">
                              <input
                                  type="text"
                                  name="gender"
                                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              />
                          </div>
                      </div> */}
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              onClick={()=> handleUpdate("updatedData")}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Editpage;
