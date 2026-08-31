/**
 * Sistema de Internacionalización (i18n) - Mamás Fuertes
 * Permite alternar instantáneamente entre Español e Inglés sin recargar.
 */

const translations = {
  es: {
    // Navegación
    nav_home: "Inicio",
    nav_courses: "Cursos",
    nav_memberships: "Membresías",
    nav_benefits: "Beneficios",
    nav_testimonials: "Testimonios",
    nav_faq: "Preguntas Frecuentes",
    nav_classroom: "Mi Aula Virtual",
    nav_start_now: "Comenzar Ahora",

    // Hero Section
    hero_badge: "✨ Crianza, Alimentación, Primerizas (30-35) & Bienestar Maternal",
    hero_title: "Acompaña cada etapa de tus hijos, su nutrición y tu propia recuperación como mamá",
    hero_subtitle: "Cursos online guiados por ginecólogas, neuropsicólogas, pediatras y entrenadoras: primerizas de 30-35 años, alimentación por edades (BLW a teens), TDAH/hiperactividad, sueño y fitness.",
    hero_cta_courses: "Explorar Todos los Cursos",
    hero_cta_membership: "Membresía Ilimitada",
    hero_stat_mothers: "+5,000 Familias",
    hero_stat_rating: "4.9/5 Calificación Promedio",
    hero_stat_programs: "+220 Clases en Video",
    hero_guarantee: "🔒 Garantía de satisfacción de 14 días",

    // Quiz Section
    quiz_badge: "🎯 Asesor Virtual Personalizado",
    quiz_title: "¿Cuál es el curso ideal para la etapa de tu hijo o tu cuerpo?",
    quiz_subtitle: "Responde 3 preguntas rápidas y te recomendaremos el curso o membresía que mejor se adapta a lo que necesitas hoy.",
    quiz_btn_start: "Hacer el Test Rápido (1 min)",
    quiz_q1_title: "1. ¿En qué etapa se encuentra tu familia o tu maternidad?",
    quiz_q1_opt1: "Embarazo o Primeriza entre 30 y 35 años (cuidados especiales y recuperación)",
    quiz_q1_opt2: "Posparto y Bebé de 0 a 12 meses (lactancia, sueño, inicio de sólidos)",
    quiz_q1_opt3: "Primera Infancia o Edad Escolar (1 a 11 años - rabietas, límites, rutinas, TDAH)",
    quiz_q1_opt4: "Adolescencia (12 a 18 años - comunicación, pantallas, identidad)",
    quiz_q2_title: "2. ¿Cuál es tu necesidad o desafío principal?",
    quiz_q2_opt1: "🌸 Maternidad primeriza a los 30-35: recuperación celular, balance laboral y culpa",
    quiz_q2_opt2: "🧠 Comprender a mi hijo que es hiperactivo, inquieto o con TDAH / alta energía",
    quiz_q2_opt3: "🥗 Alimentación adecuada según su edad (BLW, no come verduras, loncheras)",
    quiz_q2_opt4: "💪 Salud física y fitness para mí (posparto, diástasis, fuerza en 20 min)",
    quiz_q3_title: "3. ¿Qué tipo de acceso prefieres?",
    quiz_q3_opt1: "Curso individual específico con acceso de por vida",
    quiz_q3_opt2: "Membresía con acceso a TODOS los cursos (Primerizas 30-35, TDAH, Nutrición, Crianza, Fitness)",
    quiz_btn_next: "Siguiente Pregunta",
    quiz_btn_finish: "Ver Mi Recomendación",
    quiz_result_title: "¡Tu curso recomendado está listo!",
    quiz_result_btn: "Ver este Curso",
    quiz_btn_restart: "Repetir Test",

    // Cursos & Filtros
    courses_badge: "📚 Formación Especializada por Etapas & Temas",
    courses_title: "Cursos Online: Crianza, Nutrición y Salud Familiar",
    courses_subtitle: "Aprende con pediatras, ginecólogas, neuropsicólogas, nutriólogas y fisioterapeutas expertas.",
    courses_filter_all: "Todos los Cursos",
    courses_filter_postpartum: "🌸 Posparto & Primerizas 30-35",
    courses_filter_nutrition: "🥗 Alimentación & Nutrición",
    courses_filter_childhood: "🧠 Crianza, TDAH & Etapas",
    courses_filter_pregnancy: "🤰 Embarazo & Parto",
    courses_filter_babies: "👶 Bebés (0-12 m)",
    courses_filter_teens: "🧑‍🦱 Adolescencia (12+ años)",
    courses_filter_strength: "💪 Fuerza & Bienestar Mamá",
    course_lessons: "lecciones",
    course_hours: "horas",
    course_lifetime: "Acceso de por vida",
    course_btn_details: "Ver Temario",
    course_btn_buy: "Comprar Curso",
    course_level_beginner: "Principiante",
    course_level_intermediate: "Intermedio",
    course_level_all: "Todos los niveles",

    // Membresías
    memberships_badge: "👑 Acceso Total a Todas las Etapas",
    memberships_title: "Elige tu Membresía Mamás Fuertes",
    memberships_subtitle: "Únete a la membresía y obtén acceso ilimitado a todos los cursos de crianza, madres primerizas (30-35), alimentación por edades, TDAH/hiperactividad y fitness, comunidad privada y sesiones en vivo.",
    membership_monthly_title: "Plan Mensual",
    membership_monthly_desc: "Flexibilidad total para formarte y entrenar mes a mes.",
    membership_monthly_price: "$29",
    membership_monthly_period: "/mes",
    membership_annual_title: "Plan Anual VIP",
    membership_annual_badge: "🔥 AHORRA 40% - EL MÁS ELEGIDO",
    membership_annual_desc: "El acompañamiento definitivo para tu salud, bienestar maternal y la crianza de tus hijos.",
    membership_annual_price: "$199",
    membership_annual_period: "/año (equivale a $16.50/mes)",
    membership_feat_all_courses: "Acceso a los 11+ cursos completos (Primerizas 30-35, Nutrición, TDAH, Crianza, Fitness)",
    membership_feat_live: "Sesiones mensuales de preguntas en vivo con ginecólogas, psicólogas y pediatras",
    membership_feat_community: "Tribu privada de apoyo en WhatsApp",
    membership_feat_nutrition: "Recetarios familiares y guías descargables en PDF",
    membership_feat_support: "Soporte prioritario para resolver dudas",
    membership_feat_updates: "Nuevas masterclasses y guías añadidas cada mes",
    membership_feat_cancel: "Cancela cuando quieras con 1 solo clic",
    membership_btn_select: "Comenzar Membresía",

    // Beneficios
    benefits_badge: "💪 ¿Por qué Mamás Fuertes?",
    benefits_title: "Acompañamiento profesional en cada paso de tu maternidad",
    benefit_1_title: "Especializado en Primerizas y Crianza",
    benefit_1_desc: "Módulos diseñados para madres de 30-35 años, guías de alimentación infantil y herramientas para niños hiperactivos.",
    benefit_2_title: "Validado por especialistas",
    benefit_2_desc: "Contenido creado por ginecólogas, neuropsicólogas, pediatras, nutriólogas infantiles y fisioterapeutas.",
    benefit_3_title: "100% a tu propio ritmo",
    benefit_3_desc: "Lecciones en video de 15-20 minutos diseñadas para la agenda real de mamás y familias.",
    benefit_4_title: "Tribu y Apoyo 24/7",
    benefit_4_desc: "Comunidad de madres sin juzgar y asistente virtual inteligente para resolver dudas en cualquier momento.",

    // Testimonios
    testimonials_badge: "💖 Historias Reales",
    testimonials_title: "Familias que transformaron su crianza, nutrición y salud",
    testimonials_subtitle: "Testimonios auténticos de madres que aplicaron nuestras herramientas en distintas edades y situaciones.",

    // FAQ
    faq_badge: "❓ Resolvemos tus dudas",
    faq_title: "Preguntas Frecuentes",

    // Footer
    footer_tagline: "Empoderando a las madres en cada etapa del desarrollo de sus hijos: crianza consciente, nutrición saludable y bienestar integral.",
    footer_links_title: "Enlaces Rápidos",
    footer_legal_title: "Legal & Seguridad",
    footer_terms: "Términos y Condiciones",
    footer_privacy: "Política de Privacidad",
    footer_refund: "Garantía de Devolución",
    footer_newsletter_title: "Recibe nuestra Guía Gratuita",
    footer_newsletter_desc: "Suscríbete y descarga el ebook 'Guía de Maternidad Consciente, Primerizas y Nutrición Infantil'.",
    footer_newsletter_btn: "Suscribirme",
    footer_copyright: "© 2026 Mamás Fuertes. Todos los derechos reservados.",

    // Checkout Modal
    checkout_modal_title: "Finalizar Compra Segura",
    checkout_item_label: "Producto seleccionado:",
    checkout_summary: "Resumen del Pedido",
    checkout_total: "Total a pagar:",
    checkout_tabs_stripe: "💳 Tarjeta (Stripe / Apple Pay / Google Pay)",
    checkout_tabs_paypal: "🅿️ PayPal Express",
    checkout_form_name: "Nombre Completo",
    checkout_form_email: "Correo Electrónico (Aquí recibirás tus accesos)",
    checkout_form_card: "Número de Tarjeta",
    checkout_form_exp: "MM / AA",
    checkout_form_cvc: "CVC",
    checkout_coupon_label: "¿Tienes un cupón de descuento?",
    checkout_coupon_btn: "Aplicar",
    checkout_coupon_applied: "¡Cupón MAMA20 aplicado! Descuento del 20%",
    checkout_btn_pay_stripe: "Pagar con Tarjeta Segura",
    checkout_btn_pay_paypal: "Continuar con PayPal",
    checkout_security_note: "🔒 Pagos 100% cifrados con SSL de 256 bits y garantía de reembolso de 14 días.",
    checkout_success_title: "¡Felicidades y bienvenida a Mamás Fuertes! 🎉",
    checkout_success_msg: "Tu compra ha sido procesada con éxito. Ya puedes ingresar a tu Aula Virtual para comenzar.",
    checkout_btn_go_classroom: "Ir a Mi Aula Virtual Ahora",

    // Modal de Temario / Detalles
    modal_details_title: "Contenido del Curso",
    modal_details_modules: "Módulos incluidos:",
    modal_details_includes: "Este curso incluye:",
    modal_details_inc1: "Acceso ilimitado de por vida",
    modal_details_inc2: "Guías descargables en PDF y herramientas prácticas",
    modal_details_inc3: "Certificado de finalización",
    modal_details_inc4: "Soporte y resolución de dudas",
    modal_btn_close: "Cerrar",

    // Chatbot
    chat_header_name: "Alma - Asistente Mamás Fuertes",
    chat_header_status: "En línea 24/7 • Respuestas instantáneas",
    chat_welcome: "¡Hola, mamá! 🌸 Soy Alma, tu asistente virtual. Te puedo orientar en cursos sobre primerizas a los 30-35 años, hijos hiperactivos/TDAH, alimentación infantil por edades (BLW y verduras), rabietas, sueño del bebé o fitness maternal. ¿Qué duda tienes hoy?",
    chat_quick_q1: "🌸 ¿Consejos para ser madre primeriza a los 30-35 años?",
    chat_quick_q2: "🧠 ¿Cómo comprender a mi hijo que es muy hiperactivo?",
    chat_quick_q3: "🥗 ¿Qué curso me enseña la alimentación según la edad?",
    chat_quick_q4: "👶 ¿Cómo ayudar a mi bebé de 0-12 meses a dormir mejor?",
    chat_input_placeholder: "Escribe tu duda sobre primerizas, alimentación o cursos...",
    chat_btn_send: "Enviar",
    chat_whatsapp_btn: "📲 Chatear con una Educadora por WhatsApp",

    // Aula Virtual
    classroom_title: "Aula Virtual - Mamás Fuertes",
    classroom_welcome: "¡Bienvenida a tu espacio de formación, crianza y bienestar! 💪",
    classroom_progress_title: "Tu Progreso en el Curso:",
    classroom_btn_back: "← Volver a la Tienda",
    classroom_tab_modules: "Temario & Lecciones",
    classroom_tab_resources: "Materiales y Recursos",
    classroom_tab_notes: "Mis Notas Personales",
    classroom_mark_completed: "✓ Marcar como Completada",
    classroom_completed_badge: "¡Lección Completada!",
    classroom_save_notes: "Guardar Notas",
    classroom_notes_placeholder: "Escribe aquí tus notas, reflexiones o dudas sobre este curso...",
    classroom_download_guide: "Descargar Guía Práctica en PDF",
    classroom_download_planner: "Descargar Planificador Familiar (PDF)",
    classroom_download_checklist: "Descargar Checklist de Rutinas (PDF)"
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_courses: "Courses",
    nav_memberships: "Memberships",
    nav_benefits: "Benefits",
    nav_testimonials: "Testimonials",
    nav_faq: "FAQ",
    nav_classroom: "My Virtual Classroom",
    nav_start_now: "Start Now",

    // Hero Section
    hero_badge: "✨ Parenting, Nutrition, First-Time Moms (30-35) & Maternal Wellness",
    hero_title: "Guide every stage of your child's growth, nourish their body, and master your own recovery as a mom",
    hero_subtitle: "Online courses led by OBGYNs, neuropsychologists, pediatricians, dietitians, and coaches: first-time moms 30-35, age-by-age nutrition (BLW to teens), ADHD/hyperactivity, sleep, and maternal fitness.",
    hero_cta_courses: "Browse All Courses",
    hero_cta_membership: "Unlimited Membership",
    hero_stat_mothers: "+5,000 Families",
    hero_stat_rating: "4.9/5 Average Rating",
    hero_stat_programs: "+220 Video Lessons",
    hero_guarantee: "🔒 14-Day Money-Back Guarantee",

    // Quiz Section
    quiz_badge: "🎯 Personalized Virtual Advisor",
    quiz_title: "Which course fits your child's stage or your family's needs best?",
    quiz_subtitle: "Answer 3 quick questions and get instant recommendations tailored to what you need today.",
    quiz_btn_start: "Take Quick Quiz (1 min)",
    quiz_q1_title: "1. What stage is your family or motherhood in?",
    quiz_q1_opt1: "Pregnancy or First-Time Mom aged 30-35 (special care, mindset & recovery)",
    quiz_q1_opt2: "Postpartum & Baby 0 to 12 months (nursing, sleep, starting solids)",
    quiz_q1_opt3: "Early Childhood or School Age (1 to 11 yrs - tantrums, routines, ADHD)",
    quiz_q1_opt4: "Adolescence (12 to 18 yrs - communication, screens, identity)",
    quiz_q2_title: "2. What is your primary challenge or focus?",
    quiz_q2_opt1: "🌸 First-time motherhood at 30-35: cellular recovery, career-baby balance & guilt",
    quiz_q2_opt2: "🧠 Understanding and supporting my hyperactive / ADHD / high-energy child",
    quiz_q2_opt3: "🥗 Age-appropriate nutrition (BLW solids, picky eaters, school snacks)",
    quiz_q2_opt4: "💪 Physical health and fitness for mom (postpartum, core, 20-min workouts)",
    quiz_q3_title: "3. What type of access do you prefer?",
    quiz_q3_opt1: "Individual course with lifetime access",
    quiz_q3_opt2: "Unlimited Membership with all courses (First-Time Moms 30-35, ADHD, Nutrition, Fitness)",
    quiz_btn_next: "Next Question",
    quiz_btn_finish: "See My Recommendation",
    quiz_result_title: "Your recommended course is ready!",
    quiz_result_btn: "View this Course",
    quiz_btn_restart: "Restart Quiz",

    // Courses & Filters
    courses_badge: "📚 Specialized Courses by Stage & Topic",
    courses_title: "Online Courses: Parenting, Nutrition & Family Health",
    courses_subtitle: "Learn with certified OBGYNs, pediatricians, neuropsychologists, pediatric dietitians, and physiotherapists.",
    courses_filter_all: "All Courses",
    courses_filter_postpartum: "🌸 Postpartum & First-Time Moms 30-35",
    courses_filter_nutrition: "🥗 Food & Nutrition",
    courses_filter_childhood: "🧠 Parenting, ADHD & Stages",
    courses_filter_pregnancy: "🤰 Pregnancy & Birth",
    courses_filter_babies: "👶 Babies (0-12 m)",
    courses_filter_teens: "🧑‍🦱 Teens (12+ yrs)",
    courses_filter_strength: "💪 Mom Strength & Fitness",
    course_lessons: "lessons",
    course_hours: "hours",
    course_lifetime: "Lifetime access",
    course_btn_details: "View Syllabus",
    course_btn_buy: "Buy Course",
    course_level_beginner: "Beginner",
    course_level_intermediate: "Intermediate",
    course_level_all: "All levels",

    // Memberships
    memberships_badge: "👑 All-Access to All Stages",
    memberships_title: "Choose Your Strong Moms Membership",
    memberships_subtitle: "Join the membership and get unlimited access to all courses (first-time moms 30-35, parenting, nutrition, ADHD, and fitness), private community, and live expert sessions.",
    membership_monthly_title: "Monthly Plan",
    membership_monthly_desc: "Total flexibility to learn and train month by month at your own pace.",
    membership_monthly_price: "$29",
    membership_monthly_period: "/month",
    membership_annual_title: "Annual VIP Plan",
    membership_annual_badge: "🔥 SAVE 40% - MOST POPULAR",
    membership_annual_desc: "Comprehensive support for your health, maternal mindset, and family's growth.",
    membership_annual_price: "$199",
    membership_annual_period: "/year (only $16.50/month)",
    membership_feat_all_courses: "Access to all 11+ complete courses (First-Time Moms 30-35, Nutrition, ADHD, Fitness)",
    membership_feat_live: "Monthly live Q&A sessions with OBGYNs, psychologists & pediatricians",
    membership_feat_community: "Private WhatsApp support tribe",
    membership_feat_nutrition: "Family meal plans & downloadable parenting/postpartum guides",
    membership_feat_support: "Priority support for family and recovery questions",
    membership_feat_updates: "New masterclasses and tools added every month",
    membership_feat_cancel: "Cancel anytime with 1 click",
    membership_btn_select: "Start Membership",

    // Benefits
    benefits_badge: "💪 Why Strong Moms?",
    benefits_title: "Professional guidance for every milestone of motherhood",
    benefit_1_title: "First-Time Moms 30-35 & Parenting",
    benefit_1_desc: "Tailored modules for mothers in their 30s, age-appropriate feeding guides, and ADHD parenting tools.",
    benefit_2_title: "Validated by specialists",
    benefit_2_desc: "Created by OBGYNs, neuropsychologists, pediatricians, child dietitians, and physiotherapists.",
    benefit_3_title: "100% at your own pace",
    benefit_3_desc: "Bite-sized 15-20 minute video lessons tailored for busy real-life schedules.",
    benefit_4_title: "Tribe & 24/7 Virtual Support",
    benefit_4_desc: "Judgment-free community and an AI assistant ready to answer questions anytime.",

    // Testimonials
    testimonials_badge: "💖 Real Stories",
    testimonials_title: "Families Who Transformed Parenting, Nutrition & Health",
    testimonials_subtitle: "Authentic experiences from mothers navigating different ages, first-time motherhood at 30+, and ADHD.",

    // FAQ
    faq_badge: "❓ Frequently Asked Questions",
    faq_title: "Got Questions? We Have Answers",

    // Footer
    footer_tagline: "Empowering mothers at every stage of their children's development: conscious parenting, wholesome nutrition, and maternal health.",
    footer_links_title: "Quick Links",
    footer_legal_title: "Legal & Security",
    footer_terms: "Terms & Conditions",
    footer_privacy: "Privacy Policy",
    footer_refund: "Refund Guarantee",
    footer_newsletter_title: "Get Your Free Starter Guide",
    footer_newsletter_desc: "Subscribe and download our free ebook 'Mindful Motherhood, First-Time Moms & Child Nutrition'.",
    footer_newsletter_btn: "Subscribe",
    footer_copyright: "© 2026 Strong Moms (Mamás Fuertes). All rights reserved.",

    // Checkout Modal
    checkout_modal_title: "Secure Checkout",
    checkout_item_label: "Selected item:",
    checkout_summary: "Order Summary",
    checkout_total: "Total to pay:",
    checkout_tabs_stripe: "💳 Credit Card (Stripe / Apple Pay / Google Pay)",
    checkout_tabs_paypal: "🅿️ PayPal Express",
    checkout_form_name: "Full Name",
    checkout_form_email: "Email Address (You will receive login details here)",
    checkout_form_card: "Card Number",
    checkout_form_exp: "MM / YY",
    checkout_form_cvc: "CVC",
    checkout_coupon_label: "Have a promo code?",
    checkout_coupon_btn: "Apply",
    checkout_coupon_applied: "Promo code MAMA20 applied! 20% discount",
    checkout_btn_pay_stripe: "Pay with Secure Card",
    checkout_btn_pay_paypal: "Continue with PayPal",
    checkout_security_note: "🔒 100% 256-bit SSL encrypted payments & 14-day money-back guarantee.",
    checkout_success_title: "Congratulations & Welcome to Strong Moms! 🎉",
    checkout_success_msg: "Your payment was successful. You can now access your Virtual Classroom to start learning.",
    checkout_btn_go_classroom: "Go to My Classroom Now",

    // Syllabus Modal
    modal_details_title: "Course Syllabus",
    modal_details_modules: "Included Modules:",
    modal_details_includes: "This course includes:",
    modal_details_inc1: "Lifetime unlimited access",
    modal_details_inc2: "Downloadable PDF guides, recovery plans & practical tools",
    modal_details_inc3: "Certificate of completion",
    modal_details_inc4: "Q&A support with our specialist team",
    modal_btn_close: "Close",

    // Chatbot
    chat_header_name: "Alma - Strong Moms Assistant",
    chat_header_status: "Online 24/7 • Instant Answers",
    chat_welcome: "Hi, mama! 🌸 I'm Alma, your virtual assistant. I can guide you on first-time motherhood at 30-35, hyperactive/ADHD child strategies, age-by-age nutrition (BLW & picky eating), tantrums, baby sleep, pregnancy, or fitness. What can I help you with today?",
    chat_quick_q1: "🌸 Tips for first-time moms aged 30-35?",
    chat_quick_q2: "🧠 How to understand and support my hyperactive child?",
    chat_quick_q3: "🥗 Which course teaches age-appropriate child nutrition?",
    chat_quick_q4: "👶 How can I help my 0-12 month baby sleep better?",
    chat_input_placeholder: "Type your question about first-time motherhood, nutrition, or courses...",
    chat_btn_send: "Send",
    chat_whatsapp_btn: "📲 Chat with a Parenting Educator on WhatsApp",

    // Virtual Classroom
    classroom_title: "Virtual Classroom - Strong Moms",
    classroom_welcome: "Welcome to your parenting, recovery & wellness space! 💪",
    classroom_progress_title: "Your Course Progress:",
    classroom_btn_back: "← Back to Store",
    classroom_tab_modules: "Syllabus & Lessons",
    classroom_tab_resources: "Materials & Resources",
    classroom_tab_notes: "My Personal Notes",
    classroom_mark_completed: "✓ Mark as Completed",
    classroom_completed_badge: "Lesson Completed!",
    classroom_save_notes: "Save Notes",
    classroom_notes_placeholder: "Write down your takeaways, observations, or reflections on this course...",
    classroom_download_guide: "Download Practical Guide (PDF)",
    classroom_download_planner: "Download Family Routine Planner (PDF)",
    classroom_download_checklist: "Download Postpartum & Routine Checklist (PDF)"
  }
};

let currentLanguage = localStorage.getItem("mamas_fuertes_lang") || "es";

/**
 * Cambia el idioma actual y actualiza todos los textos del DOM
 * @param {string} lang - 'es' o 'en'
 */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  localStorage.setItem("mamas_fuertes_lang", lang);

  // Actualizar todos los elementos con atributo data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[lang][key];
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });

  // Actualizar botones de selector de idioma
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Disparar evento personalizado para otros módulos (cursos, checkout, aula)
  window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
}

/**
 * Obtiene una traducción específica por clave
 * @param {string} key 
 * @returns {string}
 */
function t(key) {
  if (translations[currentLanguage] && translations[currentLanguage][key]) {
    return translations[currentLanguage][key];
  }
  return key;
}

// Inicialización al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLanguage);

  // Event listeners para los botones de idioma
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      setLanguage(selectedLang);
    });
  });
});
