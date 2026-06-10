"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Utensils,
  ShoppingCart,
  UserCircle,
  User,
  Activity,
  Settings,
  Scale,
  Ruler,
  Target,
  Flame,
  Clock,
  Heart,
} from "lucide-react";

export default function ProfilePage() {
  const fitnessGoals = [
    "Weight Loss",
    "Weight Gain",
    "Maintain Health",
    "Fitness Improvement",
    "Diabetes Control",
    "General Wellness",
    "Muscle Building",
  ];

  const activityLevels = [
    {
      level: "Sedentary",
      desc: "Little or no exercise",
    },
    {
      level: "Light",
      desc: "Exercise 1-3 days/week",
    },
    {
      level: "Moderate",
      desc: "Exercise 3-5 days/week",
    },
    {
      level: "Active",
      desc: "Exercise 6-7 days/week",
    },
  ];

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");

  const [foodPreference, setFoodPreference] =
    useState("");

  const [activityLevel, setActivityLevel] =
    useState("");

  const [selectedGoal, setSelectedGoal] =
    useState("");

  const [calories, setCalories] =
    useState(2200);

  const [checkInTime, setCheckInTime] =
    useState("");

  const [waterGoal, setWaterGoal] =
    useState("");

  const [weight, setWeight] =
    useState("");

  const [height, setHeight] =
    useState("");

  const [targetWeight, setTargetWeight] =
    useState("");

  const [profileImage, setProfileImage] =
    useState<string | null>(null);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setProfileImage(
      URL.createObjectURL(file)
    );
  };

  const handleSave = () => {
    const profileData = {
      fullName,
      username,
      dob,
      gender,
      bio,
      foodPreference,
      activityLevel,
      selectedGoal,
      calories,
      checkInTime,
      waterGoal,
      weight,
      height,
      targetWeight,
      profileImage,
    };

    console.log(profileData);

    alert("Profile Saved");
  };

  return (
    <div className="min-h-screen flex bg-slate-100 text-black">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <div className="flex items-center gap-3 mb-10">
          <img
            src="/logo.jpg"
            alt="NutriPlan Logo"
            className="w-11 h-11 rounded-full object-contain"
          />

          <h1 className="text-2xl font-bold text-cyan-700">
            NutriPlan
          </h1>
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center gap-3 text-left p-3 rounded-lg hover:bg-gray-100 transition">
            <LayoutDashboard size={20} />
            Dashboard
          </button>

          <button className="w-full flex items-center gap-3 text-left p-3 rounded-lg hover:bg-gray-100 transition">
            <Utensils size={20} />
            Meal Planner
          </button>

          <button className="w-full flex items-center gap-3 text-left p-3 rounded-lg hover:bg-gray-100 transition">
            <ShoppingCart size={20} />
            Grocery List
          </button>

          <button className="w-full flex items-center gap-3 text-left p-3 rounded-lg hover:bg-gray-100 transition">
            <Activity size={20} />
            Daily Progress
          </button>

          <button className="w-full flex items-center gap-3 text-left p-3 rounded-lg bg-teal-600 text-white">
            <UserCircle size={20} />
            Profile
          </button>

          <button className="w-full flex items-center gap-3 text-left p-3 rounded-lg hover:bg-gray-100 transition">
            <Settings size={20} />
            Settings
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-8">
            Onboarding
          </h1>
          {/* Personal Information */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <label
                htmlFor="profile-upload"
                className="cursor-pointer"
              >
                <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center shadow-md overflow-hidden">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User
                      size={60}
                      className="text-gray-500"
                    />
                  )}
                </div>
              </label>

              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              <p className="mt-4 font-medium">
                Upload Photo
              </p>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
                  className="border rounded-xl p-3"
                />

                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                  className="border rounded-xl p-3"
                />

                <input
                  type="date"
                  value={dob}
                  onChange={(e) =>
                    setDob(e.target.value)
                  }
                  className="border rounded-xl p-3"
                />

                <select
                  value={gender}
                  onChange={(e) =>
                    setGender(e.target.value)
                  }
                  className="border rounded-xl p-3"
                >
                  <option value="">
                    Gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Bio"
                  value={bio}
                  onChange={(e) =>
                    setBio(e.target.value)
                  }
                  className="col-span-2 border rounded-xl p-3"
                />
              </div>
            </div>
          </div>
          {/* Food Preferences */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">
              Food Preferences
            </h2>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() =>
                  setFoodPreference("Vegetarian")
                }
                className={`border rounded-full px-5 py-2 transition ${
                  foodPreference === "Vegetarian"
                    ? "bg-teal-600 text-white border-teal-600"
                    : "hover:bg-teal-50"
                }`}
              >
                Vegetarian
              </button>

              <button
                onClick={() =>
                  setFoodPreference(
                    "Non-Vegetarian"
                  )
                }
                className={`border rounded-full px-5 py-2 transition ${
                  foodPreference ===
                  "Non-Vegetarian"
                    ? "bg-teal-600 text-white border-teal-600"
                    : "hover:bg-teal-50"
                }`}
              >
                Non-Vegetarian
              </button>

              <button
                onClick={() =>
                  setFoodPreference("Vegan")
                }
                className={`border rounded-full px-5 py-2 transition ${
                  foodPreference === "Vegan"
                    ? "bg-teal-600 text-white border-teal-600"
                    : "hover:bg-teal-50"
                }`}
              >
                Vegan
              </button>
            </div>
          </div>

          {/* Activity Level */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Activity
                className="text-teal-600"
                size={22}
              />
              Activity Level
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {activityLevels.map((item) => (
                <button
                  key={item.level}
                  onClick={() =>
                    setActivityLevel(item.level)
                  }
                  className={`border rounded-xl p-4 transition text-left ${
                    activityLevel === item.level
                      ? "bg-teal-600 text-white border-teal-600"
                      : "hover:bg-teal-50 hover:border-teal-500"
                  }`}
                >
                  <p className="font-semibold">
                    {item.level}
                  </p>

                  <p
                    className={`text-sm mt-1 ${
                      activityLevel === item.level
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
          {/* Fitness Goals */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">
              Fitness Goals
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {fitnessGoals.map((goal) => (
                <button
                  key={goal}
                  onClick={() =>
                    setSelectedGoal(goal)
                  }
                  className={`border rounded-xl p-4 transition ${
                    selectedGoal === goal
                      ? "bg-teal-600 text-white border-teal-600"
                      : "hover:bg-teal-50 hover:border-teal-500"
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          {/* Daily Goals */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Calorie Goal */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Flame
                  size={20}
                  className="text-orange-500"
                />
                Daily Calorie Goal
              </h3>

              <div className="mb-4">
                <p className="text-3xl font-bold text-teal-600">
                  {calories}
                </p>

                <p className="text-sm text-gray-500">
                  kcal per day
                </p>
              </div>

              <input
                type="range"
                min="1200"
                max="4000"
                value={calories}
                onChange={(e) =>
                  setCalories(
                    Number(e.target.value)
                  )
                }
                className="w-full accent-teal-600"
              />
            </div>

            {/* Daily Check-in */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Clock
                  size={20}
                  className="text-blue-500"
                />
                Daily Check-in
              </h3>

              <input
                type="time"
                value={checkInTime}
                onChange={(e) =>
                  setCheckInTime(
                    e.target.value
                  )
                }
                className="border rounded-lg p-3 w-full"
              />
            </div>

            {/* Water Goal */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-semibold mb-4">
                Daily Water Goal
              </h3>

              <input
                type="number"
                value={waterGoal}
                onChange={(e) =>
                  setWaterGoal(
                    e.target.value
                  )
                }
                placeholder="Water Goal (Liters)"
                className="w-full border rounded-lg p-3"
              />

              {waterGoal && (
                <p className="mt-3 text-sm text-teal-600 font-medium">
                  Goal: {waterGoal} Liters
                </p>
              )}
            </div>
          </div>
          {/* Metrics */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Physical Metrics */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Scale
                  size={20}
                  className="text-teal-600"
                />
                Physical Metrics
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Scale
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="number"
                    value={weight}
                    onChange={(e) =>
                      setWeight(e.target.value)
                    }
                    placeholder="Weight (kg)"
                    className="border rounded-xl p-3 pl-10 w-full"
                  />
                </div>

                <div className="relative">
                  <Ruler
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="number"
                    value={height}
                    onChange={(e) =>
                      setHeight(e.target.value)
                    }
                    placeholder="Height (cm)"
                    className="border rounded-xl p-3 pl-10 w-full"
                  />
                </div>
              </div>

              {(weight || height) && (
                <div className="mt-4 p-3 bg-teal-50 rounded-xl">
                  <p className="text-sm text-teal-700">
                    Weight: {weight || "-"} kg
                  </p>

                  <p className="text-sm text-teal-700">
                    Height: {height || "-"} cm
                  </p>
                </div>
              )}
            </div>

            {/* Health Factors */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Heart
                  size={20}
                  className="text-red-500"
                />
                Health Factors
              </h3>

              <div className="relative">
                <Target
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="number"
                  value={targetWeight}
                  onChange={(e) =>
                    setTargetWeight(
                      e.target.value
                    )
                  }
                  placeholder="Target Weight Goal"
                  className="border rounded-xl p-3 pl-10 w-full"
                />
              </div>

              {targetWeight && (
                <div className="mt-4 p-3 bg-red-50 rounded-xl">
                  <p className="text-sm text-red-600 font-medium">
                    Target Weight: {targetWeight} kg
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* Save Button */}
          <div className="flex justify-end mt-10">
            <button
              onClick={handleSave}
              className="bg-teal-600 hover:bg-teal-700 transition text-white px-8 py-3 rounded-full font-medium shadow-md"
            >
              Save Profile
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}