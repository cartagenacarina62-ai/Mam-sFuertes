/**
 * Mamás Fuertes - Chatbot Asistente Virtual Inteligente 24/7 ("Alma")
 */

document.addEventListener("DOMContentLoaded", () => {
  initChatWidget();
});

function initChatWidget() {
  const launcherBtn = document.getElementById("chatLauncherBtn");
  const widgetBox = document.getElementById("chatWidgetBox");
  const closeBtn = document.getElementById("chatCloseBtn");
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const messagesContainer = document.getElementById("chatMessagesBody");
  const quickPills = document.querySelectorAll(".chat-quick-pill");

  if (!launcherBtn || !widgetBox) return;

  let hasGreeted = false;

  // Abrir / Cerrar Chat
  launcherBtn.addEventListener("click", () => {
    const isActive = widgetBox.classList.contains("active");
    if (!isActive) {
      widgetBox.classList.add("active");
      // Ocultar pulse badge
      const pulse = document.querySelector(".chat-badge-pulse");
      if (pulse) pulse.style.display = "none";

      if (!hasGreeted) {
        hasGreeted = true;
        sendBotMessage(t("chat_welcome"));
      }
    } else {
      widgetBox.classList.remove("active");
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      widgetBox.classList.remove("active");
    });
  }

  // Envío de mensaje desde formulario
  if (chatForm && chatInput) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;

      addUserMessage(text);
      chatInput.value = "";
      processUserQuery(text);
    });
  }

  // Clics en sugerencias rápidas
  quickPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const prompt = pill.getAttribute("data-prompt");
      if (prompt === "whatsapp") {
        openWhatsAppDirect();
        return;
      }

      addUserMessage(pill.textContent);
      processUserQuery(prompt);
    });
  });
}

/**
 * Agrega un mensaje del usuario al chat
 */
function addUserMessage(text) {
  const container = document.getElementById("chatMessagesBody");
  if (!container) return;

  const timeStr = getCurrentTimeString();
  const msgEl = document.createElement("div");
  msgEl.className = "chat-message user";
  msgEl.innerHTML = `
    <div class="chat-bubble">
      <div>${escapeHTML(text)}</div>
      <div class="chat-time">${timeStr}</div>
    </div>
  `;
  container.appendChild(msgEl);
  scrollToBottom(container);
}

/**
 * Agrega un mensaje del bot al chat con efecto de escritura simulado
 */
function sendBotMessage(text) {
  const container = document.getElementById("chatMessagesBody");
  const typingIndicator = document.getElementById("chatTypingIndicator");
  if (!container) return;

  if (typingIndicator) {
    typingIndicator.style.display = "flex";
    scrollToBottom(container);
  }

  setTimeout(() => {
    if (typingIndicator) {
      typingIndicator.style.display = "none";
    }

    const timeStr = getCurrentTimeString();
    const msgEl = document.createElement("div");
    msgEl.className = "chat-message bot";
    msgEl.innerHTML = `
      <div class="chat-avatar">🌸</div>
      <div class="chat-bubble">
        <div>${text}</div>
        <div class="chat-time">${timeStr}</div>
      </div>
    `;
    container.appendChild(msgEl);
    scrollToBottom(container);
  }, 750);
}

/**
 * Procesa la consulta del usuario buscando intenciones en la base de conocimientos
 */
function processUserQuery(query) {
  const qLower = query.toLowerCase();
  const lang = currentLanguage || "es";

  // Buscar coincidencia en la base de conocimiento
  let matchedReply = null;
  for (const item of chatKnowledgeBase) {
    const hasKeyword = item.keywords.some((k) => qLower.includes(k.toLowerCase()));
    if (hasKeyword) {
      matchedReply = lang === "es" ? item.reply_es : item.reply_en;
      break;
    }
  }

  if (matchedReply) {
    sendBotMessage(matchedReply);
  } else {
    // Respuesta por defecto con sugerencia
    const defaultMsg = lang === "es"
      ? "¡Excelente pregunta! Para darte la mejor recomendación personalizada, ¿podrías decirme si buscas recuperación posparto, tonificación rápida o clases de hipopresivos? También puedes <a href='javascript:void(0)' onclick='openWhatsAppDirect()' style='color: var(--primary); font-weight: bold;'>chatear con una asesora en vivo por WhatsApp</a>."
      : "Great question! To give you the most accurate advice, are you looking for postpartum recovery, quick tone workouts, or hypopressive classes? You can also <a href='javascript:void(0)' onclick='openWhatsAppDirect()' style='color: var(--primary); font-weight: bold;'>chat with a live coach on WhatsApp</a>.";
    sendBotMessage(defaultMsg);
  }
}

/**
 * Abre el enlace de WhatsApp con mensaje personalizado
 */
function openWhatsAppDirect() {
  const lang = currentLanguage || "es";
  const msg = lang === "es"
    ? encodeURIComponent("¡Hola! Vengo de la web de Mamás Fuertes y quisiera asesoría personalizada sobre los cursos y membresías.")
    : encodeURIComponent("Hi! I'm reaching out from the Strong Moms website and would like personalized coaching info.");
  
  window.open(`https://wa.me/50495431299?text=${msg}`, "_blank");
}

function getCurrentTimeString() {
  const d = new Date();
  let hours = d.getHours();
  let mins = d.getMinutes();
  mins = mins < 10 ? "0" + mins : mins;
  return `${hours}:${mins}`;
}

function scrollToBottom(container) {
  container.scrollTop = container.scrollHeight;
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
