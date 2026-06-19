"use client";

<<<<<<< HEAD
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
=======
import { useState } from "react";
>>>>>>> 1c8632679965e268a07ab93fca4b8da9e4ab9984
import {
  LayoutDashboard,
  Utensils,
  ShoppingCart,
  UserCircle,
  User,
  Activity,
  Settings,
<<<<<<< HEAD
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
=======
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
>>>>>>> 1c8632679965e268a07ab93fca4b8da9e4ab9984

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

<<<<<<< HEAD
  const fitnessGoals = [
    "Weight Loss",
    "Weight Gain",
    "Maintain Health",
    "Fitness Improvement",
    "Diabetes Control",
    "General Wellness",
    "Muscle Building",
  ];

=======
>>>>>>> 1c8632679965e268a07ab93fca4b8da9e4ab9984
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");

<<<<<<< HEAD
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
=======
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
>>>>>>> 1c8632679965e268a07ab93fca4b8da9e4ab9984

  const [profileImage, setProfileImage] =
    useState<string | null>(null);

<<<<<<< HEAD
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

    const data = await response.json();

    console.log("API Response:", data);

    if (response.ok) {
      alert("Profile Saved Successfully");
    } else {
      alert(data.message || "Failed to save profile");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
    <div className="min-h-screen flex bg-slate-50 text-black">

      

      {/* Main */}

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 px-10 py-8 overflow-y-auto"
      >

        <h1 className="text-4xl font-bold mb-8 text-cyan-700">
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
                className="w-38 h-38 rounded-full bg-[#0089aa] shadow-lg flex justify-center items-center overflow-hidden"
              >

                {profileImage ? (
                  <img
                    src={profileImage}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User
                    size={60}
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
=======
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
>>>>>>> 1c8632679965e268a07ab93fca4b8da9e4ab9984
  );
}