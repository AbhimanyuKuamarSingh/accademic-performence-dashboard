import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PrintReport from "../components/PrintReport";
import AnimatedStatCard from "../components/AnimatedStatCard";
import WelcomeBanner from "../components/WelcomeBanner";
import ProgressCard from "../components/ProgressCard";
import BounceSection from "../components/BounceSection";
import { useTheme } from "../context/ThemeContext";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, LineChart,
  Line, Legend,
} from "recharts";

function FacultyDashboard() {
  const { isDark } = useTheme();

  const bg = isDark ? "#0f172a" : "#f1f5f9";
  const cardBg = isDark ? "#111827" : "white";
  const textPrimary = isDark ? "#f1f5f9" : "#1e293b";
  const textSecondary = isDark ? "#94a3b8" : "#64748b";
  const border = isDark ? "#1e293b" : "#e2e8f0";
  const rowEven = isDark ? "#111827" : "white";
  const rowOdd = isDark ? "#0f172a" : "#f8fafc";
  const thBg = isDark ? "#1e293b" : "#f8fafc";

  const classData = [
    { class: "Class A", score: 78, average: 65 },
    { class: "Class B", score: 85, average: 72 },
    { class: "Class C", score: 91, average: 80 },
  ];

  const progressLineData = [
    { week: "Week 1", classA: 10, classB: 20 },
    { week: "Week 2", classA: 30, classB: 40 },
    { week: "Week 3", classA: 50, classB: 35 },
  ];

  const submissions = [
    { id: 201, name: "John Doe", assignment: "Essay 1", status: "Graded" },
    { id: 202, name: "Jane Smith", assignment: "Quiz 3", status: "Pending" },
    { id: 203, name: "Mike Johnson", assignment: "Lab Report", status: "Submitted" },
    { id: 204, name: "Sara Wilson", assignment: "Essay 2", status: "Graded" },
    { id: 205, name: "Tom Brown", assignment: "Quiz 4", status: "Pending" },
  ];

  const progressData = [
    { label: "Class A Performance", value: 78, maxValue: 100 },
    { label: "Class B Performance", value: 85, maxValue: 100 },
    { label: "Class C Performance", value: 91, maxValue: 100 },
    { label: "Assignments Submitted", value: 76, maxValue: 100 },
    { label: "Attendance Rate", value: 88, maxValue: 100 },
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

  const getStatusBadge = (status) => {
    const map = {
      // Softer pleasant colors instead of bright ones
      Graded: { bg: "#dcfce7", color: "#166534" },
      Pending: { bg: "#fef9c3", color: "#713f12" },
      Submitted: { bg: "#dbeafe", color: "#1e40af" },
    };
    const s = map[status] || { bg: "#f1f5f9", color: "#475569" };
    return (
      <span style={{
        backgroundColor: s.bg,
        color: s.color,
        padding: "3px 10px",
        borderRadius: "20px",
        fontSize: "11px",
        fontWeight: "600",
      }}>
        {status}
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
    <div style={{
      display: "flex",
      minHeight: "100vh",
      backgroundColor: bg,
    }}>
      <Sidebar />
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
      }}>
        <Navbar />
        <div style={{
          padding: "20px",
          flex: 1,
          backgroundColor: bg,
        }}>

          {/* 1. Heading only - no print button */}
          <BounceSection delay={0.05}>
            <h2 style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: textPrimary,
              margin: "0 0 20px 0",
            }}>
              Faculty Dashboard
            </h2>
          </BounceSection>

          {/* 2. Welcome Banner */}
          <BounceSection delay={0.15}>
            <WelcomeBanner />
          </BounceSection>

          {/* 3. Stat Cards - softer pleasant colors */}
          <div style={{
            display: "flex",
            gap: "12px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}>
            <BounceSection delay={0.25} style={{ flex: "1 1 140px" }}>
              <AnimatedStatCard
                title="Total Students"
                value={120}
                color="#4f86c6"
                icon="👥"
              />
            </BounceSection>

            <BounceSection delay={0.35} style={{ flex: "1 1 140px" }}>
              <AnimatedStatCard
                title="Class Average"
                value={78}
                suffix="%"
                color="#5ba08a"
                icon="📊"
              />
            </BounceSection>

            <BounceSection delay={0.45} style={{ flex: "1 1 140px" }}>
              <AnimatedStatCard
                title="Pending Assignments"
                value={4}
                color="#9b7ec8"
                icon="📝"
              />
            </BounceSection>
          </div>

          {/* 4. Bar Chart and Progress side by side */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <BounceSection delay={0.55} style={{ flex: "2 1 300px" }}>
              <div style={card}>
                <p style={cardTitle}>Class Performance</p>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={classData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={border}
                      vertical={false}
                    />
                    <XAxis
                      dataKey="class"
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
                    {/* Softer pleasant bar colors */}
                    <Bar
                      dataKey="score"
                      fill="#4f86c6"
                      radius={[6, 6, 0, 0]}
                      name="Class Score"
                    />
                    <Bar
                      dataKey="average"
                      fill="#a8c5e8"
                      radius={[6, 6, 0, 0]}
                      name="Average"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </BounceSection>

            <BounceSection delay={0.65} style={{ flex: "1 1 260px" }}>
              <ProgressCard
                title="Class wise Progress"
                data={progressData}
              />
            </BounceSection>
          </div>

          {/* 5. Line Chart */}
          <BounceSection delay={0.75}>
            <div style={card}>
              <p style={cardTitle}>Student Progress</p>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={progressLineData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={border}
                    vertical={false}
                  />
                  <XAxis
                    dataKey="week"
                    tick={{ fontSize: 11, fill: textSecondary }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: textSecondary }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip {...tooltipStyle} />
                  <Legend />
                  {/* Softer line colors */}
                  <Line
                    type="monotone"
                    dataKey="classA"
                    stroke="#4f86c6"
                    strokeWidth={3}
                    dot={{ r: 5, fill: "#4f86c6", strokeWidth: 0 }}
                    name="Class A"
                  />
                  <Line
                    type="monotone"
                    dataKey="classB"
                    stroke="#5ba08a"
                    strokeWidth={3}
                    dot={{ r: 5, fill: "#5ba08a", strokeWidth: 0 }}
                    name="Class B"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </BounceSection>

          {/* 6. Submissions Table */}
          <BounceSection delay={0.85}>
            <div style={{ ...card, padding: 0 }}>
              <div style={{ padding: "18px 20px 10px" }}>
                <p style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: textPrimary,
                  margin: 0,
                }}>
                  Recent Submissions
                </p>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={th}>ID</th>
                      <th style={th}>Student Name</th>
                      <th style={th}>Assignment</th>
                      <th style={th}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((row, i) => (
                      <tr key={i} style={{
                        backgroundColor: i % 2 === 0 ? rowEven : rowOdd,
                      }}>
                        <td style={{ ...td, color: textSecondary }}>
                          {row.id}
                        </td>
                        <td style={td}>{row.name}</td>
                        <td style={td}>{row.assignment}</td>
                        <td style={td}>{getStatusBadge(row.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </BounceSection>

          {/* 7. Print button at BOTTOM */}
          <BounceSection delay={0.95}>
            <div style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "8px",
              marginBottom: "10px",
            }}>
              <PrintReport />
            </div>
          </BounceSection>

        </div>
      </div>
    </div>
  );
}

export default FacultyDashboard;