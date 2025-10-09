import React from "react";

const TransactionTable = ({ filteredTransactions, handleDeleteTransaction, totalValue }) => {
  return (
    <div className="bg-white shadow p-6 rounded-lg overflow-x-auto w-full">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Transactions</h2>

      {filteredTransactions.length > 0 ? (
        <table className="w-full border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Symbol</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((tx, index) => (
              <tr
                key={tx.id}
                className={`text-center ${index % 2 ? "bg-gray-50" : "bg-white"} border-t`}
              >
                <td className="p-2 border">{tx.date || "-"}</td>
                <td className="p-2 border font-medium">{tx.symbol}</td>
                <td
                  className={`p-2 border font-medium ${
                    tx.type === "buy"
                      ? "text-green-600"
                      : tx.type === "sell"
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {tx.type}
                </td>
                <td className="p-2 border">{tx.quantity}</td>
                <td className="p-2 border">{tx.price}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleDeleteTransaction(tx.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No transactions for this portfolio yet.</p>
      )}

      <div className="mt-6 text-gray-700 font-medium space-y-1">
        <p>
          Total Value:{" "}
          <span className="text-indigo-600">Rs. {totalValue.toLocaleString()}</span>
        </p>
        <p>Total Transactions: {filteredTransactions.length}</p>
      </div>
    </div>
  );
};

export default TransactionTable;
