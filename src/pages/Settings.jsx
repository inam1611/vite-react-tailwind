// import React from "react";

// const Settings = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-16">
//       <div className="bg-white shadow-md rounded-lg p-6 w-96 text-center">
//         <h1 className="text-2xl font-semibold text-gray-800 mb-4">Settings</h1>
//         <p className="text-gray-600">
//           This is a placeholder page for app settings.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Settings;

import React from "react";

const Settings = () => {
  return (
    <div className="bg-gray-100 min-h-[calc(100vh-4rem)] p-8 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Settings</h1>

        {/* Portfolio Preferences */}
        <section className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Portfolio Preferences
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block font-medium text-gray-600 mb-1">
                Default Currency
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-200">
                <option value="PKR">PKR (₨)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-gray-600 mb-1">
                Data Refresh Interval (minutes)
              </label>
              <input
                type="number"
                min="1"
                defaultValue="5"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
        </section>

        {/* Stock Data */}
        <section className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Stock Data
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Enable Real-time Updates</span>
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 text-blue-600"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-600 mb-1">
                Default PSX Index
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-200">
                <option value="KSE100">KSE-100</option>
                <option value="KSE30">KSE-30</option>
                <option value="ALLSHR">All Share Index</option>
              </select>
            </div>
          </div>
        </section>

        {/* Appearance */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Appearance
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block font-medium text-gray-600 mb-1">
                Theme
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-200">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System Default</option>
              </select>
            </div>

            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Save Changes
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
