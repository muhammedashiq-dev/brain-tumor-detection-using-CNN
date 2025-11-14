"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";
import { createUserProfile } from "@/server/server";
import { LoadingOutlined } from "@ant-design/icons";


export default function FormUI({setLocalUser}){

  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    email: "",
  });

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
      setIsLoading(true)
      const update = {
        userId: user?.id,
        name: formData.name,
        gender: formData.gender,
        age: formData.age,
        email: user.emailAddresses[0].emailAddress
      }
      const updatedUser = await createUserProfile(update)
      setLocalUser({
        name: updatedUser.name,
        gender: updatedUser.gender,
        age: updatedUser.age,
        email: updatedUser.email
      })
      toast.success("Profile created successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Profile creation failed!");
    }finally{
      setIsLoading(false)
    }
  };


    return(
        <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full mt-8 lg:mt-16 gap-4 max-w-md mx-auto"
          >
            <h1 className="text-sm lg:text-2xl">Get Started</h1>
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
              <label htmlFor="age" className="block text-sm font-medium mb-1">
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

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isLoading ? <LoadingOutlined/> : 'create'}
            </button>
          </form>
    )
}