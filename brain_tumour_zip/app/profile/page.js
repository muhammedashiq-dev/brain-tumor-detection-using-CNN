"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/dashbooardHeader";
import toast from "react-hot-toast";
import { useUser  } from "@clerk/nextjs";
import { getUserProfile, updateUserProfile } from "@/server/server";
import { LoadingOutlined } from "@ant-design/icons";

const Profile = () => {
  const { user } = useUser ();
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    email: "",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Stop loading after 5 seconds
    }, 2000);

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
      setFormData({
        name: localUser .name,
        gender: localUser .gender,
        age: localUser .age,
        email: localUser .email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const update = {
        userId: user?.id,
        name: formData.name,
        gender: formData.gender,
        age: formData.age,
      };
      const updatedUser  = await updateUserProfile(update);
      setFormData({
        name: updatedUser .name,
        gender: updatedUser .gender,
        age: updatedUser .age,
      });
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Profile updation failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar route={"/profile"} />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow p-4 bg-[#191b1f]">
          {isLoading ? ( // Show loading indicator if loading
            <div className="flex items-center justify-center h-full">
              <LoadingOutlined className="text-white text-3xl" spin />
            </div>
          ) : (
            <>
              <h1 className="text-xl font-bold mb-6">Edit Your Details</h1>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 max-w-md mx-auto"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium mb-1"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="age" className="block text -sm font-medium mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your age"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
                    placeholder="Enter your email"
                    disabled
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {isLoading ? <LoadingOutlined /> : 'Save Changes'}
                </button>
              </form>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Profile;