"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function QuestionPage() {
  const router = useRouter();
  const [noSize, setNoSize] = useState(16);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f4c2c2", // Suede Pink
        fontFamily: "'Playfair Display', serif", // Matched with HomePage
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "3rem", // Matched with home page styling
          marginBottom: "20px",
          color: "#9b5050", // Darker pink for better contrast
          fontWeight: "700", // Bold for clarity
          letterSpacing: "1px",
        }}
      >
        Do you really think we should go on no contact?
      </h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          style={{
            padding: "15px 30px",
            fontSize: "1.2rem",
            backgroundColor: "#d1a3a4", // Lighter for Yes
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "transform 0.2s ease",
            fontFamily: "'Poppins', sans-serif", // Matched button styling
            fontWeight: "bold",
          }}
          onClick={() => setNoSize(noSize + 10)}
        >
          Yes
        </button>
        <button
          style={{
            padding: "15px 30px",
            fontSize: `${noSize}px`,
            backgroundColor: "#ffaaaa", // Darker for No (Same as HomePage button)
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            fontFamily: "'Poppins', sans-serif", // Matched button styling
            fontWeight: "bold",
          }}
          onClick={() => router.push("/final")}
        >
          No
        </button>
      </div>
    </div>
  );
}
