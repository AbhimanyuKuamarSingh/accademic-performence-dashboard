// src/pages/StudentDashboard.js
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PrintReport from "../components/PrintReport";
import AnimatedStatCard from "../components/AnimatedStatCard";
import WelcomeBanner from "../components/WelcomeBanner";
import ProgressCard from "../components/ProgressCard";
import dummyData from "../data/dummyData";
import { useTheme } from "../context/ThemeContext";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, LineChart,
  Line, Legend,
} from "recharts";

function StudentDashboard() {
  const { isDark } = useTheme();

  const recentGrades = [
    { id: 101, course: "Math", marks: 88, grade: "B+" },
    { id: 102, course: "Science", marks: 92, grade: "A" },
    { id: 103, course: "History", marks: 76, grade: "C" },
    { id: 104, course: "English", marks: 95, grade: "A+" },
    { id: 105, course: "Computer Science", marks: 89, grade: "B+" },
  ];

  const performanceData = [
    { subject: "Math", score: 88, average: 75 },
    { subject: "Science", score: 92, average: 78 },
    { subject: "History", score: 76, average: 70 },
    { subject: "English", score: 95, average: 80 },
  ];

  const gradesLineData = [
    { month: "Jan", score: 65 },
    { month: "Feb", score: 70 },
    { month: "Mar", score: 68 },
    { month: "Apr", score: 75 },
    { month: "May", score: 82 },
  ];

  // Progress bar data for student
  const progressData = [
    { label: "Mathematics", value: 85, maxValue: 100 },
    { label: "Physics", value: 72, maxValue: 100 },
    { label: "Chemistry", value: 68, maxValue: 100 },
    { label: "English", value: 90, maxValue: 100 },
    { label: "Computer Science", value: 95, maxValue: 100 },
  ];

  const bgColor = isDark ? "#1a1a2e" : "#f0f2f5";
  const cardBg = isDark ? "#16213e" : "white";
  const textColor = isDark ? "#ffffff" : "#1a1a2e";
  const subTextColor = isDark ? "#a0aec0" : "#555";
  const borderColor = isDark ? "#2d3748" : "#eee";
  const rowEven = isDark ? "#1a1a2e" : "white";
  const rowOdd = isDark ? "#16213e" : "#fafafa";

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

          {/* Heading */}
          <div style={headingRowStyle}>
            <h2 style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: textColor,
              margin: 0,
            }}>
              Student Dashboard
            </h2>
            <PrintReport />
          </div>

          {/* Welcome Banner */}
          <WelcomeBanner />

          {/* Animated Stat Cards */}
          <div style={statsRowStyle}>
            <AnimatedStatCard
              title="Average Score"
              value={dummyData.stats.averageScore}
              suffix="%"
              color="#3a86ff"
              icon="📊"
            />
            <AnimatedStatCard
              title="Total Subjects"
              value={dummyData.studentResults.length}
              color="#2ecc71"
              icon="📚"
            />
            <AnimatedStatCard
              title="Top Score"
              value={dummyData.stats.topScore}
              color="#ff6b35"
              icon="🏆"
            />
            <AnimatedStatCard
              title="Pass Percentage"
              value={dummyData.stats.passPercentage}
              suffix="%"
              color="#9b59b6"
              icon="✅"
            />
          </div>

          {/* Bar Chart and Progress Bars side by side */}
          <div style={twoColStyle}>

            {/* Bar Chart */}
            <div style={{ ...chartCardStyle, flex: "2 1 300px" }}>
              <p style={chartTitleStyle}>Performance Overview</p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={performanceData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={isDark ? "#2d3748" : "#eee"}
                    vertical={false}
                  />
                  <XAxis
                    dataKey="subject"
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

            {/* Progress Bars */}
            <div style={{ flex: "1 1 260px" }}>
              <ProgressCard
                title="📈 Subject wise Progress"
                data={progressData}
              />
            </div>

          </div>

          {/* Line Chart */}
          <div style={chartCardStyle}>
            <p style={chartTitleStyle}>Performance Trend</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={gradesLineData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={isDark ? "#2d3748" : "#eee"}
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
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

          {/* Subject Results Table */}
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
                    <tr key={index} style={{
                      backgroundColor:
                        index % 2 === 0 ? rowEven : rowOdd,
                    }}>
                      <td style={{ ...tdStyle, color: subTextColor }}>
                        {index + 1}
                      </td>
                      <td style={tdStyle}>{row.subject}</td>
                      <td style={{
                        ...tdStyle,
                        fontWeight: "bold",
                        color: row.marks < 40
                          ? "#e74c3c" : "#27ae60",
                      }}>
                        {row.marks}
                      </td>
                      <td style={tdStyle}>{row.maxMarks}</td>
                      <td style={tdStyle}>
                        {getGradeBadge(row.grade)}
                      </td>
                      <td style={tdStyle}>
                        <span style={{
                          backgroundColor: row.marks < 40
                            ? "#e74c3c" : "#27ae60",
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
                    <tr key={index} style={{
                      backgroundColor:
                        index % 2 === 0 ? rowEven : rowOdd,
                    }}>
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