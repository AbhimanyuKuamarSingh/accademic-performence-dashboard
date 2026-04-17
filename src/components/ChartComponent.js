// ============================================
// ChartComponent.js
// ============================================
// PURPOSE:
//   A reusable chart component that can show
//   3 different types of charts based on props.type
//
// PROPS RECEIVED:
//   props.type  = "bar" or "pie" or "line"
//   props.data  = array of data objects
//   props.title = heading above the chart
//
// EXAMPLE USAGE:
//   <ChartComponent type="bar" title="Results" data={chartData} />
//   <ChartComponent type="pie" title="Ratio" data={pieData} />
//   <ChartComponent type="line" title="Trend" data={lineData} />
// ============================================

import React from "react";
import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
  LineChart, Line,
} from "recharts";

// Colors used for pie chart slices
// Green for pass, Red for fail
const PIE_COLORS = ["#27ae60", "#e74c3c"];

function ChartComponent(props) {

  // Container card style
  const containerStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  };

  // Chart heading style
  const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#2c3e50",
  };

  // ---- renderChart Function ----
  // Decides which chart to show based on props.type
  // If type is "bar" - shows BarChart
  // If type is "pie" - shows PieChart
  // If type is "line" - shows LineChart
  const renderChart = () => {

    // BAR CHART
    // Used for comparing values across categories
    if (props.type === "bar") {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="marks"
              fill="#3498db"
              radius={[4, 4, 0, 0]}
              name="Marks"
            />
          </BarChart>
        </ResponsiveContainer>
      );
    }

    // PIE CHART
    // Used for showing proportions like pass vs fail
    if (props.type === "pie") {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={props.data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}%`}
            >
              {/* Map each slice to a different color */}
              {props.data.map((entry, index) => (
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
      );
    }

    // LINE CHART
    // Used for showing trends over time
    if (props.type === "line") {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="semester" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="marks"
              stroke="#8e44ad"
              strokeWidth={3}
              dot={{ r: 6, fill: "#8e44ad" }}
              name="Average Marks"
            />
          </LineChart>
        </ResponsiveContainer>
      );
    }

    // Default - if no type matches
    return <p>No chart type specified</p>;
  };

  return (
    <div style={containerStyle}>
      {/* Chart heading */}
      <h3 style={titleStyle}>{props.title}</h3>

      {/* Render the correct chart */}
      {renderChart()}
    </div>
  );
}

// Export so dashboards can import this component
export default ChartComponent;