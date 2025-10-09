// import React from "react";

// const TransactionForm = ({ newTransaction, setNewTransaction, handleAddTransaction }) => {
//   return (
//     <form
//       onSubmit={handleAddTransaction}
//       className="bg-white shadow p-6 rounded-lg space-y-4 w-full overflow-x-auto"
//     >
//       <h2 className="text-xl font-semibold text-gray-700">Add Transaction</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
//         <input
//           type="text"
//           placeholder="Symbol (e.g. PSO)"
//           value={newTransaction.symbol}
//           onChange={(e) => setNewTransaction({ ...newTransaction, symbol: e.target.value })}
//           className="border border-gray-300 rounded-md px-3 py-2"
//         />
//         <select
//           value={newTransaction.type}
//           onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
//           className="border border-gray-300 rounded-md px-3 py-2"
//         >
//           <option value="buy">Buy</option>
//           <option value="sell">Sell</option>
//           <option value="dividend">Dividend</option>
//         </select>
//         <input
//           type="number"
//           placeholder="Quantity"
//           value={newTransaction.quantity}
//           onChange={(e) => setNewTransaction({ ...newTransaction, quantity: e.target.value })}
//           className="border border-gray-300 rounded-md px-3 py-2"
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={newTransaction.price}
//           onChange={(e) => setNewTransaction({ ...newTransaction, price: e.target.value })}
//           className="border border-gray-300 rounded-md px-3 py-2"
//         />
//         <input
//           type="date"
//           value={newTransaction.date}
//           onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
//           className="border border-gray-300 rounded-md px-3 py-2"
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
//       >
//         Add Transaction
//       </button>
//     </form>
//   );
// };

// export default TransactionForm;

import React from "react";

const TransactionForm = ({ newTransaction, setNewTransaction, handleAddTransaction }) => {
  const handlePriceChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and decimal points
    if (/^\d*\.?\d*$/.test(value)) {
      setNewTransaction({
        ...newTransaction,
        price: value,
      });
    }
  };

  return (
    <form
      onSubmit={handleAddTransaction}
      className="bg-white shadow p-6 rounded-lg space-y-4 w-full overflow-x-auto"
    >
      <h2 className="text-xl font-semibold text-gray-700">Add Transaction</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <input
          type="text"
          placeholder="Symbol (e.g. PSO)"
          value={newTransaction.symbol}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, symbol: e.target.value.toUpperCase() })
          }
          className="border border-gray-300 rounded-md px-3 py-2"
        />
        <select
          value={newTransaction.type}
          onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
          className="border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
          <option value="dividend">Dividend</option>
        </select>
        <input
          type="number"
          placeholder="Quantity"
          value={newTransaction.quantity}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, quantity: parseInt(e.target.value) || "" })
          }
          className="border border-gray-300 rounded-md px-3 py-2"
        />
        <input
          type="text"
          placeholder="Price"
          value={newTransaction.price}
          onChange={handlePriceChange}
          className="border border-gray-300 rounded-md px-3 py-2"
        />
        <input
          type="date"
          value={newTransaction.date}
          onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
          className="border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
