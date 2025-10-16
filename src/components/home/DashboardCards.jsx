// import React from "react";
// import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react";

// const DashboardCards = ({ summary }) => {
//   const cards = [
//     {
//       title: "Total Invested",
//       value: `Rs. ${summary.totalInvested.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       subtitle: "Total Value",
//       subtitleValue: `Rs. ${summary.totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       icon: <DollarSign className="text-indigo-600" />,
//     },
//     {
//       title: "Total Gain/Loss",
//       value: `Rs. ${summary.gainLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       icon: summary.gainLoss >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.returnPercent,
//     },
//     {
//       title: "Today Performance",
//       value: `Rs. ${summary.todayPerf.toLocaleString()}`,
//       icon: summary.todayReturn >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.todayReturn,
//     },
//     {
//       title: "Last 7 Days Performance",
//       value: `Rs. ${summary.weekPerf.toLocaleString()}`,
//       icon: summary.weekReturn >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.weekReturn,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//       {cards.map((c, idx) => (
//         <div key={idx} className="bg-white shadow rounded-xl p-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium">{c.title}</h3>
//             {c.icon}
//           </div>
//           <p
//             className={`text-2xl font-bold mt-2 ${
//               c.returnPct !== undefined
//                 ? c.returnPct >= 0
//                   ? "text-green-600"
//                   : "text-red-600"
//                 : "text-indigo-700"
//             }`}
//           >
//             {c.value}
//           </p>
//           {c.subtitle && (
//             <>
//               <p className="text-sm text-gray-500 mt-1">{c.subtitle}</p>
//               <p className="text-lg font-semibold text-green-600">{c.subtitleValue}</p>
//             </>
//           )}
//           {c.returnPct !== undefined && (
//             <div className="flex justify-between text-sm text-gray-500 mt-1">
//               <span>Return</span>
//               <span
//                 className={`font-semibold ${
//                   c.returnPct >= 0 ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 <Percent className="inline w-4 h-4 mr-1" />
//                 {c.returnPct > 0 ? "+" : ""}
//                 {c.returnPct.toFixed(2)}%
//               </span>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DashboardCards;

// import React from "react";
// import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react";

// const DashboardCards = ({ summary }) => {
//   const cards = [
//     {
//       title: "Total Invested",
//       value: `Rs. ${summary.totalInvested.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       subtitle: "Total Value",
//       subtitleValue: `Rs. ${summary.totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       icon: <DollarSign className="text-indigo-600" />,
//     },
//     {
//       title: "Total Gain/Loss",
//       value: `Rs. ${summary.gainLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       icon: summary.gainLoss >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.returnPercent,
//     },
//     {
//       title: "Today Performance",
//       value: `Rs. ${summary.todayPerf.toLocaleString()}`,
//       icon: summary.todayReturn >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.todayReturn,
//     },
//     {
//       title: "Last 7 Days Performance",
//       value: `Rs. ${summary.weekPerf.toLocaleString()}`,
//       icon: summary.weekReturn >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.weekReturn,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//       {cards.map((c, idx) => (
//         <div key={idx} className="bg-white shadow rounded-xl p-4 flex flex-col justify-between">
//           {/* Title & Icon */}
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium text-sm">{c.title}</h3>
//             {c.icon}
//           </div>

//           {/* Main Value */}
//           <p
//             className={`text-xl font-bold mt-1 ${
//               c.returnPct !== undefined
//                 ? c.returnPct >= 0
//                   ? "text-green-600"
//                   : "text-red-600"
//                 : "text-indigo-700"
//             }`}
//           >
//             {c.value}
//           </p>

//           {/* Subtitle (only for Total Invested) */}
//           {c.subtitle && (
//             <div className="mt-1">
//               <p className="text-xs text-gray-500">{c.subtitle}</p>
//               <p className="text-sm font-semibold text-green-600">{c.subtitleValue}</p>
//             </div>
//           )}

//           {/* Return Label + % Icon */}
//           {c.returnPct !== undefined && (
//             <div className="mt-2 flex flex-col gap-1">
//               <div className="flex justify-between text-xs text-gray-500 items-center">
//                 <span>Return</span>
//                 <Percent className="w-4 h-4 text-gray-500" />
//               </div>
//               <p
//                 className={`text-sm font-semibold ${
//                   c.returnPct >= 0 ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {c.returnPct > 0 ? "+" : ""}
//                 {c.returnPct.toFixed(2)}%
//               </p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DashboardCards;


// import React from "react";
// import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react";

// const DashboardCards = ({ summary }) => {
//   const cards = [
//     {
//       title: "Total Invested",
//       value: `Rs. ${summary.totalInvested.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       subtitle: "Total Value",
//       subtitleValue: `Rs. ${summary.totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       icon: <DollarSign className="text-indigo-600" />,
//     },
//     {
//       title: "Total Gain/Loss",
//       value: `Rs. ${summary.gainLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       icon: summary.gainLoss >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.returnPercent,
//     },
//     {
//       title: "Today Performance",
//       value: `Rs. ${summary.todayPerf.toLocaleString()}`,
//       icon: summary.todayReturn >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.todayReturn,
//     },
//     {
//       title: "Last 7 Days Performance",
//       value: `Rs. ${summary.weekPerf.toLocaleString()}`,
//       icon: summary.weekReturn >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.weekReturn,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//       {cards.map((c, idx) => (
//         <div key={idx} className="bg-white shadow rounded-xl p-4 flex flex-col justify-between">
//           {/* Title & Icon */}
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium text-sm">{c.title}</h3>
//             {c.icon}
//           </div>

//           {/* Main Value */}
//           <p
//             className={`text-2xl font-bold mt-1 ${
//               c.returnPct !== undefined
//                 ? c.returnPct >= 0
//                   ? "text-green-600"
//                   : "text-red-600"
//                 : "text-indigo-700"
//             }`}
//           >
//             {c.value}
//           </p>

//           {/* Subtitle (only for Total Invested) */}
//           {c.subtitle && (
//             <div className="mt-1">
//               <p className="text-xs text-gray-500">{c.subtitle}</p>
//               <p className="text-sm font-semibold text-green-600">{c.subtitleValue}</p>
//             </div>
//           )}

//           {/* Return Label + % Icon */}
//           {c.returnPct !== undefined && (
//             <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
//               <span>Return</span>
//               <div className="flex items-center gap-1">
//                 <Percent className="w-4 h-4 text-gray-500" />
//                 <span className={`font-semibold ${c.returnPct >= 0 ? "text-green-600" : "text-red-600"}`}>
//                   {c.returnPct > 0 ? "+" : ""}
//                   {c.returnPct.toFixed(2)}%
//                 </span>
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DashboardCards;

// import React from "react";
// import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

// const DashboardCards = ({ summary }) => {
//   const cards = [
//     {
//       title: "Total Invested",
//       value: `Rs. ${summary.totalInvested.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       subtitle: "Total Value",
//       subtitleValue: `Rs. ${summary.totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       icon: <DollarSign className="text-indigo-600" />,
//     },
//     {
//       title: "Total Gain/Loss",
//       value: `Rs. ${summary.gainLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       icon: summary.gainLoss >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.returnPercent,
//     },
//     {
//       title: "Today Performance",
//       value: `Rs. ${summary.todayPerf.toLocaleString()}`,
//       icon: summary.todayReturn >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.todayReturn,
//     },
//     {
//       title: "Last 7 Days Performance",
//       value: `Rs. ${summary.weekPerf.toLocaleString()}`,
//       icon: summary.weekReturn >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.weekReturn,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//       {cards.map((c, idx) => (
//         <div key={idx} className="bg-white shadow rounded-xl p-4 flex flex-col justify-between">
//           {/* Title & Icon */}
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium text-sm">{c.title}</h3>
//             {c.icon}
//           </div>

//           {/* Main Value */}
//           <p
//             className={`text-2xl font-bold mt-1 ${
//               c.returnPct !== undefined
//                 ? c.returnPct >= 0
//                   ? "text-green-600"
//                   : "text-red-600"
//                 : "text-indigo-700"
//             }`}
//           >
//             {c.value}
//           </p>

//           {/* Subtitle (only for Total Invested) */}
//           {c.subtitle && (
//             <div className="mt-1">
//               <p className="text-xs text-gray-500">{c.subtitle}</p>
//               <p className="text-sm font-semibold text-green-600">{c.subtitleValue}</p>
//             </div>
//           )}

//           {/* Return Percentage */}
//           {c.returnPct !== undefined && (
//             <div className="mt-2 flex justify-between text-xs text-gray-500">
//               <span>Return</span>
//               <span className={`font-semibold ${c.returnPct >= 0 ? "text-green-600" : "text-red-600"}`}>
//                 {c.returnPct > 0 ? "+" : ""}
//                 {c.returnPct.toFixed(2)}%
//               </span>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DashboardCards;

// import React from "react";
// import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

// const DashboardCards = ({ summary }) => {
//   const cards = [
//     {
//       title: "Total Invested",
//       value: `Rs. ${summary.totalInvested.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       subtitle: "Total Value",
//       subtitleValue: `Rs. ${summary.totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       icon: <DollarSign className="text-indigo-600" />,
//     },
//     {
//       title: "Total Gain/Loss",
//       value: `Rs. ${summary.gainLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//       icon: summary.gainLoss >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.returnPercent,
//     },
//     {
//       title: "Today Performance",
//       value: `Rs. ${summary.todayPerf.toLocaleString()}`,
//       icon: summary.todayReturn >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.todayReturn,
//     },
//     {
//       title: "Last 7 Days Performance",
//       value: `Rs. ${summary.weekPerf.toLocaleString()}`,
//       icon: summary.weekReturn >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//       returnPct: summary.weekReturn,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//       {cards.map((c, idx) => (
//         <div key={idx} className="bg-white shadow rounded-xl p-4 flex flex-col justify-between">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium text-sm">{c.title}</h3>
//             {c.icon}
//           </div>

//           <p
//             className={`text-2xl font-bold mt-1 ${
//               c.returnPct !== undefined
//                 ? c.returnPct >= 0
//                   ? "text-green-600"
//                   : "text-red-600"
//                 : "text-indigo-700"
//             }`}
//           >
//             {c.value}
//           </p>

//           {c.subtitle && (
//             <div className="mt-1">
//               <p className="text-xs text-gray-500">{c.subtitle}</p>
//               <p className="text-sm font-semibold text-green-600">{c.subtitleValue}</p>
//             </div>
//           )}

//           {c.returnPct !== undefined && (
//             <div className="mt-2 flex justify-between text-xs text-gray-500">
//               <span>Return</span>
//               <span className={`font-semibold ${c.returnPct >= 0 ? "text-green-600" : "text-red-600"}`}>
//                 {c.returnPct > 0 ? "+" : ""}{c.returnPct.toFixed(2)}%
//               </span>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DashboardCards;

// import React from "react";
// import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

// const DashboardCards = ({ summary = {} }) => {
//   // ✅ Provide safe defaults to avoid runtime crashes
//   const {
//     totalInvested = 0,
//     totalValue = 0,
//     gainLoss = 0,
//     returnPercent = 0,
//     todayPerf = 0,
//     todayReturn = 0,
//     weekPerf = 0,
//     weekReturn = 0,
//   } = summary;

//   const cards = [
//   {
//     title: "Total Invested",
//     value: `Rs. ${totalInvested.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//     subtitle: "Total Value",
//     subtitleValue: `Rs. ${totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//     icon: <DollarSign className="text-indigo-600" />,
//   },
//   {
//     title: "Total Gain/Loss",
//     value: `Rs. ${gainLoss >= 0 ? "+" : "-"}${Math.abs(gainLoss).toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//     icon: gainLoss >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//     returnPct: returnPercent,
//   },
//   {
//     title: "Today Performance",
//     value: `Rs. ${todayPerf >= 0 ? "+" : "-"}${Math.abs(todayPerf).toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//     icon: todayReturn >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//     returnPct: todayReturn,
//   },
//   {
//     title: "Realized Gain/Loss",
//     value: `Rs. ${weekPerf >= 0 ? "+" : "-"}${Math.abs(weekPerf).toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
//     icon: weekReturn >= 0 ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-600" />,
//     returnPct: weekReturn,
//   },
// ];


//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//       {cards.map((c, idx) => (
//         <div
//           key={idx}
//           className="bg-white shadow rounded-xl p-4 flex flex-col justify-between transition-transform duration-200 hover:scale-[1.02]"
//         >
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium text-sm">{c.title}</h3>
//             {c.icon}
//           </div>

//           <p
//             className={`text-2xl font-bold mt-1 ${
//               c.returnPct !== undefined
//                 ? c.returnPct >= 0
//                   ? "text-green-600"
//                   : "text-red-600"
//                 : "text-indigo-700"
//             }`}
//           >
//             {c.value}
//           </p>

//           {c.subtitle && (
//             <div className="mt-1">
//               <p className="text-xs text-gray-500">{c.subtitle}</p>
//               <p className="text-sm font-semibold text-green-600">
//                 {c.subtitleValue}
//               </p>
//             </div>
//           )}

//           {c.returnPct !== undefined && (
//             <div className="mt-2 flex justify-between text-xs text-gray-500">
//               <span>Return</span>
//               <span
//                 className={`font-semibold ${
//                   c.returnPct >= 0 ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {c.returnPct > 0 ? "+" : ""}
//                 {c.returnPct.toFixed(2)}%
//               </span>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DashboardCards;

// import React from "react";
// import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

// const DashboardCards = ({ summary = {} }) => {
//   // ✅ Safe defaults so component never crashes
//   const {
//     totalInvested = 0,
//     totalValue = 0,
//     gainLoss = 0,
//     returnPercent = 0,
//     todayPerf = 0,
//     todayReturn = 0,
//     realizedGain = 0, // 🟩 new field
//   } = summary;

//   const cards = [
//     {
//       title: "Total Invested",
//       value: `Rs. ${totalInvested.toLocaleString(undefined, {
//         maximumFractionDigits: 0,
//       })}`,
//       subtitle: "Total Value",
//       subtitleValue: `Rs. ${totalValue.toLocaleString(undefined, {
//         maximumFractionDigits: 0,
//       })}`,
//       icon: <DollarSign className="text-indigo-600" />,
//     },
//     {
//       title: "Unrealized Gain/Loss",
//       value: `Rs. ${
//         gainLoss >= 0 ? "+" : "-"
//       }${Math.abs(gainLoss).toLocaleString(undefined, {
//         maximumFractionDigits: 0,
//       })}`,
//       icon:
//         gainLoss >= 0 ? (
//           <TrendingUp className="text-green-600" />
//         ) : (
//           <TrendingDown className="text-red-600" />
//         ),
//       returnPct: returnPercent,
//     },
//     {
//       title: "Realized Gain/Loss",
//       value: `Rs. ${
//         realizedGain >= 0 ? "+" : "-"
//       }${Math.abs(realizedGain).toLocaleString(undefined, {
//         maximumFractionDigits: 0,
//       })}`,
//       icon:
//         realizedGain >= 0 ? (
//           <TrendingUp className="text-green-600" />
//         ) : (
//           <TrendingDown className="text-red-600" />
//         ),
//     },
//     {
//       title: "Today's Performance",
//       value: `Rs. ${
//         todayPerf >= 0 ? "+" : "-"
//       }${Math.abs(todayPerf).toLocaleString(undefined, {
//         maximumFractionDigits: 0,
//       })}`,
//       icon:
//         todayReturn >= 0 ? (
//           <TrendingUp className="text-green-600" />
//         ) : (
//           <TrendingDown className="text-red-600" />
//         ),
//       returnPct: todayReturn,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//       {cards.map((c, idx) => (
//         <div
//           key={idx}
//           className="bg-white shadow rounded-xl p-4 flex flex-col justify-between transition-transform duration-200 hover:scale-[1.02]"
//         >
//           {/* Header */}
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium text-sm">{c.title}</h3>
//             {c.icon}
//           </div>

//           {/* Value */}
//           <p
//             className={`text-2xl font-bold mt-1 ${
//               c.returnPct !== undefined
//                 ? c.returnPct >= 0
//                   ? "text-green-600"
//                   : "text-red-600"
//                 : "text-indigo-700"
//             }`}
//           >
//             {c.value}
//           </p>

//           {/* Optional Subtitle */}
//           {c.subtitle && (
//             <div className="mt-1">
//               <p className="text-xs text-gray-500">{c.subtitle}</p>
//               <p className="text-sm font-semibold text-green-600">
//                 {c.subtitleValue}
//               </p>
//             </div>
//           )}

//           {/* Optional Return % */}
//           {c.returnPct !== undefined && (
//             <div className="mt-2 flex justify-between text-xs text-gray-500">
//               <span>Return</span>
//               <span
//                 className={`font-semibold ${
//                   c.returnPct >= 0 ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {c.returnPct > 0 ? "+" : ""}
//                 {c.returnPct.toFixed(2)}%
//               </span>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DashboardCards;

import React from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Banknote,
} from "lucide-react";

const DashboardCards = ({ summary = {} }) => {
  // ✅ Safe defaults
  const {
    totalInvested = 0,
    totalValue = 0,
    gainLoss = 0,
    returnPercent = 0,
    todayPerf = 0,
    todayReturn = 0,
    realizedGain = 0,
    realizedReturn = 0, // 🟩 added new field
  } = summary;

  const cards = [
    {
      title: "Total Invested",
      value: `Rs. ${totalInvested.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      })}`,
      subtitle: "Total Value",
      subtitleValue: `Rs. ${totalValue.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      })}`,
      icon: <DollarSign className="text-indigo-600" />,
    },
    {
      title: "Unrealized Gain/Loss",
      value: `Rs. ${
        gainLoss >= 0 ? "+" : "-"
      }${Math.abs(gainLoss).toLocaleString(undefined, {
        maximumFractionDigits: 0,
      })}`,
      icon:
        gainLoss >= 0 ? (
          <TrendingUp className="text-green-600" />
        ) : (
          <TrendingDown className="text-red-600" />
        ),
      returnPct: returnPercent,
    },
    {
      title: "Realized Gain/Loss",
      value: `Rs. ${
        realizedGain >= 0 ? "+" : "-"
      }${Math.abs(realizedGain).toLocaleString(undefined, {
        maximumFractionDigits: 0,
      })}`,
      icon: (
        <Banknote
          className={`${
            realizedGain >= 0 ? "text-green-600" : "text-red-600"
          }`}
        />
      ),
      returnPct: realizedReturn, // 🟩 show % return same as others
    },
    {
      title: "Today's Performance",
      value: `Rs. ${
        todayPerf >= 0 ? "+" : "-"
      }${Math.abs(todayPerf).toLocaleString(undefined, {
        maximumFractionDigits: 0,
      })}`,
      icon:
        todayReturn >= 0 ? (
          <TrendingUp className="text-green-600" />
        ) : (
          <TrendingDown className="text-red-600" />
        ),
      returnPct: todayReturn,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((c, idx) => (
        <div
          key={idx}
          className="bg-white shadow rounded-xl p-4 flex flex-col justify-between transition-transform duration-200 hover:scale-[1.02]"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600 font-medium text-sm">{c.title}</h3>
            {c.icon}
          </div>

          {/* Value */}
          <p
            className={`text-2xl font-bold mt-1 ${
              c.returnPct !== undefined
                ? c.returnPct >= 0
                  ? "text-green-600"
                  : "text-red-600"
                : "text-indigo-700"
            }`}
          >
            {c.value}
          </p>

          {/* Optional Subtitle */}
          {c.subtitle && (
            <div className="mt-1">
              <p className="text-xs text-gray-500">{c.subtitle}</p>
              <p className="text-sm font-semibold text-green-600">
                {c.subtitleValue}
              </p>
            </div>
          )}

          {/* Optional Return % */}
          {c.returnPct !== undefined && (
            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>Return</span>
              <span
                className={`font-semibold ${
                  c.returnPct >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {c.returnPct > 0 ? "+" : ""}
                {c.returnPct.toFixed(2)}%
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
