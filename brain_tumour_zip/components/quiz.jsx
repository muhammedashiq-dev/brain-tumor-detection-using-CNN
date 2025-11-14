"use client";

import React, { useState, useEffect } from "react";
import { questions } from "@/utils/quetions";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ArrowLeftOutlined } from "@ant-design/icons";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 200,
  responseMimeType: "text/plain",
};

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "Generate health reports and advice based on the survey data provided. Give the answer in a single paragraph.",
});

const Quiz = ({ onComplete, setShowQuiz}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [showTextArea, setShowTextArea] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [healthReport, setHealthReport] = useState("");
  const [typedReport, setTypedReport] = useState("");

  useEffect(() => {
    const shuffledQuestions = shuffleArray([...questions]);
    setSelectedQuestions(shuffledQuestions.slice(0, 10));
  }, []);

  const handleOptionClick = async (option) => {
    setAnswers((prev) => [...prev, option]);
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowTextArea(true);
      setIsLoading(true);
      const results = selectedQuestions.map((question, index) => ({
        question: question.question,
        selectedAnswer: answers[index] || option,
      }));
      const filteredResults = results.filter((result) => result.selectedAnswer);
      console.log("Quiz Results:", filteredResults);
      const prompt = `
        Based on the following quiz responses, generate a health report and provide relevant advice (in a single paragraph):
        ${filteredResults
          .map(
            (result, index) =>
              `Q${index + 1}: ${result.question}\nAnswer: ${result.selectedAnswer}`
          )
          .join("\n\n")}
      `;

      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });
      const result = await chatSession.sendMessage(prompt);
      const text = result.response.text();
      setHealthReport(text);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (healthReport) {
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        setTypedReport((prev) => prev + healthReport[currentIndex]);
        currentIndex++;
        if (currentIndex >= healthReport.length-1) {
          clearInterval(typeInterval);
        }
      }, 100); 
      return () => clearInterval(typeInterval);
    }
  }, [healthReport]);

  return (
    <div className="mt-10 lg:w-1/2 quiz-container">
      {showTextArea ? (
        <div className="w-full h-full flex flex-col space-y-4">
          <ArrowLeftOutlined onClick={()=>{
            setShowQuiz(false);
            setShowTextArea(false);
          }} className='bg-gray-800 p-2 rounded-lg cursor-pointer w-10' />
          <textarea
            className="w-full h-full text-black p-2 border border-gray-300 rounded-md"
            placeholder="Generating your health report..."
            value={typedReport}
            rows={8}
            readOnly
          />
          {isLoading && (
            <div className="flex justify-center items-center">
              <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-8 h-8 animate-spin"></div>
              <span className="ml-2">Generating...</span>
            </div>
          )}
        </div>
      ) : selectedQuestions.length > 0 ? (
        <>
          <h2 className="quiz-question">{selectedQuestions[currentQuestionIndex].question}</h2>
          <div className="flex flex-col space-y-2">
            {selectedQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="bg-blue-500 text-white py-2 px-4 rounded-md border-none cursor-pointer transition duration-300 hover:bg-blue-600"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Quiz;
