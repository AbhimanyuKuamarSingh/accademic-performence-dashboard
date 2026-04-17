// src/components/TableComponent.js
import React, { useState } from "react";

function TableComponent(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  // ---- Safety Check ----
  // If no data or columns are passed, show a message instead of crashing
  if (!props.data || !props.columns) {
    return (
      <div style={{ padding: "20px", color: "#7f8c8d" }}>
        No data available
      </div>
    );
  }

  // ---- Sorting Logic ----
  const handleSort = (columnName) => {
    const key = columnName.toLowerCase();
    if (sortConfig.key === key) {
      setSortConfig({
        key: key,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortConfig({ key: key, direction: "asc" });
    }
  };

  // ---- Filter Logic ----
  const filteredData = props.data.filter((row) => {
    return Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // ---- Sort Logic ----
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valA = a[sortConfig.key];
    const valB = b[sortConfig.key];
    if (!isNaN(valA) && !isNaN(valB)) {
      return sortConfig.direction === "asc"
        ? Number(valA) - Number(valB)
        : Number(valB) - Number(valA);
    }
    if (String(valA) < String(valB)) return sortConfig.direction === "asc" ? -1 : 1;
    if (String(valA) > String(valB)) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  // ---- Check if row is failed ----
  const isFailed = (row) => {
    return row.marks !== undefined && Number(row.marks) < 40;
  };

  // ---- Sort Arrow ----
  const getSortArrow = (columnName) => {
    const key = columnName.toLowerCase();
    if (sortConfig.key !== key) return " ↕";
    return sortConfig.direction === "asc" ? " ↑" : " ↓";
  };

  // ---- Styles ----
  const containerStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  };

  const headerRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "14px",
    flexWrap: "wrap",
    gap: "10px",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: 0,
  };

  const searchBoxStyle = {
    padding: "8px 12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "13px",
    width: "200px",
    outline: "none",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  };

  const thStyle = {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "10px 14px",
    textAlign: "left",
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
  };

  const tdStyle = {
    padding: "10px 14px",
    borderBottom: "1px solid #ecf0f1",
  };

  const noDataStyle = {
    textAlign: "center",
    padding: "20px",
    color: "#7f8c8d",
    fontSize: "14px",
  };

  const resultCountStyle = {
    fontSize: "12px",
    color: "#7f8c8d",
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>

      {/* Title and Search Box */}
      <div style={headerRowStyle}>
        <h3 style={titleStyle}>{props.title || "Results Table"}</h3>
        <input
          style={searchBoxStyle}
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>#</th>
              {props.columns.map((col, index) => (
                <th
                  key={index}
                  style={thStyle}
                  onClick={() => handleSort(col)}
                  title={`Click to sort by ${col}`}
                >
                  {col}
                  <span style={{ fontSize: "11px" }}>
                    {getSortArrow(col)}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sortedData.length === 0 ? (
              <tr>
                <td colSpan={props.columns.length + 1} style={noDataStyle}>
                  No results found for "{searchTerm}"
                </td>
              </tr>
            ) : (
              sortedData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  style={{
                    backgroundColor: isFailed(row)
                      ? "#fdecea"
                      : rowIndex % 2 === 0
                      ? "white"
                      : "#f8f9fa",
                  }}
                >
                  <td style={{ ...tdStyle, color: "#7f8c8d", width: "40px" }}>
                    {rowIndex + 1}
                  </td>

                  {props.columns.map((col, colIndex) => {
                    const key = col.toLowerCase();
                    const value =
                      row[key] !== undefined
                        ? row[key]
                        : row[Object.keys(row)[colIndex]];

                    return (
                      <td
                        key={colIndex}
                        style={{
                          ...tdStyle,
                          color:
                            key === "marks" && Number(value) < 40
                              ? "#e74c3c"
                              : key === "marks" && Number(value) >= 75
                              ? "#27ae60"
                              : "#2c3e50",
                          fontWeight: key === "marks" ? "bold" : "normal",
                        }}
                      >
                        {value}
                        {key === "marks" && Number(value) < 40 && (
                          <span
                            style={{
                              marginLeft: "8px",
                              backgroundColor: "#e74c3c",
                              color: "white",
                              fontSize: "10px",
                              padding: "2px 6px",
                              borderRadius: "10px",
                            }}
                          >
                            FAIL
                          </span>
                        )}
                        {key === "marks" && Number(value) >= 40 && (
                          <span
                            style={{
                              marginLeft: "8px",
                              backgroundColor: "#27ae60",
                              color: "white",
                              fontSize: "10px",
                              padding: "2px 6px",
                              borderRadius: "10px",
                            }}
                          >
                            PASS
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Record count */}
      <p style={resultCountStyle}>
        Showing {sortedData.length} of {props.data.length} records
        {searchTerm && ` for "${searchTerm}"`}
      </p>
    </div>
  );
}

export default TableComponent;