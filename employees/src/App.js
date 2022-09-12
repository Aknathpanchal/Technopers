import React from "react";
import { useState, useEffect } from "react";
import Modal from "./Components/AddModal";
import EditModal from "./Components/EditModal";

function App() {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchemployeesData();
      console.log("Table Updated");
    }, 3000);
    return () => clearInterval(interval);
  }, [employeesData]);

  // const fetchemployeesData = async () => {
  //   const data = await fetch("http://localhost:8080/datas");
  //   const apiResponse = await data.json();
  //   const sortedData = apiResponse;
  //   setEmployeesData(sortedData);
  // };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <Modal />
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">
            EmployeesData
          </h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Mobile Number
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Age
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Price Change 24h
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Price Percentage 24h
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody>
                {employeesData.map((employees) => (
                  <tr key={employees.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {employees.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {employees.email}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">
                        {employees.mobile}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">
                        {employees.age}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {/* <p className="text-gray-600 whitespace-no-wrap">
                        ${employees.price_change_24h}
                      </p> */}
                         <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight" >
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative" onClick={()=>{
                            console.log(employees.id)
                          }}>Deleate</span>
                        </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">
                        {/* {employees.price_change_percentage_24h}% */}
                        <EditModal getdata={fetchemployeesData()}/>
                      </p>
                    </td>
                    {employees.price_change_percentage_24h > 0 ? (
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Upward Trend</span>
                        </span>
                      </td>
                    ) : (
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                     
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
