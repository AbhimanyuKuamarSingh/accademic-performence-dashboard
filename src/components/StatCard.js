// ============================================
// StatCard.js
// ============================================
// PURPOSE:
//   Displays a single statistic in a colored card
//   Used in all 3 dashboards to show key numbers
//
// PROPS RECEIVED:
//   props.title  = label shown below the number
//   props.value  = the number or text to display
//   props.color  = background color of the card
//
// EXAMPLE USAGE:
//   <StatCard title="Total Students" value={120} color="#3498db" />
// ============================================

import React from "react";

function StatCard(props) {

  // Card container style
  // Uses props.color for background so each card can be different color
  const cardStyle = {
    backgroundColor: props.color || "#3498db",
    color: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    minWidth: "140px",
    flex: 1,
  };

  // Large number style
  const valueStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    margin: "0 0 8px 0",
  };

  // Label below the number
  const titleStyle = {
    fontSize: "14px",
    margin: 0,
    opacity: 0.9,
  };

  return (
    <div style={cardStyle}>
      {/* Show the value - could be number or text */}
      <p style={valueStyle}>{props.value}</p>

      {/* Show the label */}
      <p style={titleStyle}>{props.title}</p>
    </div>
  );
}

// Export so other files can import this component
export default StatCard;