"use client";

import { useState, useEffect } from "react";
import {
  Bell,
  Shield,
  Palette,
  Mail,
  Phone,
  Clock,
  Star,
  LogOut,
  Save,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

 const [mealReminders, setMealReminders] = useState(true);
const [weeklyReports, setWeeklyReports] = useState(false);
const [groceryAlerts, setGroceryAlerts] = useState(true);

const [theme, setTheme] = useState<"light" | "dark">("light");

const [rating, setRating] = useState(0);
const [feedback, setFeedback] = useState("");
const [feedbackMessage, setFeedbackMessage] = useState("");
const [lastLogin, setLastLogin] = useState("No recent login");

const [activities, setActivities] = useState<any[]>([]);
useEffect(() => {
  const fetchLoginActivity = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user") || "{}"
      );

      if (!user.email) return;

      const response = await fetch(
        `/api/login-activity?email=${user.email}`
      );

      const data = await response.json();

      if (data.length > 0) {
        setLastLogin(
          new Date(data[0].loginTime).toLocaleString()
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchLoginActivity();
}, []);

const user = JSON.parse(
  localStorage.getItem("user") || "{}"
);

const getData = async () => {
  const response = await fetch("/api/login-activity");
  const data = await response.json();
};
 const handleFeedbackSubmit = async () => {
  if (!feedback.trim()) {
    setFeedbackMessage("⚠️ Please enter your feedback.");
    return;
  }

  try {
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating,
        feedback,
      }),
    });

    if (!response.ok) {
      throw new Error();
    }

    setFeedbackMessage(
      "✅ Feedback sent successfully!"
    );

    setFeedback("");
    setRating(0);

  } catch (error) {
    setFeedbackMessage(
      "❌ Failed to save feedback."
    );
  }
};

  const handleSave = async () => {
  try {
    const response = await fetch("/api/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mealReminders,
        weeklyReports,
        groceryAlerts,
        theme,
      }),
    });

    if (!response.ok) {
      throw new Error();
    }

    alert("Settings saved successfully!");
  } catch (error) {
    alert("Failed to save settings");
  }
};

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#f6f8fb] p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-cyan-700">
          Settings
        </h1>
        <p className="text-slate-500 mt-2">
          Manage your preferences and account settings
        </p>
      </div>
      

      {/* Top Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Notifications */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-cyan-50 p-3 rounded-2xl">
              <Bell className="text-cyan-600" />
            </div>
            <div>
              <h2 className="font-bold text-xl">Notifications</h2>
              <p className="text-gray-500 text-sm">
                Manage alerts and reminders
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Toggle
              label="Meal Reminders"
              value={mealReminders}
              setValue={setMealReminders}
            />

            <Toggle
              label="Weekly Reports"
              value={weeklyReports}
              setValue={setWeeklyReports}
            />

            <Toggle
              label="Grocery Alerts"
              value={groceryAlerts}
              setValue={setGroceryAlerts}
            />
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-50 p-3 rounded-2xl">
              <Shield className="text-green-600" />
            </div>
            <div>
              <h2 className="font-bold text-xl">Security</h2>
              <p className="text-gray-500 text-sm">
                Account protection
              </p>
            </div>
          </div>
<Link
  href="/change-password"
  className="w-full block text-center py-3 rounded-xl bg-cyan-600 text-white hover:bg-cyan-700"
>
  Change Password
</Link>
<br></br>
<div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-cyan-50 p-3 rounded-2xl">
      <Clock className="text-cyan-600" />
    </div>

    <div>
      <h2 className="font-bold text-xl">
        Login Activity
      </h2>
<p>{lastLogin}</p>
    </div>
  </div>

 </div>
 </div>
    
  

        {/* Website Theme */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-50 p-3 rounded-2xl">
              <Palette className="text-purple-600" />
            </div>
            <div>
              <h2 className="font-bold text-xl">
                 Theme
              </h2>
              <p className="text-gray-500 text-sm">
                Customize your experience
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer">
              <span>Light Mode</span>
              <input
                type="radio"
                name="theme"
                checked={theme === "light"}
                onChange={() => setTheme("light")}
              />
            </label>

            <label className="flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer">
              <span>Dark Mode</span>
              <input
                type="radio"
                name="theme"
                checked={theme === "dark"}
                onChange={() => setTheme("dark")}
              />
            </label>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

       {/* Feedback */}
<div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
  <h2 className="font-bold text-xl mb-2">
    Feedback & Rating
  </h2>

  <p className="text-gray-500 text-sm mb-5">
    We'd love to hear your thoughts.
  </p>

  <div className="flex gap-2 mb-5">
    {[1, 2, 3, 4, 5].map((item) => (
      <button
        key={item}
        onClick={() => setRating(item)}
      >
        <Star
          size={28}
          className={
            item <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }
        />
      </button>
    ))}
  </div>

  <textarea
    value={feedback}
    onChange={(e) => setFeedback(e.target.value)}
    placeholder="Write your feedback..."
    className="w-full p-3 rounded-xl border"
  />

  <button
    onClick={handleFeedbackSubmit}
    className="w-full mt-3 bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl"
  >
    Send Feedback
  </button>

  {feedbackMessage && (
    <div
      className={`mt-3 p-3 rounded-xl text-center font-medium ${
        feedbackMessage.includes("successfully")
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {feedbackMessage}
    </div>
  )}
</div>

        {/* Contact Info */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-bold text-xl mb-2">
            Contact Information
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Need help? Contact our support team.
          </p>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <div className="bg-cyan-50 p-3 rounded-xl">
                <Mail className="text-cyan-600" />
              </div>

              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-500">
                  support@nutriplan.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-cyan-50 p-3 rounded-xl">
                <Phone className="text-cyan-600" />
              </div>

              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-500">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-cyan-50 p-3 rounded-xl">
                <Clock className="text-cyan-600" />
              </div>

              <div>
                <p className="font-medium">Availability</p>
                <p className="text-gray-500">
                  24/7 Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     


      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-8">

        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold"
        >
          <Save size={18} />
          Save All Changes
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}

function Toggle({
  label,
  value,
  setValue,
}: {
  label: string;
  value: boolean;
  setValue: (value: boolean) => void;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-medium">{label}</span>

      <button
        onClick={() => setValue(!value)}
        className={`w-12 h-6 rounded-full transition relative ${
          value ? "bg-cyan-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
            value ? "left-7" : "left-1"
          }`}
        />
      </button>
    </div>
  
  );
}
