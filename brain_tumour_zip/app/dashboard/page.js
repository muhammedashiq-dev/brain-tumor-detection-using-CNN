'use client'

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/dashbooardHeader";
import { useUser  } from "@clerk/nextjs";
import { getUserProfile } from "@/server/server";
import FormUI from "@/components/form";
import Quiz from "@/components/Quiz"; 
import SurveyCard from "@/components/surveycard"; // Import the SurveyCard component
import { LoadingOutlined } from "@ant-design/icons";

const Dashboard = () => {
  const { user } = useUser ();
  const [localUser , setLocalUser ] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false); // State to manage quiz visibility

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 7000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (localUser ) {
      setIsLoading(false);
    }
  }, [localUser ]);

  const handleQuizComplete = (answers) => {
    
  };

  const handleTakeSurveyClick = () => {
    setShowQuiz(true); // Show the quiz when the card is clicked
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar route={"/dashboard"} />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="w-full flex-grow flex-col flex items-start justify-start p-4 bg-[#191b1f]">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          {isLoading ? (
            <div className="w-full flex items-center justify-center h-full">
              <LoadingOutlined className="text-white text-3xl" spin />
            </div>
          ) : localUser  ? (
            showQuiz ? ( // Show Quiz if showQuiz is true
              <Quiz setShowQuiz={setShowQuiz} onComplete={handleQuizComplete} />
            ) : (
              <SurveyCard onClick={handleTakeSurveyClick} /> // Show SurveyCard
            )
          ) : (
            <FormUI setLocalUser ={setLocalUser } />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;