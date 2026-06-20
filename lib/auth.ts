export type UserData = {
  name: string;
  email: string;
  password: string;
};

export type SettingsData = {
  dailyCalories: number;
  waterIntake: number;
  proteinGoal: number;
  carbGoal: number;
  mealReminders: boolean;
  weeklyReports: boolean;
  groceryAlerts: boolean;
  language: string;
  theme: "light" | "dark";
};

const USER_KEY = "nutriPlanUser";
const SETTINGS_KEY = "nutriPlanSettings";

const defaultUser: UserData = {
  name: "",
  email: "",
  password: "",
};

const defaultSettings: SettingsData = {
  dailyCalories: 2400,
  waterIntake: 3,
  proteinGoal: 120,
  carbGoal: 250,
  mealReminders: true,
  weeklyReports: false,
  groceryAlerts: true,
  language: "English (US)",
  theme: "light",
};

function safeParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function getStorageItem(key: string): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(key);
}

function setStorageItem(key: string, value: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, value);
}

export function getStoredUser(): UserData {
  const stored = getStorageItem(USER_KEY);
  if (!stored) {
    return defaultUser;
  }

  return safeParse<UserData>(stored, defaultUser);
}

export function createUser(user: UserData) {
  setStorageItem(USER_KEY, JSON.stringify(user));
}

export function validateCredentials(email: string, password: string) {
  const user = getStoredUser();
  return user.email === email && user.password === password;
}

export function applyTheme(theme: "light" | "dark") {
  if (typeof window === "undefined") return;
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export function changePassword(currentPassword: string, newPassword: string) {
  const user = getStoredUser();
  if (currentPassword !== user.password) {
    return { success: false, error: "Current password is incorrect." };
  }

  const updatedUser = { ...user, password: newPassword };
  setStorageItem(USER_KEY, JSON.stringify(updatedUser));
  return { success: true };
}

export function getStoredSettings(): SettingsData {
  const stored = getStorageItem(SETTINGS_KEY);
  if (!stored) {
    setStorageItem(SETTINGS_KEY, JSON.stringify(defaultSettings));
    return defaultSettings;
  }

  return safeParse<SettingsData>(stored, defaultSettings);
}

export function saveStoredSettings(settings: SettingsData) {
  setStorageItem(SETTINGS_KEY, JSON.stringify(settings));
}
