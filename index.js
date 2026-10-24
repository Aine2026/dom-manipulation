
// 1. Change the page title and main heading
const myName = "Aline Mutuyeyezu";

document.title = myName + " | Portfolio";
document.querySelector("h1").textContent = myName;

// 2. Set the profile image src and alt


// 3. Add active class to the first navigation link
const firstLink = document.querySelector
const profileImage = document.getElementById("profile-image");

profileImage.src = "image.png.png";
profileImage.alt = "Photo of Aine Mutuyeyezu";
("nav a");
firstLink.classList.add("active");

// 4. Add three skills from an array
const skills = ["HTML", "CSS", "JavaScript"];
const skillsList = document.getElementById("skills-list");

skills.forEach(function(skill) {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// 5. Display today's date in the footer
const today = new Date().toLocaleDateString();

document.getElementById("last-updated").textContent =
    "Last updated: " + today;
