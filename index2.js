
// Array containing six students
const students = [
    { name: "Aline", course: "Frontend", score: 92 },
    { name: "Eric", course: "Backend", score: 45 },
    { name: "Grace", course: "Frontend", score: 85 },
    { name: "Jean", course: "Backend", score: 67 },
    { name: "Diane", course: "Frontend", score: 38 },
    { name: "Patrick", course: "Backend", score: 80 }
];

// Sort a COPY of the array: Frontend students first
const sortedStudents = [...students].sort((a, b) => {
    if (a.course === "Frontend" && b.course !== "Frontend") {
        return -1;
    }

    if (a.course !== "Frontend" && b.course === "Frontend") {
        return 1;
    }

    return 0;
});

// Display the total number of students
document.getElementById("student-count").textContent =
    students.length;

// Calculate and display the average score
const totalScore = students.reduce((total, student) => {
    return total + student.score;
}, 0);

const average = totalScore / students.length;

document.getElementById("average-score").textContent =
    average.toFixed(2);

// Find the highest score and all students who achieved it
const highestScore = Math.max(
    ...students.map(student => student.score)
);

const topStudents = students
    .filter(student => student.score === highestScore)
    .map(student => student.name);

document.getElementById("top-students").textContent =
    topStudents.join(", ") + " (" + highestScore + ")";

// Render student cards
const board = document.getElementById("student-board");

sortedStudents.forEach(student => {
    const card = document.createElement("div");

    // Apply classes based on the student's score
    card.classList.add("student-card");

    if (student.score >= 80) {
        card.classList.add("high-score");
    }

    if (student.score < 50) {
        card.classList.add("failed");
    }

    // Add student information to the card
    card.innerHTML = `
        <h3>${student.name}</h3>
        <p>Course: ${student.course}</p>
        <p>Score: ${student.score}/100</p>
        <p>Status: ${
            student.score < 50 ? "Failed" : "Passed"
        }</p>
    `;

    board.appendChild(card);
});
