/**
 * Mamás Fuertes - Pasarelas de Pago & Checkout (Stripe & PayPal)
 */

let currentCheckoutItem = null;
let currentDiscount = 0; // Porcentaje de descuento aplicado

/**
 * Abre el modal de checkout para un curso o membresía
 * @param {string} itemId - ID del curso o membresía ('membership-monthly', 'membership-annual')
 * @param {string} itemType - 'course' o 'membership'
 */
function openCheckout(itemId, itemType = "course") {
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  const lang = currentLanguage || "es";
  currentDiscount = 0;
  document.getElementById("couponInput").value = "";
  document.getElementById("couponFeedback").textContent = "";

  if (itemType === "course") {
    const course = coursesData.find((c) => c.id === itemId);
    if (!course) return;

    currentCheckoutItem = {
      id: course.id,
      type: "course",
      title: lang === "es" ? course.title_es : course.title_en,
      price: course.price,
      currency: "USD"
    };
  } else if (itemType === "membership") {
    const isAnnual = itemId === "membership-annual";
    currentCheckoutItem = {
      id: itemId,
      type: "membership",
      title: isAnnual 
        ? (lang === "es" ? "Membresía Anual VIP Mamás Fuertes" : "Strong Moms Annual VIP Membership")
        : (lang === "es" ? "Membresía Mensual Mamás Fuertes" : "Strong Moms Monthly Membership"),
      price: isAnnual ? 89 : 15,
      period: isAnnual ? (lang === "es" ? "/año" : "/year") : (lang === "es" ? "/mes" : "/month"),
      currency: "USD"
    };
  }

  updateCheckoutSummary();
  resetCheckoutState();
  modal.classList.add("active");
}

function updateCheckoutSummary() {
  if (!currentCheckoutItem) return;

  const itemTitleEl = document.getElementById("checkoutItemTitle");
  const itemPriceEl = document.getElementById("checkoutItemPrice");
  const totalEl = document.getElementById("checkoutTotalPrice");

  itemTitleEl.textContent = currentCheckoutItem.title;
  itemPriceEl.textContent = `$${currentCheckoutItem.price} ${currentCheckoutItem.currency}`;

  const discountedPrice = (currentCheckoutItem.price * (1 - currentDiscount / 100)).toFixed(2);
  totalEl.textContent = `$${discountedPrice} ${currentCheckoutItem.currency}`;
}

function resetCheckoutState() {
  document.getElementById("checkoutFormView").style.display = "block";
  document.getElementById("checkoutSuccessView").style.display = "none";
  document.getElementById("btnPayStripe").disabled = false;
  document.getElementById("btnPayStripe").innerHTML = t("checkout_btn_pay_stripe");
  document.getElementById("btnPayPaypal").disabled = false;
}

/**
 * Inicialización de eventos del Checkout
 */
document.addEventListener("DOMContentLoaded", () => {
  // Pestañas de método de pago (Stripe vs PayPal)
  const tabStripe = document.getElementById("tabStripe");
  const tabPaypal = document.getElementById("tabPaypal");
  const stripeForm = document.getElementById("stripePaymentForm");
  const paypalForm = document.getElementById("paypalPaymentForm");

  if (tabStripe && tabPaypal) {
    tabStripe.addEventListener("click", () => {
      tabStripe.classList.add("active");
      tabPaypal.classList.remove("active");
      stripeForm.style.display = "block";
      paypalForm.style.display = "none";
    });

    tabPaypal.addEventListener("click", () => {
      tabPaypal.classList.add("active");
      tabStripe.classList.remove("active");
      paypalForm.style.display = "block";
      stripeForm.style.display = "none";
    });
  }

  // Formateo automático de número de tarjeta
  const cardInput = document.getElementById("cardNumber");
  if (cardInput) {
    cardInput.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, "");
      val = val.substring(0, 16);
      val = val.match(/.{1,4}/g)?.join(" ") || val;
      e.target.value = val;
    });
  }

  // Formateo automático de fecha MM/AA
  const expInput = document.getElementById("cardExp");
  if (expInput) {
    expInput.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, "");
      if (val.length > 2) {
        val = val.substring(0, 2) + " / " + val.substring(2, 4);
      }
      e.target.value = val;
    });
  }

  // Aplicar cupón de descuento
  const applyCouponBtn = document.getElementById("applyCouponBtn");
  if (applyCouponBtn) {
    applyCouponBtn.addEventListener("click", () => {
      const code = document.getElementById("couponInput").value.trim().toUpperCase();
      const feedback = document.getElementById("couponFeedback");

      if (code === "MAMA20" || code === "FUERTE20") {
        currentDiscount = 20;
        feedback.style.color = "var(--accent-green)";
        feedback.textContent = t("checkout_coupon_applied");
        updateCheckoutSummary();
      } else if (code === "") {
        feedback.style.color = "var(--text-muted)";
        feedback.textContent = "";
      } else {
        feedback.style.color = "var(--primary)";
        feedback.textContent = currentLanguage === "es" ? "Código no válido." : "Invalid promo code.";
      }
    });
  }

  // Procesar Pago con Stripe
  const btnPayStripe = document.getElementById("btnPayStripe");
  if (btnPayStripe) {
    btnPayStripe.addEventListener("click", (e) => {
      e.preventDefault();
      processPayment("Stripe");
    });
  }

  // Procesar Pago con PayPal
  const btnPayPaypal = document.getElementById("btnPayPaypal");
  if (btnPayPaypal) {
    btnPayPaypal.addEventListener("click", (e) => {
      e.preventDefault();
      processPayment("PayPal");
    });
  }
});

/**
 * Simulación de procesamiento de pago con Pasarela
 * Guarda el curso/membresía en localStorage y desbloquea el aula virtual
 */
function processPayment(gateway) {
  const nameInput = document.getElementById("buyerName").value.trim();
  const emailInput = document.getElementById("buyerEmail").value.trim();

  if (!nameInput || !emailInput || !emailInput.includes("@")) {
    alert(currentLanguage === "es" 
      ? "Por favor introduce tu nombre completo y un correo electrónico válido para enviarte los accesos." 
      : "Please enter your full name and a valid email address to receive course credentials.");
    return;
  }

  const btn = gateway === "Stripe" ? document.getElementById("btnPayStripe") : document.getElementById("btnPayPaypal");
  btn.disabled = true;
  btn.innerHTML = `<span style="display: inline-block; animation: spin 1s infinite linear;">⌛</span> ${currentLanguage === "es" ? "Conectando con " + gateway + "..." : "Connecting to " + gateway + "..."}`;

  setTimeout(() => {
    // Guardar compra en LocalStorage
    saveEnrollment(currentCheckoutItem, { name: nameInput, email: emailInput });

    // Mostrar vista de éxito
    document.getElementById("checkoutFormView").style.display = "none";
    document.getElementById("checkoutSuccessView").style.display = "block";
  }, 1500);
}

/**
 * Guarda los cursos inscritos en el LocalStorage
 */
function saveEnrollment(item, user) {
  localStorage.setItem("mamas_fuertes_user", JSON.stringify(user));

  let enrolled = JSON.parse(localStorage.getItem("mamas_fuertes_enrolled") || "[]");
  if (!enrolled.includes(item.id)) {
    enrolled.push(item.id);
    localStorage.setItem("mamas_fuertes_enrolled", JSON.stringify(enrolled));
  }

  if (item.type === "membership") {
    localStorage.setItem("mamas_fuertes_active_membership", item.id);
  }
}

/**
 * Redirige al aula virtual tras la compra
 */
function goToClassroom() {
  const targetCourseId = currentCheckoutItem ? currentCheckoutItem.id : "curso-posparto-core";
  window.location.href = `aula.html?course=${targetCourseId}`;
}
