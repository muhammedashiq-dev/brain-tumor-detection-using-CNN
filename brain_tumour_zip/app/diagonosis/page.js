"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/dashbooardHeader";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";
import { getUserProfile, updatePredictionHistory } from "@/server/server";
import { LoadingOutlined } from "@ant-design/icons";
import { useDropzone } from "react-dropzone";
import supabase from "@/utils/supabaseConfig";
import Image from "next/image";

const Diagonosis = () => {
  const { user } = useUser();
  const [mri, setMri] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [localUser, setLocalUser] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    if (user) {
      getUserdata(user.id);
    }
  }, [user]);

  const getUserdata = async (userId) => {
    try {
      const localUser = await getUserProfile(userId);
      setLocalUser(localUser);
    } catch (error) {
      console.log(error);
    }
  };

  const onDrop = async (acceptedFiles) => {
    try {
      setIsLoading(true);
      const file = acceptedFiles[0];
      const filename = file.name;
      const fileExt = filename.split(".").pop();
      const path = `${user?.id}/${Date.now()}.${fileExt}`;
      const { error } = await supabase.storage.from("scans").upload(path, file);
      if (error) {
        throw error;
      }
      const { data: url } = await supabase.storage
        .from("scans")
        .getPublicUrl(path);
      const publicUrl = url.publicUrl;
      setMri(publicUrl);
      const formData = new FormData();
      formData.append("file", file);
      const prediction = await fetch("http://127.0.0.1:8000/api/predict", {
        method: "POST",
        cache: "no-store",
        body: formData,
      });
      const predictionData = await prediction.json();
      let pred;
      if (predictionData?.stage_result) {
        pred = {
          date: new Date().toISOString().split("T")[0],
          time: new Date().toLocaleTimeString(),
          prediction: {
            positive: true,
            stage: predictionData.stage_result,
          },
          scanUrl: publicUrl,
        };
      } else {
        pred = {
          date: new Date().toISOString().split("T")[0],
          time: new Date().toLocaleTimeString(),
          prediction: {
            positive: false,
            stage: "",
          },
          scanUrl: publicUrl,
        };
      }
      const output = await updatePredictionHistory(user.id, pred);
      setPrediction({
        result: predictionData?.stage_result ? "positive" : "negetive",
        probability: predictionData?.score,
        stage: predictionData?.stage_result
          ? predictionData?.stage_result
          : "N/A",
        stage_probability: predictionData?.stage_result
          ? predictionData?.stage_score
          : "N/A",
      });
      toast.success("Image uploaded successfully!");
    } catch (error) {
      console.log(error)
      toast.error("server busy, try again!");
    } finally {
      setIsLoading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar route={"/diagonosis"} />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow p-4 bg-[#191b1f] overflow-y-auto">
          <h1 className="text-xl font-bold mb-6">Make Diagnosis</h1>
          {/* Tutorial Steps Section */}
          <div className="flex flex-col items-center space-y-8 px-4 md:px-8 lg:px-16">
            <div className="text-center">
              <h2 className="text-sm lg:text-2xl font-semibold mb-4">
                Follow these steps
              </h2>
            </div>
            <div className="grid lg:flex items-center justify-center gap-4 lg:gap-10">
              {/* Step 1: Upload MRI Scan */}
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/first.webp"
                  alt="Upload MRI Scan"
                  className="w-14 h-14 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg mb-2"
                />
                <p className="text-sm md:text-base lg:text-xl">
                  1. Upload MRI Scan
                </p>
              </div>
              <div className="text-white hidden lg:block text-3xl md:text-4xl lg:text-5xl transform -rotate-90">
                ↓
              </div>
              {/* Step 2: Wait for Analyzing and Result */}
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/second.webp"
                  alt="Wait for Analysis"
                  className="w-14 h-14 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg mb-2"
                />
                <p className="text-sm md:text-xl lg:text-xl">
                  2. Wait for Analyzing and Result
                </p>
              </div>
              <div className="text-white hidden lg:block text-3xl md:text-4xl lg:text-5xl transform -rotate-90">
                ↓
              </div>
              {/* Step 3: View and Save Result */}
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/third.webp"
                  alt="View and Save Result"
                  className="w-14 h-14 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg mb-2"
                />
                <p className="text-sm md:text-xl lg:text-xl">
                  3. View and Save Result
                </p>
              </div>
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="mt-16 gap-6 flex flex-col justify-center items-center">
            <h2 className="text-xl lg:text-2xl font-semibold text-center mb-4">
              {isLoading && !mri && "Analyzing..."}
              {isLoading && mri && "Preparing Results..."}
              {!isLoading && !mri && "Upload Your MRI Scan"}
              {!isLoading && mri && "Completed"}
            </h2>
            {mri === "" ? (
              isLoading ? (
                <LoadingOutlined className="text-2xl text-white" />
              ) : (
                <div
                  {...getRootProps()}
                  className="lg:w-1/3 bg-gray-700 border-dashed border-4 border-gray-600 p-8 flex justify-center items-center rounded-lg cursor-pointer"
                >
                  <input {...getInputProps()} />
                  <div className="text-center text-gray-300">
                    <p className="text-lg mb-4">
                      Drag & Drop an MRI or click to select
                    </p>
                    <p className="text-sm">Only MRI files are accepted</p>
                  </div>
                </div>
              )
            ) : (
              <div className="grid lg:flex gap-4">
                <Image
                  src={mri}
                  alt="Uploaded MRI"
                  quality={100}
                  width={240}
                  height={240}
                  className="w-60 h-60 rounded-lg grayscale-50"
                />
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <LoadingOutlined className="text-2xl text-white" />
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 items-start justify-center">
                    <p className="text-sm md:text-xl lg:text-xl text-white italic">
                      Result : {prediction.result}
                    </p>
                    <p className="text-sm md:text-xl lg:text-xl text-white italic">
                        Probability: {(prediction.probability * 100).toFixed(2)}%
                    </p>
                    <p className="text-sm md:text-xl lg:text-xl text-white italic">
                      Stage : {prediction?.stage || "N/A"}
                    </p>
                    <p className="text-sm md:text-xl lg:text-xl text-white italic">
                      Stage Probability :{" "}
                      {prediction?.stage_probability !== 'N/A'? `${(prediction?.stage_probability * 100).toFixed(2)}%` : 'N/A' }
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Diagonosis;
