"use client";

import React, { useState, useEffect } from "react";
import { Input } from "antd";
import {
  SearchOutlined,
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  MediumOutlined,
  RedditOutlined,
  DiscordOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Menu from "./menu";
import { useUser } from '@clerk/nextjs'


export function LandingNav({ route }) {
  const router = useRouter();
  const [isToggle, setIstoggle] = useState(false);
  const { user } = useUser()


  const menus = [
    { name: "About", href: "/about" }, 
    { name: "Technology", href: "/technology" }, 
    { name: "Team", href: "/team" }, 
    { name: "Research", href: "/research" },
    { name: "FAQ", href: "/faq" }, 
    { name: "Blogs", href: "/blogs" }, 
  ];

  const open = () => {
    setIstoggle(!isToggle);
  };

  return (
    <>
      <div className="w-full landing-nav fixed z-50 shadow-md lg:px-3">
        <div className="flex justify-between items-center py-2 md:py-4 px-4 lg:px-0">
          <div className="flex justify-center gap-4">
            <Image
              src={"/neurology.png"}
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="hidden lg:flex justify-center gap-8">
            {menus.map((menu, index) => (
              <Link
                key={index}
                className={
                  route === menu.name
                    ? "text-[#FFFFFF] font-poppins text-md font-semibold py-2"
                    : `text-[#FFFFFF] opacity-60 hover:opacity-100 font-poppins text-md font-semibold py-2`
                }
                href={menu.href}
              >
                {menu.name}
              </Link>
            ))}
            {route !== 'sign' && <button
              onClick={() => {
                user ? router.push("/dashboard") :  router.push("/sign-in")
              }}
              className="px-4 py-2 rounded-lg text-[#FFFFFF] launch-button hover:opacity-80 z-10 shadow-lg"
            >
              {!user ? 'Prediction App': 'Dashboard'}
            </button>}
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={open}
              id="menu-btn"
              className={
                isToggle
                  ? "block ml-auto mt-3 text-white lg:hidden bg-[#FFFFFF1A] opacity-90 px-4 py-2 rounded-lg"
                  : "block mt-3 text-white ml-auto lg:hidden bg-[#FFFFFF1A] opacity-90 px-4 py-2 rounded-lg"
              }
            >
              menu
            </button>
          </div>
        </div>
      </div>
      {isToggle && <Menu />}
    </>
  );
}

export function LaunchFooter() {
  const router = useRouter();

  const pTag = (v1, v2, v3, v4, v5, v6) => {
    const a = [v1, v2, v3, v4, v5, v6];
    const pTags = [];
    for (let i = 0; i < 5; i++) {
      const pathToRoute = a[i].toLowerCase();
      pTags.push(
        <a
          href={`/${pathToRoute}`}
          className={
            i < 4
              ? "text-white flex text-sm justify-start lg:justify-center cursor-pointer hover:opacity-60 mr-8"
              : "cursor-pointer hover:opacity-60 text-white flex text-sm justify-start lg:justify-center"
          }
          key={i}
        >
          {a[i]}
        </a>,
      );
    }
    return pTags;
  };

  return (
    <div className="grid grid-cols-3 gap-1 pt-32 pb-10 px-2 lg:px-10">
      <div className="col-span-2 grid gap-3">
        <div className="grid lg:grid-cols-8 gap-3">
          {pTag(
            "About", 
            "Technology", 
            "Team", 
            "Research", 
            "FAQ", 
          )}
        </div>
        <div className="w-4/5">
          <p className="text-white text-sm font-poppins text-opacity-60">
            {/* Update with relevant contact information */}
            For inquiries, collaborations, or media requests, please contact us at{" "}
            <span className="text-white text-opacity-100 font-semibold hover:text-opacity-60 tracking-widest">
              <a href="mailto:your_email@example.com">btprediction@com.in</a>
            </span>
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-end items-end">
        {/* Update with your actual social media links */}
        <MediumOutlined
          onClick={() => router.push("https://google.com")} 
          className="text-2xl text-white text-opacity-60 hover:text-opacity-30 cursor-pointer"
        />
        <RedditOutlined
          onClick={() => router.push("https://google.com")} 
          className="text-2xl text-white text-opacity-60 hover:text-opacity-30 cursor-pointer"
        />
        <DiscordOutlined
          onClick={() => router.push("https://google.com")} 
          className="text-2xl text-white text-opacity-60 hover:text-opacity-30 cursor-pointer"
        />
      </div>
    </div>
  );
}