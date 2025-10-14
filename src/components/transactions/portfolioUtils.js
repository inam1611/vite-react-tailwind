// src/components/transactions/portfolioUtils.js
import toast from "react-hot-toast";

export const addPortfolio = (name, portfolios, transactions, selectedPortfolio, syncToFirestore, setPortfolios, setSelectedPortfolio, setNewPortfolioName) => {
  if (name && !portfolios.includes(name)) {
    const updatedPortfolios = [...portfolios, name];
    const updatedData = {
      portfolios: updatedPortfolios,
      selectedPortfolio: name,
      transactions,
    };
    setPortfolios(updatedPortfolios);
    setSelectedPortfolio(name);
    setNewPortfolioName("");
    syncToFirestore(updatedData);
    toast.success("Portfolio added!");
  } else toast.error("Portfolio already exists or invalid name!");
};

export const deletePortfolio = (name, portfolios, selectedPortfolio, transactions, syncToFirestore, setPortfolios, setTransactions, setSelectedPortfolio) => {
  if (name === "Main Portfolio") return toast.error("Cannot delete default portfolio.");
  if (window.confirm(`Delete "${name}" and all its transactions?`)) {
    const updatedPortfolios = portfolios.filter((p) => p !== name);
    const updatedTransactions = transactions.filter((tx) => tx.portfolio !== name);
    const updatedData = {
      portfolios: updatedPortfolios,
      selectedPortfolio: selectedPortfolio === name ? "Main Portfolio" : selectedPortfolio,
      transactions: updatedTransactions,
    };
    setPortfolios(updatedPortfolios);
    setTransactions(updatedTransactions);
    setSelectedPortfolio(updatedData.selectedPortfolio);
    syncToFirestore(updatedData);
    toast.success("Portfolio deleted.");
  }
};
