"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#e8b4b8", // Suede pink
        fontFamily: "'Playfair Display', serif",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          opacity: fade ? 1 : 0,
          transition: "opacity 2s ease-in-out",
          color: "#9b5050", // Darker pink for better visibility
          fontWeight: "700", // Bolder for clarity
          letterSpacing: "1px",
        }}
      >
        Hi Vibhawari Dhoble
      </h1>
      <button
        style={{
          marginTop: "20px",
          padding: "12px 35px",
          fontSize: "1.2rem",
          border: "none",
          backgroundColor: "#ffaaaa", // Same as "No" button
          color: "white",
          borderRadius: "50px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          fontWeight: "bold",
          fontFamily: "'Poppins', sans-serif",
          boxShadow: "0px 3px 8px rgba(255, 170, 170, 0.5)",
        }}
        onClick={() => router.push("/question")}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#e59494"; // Darker on hover
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#ffaaaa";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        Click Here
      </button>
    </div>
  );
}
