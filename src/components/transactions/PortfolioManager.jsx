// import React from "react";

// const PortfolioManager = ({
//   portfolios,
//   selectedPortfolio,
//   setSelectedPortfolio,
//   newPortfolioName,
//   setNewPortfolioName,
//   handleAddPortfolio,
//   handleDeletePortfolio,
// }) => {
//   return (
//     <div className="bg-white shadow p-6 rounded-lg space-y-4 w-full">
//       <div className="flex flex-wrap items-center justify-between gap-4">
//         <div className="flex items-center gap-2">
//           <label className="font-medium text-gray-700">Active Portfolio:</label>
//           <select
//             value={selectedPortfolio}
//             onChange={(e) => setSelectedPortfolio(e.target.value)}
//             className="ml-2 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200"
//           >
//             {portfolios.map((p) => (
//               <option key={p}>{p}</option>
//             ))}
//           </select>
//         </div>

//         <div className="flex gap-2 flex-wrap items-center">
//           <input
//             type="text"
//             placeholder="New Portfolio Name"
//             value={newPortfolioName}
//             onChange={(e) => setNewPortfolioName(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2"
//           />
//           <button
//             onClick={handleAddPortfolio}
//             className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
//           >
//             Add
//           </button>

//           {selectedPortfolio !== "Main Portfolio" && (
//             <button
//               onClick={() => handleDeletePortfolio(selectedPortfolio)}
//               className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
//             >
//               Delete
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioManager;


// import React from "react";
// import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
// import { db, auth } from "../../firebase/firebase";

// const PortfolioManager = ({
//   portfolios,
//   selectedPortfolio,
//   setSelectedPortfolio,
//   newPortfolioName,
//   setNewPortfolioName,
//   handleAddPortfolio,
//   handleDeletePortfolio,
// }) => {
//   // 🔹 Update selected portfolio in Firestore & cache
//   const handlePortfolioChange = async (e) => {
//     const selected = e.target.value;
//     setSelectedPortfolio(selected);

//     if (auth.currentUser) {
//       const userDocRef = doc(db, "users", auth.currentUser.uid);
//       await updateDoc(userDocRef, {
//         selectedPortfolio: selected,
//         lastUpdated: serverTimestamp(),
//       });

//       // Update localStorage cache
//       const cached = JSON.parse(localStorage.getItem("cachedTransactionsData") || "{}");
//       cached.selectedPortfolio = selected;
//       localStorage.setItem("cachedTransactionsData", JSON.stringify(cached));
//     }
//   };

//   return (
//     <div className="bg-white shadow p-6 rounded-lg space-y-4 w-full">
//       <div className="flex flex-wrap items-center justify-between gap-4">
//         <div className="flex items-center gap-2">
//           <label className="font-medium text-gray-700">Active Portfolio:</label>
//           <select
//             value={selectedPortfolio}
//             onChange={handlePortfolioChange} // ✅ updated handler
//             className="ml-2 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200"
//           >
//             {portfolios.map((p) => (
//               <option key={p}>{p}</option>
//             ))}
//           </select>
//         </div>

//         <div className="flex gap-2 flex-wrap items-center">
//           <input
//             type="text"
//             placeholder="New Portfolio Name"
//             value={newPortfolioName}
//             onChange={(e) => setNewPortfolioName(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2"
//           />
//           <button
//             onClick={handleAddPortfolio}
//             className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
//           >
//             Add
//           </button>

//           {selectedPortfolio !== "Main Portfolio" && (
//             <button
//               onClick={() => handleDeletePortfolio(selectedPortfolio)}
//               className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
//             >
//               Delete
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioManager;

// import React, { useState} from "react";
// import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
// import { db, auth } from "../../firebase/firebase";
// import { usePortfolioContext } from "../../contexts/PortfolioContext";

// const PortfolioManager = ({ portfolios, handleAddPortfolio, handleDeletePortfolio }) => {
//   const { activePortfolio, setActivePortfolio } = usePortfolioContext();
//   const [newPortfolioName, setNewPortfolioName] = useState("");

//   // 🔹 Sync selected portfolio across Firestore and cache
//   const handlePortfolioChange = async (e) => {
//     const selected = e.target.value;
//     setActivePortfolio(selected);

//     if (auth.currentUser) {
//       const userDocRef = doc(db, "users", auth.currentUser.uid);
//       await updateDoc(userDocRef, {
//         selectedPortfolio: selected,
//         lastUpdated: serverTimestamp(),
//       });

//       const cached = JSON.parse(localStorage.getItem("cachedTransactionsData") || "{}");
//       cached.selectedPortfolio = selected;
//       localStorage.setItem("cachedTransactionsData", JSON.stringify(cached));
//     }
//   };

//   return (
//     <div className="bg-white shadow p-6 rounded-lg space-y-4 w-full">
//       <div className="flex flex-wrap items-center justify-between gap-4">
//         <div className="flex items-center gap-2">
//           <label className="font-medium text-gray-700">Active Portfolio:</label>
//           <select
//             value={activePortfolio}
//             onChange={handlePortfolioChange}
//             className="ml-2 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200"
//           >
//             {portfolios.map((p) => (
//               <option key={p}>{p}</option>
//             ))}
//           </select>
//         </div>

//         <div className="flex gap-2 flex-wrap items-center">
//           <input
//             type="text"
//             placeholder="New Portfolio Name"
//             value={newPortfolioName}
//             onChange={(e) => setNewPortfolioName(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2"
//           />
//           <button
//             onClick={() => {
//               handleAddPortfolio(newPortfolioName);
//               setNewPortfolioName("");
//             }}
//             className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
//           >
//             Add
//           </button>

//           {activePortfolio !== "Main Portfolio" && (
//             <button
//               onClick={() => handleDeletePortfolio(activePortfolio)}
//               className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
//             >
//               Delete
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioManager;


import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";

const PortfolioManager = ({
  portfolios,
  activePortfolio,
  setActivePortfolio,
  newPortfolioName,
  setNewPortfolioName,
  handleAddPortfolio,
  handleDeletePortfolio,
}) => {
  const handlePortfolioChange = async (e) => {
    const selected = e.target.value;
    setActivePortfolio(selected);

    if (auth.currentUser) {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userDocRef, {
        selectedPortfolio: selected,
        lastUpdated: serverTimestamp(),
      });

      const cached = JSON.parse(localStorage.getItem("cachedTransactionsData") || "{}");
      cached.selectedPortfolio = selected;
      localStorage.setItem("cachedTransactionsData", JSON.stringify(cached));
    }
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg space-y-4 w-full">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <label className="font-medium text-gray-700">Active Portfolio:</label>
          <select
            value={activePortfolio}
            onChange={handlePortfolioChange}
            className="ml-2 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200"
          >
            {portfolios.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-2 flex-wrap items-center">
          <input
            type="text"
            placeholder="New Portfolio Name"
            value={newPortfolioName}
            onChange={(e) => setNewPortfolioName(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <button
            onClick={handleAddPortfolio}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Add
          </button>

          {activePortfolio !== "Main Portfolio" && (
            <button
              onClick={() => handleDeletePortfolio(activePortfolio)}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioManager;
