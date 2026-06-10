export default function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        background: "#ffffff",
        borderRight: "1px solid #e5e5e5",
        padding: "25px",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <h1
        style={{
          color: "#0B6A77",
          marginBottom: "40px",
        }}
      >
        NutriPlan
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <a href="/" style={{ color: "#333", textDecoration: "none" }}>
          Dashboard
        </a>

        <a
          href="/diet-plan"
          style={{ color: "#333", textDecoration: "none" }}
        >
          Meal Planner
        </a>

        <a
          href="/grocery-generator"
          style={{ color: "#333", textDecoration: "none" }}
        >
          Grocery List
        </a>

        <a href="#" style={{ color: "#333", textDecoration: "none" }}>
          Analytics
        </a>

        <a href="#" style={{ color: "#333", textDecoration: "none" }}>
          Settings
        </a>
      </div>
    </div>
  );
}