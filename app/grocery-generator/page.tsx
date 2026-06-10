"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./grocery.css";

type GroceryItem = {
  id: number;
  name: string;
  category: "vegetable" | "protein" | "pantry";
  selected: boolean;
  qty: number;
};

const initialDishMap: Record<string, GroceryItem[]> = {
  "chicken biryani": [
    { id: 1, name: "Red Onions", category: "vegetable", selected: false, qty: 1 },
    { id: 2, name: "Fresh Ginger", category: "vegetable", selected: false, qty: 1 },
    { id: 3, name: "Green Chilies", category: "vegetable", selected: false, qty: 1 },
    { id: 4, name: "Chicken Breast", category: "protein", selected: true, qty: 1 },
    { id: 5, name: "Basmati Rice", category: "pantry", selected: false, qty: 1 },
    { id: 6, name: "Greek Yogurt", category: "pantry", selected: false, qty: 1 },
  ],
  dosa: [
    { id: 1, name: "Rice", category: "pantry", selected: false, qty: 1 },
    { id: 2, name: "Urad Dal", category: "protein", selected: false, qty: 1 },
    { id: 3, name: "Fenugreek", category: "vegetable", selected: false, qty: 1 },
    { id: 4, name: "Oil", category: "pantry", selected: false, qty: 1 },
  ],
  idli: [
    { id: 1, name: "Rice", category: "pantry", selected: false, qty: 1 },
    { id: 2, name: "Urad Dal", category: "protein", selected: false, qty: 1 },
    { id: 3, name: "Fenugreek", category: "vegetable", selected: false, qty: 1 },
  ],
  pasta: [
    { id: 1, name: "Pasta", category: "pantry", selected: false, qty: 1 },
    { id: 2, name: "Tomato", category: "vegetable", selected: false, qty: 1 },
    { id: 3, name: "Garlic", category: "vegetable", selected: false, qty: 1 },
    { id: 4, name: "Cheese", category: "protein", selected: false, qty: 1 },
  ],
  salad: [
    { id: 1, name: "Lettuce", category: "vegetable", selected: false, qty: 1 },
    { id: 2, name: "Cucumber", category: "vegetable", selected: false, qty: 1 },
    { id: 3, name: "Tomato", category: "vegetable", selected: false, qty: 1 },
    { id: 4, name: "Carrot", category: "vegetable", selected: false, qty: 1 },
  ],
};

const fallbackItems: GroceryItem[] = [
  { id: 1, name: "Quinoa", category: "pantry", selected: false, qty: 1 },
  { id: 2, name: "Spinach", category: "vegetable", selected: false, qty: 1 },
  { id: 3, name: "Greek Yogurt", category: "protein", selected: false, qty: 1 },
  { id: 4, name: "Eggs", category: "protein", selected: false, qty: 1 },
];

export default function GroceryGenerator() {
  const router = useRouter();
  const [dish, setDish] = useState("");
  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([]);
  const [activeMenu, setActiveMenu] = useState("Grocery List");

  const generateHealthyList = (value: string): GroceryItem[] => {
    const cleanDish = value.trim().toLowerCase();

    if (initialDishMap[cleanDish]) {
      return initialDishMap[cleanDish];
    }

    if (cleanDish.includes("chicken")) {
      return [
        { id: 1, name: "Chicken Breast", category: "protein", selected: false, qty: 1 },
        { id: 2, name: "Broccoli", category: "vegetable", selected: false, qty: 1 },
        { id: 3, name: "Quinoa", category: "pantry", selected: false, qty: 1 },
        { id: 4, name: "Greek Yogurt", category: "protein", selected: false, qty: 1 },
      ];
    }

    if (cleanDish.includes("rice") || cleanDish.includes("curry")) {
      return [
        { id: 1, name: "Brown Rice", category: "pantry", selected: false, qty: 1 },
        { id: 2, name: "Spinach", category: "vegetable", selected: false, qty: 1 },
        { id: 3, name: "Lentils", category: "protein", selected: false, qty: 1 },
        { id: 4, name: "Tomato", category: "vegetable", selected: false, qty: 1 },
      ];
    }

    return fallbackItems;
  };

  const handleGenerate = () => {
    setGroceryItems(generateHealthyList(dish));
  };

  const handleNavClick = (section: string) => {
    setActiveMenu(section);
    if (section === "Meal Planner") {
      router.push("/diet-plan");
      return;
    }
    if (section === "Grocery List") {
      return;
    }
    console.log(`Navigated to ${section}`);
  };

  const toggleItemSelected = (id: number) => {
    setGroceryItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const updateQuantity = (id: number, direction: "inc" | "dec") => {
    setGroceryItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const qty = direction === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1);
        return { ...item, qty };
      })
    );
  };

  const vegetableItems = groceryItems.filter((item) => item.category === "vegetable");
  const pantryItems = groceryItems.filter(
    (item) => item.category === "protein" || item.category === "pantry"
  );

  const selectedDishLabel = dish.trim()
    ? dish
        .trim()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    : "Your dish";

  const healthMessage = dish.trim().toLowerCase() === "chicken biryani"
    ? "Your selection of Chicken Biryani is an excellent match for your Muscle Gain goal."
    : dish.trim()
    ? `Your selection of ${selectedDishLabel} is mapped to a healthy grocery list designed for balanced nutrition.`
    : "Generate a grocery list to see AI health insights.";

  return (
    <div className="grocery-page">
      <aside className="sidebar">
        <div className="brand-panel">
          <div className="brand-icon">
            <img src="/nutri-logo.svg" alt="NutriPlan logo" className="brand-icon-image" />
          </div>
          <div>
            <p className="brand-label">NutriPlan</p>
            <p className="brand-subtitle">Nutrition AI</p>
          </div>
        </div>

        <nav className="sidebar-menu">
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
              className={`menu-item ${activeMenu === item ? "active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </nav>

      </aside>

      <main className="main-content">
        <section className="hero-panel">
          <div>
            <h1>Grocery Generator</h1>
            <p className="hero-description">
              Harness AI to transform your cravings into precise, healthy shopping lists optimized for your goals.
            </p>
          </div>
          <span className="goal-badge">Muscle Gain</span>
        </section>

        <section className="search-panel">
          <input
            className="search-input"
            value={dish}
            onChange={(event) => setDish(event.target.value)}
            placeholder="Type a dish (e.g., Chicken Biryani) to generate ingredients..."
          />
          <button className="generate-button" onClick={handleGenerate}>
            Generate
          </button>
        </section>

        <section className="content-grid">
          <div className="column column-left">
            <article className="card">
              <h2>Vegetables</h2>
              <div className="item-list">
                {vegetableItems.length > 0 ? (
                  vegetableItems.map((item) => (
                    <div className="item-row" key={item.id}>
                      <button
                        type="button"
                        className={`select-marker ${item.selected ? "selected" : ""}`}
                        onClick={() => toggleItemSelected(item.id)}
                        aria-label={`Select ${item.name}`}
                      />
                      <span>{item.name}</span>
                      <div className="quantity-controls">
                        <button type="button" onClick={() => updateQuantity(item.id, "dec")}>-</button>
                        <span>{item.qty}</span>
                        <button type="button" onClick={() => updateQuantity(item.id, "inc")}>+</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="empty-text">Generate a grocery list to view vegetables here.</p>
                )}
              </div>
            </article>

            <article className="card">
              <h2>Proteins & Pantry</h2>
              <div className="item-list">
                {pantryItems.length > 0 ? (
                  pantryItems.map((item) => (
                    <div className="item-row" key={item.id}>
                      <button
                        type="button"
                        className={`select-marker ${item.selected ? "selected" : ""}`}
                        onClick={() => toggleItemSelected(item.id)}
                        aria-label={`Select ${item.name}`}
                      >
                        {item.selected ? "?" : ""}
                      </button>
                      <span>{item.name}</span>
                      <div className="quantity-controls">
                        <button type="button" onClick={() => updateQuantity(item.id, "dec")}>-</button>
                        <span>{item.qty}</span>
                        <button type="button" onClick={() => updateQuantity(item.id, "inc")}>+</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="empty-text">Proteins & pantry items appear after generation.</p>
                )}
              </div>
            </article>
          </div>

          <div className="column column-center">
            <article className="card health-card">
              <div className="health-header">
                <div className="health-icon">?</div>
                <div>
                  <p className="card-title">AI Health Check</p>
                  <p className="health-subtitle">Intelligent meal insights for your nutritional plan.</p>
                </div>
              </div>
              <p className="health-copy">{healthMessage}</p>
              <div className="stats-row">
                <div className="stat-card">
                  <p>Calorie Match</p>
                  <strong>92%</strong>
                </div>
                <div className="stat-card">
                  <p>Glycemic Load</p>
                  <strong>Medium</strong>
                </div>
              </div>
              <div className="adjustments">
                <p className="adjustments-heading">Recommended Adjustments:</p>
                <ul>
                  <li>? Double the ginger</li>
                  <li>? Use Ghee instead of vegetable oil</li>
                </ul>
              </div>
            </article>
          </div>

          <div className="column column-right">
            <div className="smart-panel">
              <article className="mini-card">
                <p className="mini-title">Fiber Boost</p>
                <p>Quinoa for White Rice</p>
              </article>
              <article className="mini-card">
                <p className="mini-title">Gut Health</p>
                <p>Skyr for Greek Yogurt</p>
              </article>
              <article className="mini-card">
                <p className="mini-title">Metabolism</p>
                <p>Himalayan Salt</p>
              </article>
            </div>

            <article className="promo-card">
              <div className="promo-overlay" />
              <div className="promo-copy">
                <p className="promo-label">Meal Prepping Today?</p>
                <h3>Healthy recipe guide inside.</h3>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <div className="footer-left">NutriPlan</div>
        <div className="footer-center">© 2026 NutriPlan</div>
        <div className="footer-right">
          <a href="#">Help Center</a>
          <a href="#">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
