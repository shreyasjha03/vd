"use client";
import { useEffect, useState } from "react";

export default function FinalPage() {
  const [showSparkles, setShowSparkles] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowSparkles(false), 5000);
  }, []);

  const handleTimeSelection = (time: string) => {
    alert(`DONE! SEE YOU AT ${time}!`);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f4c2c2", // Suede Pink
        fontFamily: "'Playfair Display', serif",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {showSparkles && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
          {Array.from({ length: 15 }).map((_, i) => (
            <span
              key={i}
              style={{
                position: "absolute",
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                fontSize: `${Math.random() * 20 + 10}px`,
                opacity: Math.random(),
                animation: "floatUp 3s ease-in-out infinite",
              }}
            >
              ✨
            </span>
          ))}
        </div>
      )}

      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "10px",
          fontWeight: "700",
          color: "#9b5050",
          letterSpacing: "1px",
        }}
      >
        I knew that it was not a good idea.
      </h1>
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          animation: "fadeIn 2s ease-in-out",
          color: "#9b5050",
        }}
      >
        What time are we meeting today?
      </h2>

      {/* Time Selection Buttons */}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {["7:00", "8:00", "9:00", "10:00", "11:00", "12:00"].map((time) => (
          <button
            key={time}
            onClick={() => handleTimeSelection(time)}
            style={{
              padding: "12px 25px",
              fontSize: "1.2rem",
              backgroundColor: "#ffaaaa", // Matched main page button color
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontWeight: "bold",
              fontFamily: "'Poppins', sans-serif",
              boxShadow: "0px 3px 8px rgba(255, 170, 170, 0.5)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#e59494"; // Darker on hover
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#ffaaaa";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {time}
          </button>
        ))}
      </div>

      {/* Keyframe animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes floatUp {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(-50px); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
