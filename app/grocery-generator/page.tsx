"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "../components/PageTransition";
type GroceryItem = {
  id: number;
  name: string;
  category: "vegetable" | "protein" | "pantry" | "fruit" | "grain" | "dairy" | "spice";
  selected: boolean;
  qty: number;
};

const initialDishMap: Record<string, GroceryItem[]> = {
  "chicken biryani": [
    { id: 1, name: "Red Onions", category: "vegetable", selected: false, qty: 1 },
    { id: 2, name: "Fresh Ginger", category: "spice", selected: false, qty: 1 },
    { id: 3, name: "Green Chilies", category: "vegetable", selected: false, qty: 1 },
    { id: 4, name: "Chicken Breast", category: "protein", selected: true, qty: 1 },
    { id: 5, name: "Basmati Rice", category: "grain", selected: false, qty: 1 },
    { id: 6, name: "Greek Yogurt", category: "dairy", selected: false, qty: 1 },
    { id: 7, name: "Garam Masala", category: "spice", selected: false, qty: 1 },
    { id: 8, name: "Cilantro", category: "vegetable", selected: false, qty: 1 },
  ],
  dosa: [
    { id: 1, name: "Rice", category: "grain", selected: false, qty: 1 },
    { id: 2, name: "Urad Dal", category: "protein", selected: false, qty: 1 },
    { id: 3, name: "Fenugreek", category: "spice", selected: false, qty: 1 },
    { id: 4, name: "Oil", category: "pantry", selected: false, qty: 1 },
    { id: 5, name: "Coconut", category: "fruit", selected: false, qty: 1 },
  ],
  idli: [
    { id: 1, name: "Rice", category: "grain", selected: false, qty: 1 },
    { id: 2, name: "Urad Dal", category: "protein", selected: false, qty: 1 },
    { id: 3, name: "Fenugreek", category: "spice", selected: false, qty: 1 },
    { id: 4, name: "Curry Leaves", category: "vegetable", selected: false, qty: 1 },
  ],
  pasta: [
    { id: 1, name: "Pasta", category: "grain", selected: false, qty: 1 },
    { id: 2, name: "Tomato", category: "vegetable", selected: false, qty: 1 },
    { id: 3, name: "Garlic", category: "spice", selected: false, qty: 1 },
    { id: 4, name: "Cheese", category: "dairy", selected: false, qty: 1 },
    { id: 5, name: "Spinach", category: "vegetable", selected: false, qty: 1 },
  ],
  salad: [
    { id: 1, name: "Lettuce", category: "vegetable", selected: false, qty: 1 },
    { id: 2, name: "Cucumber", category: "vegetable", selected: false, qty: 1 },
    { id: 3, name: "Tomato", category: "vegetable", selected: false, qty: 1 },
    { id: 4, name: "Carrot", category: "vegetable", selected: false, qty: 1 },
    { id: 5, name: "Avocado", category: "fruit", selected: false, qty: 1 },
  ],
  "vegetable stir fry": [
    { id: 1, name: "Broccoli", category: "vegetable", selected: false, qty: 1 },
    { id: 2, name: "Bell Pepper", category: "vegetable", selected: false, qty: 1 },
    { id: 3, name: "Snap Peas", category: "vegetable", selected: false, qty: 1 },
    { id: 4, name: "Tamari Sauce", category: "pantry", selected: false, qty: 1 },
    { id: 5, name: "Sesame Oil", category: "pantry", selected: false, qty: 1 },
    { id: 6, name: "Tofu", category: "protein", selected: false, qty: 1 },
  ],
  "berry smoothie": [
    { id: 1, name: "Blueberries", category: "fruit", selected: false, qty: 1 },
    { id: 2, name: "Strawberries", category: "fruit", selected: false, qty: 1 },
    { id: 3, name: "Banana", category: "fruit", selected: false, qty: 1 },
    { id: 4, name: "Greek Yogurt", category: "dairy", selected: false, qty: 1 },
    { id: 5, name: "Almond Milk", category: "pantry", selected: false, qty: 1 },
    { id: 6, name: "Chia Seeds", category: "pantry", selected: false, qty: 1 },
  ],
  "grilled salmon": [
    { id: 1, name: "Salmon Fillet", category: "protein", selected: false, qty: 1 },
    { id: 2, name: "Lemon", category: "fruit", selected: false, qty: 1 },
    { id: 3, name: "Asparagus", category: "vegetable", selected: false, qty: 1 },
    { id: 4, name: "Olive Oil", category: "pantry", selected: false, qty: 1 },
    { id: 5, name: "Garlic", category: "spice", selected: false, qty: 1 },
  ],
  "oats bowl": [
    { id: 1, name: "Rolled Oats", category: "grain", selected: false, qty: 1 },
    { id: 2, name: "Almond Milk", category: "pantry", selected: false, qty: 1 },
    { id: 3, name: "Blueberries", category: "fruit", selected: false, qty: 1 },
    { id: 4, name: "Walnuts", category: "pantry", selected: false, qty: 1 },
    { id: 5, name: "Honey", category: "pantry", selected: false, qty: 1 },
  ],
  "paneer tikka": [
    { id: 1, name: "Paneer", category: "protein", selected: false, qty: 1 },
    { id: 2, name: "Greek Yogurt", category: "dairy", selected: false, qty: 1 },
    { id: 3, name: "Bell Pepper", category: "vegetable", selected: false, qty: 1 },
    { id: 4, name: "Tomato", category: "vegetable", selected: false, qty: 1 },
    { id: 5, name: "Tandoori Masala", category: "spice", selected: false, qty: 1 },
  ],
  "fish tacos": [
    { id: 1, name: "White Fish", category: "protein", selected: false, qty: 1 },
    { id: 2, name: "Tortillas", category: "pantry", selected: false, qty: 1 },
    { id: 3, name: "Avocado", category: "fruit", selected: false, qty: 1 },
    { id: 4, name: "Red Cabbage", category: "vegetable", selected: false, qty: 1 },
    { id: 5, name: "Lime", category: "fruit", selected: false, qty: 1 },
  ],
  "green salad": [
    { id: 1, name: "Mixed Greens", category: "vegetable", selected: false, qty: 1 },
    { id: 2, name: "Cucumber", category: "vegetable", selected: false, qty: 1 },
    { id: 3, name: "Cherry Tomatoes", category: "vegetable", selected: false, qty: 1 },
    { id: 4, name: "Feta", category: "dairy", selected: false, qty: 1 },
    { id: 5, name: "Olive Oil", category: "pantry", selected: false, qty: 1 },
  ],
  "pasta primavera": [
    { id: 1, name: "Pasta", category: "grain", selected: false, qty: 1 },
    { id: 2, name: "Zucchini", category: "vegetable", selected: false, qty: 1 },
    { id: 3, name: "Cherry Tomatoes", category: "vegetable", selected: false, qty: 1 },
    { id: 4, name: "Parmesan", category: "dairy", selected: false, qty: 1 },
    { id: 5, name: "Basil", category: "vegetable", selected: false, qty: 1 },
  ],
};

const fallbackItems: GroceryItem[] = [
  { id: 1, name: "Quinoa", category: "pantry", selected: false, qty: 1 },
  { id: 2, name: "Spinach", category: "vegetable", selected: false, qty: 1 },
  { id: 3, name: "Greek Yogurt", category: "dairy", selected: false, qty: 1 },
  { id: 4, name: "Eggs", category: "protein", selected: false, qty: 1 },
  { id: 5, name: "Bananas", category: "fruit", selected: false, qty: 1 },
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

  const vegetableItems = groceryItems.filter(
    (item) => item.category === "vegetable" || item.category === "fruit"
  );
  const mainItems = groceryItems.filter(
    (item) => item.category !== "vegetable" && item.category !== "fruit"
  );

  const totalSelected = groceryItems.filter((item) => item.selected).length;
  const totalQty = groceryItems.reduce((sum, item) => sum + item.qty, 0);

  const quickSuggestions = [
    "Chicken Biryani",
    "Vegetable Stir Fry",
    "Berry Smoothie",
    "Grilled Salmon",
    "Oats Bowl",
    "Paneer Tikka",
  ];

  const selectSuggestion = (suggestion: string) => {
    setDish(suggestion);
    setGroceryItems(generateHealthyList(suggestion));
  };

  const selectedDishLabel = dish.trim()
    ? dish
        .trim()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    : "Your dish";

  const healthMessage = dish.trim().toLowerCase() === "chicken biryani"
    ? "Chicken Biryani is a hearty match for your Muscle Gain plan."
    : dish.trim()
    ? `Your ${selectedDishLabel} grocery list is balanced for protein, fiber, and flavor.`
    : "Generate a grocery list to see AI health insights and meal suggestions.";

  return (
    <PageTransition>
    <>
      <style>{`
* {
  box-sizing: border-box;
}

:root {
  color-scheme: light;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #f5f7f8;
  color: #142d33;
}

body,
html {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #f5f7f8;
}

button,
input {
  font: inherit;
}

.grocery-page {
  min-height: 100vh;
  width: 100%;
  padding: 32px;
  background: #f5f7f8;
}

.sidebar {
  position: sticky;
  top: 32px;
  height: fit-content;
  background: #ffffff;
  border-radius: 24px;
  padding: 28px 24px;
  display: grid;
  gap: 34px;
  box-shadow: 0 20px 45px rgba(13, 103, 120, 0.12);
}

.brand-panel {
  display: flex;
  align-items: center;
  gap: 16px;
}

.brand-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: white;
  display: grid;
  place-items: center;
  box-shadow: 0 12px 28px rgba(13, 103, 120, 0.12);
}

.brand-icon img,
.meal-brand-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.brand-label {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #0d6b78;
}

.brand-subtitle {
  margin: 6px 0 0;
  color: #6f848e;
  font-size: 13px;
}

.sidebar-menu {
  display: grid;
  gap: 12px;
}

.menu-item {
  border: none;
  width: 100%;
  text-align: left;
  padding: 14px 18px;
  border-radius: 20px;
  background: transparent;
  color: #4f6b75;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease;
}

.menu-item:hover,
.menu-item.active {
  background: #0d6b78;
  color: white;
}

.profile-card {
  display: grid;
  gap: 16px;
  padding: 22px;
  border-radius: 24px;
  background: #d9f4f8;
}

.avatar-placeholder {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: #0d6b78;
  color: white;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 18px;
}

.profile-copy {
  display: grid;
  gap: 6px;
}

.profile-name {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
}

.profile-status {
  margin: 0;
  font-size: 13px;
  color: #4f6b75;
}

.upgrade-button {
  border: none;
  border-radius: 999px;
  padding: 12px 16px;
  background: #0d6b78;
  color: white;
  cursor: pointer;
  font-weight: 700;
}

.main-content {
  display: grid;
  gap: 28px;
}

.hero-panel {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 18px;
}

.hero-panel h1 {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: clamp(2rem, 3vw, 3.2rem);
  font-weight: 700;
  line-height: 1.2;
  color: #0B7285;
  letter-spacing: -0.5px;
}

.hero-description {
  margin: 16px 0 0;
  max-width: 680px;
  color: #4c6570;
  font-size: 16px;
  line-height: 1.8;
}

.goal-badge {
  padding: 12px 18px;
  border-radius: 999px;
  background: #d9f4f8;
  color: #0d6b78;
  font-weight: 700;
  font-size: 13px;
}

.search-panel {
  display: grid;
  grid-template-columns: 1fr 180px;
  gap: 18px;
  align-items: center;
}

.search-input {
  width: 100%;
  border: none;
  border-radius: 22px;
  padding: 22px 24px;
  background: white;
  box-shadow: inset 0 3px 18px rgba(13, 103, 120, 0.08);
  color: #132f38;
  font-size: 16px;
  outline: none;
}

.quick-suggestions {
  display: grid;
  gap: 14px;
  padding: 18px 0 0;
}

.quick-suggestions p {
  margin: 0;
  color: #4f6b75;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.suggestion-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.suggestion-button {
  border: none;
  border-radius: 999px;
  padding: 12px 16px;
  background: #f1fbfc;
  color: #0d6b78;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease;
}

.suggestion-button:hover {
  background: #d9f4f8;
  transform: translateY(-1px);
}

@media (max-width: 760px) {
  .suggestion-list {
    grid-template-columns: 1fr;
  }
}

.generate-button {
  border: none;
  border-radius: 22px;
  padding: 18px 24px;
  background: #0d6b78;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 16px 30px rgba(13, 103, 120, 0.18);
}

.secondary-button {
  border: none;
  border-radius: 22px;
  padding: 18px 24px;
  background: #f1fbfc;
  color: #0d6b78;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

.secondary-button:hover {
  background: #d9f4f8;
}

.action-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.copy-feedback {
  margin: 12px 0 0;
  color: #0d6b78;
  font-size: 14px;
  font-weight: 700;
}

.filter-panel {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.filter-chip {
  border: 1px solid #d9f4f8;
  border-radius: 999px;
  background: #f7fbfb;
  color: #0d6b78;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

.filter-chip:hover {
  background: #d9f4f8;
}

.filter-chip.active {
  background: #0d6b78;
  color: white;
  border-color: transparent;
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(280px, 1fr) minmax(360px, 1.4fr) minmax(280px, 1fr);
  gap: 24px;
}

.column {
  display: grid;
  gap: 24px;
}

.card {
  background: white;
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 20px 45px rgba(13, 103, 120, 0.08);
}

.card h2,
.card-title {
  margin: 0;
  font-size: 19px;
  color: #142d33;
  font-weight: 700;
}

.item-list {
  display: grid;
  gap: 16px;
  margin-top: 18px;
}

.item-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px;
  padding: 16px 18px;
  border-radius: 20px;
  background: #f7fbfb;
}

.select-marker {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #0d6b78;
  background: transparent;
  color: #0d6b78;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.select-marker.selected {
  background: #0d6b78;
  color: white;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-controls button {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 12px;
  background: #0d6b78;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.quantity-controls span {
  min-width: 24px;
  text-align: center;
  font-weight: 700;
  color: #142d33;
}

.empty-text {
  margin: 0;
  color: #6b828d;
  font-size: 15px;
}

.health-card {
  display: grid;
  gap: 22px;
}

.health-header {
  display: flex;
  gap: 18px;
  align-items: center;
}

.health-icon {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #0d6b78;
  color: white;
  display: grid;
  place-items: center;
  font-size: 24px;
  box-shadow: 0 16px 30px rgba(13, 103, 120, 0.18);
}

.health-subtitle,
.promo-label {
  margin: 6px 0 0;
  color: #5f7b83;
  font-size: 14px;
}

.health-copy {
  margin: 0;
  color: #4a6570;
  line-height: 1.8;
  font-size: 15px;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.stat-card {
  background: #d9f4f8;
  border-radius: 22px;
  padding: 18px 20px;
}

.stat-card p {
  margin: 0 0 8px;
  color: #4f6b75;
  font-size: 13px;
}

.stat-card strong {
  font-size: 24px;
  color: #142d33;
}

.adjustments {
  background: #eff9fb;
  padding: 20px 22px;
  border-radius: 22px;
}

.adjustments-heading {
  margin: 0 0 12px;
  font-weight: 700;
  color: #0d6b78;
}

.adjustments ul {
  margin: 0;
  padding-left: 20px;
  color: #4a6b74;
  line-height: 1.8;
}

.adjustments li {
  margin-bottom: 10px;
}

.smart-panel {
  display: grid;
  gap: 18px;
}

.mini-card {
  background: #d9f4f8;
  border-radius: 22px;
  padding: 22px;
}

.mini-title {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0d6b78;
}

.mini-card p {
  margin: 0;
  color: #142d33;
  font-size: 16px;
  font-weight: 600;
}

.promo-card {
  position: relative;
  overflow: hidden;
  border-radius: 26px;
  min-height: 220px;
  display: flex;
  align-items: flex-end;
  padding: 24px;
  color: white;
  background-image: linear-gradient(180deg, rgba(13, 103, 120, 0.44), rgba(13, 103, 120, 0.82)),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='360' height='260' viewBox='0 0 360 260'%3E%3Crect width='360' height='260' fill='%23d9f4f8'/%3E%3Ccircle cx='260' cy='80' r='70' fill='%230d6b78' fill-opacity='0.32'/%3E%3Ccircle cx='90' cy='170' r='100' fill='%230d6b78' fill-opacity='0.18'/%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
}

.promo-copy {
  position: relative;
  z-index: 1;
}

.promo-label {
  margin: 0 0 10px;
}

.promo-card h3 {
  margin: 0;
  font-size: 24px;
  line-height: 1.15;
}

.page-footer {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 22px 24px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 45px rgba(13, 103, 120, 0.08);
}

.footer-left,
.footer-center,
.footer-right {
  color: #4a6b74;
  font-size: 14px;
}

.footer-right {
  display: flex;
  gap: 24px;
}

.footer-right a {
  color: #4a6b74;
  text-decoration: none;
}

@media (max-width: 1200px) {
  .grocery-page {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: relative;
    top: 0;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .search-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .grocery-page {
    padding: 20px;
  }

  .hero-panel,
  .page-footer {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-panel {
    gap: 14px;
  }

  .goal-badge {
    justify-self: start;
  }

  .page-footer {
    text-align: center;
  }

  .footer-right {
    justify-content: center;
    flex-wrap: wrap;
  }
}
      `}</style>
      <div className="grocery-page">
      

      <main className="main-content">
        <section className="hero-panel">
          <div>
           <h1 className="text-4xl text-cyan-700 font-bold mb-8">
          Grocery Generator
        </h1>
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

        <section className="quick-suggestions">
          <p>Quick meal ideas</p>
          <div className="suggestion-list">
            {quickSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className="suggestion-button"
                onClick={() => selectSuggestion(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </section>

        <section className="content-grid">
          <div className="column column-left">
            <article className="card">
                  <h2>Vegetables & Fruits</h2>
              <div className="item-list">
                {vegetableItems.length > 0 ? (
                  vegetableItems.map((item) => (
                    <div className="item-row" key={item.id}>
                      <button
                        type="button"
                        className={`select-marker ${item.selected ? "selected" : ""}`}
                        onClick={() => toggleItemSelected(item.id)}
                        aria-label={`Select ${item.name}`}
                      >
                        {item.selected ? "✓" : ""}
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
                  <p className="empty-text">Generate a grocery list to view vegetables here.</p>
                )}
              </div>
            </article>

            <article className="card">
              <h2>Proteins, Pantry & More</h2>
              <div className="item-list">
                {mainItems.length > 0 ? (
                  mainItems.map((item) => (
                    <div className="item-row" key={item.id}>
                      <button
                        type="button"
                        className={`select-marker ${item.selected ? "selected" : ""}`}
                        onClick={() => toggleItemSelected(item.id)}
                        aria-label={`Select ${item.name}`}
                      >
                        {item.selected ? "✓" : ""}
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
                <div className="health-icon">✓</div>
                <div>
                  <p className="card-title">AI Health Check</p>
                  <p className="health-subtitle">Intelligent meal insights for your nutritional plan.</p>
                </div>
              </div>
              <p className="health-copy">{healthMessage}</p>
              <div className="stats-row">
                <div className="stat-card">
                  <p>Items Generated</p>
                  <strong>{groceryItems.length}</strong>
                </div>
                <div className="stat-card">
                  <p>Selected Items</p>
                  <strong>{totalSelected}</strong>
                </div>
              </div>
              <div className="adjustments">
                <p className="adjustments-heading">Smart Meal Notes:</p>
                <ul>
                  <li>Keep your plates colorful for better vitamins.</li>
                  <li>Swap plain rice for grains to boost fiber.</li>
                </ul>
              </div>
            </article>

            <article className="card">
              <h2>Shopping Summary</h2>
              <div className="item-list">
                <div className="item-row">
                  <span>Total ingredients</span>
                  <strong>{groceryItems.length}</strong>
                </div>
                <div className="item-row">
                  <span>Total quantity</span>
                  <strong>{totalQty}</strong>
                </div>
                <div className="item-row">
                  <span>Picked items</span>
                  <strong>{totalSelected}</strong>
                </div>
              </div>
            </article>
          </div>

          <div className="column column-right">
            <div className="smart-panel">
              <article className="mini-card">
                <p className="mini-title">Fiber Boost</p>
                <p>Quinoa or whole grains add staying power.</p>
              </article>
              <article className="mini-card">
                <p className="mini-title">Gut Health</p>
                <p>Fermented yogurt supports digestion.</p>
              </article>
              <article className="mini-card">
                <p className="mini-title">Flavor Upgrade</p>
                <p>Fresh herbs make healthy meals delicious.</p>
              </article>
            </div>
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
    </>
    </PageTransition>
  );
}