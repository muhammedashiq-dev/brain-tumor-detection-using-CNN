"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/dashbooardHeader";
import toast from "react-hot-toast";
import { useUser  } from "@clerk/nextjs";
import { getUserProfile } from "@/server/server";
import { LoadingOutlined } from "@ant-design/icons";

const History = () => {
  const { user } = useUser ();
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [localUser , setLocalUser ] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Stop loading after 5 seconds
    }, 5000);

    return () => clearTimeout(timeout); // Clear timeout on unmount
  }, []);

  useEffect(() => {
    if (user) {
      getUserdata(user.id);
    }
  }, [user]);

  const getUserdata = async (userId) => {
    try {
      const localUser  = await getUserProfile(userId);
      setLocalUser (localUser );
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // If localUser  is fetched, stop loading
  useEffect(() => {
    if (localUser ) {
      setIsLoading(false);
    }
  }, [localUser ]);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar route={"/history"} />
      <div className="flex h-full flex-col flex-grow">
        <Header />
        <main className="p-4 min-h-screen bg-[#191b1f]">
          {isLoading ? ( // Show loading indicator if loading
            <div className="flex items-center justify-center h-full">
              <LoadingOutlined className="text-white text-3xl" spin />
            </div>
          ) : (
            <>
              <h1 className="text-xl font-bold mb-6">
                View Your Diagnosis History
              </h1>
              <div className="w-full grid items-center justify-center overflow-x-auto lg:h-[800px]">
                <table className="table-auto w-full text-left border-collapse overflow-y-scroll">
                  <thead>
                    <tr className="bg-gray-700">
                      <th className="px-4 py-2 text-sm">Sl. No</th>
                      <th className="px-4 py-2 text-sm">Date</th>
                      <th className="px-4 py-2 text-sm">Time</th>
                      <th className="px-4 py-2 text-sm">Scanned Image</th>
                      <th className="px-4 py-2 text-sm">Results</th>
                    </tr>
                  </thead>
                  <tbody>
                    {localUser ?.brainTumorPredictionHistory?.slice().reverse().map((diagnosis, index) => (
                      <tr key={index} className="border-t border-gray-700">
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">{formatDate(diagnosis.date)}</td>
                        <td className="px-4 py-2">{diagnosis.time}</td>
                        <td className="px-4 py-2">
                          <img
                            src={diagnosis?.scanUrl}
                            alt={`Scan ${index + 1}`}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex flex-col gap-2">
                            <p className="text-sm text-center">{diagnosis?.prediction?.positive ? 'Positive' : 'Negative'}</p>
                            <p className="text-sm text-center">{diagnosis?.prediction?.positive && diagnosis?.prediction?.stage}</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

 export default History;