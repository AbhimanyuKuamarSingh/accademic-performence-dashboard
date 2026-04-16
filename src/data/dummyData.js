// ============================================
// dummyData.js
// ============================================
// PURPOSE:
//   Contains all the dummy/mock data used in the project
//   In a real project this data would come from a backend API
//   Here we use hardcoded data to simulate a real system
//
// HOW TO USE:
//   import dummyData from "../data/dummyData"
//   then use dummyData.chartData or dummyData.stats etc
// ============================================

const dummyData = {

  // Used in the results table
  // Each object has subject, marks, maxMarks, grade
  studentResults: [
    { subject: "Mathematics", marks: 85, maxMarks: 100, grade: "A" },
    { subject: "Physics", marks: 72, maxMarks: 100, grade: "B" },
    { subject: "Chemistry", marks: 68, maxMarks: 100, grade: "B" },
    { subject: "English", marks: 90, maxMarks: 100, grade: "A+" },
    { subject: "Computer Science", marks: 95, maxMarks: 100, grade: "A+" },
  ],

  // Used in the Bar Chart
  // name = x axis label, marks = bar height
  chartData: [
    { name: "Math", marks: 85 },
    { name: "Physics", marks: 72 },
    { name: "Chemistry", marks: 68 },
    { name: "English", marks: 90 },
    { name: "CS", marks: 95 },
  ],

  // Used in the Pie Chart
  // Shows pass vs fail percentage
  pieData: [
    { name: "Pass", value: 88 },
    { name: "Fail", value: 12 },
  ],

  // Used in the Line Chart
  // Shows performance trend over semesters
  lineData: [
    { semester: "Sem 1", marks: 65 },
    { semester: "Sem 2", marks: 70 },
    { semester: "Sem 3", marks: 68 },
    { semester: "Sem 4", marks: 75 },
    { semester: "Sem 5", marks: 82 },
    { semester: "Sem 6", marks: 90 },
  ],

  // Used in StatCards on all dashboards
  stats: {
    totalStudents: 120,  // total number of students
    averageScore: 76,    // class average score
    passPercentage: 88,  // percentage of students who passed
    topScore: 98,        // highest score in class
  },

};

// Export as default so other files can import it
export default dummyData;