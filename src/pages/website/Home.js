// src/pages/website/Home.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "academics", label: "Academics" },
    { id: "admissions", label: "Admissions" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "15000+", label: "Alumni Worldwide" },
    { value: "500+", label: "Faculty Members" },
    { value: "50+", label: "Courses Offered" },
    { value: "100+", label: "Companies Hiring" },
    { value: "95%", label: "Placement Rate" },
  ];

  const departments = [
    {
      name: "Computer Science",
      code: "CSE",
      icon: "💻",
      students: 480,
      color: "#3b82f6",
      light: "#eff6ff",
      desc: "B.Tech, M.Tech, MCA programs with specialization in AI and Cloud",
    },
    {
      name: "Electronics & Comm.",
      code: "ECE",
      icon: "📡",
      students: 360,
      color: "#10b981",
      light: "#f0fdf4",
      desc: "Embedded systems, VLSI design and communication engineering",
    },
    {
      name: "Mechanical Engg.",
      code: "ME",
      icon: "⚙️",
      students: 320,
      color: "#f59e0b",
      light: "#fffbeb",
      desc: "Design, manufacturing and industrial automation",
    },
    {
      name: "Civil Engineering",
      code: "CE",
      icon: "🏗️",
      students: 280,
      color: "#ef4444",
      light: "#fef2f2",
      desc: "Structural design, urban planning and construction",
    },
    {
      name: "Information Tech.",
      code: "IT",
      icon: "🌐",
      students: 420,
      color: "#8b5cf6",
      light: "#f5f3ff",
      desc: "Web technologies, cybersecurity and data science",
    },
    {
      name: "Electrical Engg.",
      code: "EE",
      icon: "⚡",
      students: 260,
      color: "#ec4899",
      light: "#fdf2f8",
      desc: "Power systems, renewable energy and control systems",
    },
  ];

  const news = [
    {
      date: "15 Apr 2026",
      title: "LNCT ranked among Top 50 Engineering Colleges in India",
      tag: "Achievement",
      color: "#10b981",
    },
    {
      date: "10 Apr 2026",
      title: "Annual Tech Fest 2026 registrations now open",
      tag: "Event",
      color: "#3b82f6",
    },
    {
      date: "05 Apr 2026",
      title: "New MCA batch admissions open for 2026-27",
      tag: "Admissions",
      color: "#f59e0b",
    },
    {
      date: "01 Apr 2026",
      title: "Campus placement drives by TCS, Infosys and Wipro",
      tag: "Placement",
      color: "#8b5cf6",
    },
  ];

  const facilities = [
    { icon: "🏛️", name: "Smart Classrooms", desc: "200+ digitally equipped classrooms" },
    { icon: "🔬", name: "Research Labs", desc: "State of the art research facilities" },
    { icon: "📚", name: "Central Library", desc: "50000+ books and e-resources" },
    { icon: "🏋️", name: "Sports Complex", desc: "Olympic standard sports facilities" },
    { icon: "🏠", name: "Hostel Facility", desc: "Separate hostels for boys and girls" },
    { icon: "🍽️", name: "Food Court", desc: "Hygienic multi cuisine cafeteria" },
    { icon: "🚌", name: "Transport", desc: "Bus facility covering 50+ routes" },
    { icon: "💊", name: "Medical Center", desc: "24x7 health care facility" },
  ];

  const topCompanies = [
    "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra",
    "Accenture", "Cognizant", "IBM", "Microsoft", "Amazon",
  ];

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      color: "#1e293b",
      overflowX: "hidden",
    }}>

      {/* ===== STICKY NAVBAR ===== */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrollY > 50
          ? "rgba(255,255,255,0.98)"
          : "transparent",
        boxShadow: scrollY > 50
          ? "0 2px 20px rgba(0,0,0,0.08)"
          : "none",
        transition: "all 0.3s ease",
        padding: "0 40px",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "70px",
        }}>

          {/* Logo */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              backgroundColor: "#3b82f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
            }}>
              🎓
            </div>
            <div>
              <p style={{
                fontWeight: "bold",
                fontSize: "16px",
                margin: 0,
                color: scrollY > 50 ? "#1e293b" : "white",
              }}>
                LNCT Campus
              </p>
              <p style={{
                fontSize: "11px",
                margin: 0,
                color: scrollY > 50 ? "#64748b" : "rgba(255,255,255,0.8)",
              }}>
                Bhopal, Madhya Pradesh
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div style={{
            display: "flex",
            gap: "6px",
            alignItems: "center",
          }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "8px 16px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: activeNav === link.id ? "600" : "400",
                  color: scrollY > 50
                    ? (activeNav === link.id ? "#3b82f6" : "#475569")
                    : "white",
                  borderRadius: "8px",
                  transition: "all 0.2s",
                }}
              >
                {link.label}
              </button>
            ))}

            {/* APS Button */}
            <button
              onClick={() => navigate("/login")}
              style={{
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                padding: "9px 20px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                marginLeft: "8px",
              }}
            >
              📊 APS Login
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: scrollY > 50 ? "#1e293b" : "white",
              display: "none",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            backgroundColor: "white",
            padding: "16px 40px",
            borderTop: "0.5px solid #e2e8f0",
          }}>
            {navLinks.map((link) => (
              <div
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{
                  padding: "12px 0",
                  cursor: "pointer",
                  fontSize: "15px",
                  borderBottom: "0.5px solid #f1f5f9",
                  color: "#475569",
                }}
              >
                {link.label}
              </div>
            ))}
            <button
              onClick={() => navigate("/login")}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                marginTop: "12px",
              }}
            >
              📊 APS Login
            </button>
          </div>
        )}
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1d4ed8 100%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background circles decoration */}
        <div style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.05)",
          top: "-200px",
          right: "-200px",
        }} />
        <div style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.05)",
          bottom: "-100px",
          left: "-100px",
        }} />

        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 40px 80px",
          display: "flex",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}>

          {/* Left Content */}
          <div style={{ flex: 1, minWidth: "300px", color: "white" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(59,130,246,0.2)",
              border: "1px solid rgba(59,130,246,0.4)",
              borderRadius: "20px",
              padding: "6px 16px",
              marginBottom: "24px",
              fontSize: "13px",
            }}>
              🏆 Ranked Top 50 Engineering College in India
            </div>

            <h1 style={{
              fontSize: "52px",
              fontWeight: "bold",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}>
              Laxminarayan
              <br />
              <span style={{ color: "#60a5fa" }}>College of</span>
              <br />
              Technology
            </h1>

            <p style={{
              fontSize: "17px",
              opacity: 0.85,
              lineHeight: 1.7,
              margin: "0 0 36px",
              maxWidth: "480px",
            }}>
              Empowering students with world class education,
              cutting edge research and industry ready skills
              since 1994. NAAC A+ Accredited Institution.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <button
                onClick={() => scrollToSection("admissions")}
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  padding: "14px 28px",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Apply Now →
              </button>
              <button
                onClick={() => navigate("/login")}
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.3)",
                  padding: "14px 28px",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                📊 Student Portal
              </button>
            </div>

            {/* Accreditation badges */}
            <div style={{
              display: "flex",
              gap: "12px",
              marginTop: "36px",
              flexWrap: "wrap",
            }}>
              {["NAAC A+", "NBA Accredited", "ISO 9001:2015", "AICTE Approved"].map((badge, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
            minWidth: "280px",
          }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "14px",
                  padding: "20px 16px",
                  textAlign: "center",
                  color: "white",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  margin: "0 0 4px",
                  color: "#60a5fa",
                }}>
                  {stat.value}
                </p>
                <p style={{
                  fontSize: "12px",
                  opacity: 0.8,
                  margin: 0,
                  lineHeight: 1.4,
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== NEWS TICKER ===== */}
      <div style={{
        backgroundColor: "#1e3a8a",
        padding: "12px 40px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        overflow: "hidden",
      }}>
        <span style={{
          backgroundColor: "#3b82f6",
          color: "white",
          padding: "4px 12px",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}>
          📢 LATEST NEWS
        </span>
        <div style={{
          color: "rgba(255,255,255,0.9)",
          fontSize: "13px",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}>
          {news.map((n, i) => (
            <span key={i} style={{ marginRight: "60px" }}>
              📌 {n.title}
            </span>
          ))}
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <section
        id="about"
        style={{
          padding: "80px 40px",
          backgroundColor: "#f8fafc",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{
              backgroundColor: "#eff6ff",
              color: "#3b82f6",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "600",
            }}>
              About Us
            </span>
            <h2 style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#1e293b",
              margin: "12px 0 14px",
            }}>
              Excellence in Education Since 1994
            </h2>
            <p style={{
              fontSize: "15px",
              color: "#64748b",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}>
              LNCT is one of the premier engineering institutions in
              Central India, committed to producing industry-ready
              professionals and innovative researchers.
            </p>
          </div>

          {/* Vision Mission Values */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "50px",
          }}>
            {[
              {
                icon: "🎯",
                title: "Our Vision",
                color: "#3b82f6",
                light: "#eff6ff",
                desc: "To be a globally recognized institution that nurtures innovative thinkers, ethical leaders and responsible citizens who contribute to societal development.",
              },
              {
                icon: "🚀",
                title: "Our Mission",
                color: "#10b981",
                light: "#f0fdf4",
                desc: "Providing quality technical education through cutting edge curriculum, world class infrastructure and industry partnerships to create future ready professionals.",
              },
              {
                icon: "⭐",
                title: "Core Values",
                color: "#f59e0b",
                light: "#fffbeb",
                desc: "Integrity, Innovation, Excellence, Inclusivity and Sustainability are the pillars that guide our academic and administrative practices.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "white",
                  borderRadius: "14px",
                  padding: "28px",
                  border: "0.5px solid #e2e8f0",
                  borderTop: `4px solid ${item.color}`,
                }}
              >
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  backgroundColor: item.light,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "16px",
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#1e293b",
                  margin: "0 0 10px",
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: "14px",
                  color: "#64748b",
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Facilities Grid */}
          <h3 style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#1e293b",
            textAlign: "center",
            marginBottom: "28px",
          }}>
            World Class Facilities
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}>
            {facilities.map((f, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "20px",
                  border: "0.5px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  transition: "transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span style={{ fontSize: "28px" }}>{f.icon}</span>
                <div>
                  <p style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    margin: "0 0 2px",
                    color: "#1e293b",
                  }}>
                    {f.name}
                  </p>
                  <p style={{
                    fontSize: "12px",
                    color: "#64748b",
                    margin: 0,
                  }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== ACADEMICS SECTION ===== */}
      <section
        id="academics"
        style={{
          padding: "80px 40px",
          backgroundColor: "white",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{
              backgroundColor: "#f0fdf4",
              color: "#10b981",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "600",
            }}>
              Academics
            </span>
            <h2 style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#1e293b",
              margin: "12px 0 14px",
            }}>
              Our Departments
            </h2>
            <p style={{
              fontSize: "15px",
              color: "#64748b",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}>
              Choose from a wide range of undergraduate, postgraduate
              and doctoral programs across all engineering disciplines.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
          }}>
            {departments.map((dept, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "white",
                  borderRadius: "14px",
                  padding: "24px",
                  border: "0.5px solid #e2e8f0",
                  borderLeft: `4px solid ${dept.color}`,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)";
                  e.currentTarget.style.backgroundColor = dept.light;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.backgroundColor = "white";
                }}
              >
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: dept.light,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    border: `1px solid ${dept.color}30`,
                  }}>
                    {dept.icon}
                  </div>
                  <span style={{
                    backgroundColor: dept.light,
                    color: dept.color,
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}>
                    {dept.code}
                  </span>
                </div>
                <h3 style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1e293b",
                  margin: "0 0 8px",
                }}>
                  {dept.name}
                </h3>
                <p style={{
                  fontSize: "13px",
                  color: "#64748b",
                  margin: "0 0 14px",
                  lineHeight: 1.6,
                }}>
                  {dept.desc}
                </p>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <span style={{
                    fontSize: "13px",
                    color: "#94a3b8",
                  }}>
                    👥 {dept.students} Students
                  </span>
                  <span style={{
                    color: dept.color,
                    fontSize: "13px",
                    fontWeight: "600",
                  }}>
                    View Details →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== PLACEMENTS SECTION ===== */}
      <section style={{
        padding: "80px 40px",
        backgroundColor: "#0f172a",
        color: "white",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{
              backgroundColor: "rgba(59,130,246,0.2)",
              color: "#60a5fa",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "600",
            }}>
              Placements
            </span>
            <h2 style={{
              fontSize: "36px",
              fontWeight: "bold",
              margin: "12px 0 14px",
            }}>
              Industry Partnerships
            </h2>
            <p style={{
              fontSize: "15px",
              opacity: 0.7,
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}>
              Our students get placed in top companies worldwide
              with excellent salary packages.
            </p>
          </div>

          {/* Placement stats */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
            marginBottom: "50px",
          }}>
            {[
              { value: "95%", label: "Placement Rate", icon: "📈" },
              { value: "₹12 LPA", label: "Average Package", icon: "💰" },
              { value: "₹45 LPA", label: "Highest Package", icon: "🏆" },
              { value: "200+", label: "Recruiting Companies", icon: "🏢" },
              { value: "1500+", label: "Students Placed 2025", icon: "🎓" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  padding: "24px 16px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>
                  {stat.icon}
                </div>
                <p style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#60a5fa",
                  margin: "0 0 4px",
                }}>
                  {stat.value}
                </p>
                <p style={{
                  fontSize: "12px",
                  opacity: 0.7,
                  margin: 0,
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Company logos row */}
          <div style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "14px",
            padding: "30px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            <p style={{
              textAlign: "center",
              fontSize: "13px",
              opacity: 0.6,
              marginBottom: "20px",
            }}>
              OUR RECRUITERS
            </p>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}>
              {topCompanies.map((company, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "8px",
                    padding: "10px 20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===== ADMISSIONS SECTION ===== */}
      <section
        id="admissions"
        style={{
          padding: "80px 40px",
          backgroundColor: "#f8fafc",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{
              backgroundColor: "#fef9c3",
              color: "#854d0e",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "600",
            }}>
              Admissions 2026
            </span>
            <h2 style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#1e293b",
              margin: "12px 0 14px",
            }}>
              Join LNCT Family
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}>
            {[
              {
                program: "B.Tech",
                duration: "4 Years",
                seats: "720 Seats",
                eligibility: "10+2 with PCM (Min 60%)",
                exam: "JEE Main / MP PET",
                color: "#3b82f6",
                light: "#eff6ff",
              },
              {
                program: "M.Tech",
                duration: "2 Years",
                seats: "180 Seats",
                eligibility: "B.Tech / B.E. (Min 60%)",
                exam: "GATE Score",
                color: "#10b981",
                light: "#f0fdf4",
              },
              {
                program: "MCA",
                duration: "2 Years",
                seats: "120 Seats",
                eligibility: "BCA / B.Sc. CS (Min 55%)",
                exam: "MP MCA Entrance",
                color: "#8b5cf6",
                light: "#f5f3ff",
              },
              {
                program: "MBA",
                duration: "2 Years",
                seats: "120 Seats",
                eligibility: "Any Graduate (Min 50%)",
                exam: "CAT / MAT / MP MBA",
                color: "#f59e0b",
                light: "#fffbeb",
              },
            ].map((prog, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "white",
                  borderRadius: "14px",
                  padding: "24px",
                  border: "0.5px solid #e2e8f0",
                  borderTop: `4px solid ${prog.color}`,
                }}
              >
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}>
                  <h3 style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: prog.color,
                    margin: 0,
                  }}>
                    {prog.program}
                  </h3>
                  <span style={{
                    backgroundColor: prog.light,
                    color: prog.color,
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}>
                    {prog.duration}
                  </span>
                </div>

                {[
                  { label: "Total Seats", value: prog.seats, icon: "🪑" },
                  { label: "Eligibility", value: prog.eligibility, icon: "📋" },
                  { label: "Entrance Exam", value: prog.exam, icon: "📝" },
                ].map((item, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                      padding: "8px 10px",
                      backgroundColor: "#f8fafc",
                      borderRadius: "8px",
                    }}
                  >
                    <span style={{ fontSize: "14px" }}>{item.icon}</span>
                    <div>
                      <p style={{
                        fontSize: "10px",
                        color: "#94a3b8",
                        margin: "0 0 1px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}>
                        {item.label}
                      </p>
                      <p style={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#1e293b",
                        margin: 0,
                      }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}

                <button
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: prog.color,
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    marginTop: "8px",
                  }}
                >
                  Apply for {prog.program}
                </button>
              </div>
            ))}
          </div>

          {/* Important dates */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "14px",
            padding: "28px",
            border: "0.5px solid #e2e8f0",
          }}>
            <h3 style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#1e293b",
              marginBottom: "20px",
            }}>
              📅 Important Dates 2026
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "14px",
            }}>
              {[
                { event: "Application Opens", date: "01 March 2026", color: "#10b981" },
                { event: "Last Date to Apply", date: "30 June 2026", color: "#f59e0b" },
                { event: "Entrance Exam", date: "15 July 2026", color: "#3b82f6" },
                { event: "Result Declaration", date: "01 August 2026", color: "#8b5cf6" },
                { event: "Counselling Starts", date: "10 August 2026", color: "#ef4444" },
                { event: "Classes Begin", date: "01 September 2026", color: "#10b981" },
              ].map((d, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px 14px",
                    backgroundColor: "#f8fafc",
                    borderRadius: "8px",
                    borderLeft: `3px solid ${d.color}`,
                  }}
                >
                  <p style={{
                    fontSize: "11px",
                    color: "#94a3b8",
                    margin: "0 0 3px",
                  }}>
                    {d.event}
                  </p>
                  <p style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: d.color,
                    margin: 0,
                  }}>
                    {d.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===== NEWS SECTION ===== */}
      <section style={{
        padding: "80px 40px",
        backgroundColor: "white",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "36px",
            flexWrap: "wrap",
            gap: "12px",
          }}>
            <div>
              <h2 style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#1e293b",
                margin: "0 0 4px",
              }}>
                Latest News & Events
              </h2>
              <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
                Stay updated with what's happening at LNCT
              </p>
            </div>
            <button style={{
              backgroundColor: "#eff6ff",
              color: "#3b82f6",
              border: "1px solid #bfdbfe",
              padding: "8px 18px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
            }}>
              View All News →
            </button>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}>
            {news.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#f8fafc",
                  borderRadius: "12px",
                  padding: "20px",
                  border: "0.5px solid #e2e8f0",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}>
                  <span style={{
                    backgroundColor: item.color + "20",
                    color: item.color,
                    padding: "3px 10px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "600",
                  }}>
                    {item.tag}
                  </span>
                  <span style={{
                    fontSize: "12px",
                    color: "#94a3b8",
                  }}>
                    {item.date}
                  </span>
                </div>
                <p style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#1e293b",
                  margin: "0 0 12px",
                  lineHeight: 1.5,
                }}>
                  {item.title}
                </p>
                <span style={{
                  fontSize: "13px",
                  color: "#3b82f6",
                  fontWeight: "600",
                }}>
                  Read more →
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section
        id="contact"
        style={{
          padding: "80px 40px",
          backgroundColor: "#f8fafc",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{
              backgroundColor: "#fef2f2",
              color: "#ef4444",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "600",
            }}>
              Contact Us
            </span>
            <h2 style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#1e293b",
              margin: "12px 0 14px",
            }}>
              Get In Touch
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
          }}
            className="contact-grid"
          >

            {/* Contact Info */}
            <div>
              <div style={{
                backgroundColor: "white",
                borderRadius: "14px",
                padding: "28px",
                border: "0.5px solid #e2e8f0",
                marginBottom: "16px",
              }}>
                <h3 style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#1e293b",
                  marginBottom: "20px",
                }}>
                  Contact Information
                </h3>

                {[
                  {
                    icon: "📍",
                    label: "Address",
                    value: "LNCT Campus, Raisen Road, Bhopal, Madhya Pradesh - 462022",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+91 755-123-4567 | +91 755-765-4321",
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "admissions@lnct.ac.in | info@lnct.ac.in",
                  },
                  {
                    icon: "🌐",
                    label: "Website",
                    value: "www.lnct.ac.in",
                  },
                  {
                    icon: "⏰",
                    label: "Office Hours",
                    value: "Monday to Saturday: 9:00 AM - 5:00 PM",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "14px",
                      padding: "12px 0",
                      borderBottom: i < 4
                        ? "0.5px solid #f1f5f9"
                        : "none",
                    }}
                  >
                    <div style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: "#eff6ff",
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
                        color: "#94a3b8",
                        margin: "0 0 2px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}>
                        {item.label}
                      </p>
                      <p style={{
                        fontSize: "13px",
                        color: "#1e293b",
                        margin: 0,
                        lineHeight: 1.5,
                      }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div style={{
                backgroundColor: "white",
                borderRadius: "14px",
                padding: "20px 28px",
                border: "0.5px solid #e2e8f0",
                display: "flex",
                gap: "12px",
                alignItems: "center",
              }}>
                <span style={{
                  fontSize: "14px",
                  color: "#64748b",
                  fontWeight: "500",
                }}>
                  Follow us:
                </span>
                {["Facebook", "Twitter", "LinkedIn", "YouTube", "Instagram"].map((s, i) => (
                  <button
                    key={i}
                    style={{
                      backgroundColor: "#f1f5f9",
                      border: "0.5px solid #e2e8f0",
                      borderRadius: "6px",
                      padding: "6px 12px",
                      fontSize: "12px",
                      cursor: "pointer",
                      color: "#475569",
                      fontWeight: "500",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              backgroundColor: "white",
              borderRadius: "14px",
              padding: "28px",
              border: "0.5px solid #e2e8f0",
            }}>
              <h3 style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#1e293b",
                marginBottom: "20px",
              }}>
                Send us a Message
              </h3>

              {[
                { label: "Full Name", type: "text", placeholder: "Enter your full name" },
                { label: "Email Address", type: "email", placeholder: "Enter your email" },
                { label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
                { label: "Subject", type: "text", placeholder: "What is this about?" },
              ].map((field, i) => (
                <div key={i} style={{ marginBottom: "14px" }}>
                  <label style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#475569",
                    marginBottom: "6px",
                  }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      border: "1.5px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "14px",
                      boxSizing: "border-box",
                      outline: "none",
                      backgroundColor: "#f8fafc",
                      color: "#1e293b",
                    }}
                    onFocus={(e) => {
                      e.target.style.border = "1.5px solid #3b82f6";
                      e.target.style.backgroundColor = "white";
                    }}
                    onBlur={(e) => {
                      e.target.style.border = "1.5px solid #e2e8f0";
                      e.target.style.backgroundColor = "#f8fafc";
                    }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#475569",
                  marginBottom: "6px",
                }}>
                  Message
                </label>
                <textarea
                  placeholder="Write your message here..."
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "14px",
                    boxSizing: "border-box",
                    outline: "none",
                    backgroundColor: "#f8fafc",
                    color: "#1e293b",
                    resize: "vertical",
                    fontFamily: "Arial, sans-serif",
                  }}
                  onFocus={(e) => {
                    e.target.style.border = "1.5px solid #3b82f6";
                    e.target.style.backgroundColor = "white";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "1.5px solid #e2e8f0";
                    e.target.style.backgroundColor = "#f8fafc";
                  }}
                />
              </div>

              <button style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: "bold",
                cursor: "pointer",
              }}>
                Send Message →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ===== APS BANNER ===== */}
      <section style={{
        padding: "60px 40px",
        background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
        textAlign: "center",
        color: "white",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "bold",
            margin: "0 0 14px",
          }}>
            Access Your Academic Performance
          </h2>
          <p style={{
            fontSize: "16px",
            opacity: 0.85,
            margin: "0 0 28px",
            lineHeight: 1.6,
          }}>
            Students, Faculty and Admins can login to the Academic
            Performance Analysis System to track results and analytics.
          </p>
          <button
            onClick={() => navigate("/login")}
            style={{
              backgroundColor: "white",
              color: "#1d4ed8",
              border: "none",
              padding: "14px 36px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            📊 Login to APS Portal →
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{
        backgroundColor: "#0f172a",
        color: "rgba(255,255,255,0.7)",
        padding: "50px 40px 24px",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "40px",
          }}
            className="footer-grid"
          >

            {/* About */}
            <div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}>
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  backgroundColor: "#3b82f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}>
                  🎓
                </div>
                <p style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "15px",
                  margin: 0,
                }}>
                  LNCT Campus Bhopal
                </p>
              </div>
              <p style={{
                fontSize: "13px",
                lineHeight: 1.7,
                margin: "0 0 16px",
                maxWidth: "260px",
              }}>
                Laxminarayan College of Technology is a premier
                engineering institution in Bhopal, committed to
                excellence in education since 1994.
              </p>
              <div style={{ display: "flex", gap: "8px" }}>
                {["NAAC A+", "NBA", "ISO"].map((badge, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: "rgba(59,130,246,0.2)",
                      color: "#60a5fa",
                      border: "1px solid rgba(59,130,246,0.3)",
                      borderRadius: "4px",
                      padding: "3px 8px",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}>
                Quick Links
              </h4>
              {["Home", "About Us", "Academics", "Admissions", "Placements", "Research", "Alumni"].map((link, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "13px",
                    marginBottom: "8px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  → {link}
                </p>
              ))}
            </div>

            {/* Programs */}
            <div>
              <h4 style={{
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}>
                Programs
              </h4>
              {["B.Tech", "M.Tech", "MCA", "MBA", "B.Sc", "Ph.D", "Diploma"].map((prog, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "13px",
                    marginBottom: "8px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  🎓 {prog}
                </p>
              ))}
            </div>

            {/* Student Portal */}
            <div>
              <h4 style={{
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}>
                Student Portal
              </h4>
              {[
                { label: "Student Login", path: "/login" },
                { label: "Faculty Login", path: "/login" },
                { label: "Admin Login", path: "/login" },
                { label: "Results Portal", path: "/login" },
                { label: "Attendance", path: "/login" },
                { label: "Fee Payment", path: "/login" },
              ].map((item, i) => (
                <p
                  key={i}
                  onClick={() => navigate(item.path)}
                  style={{
                    fontSize: "13px",
                    marginBottom: "8px",
                    cursor: "pointer",
                    color: i < 3 ? "#60a5fa" : "rgba(255,255,255,0.7)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      i < 3 ? "#60a5fa" : "rgba(255,255,255,0.7)";
                  }}
                >
                  → {item.label}
                </p>
              ))}
            </div>

          </div>

          {/* Footer bottom */}
          <div style={{
            borderTop: "0.5px solid rgba(255,255,255,0.1)",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}>
            <p style={{ fontSize: "12px", margin: 0 }}>
              © 2026 LNCT Campus Bhopal. All rights reserved.
            </p>
            <p style={{ fontSize: "12px", margin: 0 }}>
              Academic Performance Analysis System — MCA Final Year Project
            </p>
          </div>

        </div>
      </footer>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </div>
  );
}

export default Home;