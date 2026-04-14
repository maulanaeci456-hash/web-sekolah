// Main JavaScript file untuk Website Pembelajaran
document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Pembelajaran siap digunakan!");

  // Inisialisasi aplikasi
  initializeApp();
});

// Data soal untuk berbagai kategori
const quizData = {
  matematika: [
    {
      question: "Berapakah hasil dari 2 + 2 × 3?",
      options: ["8", "10", "12", "6"],
      correct: 0,
    },
    {
      question: "Jika x + 5 = 12, maka nilai x adalah?",
      options: ["5", "7", "8", "17"],
      correct: 1,
    },
    {
      question: "Luas lingkaran dengan jari-jari 7 cm adalah? (π = 22/7)",
      options: ["154 cm²", "144 cm²", "164 cm²", "174 cm²"],
      correct: 0,
    },
    {
      question: "Hasil dari √64 adalah?",
      options: ["6", "7", "8", "9"],
      correct: 2,
    },
    {
      question:
        "Dalam segitiga siku-siku, jika kedua sisi siku-sikunya 3 dan 4, maka sisi miringnya adalah?",
      options: ["5", "6", "7", "8"],
      correct: 0,
    },
  ],
  fisika: [
    {
      question: "Satuan dari gaya dalam sistem SI adalah?",
      options: ["Joule", "Newton", "Watt", "Pascal"],
      correct: 1,
    },
    {
      question: "Kecepatan cahaya dalam vakum adalah?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁹ m/s"],
      correct: 0,
    },
    {
      question: "Hukum Newton I menyatakan bahwa?",
      options: ["F = ma", "Aksi = Reaksi", "Benda diam tetap diam", "E = mc²"],
      correct: 2,
    },
    {
      question: "Energi kinetik bergantung pada?",
      options: [
        "Massa saja",
        "Kecepatan saja",
        "Massa dan kecepatan",
        "Tinggi benda",
      ],
      correct: 2,
    },
    {
      question:
        "Gelombang elektromagnetik yang memiliki frekuensi tertinggi adalah?",
      options: ["Radio", "Inframerah", "Sinar-X", "Sinar Gamma"],
      correct: 3,
    },
  ],
  kimia: [
    {
      question: "Simbol kimia untuk emas adalah?",
      options: ["Go", "Au", "Ag", "Al"],
      correct: 1,
    },
    {
      question: "Jumlah proton dalam atom karbon adalah?",
      options: ["4", "6", "8", "12"],
      correct: 1,
    },
    {
      question: "pH air murni pada suhu 25°C adalah?",
      options: ["6", "7", "8", "9"],
      correct: 1,
    },
    {
      question: "Rumus kimia untuk air adalah?",
      options: ["H₂O", "CO₂", "NaCl", "CH₄"],
      correct: 0,
    },
    {
      question: "Gas mulia yang paling ringan adalah?",
      options: ["Neon", "Argon", "Helium", "Xenon"],
      correct: 2,
    },
  ],
  biologi: [
    {
      question: "Organel sel yang berfungsi sebagai pusat kontrol adalah?",
      options: ["Mitokondria", "Nukleus", "Ribosom", "Lisosom"],
      correct: 1,
    },
    {
      question: "Proses fotosintesis terjadi di?",
      options: ["Mitokondria", "Kloroplas", "Nukleus", "Vakuola"],
      correct: 1,
    },
    {
      question: "DNA tersusun atas basa nitrogen, kecuali?",
      options: ["Adenin", "Guanin", "Urasil", "Timin"],
      correct: 2,
    },
    {
      question: "Sistem peredaran darah manusia disebut?",
      options: ["Terbuka", "Tertutup", "Campuran", "Sederhana"],
      correct: 1,
    },
    {
      question: "Hormon insulin diproduksi oleh?",
      options: ["Hati", "Ginjal", "Pankreas", "Kelenjar tiroid"],
      correct: 2,
    },
  ],
};

// State management untuk aplikasi
let currentState = {
  activeSection: "beranda",
  currentQuiz: null,
  currentQuestion: 0,
  userAnswers: [],
  score: 0,
};

// Inisialisasi aplikasi
function initializeApp() {
  setupNavigation();
  setupHeroButton();
  setupLearningCards();
  setupQuizCards();
  setupQuizControls();

  // Set section awal
  showSection("beranda");
}

// Setup navigasi
function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = link.getAttribute("href").substring(1);

      // Update active nav link
      navLinks.forEach((nl) => nl.classList.remove("active"));
      link.classList.add("active");

      // Show target section
      showSection(targetSection);
    });
  });
}

// Setup tombol "Belajar Sekarang"
function setupHeroButton() {
  const belajarBtn = document.getElementById("belajarSekarang");

  belajarBtn.addEventListener("click", () => {
    // Animate button
    belajarBtn.style.transform = "scale(0.95)";
    setTimeout(() => {
      belajarBtn.style.transform = "scale(1)";
    }, 150);

    // Navigate to pembelajaran section
    showSection("pembelajaran");
    updateActiveNavLink("pembelajaran");

    // Add some visual feedback
    showNotification("Selamat belajar! 🎓", "success");
  });
}

// Setup kartu pembelajaran
function setupLearningCards() {
  const learningCards = document.querySelectorAll(".learning-card");

  learningCards.forEach((card) => {
    const button = card.querySelector(".btn-secondary");
    const topic = card.getAttribute("data-topic");

    button.addEventListener("click", () => {
      // Animate button
      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 150);

      showNotification(`Memulai pembelajaran ${topic}! 📚`, "info");

      // Simulate loading pembelajaran content
      setTimeout(() => {
        showNotification(`Materi ${topic} sedang disiapkan...`, "info");
      }, 1000);
    });

    // Add hover effect
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Setup kartu kuis
function setupQuizCards() {
  const quizCards = document.querySelectorAll(".quiz-card");

  quizCards.forEach((card) => {
    const button = card.querySelector(".btn-quiz");
    const category = card.getAttribute("data-category");

    button.addEventListener("click", () => {
      startQuiz(category);
    });

    // Add hover effect
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Setup kontrol kuis
function setupQuizControls() {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");
  const restartBtn = document.getElementById("restart-btn");
  const backToMenuBtn = document.getElementById("back-to-menu");

  prevBtn.addEventListener("click", () => {
    if (currentState.currentQuestion > 0) {
      currentState.currentQuestion--;
      displayQuestion();
    }
  });

  nextBtn.addEventListener("click", () => {
    saveCurrentAnswer();
    if (
      currentState.currentQuestion <
      quizData[currentState.currentQuiz].length - 1
    ) {
      currentState.currentQuestion++;
      displayQuestion();
    }
  });

  submitBtn.addEventListener("click", () => {
    saveCurrentAnswer();
    finishQuiz();
  });

  restartBtn.addEventListener("click", () => {
    startQuiz(currentState.currentQuiz);
  });

  backToMenuBtn.addEventListener("click", () => {
    hideQuiz();
    showNotification("Kembali ke menu soal latihan", "info");
  });
}

// Fungsi untuk menampilkan section
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active");
    currentState.activeSection = sectionId;
  }

  // Hide quiz if switching sections
  if (sectionId !== "soal") {
    hideQuiz();
  }
}

// Update active navigation link
function updateActiveNavLink(sectionId) {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${sectionId}`) {
      link.classList.add("active");
    }
  });
}

// Mulai kuis
function startQuiz(category) {
  if (!quizData[category]) {
    showNotification("Kategori kuis tidak ditemukan!", "error");
    return;
  }

  currentState.currentQuiz = category;
  currentState.currentQuestion = 0;
  currentState.userAnswers = [];
  currentState.score = 0;

  // Show quiz container
  const quizContainer = document.getElementById("quiz-container");
  const quizResult = document.getElementById("quiz-result");
  const quizCategories = document.querySelector(".quiz-categories");

  quizCategories.style.display = "none";
  quizContainer.classList.remove("hidden");
  quizResult.classList.add("hidden");

  // Set quiz title
  const quizTitle = document.getElementById("quiz-title");
  quizTitle.textContent = `Kuis ${
    category.charAt(0).toUpperCase() + category.slice(1)
  }`;

  // Initialize answers array
  for (let i = 0; i < quizData[category].length; i++) {
    currentState.userAnswers.push(null);
  }

  displayQuestion();
  showNotification(`Kuis ${category} dimulai! Semangat! 💪`, "success");
}

// Tampilkan pertanyaan
function displayQuestion() {
  const quiz = quizData[currentState.currentQuiz];
  const question = quiz[currentState.currentQuestion];

  // Update question number
  document.getElementById("question-number").textContent =
    currentState.currentQuestion + 1;
  document.getElementById("total-questions").textContent = quiz.length;

  // Update question text
  document.getElementById("question-text").textContent = question.question;

  // Create options
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => selectOption(index));

    // Restore previous selection
    if (currentState.userAnswers[currentState.currentQuestion] === index) {
      optionElement.classList.add("selected");
    }

    optionsContainer.appendChild(optionElement);
  });

  // Update button states
  updateQuizButtons();
}

// Pilih opsi jawaban
function selectOption(optionIndex) {
  // Remove previous selection
  const options = document.querySelectorAll(".option");
  options.forEach((option) => option.classList.remove("selected"));

  // Add selection to clicked option
  options[optionIndex].classList.add("selected");

  // Save selection
  currentState.userAnswers[currentState.currentQuestion] = optionIndex;

  // Update buttons
  updateQuizButtons();
}

// Update status tombol kuis
function updateQuizButtons() {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");

  // Previous button
  prevBtn.disabled = currentState.currentQuestion === 0;

  // Next/Submit button
  const isLastQuestion =
    currentState.currentQuestion ===
    quizData[currentState.currentQuiz].length - 1;

  if (isLastQuestion) {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  }
}

// Simpan jawaban saat ini
function saveCurrentAnswer() {
  const selectedOption = document.querySelector(".option.selected");
  if (selectedOption) {
    const options = Array.from(document.querySelectorAll(".option"));
    const selectedIndex = options.indexOf(selectedOption);
    currentState.userAnswers[currentState.currentQuestion] = selectedIndex;
  }
}

// Selesaikan kuis
function finishQuiz() {
  // Calculate score
  const quiz = quizData[currentState.currentQuiz];
  currentState.score = 0;

  for (let i = 0; i < quiz.length; i++) {
    if (currentState.userAnswers[i] === quiz[i].correct) {
      currentState.score++;
    }
  }

  // Show result
  showQuizResult();
}

// Tampilkan hasil kuis
function showQuizResult() {
  const quizContainer = document.getElementById("quiz-container");
  const quizResult = document.getElementById("quiz-result");

  quizContainer.classList.add("hidden");
  quizResult.classList.remove("hidden");

  // Update score display
  document.getElementById("final-score").textContent = currentState.score;
  document.getElementById("max-score").textContent =
    quizData[currentState.currentQuiz].length;

  // Update result message
  const percentage =
    (currentState.score / quizData[currentState.currentQuiz].length) * 100;
  const resultMessage = document.getElementById("result-message");

  if (percentage >= 80) {
    resultMessage.textContent =
      "Luar biasa! Anda menguasai materi dengan sangat baik! 🌟";
    resultMessage.style.color = "#4ecdc4";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Bagus! Terus tingkatkan pemahaman Anda! 👍";
    resultMessage.style.color = "#feca57";
  } else {
    resultMessage.textContent =
      "Jangan menyerah! Mari belajar lebih giat lagi! 💪";
    resultMessage.style.color = "#ff6b6b";
  }

  showNotification(
    `Kuis selesai! Skor: ${currentState.score}/${
      quizData[currentState.currentQuiz].length
    }`,
    "success"
  );
}

// Sembunyikan kuis
function hideQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  const quizResult = document.getElementById("quiz-result");
  const quizCategories = document.querySelector(".quiz-categories");

  quizContainer.classList.add("hidden");
  quizResult.classList.add("hidden");
  quizCategories.style.display = "grid";

  // Reset quiz state
  currentState.currentQuiz = null;
  currentState.currentQuestion = 0;
  currentState.userAnswers = [];
  currentState.score = 0;
}

// Fungsi notifikasi
function showNotification(message, type = "info") {
  // Remove existing notification
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Style notification
  Object.assign(notification.style, {
    position: "fixed",
    top: "100px",
    right: "20px",
    padding: "1rem 1.5rem",
    borderRadius: "10px",
    color: "white",
    fontWeight: "500",
    zIndex: "10000",
    transform: "translateX(100%)",
    transition: "transform 0.3s ease",
    maxWidth: "300px",
    wordWrap: "break-word",
  });

  // Set background color based on type
  switch (type) {
    case "success":
      notification.style.background =
        "linear-gradient(45deg, #4ecdc4, #44a08d)";
      break;
    case "error":
      notification.style.background =
        "linear-gradient(45deg, #ff6b6b, #ee5a52)";
      break;
    case "info":
    default:
      notification.style.background =
        "linear-gradient(45deg, #667eea, #764ba2)";
      break;
  }

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Smooth scroll untuk navigasi
function smoothScrollTo(element) {
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Event listeners untuk keyboard navigation
document.addEventListener("keydown", (e) => {
  // Jika sedang dalam kuis
  if (
    currentState.currentQuiz &&
    !document.getElementById("quiz-container").classList.contains("hidden")
  ) {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        if (currentState.currentQuestion > 0) {
          document.getElementById("prev-btn").click();
        }
        break;
      case "ArrowRight":
        e.preventDefault();
        const nextBtn = document.getElementById("next-btn");
        const submitBtn = document.getElementById("submit-btn");
        if (!nextBtn.classList.contains("hidden")) {
          nextBtn.click();
        } else if (!submitBtn.classList.contains("hidden")) {
          submitBtn.click();
        }
        break;
      case "1":
      case "2":
      case "3":
      case "4":
        e.preventDefault();
        const optionIndex = parseInt(e.key) - 1;
        const options = document.querySelectorAll(".option");
        if (options[optionIndex]) {
          options[optionIndex].click();
        }
        break;
    }
  }
});

// Initialize floating animation untuk hero cards
function initializeFloatingAnimation() {
  const floatingCards = document.querySelectorAll(".floating-card");

  floatingCards.forEach((card, index) => {
    // Random delay untuk setiap card
    const delay = index * 0.5;
    card.style.animationDelay = `-${delay}s`;

    // Random floating speed
    const duration = 3 + Math.random() * 2; // 3-5 seconds
    card.style.animationDuration = `${duration}s`;
  });
}

// Call floating animation on load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(initializeFloatingAnimation, 500);
});

console.log("🎓 Website Pembelajaran berhasil dimuat!");
