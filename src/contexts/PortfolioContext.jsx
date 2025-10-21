import React, { createContext, useContext, useEffect, useState } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [activePortfolio, setActivePortfolio] = useState("Main Portfolio");

  // Load from cache
  useEffect(() => {
    const cached = JSON.parse(localStorage.getItem("cachedTransactionsData") || "{}");
    if (cached.selectedPortfolio) setActivePortfolio(cached.selectedPortfolio);
  }, []);

  // Sync to cache
  useEffect(() => {
    const cached = JSON.parse(localStorage.getItem("cachedTransactionsData") || "{}");
    cached.selectedPortfolio = activePortfolio;
    localStorage.setItem("cachedTransactionsData", JSON.stringify(cached));
  }, [activePortfolio]);

  return (
    <PortfolioContext.Provider value={{ activePortfolio, setActivePortfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => useContext(PortfolioContext);
