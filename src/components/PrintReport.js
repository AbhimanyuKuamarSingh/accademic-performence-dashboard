import React, { useState } from "react";

function PrintReport() {
  const [printing, setPrinting] = useState(false);

  const user = localStorage.getItem("user") || "User";
  const role = localStorage.getItem("role") || "user";

  const handlePrint = () => {
    setPrinting(true);
    setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 300);
  };

  const currentDate = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* This header shows ONLY when printing */}
      {/* It is hidden on screen */}
      <div
        style={{
          display: "none",
          borderBottom: "2px solid #1e293b",
          paddingBottom: "12px",
          marginBottom: "16px",
        }}
        className="print-only-header"
      >
        <h1 style={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "#1e293b",
          margin: "0 0 4px",
          textAlign: "center",
        }}>
          LNCT Campus Bhopal
        </h1>
        <p style={{
          fontSize: "13px",
          color: "#64748b",
          margin: "0 0 2px",
          textAlign: "center",
        }}>
          Laxminarayan College of Technology, Bhopal
        </p>
        <p style={{
          fontSize: "14px",
          fontWeight: "bold",
          color: "#1e293b",
          margin: "8px 0 2px",
          textAlign: "center",
        }}>
          Academic Performance Analysis Report
        </p>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "8px",
          fontSize: "12px",
          color: "#64748b",
        }}>
          <span>Name: {user}</span>
          <span>Role: {role}</span>
          <span>Date: {currentDate}</span>
        </div>
      </div>

      {/* Print Button - hidden when printing */}
      <button
        onClick={handlePrint}
        disabled={printing}
        className="no-print"
        style={{
          backgroundColor: printing ? "#94a3b8" : "#10b981",
          color: "white",
          border: "none",
          padding: "9px 18px",
          borderRadius: "8px",
          fontSize: "13px",
          fontWeight: "600",
          cursor: printing ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
        onMouseEnter={(e) => {
          if (!printing) e.currentTarget.style.opacity = "0.9";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
      >
        {printing ? "⏳ Preparing..." : "🖨️ Print Report"}
      </button>

      {/* Show print header only when printing */}
      <style>{`
        @media print {
          .print-only-header {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}

export default PrintReport;