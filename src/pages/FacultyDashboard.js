// src/pages/FacultyDashboard.js
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PrintReport from "../components/PrintReport";
import AnimatedStatCard from "../components/AnimatedStatCard";
import WelcomeBanner from "../components/WelcomeBanner";
import ProgressCard from "../components/ProgressCard";
import { useTheme } from "../context/ThemeContext";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, LineChart,
  Line, Legend,
} from "recharts";

function FacultyDashboard() {
  const { isDark } = useTheme();

  const bgColor = isDark ? "#1a1a2e" : "#f0f2f5";
  const cardBg = isDark ? "#16213e" : "white";
  const textColor = isDark ? "#ffffff" : "#1a1a2e";
  const subTextColor = isDark ? "#a0aec0" : "#555";
  const borderColor = isDark ? "#2d3748" : "#eee";
  const rowEven = isDark ? "#1a1a2e" : "white";
  const rowOdd = isDark ? "#16213e" : "#fafafa";

  const classPerformanceData = [
    { class: "Class A", score: 78, average: 65 },
    { class: "Class B", score: 85, average: 72 },
    { class: "Class C", score: 91, average: 80 },
  ];

  const progressData = [
    { week: "Week 1", classA: 10, classB: 20 },
    { week: "Week 2", classA: 30, classB: 40 },
    { week: "Week 3", classA: 50, classB: 35 },
  ];

  const recentSubmissions = [
    { id: 201, name: "John Doe", assignment: "Essay 1", status: "Graded" },
    { id: 202, name: "Jane Smith", assignment: "Quiz 3", status: "Pending" },
    { id: 203, name: "Mike Johnson", assignment: "Lab Report", status: "Submitted" },
    { id: 204, name: "Sara Wilson", assignment: "Essay 2", status: "Graded" },
    { id: 205, name: "Tom Brown", assignment: "Quiz 4", status: "Pending" },
  ];

  // Progress bar data for faculty
  const classProgressData = [
    { label: "Class A Performance", value: 78, maxValue: 100 },
    { label: "Class B Performance", value: 85, maxValue: 100 },
    { label: "Class C Performance", value: 91, maxValue: 100 },
    { label: "Assignments Submitted", value: 76, maxValue: 100 },
    { label: "Attendance Rate", value: 88, maxValue: 100 },
  ];

  const pageStyle = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: bgColor,
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
    backgroundColor: bgColor,
    animation: "fadeIn 0.5s ease forwards",
  };

  const headingRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "10px",
  };

  const statsRowStyle = {
    display: "flex",
    gap: "12px",
    marginBottom: "20px",
    flexWrap: "wrap",
  };

  const chartCardStyle = {
    backgroundColor: cardBg,
    borderRadius: "10px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: isDark
      ? "0 2px 6px rgba(0,0,0,0.4)"
      : "0 2px 6px rgba(0,0,0,0.06)",
    animation: "fadeInUp 0.6s ease forwards",
  };

  const chartTitleStyle = {
    fontSize: "15px",
    fontWeight: "bold",
    color: textColor,
    marginBottom: "14px",
  };

  const twoColStyle = {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "13px",
  };

  const thStyle = {
    textAlign: "left",
    padding: "10px 12px",
    backgroundColor: isDark ? "#0f3460" : "#f8f9fa",
    color: subTextColor,
    fontWeight: "600",
    borderBottom: `2px solid ${borderColor}`,
    whiteSpace: "nowrap",
  };

  const tdStyle = {
    padding: "10px 12px",
    borderBottom: `1px solid ${borderColor}`,
    color: textColor,
    whiteSpace: "nowrap",
  };

  const getStatusBadge = (status) => {
    const colors = {
      Graded: "#27ae60",
      Pending: "#e67e22",
      Submitted: "#3498db",
    };
    return (
      <span style={{
        backgroundColor: colors[status] || "#95a5a6",
        color: "white",
        padding: "3px 10px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: "bold",
      }}>
        {status}
      </span>
    );
  };

  return (
    <div style={pageStyle}>
      <Sidebar />
      <div style={mainContentStyle}>
        <Navbar />
        <div style={bodyStyle}>

          {/* Heading */}
          <div style={headingRowStyle}>
            <h2 style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: textColor,
              margin: 0,
            }}>
              Faculty Dashboard
            </h2>
            <PrintReport />
          </div>

          {/* Welcome Banner */}
          <WelcomeBanner />

          {/* Animated Stat Cards */}
          <div style={statsRowStyle}>
            <AnimatedStatCard
              title="Total Students"
              value={120}
              color="#e74c3c"
              icon="👥"
            />
            <AnimatedStatCard
              title="Average Class Score"
              value={78}
              suffix="%"
              color="#e67e22"
              icon="📊"
            />
            <AnimatedStatCard
              title="Pending Assignments"
              value={4}
              color="#ff6b35"
              icon="📝"
            />
          </div>

          {/* Bar Chart and Progress Bars side by side */}
          <div style={twoColStyle}>

            {/* Bar Chart */}
            <div style={{ ...chartCardStyle, flex: "2 1 300px" }}>
              <p style={chartTitleStyle}>Class Performance</p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={classPerformanceData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={isDark ? "#2d3748" : "#eee"}
                    vertical={false}
                  />
                  <XAxis
                    dataKey="class"
                    tick={{ fontSize: 11, fill: subTextColor }}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fontSize: 11, fill: subTextColor }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: cardBg,
                      border: `1px solid ${borderColor}`,
                      color: textColor,
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="score"
                    fill="#e74c3c"
                    radius={[4, 4, 0, 0]}
                    name="Class Score"
                  />
                  <Bar
                    dataKey="average"
                    fill="#f1948a"
                    radius={[4, 4, 0, 0]}
                    name="Average"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Progress Bars */}
            <div style={{ flex: "1 1 260px" }}>
              <ProgressCard
                title="📈 Class wise Progress"
                data={classProgressData}
              />
            </div>

          </div>

          {/* Student Progress Line Chart */}
          <div style={chartCardStyle}>
            <p style={chartTitleStyle}>Student Progress</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={progressData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={isDark ? "#2d3748" : "#eee"}
                  vertical={false}
                />
                <XAxis
                  dataKey="week"
                  tick={{ fontSize: 11, fill: subTextColor }}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: subTextColor }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: cardBg,
                    border: `1px solid ${borderColor}`,
                    color: textColor,
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="classA"
                  stroke="#3498db"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Class A"
                />
                <Line
                  type="monotone"
                  dataKey="classB"
                  stroke="#e67e22"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Class B"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Submissions Table */}
          <div style={chartCardStyle}>
            <p style={chartTitleStyle}>Recent Submissions</p>
            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>ID</th>
                    <th style={thStyle}>Student Name</th>
                    <th style={thStyle}>Assignment</th>
                    <th style={thStyle}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSubmissions.map((row, index) => (
                    <tr key={index} style={{
                      backgroundColor:
                        index % 2 === 0 ? rowEven : rowOdd,
                    }}>
                      <td style={tdStyle}>{row.id}</td>
                      <td style={tdStyle}>{row.name}</td>
                      <td style={tdStyle}>{row.assignment}</td>
                      <td style={tdStyle}>
                        {getStatusBadge(row.status)}
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

export default FacultyDashboard;