'use client'
 
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs";
import { getUserProfile } from "@/server/server";;

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null)
  const { user } = useUser();
  const router = useRouter()
  const { signOut } = useClerk()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
      if (user) {
        getUserdata(user.id);
      }
    }, [user]);
  
    const getUserdata = async (userId) => {
      try {
        const localUser = await getUserProfile(userId);
        setUserData(localUser)
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <header className="flex w-full justify-between items-center z-40 bg-[#191b1fe6] p-4 shadow-2xl opacity-90">
      <h1 className="text-lg font-bold">BrainSight</h1>
      <div className="relative">
        {/* Profile Image */}
        <div
          className="w-10 h-10 rounded-full cursor-pointer overflow-hidden"
          onClick={toggleDropdown}
        >
          <Image
            src="/neurology.png" // Replace with the path to your profile image
            alt="Profile"
            width={40} // Width of the image
            height={40} // Height of the image
            className="rounded-full object-cover"
          />
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md text-gray-700">
            <div className="px-4 py-3 border-b">
              <p className="text-sm font-semibold">{userData ? userData.name : '******'}</p>
              <p className="text-xs text-gray-500">{userData ? userData.email : '******@example.com'}</p>
            </div>
            <ul className="py-2">
              <li onClick={()=>router.push('/profile')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => signOut({redirectUrl: '/'})}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

