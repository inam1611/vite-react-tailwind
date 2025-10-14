// src/components/transactions/transactionUtils.js
import toast from "react-hot-toast";

export const addTransaction = (e, newTransaction, selectedPortfolio, portfolios, transactions, setTransactions, setNewTransaction, syncToFirestore) => {
  e.preventDefault();
  if (!newTransaction.symbol || !newTransaction.quantity || !newTransaction.price)
    return toast.error("Please fill all fields!");

  const tx = { ...newTransaction, id: Date.now(), portfolio: selectedPortfolio };
  const updatedTransactions = [...transactions, tx];
  const updatedData = { portfolios, selectedPortfolio, transactions: updatedTransactions };

  setTransactions(updatedTransactions);
  setNewTransaction({ symbol: "", type: "buy", quantity: "", price: "", date: "" });
  syncToFirestore(updatedData);
  toast.success("Transaction added!");
};

export const deleteTransaction = (id, portfolios, selectedPortfolio, transactions, setTransactions, syncToFirestore) => {
  if (window.confirm("Are you sure you want to delete this transaction?")) {
    const updatedTransactions = transactions.filter((tx) => tx.id !== id);
    const updatedData = { portfolios, selectedPortfolio, transactions: updatedTransactions };
    setTransactions(updatedTransactions);
    syncToFirestore(updatedData);
    toast.success("Transaction deleted!");
  }
};
