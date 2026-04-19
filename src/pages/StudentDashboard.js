import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PrintReport from "../components/PrintReport";
import AnimatedStatCard from "../components/AnimatedStatCard";
import WelcomeBanner from "../components/WelcomeBanner";
import ProgressCard from "../components/ProgressCard";
import BounceSection from "../components/BounceSection";
import dummyData from "../data/dummyData";
import { useTheme } from "../context/ThemeContext";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, LineChart,
  Line, Legend,
} from "recharts";

function StudentDashboard() {
  const { isDark } = useTheme();

  const bg = isDark ? "#0f172a" : "#f1f5f9";
  const cardBg = isDark ? "#111827" : "white";
  const textPrimary = isDark ? "#f1f5f9" : "#1e293b";
  const textSecondary = isDark ? "#94a3b8" : "#64748b";
  const border = isDark ? "#1e293b" : "#e2e8f0";
  const rowEven = isDark ? "#111827" : "white";
  const rowOdd = isDark ? "#0f172a" : "#f8fafc";
  const thBg = isDark ? "#1e293b" : "#f8fafc";

  const performanceData = [
    { subject: "Data Mining", score: 85, average: 72 },
    { subject: "Neural Network", score: 72, average: 68 },
    { subject: "Data Scince", score: 68, average: 65 },
    { subject: "Distributed System", score: 90, average: 75 },
    { subject: "Machine Learning", score: 95, average: 80 },
  ];

  const lineData = [
    { month: "Jan", score: 65 },
    { month: "Feb", score: 70 },
    { month: "Mar", score: 68 },
    { month: "Apr", score: 75 },
    { month: "May", score: 82 },
  ];

  const progressData = [
    { label: "Data Mining", value: 85, maxValue: 100 },
    { label: "Neural Network", value: 72, maxValue: 100 },
    { label: "Data Science", value: 68, maxValue: 100 },
    { label: "Distributed System", value: 90, maxValue: 100 },
    { label: "Machine Learning", value: 95, maxValue: 100 },
  ];

  const recentGrades = [
    { id: 101, course: "Math", marks: 85, grade: "A" },
    { id: 102, course: "Physics", marks: 72, grade: "B" },
    { id: 103, course: "Chemistry", marks: 68, grade: "B" },
    { id: 104, course: "English", marks: 90, grade: "A+" },
    { id: 105, course: "CS", marks: 95, grade: "A+" },
  ];

  const card = {
    backgroundColor: cardBg,
    borderRadius: "12px",
    padding: "18px 20px",
    marginBottom: "16px",
    border: `0.5px solid ${border}`,
  };

  const cardTitle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: textPrimary,
    marginBottom: "16px",
    paddingBottom: "10px",
    borderBottom: `0.5px solid ${border}`,
  };

  const th = {
    padding: "10px 14px",
    textAlign: "left",
    backgroundColor: thBg,
    color: textSecondary,
    fontSize: "12px",
    fontWeight: "600",
    borderBottom: `1px solid ${border}`,
    whiteSpace: "nowrap",
  };

  const td = {
    padding: "10px 14px",
    borderBottom: `0.5px solid ${border}`,
    color: textPrimary,
    fontSize: "13px",
    whiteSpace: "nowrap",
  };

  const getGradeBadge = (grade) => {
    const map = {
      "A+": { bg: "#dcfce7", color: "#15803d" },
      "A": { bg: "#dcfce7", color: "#15803d" },
      "B+": { bg: "#dbeafe", color: "#1d4ed8" },
      "B": { bg: "#dbeafe", color: "#1d4ed8" },
      "C": { bg: "#fef9c3", color: "#854d0e" },
      "D": { bg: "#fee2e2", color: "#b91c1c" },
      "F": { bg: "#fee2e2", color: "#b91c1c" },
    };
    const s = map[grade] || { bg: "#f1f5f9", color: "#64748b" };
    return (
      <span style={{
        backgroundColor: s.bg,
        color: s.color,
        padding: "3px 10px",
        borderRadius: "20px",
        fontSize: "11px",
        fontWeight: "600",
      }}>
        {grade}
      </span>
    );
  };

  const tooltipStyle = {
    contentStyle: {
      backgroundColor: cardBg,
      border: `0.5px solid ${border}`,
      color: textPrimary,
      borderRadius: "8px",
      fontSize: "12px",
    },
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: bg }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <Navbar />
        <div style={{ padding: "20px", flex: 1, backgroundColor: bg }}>

          {/* 1. Heading - bounces first */}
          <BounceSection delay={0.05}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              flexWrap: "wrap",
              gap: "10px",
            }}>
              <h2 style={{ fontSize: "22px", fontWeight: "bold", color: textPrimary, margin: 0 }}>
                Student Dashboard
              </h2>
              <PrintReport />
            </div>
          </BounceSection>

          {/* 2. Welcome Banner - bounces second */}
          <BounceSection delay={0.15}>
            <WelcomeBanner />
          </BounceSection>

          {/* 3. Stat Card 1 - bounces third */}
          {/* 4. Stat Card 2 - bounces fourth */}
          {/* 5. Stat Card 3 - bounces fifth */}
          {/* 6. Stat Card 4 - bounces sixth */}
          {/* Each card has its own BounceSection */}
          <div style={{
            display: "flex",
            gap: "12px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}>
            <BounceSection delay={0.25} style={{ flex: "1 1 140px" }}>
              <AnimatedStatCard
                title="Average Score"
                value={dummyData.stats.averageScore}
                suffix="%"
                color="#3b82f6"
                icon="📊"
              />
            </BounceSection>

            <BounceSection delay={0.35} style={{ flex: "1 1 140px" }}>
              <AnimatedStatCard
                title="Total Subjects"
                value={dummyData.studentResults.length}
                color="#10b981"
                icon="📚"
              />
            </BounceSection>

            <BounceSection delay={0.45} style={{ flex: "1 1 140px" }}>
              <AnimatedStatCard
                title="Top Score"
                value={dummyData.stats.topScore}
                color="#f59e0b"
                icon="🏆"
              />
            </BounceSection>

            <BounceSection delay={0.55} style={{ flex: "1 1 140px" }}>
              <AnimatedStatCard
                title="Pass %"
                value={dummyData.stats.passPercentage}
                suffix="%"
                color="#8b5cf6"
                icon="✅"
              />
            </BounceSection>
          </div>

          {/* 7. Bar Chart - bounces seventh */}
          {/* 8. Progress Card - bounces eighth */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>

            <BounceSection delay={0.65} style={{ flex: "2 1 300px" }}>
              <div style={card}>
                <p style={cardTitle}>Performance Overview</p>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={performanceData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={border}
                      vertical={false}
                    />
                    <XAxis
                      dataKey="subject"
                      tick={{ fontSize: 11, fill: textSecondary }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      domain={[0, 100]}
                      tick={{ fontSize: 11, fill: textSecondary }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip {...tooltipStyle} />
                    <Legend />
                    <Bar
                      dataKey="score"
                      fill="#3b82f6"
                      radius={[6, 6, 0, 0]}
                      name="Your Score"
                    />
                    <Bar
                      dataKey="average"
                      fill="#bfdbfe"
                      radius={[6, 6, 0, 0]}
                      name="Class Average"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </BounceSection>

            <BounceSection delay={0.75} style={{ flex: "1 1 260px" }}>
              <ProgressCard
                title="📈 Subject wise Progress"
                data={progressData}
              />
            </BounceSection>

          </div>

          {/* 9. Line Chart - bounces ninth */}
          <BounceSection delay={0.85}>
            <div style={card}>
              <p style={cardTitle}>Performance Trend</p>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={lineData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={border}
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 11, fill: textSecondary }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fontSize: 11, fill: textSecondary }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip {...tooltipStyle} />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ r: 5, fill: "#3b82f6", strokeWidth: 0 }}
                    name="Score"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </BounceSection>

          {/* 10. Results Table - bounces tenth */}
          <BounceSection delay={0.95}>
            <div style={{ ...card, padding: 0 }}>
              <div style={{ padding: "18px 20px 10px" }}>
                <p style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: textPrimary,
                  margin: 0,
                }}>
                  Subject wise Results
                </p>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={th}>#</th>
                      <th style={th}>Subject</th>
                      <th style={th}>Marks</th>
                      <th style={th}>Max</th>
                      <th style={th}>Grade</th>
                      <th style={th}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyData.studentResults.map((row, i) => (
                      <tr
                        key={i}
                        style={{
                          backgroundColor: i % 2 === 0 ? rowEven : rowOdd,
                        }}
                      >
                        <td style={{ ...td, color: textSecondary }}>{i + 1}</td>
                        <td style={td}>{row.subject}</td>
                        <td style={{
                          ...td,
                          fontWeight: "bold",
                          color: row.marks < 40 ? "#ef4444" : "#10b981",
                        }}>
                          {row.marks}
                        </td>
                        <td style={td}>{row.maxMarks}</td>
                        <td style={td}>{getGradeBadge(row.grade)}</td>
                        <td style={td}>
                          <span style={{
                            backgroundColor: row.marks < 40 ? "#fee2e2" : "#dcfce7",
                            color: row.marks < 40 ? "#b91c1c" : "#15803d",
                            padding: "3px 10px",
                            borderRadius: "20px",
                            fontSize: "11px",
                            fontWeight: "600",
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
          </BounceSection>

          {/* 11. Recent Grades - bounces last */}
          <BounceSection delay={1.05}>
            <div style={{ ...card, padding: 0 }}>
              <div style={{ padding: "18px 20px 10px" }}>
                <p style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: textPrimary,
                  margin: 0,
                }}>
                  Recent Grades
                </p>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={th}>ID</th>
                      <th style={th}>Course</th>
                      <th style={th}>Marks</th>
                      <th style={th}>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentGrades.map((row, i) => (
                      <tr
                        key={i}
                        style={{
                          backgroundColor: i % 2 === 0 ? rowEven : rowOdd,
                        }}
                      >
                        <td style={{ ...td, color: textSecondary }}>{row.id}</td>
                        <td style={td}>{row.course}</td>
                        <td style={{
                          ...td,
                          fontWeight: "bold",
                          color: row.marks >= 75
                            ? "#10b981"
                            : row.marks >= 50
                            ? "#f59e0b"
                            : "#ef4444",
                        }}>
                          {row.marks}
                        </td>
                        <td style={td}>{getGradeBadge(row.grade)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </BounceSection>

        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;