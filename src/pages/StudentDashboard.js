// src/pages/StudentDashboard.js
// This page shows the student dashboard
// It includes stat cards, charts and results table

import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PrintReport from "../components/PrintReport";
import dummyData from "../data/dummyData";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, LineChart,
  Line, Legend,
} from "recharts";

function StudentDashboard() {

  // Recent grades table data
  const recentGrades = [
    { id: 101, course: "Data Mining", marks: 88, grade: "B+" },
    { id: 102, course: "Neural Network", marks: 92, grade: "A" },
    { id: 103, course: "Machine Learning", marks: 76, grade: "C" },
    { id: 104, course: "Data Science", marks: 95, grade: "A+" },
    { id: 105, course: "Distributed System", marks: 89, grade: "B+" },
  ];

  // Bar chart data - subject wise performance
  const performanceData = [
    { subject: "Data Mining", score: 88, average: 75 },
    { subject: "Neural Network", score: 92, average: 78 },
    { subject: "Machine Learning", score: 76, average: 70 },
    { subject: "Data Science", score: 95, average: 80 },
  ];

  // Line chart data - performance trend over months
  const gradesLineData = [
    { month: "Jan", score: 65 },
    { month: "Feb", score: 70 },
    { month: "Mar", score: 68 },
    { month: "Apr", score: 75 },
    { month: "May", score: 82 },
  ];

  // ---- Styles ----

  const pageStyle = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
  };

  const mainContentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  };

  const bodyStyle = {
    padding: "20px",
    flex: 1,
  };

  const headingRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "10px",
  };

  // Stat cards row - wraps on mobile
  const statsRowStyle = {
    display: "flex",
    gap: "12px",
    marginBottom: "20px",
    flexWrap: "wrap",
  };

  // Each stat card grows and shrinks responsively
  const statCardStyle = (color) => ({
    flex: "1 1 140px",
    backgroundColor: color,
    borderRadius: "10px",
    padding: "16px",
    color: "white",
  });

  const statLabelStyle = {
    fontSize: "12px",
    opacity: 0.9,
    margin: "0 0 6px 0",
  };

  const statValueStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    margin: 0,
  };

  // White card used for charts and tables
  const chartCardStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
  };

  const chartTitleStyle = {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: "14px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "13px",
  };

  const thStyle = {
    textAlign: "left",
    padding: "10px 12px",
    backgroundColor: "#f8f9fa",
    color: "#555",
    fontWeight: "600",
    borderBottom: "2px solid #eee",
    whiteSpace: "nowrap",
  };

  const tdStyle = {
    padding: "10px 12px",
    borderBottom: "1px solid #f0f0f0",
    color: "#333",
    whiteSpace: "nowrap",
  };

  // Returns a colored badge for each grade
  const getGradeBadge = (grade) => {
    const colors = {
      "A+": "#27ae60",
      "A": "#2ecc71",
      "B+": "#3498db",
      "B": "#5dade2",
      "C": "#e67e22",
      "D": "#e74c3c",
      "F": "#c0392b",
    };
    return (
      <span style={{
        backgroundColor: colors[grade] || "#95a5a6",
        color: "white",
        padding: "3px 10px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: "bold",
      }}>
        {grade}
      </span>
    );
  };

  return (
    <div style={pageStyle}>
      <Sidebar />
      <div style={mainContentStyle}>
        <Navbar />
        <div style={bodyStyle}>

          {/* Heading and Print Button */}
          <div style={headingRowStyle}>
            <h2 style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#1a1a2e",
              margin: 0,
            }}>
              Student Dashboard
            </h2>
            <PrintReport />
          </div>

          {/* Stat Cards - using dummyData */}
          <div style={statsRowStyle}>
            <div style={statCardStyle("#3a86ff")}>
              <p style={statLabelStyle}>Average Score</p>
              <p style={statValueStyle}>
                {dummyData.stats.averageScore}%
              </p>
            </div>
            <div style={statCardStyle("#2ecc71")}>
              <p style={statLabelStyle}>Total Subjects</p>
              <p style={statValueStyle}>
                {dummyData.studentResults.length}
              </p>
            </div>
            <div style={statCardStyle("#ff6b35")}>
              <p style={statLabelStyle}>Top Score</p>
              <p style={statValueStyle}>
                {dummyData.stats.topScore}
              </p>
            </div>
            <div style={statCardStyle("#9b59b6")}>
              <p style={statLabelStyle}>Pass %</p>
              <p style={statValueStyle}>
                {dummyData.stats.passPercentage}%
              </p>
            </div>
          </div>

          {/* Performance Overview Bar Chart */}
          <div style={chartCardStyle}>
            <p style={chartTitleStyle}>Performance Overview</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="subject" tick={{ fontSize: 11 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="score"
                  fill="#3a86ff"
                  radius={[4, 4, 0, 0]}
                  name="Your Score"
                />
                <Bar
                  dataKey="average"
                  fill="#a8d8ea"
                  radius={[4, 4, 0, 0]}
                  name="Class Average"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Trend Line Chart */}
          <div style={chartCardStyle}>
            <p style={chartTitleStyle}>Performance Trend</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={gradesLineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#3a86ff"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#3a86ff" }}
                  name="Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Subject wise Results Table using dummyData */}
          <div style={chartCardStyle}>
            <p style={chartTitleStyle}>Subject wise Results</p>
            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>#</th>
                    <th style={thStyle}>Subject</th>
                    <th style={thStyle}>Marks</th>
                    <th style={thStyle}>Max</th>
                    <th style={thStyle}>Grade</th>
                    <th style={thStyle}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyData.studentResults.map((row, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "white" : "#fafafa",
                      }}
                    >
                      <td style={{ ...tdStyle, color: "#7f8c8d" }}>
                        {index + 1}
                      </td>
                      <td style={tdStyle}>{row.subject}</td>
                      <td style={{
                        ...tdStyle,
                        fontWeight: "bold",
                        color: row.marks < 40 ? "#e74c3c" : "#27ae60",
                      }}>
                        {row.marks}
                      </td>
                      <td style={tdStyle}>{row.maxMarks}</td>
                      <td style={tdStyle}>
                        {getGradeBadge(row.grade)}
                      </td>
                      <td style={tdStyle}>
                        <span style={{
                          backgroundColor:
                            row.marks < 40 ? "#e74c3c" : "#27ae60",
                          color: "white",
                          padding: "3px 10px",
                          borderRadius: "12px",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}>
                          {row.marks < 40 ? "FAIL" : "PASS"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Grades Table */}
          <div style={chartCardStyle}>
            <p style={chartTitleStyle}>Recent Grades</p>
            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>ID</th>
                    <th style={thStyle}>Course</th>
                    <th style={thStyle}>Marks</th>
                    <th style={thStyle}>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {recentGrades.map((row, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "white" : "#fafafa",
                      }}
                    >
                      <td style={tdStyle}>{row.id}</td>
                      <td style={tdStyle}>{row.course}</td>
                      <td style={tdStyle}>{row.marks}</td>
                      <td style={tdStyle}>
                        {getGradeBadge(row.grade)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;