/**
 * Mamás Fuertes - Lógica Principal de la Landing Page
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderCourses("all");
  renderTestimonials();
  renderFaq();
  initFilters();
  initQuiz();
  initModals();

  // Escuchar cambios de idioma para actualizar contenido dinámico
  window.addEventListener("languageChanged", () => {
    const activeFilter = document.querySelector(".filter-btn.active")?.getAttribute("data-category") || "all";
    renderCourses(activeFilter);
    renderTestimonials();
    renderFaq();
    updateQuizTexts();
  });
});

/* --------------------------------------------------------------------------
   1. Navegación & Menú Móvil
   -------------------------------------------------------------------------- */
function initNavbar() {
  const menuToggle = document.getElementById("mobileMenuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Cerrar menú móvil al hacer clic en un enlace
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. Renderizado de Catálogo de Cursos & Filtros
   -------------------------------------------------------------------------- */
function renderCourses(category = "all") {
  const grid = document.getElementById("coursesGrid");
  if (!grid) return;

  const lang = currentLanguage || "es";
  const filtered = category === "all" 
    ? coursesData 
    : coursesData.filter((c) => c.category === category);

  grid.innerHTML = filtered.map((course) => {
    const title = lang === "es" ? course.title_es : course.title_en;
    const subtitle = lang === "es" ? course.subtitle_es : course.subtitle_en;
    const instructor = lang === "es" ? course.instructor_es : course.instructor_en;
    const level = lang === "es" ? course.level_es : course.level_en;
    const badge = lang === "es" ? course.badge_es : course.badge_en;

    return `
      <div class="course-card" data-category="${course.category}">
        <div class="course-card-thumb">
          <img src="${course.image}" alt="${title}" loading="lazy">
          <span class="course-badge-tag">${badge}</span>
        </div>
        <div class="course-card-body">
          <div class="course-meta">
            <span class="course-meta-item">⏱️ ${course.duration} ${t("course_hours")}</span>
            <span class="course-meta-item">🎥 ${course.lessonsCount} ${t("course_lessons")}</span>
            <span class="course-meta-item">⭐ ${course.rating}</span>
          </div>
          <h3 class="course-card-title">${title}</h3>
          <p class="course-card-desc">${subtitle}</p>
          <div class="course-instructor">
            <span>👩‍⚕️</span> ${instructor}
          </div>
          <div class="course-card-footer">
            <div class="course-price-wrap">
              <span class="course-price-old">$${course.originalPrice}</span>
              <span class="course-price-current">$${course.price} USD</span>
            </div>
            <div class="course-card-actions">
              <button class="btn btn-secondary btn-sm" onclick="openCourseDetails('${course.id}')">${t("course_btn_details")}</button>
              <button class="btn btn-primary btn-sm" onclick="openCheckout('${course.id}', 'course')">${t("course_btn_buy")}</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderCourses(category);
    });
  });
}

/* --------------------------------------------------------------------------
   3. Testimonios & FAQ
   -------------------------------------------------------------------------- */
function renderTestimonials() {
  const grid = document.getElementById("testimonialsGrid");
  if (!grid) return;

  const lang = currentLanguage || "es";
  grid.innerHTML = testimonialsData.map((testi) => {
    const role = lang === "es" ? testi.role_es : testi.role_en;
    const text = lang === "es" ? testi.text_es : testi.text_en;
    const stars = "⭐".repeat(testi.rating);

    return `
      <div class="testimonial-card">
        <div class="testimonial-stars">${stars}</div>
        <p class="testimonial-quote">"${text}"</p>
        <div class="testimonial-author">
          <img src="${testi.avatar}" alt="${testi.name}">
          <div>
            <div class="author-name">${testi.name}</div>
            <div class="author-role">${role}</div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderFaq() {
  const container = document.getElementById("faqContainer");
  if (!container) return;

  const lang = currentLanguage || "es";
  container.innerHTML = faqData.map((item, index) => {
    const q = lang === "es" ? item.q_es : item.q_en;
    const a = lang === "es" ? item.a_es : item.a_en;

    return `
      <div class="faq-item ${index === 0 ? "active" : ""}">
        <button class="faq-question" onclick="toggleFaq(this)">
          <span>${q}</span>
          <span class="faq-toggle-icon">▾</span>
        </button>
        <div class="faq-answer">
          <p>${a}</p>
        </div>
      </div>
    `;
  }).join("");
}

function toggleFaq(btn) {
  const item = btn.closest(".faq-item");
  const isActive = item.classList.contains("active");

  document.querySelectorAll(".faq-item").forEach((el) => el.classList.remove("active"));

  if (!isActive) {
    item.classList.add("active");
  }
}

/* --------------------------------------------------------------------------
   4. Asesor Virtual / Quiz Interactivo
   -------------------------------------------------------------------------- */
let quizStep = 1;
let quizAnswers = { q1: "", q2: "", q3: "" };

function initQuiz() {
  const options = document.querySelectorAll(".quiz-option-label");
  options.forEach((opt) => {
    opt.addEventListener("click", () => {
      const parent = opt.closest(".quiz-options-list");
      parent.querySelectorAll(".quiz-option-label").forEach((o) => o.classList.remove("selected"));
      opt.classList.add("selected");
      const radio = opt.querySelector("input[type='radio']");
      if (radio) {
        radio.checked = true;
        const qName = radio.name;
        quizAnswers[qName] = radio.value;
      }
    });
  });

  const nextBtn = document.getElementById("quizNextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      handleQuizNext();
    });
  }

  const restartBtn = document.getElementById("quizRestartBtn");
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      restartQuiz();
    });
  }
}

function handleQuizNext() {
  if (quizStep === 1) {
    if (!quizAnswers.q1) {
      alert(currentLanguage === "es" ? "Por favor selecciona una opción para continuar." : "Please select an option to continue.");
      return;
    }
    document.getElementById("quizStep1").style.display = "none";
    document.getElementById("quizStep2").style.display = "block";
    document.getElementById("quizProgressFill").style.width = "66.6%";
    quizStep = 2;
  } else if (quizStep === 2) {
    if (!quizAnswers.q2) {
      alert(currentLanguage === "es" ? "Por favor selecciona una opción para continuar." : "Please select an option to continue.");
      return;
    }
    document.getElementById("quizStep2").style.display = "none";
    document.getElementById("quizStep3").style.display = "block";
    document.getElementById("quizProgressFill").style.width = "100%";
    document.getElementById("quizNextBtn").setAttribute("data-i18n", "quiz_btn_finish");
    document.getElementById("quizNextBtn").textContent = t("quiz_btn_finish");
    quizStep = 3;
  } else if (quizStep === 3) {
    if (!quizAnswers.q3) {
      alert(currentLanguage === "es" ? "Por favor selecciona una opción para continuar." : "Please select an option to continue.");
      return;
    }
    showQuizResult();
  }
}

function showQuizResult() {
  document.getElementById("quizStep3").style.display = "none";
  document.getElementById("quizNextBtn").style.display = "none";
  document.getElementById("quizProgressBar").style.display = "none";

  const resultBox = document.getElementById("quizResultBox");
  resultBox.style.display = "block";

  // Lógica de recomendación según las respuestas del Quiz
  let recCourseId = "curso-primerizas-30-35";

  if (quizAnswers.q3 === "opt2") {
    recCourseId = "membership-vip";
  } else if (quizAnswers.q2 === "opt1") {
    recCourseId = "curso-primerizas-30-35"; // Primerizas a los 30-35
  } else if (quizAnswers.q2 === "opt2") {
    recCourseId = "curso-hijo-hiperactivo"; // TDAH / Hiperactividad
  } else if (quizAnswers.q2 === "opt3") {
    recCourseId = "curso-alimentacion-edades"; // Alimentación por edades
  } else if (quizAnswers.q1 === "opt1") {
    recCourseId = "curso-embarazo-parto"; // Embarazo
  } else if (quizAnswers.q1 === "opt2" && quizAnswers.q2 === "opt4") {
    recCourseId = "curso-posparto-core"; // Posparto
  } else if (quizAnswers.q1 === "opt2") {
    recCourseId = "curso-primer-ano-bebe"; // Bebés 0-12m
  } else if (quizAnswers.q1 === "opt3") {
    recCourseId = "curso-primera-infancia"; // Toddlers
  } else if (quizAnswers.q1 === "opt4") {
    recCourseId = "curso-adolescencia"; // Adolescencia
  } else if (quizAnswers.q2 === "opt4") {
    recCourseId = "curso-fuerza-express"; // Fitness
  }

  const resultCourse = coursesData.find((c) => c.id === recCourseId);
  const resultTitleEl = document.getElementById("quizResultCourseTitle");
  const resultDescEl = document.getElementById("quizResultCourseDesc");
  const resultActionBtn = document.getElementById("quizResultActionBtn");

  const lang = currentLanguage || "es";
  if (recCourseId === "membership-vip") {
    resultTitleEl.textContent = lang === "es" ? "Membresía Anual VIP Mamás Fuertes" : "Strong Moms Annual VIP Membership";
    resultDescEl.textContent = lang === "es" 
      ? "Dado que buscas acceso a todas las etapas, primerizas 30-35, alimentación, TDAH y fitness con total flexibilidad, el Plan Anual VIP es tu mejor inversión familiar."
      : "Since you want complete access across all topics (first-time moms, parenting, nutrition, ADHD and fitness), the Annual VIP Plan is your most complete family investment.";
    resultActionBtn.onclick = () => openCheckout("membership-annual", "membership");
  } else if (resultCourse) {
    resultTitleEl.textContent = lang === "es" ? resultCourse.title_es : resultCourse.title_en;
    resultDescEl.textContent = lang === "es" ? resultCourse.subtitle_es : resultCourse.subtitle_en;
    resultActionBtn.onclick = () => openCourseDetails(recCourseId);
  }
}

function restartQuiz() {
  quizStep = 1;
  quizAnswers = { q1: "", q2: "", q3: "" };

  document.querySelectorAll(".quiz-option-label").forEach((o) => o.classList.remove("selected"));
  document.querySelectorAll("input[type='radio']").forEach((r) => r.checked = false);

  document.getElementById("quizStep1").style.display = "block";
  document.getElementById("quizStep2").style.display = "none";
  document.getElementById("quizStep3").style.display = "none";
  document.getElementById("quizResultBox").style.display = "none";
  document.getElementById("quizNextBtn").style.display = "inline-flex";
  document.getElementById("quizProgressBar").style.display = "block";
  document.getElementById("quizProgressFill").style.width = "33.3%";
  document.getElementById("quizNextBtn").setAttribute("data-i18n", "quiz_btn_next");
  document.getElementById("quizNextBtn").textContent = t("quiz_btn_next");
}

function updateQuizTexts() {
  if (quizStep === 3) {
    document.getElementById("quizNextBtn").textContent = t("quiz_btn_finish");
  } else {
    document.getElementById("quizNextBtn").textContent = t("quiz_btn_next");
  }
}

/* --------------------------------------------------------------------------
   5. Modales de Temario y Detalles
   -------------------------------------------------------------------------- */
function initModals() {
  document.querySelectorAll(".modal-close-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      closeAllModals();
    });
  });

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });
}

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach((m) => m.classList.remove("active"));
}

function openCourseDetails(courseId) {
  const course = coursesData.find((c) => c.id === courseId);
  if (!course) return;

  const modal = document.getElementById("detailsModal");
  if (!modal) return;

  const lang = currentLanguage || "es";
  const title = lang === "es" ? course.title_es : course.title_en;
  const subtitle = lang === "es" ? course.subtitle_es : course.subtitle_en;
  const instructor = lang === "es" ? course.instructor_es : course.instructor_en;

  document.getElementById("detailsModalTitle").textContent = title;
  document.getElementById("detailsModalDesc").textContent = subtitle;
  document.getElementById("detailsModalInstructor").textContent = instructor;
  document.getElementById("detailsModalPrice").textContent = `$${course.price} USD`;

  const modulesContainer = document.getElementById("detailsModalModules");
  modulesContainer.innerHTML = course.modules.map((m, mIdx) => {
    const mTitle = lang === "es" ? m.title_es : m.title_en;
    const lessonsList = m.lessons.map((l, lIdx) => {
      const lTitle = lang === "es" ? l.title_es : l.title_en;
      return `
        <li style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--border-color); font-size: 0.875rem;">
          <span>▶️ ${lIdx + 1}. ${lTitle}</span>
          <span style="color: var(--text-muted);">${l.duration}</span>
        </li>
      `;
    }).join("");

    return `
      <div style="margin-bottom: 1.25rem;">
        <h4 style="font-size: 1rem; color: var(--primary); margin-bottom: 0.5rem;">${mTitle}</h4>
        <ul style="list-style: none; padding-left: 0.5rem;">
          ${lessonsList}
        </ul>
      </div>
    `;
  }).join("");

  const buyBtn = document.getElementById("detailsModalBuyBtn");
  buyBtn.onclick = () => {
    closeAllModals();
    openCheckout(courseId, "course");
  };

  modal.classList.add("active");
}
