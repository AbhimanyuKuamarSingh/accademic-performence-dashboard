// src/pages/AdminDashboard.js
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PrintReport from "../components/PrintReport";
import {
  PieChart, Pie, Cell, Legend,
  Tooltip, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis,
  CartesianGrid,
} from "recharts";

function AdminDashboard() {

  // Pie chart data - user roles
  const pieData = [
    { name: "Students", value: 59 },
    { name: "Faculty", value: 30 },
    { name: "Admins", value: 11 },
  ];

  const PIE_COLORS = ["#1abc9c", "#e67e22", "#e74c3c"];

  // Line chart data - user statistics
  const lineData = [
    { month: "Jan", students: 100, faculty: 20, admins: 5 },
    { month: "Feb", students: 120, faculty: 22, admins: 5 },
    { month: "Mar", students: 115, faculty: 25, admins: 6 },
    { month: "Apr", students: 130, faculty: 28, admins: 7 },
    { month: "May", students: 140, faculty: 30, admins: 8 },
  ];

  // Recent logs table
  const recentLogs = [
    { id: 401, activity: "User Login", timestamp: "09:15 AM" },
    { id: 402, activity: "Report Generated", timestamp: "08:15 AM" },
    { id: 403, activity: "Alert Triggered", timestamp: "07:30 AM" },
    { id: 404, activity: "New Student Added", timestamp: "07:00 AM" },
    { id: 405, activity: "Password Reset", timestamp: "06:45 AM" },
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
  };

  const statCardStyle = (color) => ({
    flex: 1,
    backgroundColor: color,
    borderRadius: "10px",
    padding: "16px 20px",
    color: "white",
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

  const chartsRowStyle = {
    display: "flex",
    gap: "16px",
    marginBottom: "16px",
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

  return (
    <div style={pageStyle}>
      <Sidebar />
      <div style={mainContentStyle}>
        <Navbar />
        <div style={bodyStyle}>

          {/* Heading */}
          <div style={headingRowStyle}>
            <h2 style={headingStyle}>Admin Dashboard</h2>
            <PrintReport />
          </div>

          {/* Stat Cards */}
          <div style={statsRowStyle}>
            <div style={statCardStyle("#1abc9c")}>
              <p style={statLabelStyle}>Total Users</p>
              <p style={statValueStyle}>350</p>
            </div>
            <div style={statCardStyle("#3498db")}>
              <p style={statLabelStyle}>Active Reports</p>
              <p style={statValueStyle}>8</p>
            </div>
            <div style={statCardStyle("#2c3e50")}>
              <p style={statLabelStyle}>System Alerts</p>
              <p style={statValueStyle}>2</p>
            </div>
          </div>

          {/* User Statistics - Pie + Line side by side */}
          <p style={{ ...chartTitleStyle, marginBottom: "10px" }}>User Statistics</p>
          <div style={chartsRowStyle}>

            {/* Pie Chart */}
            <div style={{ ...chartCardStyle, flex: 1, marginBottom: 0 }}>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={PIE_COLORS[index % PIE_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Line Chart */}
            <div style={{ ...chartCardStyle, flex: 2, marginBottom: 0 }}>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="students" stroke="#1abc9c" strokeWidth={2} dot={{ r: 4 }} name="Students" />
                  <Line type="monotone" dataKey="faculty" stroke="#e67e22" strokeWidth={2} dot={{ r: 4 }} name="Faculty" />
                  <Line type="monotone" dataKey="admins" stroke="#e74c3c" strokeWidth={2} dot={{ r: 4 }} name="Admins" />
                </LineChart>
              </ResponsiveContainer>
            </div>

          </div>

          {/* Recent Logs Table */}
          <div style={{ ...chartCardStyle, marginTop: "16px" }}>
            <p style={chartTitleStyle}>Recent Logs</p>
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
                  <tr key={index}
                    style={{ backgroundColor: index % 2 === 0 ? "white" : "#fafafa" }}
                  >
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
  );
}

export default AdminDashboard;