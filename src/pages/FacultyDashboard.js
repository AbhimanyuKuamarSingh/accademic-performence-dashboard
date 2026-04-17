// src/pages/FacultyDashboard.js
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PrintReport from "../components/PrintReport";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, LineChart,
  Line, Legend,
} from "recharts";

function FacultyDashboard() {

  // Class performance data
  const classPerformanceData = [
    { class: "Class A", score: 78, average: 65 },
    { class: "Class B", score: 85, average: 72 },
    { class: "Class C", score: 91, average: 80 },
  ];

  // Student progress line chart
  const progressData = [
    { week: "Week 1", classA: 10, classB: 20 },
    { week: "Week 2", classA: 30, classB: 40 },
    { week: "Week 3", classA: 50, classB: 35 },
  ];

  // Recent submissions table
  const recentSubmissions = [
    { id: 201, name: "Abhimanyu Kumar Singh", assignment: "Essay 1", status: "Graded" },
    { id: 202, name: "Abhishek Kumar", assignment: "Quiz 3", status: "Pending" },
    { id: 203, name: "Soojal Mandal", assignment: "Lab Report", status: "Submitted" },
    { id: 204, name: "Ritik Mehta", assignment: "Essay 2", status: "Graded" },
    { id: 205, name: "Mukesh Tiwari", assignment: "Quiz 4", status: "Pending" },
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
            <h2 style={headingStyle}>Faculty Dashboard</h2>
            <PrintReport />
          </div>

          {/* Stat Cards */}
          <div style={statsRowStyle}>
            <div style={statCardStyle("#e74c3c")}>
              <p style={statLabelStyle}>Total Students</p>
              <p style={statValueStyle}>120</p>
            </div>
            <div style={statCardStyle("#e67e22")}>
              <p style={statLabelStyle}>Average Class Score</p>
              <p style={statValueStyle}>78%</p>
            </div>
            <div style={statCardStyle("#ff6b35")}>
              <p style={statLabelStyle}>Pending Assignments</p>
              <p style={statValueStyle}>4</p>
            </div>
          </div>

          {/* Class Performance Bar Chart */}
          <div style={chartCardStyle}>
            <p style={chartTitleStyle}>Class Performance</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={classPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="class" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#e74c3c" radius={[4, 4, 0, 0]} name="Class Score" />
                <Bar dataKey="average" fill="#f1948a" radius={[4, 4, 0, 0]} name="Average" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Student Progress Line Chart */}
          <div style={chartCardStyle}>
            <p style={chartTitleStyle}>Student Progress</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="week" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="classA"
                  stroke="#3498db"
                  strokeWidth={2}
                  dot={{ r: 5 }}
                  name="Class A"
                />
                <Line
                  type="monotone"
                  dataKey="classB"
                  stroke="#e67e22"
                  strokeWidth={2}
                  dot={{ r: 5 }}
                  name="Class B"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Submissions Table */}
          <div style={chartCardStyle}>
            <p style={chartTitleStyle}>Recent Submissions</p>
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
                  <tr key={index}
                    style={{ backgroundColor: index % 2 === 0 ? "white" : "#fafafa" }}
                  >
                    <td style={tdStyle}>{row.id}</td>
                    <td style={tdStyle}>{row.name}</td>
                    <td style={tdStyle}>{row.assignment}</td>
                    <td style={tdStyle}>{getStatusBadge(row.status)}</td>
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

export default FacultyDashboard;