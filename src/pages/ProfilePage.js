// src/pages/ProfilePage.js
// This page shows the profile of the logged in user
// It shows different information based on the role

import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function ProfilePage() {
  // Get user details from localStorage
  const role = localStorage.getItem("role");
  const user = localStorage.getItem("user");

  // ---- Dummy Profile Data based on Role ----
  const getProfileData = () => {
    if (role === "student") {
      return {
        name: user || "Student Name",
        role: "Student",
        rollNumber: "02",
        department: "MCA",
        semester: "4th Semester",
        email: user + "student@lnct.com",
        phone: "+91 98765 XXX",
        address: "Transport Nagar, Kokta",
        enrollmentYear: "2024",
        cgpa: "8.5",
        attendance: "85%",
        color: "#3498db",
        avatar: "🎓",
      };
    } else if (role === "faculty") {
      return {
        name: user || "Faculty Name",
        role: "Faculty",
        employeeId: "FAC2020045",
        department: "MCA",
        designation: " Professor",
        email: user + "@faculty.edu",
        phone: "+91 98765 11111",
        address: "Abhi Pta Nhi hai",
        joiningYear: "2020",
        subjectsTaught: "Advance Web Technologies",
        experience: "4 Years",
        color: "#27ae60",
        avatar: "👨‍🏫",
      };
    } else if (role === "admin") {
      return {
        name: user || "Admin Name",
        role: "Administrator",
        employeeId: "ADM2018001",
        department: "Administration",
        designation: "System Administrator",
        email: user + "@admin.edu",
        phone: "+91 98765 99999",
        address: "Admin Block, Main Campus",
        joiningYear: "2018",
        accessLevel: "Full Access",
        managedDepartments: "All Departments",
        color: "#c0392b",
        avatar: "⚙️",
      };
    }
    return {};
  };

  const profile = getProfileData();

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
    padding: "24px",
    flex: 1,
  };

  const headingStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "20px",
  };

  const profileCardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    overflow: "hidden",
    marginBottom: "20px",
  };

  const profileHeaderStyle = {
    backgroundColor: profile.color,
    padding: "40px 30px",
    display: "flex",
    alignItems: "center",
    gap: "24px",
  };

  const avatarStyle = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    border: "3px solid white",
  };

  const profileNameStyle = {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0 0 6px 0",
    textTransform: "capitalize",
  };

  const profileRoleStyle = {
    color: "rgba(255,255,255,0.85)",
    fontSize: "14px",
    margin: "0 0 4px 0",
  };

  const profileEmailStyle = {
    color: "rgba(255,255,255,0.75)",
    fontSize: "13px",
    margin: 0,
  };

  const infoSectionStyle = {
    padding: "24px 30px",
  };

  const sectionTitleStyle = {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "16px",
    paddingBottom: "8px",
    borderBottom: "2px solid #f0f2f5",
  };

  const infoGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "16px",
    marginBottom: "24px",
  };

  const infoItemStyle = {
    backgroundColor: "#f8f9fa",
    padding: "14px 16px",
    borderRadius: "8px",
    borderLeft: "3px solid " + profile.color,
  };

  const infoLabelStyle = {
    fontSize: "11px",
    color: "#7f8c8d",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "4px",
  };

  const infoValueStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#2c3e50",
    textTransform: "capitalize",
  };

  // ---- Render info items based on role ----
  const renderStudentInfo = () => (
    <>
      <h3 style={sectionTitleStyle}>Academic Information</h3>
      <div style={infoGridStyle}>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Roll Number</p>
          <p style={infoValueStyle}>{profile.rollNumber}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Department</p>
          <p style={infoValueStyle}>{profile.department}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Semester</p>
          <p style={infoValueStyle}>{profile.semester}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Enrollment Year</p>
          <p style={infoValueStyle}>{profile.enrollmentYear}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>CGPA</p>
          <p style={infoValueStyle}>{profile.cgpa}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Attendance</p>
          <p style={infoValueStyle}>{profile.attendance}</p>
        </div>
      </div>

      <h3 style={sectionTitleStyle}>Personal Information</h3>
      <div style={infoGridStyle}>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Email</p>
          <p style={infoValueStyle}>{profile.email}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Phone</p>
          <p style={infoValueStyle}>{profile.phone}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Address</p>
          <p style={infoValueStyle}>{profile.address}</p>
        </div>
      </div>
    </>
  );

  const renderFacultyInfo = () => (
    <>
      <h3 style={sectionTitleStyle}>Professional Information</h3>
      <div style={infoGridStyle}>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Employee ID</p>
          <p style={infoValueStyle}>{profile.employeeId}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Department</p>
          <p style={infoValueStyle}>{profile.department}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Designation</p>
          <p style={infoValueStyle}>{profile.designation}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Joining Year</p>
          <p style={infoValueStyle}>{profile.joiningYear}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Experience</p>
          <p style={infoValueStyle}>{profile.experience}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Subjects Taught</p>
          <p style={infoValueStyle}>{profile.subjectsTaught}</p>
        </div>
      </div>

      <h3 style={sectionTitleStyle}>Personal Information</h3>
      <div style={infoGridStyle}>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Email</p>
          <p style={infoValueStyle}>{profile.email}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Phone</p>
          <p style={infoValueStyle}>{profile.phone}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Address</p>
          <p style={infoValueStyle}>{profile.address}</p>
        </div>
      </div>
    </>
  );

  const renderAdminInfo = () => (
    <>
      <h3 style={sectionTitleStyle}>Admin Information</h3>
      <div style={infoGridStyle}>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Employee ID</p>
          <p style={infoValueStyle}>{profile.employeeId}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Department</p>
          <p style={infoValueStyle}>{profile.department}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Designation</p>
          <p style={infoValueStyle}>{profile.designation}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Joining Year</p>
          <p style={infoValueStyle}>{profile.joiningYear}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Access Level</p>
          <p style={infoValueStyle}>{profile.accessLevel}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Managed Departments</p>
          <p style={infoValueStyle}>{profile.managedDepartments}</p>
        </div>
      </div>

      <h3 style={sectionTitleStyle}>Personal Information</h3>
      <div style={infoGridStyle}>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Email</p>
          <p style={infoValueStyle}>{profile.email}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Phone</p>
          <p style={infoValueStyle}>{profile.phone}</p>
        </div>
        <div style={infoItemStyle}>
          <p style={infoLabelStyle}>Address</p>
          <p style={infoValueStyle}>{profile.address}</p>
        </div>
      </div>
    </>
  );

  return (
    <div style={pageStyle}>
      <Sidebar />
      <div style={mainContentStyle}>
        <Navbar />
        <div style={bodyStyle}>
          <h2 style={headingStyle}>My Profile</h2>

          <div style={profileCardStyle}>

            {/* Profile Header with avatar and name */}
            <div style={profileHeaderStyle}>
              <div style={avatarStyle}>{profile.avatar}</div>
              <div>
                <h2 style={profileNameStyle}>{profile.name}</h2>
                <p style={profileRoleStyle}>🏫 {profile.department || "Administration"}</p>
                <p style={profileEmailStyle}>✉️ {profile.email}</p>
              </div>
            </div>

            {/* Profile Info Section */}
            <div style={infoSectionStyle}>
              {role === "student" && renderStudentInfo()}
              {role === "faculty" && renderFacultyInfo()}
              {role === "admin" && renderAdminInfo()}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;