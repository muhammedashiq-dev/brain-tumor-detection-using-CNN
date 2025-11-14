"use server";

import connectToDB from "./db";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import User from "./usermodel";

export async function createUserProfile(user) {
  try {
    await connectToDB();
    const { userId, email, name, gender, age } = user;
    const existingUser = await User.findOne({ userId });
    if (existingUser) {
      return JSON.parse(JSON.stringify(existingUser));
    }
    const newUser = await User.create({ userId, email, name, gender, age });
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}

export async function getUserProfile(userId) {
  try {
    await connectToDB();
    const existingUser = await User.findOne({ userId });
    if (existingUser) {
      return JSON.parse(JSON.stringify(existingUser));
    }
    return JSON.parse(JSON.stringify(null));
  } catch (error) {
    console.log(error);
  }
}

export async function updateUserProfile(user) {
  try {
    await connectToDB();
    const updatedUser = await User.findOneAndUpdate(
      { userId: user.userId },
      {
        name: user.name,
        gender: user.gender,
        age: user.age,
      }
    );
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
  }
}

export async function updatePredictionHistory(userId, pred) {
  try {
    await connectToDB();
    const updatedUser = await User.findOneAndUpdate(
      { userId },
      {
        $push: {
          brainTumorPredictionHistory: {
            date: pred.date,
            time: pred.time,
            prediction: {
              positive: pred.prediction.positive,
              stage: pred.prediction.stage,
            },
            scanUrl: pred.scanUrl,
          },
        },
      },
      { new: true }
    );
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
  }
}
