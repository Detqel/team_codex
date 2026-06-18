"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Utensils,
  ShoppingCart,
  UserCircle,
  User,
  Activity,
  Settings,
  Flame,
  Salad,
  Target,
  Weight,
  Ruler,
  Droplets,
  Footprints,
  Clock,
  HeartPulse,
} from "lucide-react";

export default function ProfilePage() {
  const foodOptions = ["Vegetarian", "Non-Vegetarian", "Vegan"];

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

  const fitnessGoals = [
    "Weight Loss",
    "Weight Gain",
    "Maintain Health",
    "Fitness Improvement",
    "Diabetes Control",
    "General Wellness",
    "Muscle Building",
  ];

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");

  const [foodPreference, setFoodPreference] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");

  const [calories, setCalories] = useState(2200);
  const [checkInTime, setCheckInTime] = useState("");
  const [waterGoal, setWaterGoal] = useState("");
  const [stepsGoal, setStepsGoal] = useState("");
  

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");

  const [profileImage, setProfileImage] =
    useState<string | null>(null);

  useEffect(() => {
  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/profile");
      const data = await res.json();

      if (data) {
        setFullName(data.fullName || "");
        setUsername(data.username || "");
        setDob(data.dob || "");
        setGender(data.gender || "");
        setWeight(data.weight || "");
        setHeight(data.height || "");
        setTargetWeight(data.targetWeight || "");
        setBio(data.bio || "");
        setFoodPreference(data.foodPreference || "");
        setActivityLevel(data.activityLevel || "");
        setSelectedGoal(data.selectedGoal || "");
        setCalories(data.calories || 2200);
        setWaterGoal(data.waterGoal || "");
        setStepsGoal(data.stepsGoal || "");
        setCheckInTime(data.checkInTime || "");
        setProfileImage(data.profileImage || null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchProfile();
}, []);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
   const file = e.target.files?.[0];

   if (!file) return;

   const reader = new FileReader();

   reader.onloadend = () => {
    setProfileImage(reader.result as string);
   };

   reader.readAsDataURL(file);
  };

  const handleSave = async () => {
  try {
    const response = await fetch("/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        username,
        dob,
        gender,
        bio,

        foodPreference,
        activityLevel,
        selectedGoal,

        calories,
        waterGoal,
        stepsGoal,
        checkInTime,

        weight,
        height,
        targetWeight,

        profileImage,
      }),
    });

    if (response.ok) {
      alert("Profile Saved Successfully");
    } else {
      alert("Failed to save profile");
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};

  return (
    <div className="min-h-screen flex bg-slate-50 text-black">

      {/* Sidebar */}

      
        <aside className="w-72 bg-white/70 backdrop-blur-xl border-r border-slate-200 p-8 shadow-xl">

        <div className="flex items-center gap-3 mb-12">

          <img
            src="/logo.jpg"
            className="w-12 h-12 rounded-full"
          />

          <h1 className="text-3xl font-bold text-[#0089aa]">
            NutriPlan
          </h1>

        </div>

        <div className="space-y-3">

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100">
            <LayoutDashboard />
            Dashboard
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100">
            <Utensils />
            Meal Planner
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100">
            <ShoppingCart />
            Grocery List
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100">
            <Activity />
            Daily Progress
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#0089aa] text-white">
            <UserCircle />
            Profile
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100">
            <Settings />
            Settings
          </button>

        </div>

      </aside>

      {/* Main */}

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 px-10 py-8 overflow-y-auto"
      >

        <h1 className="text-5xl font-bold mb-8 text-[#0089aa]">
          Profile
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Profile */}

          <div className="flex flex-col items-center">

            <label
              htmlFor="upload"
              className="cursor-pointer"
            >

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-48 h-48 rounded-full bg-[#0089aa] shadow-lg flex justify-center items-center overflow-hidden"
              >

                {profileImage ? (
                  <img
                    src={profileImage}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User
                    size={70}
                    className="text-white"
                  />
                )}

              </motion.div>

            </label>

            <input
              id="upload"
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageUpload}
            />

            <p className="mt-4 font-semibold">
              Upload Profile Photo
            </p>

          </div>

          {/* Personal Information */}

          <div className="md:col-span-2">

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <User className="text-[#0089aa]" />
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                placeholder="Full Name"
                value={fullName}
                onChange={(e) =>
                  setFullName(e.target.value)
                }
                className="p-3 rounded-xl border"
              />

              <input
                placeholder="Username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                className="p-3 rounded-xl border"
              />

              <input
                type="date"
                value={dob}
                onChange={(e) =>
                  setDob(e.target.value)
                }
                className="p-3 rounded-xl border"
              />

              <select
                value={gender}
                onChange={(e) =>
                  setGender(e.target.value)
                }
                className="p-3 rounded-xl border"
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

            </div>

            <textarea
              rows={4}
              placeholder="Bio"
              value={bio}
              onChange={(e) =>
                setBio(e.target.value)
              }
              className="w-full border rounded-xl mt-5 p-3"
            />

          </div>

        </div>

        {/* Food Preferences */}

        <div className="mt-12">

          <h2 className="text-2xl font-bold mb-5 flex items-center gap-3">
            <Salad className="text-[#0089aa]" />
            Food Preferences
          </h2>

          <div className="flex gap-5">

            {foodOptions.map((item) => (

              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFoodPreference(item)}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  foodPreference === item
                    ? "bg-[#0089aa] text-white shadow-lg"
                    : "bg-white border hover:border-[#0089aa]"
                }`}
              >
                {item}
              </motion.button>

            ))}

          </div>

        </div>
         {/* Activity Level */}

<div className="mt-12">

  <h2 className="text-2xl font-bold mb-5 flex items-center gap-3">
    <Activity className="text-[#0089aa]" />
    Activity Level
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

    {activityLevels.map((item) => (

      <motion.div
        key={item.level}
        whileHover={{
          y: -5,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        onClick={() =>
          setActivityLevel(item.level)
        }
        className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
          activityLevel === item.level
            ? "bg-[#0089aa] text-white shadow-xl"
            : "bg-white shadow hover:shadow-lg"
        }`}
      >

        <h3 className="font-bold text-lg">
          {item.level}
        </h3>

        <p className="text-sm mt-2">
          {item.desc}
        </p>

      </motion.div>

    ))}

  </div>

</div>

{/* Fitness Goal */}

<div className="mt-12">

  <h2 className="text-2xl font-bold mb-5 flex items-center gap-3">
    <Target className="text-[#0089aa]" />
    Fitness Goal
  </h2>

  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">

    {fitnessGoals.map((goal) => (

      <motion.div
        key={goal}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setSelectedGoal(goal)}
        className={`cursor-pointer p-5 rounded-2xl text-center transition-all duration-300 ${
          selectedGoal === goal
            ? "bg-[#0089aa] text-white shadow-xl"
            : "bg-white shadow hover:shadow-lg"
        }`}
      >

        {goal}

      </motion.div>

    ))}

  </div>

</div>

{/* Daily Goals */}

<div className="mt-12">

  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
    <Flame className="text-[#0089aa]" />
    Daily Goals
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Calories */}

    <div className="bg-white rounded-2xl p-6 shadow">

      <div className="flex items-center gap-2 mb-3">
        <Flame className="text-[#0089aa]" />
        <h3 className="font-bold">
          Calories
        </h3>
      </div>

      <input
        type="range"
        min={1200}
        max={4000}
        value={calories}
        onChange={(e) =>
          setCalories(Number(e.target.value))
        }
        className="w-full accent-[#0089aa]"
      />

      <p className="mt-2 text-[#0089aa] font-bold">
        {calories} kcal
      </p>

    </div>

    {/* Water Goal */}

    <div className="bg-white rounded-2xl p-6 shadow">

      <div className="flex items-center gap-2 mb-3">
        <Droplets className="text-[#0089aa]" />
        <h3 className="font-bold">
          Daily Water Goal
        </h3>
      </div>

      <input
        type="number"
        placeholder="Water Goal (L)"
        value={waterGoal}
        onChange={(e) =>
          setWaterGoal(e.target.value)
        }
        className="border rounded-xl p-3 w-full"
      />

    </div>

    {/* Steps Goal */}

    <div className="bg-white rounded-2xl p-6 shadow">

      <div className="flex items-center gap-2 mb-3">
        <Footprints className="text-[#0089aa]" />
        <h3 className="font-bold">
          Daily Steps Goal
        </h3>
      </div>

      <input
        type="number"
        value={stepsGoal}
        onChange={(e) =>
          setStepsGoal(e.target.value)
        }
        className="border rounded-xl p-3 w-full"
      />

    </div>

    {/* Check-In Time */}

    <div className="bg-white rounded-2xl p-6 shadow">

      <div className="flex items-center gap-2 mb-3">
        <Clock className="text-[#0089aa]" />
        <h3 className="font-bold">
          Daily Check-In Time
        </h3>
      </div>

      <input
        type="time"
        value={checkInTime}
        onChange={(e) =>
          setCheckInTime(e.target.value)
        }
        className="border rounded-xl p-3 w-full"
      />

    </div>

  </div>

</div>
  {/* Physical Metrics */}

<div className="mt-12">

  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
    <HeartPulse className="text-[#0089aa]" />
    Physical Metrics
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* Weight */}

    <div className="relative">

      <Weight
        size={20}
        className="absolute left-4 top-4 text-[#0089aa]"
      />

      <input
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) =>
          setWeight(e.target.value)
        }
        className="w-full border rounded-xl p-4 pl-12 bg-white"
      />

    </div>

    {/* Height */}

    <div className="relative">

      <Ruler
        size={20}
        className="absolute left-4 top-4 text-[#0089aa]"
      />

      <input
        placeholder="Height (cm)"
        value={height}
        onChange={(e) =>
          setHeight(e.target.value)
        }
        className="w-full border rounded-xl p-4 pl-12 bg-white"
      />

    </div>

    {/* Target Weight */}

    <div className="relative">

      <Target
        size={20}
        className="absolute left-4 top-4 text-[#0089aa]"
      />

      <input
        placeholder="Target Weight (kg)"
        value={targetWeight}
        onChange={(e) =>
          setTargetWeight(e.target.value)
        }
        className="w-full border rounded-xl p-4 pl-12 bg-white"
      />

    </div>

  </div>

</div>

{/* Save Button */}

<div className="mt-14 flex justify-end">

  <motion.button
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{
      scale: 0.95,
    }}
    onClick={handleSave}
    className="px-10 py-4 rounded-full bg-[#0089aa] text-white font-bold shadow-lg hover:bg-[#007792] transition-all duration-300"
  >

    Save Profile

  </motion.button>

</div>

</motion.main>

</div>
  );
}