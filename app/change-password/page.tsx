"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import {
  getStoredSettings,
  applyTheme
} from "../../lib/auth";

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const settings = getStoredSettings();
    applyTheme(settings.theme || "light");
  }, []);

  const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  setError("");
  setMessage("");

  if (
    !currentPassword ||
    !newPassword ||
    !confirmPassword
  ) {
    setError(
      "Please complete all password fields."
    );
    return;
  }

  if (
    newPassword !==
    confirmPassword
  ) {
    setError(
      "New passwords do not match."
    );
    return;
  }

  try {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    const response = await fetch(
      "/api/auth/change-password",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          currentPassword,
          newPassword,
        }),
      }
    );

    const data =
      await response.json();

    if (!response.ok) {
      setError(data.message);
      return;
    }

    setMessage(
      "Password updated successfully."
    );

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

  } catch (error) {
    setError(
      "Something went wrong"
    );
  }
};

  return (
    <div className="min-h-screen bg-[#f5f7f9] text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-3xl border border-gray-200 p-8 shadow-lg dark:bg-slate-900 dark:border-slate-800">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#0B7285]">Change Password</h1>
            <p className="text-gray-500 mt-2 dark:text-slate-400">
              Update your password to keep your account secure.
            </p>
          </div>
          <Link href="/settings" className="text-sm font-medium text-[#0B7285] hover:underline">
            Back to Settings
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error ? (
            <div className="rounded-2xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          {message ? (
            <div className="rounded-2xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
              {message}
            </div>
          ) : null}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(event) => setCurrentPassword(event.target.value)}
              placeholder="Enter current password"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 text-slate-900 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-slate-300">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              placeholder="Enter new password"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 text-slate-900 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-slate-300">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Confirm new password"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 text-slate-900 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#0B7285] px-5 py-3 text-white font-semibold hover:bg-[#095c6c] transition-colors"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
