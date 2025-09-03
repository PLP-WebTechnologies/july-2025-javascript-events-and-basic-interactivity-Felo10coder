// =====================
// Light/Dark Mode Toggle
// =====================
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    modeToggle.textContent = "Switch to Light Mode";
  } else {
    modeToggle.textContent = "Switch to Dark Mode";
  }
});

// Live Score Counter
const arsenalScoreEl = document.getElementById("arsenalScore");
const chelseaScoreEl = document.getElementById("chelseaScore");
let arsenalScore = 0;
let chelseaScore = 0;

document.getElementById("arsenalBtn").onclick = () => {
  arsenalScore++;
  arsenalScoreEl.textContent = arsenalScore;
};

document.getElementById("chelseaBtn").onclick = () => {
  chelseaScore++;
  chelseaScoreEl.textContent = chelseaScore;
};


// FAQ Section Toggle

const faqToggle = document.getElementById("faqToggle");
const faq = document.getElementById("faq");

faqToggle.addEventListener("click", (e) => {
  e.preventDefault();
  faq.style.display = faq.style.display === "none" ? "block" : "none";
});

// =====================
// Custom Form Validation
// =====================
const fanForm = document.getElementById("fanForm");
const formMessage = document.getElementById("formMessage");

fanForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validate Name
  if (name.length < 3) {
    formMessage.textContent = "⚠️ Name must be at least 3 characters long.";
    formMessage.style.color = "red";
    return;
  }

  // Validate Email (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "⚠️ Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  // Validate Password
  if (password.length < 6) {
    formMessage.textContent = "⚠️ Password must be at least 6 characters.";
    formMessage.style.color = "red";
    return;
  }

  // If all validation passes
  formMessage.textContent = `✅ Welcome to the EPL Fan Club, ${name}!`;
  formMessage.style.color = "green";
});
