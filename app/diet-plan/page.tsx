"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import "./meal-planner.css";

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
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800&h=600&fit=crop",
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
  const [meals, setMeals] = useState<Meal[]>(mealData);

  const dailyCalorieTarget = 2250;
  const consumedCalories = 1845;
  const remainingCalories = dailyCalorieTarget - consumedCalories;
  const caloriePercentage = (consumedCalories / dailyCalorieTarget) * 100;

  const filteredMeals = useMemo(
    () =>
      meals.filter((meal) =>
        activeFilter === "all" ? true : meal.tags.includes(activeFilter),
      ),
    [activeFilter, meals],
  );

  const handleRefreshDay = () => {
    setMeals((currentMeals) => {
      const shuffled = [...currentMeals];
      for (let i = shuffled.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
    setActionMessage("Full day meal plan shuffled.");
  };

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

  const handleLogMeal = (mealName: string) => {
    setActionMessage(`Meal logged: ${mealName}`);
  };

  const handleViewDetails = (mealName: string) => {
    setActionMessage(`Viewing details for: ${mealName}`);
  };

  const handleRefreshMeal = (mealName: string) => {
    setActionMessage(`Refreshing suggestions for: ${mealName}`);
  };

  return (
    <div className="meal-planner-page">
      <aside className="meal-sidebar">
        <div className="meal-brand-panel">
          <div className="meal-brand-icon">
            <img src="/nutri-logo.svg" alt="NutriPlan logo" className="brand-icon-image" />
          </div>
          <div>
            <p className="meal-brand-label">NutriPlan</p>
            <p className="meal-brand-subtitle">AI Nutrition</p>
          </div>
        </div>

        <nav className="meal-menu">
          {[
            "Dashboard",
            "Meal Planner",
            "Grocery List",
            "Analytics",
            "Settings",
          ].map((item) => (
            <button
              key={item}
              type="button"
              className={`meal-menu-item ${activeMenu === item ? "active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </nav>

      </aside>

      <main className="meal-main-content">
        <section className="meal-header">
          <div>
            <h1>Meal Planner</h1>
            <p className="meal-subtitle">Personalized nutrition strategy for 2026</p>
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
              <p className="meal-macro-value">142g</p>
            </div>
            <div className="meal-macro-item">
              <p className="meal-macro-label">Fat</p>
              <p className="meal-macro-value">65g</p>
            </div>
            <div className="meal-macro-item">
              <p className="meal-macro-label">Carbs</p>
              <p className="meal-macro-value">210g</p>
            </div>
          </div>
        </section>

        <section className="meal-cards-grid">
          {filteredMeals.map((meal) => (
            <article className="meal-card" key={meal.id}>
              <div className="meal-card-image">
                <img src={meal.image} alt={meal.name} />
                <span className="meal-card-badge">
                  {meal.category.charAt(0).toUpperCase() + meal.category.slice(1)}
                </span>
              </div>

              <div className="meal-card-content">
                <h3>{meal.name}</h3>
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
                    onClick={() => handleLogMeal(meal.name)}
                  >
                    Log Meal
                  </button>
                  <button
                    type="button"
                    className="meal-action-btn meal-details-btn"
                    onClick={() => handleViewDetails(meal.name)}
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="meal-action-btn meal-refresh-btn"
                    onClick={() => handleRefreshMeal(meal.name)}
                  >
                    Refresh
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="meal-cta-section">
          <button type="button" className="meal-regenerate-btn" onClick={handleRefreshDay}>
            Regenerate Full Day Plan
          </button>
          <p className="meal-cta-subtitle">
            Optimized based on your Muscle Gain goal and Keto preferences.
          </p>
        </section>
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
  );
}
