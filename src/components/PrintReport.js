// src/components/PrintReport.js
// This component adds a Print / Download Report button
// When clicked it opens the browser print dialog
// The user can save it as PDF from there

import React from "react";
import dummyData from "../data/dummyData";

function PrintReport() {
  // Get user details from localStorage
  const role = localStorage.getItem("role");
  const user = localStorage.getItem("user");

  // ---- Print Function ----
  const handlePrint = () => {
    // Create a new window for printing
    const printWindow = window.open("", "_blank");

    // Get current date for the report
    const currentDate = new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Build the HTML content of the report
    const reportContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Academic Performance Report</title>
          <style>
            /* Print styles */
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              color: #2c3e50;
            }
            .header {
              text-align: center;
              border-bottom: 3px solid #2c3e50;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .header h1 {
              font-size: 24px;
              margin: 0 0 6px 0;
              color: #2c3e50;
            }
            .header p {
              font-size: 13px;
              color: #7f8c8d;
              margin: 4px 0;
            }
            .section {
              margin-bottom: 30px;
            }
            .section h2 {
              font-size: 16px;
              color: #2c3e50;
              border-left: 4px solid #3498db;
              padding-left: 10px;
              margin-bottom: 14px;
            }
            .info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 10px;
              margin-bottom: 20px;
            }
            .info-item {
              background: #f8f9fa;
              padding: 10px 14px;
              border-radius: 6px;
            }
            .info-label {
              font-size: 11px;
              color: #7f8c8d;
              text-transform: uppercase;
              margin: 0 0 4px 0;
            }
            .info-value {
              font-size: 14px;
              font-weight: bold;
              color: #2c3e50;
              margin: 0;
              text-transform: capitalize;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              font-size: 13px;
            }
            th {
              background-color: #2c3e50;
              color: white;
              padding: 10px 14px;
              text-align: left;
            }
            td {
              padding: 10px 14px;
              border-bottom: 1px solid #ecf0f1;
            }
            tr:nth-child(even) {
              background-color: #f8f9fa;
            }
            .pass {
              color: #27ae60;
              font-weight: bold;
            }
            .fail {
              color: #e74c3c;
              font-weight: bold;
            }
            .stats-row {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 12px;
              margin-bottom: 20px;
            }
            .stat-box {
              background: #f8f9fa;
              padding: 14px;
              border-radius: 8px;
              text-align: center;
              border-top: 3px solid #3498db;
            }
            .stat-value {
              font-size: 24px;
              font-weight: bold;
              color: #2c3e50;
              margin: 0 0 4px 0;
            }
            .stat-label {
              font-size: 11px;
              color: #7f8c8d;
              margin: 0;
            }
            .footer {
              margin-top: 40px;
              padding-top: 16px;
              border-top: 1px solid #ecf0f1;
              text-align: center;
              font-size: 12px;
              color: #7f8c8d;
            }
            .badge-pass {
              background: #27ae60;
              color: white;
              padding: 2px 8px;
              border-radius: 10px;
              font-size: 11px;
            }
            .badge-fail {
              background: #e74c3c;
              color: white;
              padding: 2px 8px;
              border-radius: 10px;
              font-size: 11px;
            }
          </style>
        </head>
        <body>

          <!-- Report Header -->
          <div class="header">
            <h1>Academic Performance Report</h1>
            <p>Academic Performance Analysis and Visualization System</p>
            <p>Generated on: ${currentDate}</p>
            <p>Role: ${role} &nbsp;|&nbsp; User: ${user}</p>
          </div>

          <!-- Stats Summary -->
          <div class="section">
            <h2>Performance Summary</h2>
            <div class="stats-row">
              <div class="stat-box">
                <p class="stat-value">${dummyData.stats.averageScore}%</p>
                <p class="stat-label">Average Score</p>
              </div>
              <div class="stat-box">
                <p class="stat-value">${dummyData.stats.passPercentage}%</p>
                <p class="stat-label">Pass Percentage</p>
              </div>
              <div class="stat-box">
                <p class="stat-value">${dummyData.stats.topScore}</p>
                <p class="stat-label">Top Score</p>
              </div>
              <div class="stat-box">
                <p class="stat-value">${dummyData.stats.totalStudents}</p>
                <p class="stat-label">Total Students</p>
              </div>
            </div>
          </div>

          <!-- Student Info -->
          <div class="section">
            <h2>Student Information</h2>
            <div class="info-grid">
              <div class="info-item">
                <p class="info-label">Name</p>
                <p class="info-value">${user}</p>
              </div>
              <div class="info-item">
                <p class="info-label">Role</p>
                <p class="info-value">${role}</p>
              </div>
              <div class="info-item">
                <p class="info-label">Department</p>
                <p class="info-value">Computer Science</p>
              </div>
              <div class="info-item">
                <p class="info-label">Academic Year</p>
                <p class="info-value">2023 - 2024</p>
              </div>
            </div>
          </div>

          <!-- Results Table -->
          <div class="section">
            <h2>Subject-wise Results</h2>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Subject</th>
                  <th>Marks</th>
                  <th>Max Marks</th>
                  <th>Grade</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${dummyData.studentResults
                  .map(
                    (result, index) => `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${result.subject}</td>
                    <td class="${result.marks < 40 ? "fail" : "pass"}">
                      ${result.marks}
                    </td>
                    <td>${result.maxMarks}</td>
                    <td>${result.grade}</td>
                    <td>
                      <span class="${result.marks < 40 ? "badge-fail" : "badge-pass"}">
                        ${result.marks < 40 ? "FAIL" : "PASS"}
                      </span>
                    </td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>

          <!-- Footer -->
          <div class="footer">
            <p>This is a system generated report from Academic Performance Analysis System</p>
            <p>Generated on ${currentDate}</p>
          </div>

        </body>
      </html>
    `;

    // Write content to new window and print
    printWindow.document.write(reportContent);
    printWindow.document.close();

    // Wait for content to load then print
    printWindow.onload = () => {
      printWindow.print();
    };
  };

  // ---- Styles ----
  const buttonStyle = {
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    fontSize: "14px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
  };

  return (
    <div>
      <button
        style={buttonStyle}
        onClick={handlePrint}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#219a52";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#27ae60";
        }}
      >
        🖨️ Print / Download Report
      </button>
    </div>
  );
}

export default PrintReport;