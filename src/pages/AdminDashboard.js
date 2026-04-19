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
  PieChart, Pie, Cell, Legend, Tooltip,
  ResponsiveContainer, LineChart, Line,
  XAxis, YAxis, CartesianGrid,
} from "recharts";

function AdminDashboard() {
  const { isDark } = useTheme();

  const bg = isDark ? "#0f172a" : "#f1f5f9";
  const cardBg = isDark ? "#111827" : "white";
  const textPrimary = isDark ? "#f1f5f9" : "#1e293b";
  const textSecondary = isDark ? "#94a3b8" : "#64748b";
  const border = isDark ? "#1e293b" : "#e2e8f0";
  const rowEven = isDark ? "#111827" : "white";
  const rowOdd = isDark ? "#0f172a" : "#f8fafc";
  const thBg = isDark ? "#1e293b" : "#f8fafc";

  const pieData = [
    { name: "Students", value: 59 },
    { name: "Faculty", value: 30 },
    { name: "Admins", value: 11 },
  ];
  const PIE_COLORS = ["#10b981", "#f59e0b", "#ef4444"];

  const lineData = [
    { month: "Jan", students: 100, faculty: 20, admins: 5 },
    { month: "Feb", students: 120, faculty: 22, admins: 5 },
    { month: "Mar", students: 115, faculty: 25, admins: 6 },
    { month: "Apr", students: 130, faculty: 28, admins: 7 },
    { month: "May", students: 140, faculty: 30, admins: 8 },
  ];

  const logs = [
    { id: 401, activity: "User Login", timestamp: "09:15 AM" },
    { id: 402, activity: "Report Generated", timestamp: "08:15 AM" },
    { id: 403, activity: "Alert Triggered", timestamp: "07:30 AM" },
    { id: 404, activity: "New Student Added", timestamp: "07:00 AM" },
    { id: 405, activity: "Password Reset", timestamp: "06:45 AM" },
  ];

  const systemProgress = [
    { label: "System Uptime", value: 99, maxValue: 100 },
    { label: "Storage Used", value: 67, maxValue: 100 },
    { label: "Active Users", value: 82, maxValue: 100 },
    { label: "Reports Generated", value: 45, maxValue: 100 },
    { label: "Issues Resolved", value: 91, maxValue: 100 },
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

          {/* 1. Heading */}
          <BounceSection delay={0.05}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: "bold", color: textPrimary, margin: 0 }}>
                Admin Dashboard
              </h2>
              <PrintReport />
            </div>
          </BounceSection>

          {/* 2. Welcome Banner */}
          <BounceSection delay={0.15}>
            <WelcomeBanner />
          </BounceSection>

          {/* 3. Stat Cards - each separately */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
            <BounceSection delay={0.25} style={{ flex: "1 1 140px" }}>
              <AnimatedStatCard title="Total Users" value={350} color="#10b981" icon="👤" />
            </BounceSection>
            <BounceSection delay={0.35} style={{ flex: "1 1 140px" }}>
              <AnimatedStatCard title="Active Reports" value={8} color="#3b82f6" icon="📋" />
            </BounceSection>
            <BounceSection delay={0.45} style={{ flex: "1 1 140px" }}>
              <AnimatedStatCard title="System Alerts" value={2} color="#ef4444" icon="🔔" />
            </BounceSection>
          </div>

          {/* 4. Pie Chart */}
          {/* 5. Line Chart */}
          {/* 6. Progress Card */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ flex: "2 1 300px" }}>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>

                <BounceSection delay={0.55} style={{ flex: "1 1 200px" }}>
                  <div style={card}>
                    <p style={cardTitle}>User Roles</p>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(v) => `${v}%`} {...tooltipStyle} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </BounceSection>

                <BounceSection delay={0.65} style={{ flex: "2 1 200px" }}>
                  <div style={card}>
                    <p style={cardTitle}>Growth Over Months</p>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={lineData}>
                        <CartesianGrid strokeDasharray="3 3" stroke={border} vertical={false} />
                        <XAxis dataKey="month" tick={{ fontSize: 11, fill: textSecondary }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 11, fill: textSecondary }} axisLine={false} tickLine={false} />
                        <Tooltip {...tooltipStyle} />
                        <Legend />
                        <Line type="monotone" dataKey="students" stroke="#10b981" strokeWidth={2} dot={{ r: 4, fill: "#10b981", strokeWidth: 0 }} name="Students" />
                        <Line type="monotone" dataKey="faculty" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4, fill: "#f59e0b", strokeWidth: 0 }} name="Faculty" />
                        <Line type="monotone" dataKey="admins" stroke="#ef4444" strokeWidth={2} dot={{ r: 4, fill: "#ef4444", strokeWidth: 0 }} name="Admins" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </BounceSection>

              </div>
            </div>

            <BounceSection delay={0.75} style={{ flex: "1 1 260px" }}>
              <ProgressCard title="⚙️ System Statistics" data={systemProgress} />
            </BounceSection>
          </div>

          {/* 7. Logs Table */}
          <BounceSection delay={0.85}>
            <div style={{ ...card, padding: 0 }}>
              <div style={{ padding: "18px 20px 10px" }}>
                <p style={{ fontSize: "14px", fontWeight: "bold", color: textPrimary, margin: 0 }}>
                  Recent Logs
                </p>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={th}>ID</th>
                      <th style={th}>Activity</th>
                      <th style={th}>Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logs.map((row, i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? rowEven : rowOdd }}>
                        <td style={{ ...td, color: textSecondary }}>{row.id}</td>
                        <td style={td}>{row.activity}</td>
                        <td style={{ ...td, color: textSecondary }}>{row.timestamp}</td>
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

export default AdminDashboard;