// import React, { useEffect, useState } from "react";

// export default function LastUpdated({ date }) {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     if (!date) return;
//     setVisible(true);
//     const timer = setTimeout(() => setVisible(false), 1500);
//     return () => clearTimeout(timer);
//   }, [date]);

//   if (!date) return null;

//   return (
//     <p
//       className={`text-sm text-gray-500 mt-2 transition-opacity duration-700 ${
//         visible ? "opacity-100" : "opacity-50"
//       }`}
//     >
//       Last Updated: {date.toLocaleTimeString()}
//     </p>
//   );
// }

import React, { useEffect, useState } from "react";

export default function LastUpdated({ date }) {
  const [highlight, setHighlight] = useState(false);
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    if (!date) return;

    setFormattedTime(date.toLocaleTimeString());
    setHighlight(true);

    const timer = setTimeout(() => setHighlight(false), 2000);
    return () => clearTimeout(timer);
  }, [date]);

  if (!date) return null;

  return (
    <p
      className={`text-sm mt-2 transition-colors duration-700 ${
        highlight ? "text-indigo-600 font-medium" : "text-gray-500"
      }`}
    >
      Last Updated:{" "}
      <span
        className={`transition-colors duration-700 ${
          highlight ? "text-indigo-700" : "text-gray-700"
        }`}
      >
        {formattedTime}
      </span>
    </p>
  );
}
