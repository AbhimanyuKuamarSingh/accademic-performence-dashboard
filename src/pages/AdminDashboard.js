// src/pages/AdminDashboard.js
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PrintReport from "../components/PrintReport";
import AnimatedStatCard from "../components/AnimatedStatCard";
import WelcomeBanner from "../components/WelcomeBanner";
import ProgressCard from "../components/ProgressCard";
import { useTheme } from "../context/ThemeContext";
import {
  PieChart, Pie, Cell, Legend,
  Tooltip, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis,
  CartesianGrid,
} from "recharts";

function AdminDashboard() {
  const { isDark } = useTheme();

  const bgColor = isDark ? "#1a1a2e" : "#f0f2f5";
  const cardBg = isDark ? "#16213e" : "white";
  const textColor = isDark ? "#ffffff" : "#1a1a2e";
  const subTextColor = isDark ? "#a0aec0" : "#555";
  const borderColor = isDark ? "#2d3748" : "#eee";
  const rowEven = isDark ? "#1a1a2e" : "white";
  const rowOdd = isDark ? "#16213e" : "#fafafa";

  const pieData = [
    { name: "Students", value: 59 },
    { name: "Faculty", value: 30 },
    { name: "Admins", value: 11 },
  ];

  const PIE_COLORS = ["#1abc9c", "#e67e22", "#e74c3c"];

  const lineData = [
    { month: "Jan", students: 100, faculty: 20, admins: 5 },
    { month: "Feb", students: 120, faculty: 22, admins: 5 },
    { month: "Mar", students: 115, faculty: 25, admins: 6 },
    { month: "Apr", students: 130, faculty: 28, admins: 7 },
    { month: "May", students: 140, faculty: 30, admins: 8 },
  ];

  const recentLogs = [
    { id: 401, activity: "User Login", timestamp: "09:15 AM" },
    { id: 402, activity: "Report Generated", timestamp: "08:15 AM" },
    { id: 403, activity: "Alert Triggered", timestamp: "07:30 AM" },
    { id: 404, activity: "New Student Added", timestamp: "07:00 AM" },
    { id: 405, activity: "Password Reset", timestamp: "06:45 AM" },
  ];

  // Progress bar data for admin
  const systemProgressData = [
    { label: "System Uptime", value: 99, maxValue: 100 },
    { label: "Storage Used", value: 67, maxValue: 100 },
    { label: "Active Users", value: 82, maxValue: 100 },
    { label: "Reports Generated", value: 45, maxValue: 100 },
    { label: "Issues Resolved", value: 91, maxValue: 100 },
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

  const chartsRowStyle = {
    display: "flex",
    gap: "16px",
    marginBottom: "16px",
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
              Admin Dashboard
            </h2>
            <PrintReport />
          </div>

          {/* Welcome Banner */}
          <WelcomeBanner />

          {/* Animated Stat Cards */}
          <div style={statsRowStyle}>
            <AnimatedStatCard
              title="Total Users"
              value={350}
              color="#1abc9c"
              icon="👤"
            />
            <AnimatedStatCard
              title="Active Reports"
              value={8}
              color="#3498db"
              icon="📋"
            />
            <AnimatedStatCard
              title="System Alerts"
              value={2}
              color="#e74c3c"
              icon="🔔"
            />
          </div>

          {/* Pie Line Charts and Progress Bars */}
          <div style={twoColStyle}>

            {/* Pie and Line Charts */}
            <div style={{ flex: "2 1 300px" }}>
              <p style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: textColor,
                marginBottom: "10px",
              }}>
                User Statistics
              </p>
              <div style={chartsRowStyle}>

                {/* Pie Chart */}
                <div style={{
                  ...chartCardStyle,
                  flex: "1 1 200px",
                  marginBottom: 0,
                }}>
                  <p style={chartTitleStyle}>User Roles</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={75}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={PIE_COLORS[index % PIE_COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => `${value}%`}
                        contentStyle={{
                          backgroundColor: cardBg,
                          border: `1px solid ${borderColor}`,
                          color: textColor,
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Line Chart */}
                <div style={{
                  ...chartCardStyle,
                  flex: "2 1 200px",
                  marginBottom: 0,
                }}>
                  <p style={chartTitleStyle}>Growth Over Months</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={lineData}>
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
                      <Line type="monotone" dataKey="students" stroke="#1abc9c" strokeWidth={2} dot={{ r: 3 }} name="Students" />
                      <Line type="monotone" dataKey="faculty" stroke="#e67e22" strokeWidth={2} dot={{ r: 3 }} name="Faculty" />
                      <Line type="monotone" dataKey="admins" stroke="#e74c3c" strokeWidth={2} dot={{ r: 3 }} name="Admins" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

              </div>
            </div>

            {/* System Progress Bars */}
            <div style={{ flex: "1 1 260px" }}>
              <ProgressCard
                title="⚙️ System Statistics"
                data={systemProgressData}
              />
            </div>

          </div>

          {/* Recent Logs Table */}
          <div style={{ ...chartCardStyle, marginTop: "16px" }}>
            <p style={chartTitleStyle}>Recent Logs</p>
            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>ID</th>
                    <th style={thStyle}>Activity</th>
                    <th style={thStyle}>Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLogs.map((row, index) => (
                    <tr key={index} style={{
                      backgroundColor:
                        index % 2 === 0 ? rowEven : rowOdd,
                    }}>
                      <td style={tdStyle}>{row.id}</td>
                      <td style={tdStyle}>{row.activity}</td>
                      <td style={tdStyle}>{row.timestamp}</td>
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

export default AdminDashboard;