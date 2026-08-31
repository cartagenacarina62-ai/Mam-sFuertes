/**
 * Mamás Fuertes - Lógica del Aula Virtual (Student Classroom)
 */

let activeCourse = null;
let currentLesson = null;
let completedLessons = [];

document.addEventListener("DOMContentLoaded", () => {
  initClassroom();

  window.addEventListener("languageChanged", () => {
    if (activeCourse) {
      loadCourse(activeCourse.id);
    }
  });
});

function initClassroom() {
  const urlParams = new URLSearchParams(window.location.search);
  let courseId = urlParams.get("course") || "curso-posparto-core";

  // Verificar si el curso existe
  let foundCourse = coursesData.find((c) => c.id === courseId);
  if (!foundCourse) {
    foundCourse = coursesData[0];
  }

  loadCourse(foundCourse.id);
  initClassroomTabs();
  initNotes();
}

function loadCourse(courseId) {
  activeCourse = coursesData.find((c) => c.id === courseId);
  if (!activeCourse) return;

  const lang = currentLanguage || "es";
  const title = lang === "es" ? activeCourse.title_es : activeCourse.title_en;
  const instructor = lang === "es" ? activeCourse.instructor_es : activeCourse.instructor_en;

  // Cargar progreso guardado
  const savedProgress = JSON.parse(localStorage.getItem(`mamas_fuertes_progress_${activeCourse.id}`) || "[]");
  completedLessons = savedProgress;

  // Actualizar encabezados
  document.getElementById("classroomCourseTitle").textContent = title;
  document.getElementById("classroomInstructor").textContent = instructor;

  // Renderizar selector de cursos disponibles
  renderCourseSelector();

  // Renderizar módulos y temario en la barra lateral
  renderSidebarModules();

  // Seleccionar la primera lección por defecto
  if (!currentLesson && activeCourse.modules.length > 0 && activeCourse.modules[0].lessons.length > 0) {
    selectLesson(activeCourse.modules[0].lessons[0].id);
  }

  updateProgressBar();
}

function renderCourseSelector() {
  const selectEl = document.getElementById("classroomCourseSelect");
  if (!selectEl) return;

  const lang = currentLanguage || "es";
  selectEl.innerHTML = coursesData.map((c) => {
    const cTitle = lang === "es" ? c.title_es : c.title_en;
    return `<option value="${c.id}" ${c.id === activeCourse.id ? "selected" : ""}>${cTitle}</option>`;
  }).join("");

  selectEl.onchange = (e) => {
    currentLesson = null;
    loadCourse(e.target.value);
  };
}

function renderSidebarModules() {
  const container = document.getElementById("classroomModulesList");
  if (!container || !activeCourse) return;

  const lang = currentLanguage || "es";
  container.innerHTML = activeCourse.modules.map((m, mIdx) => {
    const mTitle = lang === "es" ? m.title_es : m.title_en;

    const lessonsHtml = m.lessons.map((l, lIdx) => {
      const lTitle = lang === "es" ? l.title_es : l.title_en;
      const isCompleted = completedLessons.includes(l.id);
      const isActive = currentLesson && currentLesson.id === l.id;

      return `
        <div class="classroom-lesson-item ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}" 
             onclick="selectLesson('${l.id}')">
          <div class="lesson-check-icon">${isCompleted ? "✓" : "○"}</div>
          <div class="lesson-info-text">
            <div class="lesson-title-label">${mIdx + 1}.${lIdx + 1} ${lTitle}</div>
            <div class="lesson-duration-label">⏱️ ${l.duration}</div>
          </div>
        </div>
      `;
    }).join("");

    return `
      <div class="classroom-module-block">
        <div class="classroom-module-heading">${mTitle}</div>
        <div class="classroom-module-lessons">${lessonsHtml}</div>
      </div>
    `;
  }).join("");
}

function selectLesson(lessonId) {
  let targetLesson = null;
  for (const mod of activeCourse.modules) {
    const found = mod.lessons.find((l) => l.id === lessonId);
    if (found) {
      targetLesson = found;
      break;
    }
  }

  if (!targetLesson) return;
  currentLesson = targetLesson;

  const lang = currentLanguage || "es";
  const title = lang === "es" ? targetLesson.title_es : targetLesson.title_en;
  const summary = lang === "es" ? targetLesson.summary_es : targetLesson.summary_en;

  // Actualizar reproductor de video
  const videoPlayer = document.getElementById("classroomVideoPlayer");
  if (videoPlayer) {
    videoPlayer.src = targetLesson.videoUrl;
    videoPlayer.load();
  }

  document.getElementById("currentLessonTitle").textContent = title;
  document.getElementById("currentLessonSummary").textContent = summary;

  // Actualizar botón de marcar completada
  const isDone = completedLessons.includes(targetLesson.id);
  const completeBtn = document.getElementById("btnToggleComplete");
  if (completeBtn) {
    if (isDone) {
      completeBtn.classList.add("btn-completed");
      completeBtn.textContent = `✓ ${t("classroom_completed_badge")}`;
    } else {
      completeBtn.classList.remove("btn-completed");
      completeBtn.textContent = t("classroom_mark_completed");
    }
  }

  renderSidebarModules();
}

function toggleCurrentLessonComplete() {
  if (!currentLesson) return;

  const idx = completedLessons.indexOf(currentLesson.id);
  if (idx > -1) {
    completedLessons.splice(idx, 1);
  } else {
    completedLessons.push(currentLesson.id);
  }

  localStorage.setItem(`mamas_fuertes_progress_${activeCourse.id}`, JSON.stringify(completedLessons));
  selectLesson(currentLesson.id);
  updateProgressBar();
}

function updateProgressBar() {
  if (!activeCourse) return;

  let totalLessons = 0;
  activeCourse.modules.forEach((m) => {
    totalLessons += m.lessons.length;
  });

  const percentage = totalLessons > 0 ? Math.round((completedLessons.length / totalLessons) * 100) : 0;
  const fillEl = document.getElementById("classroomProgressFill");
  const textEl = document.getElementById("classroomProgressPercent");

  if (fillEl) fillEl.style.width = `${percentage}%`;
  if (textEl) textEl.textContent = `${percentage}%`;
}

function initClassroomTabs() {
  const tabs = document.querySelectorAll(".classroom-nav-tab");
  const panes = document.querySelectorAll(".classroom-tab-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      panes.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");
      const targetId = tab.getAttribute("data-tab");
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add("active");
    });
  });

  // Botón marcar completada
  const toggleBtn = document.getElementById("btnToggleComplete");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      toggleCurrentLessonComplete();
    });
  }
}

function initNotes() {
  const textarea = document.getElementById("studentNotesArea");
  const saveBtn = document.getElementById("saveNotesBtn");
  const feedback = document.getElementById("notesFeedback");

  if (!textarea || !saveBtn) return;

  // Cargar notas guardadas
  const savedNotes = localStorage.getItem("mamas_fuertes_user_notes") || "";
  textarea.value = savedNotes;

  saveBtn.addEventListener("click", () => {
    localStorage.setItem("mamas_fuertes_user_notes", textarea.value);
    feedback.textContent = currentLanguage === "es" ? "✓ ¡Notas guardadas con éxito!" : "✓ Notes saved successfully!";
    setTimeout(() => {
      feedback.textContent = "";
    }, 3000);
  });
}

function downloadMockFile(fileName) {
  alert(currentLanguage === "es" 
    ? `📥 Descargando "${fileName}". ¡Listo para imprimir y usar en tus rutinas!` 
    : `📥 Downloading "${fileName}". Ready to print and track your workouts!`);
}
