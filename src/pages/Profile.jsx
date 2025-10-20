// import React, { useEffect, useState } from "react";
// import { useAuth } from "../contexts/authContext";
// import { db } from "../firebase/firebase";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { Pencil, Briefcase, Clock, Wallet } from "lucide-react";

// const Profile = () => {
//   const { currentUser } = useAuth();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [editingName, setEditingName] = useState(false);
//   const [displayName, setDisplayName] = useState("");

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!currentUser) return;
//       setLoading(true);
//       const ref = doc(db, "users", currentUser.uid);
//       const snap = await getDoc(ref);
//       if (snap.exists()) {
//         const data = snap.data();
//         setUserData(data);
//         setDisplayName(data.displayName || "");
//       }
//       setLoading(false);
//     };
//     fetchUserData();
//   }, [currentUser]);

//   const handleNameSave = async () => {
//     if (!currentUser || !displayName.trim()) return;
//     const ref = doc(db, "users", currentUser.uid);
//     await updateDoc(ref, { displayName, lastUpdated: new Date() });
//     setEditingName(false);
//     setUserData((prev) => ({ ...prev, displayName }));
//   };

//   if (!currentUser)
//     return (
//       <div className="text-center mt-20 text-gray-500">
//         Please sign in to view your profile.
//       </div>
//     );

//   if (loading)
//     return (
//       <div className="text-center mt-20 text-gray-500 animate-pulse">
//         Loading profile...
//       </div>
//     );

//   const portfolioCount = userData?.portfolios?.length || 0;
//   const transactionCount = userData?.transactions?.length || 0;
//   const lastUpdated = userData?.lastUpdated?.toDate
//     ? userData.lastUpdated.toDate().toLocaleString()
//     : "—";

//   return (
//     <div className="min-h-screen bg-gray-100 pt-16 flex flex-col items-center px-4">
//       <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl">
//         {/* ===== Header ===== */}
//         <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
//           Profile Overview
//         </h1>

//         {/* ===== User Info ===== */}
//         <div className="space-y-4 border-b border-gray-200 pb-6">
//           <div className="flex justify-between items-center">
//             <p className="text-gray-600 font-medium">Display Name</p>
//             {editingName ? (
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   value={displayName}
//                   onChange={(e) => setDisplayName(e.target.value)}
//                   className="border px-2 py-1 rounded-lg text-sm"
//                 />
//                 <button
//                   onClick={handleNameSave}
//                   className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm"
//                 >
//                   Save
//                 </button>
//               </div>
//             ) : (
//               <div className="flex items-center gap-2">
//                 <span className="text-gray-800">
//                   {userData?.displayName || "—"}
//                 </span>
//                 <button
//                   onClick={() => setEditingName(true)}
//                   className="text-indigo-500 hover:text-indigo-700"
//                 >
//                   <Pencil size={16} />
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="flex justify-between">
//             <p className="text-gray-600 font-medium">Email</p>
//             <p className="text-gray-800">{currentUser.email}</p>
//           </div>

//           <div className="flex justify-between">
//             <p className="text-gray-600 font-medium">UID</p>
//             <p className="text-gray-500 text-sm">{currentUser.uid}</p>
//           </div>

//           <div className="flex justify-between">
//             <p className="text-gray-600 font-medium">Last Updated</p>
//             <p className="text-gray-500 text-sm">{lastUpdated}</p>
//           </div>
//         </div>

//         {/* ===== Quick Stats ===== */}
//         <div className="grid grid-cols-3 gap-4 mt-6 text-center">
//           <div className="bg-blue-50 p-4 rounded-xl">
//             <Briefcase className="mx-auto text-blue-600 mb-1" size={20} />
//             <p className="text-sm text-gray-500">Portfolios</p>
//             <p className="text-xl font-semibold text-blue-700">
//               {portfolioCount}
//             </p>
//           </div>
//           <div className="bg-green-50 p-4 rounded-xl">
//             <Wallet className="mx-auto text-green-600 mb-1" size={20} />
//             <p className="text-sm text-gray-500">Transactions</p>
//             <p className="text-xl font-semibold text-green-700">
//               {transactionCount}
//             </p>
//           </div>
//           <div className="bg-indigo-50 p-4 rounded-xl">
//             <Clock className="mx-auto text-indigo-600 mb-1" size={20} />
//             <p className="text-sm text-gray-500">Active Portfolio</p>
//             <p className="text-sm font-medium text-indigo-700 truncate">
//               {userData?.selectedPortfolio || "—"}
//             </p>
//           </div>
//         </div>

//         {/* ===== Portfolios ===== */}
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold text-gray-800 mb-3">
//             Your Portfolios
//           </h2>
//           {userData?.portfolios?.length ? (
//             <ul className="space-y-2">
//               {userData.portfolios.map((p, i) => (
//                 <li
//                   key={i}
//                   className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg border border-indigo-200"
//                 >
//                   {p}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500">No portfolios yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { db } from "../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Pencil, Briefcase, Clock, Wallet, User } from "lucide-react";

const avatarOptions = [
  "https://api.dicebear.com/9.x/bottts/svg?seed=alpha",
  "https://api.dicebear.com/9.x/avataaars/svg?seed=bravo",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=charlie",
  "https://api.dicebear.com/9.x/fun-emoji/svg?seed=delta",
  "https://api.dicebear.com/9.x/thumbs/svg?seed=echo",
];

const Profile = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editingName, setEditingName] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [selectingAvatar, setSelectingAvatar] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!currentUser) return;
      setLoading(true);
      const ref = doc(db, "users", currentUser.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setUserData(data);
        setDisplayName(data.displayName || "");
        setAvatar(data.avatar || avatarOptions[0]);
      }
      setLoading(false);
    };
    fetchUserData();
  }, [currentUser]);

  const handleNameSave = async () => {
    if (!currentUser || !displayName.trim()) return;
    const ref = doc(db, "users", currentUser.uid);
    await updateDoc(ref, { displayName, lastUpdated: new Date() });
    setEditingName(false);
    setUserData((prev) => ({ ...prev, displayName }));
  };

  const handleAvatarSelect = async (url) => {
    if (!currentUser) return;
    const ref = doc(db, "users", currentUser.uid);
    await updateDoc(ref, { avatar: url, lastUpdated: new Date() });
    setAvatar(url);
    setSelectingAvatar(false);
  };

  if (!currentUser)
    return (
      <div className="text-center mt-20 text-gray-500">
        Please sign in to view your profile.
      </div>
    );

  if (loading)
    return (
      <div className="text-center mt-20 text-gray-500 animate-pulse">
        Loading profile...
      </div>
    );

  const portfolioCount = userData?.portfolios?.length || 0;
  const transactionCount = userData?.transactions?.length || 0;
  const lastUpdated = userData?.lastUpdated?.toDate
    ? userData.lastUpdated.toDate().toLocaleString()
    : "—";

  return (
    <div className="min-h-screen bg-gray-100 pt-16 flex flex-col items-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl">
        {/* ===== Avatar Section ===== */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            {avatar ? (
              <img
                src={avatar}
                alt="Avatar"
                className="w-24 h-24 rounded-full border-4 border-indigo-200 shadow-md"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center">
                <User className="text-indigo-500" size={40} />
              </div>
            )}
            <button
              onClick={() => setSelectingAvatar(!selectingAvatar)}
              className="absolute bottom-0 right-0 bg-indigo-600 text-white p-1.5 rounded-full hover:bg-indigo-700"
            >
              <Pencil size={14} />
            </button>
          </div>

          {selectingAvatar && (
            <div className="mt-3 grid grid-cols-5 gap-2">
              {avatarOptions.map((url, i) => (
                <button
                  key={i}
                  onClick={() => handleAvatarSelect(url)}
                  className={`rounded-full p-1 border-2 ${
                    avatar === url ? "border-indigo-500" : "border-transparent"
                  } hover:border-indigo-300`}
                >
                  <img
                    src={url}
                    alt={`avatar-${i}`}
                    className="w-12 h-12 rounded-full"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ===== Header ===== */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Profile Overview
        </h1>

        {/* ===== User Info ===== */}
        <div className="space-y-4 border-b border-gray-200 pb-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 font-medium">Display Name</p>
            {editingName ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="border px-2 py-1 rounded-lg text-sm"
                />
                <button
                  onClick={handleNameSave}
                  className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-gray-800">
                  {userData?.displayName || "—"}
                </span>
                <button
                  onClick={() => setEditingName(true)}
                  className="text-indigo-500 hover:text-indigo-700"
                >
                  <Pencil size={16} />
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <p className="text-gray-600 font-medium">Email</p>
            <p className="text-gray-800">{currentUser.email}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-600 font-medium">UID</p>
            <p className="text-gray-500 text-sm">{currentUser.uid}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-600 font-medium">Last Updated</p>
            <p className="text-gray-500 text-sm">{lastUpdated}</p>
          </div>
        </div>

        {/* ===== Quick Stats ===== */}
        <div className="grid grid-cols-3 gap-4 mt-6 text-center">
          <div className="bg-purple-50 p-4 rounded-xl">
            <Briefcase className="mx-auto text-purple-600 mb-1" size={20} />
            <p className="text-sm text-gray-500">Portfolios</p>
            <p className="text-xl font-semibold text-purple-700">
              {portfolioCount}
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl">
            <Wallet className="mx-auto text-purple-600 mb-1" size={20} />
            <p className="text-sm text-gray-500">Transactions</p>
            <p className="text-xl font-semibold text-purple-700">
              {transactionCount}
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl">
            <Clock className="mx-auto text-purple-600 mb-1" size={20} />
            <p className="text-sm text-gray-500">Active Portfolio</p>
            <p className="text-sm font-medium text-purple-700 truncate">
              {userData?.selectedPortfolio || "—"}
            </p>
          </div>
        </div>

        {/* ===== Portfolios ===== */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Your Portfolios
          </h2>
          {userData?.portfolios?.length ? (
            <ul className="space-y-2">
              {userData.portfolios.map((p, i) => (
                <li
                  key={i}
                  className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg border border-purple-200"
                >
                  {p}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No portfolios yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
