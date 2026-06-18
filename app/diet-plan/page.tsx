"use client";
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
//import PageTransition from "../components/PageTransition";
  


type Meal = {
  id: number;
  name: string;
  category: "breakfast" | "lunch" | "dinner" | "snack";
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image: string;
  tags: string[];
};

type FilterType = "all" | "vegetarian" | "vegan" | "keto" | "muscle";

const mealData: Meal[] = [
  {
    id: 1,
    name: "Berry Almond Parfait",
    category: "breakfast",
    calories: 420,
    protein: 24,
    carbs: 35,
    fat: 12,
    image:
      "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800&h=600&fit=crop",
    tags: ["vegetarian", "vegan", "muscle"],
  },
  {
    id: 2,
    name: "Salmon Quinoa Bowl",
    category: "lunch",
    calories: 580,
    protein: 38,
    carbs: 45,
    fat: 22,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    tags: ["keto", "muscle"],
  },
  {
    id: 3,
    name: "Lean Steak & Greens",
    category: "dinner",
    calories: 620,
    protein: 48,
    carbs: 28,
    fat: 18,
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop",
    tags: ["keto", "muscle"],
  },
  {
    id: 4,
    name: "Apple & Nut Butter",
    category: "snack",
    calories: 210,
    protein: 5,
    carbs: 22,
    fat: 12,
    image:
      "data:image/jpeg;base64,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",
    tags: ["vegetarian", "vegan"],
  },
];

export default function MealPlanner() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [activeMenu, setActiveMenu] = useState("Meal Planner");
  const [actionMessage, setActionMessage] = useState<string>(
    "Select a meal action or switch to Grocery List."
  );
  const [selectedMeal, setSelectedMeal] =
  useState<Meal | null>(null);
  const [meals, setMeals] = useState<Meal[]>(mealData);

  const dailyCalorieTarget = 2250;



 const [consumedCalories, setConsumedCalories] = useState(1845);

const [macroTotals, setMacroTotals] = useState({
  protein: 142,
  fat: 65,
  carbs: 210,
});

const [loggedMeals, setLoggedMeals] = useState<string[]>([]);
useEffect(() => {
  const loadMeals = async () => {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    if (!user.email) return;

    const res = await fetch(
      `/api/meals/${encodeURIComponent(user.email)}`
    );

    const data = await res.json();

    setLoggedMeals(
      data.map((meal: any) => String(meal.mealId))
    );
  };

  loadMeals();
}, []);
const remainingCalories =
  dailyCalorieTarget - consumedCalories;

const caloriePercentage = Math.min(
  (consumedCalories / dailyCalorieTarget) * 100,
  100
);
const [macroData, setMacroData] = useState({
  protein: 142,
  carbs: 210,
  fat: 65,
});

useEffect(() => {
  localStorage.setItem(
    "loggedMeals",
    JSON.stringify(loggedMeals)
  );
}, [loggedMeals]);

const [aiRecommendation, setAiRecommendation] = useState(
  "High-protein meals selected for muscle gain."
);
  const filteredMeals = useMemo(
    () =>
      meals.filter((meal) =>
        activeFilter === "all" ? true : meal.tags.includes(activeFilter),
      ),
    [activeFilter, meals],
  );
  const recommendations = [
  "Increase protein intake after workouts.",
  "Add more vegetables for micronutrients.",
  "Reduce carbs slightly for better keto balance.",
  "Perfect muscle gain meal combination today.",
  "Increase healthy fats for sustained energy.",
];


  const handleNavClick = (section: string) => {
    setActiveMenu(section);
    if (section === "Grocery List") {
      setActionMessage("Opening Grocery Generator page...");
      router.push("/grocery-generator");
      return;
    }
    setActionMessage(`Navigated to ${section}.`);
  };

  const handleUpgradePlan = () => {
    setActionMessage("Upgrade Plan clicked.");
  };

  const handleGeneratePlan = () => {

  const breakfastOptions = [
    {
      name: "Berry Almond Parfait",
      image: mealImages.breakfast[0],
    },
    {
      name: "Greek Yogurt Bowl",
      image: mealImages.breakfast[1],
    },
    {
      name: "Avocado Toast",
      image: mealImages.breakfast[2],
    },
  ];

  const lunchOptions = [
    {
      name: "Salmon Quinoa Bowl",
      image: mealImages.lunch[0],
    },
    {
      name: "Chicken Rice Bowl",
      image: mealImages.lunch[1],
    },
    {
      name: "Veggie Power Bowl",
      image: mealImages.lunch[2],
    },
  ];

  const dinnerOptions = [
    {
      name: "Lean Steak & Greens",
      image: mealImages.dinner[0],
    },
    {
      name: "Grilled Chicken Plate",
      image: mealImages.dinner[1],
    },
    {
      name: "Paneer Dinner Bowl",
      image: mealImages.dinner[2],
    },
  ];

  const snackOptions = [
    {
      name: "Apple & Nut Butter",
      image: mealImages.snack[0],
    },
    {
      name: "Protein Smoothie",
      image: mealImages.snack[1],
    },
    {
      name: "Nuts & Fruit Mix",
      image: mealImages.snack[2],
    },
  ];


  const getRandom = (items: any[]) =>
    items[Math.floor(Math.random() * items.length)];


  const breakfast = getRandom(breakfastOptions);
  const lunch = getRandom(lunchOptions);
  const dinner = getRandom(dinnerOptions);
  const snack = getRandom(snackOptions);


  const newPlan: Meal[] = [
    {
      ...mealData[0],
      name: breakfast.name,
      image: breakfast.image,
    },
    {
      ...mealData[1],
      name: lunch.name,
      image: lunch.image,
    },
    {
      ...mealData[2],
      name: dinner.name,
      image: dinner.image,
    },
    {
      ...mealData[3],
      name: snack.name,
      image: snack.image,
    },
  ];


  setMeals(newPlan);
  setLoggedMeals([]);
  setActionMessage("New AI meal plan generated!");
};
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const handleLogMeal = async (meal: Meal) => {
    await fetch("/api/meals", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: user.email,
    mealId: meal.id,
    mealName: meal.name,
    calories: meal.calories,
    protein: meal.protein,
    carbs: meal.carbs,
    fat: meal.fat,
    category: meal.category,
  }),
});
 await fetch("/api/meals", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: user.email,
    mealId: meal.id,
    mealName: meal.name,
    calories: meal.calories,
    protein: meal.protein,
    carbs: meal.carbs,
    fat: meal.fat,
    category: meal.category,
  }),
});
 if (loggedMeals.includes(String(meal.id))) {
    setActionMessage(`${meal.name} already logged`);
    return;
  }

  setConsumedCalories(
    (prev) => prev + meal.calories
  );

  setMacroTotals((prev) => ({
    protein: prev.protein + meal.protein,
    fat: prev.fat + meal.fat,
    carbs: prev.carbs + meal.carbs,
  }));

 setLoggedMeals((prev) => [...prev, String(meal.id)]);;

  setActionMessage(`${meal.name} logged successfully`);
};
const [mealHistory, setMealHistory] = useState([]);
  useEffect(() => {
  const loadHistory = async () => {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    if (!user.email) return;

    const res = await fetch(
      `/api/meals/${encodeURIComponent(user.email)}`
    );

    const data = await res.json();

    setMealHistory(data);
  };

  loadHistory();
}, []);
  const handleViewDetails = (meal: Meal) => {
  setSelectedMeal(meal);
};
  const mealImages: Record<Meal["category"], string[]> = {
  breakfast: [
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=600&fit=crop",
  ],
  lunch: [
    "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
  ],
  dinner: [
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=600&fit=crop",
  ],
  snack: [
    "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=600&fit=crop",
  ],
};

const handleRefreshMeal = (meal: Meal) => {
  const mealName = meal.category;

  setLoggedMeals((prev) =>
    prev.filter((id) => id !== String(meal.id))
  );
  
  const images = mealImages[mealName];

  const randomImage =
    images[Math.floor(Math.random() * images.length)];


  const newMeals: Record<Meal["category"], string[]> = {
    breakfast: [
      "Berry Almond Parfait",
      "Greek Yogurt Bowl",
      "Avocado Toast"
    ],
    lunch: [
      "Salmon Quinoa Bowl",
      "Chicken Rice Bowl",
      "Veggie Power Bowl"
    ],
    dinner: [
      "Lean Steak & Greens",
      "Grilled Chicken Plate",
      "Paneer Dinner Bowl"
    ],
    snack: [
      "Apple & Nut Butter",
      "Protein Smoothie",
      "Nuts & Fruit Mix"
    ],
  };


  const randomMeal =
    newMeals[mealName][
      Math.floor(Math.random() * newMeals[mealName].length)
    ];


  setMeals((prevMeals) =>
    prevMeals.map((meal) =>
      meal.category === mealName
        ? {
            ...meal,
            name: randomMeal,
            image: randomImage,
            calories: Math.floor(Math.random() * 250) + 200,
          }
        : meal
    )
  );
 

  setActionMessage(`New AI meal generated for ${mealName}`);
};

  return (
    <>
      <style>{`
* {
  box-sizing: border-box;
}

:root {
  color-scheme: light;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #f5f8f6;
  color: #1f2937;
}

body,
html {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #f5f8f6;
}

button,
input {
  font: inherit;
}

.meal-planner-page {
  min-height: 100vh;
  width: 100%;
  padding: 32px;
  background: #f5f8f6;
}
.meal-sidebar {
  position: sticky;
  top: 32px;
  height: fit-content;
  background: #ffffff;
  border-radius: 24px;
  padding: 26px 20px;
  display: grid;
  gap: 30px;
  box-shadow: 0 12px 32px rgba(11, 114, 133, 0.08);
}

.meal-brand-panel {
  display: flex;
  align-items: center;
  gap: 14px;
}

.meal-brand-icon {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: white;
  display: grid;
  place-items: center;
  box-shadow: 0 12px 28px rgba(11, 114, 133, 0.12);
}

.meal-brand-icon img,
.brand-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.meal-brand-label {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #0b7285;
}

.meal-brand-subtitle {
  margin: 4px 0 0;
  color: #6f8a94;
  font-size: 12px;
}

.meal-menu {
  display: grid;
  gap: 10px;
}

.meal-menu-item {
  border: none;
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  border-radius: 18px;
  background: transparent;
  color: #4a6a75;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease;
}

.meal-menu-item:hover,
.meal-menu-item.active {
  background: #0b7285;
  color: white;
}

.meal-profile-card {
  display: grid;
  gap: 14px;
  padding: 20px;
  border-radius: 22px;
  background: #dceee8;
}

.meal-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #0b7285;
  color: white;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 16px;
}

.meal-profile-info {
  display: grid;
  gap: 4px;
}

.meal-profile-name {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
}

.meal-profile-badge {
  margin: 0;
  font-size: 12px;
  color: #4a6a75;
}

.meal-upgrade-btn {
  border: none;
  border-radius: 999px;
  padding: 10px 14px;
  background: #0b7285;
  color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 13px;
}

.meal-main-content {
  display: grid;
  gap: 32px;
}

.meal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
}

.meal-header h1 {
  margin: 0 0 8px;
  font-family: "Poppins", sans-serif;
  font-size: clamp(2rem, 3vw, 3.2rem);
  font-weight: 700;
  color: #0b7285;
  letter-spacing: -1px;
}
.meal-subtitle {
  margin: 0;
  color: #6f8a94;
  font-size: 15px;
}

.meal-action-status {
  margin: 14px 0 0;
  color: #0b7285;
  font-size: 14px;
  font-weight: 600;
}

.meal-filters {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.meal-filter-pill {
  border: none;
  border-radius: 999px;
  padding: 10px 18px;
  background: white;
  color: #4a6a75;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(11, 114, 133, 0.06);
  transition: background 0.25s ease, color 0.25s ease;
}

.meal-filter-pill:hover {
  background: #f0f8f7;
}

.meal-filter-pill.active {
  background: #0b7285;
  color: white;
}

.meal-daily-target-card {
  display: grid;
  grid-template-columns: 140px 1fr 1fr;
  gap: 40px;
  align-items: center;
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 12px 32px rgba(11, 114, 133, 0.08);
}

.meal-progress-container {
  display: flex;
  justify-content: center;
}

.meal-progress-circle {
  position: relative;
  width: 120px;
  height: 120px;
}

.meal-progress-circle svg {
  width: 100%;
  height: 100%;
}

.meal-progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.meal-progress-percentage {
  display: block;
  font-size: 32px;
  font-weight: 700;
  color: #0b7285;
}

.meal-target-center {
  text-align: center;
}

.meal-target-label {
  margin: 0 0 8px;
  font-size: 14px;
  color: #6f8a94;
  font-weight: 600;
}

.meal-target-value {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
}

.meal-target-value span {
  font-size: 18px;
  color: #6f8a94;
}

.meal-target-remaining {
  margin: 8px 0 0;
  font-size: 13px;
  color: #0b7285;
}

.meal-macros {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.meal-macro-item {
  text-align: center;
}

.meal-macro-label {
  margin: 0 0 6px;
  font-size: 12px;
  color: #6f8a94;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.meal-macro-value {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
}

.meal-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.meal-card {
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(11,114,133,0.08);
}

.meal-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(11, 114, 133, 0.12);
}

.meal-card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.meal-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.meal-card-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(11, 114, 133, 0.9);
  color: white;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}

.meal-card-content {
  padding: 24px;
}

.meal-card-content h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
}

.meal-card-calories {
  margin: 0 0 16px;
  font-size: 14px;
  color: #0b7285;
  font-weight: 600;
}

.meal-card-macros {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px 0;
  border-top: 1px solid #e5f5f2;
  border-bottom: 1px solid #e5f5f2;
  margin-bottom: 16px;
}

.meal-macro {
  text-align: center;
}

.meal-card-actions {
  display: flex;
  gap: 8px;
}

.meal-action-btn {
  flex: 1;
  border: none;
  border-radius: 12px;
  padding: 10px 12px;
  background: white;
  color: #0b7285;
  border: 1px solid #dceee8;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
}

.meal-action-btn:hover {
  background: #f0f8f7;
  border-color: #0b7285;
}

.meal-log-btn,
.meal-details-btn {
  flex: 1;
}

.meal-refresh-btn {
  flex: 0 0 40px;
  padding: 10px;
  font-size: 16px;
}

.meal-cta-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 12px 32px rgba(11, 114, 133, 0.08);
  text-align: center;
}

.meal-regenerate-btn {
  border: none;
  border-radius: 20px;
  padding: 16px 32px;
  background: #0b7285;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 12px 24px rgba(11, 114, 133, 0.18);
  transition: all 0.25s ease;
}

.meal-regenerate-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(11, 114, 133, 0.24);
}

.meal-cta-subtitle {
  margin: 0;
  font-size: 13px;
  color: #6f8a94;
}

.meal-footer {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 24px 32px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 12px 32px rgba(11, 114, 133, 0.08);
}

.meal-footer-left {
  font-size: 16px;
  font-weight: 700;
  color: #0b7285;
}

.meal-footer-center {
  display: flex;
  gap: 24px;
}

.meal-footer-center a {
  color: #6f8a94;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.25s ease;
}

.meal-footer-center a:hover {
  color: #0b7285;
}

.meal-footer-right {
  font-size: 13px;
  color: #6f8a94;
}

@media (max-width: 1200px) {
  .meal-planner-page {
    grid-template-columns: 1fr;
  }

  .meal-sidebar {
    position: relative;
    top: 0;
  }

  .meal-header {
    flex-direction: column;
    align-items: stretch;
  }

  .meal-filters {
    justify-content: flex-start;
  }

  .meal-daily-target-card {
    grid-template-columns: 1fr;
    gap: 24px;
  }
.meal-ai-insight-card {
  display: flex;
  gap: 20px;
  align-items: center;
  background: linear-gradient(135deg,#0b7285,#1098ad);
  color: white;
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0 12px 30px rgba(11,114,133,0.2);
}

.meal-ai-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

.meal-ai-insight-card h3 {
  margin: 0 0 8px;
}

.meal-ai-insight-card p {
  margin: 0;
  line-height: 1.6;
}
  .meal-macros {
    grid-template-columns: repeat(3, 1fr);
  }

  .meal-cards-grid {
    grid-template-columns: 1fr;
  }
}
  .meal-recommendation-banner {
  background: white;
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0 12px 32px rgba(11,114,133,0.08);
}

.meal-recommendation-banner span {
  color: #0b7285;
  font-weight: 700;
}

.meal-recommendation-banner h3 {
  margin: 10px 0;
}
  .meal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;
}

.meal-tags span {
  background: #e6f7f9;
  color: #0b7285;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  text-transform: capitalize;
}

@media (max-width: 760px) {
  .meal-planner-page {
    padding: 20px;
    gap: 20px;
  }

  .meal-sidebar {
    padding: 20px;
  }

  .meal-header h1 {
    font-size: 28px;
  }

  .meal-filters {
    flex-direction: column;
  }

  .meal-filter-pill {
    width: 100%;
  }

  .meal-daily-target-card {
    padding: 24px;
  }
    .meal-ai-card {
  background: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 12px 32px rgba(11,114,133,0.08);
}
  .meal-log-btn:disabled {
  background: #0b7285;
  color: white;
  cursor: not-allowed;
}

.meal-ai-card h3 {
  margin-bottom: 12px;
  color: #0b7285;
}
    .meal-ai-score {
  position: absolute;
  left: 12px;
  top: 12px;
  background: #22c55e;
  color: white;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  z-index: 2;
}

  .meal-footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .meal-footer-center {
    flex-direction: column;
  }
}
      `}</style>
      <div className="meal-planner-page">
      

      <main className="meal-main-content">
        <section className="meal-header">
          <div>
            <h1>Meal Planner</h1>
            <p className="meal-subtitle">
  AI-generated meal recommendations based on your goals, calories, and nutrition needs.
</p>
            <p className="meal-action-status">{actionMessage}</p>
          </div>

          <div className="meal-filters">
            {([
              { value: "all", label: "All Plans" },
              { value: "vegetarian", label: "Vegetarian" },
              { value: "vegan", label: "Vegan" },
              { value: "keto", label: "Keto" },
              { value: "muscle", label: "Muscle Gain" },
            ] as const).map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={`meal-filter-pill ${activeFilter === filter.value ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        <section className="meal-daily-target-card">
          <section className="meal-ai-card">
  <h3>🤖 AI Recommendation</h3>

  <p>{aiRecommendation}</p>
</section>
          <div className="meal-progress-container">
            <div className="meal-progress-circle">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e5f5f2" strokeWidth="8" />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#0b7285"
                  strokeWidth="8"
                  strokeDasharray={`${(caloriePercentage / 100) * 339.29} 339.29`}
                  strokeLinecap="round"
                  style={{ transform: "rotate(-90deg)", transformOrigin: "60px 60px" }}
                />
              </svg>
              <div className="meal-progress-text">
                <span className="meal-progress-percentage">{Math.round(caloriePercentage)}%</span>
              </div>
            </div>
          </div>

          <div className="meal-target-center">
            <p className="meal-target-label">Daily Calorie Target</p>
            <p className="meal-target-value">
              {consumedCalories} / {dailyCalorieTarget} <span>kcal</span>
            </p>
            <p className="meal-target-remaining">
              {remainingCalories > 0 ? `${remainingCalories} kcal remaining` : "Target exceeded"}
            </p>
          </div>

          <div className="meal-macros">
            <div className="meal-macro-item">
              <p className="meal-macro-label">Protein</p>
              <p className="meal-macro-value">
  {macroTotals.protein}g
</p>
            </div>
            <div className="meal-macro-item">
              <p className="meal-macro-label">Fat</p>
              <p className="meal-macro-value">
  {macroTotals.fat}g
</p>
            </div>
            <div className="meal-macro-item">
              <p className="meal-macro-label">Carbs</p>
             <p className="meal-macro-value">
  {macroTotals.carbs}g
</p>
            </div>
          </div>
        </section>
        <section className="meal-ai-insight-card">
  <div className="meal-ai-icon">🤖</div>

  <div>
    <h3>AI Nutrition Insight</h3>
    <p>
      Based on today's intake, you need approximately
      <strong> 405 kcal </strong>
      more to reach your goal. Consider adding a high-protein snack
      or healthy dinner option.
    </p>
  </div>
</section>

        <section className="meal-cards-grid">
          
          {filteredMeals.map((meal) => (
            <article className="meal-card" key={meal.id}>
              <div className="meal-card-image">
                <img
                  src={meal.image}
                  alt={meal.name}
                  loading="lazy"
                  onError={(event) => {
                    const target = event.currentTarget;
                    target.onerror = null;
                    target.src = {
                      breakfast: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
                      lunch: "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800&h=600&fit=crop",
                      dinner: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop",
                      snack: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800&h=600&fit=crop",
                    }[meal.category];
                  }}
                />
                <span className="meal-card-badge">
                  {meal.category.charAt(0).toUpperCase() + meal.category.slice(1)}
                </span>
              </div>
          

              <div className="meal-card-content">
                <h3>{meal.name}</h3>
                <div className="meal-tags">
  {meal.tags.map((tag) => (
    <span key={tag}>{tag}</span>
  ))}
</div>
                <p className="meal-card-calories">{meal.calories} kcal</p>

                <div className="meal-card-macros">
                  <div className="meal-macro">
                    <span className="meal-macro-label">Protein</span>
                    <span className="meal-macro-value">{meal.protein}g</span>
                  </div>
                  <div className="meal-macro">
                    <span className="meal-macro-label">Carbs</span>
                    <span className="meal-macro-value">{meal.carbs}g</span>
                  </div>
                  <div className="meal-macro">
                    <span className="meal-macro-label">Fat</span>
                    <span className="meal-macro-value">{meal.fat}g</span>
                  </div>
                </div>

                <div className="meal-card-actions">
                 <button
  type="button"
  className="meal-action-btn meal-log-btn"
  disabled={loggedMeals.includes(String(meal.id))}
  onClick={() => handleLogMeal(meal)}
>
  {loggedMeals.includes(String(meal.id))
    ? "Logged ✓"
    : "Log Meal"}
</button>
                  <button
                    type="button"
                    className="meal-action-btn meal-details-btn"
                    onClick={() => handleViewDetails(meal)}
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="meal-action-btn meal-refresh-btn"
                    onClick={() => handleRefreshMeal(meal)}
                  >
                    Refresh
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

       <section className="meal-cta-section">
  <h2>Generate New AI Meal Plan</h2>

  <p className="meal-cta-subtitle">
    Our AI will analyze your calorie intake, macro balance,
    and fitness goals to generate a fresh meal plan.
  </p>

  <button 
  className="meal-regenerate-btn"
  onClick={handleGeneratePlan}
>
  Generate AI Plan
</button>
</section>
{selectedMeal && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl">
      <img
        src={selectedMeal.image}
        alt={selectedMeal.name}
        className="w-64 h-64 object-cover rounded-lg"
      />

      <h2>{selectedMeal.name}</h2>

      <p>Calories: {selectedMeal.calories}</p>
      <p>Protein: {selectedMeal.protein}g</p>
      <p>Carbs: {selectedMeal.carbs}g</p>
      <p>Fat: {selectedMeal.fat}g</p>

      <button
        onClick={() => setSelectedMeal(null)}
      >
        Close
      </button>
    </div>
  </div>
)}
      </main>

      <footer className="meal-footer">
        <div className="meal-footer-left">NutriPlan</div>
        <div className="meal-footer-center">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="meal-footer-right">Copyright 2026 NutriPlan. All rights reserved.</div>
      </footer>
    </div>
    </>
  );
}     