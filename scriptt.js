// Main JavaScript file untuk Website Pembelajaran Enhanced
document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Pembelajaran Enhanced siap digunakan!");
  
  // Inisialisasi aplikasi
  initializeApp();
});

// Data default untuk soal-soal kuis
const defaultQuizData = {
  matematika: [
    {
      id: 1,
      question: "Berapakah hasil dari 2 + 2 × 3?",
      options: ["8", "10", "12", "6"],
      correct: 0,
      difficulty: "easy"
    },
    {
      id: 2,
      question: "Jika x + 5 = 12, maka nilai x adalah?",
      options: ["5", "7", "8", "17"],
      correct: 1,
      difficulty: "medium"
    },
    {
      id: 3,
      question: "Luas lingkaran dengan jari-jari 7 cm adalah? (π = 22/7)",
      options: ["154 cm²", "144 cm²", "164 cm²", "174 cm²"],
      correct: 0,
      difficulty: "medium"
    },
    {
      id: 4,
      question: "Hasil dari √64 adalah?",
      options: ["6", "7", "8", "9"],
      correct: 2,
      difficulty: "easy"
    },
    {
      id: 5,
      question: "Dalam segitiga siku-siku, jika kedua sisi siku-sikunya 3 dan 4, maka sisi miringnya adalah?",
      options: ["5", "6", "7", "8"],
      correct: 0,
      difficulty: "hard"
    }
  ],
  fisika: [
    {
      id: 6,
      question: "Satuan dari gaya dalam sistem SI adalah?",
      options: ["Joule", "Newton", "Watt", "Pascal"],
      correct: 1,
      difficulty: "easy"
    },
    {
      id: 7,
      question: "Kecepatan cahaya dalam vakum adalah?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁹ m/s"],
      correct: 0,
      difficulty: "medium"
    },
    {
      id: 8,
      question: "Hukum Newton I menyatakan bahwa?",
      options: ["F = ma", "Aksi = Reaksi", "Benda diam tetap diam", "E = mc²"],
      correct: 2,
      difficulty: "medium"
    },
    {
      id: 9,
      question: "Energi kinetik bergantung pada?",
      options: ["Massa saja", "Kecepatan saja", "Massa dan kecepatan", "Tinggi benda"],
      correct: 2,
      difficulty: "hard"
    },
    {
      id: 10,
      question: "Gelombang elektromagnetik yang memiliki frekuensi tertinggi adalah?",
      options: ["Radio", "Inframerah", "Sinar-X", "Sinar Gamma"],
      correct: 3,
      difficulty: "hard"
    }
  ],
  kimia: [
    {
      id: 11,
      question: "Simbol kimia untuk emas adalah?",
      options: ["Go", "Au", "Ag", "Al"],
      correct: 1,
      difficulty: "easy"
    },
    {
      id: 12,
      question: "Jumlah proton dalam atom karbon adalah?",
      options: ["4", "6", "8", "12"],
      correct: 1,
      difficulty: "medium"
    },
    {
      id: 13,
      question: "pH air murni pada suhu 25°C adalah?",
      options: ["6", "7", "8", "9"],
      correct: 1,
      difficulty: "easy"
    },
    {
      id: 14,
      question: "Rumus kimia untuk air adalah?",
      options: ["H₂O", "CO₂", "NaCl", "CH₄"],
      correct: 0,
      difficulty: "easy"
    },
    {
      id: 15,
      question: "Gas mulia yang paling ringan adalah?",
      options: ["Neon", "Argon", "Helium", "Xenon"],
      correct: 2,
      difficulty: "medium"
    }
  ],
  biologi: [
    {
      id: 16,
      question: "Organel sel yang berfungsi sebagai pusat kontrol adalah?",
      options: ["Mitokondria", "Nukleus", "Ribosom", "Lisosom"],
      correct: 1,
      difficulty: "easy"
    },
    {
      id: 17,
      question: "Proses fotosintesis terjadi di?",
      options: ["Mitokondria", "Kloroplas", "Nukleus", "Vakuola"],
      correct: 1,
      difficulty: "medium"
    },
    {
      id: 18,
      question: "DNA tersusun atas basa nitrogen, kecuali?",
      options: ["Adenin", "Guanin", "Urasil", "Timin"],
      correct: 2,
      difficulty: "medium"
    },
    {
      id: 19,
      question: "Sistem peredaran darah manusia disebut?",
      options: ["Terbuka", "Tertutup", "Campuran", "Sederhana"],
      correct: 1,
      difficulty: "medium"
    },
    {
      id: 20,
      question: "Hormon insulin diproduksi oleh?",
      options: ["Hati", "Ginjal", "Pankreas", "Kelenjar tiroid"],
      correct: 2,
      difficulty: "hard"
    }
  ]
};

// Data default untuk materi pembelajaran
const defaultMaterials = [
  {
    id: 1,
    title: "Aljabar Dasar",
    subject: "matematika",
    description: "Pelajari konsep dasar aljabar, variabel, dan persamaan linear.",
    content: `
      <h2>Aljabar Dasar</h2>
      <h3>Pengertian Aljabar</h3>
      <p>Aljabar adalah cabang matematika yang menggunakan huruf dan simbol untuk mewakili bilangan dalam rumus dan persamaan.</p>
      
      <h3>Variabel</h3>
      <p>Variabel adalah simbol (biasanya huruf) yang mewakili bilangan yang tidak diketahui. Contoh: x, y, z.</p>
      
      <h3>Konstanta</h3>
      <p>Konstanta adalah bilangan yang nilainya tetap. Contoh: 2, -5, 10.</p>
      
      <h3>Persamaan Linear</h3>
      <p>Persamaan linear adalah persamaan yang variabelnya berpangkat satu. Bentuk umum: ax + b = 0</p>
      
      <h4>Contoh Soal:</h4>
      <p>Selesaikan persamaan: 2x + 5 = 11</p>
      <p><strong>Penyelesaian:</strong></p>
      <p>2x + 5 = 11</p>
      <p>2x = 11 - 5</p>
      <p>2x = 6</p>
      <p>x = 3</p>
    `,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Hukum Newton",
    subject: "fisika",
    description: "Memahami tiga hukum dasar Newton tentang gerak dan gaya.",
    content: `
      <h2>Hukum Newton</h2>
      <h3>Hukum Newton I (Hukum Kelembaman)</h3>
      <p>"Setiap benda akan tetap dalam keadaan diam atau bergerak lurus beraturan, kecuali ada gaya yang bekerja padanya."</p>
      
      <h3>Hukum Newton II (Hukum Percepatan)</h3>
      <p>"Percepatan suatu benda berbanding lurus dengan gaya yang bekerja padanya dan berbanding terbalik dengan massanya."</p>
      <p><strong>Rumus:</strong> F = m × a</p>
      <ul>
        <li>F = Gaya (Newton)</li>
        <li>m = Massa (kg)</li>
        <li>a = Percepatan (m/s²)</li>
      </ul>
      
      <h3>Hukum Newton III (Hukum Aksi-Reaksi)</h3>
      <p>"Untuk setiap aksi, selalu ada reaksi yang sama besar tetapi berlawanan arah."</p>
      
      <h4>Contoh Penerapan:</h4>
      <p>Ketika kita berjalan, kaki mendorong tanah ke belakang (aksi), dan tanah mendorong kaki ke depan (reaksi).</p>
    `,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Tabel Periodik",
    subject: "kimia",
    description: "Mengenal susunan dan sifat-sifat unsur dalam tabel periodik.",
    content: `
      <h2>Tabel Periodik Unsur</h2>
      <h3>Sejarah Tabel Periodik</h3>
      <p>Tabel periodik pertama kali dikembangkan oleh Dmitri Mendeleev pada tahun 1869 berdasarkan massa atom relatif.</p>
      
      <h3>Struktur Tabel Periodik Modern</h3>
      <p>Tabel periodik modern disusun berdasarkan nomor atom (jumlah proton) unsur.</p>
      
      <h3>Periode dan Golongan</h3>
      <ul>
        <li><strong>Periode:</strong> Baris horizontal dalam tabel periodik</li>
        <li><strong>Golongan:</strong> Kolom vertikal dalam tabel periodik</li>
      </ul>
      
      <h3>Golongan Utama:</h3>
      <ul>
        <li>Golongan IA: Logam Alkali</li>
        <li>Golongan IIA: Logam Alkali Tanah</li>
        <li>Golongan VIIA: Halogen</li>
        <li>Golongan VIIIA: Gas Mulia</li>
      </ul>
      
      <h4>Sifat Periodik:</h4>
      <p>Sifat-sifat unsur berubah secara periodik seiring bertambahnya nomor atom.</p>
    `,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 4,
    title: "Sel dan Organel",
    subject: "biologi",
    description: "Mempelajari struktur dan fungsi sel serta organel-organelnya.",
    content: `
      <h2>Sel dan Organel</h2>
      <h3>Pengertian Sel</h3>
      <p>Sel adalah unit struktural dan fungsional terkecil dari makhluk hidup.</p>
      
      <h3>Jenis-jenis Sel</h3>
      <ul>
        <li><strong>Sel Prokariotik:</strong> Sel yang tidak memiliki membran inti (bakteri)</li>
        <li><strong>Sel Eukariotik:</strong> Sel yang memiliki membran inti (hewan, tumbuhan)</li>
      </ul>
      
      <h3>Organel Sel dan Fungsinya</h3>
      <ul>
        <li><strong>Nukleus:</strong> Pusat kontrol sel, mengatur aktivitas sel</li>
        <li><strong>Mitokondria:</strong> Penghasil energi (ATP)</li>
        <li><strong>Ribosom:</strong> Tempat sintesis protein</li>
        <li><strong>Retikulum Endoplasma:</strong> Transportasi zat dalam sel</li>
        <li><strong>Aparatus Golgi:</strong> Modifikasi dan pengemasan protein</li>
        <li><strong>Lisosom:</strong> Pencernaan intraseluler</li>
      </ul>
      
      <h3>Perbedaan Sel Hewan dan Tumbuhan</h3>
      <p><strong>Sel Tumbuhan memiliki:</strong></p>
      <ul>
        <li>Dinding sel</li>
        <li>Kloroplas</li>
        <li>Vakuola besar</li>
      </ul>
    `,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// State management untuk aplikasi
let currentState = {
  activeSection: "beranda",
  currentQuiz: null,
  currentQuestion: 0,
  userAnswers: [],
  score: 0,
  isAdminLoggedIn: false,
  editingMaterial: null,
  editingQuiz: null
};

// Data storage management
class DataManager {
  static initializeData() {
    // Initialize materials if not exists
    if (!localStorage.getItem('materials')) {
      localStorage.setItem('materials', JSON.stringify(defaultMaterials));
    }
    
    // Initialize quiz data if not exists
    if (!localStorage.getItem('quizData')) {
      localStorage.setItem('quizData', JSON.stringify(defaultQuizData));
    }
    
    // Initialize settings if not exists
    if (!localStorage.getItem('siteSettings')) {
      const defaultSettings = {
        siteName: "E-Learning SMKN2 Surabaya",
        siteDescription: "Platform pembelajaran interaktif dengan kumpulan materi dan soal latihan untuk meningkatkan kemampuan akademik Anda.",
        adminPassword: "admin123"
      };
      localStorage.setItem('siteSettings', JSON.stringify(defaultSettings));
    }
  }
  
  static getMaterials() {
    return JSON.parse(localStorage.getItem('materials') || '[]');
  }
  
  static saveMaterials(materials) {
    localStorage.setItem('materials', JSON.stringify(materials));
  }
  
  static getQuizData() {
    return JSON.parse(localStorage.getItem('quizData') || '{}');
  }
  
  static saveQuizData(quizData) {
    localStorage.setItem('quizData', JSON.stringify(quizData));
  }
  
  static getSettings() {
    return JSON.parse(localStorage.getItem('siteSettings') || '{}');
  }
  
  static saveSettings(settings) {
    localStorage.setItem('siteSettings', JSON.stringify(settings));
  }
}

// Inisialisasi aplikasi
function initializeApp() {
  // Initialize data
  DataManager.initializeData();
  
  // Setup event listeners
  setupNavigation();
  setupHeroButton();
  setupQuizCards();
  setupQuizControls();
  setupAdminPanel();
  setupModals();
  
  // Load initial content
  loadMaterials();
  updateQuizCounts();
  
  // Set section awal
  showSection("beranda");
  
  console.log("✅ Aplikasi berhasil diinisialisasi!");
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

// Load materials dari localStorage
function loadMaterials() {
  const materials = DataManager.getMaterials();
  const learningGrid = document.getElementById("learning-grid");
  
  if (!learningGrid) return;
  
  learningGrid.innerHTML = "";
  
  if (materials.length === 0) {
    learningGrid.innerHTML = `
      <div class="no-materials">
        <p>Belum ada materi yang tersedia. Silakan hubungi admin untuk menambahkan materi.</p>
      </div>
    `;
    return;
  }
  
  // Group materials by subject
  const groupedMaterials = {};
  materials.forEach(material => {
    if (!groupedMaterials[material.subject]) {
      groupedMaterials[material.subject] = [];
    }
    groupedMaterials[material.subject].push(material);
  });
  
  // Create cards for each subject
  Object.keys(groupedMaterials).forEach(subject => {
    const subjectMaterials = groupedMaterials[subject];
    const subjectInfo = getSubjectInfo(subject);
    
    const card = document.createElement("div");
    card.className = "learning-card";
    card.setAttribute("data-subject", subject);
    
    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon">${subjectInfo.icon}</div>
        <h3>${subjectInfo.name}</h3>
      </div>
      <div class="card-content">
        <p>${subjectInfo.description}</p>
        <ul>
          ${subjectMaterials.slice(0, 4).map(material => 
            `<li>${material.title}</li>`
          ).join('')}
          ${subjectMaterials.length > 4 ? `<li>+${subjectMaterials.length - 4} materi lainnya</li>` : ''}
        </ul>
      </div>
      <button class="btn-secondary">Lihat Materi</button>
    `;
    
    // Add click event to show materials
    card.addEventListener("click", () => {
      showSubjectMaterials(subject, subjectMaterials);
    });
    
    learningGrid.appendChild(card);
  });
}

// Get subject information
function getSubjectInfo(subject) {
  const subjects = {
    matematika: {
      name: "Matematika",
      icon: "🔢",
      description: "Pelajari konsep dasar matematika mulai dari aljabar, geometri, hingga kalkulus."
    },
    fisika: {
      name: "Fisika", 
      icon: "⚡",
      description: "Eksplorasi fenomena alam melalui hukum-hukum fisika yang fundamental."
    },
    kimia: {
      name: "Kimia",
      icon: "🧪", 
      description: "Memahami struktur materi dan reaksi kimia dalam kehidupan sehari-hari."
    },
    biologi: {
      name: "Biologi",
      icon: "🌱",
      description: "Jelajahi kehidupan dari tingkat sel hingga ekosistem yang kompleks."
    }
  };
  
  return subjects[subject] || {
    name: subject.charAt(0).toUpperCase() + subject.slice(1),
    icon: "📚",
    description: "Materi pembelajaran untuk mata pelajaran ini."
  };
}

// Show materials for a specific subject
function showSubjectMaterials(subject, materials) {
  const modal = document.getElementById("material-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");
  
  const subjectInfo = getSubjectInfo(subject);
  modalTitle.textContent = `Materi ${subjectInfo.name}`;
  
  modalContent.innerHTML = `
    <div class="subject-materials">
      ${materials.map(material => `
        <div class="material-item-modal" data-material-id="${material.id}">
          <h4>${material.title}</h4>
          <p>${material.description}</p>
          <button class="btn-primary btn-small" onclick="showMaterialContent(${material.id})">
            Baca Materi
          </button>
        </div>
      `).join('')}
    </div>
  `;
  
  modal.classList.remove("hidden");
}

// Show specific material content
function showMaterialContent(materialId) {
  const materials = DataManager.getMaterials();
  const material = materials.find(m => m.id === materialId);
  
  if (!material) {
    showNotification("Materi tidak ditemukan!", "error");
    return;
  }
  
  const modal = document.getElementById("material-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");
  
  modalTitle.textContent = material.title;
  modalContent.innerHTML = `
    <div class="material-content">
      ${material.content}
    </div>
    <div class="material-actions">
      <button class="btn-secondary" onclick="showSubjectMaterials('${material.subject}', ${JSON.stringify(DataManager.getMaterials().filter(m => m.subject === material.subject))})">
        ← Kembali ke Daftar Materi
      </button>
    </div>
  `;
  
  modal.classList.remove("hidden");
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

// Update quiz counts
function updateQuizCounts() {
  const quizData = DataManager.getQuizData();
  
  document.getElementById("math-count").textContent = `${(quizData.matematika || []).length} Soal`;
  document.getElementById("physics-count").textContent = `${(quizData.fisika || []).length} Soal`;
  document.getElementById("chemistry-count").textContent = `${(quizData.kimia || []).length} Soal`;
  document.getElementById("biology-count").textContent = `${(quizData.biologi || []).length} Soal`;
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
    const quizData = DataManager.getQuizData();
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

// Setup admin panel
function setupAdminPanel() {
  const loginBtn = document.getElementById("login-btn");
  const adminPassword = document.getElementById("admin-password");
  
  // Admin login
  loginBtn.addEventListener("click", () => {
    const settings = DataManager.getSettings();
    const password = adminPassword.value;
    
    if (password === settings.adminPassword) {
      currentState.isAdminLoggedIn = true;
      document.getElementById("admin-login").classList.add("hidden");
      document.getElementById("admin-dashboard").classList.remove("hidden");
      loadAdminData();
      showNotification("Login berhasil! Selamat datang Admin.", "success");
    } else {
      showNotification("Password salah! Coba lagi.", "error");
      adminPassword.value = "";
    }
  });
  
  // Enter key for login
  adminPassword.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      loginBtn.click();
    }
  });
  
  // Tab switching
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabName = btn.getAttribute("data-tab");
      switchTab(tabName);
    });
  });
  
  // Add material button
  document.getElementById("add-material-btn").addEventListener("click", () => {
    openMaterialForm();
  });
  
  // Add quiz button
  document.getElementById("add-quiz-btn").addEventListener("click", () => {
    openQuizForm();
  });
  
  // Save settings button
  document.getElementById("save-settings").addEventListener("click", () => {
    saveWebsiteSettings();
  });
}

// Switch admin tabs
function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");
  
  // Update tab content
  document.querySelectorAll(".tab-content").forEach(content => {
    content.classList.remove("active");
  });
  document.getElementById(`${tabName}-tab`).classList.add("active");
  
  // Load specific data
  if (tabName === "materials") {
    loadMaterialsList();
  } else if (tabName === "quiz") {
    loadQuizList();
  } else if (tabName === "settings") {
    loadSettings();
  }
}

// Load admin data
function loadAdminData() {
  loadMaterialsList();
  loadQuizList();
  loadSettings();
}

// Load materials list for admin
function loadMaterialsList() {
  const materials = DataManager.getMaterials();
  const materialsList = document.getElementById("materials-list");
  
  materialsList.innerHTML = "";
  
  if (materials.length === 0) {
    materialsList.innerHTML = `
      <div class="no-items">
        <p>Belum ada materi yang tersedia.</p>
      </div>
    `;
    return;
  }
  
  materials.forEach(material => {
    const item = document.createElement("div");
    item.className = "material-item";
    item.innerHTML = `
      <div class="item-info">
        <h4>${material.title}</h4>
        <p>${getSubjectInfo(material.subject).name} - ${material.description}</p>
        <small>Dibuat: ${new Date(material.createdAt).toLocaleDateString('id-ID')}</small>
      </div>
      <div class="item-actions">
        <button class="btn-small btn-edit" onclick="editMaterial(${material.id})">Edit</button>
        <button class="btn-small btn-delete" onclick="deleteMaterial(${material.id})">Hapus</button>
      </div>
    `;
    materialsList.appendChild(item);
  });
}

// Load quiz list for admin
function loadQuizList() {
  const quizData = DataManager.getQuizData();
  const quizList = document.getElementById("quiz-list");
  
  quizList.innerHTML = "";
  
  let allQuestions = [];
  Object.keys(quizData).forEach(subject => {
    quizData[subject].forEach(question => {
      allQuestions.push({...question, subject});
    });
  });
  
  if (allQuestions.length === 0) {
    quizList.innerHTML = `
      <div class="no-items">
        <p>Belum ada soal yang tersedia.</p>
      </div>
    `;
    return;
  }
  
  allQuestions.forEach(question => {
    const item = document.createElement("div");
    item.className = "quiz-item";
    item.innerHTML = `
      <div class="item-info">
        <h4>${question.question.substring(0, 80)}${question.question.length > 80 ? '...' : ''}</h4>
        <p>${getSubjectInfo(question.subject).name} - Tingkat: ${question.difficulty}</p>
        <small>Jawaban: ${question.options[question.correct]}</small>
      </div>
      <div class="item-actions">
        <button class="btn-small btn-edit" onclick="editQuiz(${question.id})">Edit</button>
        <button class="btn-small btn-delete" onclick="deleteQuiz(${question.id})">Hapus</button>
      </div>
    `;
    quizList.appendChild(item);
  });
}

// Load settings
function loadSettings() {
  const settings = DataManager.getSettings();
  document.getElementById("site-name").value = settings.siteName || "";
  document.getElementById("site-description").value = settings.siteDescription || "";
}

// Setup modals
function setupModals() {
  // Close modal buttons
  document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const modal = e.target.closest(".modal");
      modal.classList.add("hidden");
    });
  });
  
  // Close modal when clicking outside
  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });
  
  // Material form
  document.getElementById("material-form").addEventListener("submit", (e) => {
    e.preventDefault();
    saveMaterial();
  });
  
  document.getElementById("cancel-material").addEventListener("click", () => {
    document.getElementById("material-form-modal").classList.add("hidden");
  });
  
  // Quiz form
  document.getElementById("quiz-form").addEventListener("submit", (e) => {
    e.preventDefault();
    saveQuiz();
  });
  
  document.getElementById("cancel-quiz").addEventListener("click", () => {
    document.getElementById("quiz-form-modal").classList.add("hidden");
  });
  
  // Close material modal
  document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("material-modal").classList.add("hidden");
  });
  
  document.getElementById("close-material-form").addEventListener("click", () => {
    document.getElementById("material-form-modal").classList.add("hidden");
  });
  
  document.getElementById("close-quiz-form").addEventListener("click", () => {
    document.getElementById("quiz-form-modal").classList.add("hidden");
  });
}

// Open material form
function openMaterialForm(material = null) {
  const modal = document.getElementById("material-form-modal");
  const form = document.getElementById("material-form");
  const title = document.getElementById("material-form-title");
  
  if (material) {
    // Edit mode
    title.textContent = "Edit Materi";
    document.getElementById("material-title").value = material.title;
    document.getElementById("material-subject").value = material.subject;
    document.getElementById("material-description").value = material.description;
    document.getElementById("material-content").value = material.content;
    currentState.editingMaterial = material.id;
  } else {
    // Add mode
    title.textContent = "Tambah Materi Baru";
    form.reset();
    currentState.editingMaterial = null;
  }
  
  modal.classList.remove("hidden");
}

// Save material
function saveMaterial() {
  const title = document.getElementById("material-title").value;
  const subject = document.getElementById("material-subject").value;
  const description = document.getElementById("material-description").value;
  const content = document.getElementById("material-content").value;
  
  if (!title || !subject || !description || !content) {
    showNotification("Semua field harus diisi!", "error");
    return;
  }
  
  const materials = DataManager.getMaterials();
  
  if (currentState.editingMaterial) {
    // Edit existing material
    const index = materials.findIndex(m => m.id === currentState.editingMaterial);
    if (index !== -1) {
      materials[index] = {
        ...materials[index],
        title,
        subject,
        description,
        content,
        updatedAt: new Date().toISOString()
      };
    }
  } else {
    // Add new material
    const newMaterial = {
      id: Date.now(),
      title,
      subject,
      description,
      content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    materials.push(newMaterial);
  }
  
  DataManager.saveMaterials(materials);
  document.getElementById("material-form-modal").classList.add("hidden");
  loadMaterials();
  loadMaterialsList();
  
  showNotification(
    currentState.editingMaterial ? "Materi berhasil diupdate!" : "Materi berhasil ditambahkan!",
    "success"
  );
}

// Edit material
function editMaterial(materialId) {
  const materials = DataManager.getMaterials();
  const material = materials.find(m => m.id === materialId);
  
  if (material) {
    openMaterialForm(material);
  }
}

// Delete material
function deleteMaterial(materialId) {
  if (confirm("Apakah Anda yakin ingin menghapus materi ini?")) {
    const materials = DataManager.getMaterials();
    const filteredMaterials = materials.filter(m => m.id !== materialId);
    
    DataManager.saveMaterials(filteredMaterials);
    loadMaterials();
    loadMaterialsList();
    
    showNotification("Materi berhasil dihapus!", "success");
  }
}

// Open quiz form
function openQuizForm(quiz = null) {
  const modal = document.getElementById("quiz-form-modal");
  const form = document.getElementById("quiz-form");
  const title = document.getElementById("quiz-form-title");
  
  if (quiz) {
    // Edit mode
    title.textContent = "Edit Soal";
    document.getElementById("quiz-subject").value = quiz.subject;
    document.getElementById("quiz-question").value = quiz.question;
    document.getElementById("option-1").value = quiz.options[0];
    document.getElementById("option-2").value = quiz.options[1];
    document.getElementById("option-3").value = quiz.options[2];
    document.getElementById("option-4").value = quiz.options[3];
    document.getElementById("correct-answer").value = quiz.correct.toString();
    document.getElementById("quiz-difficulty").value = quiz.difficulty;
    currentState.editingQuiz = quiz.id;
  } else {
    // Add mode
    title.textContent = "Tambah Soal Baru";
    form.reset();
    currentState.editingQuiz = null;
  }
  
  modal.classList.remove("hidden");
}

// Save quiz
function saveQuiz() {
  const subject = document.getElementById("quiz-subject").value;
  const question = document.getElementById("quiz-question").value;
  const option1 = document.getElementById("option-1").value;
  const option2 = document.getElementById("option-2").value;
  const option3 = document.getElementById("option-3").value;
  const option4 = document.getElementById("option-4").value;
  const correct = parseInt(document.getElementById("correct-answer").value);
  const difficulty = document.getElementById("quiz-difficulty").value;
  
  if (!subject || !question || !option1 || !option2 || !option3 || !option4 || isNaN(correct) || !difficulty) {
    showNotification("Semua field harus diisi!", "error");
    return;
  }
  
  const quizData = DataManager.getQuizData();
  
  if (!quizData[subject]) {
    quizData[subject] = [];
  }
  
  if (currentState.editingQuiz) {
    // Edit existing quiz
    let found = false;
    Object.keys(quizData).forEach(subj => {
      const index = quizData[subj].findIndex(q => q.id === currentState.editingQuiz);
      if (index !== -1) {
        // Remove from old subject if changed
        if (subj !== subject) {
          quizData[subj].splice(index, 1);
          if (!quizData[subject]) {
            quizData[subject] = [];
          }
          quizData[subject].push({
            id: currentState.editingQuiz,
            question,
            options: [option1, option2, option3, option4],
            correct,
            difficulty
          });
        } else {
          quizData[subj][index] = {
            id: currentState.editingQuiz,
            question,
            options: [option1, option2, option3, option4],
            correct,
            difficulty
          };
        }
        found = true;
      }
    });
  } else {
    // Add new quiz
    const newQuiz = {
      id: Date.now(),
      question,
      options: [option1, option2, option3, option4],
      correct,
      difficulty
    };
    quizData[subject].push(newQuiz);
  }
  
  DataManager.saveQuizData(quizData);
  document.getElementById("quiz-form-modal").classList.add("hidden");
  updateQuizCounts();
  loadQuizList();
  
  showNotification(
    currentState.editingQuiz ? "Soal berhasil diupdate!" : "Soal berhasil ditambahkan!",
    "success"
  );
}

// Edit quiz
function editQuiz(quizId) {
  const quizData = DataManager.getQuizData();
  let quiz = null;
  let subject = null;
  
  Object.keys(quizData).forEach(subj => {
    const found = quizData[subj].find(q => q.id === quizId);
    if (found) {
      quiz = found;
      subject = subj;
    }
  });
  
  if (quiz) {
    quiz.subject = subject;
    openQuizForm(quiz);
  }
}

// Delete quiz
function deleteQuiz(quizId) {
  if (confirm("Apakah Anda yakin ingin menghapus soal ini?")) {
    const quizData = DataManager.getQuizData();
    
    Object.keys(quizData).forEach(subject => {
      quizData[subject] = quizData[subject].filter(q => q.id !== quizId);
    });
    
    DataManager.saveQuizData(quizData);
    updateQuizCounts();
    loadQuizList();
    
    showNotification("Soal berhasil dihapus!", "success");
  }
}

// Save website settings
function saveWebsiteSettings() {
  const siteName = document.getElementById("site-name").value;
  const siteDescription = document.getElementById("site-description").value;
  
  if (!siteName || !siteDescription) {
    showNotification("Semua field harus diisi!", "error");
    return;
  }
  
  const settings = DataManager.getSettings();
  settings.siteName = siteName;
  settings.siteDescription = siteDescription;
  
  DataManager.saveSettings(settings);
  
  // Update website title and description
  document.title = siteName;
  document.querySelector(".logo h2").textContent = siteName;
  document.querySelector(".hero-description").textContent = siteDescription;
  
  showNotification("Pengaturan berhasil disimpan!", "success");
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
  
  // Reset admin login if switching away from admin
  if (sectionId !== "admin") {
    currentState.isAdminLoggedIn = false;
    document.getElementById("admin-login").classList.remove("hidden");
    document.getElementById("admin-dashboard").classList.add("hidden");
    document.getElementById("admin-password").value = "";
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
  const quizData = DataManager.getQuizData();
  
  if (!quizData[category] || quizData[category].length === 0) {
    showNotification("Belum ada soal untuk kategori ini!", "error");
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
  const quizData = DataManager.getQuizData();
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
  const quizData = DataManager.getQuizData();
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
  const quizData = DataManager.getQuizData();
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
  const quizData = DataManager.getQuizData();
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

console.log("🎓 Website Pembelajaran Enhanced berhasil dimuat!");