// import React from "react";
// import { useState } from "react";
// import Editpage from "./Editpage";

// export default function EditModal({getData}) {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//       <div className="flex items-center justify-center h-30 mt-5">
//         <button
//           className="px-6 py-3 text-purple-100 bg-purple-600 rounded-md"
//           type="button"
//           onClick={() => setShowModal(true)}
//         >
//            Edit
//         </button>
//       </div>
//       {showModal ? (
//         <>
//           <div className="fixed inset-0 z-10 overflow-y-auto bg-blure"
//           //  onClick={() => setShowModal(false)}
//           >
         
//             <div
//               className=" inset-0 w-5 bg-black opacity-40"
//               onClick={() => setShowModal(false)}
//             ></div>
//             <div className="flex items-center px-4 py-8">
//               <div className="relative max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
//                 <div className="sm:flex">
//                   <div className=" text-center">
                 

//                   <Editpage getData={getData}/>

//                     <div className="items-center gap-2 mt-3">
//                       <button
//                         className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
//                         onClick={() => setShowModal(false)}
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : null}
//     </>
//   );
// }

import React from 'react'

function EditModal() {
  return (
    <div>
      
    </div>
  )
}

export default EditModal

