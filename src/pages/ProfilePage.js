// src/pages/ProfilePage.js
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BounceSection from "../components/BounceSection";
import { useTheme } from "../context/ThemeContext";

function ProfilePage() {
  const { isDark } = useTheme();

  const role = localStorage.getItem("role");
  const user = localStorage.getItem("user");

  // Dynamic colors based on dark mode
  const bg = isDark ? "#0f172a" : "#f1f5f9";
  const cardBg = isDark ? "#111827" : "white";
  const textPrimary = isDark ? "#f1f5f9" : "#1e293b";
  const textSecondary = isDark ? "#94a3b8" : "#64748b";
  const border = isDark ? "#1e293b" : "#e2e8f0";
  const infoBg = isDark ? "#1e293b" : "#f8fafc";

  // Profile data based on role
  const getProfileData = () => {
    if (role === "student") {
      return {
        name: user || "Student",
        role: "Student",
        avatar: user ? user.charAt(0).toUpperCase() : "S",
        avatarColor: "#3b82f6",
        bannerColor: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
        department: "MCA AIML",
        details: [
          { label: "Enrollment Number", value: "LNCEMCA11102", icon: "🎫" },
          { label: "Department", value: "MCA", icon: "🏫" },
          { label: "Semester", value: "4th Semester", icon: "📅" },
          { label: "Enrollment Year", value: "2024", icon: "📆" },
          { label: "CGPA", value: "8.5 / 10", icon: "⭐" },
          { label: "Attendance", value: "85%", icon: "✅" },
        ],
        contact: [
          { label: "Email", value: (user || "student") + "aksingh605040@gmail.com", icon: "✉️" },
          { label: "Phone", value: "+91 7903194556", icon: "📱" },
          { label: "Address", value: "Transport nagr, Kokta", icon: "📍" },
          { label: "Blood Group", value: "A+", icon: "🩸" },
        ],
        stats: [
          { label: "Subjects", value: "5", color: "#3b82f6" },
          { label: "CGPA", value: "8.5", color: "#10b981" },
          { label: "Attendance", value: "85%", color: "#f59e0b" },
          { label: "Rank", value: "#12", color: "#8b5cf6" },
        ],
      };
    } else if (role === "faculty") {
      return {
        name: user || "Faculty",
        role: "Faculty",
        avatar: user ? user.charAt(0).toUpperCase() : "F",
        avatarColor: "#ef4444",
        bannerColor: "linear-gradient(135deg, #b91c1c, #ef4444)",
        department: "MCA",
        details: [
          { label: "Employee ID", value: "FAC2020045", icon: "🎫" },
          { label: "Department", value: "MCA", icon: "🏫" },
          { label: "Designation", value: "Assistant Professor", icon: "👨‍🏫" },
          { label: "Joining Year", value: "2020", icon: "📆" },
          { label: "Experience", value: "4 Years", icon: "⏳" },
          { label: "Subjects", value: "Advanced Web Technology", icon: "📚" },
        ],
        contact: [
          { label: "Email", value: (user || "faculty") + "@faculty.edu", icon: "✉️" },
          { label: "Phone", value: "+91 98765 11111", icon: "📱" },
          { label: "Address", value: "Abhi Pta nhi Hai", icon: "📍" },
          { label: "Office", value: "Room 204, CS Block", icon: "🏢" },
        ],
        stats: [
          { label: "Students", value: "120", color: "#ef4444" },
          { label: "Classes", value: "3", color: "#10b981" },
          { label: "Experience", value: "4yr", color: "#f59e0b" },
          { label: "Rating", value: "4.8", color: "#8b5cf6" },
        ],
      };
    } else {
      return {
        name: user || "Admin",
        role: "Administrator",
        avatar: user ? user.charAt(0).toUpperCase() : "A",
        avatarColor: "#10b981",
        bannerColor: "linear-gradient(135deg, #065f46, #10b981)",
        department: "Administration",
        details: [
          { label: "Employee ID", value: "ADM2018001", icon: "🎫" },
          { label: "Department", value: "Administration", icon: "🏫" },
          { label: "Designation", value: "System Administrator", icon: "⚙️" },
          { label: "Joining Year", value: "2018", icon: "📆" },
          { label: "Access Level", value: "Full Access", icon: "🔑" },
          { label: "Managed Depts", value: "All Departments", icon: "🏢" },
        ],
        contact: [
          { label: "Email", value: (user || "admin") + "@admin.edu", icon: "✉️" },
          { label: "Phone", value: "+91 98765 99999", icon: "📱" },
          { label: "Address", value: "Admin Block, Main Campus", icon: "📍" },
          { label: "Office", value: "Room 101, Admin Block", icon: "🏢" },
        ],
        stats: [
          { label: "Users", value: "350", color: "#10b981" },
          { label: "Depts", value: "8", color: "#3b82f6" },
          { label: "Reports", value: "45", color: "#f59e0b" },
          { label: "Uptime", value: "99%", color: "#8b5cf6" },
        ],
      };
    }
  };

  const profile = getProfileData();

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

          {/* 1. Page Heading */}
          <BounceSection delay={0.05}>
            <h2 style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: textPrimary,
              margin: "0 0 20px 0",
            }}>
              My Profile
            </h2>
          </BounceSection>

          {/* 2. Profile Header Card */}
          <BounceSection delay={0.15}>
            <div style={{
              backgroundColor: cardBg,
              borderRadius: "16px",
              overflow: "hidden",
              marginBottom: "16px",
              border: `0.5px solid ${border}`,
            }}>
              {/* Banner */}
              <div style={{
                background: profile.bannerColor,
                height: "120px",
                position: "relative",
              }} />

              {/* Avatar and Name */}
              <div style={{
                padding: "0 24px 24px",
                position: "relative",
              }}>
                {/* Avatar Circle */}
                <div style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  backgroundColor: profile.avatarColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "32px",
                  fontWeight: "bold",
                  border: `4px solid ${cardBg}`,
                  marginTop: "-45px",
                  marginBottom: "12px",
                }}>
                  {profile.avatar}
                </div>

                {/* Name and role */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "12px",
                }}>
                  <div>
                    <h3 style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: textPrimary,
                      margin: "0 0 4px",
                      textTransform: "capitalize",
                    }}>
                      {profile.name}
                    </h3>
                    <p style={{
                      fontSize: "14px",
                      color: textSecondary,
                      margin: "0 0 8px",
                    }}>
                      {profile.role} • {profile.department}
                    </p>
                    <span style={{
                      backgroundColor: profile.avatarColor,
                      color: "white",
                      padding: "4px 14px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}>
                      {profile.role === "Student" ? "🎓" :
                       profile.role === "Faculty" ? "👨‍🏫" : "⚙️"} {profile.role}
                    </span>
                  </div>

                  {/* Edit button */}
                  <button style={{
                    backgroundColor: isDark ? "#1e293b" : "#f1f5f9",
                    color: textPrimary,
                    border: `0.5px solid ${border}`,
                    padding: "8px 20px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}>
                    ✏️ Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </BounceSection>

          {/* 3. Stats Row - each stat bounces separately */}
          <div style={{
            display: "flex",
            gap: "12px",
            marginBottom: "16px",
            flexWrap: "wrap",
          }}>
            {profile.stats.map((stat, index) => (
              <BounceSection
                key={index}
                delay={0.25 + index * 0.1}
                style={{ flex: "1 1 120px" }}
              >
                <div style={{
                  backgroundColor: cardBg,
                  borderRadius: "12px",
                  padding: "16px",
                  textAlign: "center",
                  border: `0.5px solid ${border}`,
                  borderTop: `3px solid ${stat.color}`,
                }}>
                  <p style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: stat.color,
                    margin: "0 0 4px",
                  }}>
                    {stat.value}
                  </p>
                  <p style={{
                    fontSize: "12px",
                    color: textSecondary,
                    margin: 0,
                  }}>
                    {stat.label}
                  </p>
                </div>
              </BounceSection>
            ))}
          </div>

          {/* 4. Academic / Professional Info and Contact side by side */}
          <div style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}>

            {/* Academic Info */}
            <BounceSection delay={0.65} style={{ flex: "1 1 300px" }}>
              <div style={{
                backgroundColor: cardBg,
                borderRadius: "12px",
                padding: "20px",
                border: `0.5px solid ${border}`,
                marginBottom: "16px",
              }}>
                <h4 style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: textPrimary,
                  margin: "0 0 16px",
                  paddingBottom: "10px",
                  borderBottom: `0.5px solid ${border}`,
                }}>
                  {role === "student"
                    ? "📚 Academic Information"
                    : "💼 Professional Information"}
                </h4>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: "12px",
                }}>
                  {profile.details.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: infoBg,
                        borderRadius: "8px",
                        padding: "12px 14px",
                        borderLeft: `3px solid ${profile.avatarColor}`,
                      }}
                    >
                      <p style={{
                        fontSize: "11px",
                        color: textSecondary,
                        margin: "0 0 4px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}>
                        {item.icon} {item.label}
                      </p>
                      <p style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: textPrimary,
                        margin: 0,
                      }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </BounceSection>

            {/* Contact Info */}
            <BounceSection delay={0.75} style={{ flex: "1 1 260px" }}>
              <div style={{
                backgroundColor: cardBg,
                borderRadius: "12px",
                padding: "20px",
                border: `0.5px solid ${border}`,
                marginBottom: "16px",
              }}>
                <h4 style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: textPrimary,
                  margin: "0 0 16px",
                  paddingBottom: "10px",
                  borderBottom: `0.5px solid ${border}`,
                }}>
                  📞 Contact Information
                </h4>

                {profile.contact.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 0",
                      borderBottom: index < profile.contact.length - 1
                        ? `0.5px solid ${border}`
                        : "none",
                    }}
                  >
                    <div style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: isDark ? "#1e293b" : "#f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{
                        fontSize: "11px",
                        color: textSecondary,
                        margin: "0 0 2px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}>
                        {item.label}
                      </p>
                      <p style={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: textPrimary,
                        margin: 0,
                      }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </BounceSection>

          </div>

          {/* 5. Activity Card */}
          <BounceSection delay={0.85}>
            <div style={{
              backgroundColor: cardBg,
              borderRadius: "12px",
              padding: "20px",
              border: `0.5px solid ${border}`,
              marginBottom: "16px",
            }}>
              <h4 style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: textPrimary,
                margin: "0 0 16px",
                paddingBottom: "10px",
                borderBottom: `0.5px solid ${border}`,
              }}>
                🕒 Recent Activity
              </h4>

              {[
                { action: "Logged in to dashboard", time: "Today, 10:32 AM", color: "#10b981" },
                { action: "Downloaded performance report", time: "Today, 09:15 AM", color: "#3b82f6" },
                { action: "Viewed subject results", time: "Yesterday, 04:30 PM", color: "#f59e0b" },
                { action: "Updated profile information", time: "2 days ago", color: "#8b5cf6" },
                { action: "Logged out from session", time: "2 days ago", color: "#ef4444" },
              ].map((activity, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "10px 0",
                    borderBottom: index < 4
                      ? `0.5px solid ${border}`
                      : "none",
                  }}
                >
                  {/* Dot */}
                  <div style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: activity.color,
                    flexShrink: 0,
                  }} />

                  {/* Activity text */}
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontSize: "13px",
                      color: textPrimary,
                      margin: 0,
                      fontWeight: "500",
                    }}>
                      {activity.action}
                    </p>
                  </div>

                  {/* Time */}
                  <p style={{
                    fontSize: "11px",
                    color: textSecondary,
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}>
                    {activity.time}
                  </p>
                </div>
              ))}
            </div>
          </BounceSection>

        </div>
      </div>
    </div>
  );
}

export default ProfilePage;