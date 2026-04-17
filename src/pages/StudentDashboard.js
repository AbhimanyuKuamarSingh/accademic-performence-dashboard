// ============================================
// StudentDashboard.js
// ============================================
// PURPOSE:
//   Shows the student dashboard with
//   stat cards, charts and grades table
// ============================================

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
    { id: 103, course: "Data Science", marks: 76, grade: "C" },
    { id: 104, course: "Distributed System", marks: 95, grade: "A+" },
    { id: 105, course: "Minor Project", marks: 89, grade: "B+" },
  ];

  // Performance overview chart data
  const performanceData = [
    { subject: "Data Mining", score: 88, average: 75 },
    { subject: "Neural Network", score: 92, average: 78 },
    { subject: "Distributed System", score: 76, average: 70 },
    { subject: "Data Science", score: 95, average: 80 },
  ];

  // Recent grades line chart data
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
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1a1a2e",
    margin: 0,
  };

  const statsRowStyle = {
    display: "flex",
    gap: "16px",
    marginBottom: "20px",
    flexWrap: "wrap",
  };

  const statCardStyle = (color) => ({
    flex: 1,
    backgroundColor: color,
    borderRadius: "10px",
    padding: "16px 20px",
    color: "white",
    minWidth: "140px",
  });

  const statLabelStyle = {
    fontSize: "13px",
    opacity: 0.9,
    margin: "0 0 6px 0",
  };

  const statValueStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    margin: 0,
  };

  const chartCardStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "16px 20px",
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
  };

  const tdStyle = {
    padding: "10px 12px",
    borderBottom: "1px solid #f0f0f0",
    color: "#333",
  };

  // Grade badge with color based on grade
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

          {/* Heading Row */}
          <div style={headingRowStyle}>
            <h2 style={headingStyle}>Student Dashboard</h2>
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
              <p style={statLabelStyle}>Pass Percentage</p>
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
                <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
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

          {/* Recent Grades Line Chart */}
          <div style={chartCardStyle}>
            <p style={chartTitleStyle}>Performance Trend</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={gradesLineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#3a86ff"
                  strokeWidth={2}
                  dot={{ r: 5, fill: "#3a86ff" }}
                  name="Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Grades Table - using dummyData */}
          <div style={chartCardStyle}>
            <p style={chartTitleStyle}>Subject wise Results</p>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>#</th>
                  <th style={thStyle}>Subject</th>
                  <th style={thStyle}>Marks</th>
                  <th style={thStyle}>Max Marks</th>
                  <th style={thStyle}>Grade</th>
                  <th style={thStyle}>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Using dummyData.studentResults to show table */}
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

          {/* Recent Grades Table using local data */}
          <div style={chartCardStyle}>
            <p style={chartTitleStyle}>Recent Grades</p>
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
                    <td style={tdStyle}>{getGradeBadge(row.grade)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;