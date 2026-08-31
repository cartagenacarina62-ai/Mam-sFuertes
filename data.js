/**
 * Base de Datos de Cursos, Módulos, Lecciones, Testimonios, FAQs y Base de Conocimiento
 * Plataforma "Mamás Fuertes" - Precios en rango de $15 a $25 USD
 */

const coursesData = [
  // 1. EMBARAZO
  {
    id: "curso-embarazo-parto",
    category: "pregnancy",
    title_es: "Embarazo Activo & Preparación Integral al Parto",
    title_en: "Active Pregnancy & Comprehensive Birth Prep",
    subtitle_es: "Entrenamientos seguros por trimestre, movilidad pélvica, respiración para el trabajo de parto y prevención de molestias lumbares.",
    subtitle_en: "Safe trimester-by-trimester workouts, pelvic mobility, labor breathing techniques, and back pain prevention.",
    price: 22,
    originalPrice: 45,
    rating: 4.9,
    reviewsCount: 284,
    level_es: "Todos los trimestres",
    level_en: "All trimesters",
    duration: "5.0",
    lessonsCount: 20,
    instructor_es: "Dra. Sofía Valenzuela & Matrona Elena Puig",
    instructor_en: "Dr. Sofia Valenzuela & Midwife Elena Puig",
    image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=80",
    badge_es: "Embarazo & Parto",
    badge_en: "Pregnancy & Birth",
    modules: [
      {
        title_es: "Módulo 1: Movilidad Pélvica y Alivio Lumbar por Trimestre",
        title_en: "Module 1: Pelvic Mobility & Back Relief by Trimester",
        lessons: [
          {
            id: "emb-1-1",
            title_es: "Biomecánica de la pelvis: Creando espacio para tu bebé",
            title_en: "Pelvic biomechanics: Creating space for baby",
            duration: "14:20",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary_es: "Ejercicios con fitball para liberar tensión en sacro, coxis y ligamentos uterinos.",
            summary_en: "Fitball exercises to release tension in sacrum, tailbone, and uterine ligaments."
          },
          {
            id: "emb-1-2",
            title_es: "Rutina de fuerza prenatal sin impacto (Brazos, piernas y glúteos)",
            title_en: "Low-impact prenatal strength routine (Arms, legs & glutes)",
            duration: "18:30",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            summary_es: "Fortalece el tren inferior para soportar el peso del embarazo y agilizar el parto.",
            summary_en: "Build lower body endurance to support pregnancy weight and ease delivery."
          }
        ]
      },
      {
        title_es: "Módulo 2: Respiración, Pujo y Preparación al Parto",
        title_en: "Module 2: Breathing, Pushing & Labor Preparation",
        lessons: [
          {
            id: "emb-2-1",
            title_es: "Técnicas de respiración y manejo del dolor en contracciones",
            title_en: "Breathing techniques and contraction pain management",
            duration: "16:45",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            summary_es: "Aprende a fluir con las ondas de las contracciones sin entrar en pánico.",
            summary_en: "Learn how to ride contraction waves calmly without panic."
          }
        ]
      }
    ]
  },

  // 2. MADRES PRIMERIZAS A LOS 30-35 AÑOS
  {
    id: "curso-primerizas-30-35",
    category: "postpartum",
    title_es: "Maternidad Primeriza a los 30-35: Cuidados, Psicología y Bienestar",
    title_en: "First-Time Motherhood in Your 30s-35s: Care, Mindset & Vitality",
    subtitle_es: "Guía especializada para mujeres que son madres por primera vez entre los 30 y 35 años: recuperación física celular, balance entre carrera y bebé, gestión de la culpa y prevención del agotamiento.",
    subtitle_en: "Specialized guide for first-time mothers aged 30-35: physical cellular recovery, balancing career and newborn, overcoming mom guilt, and preventing burnout.",
    price: 24,
    originalPrice: 49,
    rating: 5.0,
    reviewsCount: 312,
    level_es: "Madres de 30 a 35 años",
    level_en: "Mothers aged 30 to 35",
    duration: "5.2",
    lessonsCount: 20,
    instructor_es: "Dra. Sofía Valenzuela & Dra. Camila Rossi (Ginecóloga & Psicóloga)",
    instructor_en: "Dr. Sofia Valenzuela & Dr. Camila Rossi (OBGYN & Psychologist)",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    badge_es: "✨ Primerizas (30-35 años)",
    badge_en: "✨ First-Time Moms (30-35)",
    modules: [
      {
        title_es: "Módulo 1: Tu Cuerpo después de los 30: Recuperación Física y Hormonal",
        title_en: "Module 1: Your Body After 30: Physical & Hormonal Recovery",
        lessons: [
          {
            id: "prim-1-1",
            title_es: "Fisiología del posparto a los 30+: Metabolismo, elasticidad y suelo pélvico",
            title_en: "Postpartum physiology after 30: Metabolism, collagen & pelvic floor",
            duration: "18:15",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary_es: "Por qué los tiempos de recuperación cambian a los 30 y cómo optimizar la regeneración de tejidos y faja abdominal.",
            summary_en: "Why recovery timelines differ in your 30s and how to optimize tissue and core regeneration."
          },
          {
            id: "prim-1-2",
            title_es: "Salud hormonal y micronutrición: Tiroides, hierro, vitamina D y descanso reparador",
            title_en: "Hormonal health & micronutrients: Thyroid, iron, Vitamin D and restorative sleep",
            duration: "16:40",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            summary_es: "Estrategias nutricionales para evitar el bajón hormonal posparto y mantener energía real sin recurrir a exceso de cafeína.",
            summary_en: "Nutritional protocols to stabilize postpartum hormones and sustain steady energy."
          }
        ]
      },
      {
        title_es: "Módulo 2: Mente, Identidad y Carrera: Sobrellevar el Cambio sin Culpa",
        title_en: "Module 2: Mindset, Identity & Career: Embracing Change Guilt-Free",
        lessons: [
          {
            id: "prim-2-1",
            title_es: "De la independencia profesional a la maternidad: La redefinición del 'Yo'",
            title_en: "From professional autonomy to motherhood: Redefining your self-identity",
            duration: "20:30",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            summary_es: "Cómo gestionar el shock de pasar de tener control total de tu tiempo a depender de los ritmos del recién nacido.",
            summary_en: "Navigating the identity shift from career autonomy to newborn demands without losing yourself."
          },
          {
            id: "prim-2-2",
            title_es: "Corresponsabilidad con la pareja, límites familiares y autocuidado no negociable",
            title_en: "Equal partnership, family boundaries & non-negotiable self-care",
            duration: "19:50",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            summary_es: "Herramientas de comunicación asertiva para repartir la carga mental y reservar tiempo sagrado para ti.",
            summary_en: "Assertive communication scripts to divide mental load and protect dedicated me-time."
          }
        ]
      }
    ]
  },

  // 3. RECUPERACIÓN POSPARTO
  {
    id: "curso-posparto-core",
    category: "postpartum",
    title_es: "Recuperación Posparto & Cierre de Diástasis",
    title_en: "Postpartum Recovery & Diastasis Healing",
    subtitle_es: "Rehabilita tu faja abdominal, alivia molestias lumbares y recupera la firmeza de tu abdomen de forma segura y guiada.",
    subtitle_en: "Rehabilitate your core, soothe lower back pain, and safely regain abdominal firmness step-by-step.",
    price: 23,
    originalPrice: 47,
    rating: 4.9,
    reviewsCount: 342,
    level_es: "Principiante / Posparto",
    level_en: "Beginner / Postpartum",
    duration: "4.5",
    lessonsCount: 18,
    instructor_es: "Dra. Sofía Valenzuela (Fisioterapeuta)",
    instructor_en: "Dr. Sofia Valenzuela (Physiotherapist)",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    badge_es: "Bestseller Posparto",
    badge_en: "Postpartum Bestseller",
    modules: [
      {
        title_es: "Módulo 1: Conexión y Respiración Diafragmática",
        title_en: "Module 1: Connection & Diaphragmatic Breathing",
        lessons: [
          {
            id: "l1-1",
            title_es: "Bienvenida y Evaluación inicial de tu Diástasis",
            title_en: "Welcome & Initial Diastasis Self-Check",
            duration: "12:30",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary_es: "Aprende cómo medir la separación de tus rectos abdominales y evaluar la tensión de la línea alba.",
            summary_en: "Learn how to assess abdominal separation and midline tension safely."
          },
          {
            id: "l1-2",
            title_es: "La respiración costodiafragmática: la llave del core",
            title_en: "Costodiaphragmatic breathing: key to the core",
            duration: "15:45",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            summary_es: "Técnica fundamental para descomprimir el suelo pélvico y activar el transverso profundo.",
            summary_en: "Fundamental technique to decompress the pelvic floor and activate the deep transverse abdominis."
          }
        ]
      }
    ]
  },

  // 4. BEBÉS (0 A 12 MESES)
  {
    id: "curso-primer-ano-bebe",
    category: "babies",
    title_es: "El Primer Año del Bebé: Sueño, Lactancia y Estimulación",
    title_en: "Baby's First Year: Sleep, Feeding & Early Development",
    subtitle_es: "Guía integral de 0 a 12 meses: ritmos de sueño respetuoso, lactancia sin dolor, hitos motores de volteo/gateo y apego seguro.",
    subtitle_en: "Comprehensive 0-12 month guide: gentle sleep routines, feeding with confidence, rolling/crawling milestones, and secure bonding.",
    price: 21,
    originalPrice: 42,
    rating: 5.0,
    reviewsCount: 198,
    level_es: "0 a 12 meses",
    level_en: "0 to 12 months",
    duration: "4.8",
    lessonsCount: 18,
    instructor_es: "Lic. Andrea Serrano (Pediatra & Asesora de Lactancia)",
    instructor_en: "Dr. Andrea Serrano (Pediatrician & IBCLC)",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
    badge_es: "Etapa 0 a 12 Meses",
    badge_en: "Stage 0 to 12 Months",
    modules: [
      {
        title_es: "Módulo 1: Sueño Infantil Respetuoso y Ventanas de Despertar",
        title_en: "Module 1: Gentle Infant Sleep & Wake Windows",
        lessons: [
          {
            id: "beb-1-1",
            title_es: "El ritmo circadiano y cómo estructurar siestas sin lágrimas",
            title_en: "Circadian rhythms and tear-free nap structures",
            duration: "17:15",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary_es: "Reconoce las señales tempranas de sueño antes del llanto o la sobreestimulación.",
            summary_en: "Spot early sleepy cues before tears and overtiredness take over."
          }
        ]
      }
    ]
  },

  // 5. ALIMENTACIÓN INFANTIL SEGÚN LA EDAD (BLW A ADOLESCENCIA)
  {
    id: "curso-alimentacion-edades",
    category: "nutrition",
    title_es: "Alimentación Infantil por Edades: Del BLW a la Adolescencia",
    title_en: "Childhood Nutrition by Age: From Baby-Led Weaning to Teens",
    subtitle_es: "Cómo alimentar a tus hijos según su etapa: inicio seguro de sólidos (BLW/triturados), niños selectivos que no comen verduras, loncheras escolares y prevención de TCAs en adolescentes.",
    subtitle_en: "How to nourish your children at every age: safe solid introduction (BLW), picky eaters, balanced school lunches, and fostering a healthy food relationship in teens.",
    price: 25,
    originalPrice: 50,
    rating: 5.0,
    reviewsCount: 231,
    level_es: "De 6 meses a 18 años",
    level_en: "6 months to 18 years",
    duration: "5.5",
    lessonsCount: 22,
    instructor_es: "Lic. Mariana Ramos (Nutrióloga Pediátrica) & Dra. Andrea Serrano",
    instructor_en: "Mariana Ramos, RD & Dr. Andrea Serrano",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    badge_es: "⭐ Imprescindible Familiar",
    badge_en: "⭐ Family Essential",
    modules: [
      {
        title_es: "Módulo 1: Alimentación Complementaria (6 a 12 meses) - BLW Seguro",
        title_en: "Module 1: Complementary Feeding (6-12m) - Safe BLW",
        lessons: [
          {
            id: "ali-1-1",
            title_es: "Señales de preparación, cortes seguros y prevención de atragantamiento",
            title_en: "Readiness signs, safe cuts, and choking vs gagging",
            duration: "18:40",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary_es: "Diferencia entre arcada y atragantamiento real, texturas seguras y primeros alimentos ricos en hierro.",
            summary_en: "Difference between gagging and real choking, safe food shapes and iron-rich first foods."
          }
        ]
      }
    ]
  },

  // 6. HIJOS HIPERACTIVOS / TDAH / ALTA ENERGÍA
  {
    id: "curso-hijo-hiperactivo",
    category: "childhood",
    title_es: "Comprendiendo y Acompañando a tu Hijo Hiperactivo (TDAH & Alta Energía)",
    title_en: "Understanding & Empowering Your Hyperactive Child (ADHD & High Energy)",
    subtitle_es: "Estrategias neuropsicológicas y de crianza respetuosa para canalizar la energía desbordante, mejorar la concentración, estructurar rutinas visuales y fortalecer su autoestima.",
    subtitle_en: "Neuropsychological and positive parenting strategies to channel high energy, enhance focus, build visual routines, and protect self-esteem.",
    price: 25,
    originalPrice: 50,
    rating: 5.0,
    reviewsCount: 265,
    level_es: "Familias con niños y adolescentes",
    level_en: "Families with kids & teens",
    duration: "5.0",
    lessonsCount: 19,
    instructor_es: "Mtra. Claudia Narváez (Neuropsicóloga) & Dr. Roberto Morales",
    instructor_en: "Claudia Narvaez (Neuropsychologist) & Dr. Roberto Morales",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    badge_es: "🧠 Neurodiversidad & TDAH",
    badge_en: "🧠 Neurodiversity & ADHD",
    modules: [
      {
        title_es: "Módulo 1: El Cerebro Hiperactivo y la Búsqueda de Dopamina",
        title_en: "Module 1: The Hyperactive Brain & Dopamine Seeking",
        lessons: [
          {
            id: "hip-1-1",
            title_es: "¿Por qué no puede parar quieto? Fisiología del movimiento en el TDAH",
            title_en: "Why can't they sit still? Movement physiology in ADHD",
            duration: "19:15",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary_es: "El movimiento es la forma en que su cerebro se mantiene despierto y enfocado. Aprende a no reprimirlo, sino canalizarlo.",
            summary_en: "Movement is how their brain maintains alertness. Learn to guide movement rather than suppress it."
          }
        ]
      }
    ]
  },

  // 7. PRIMERA INFANCIA / TODDLERS (1 A 3 AÑOS)
  {
    id: "curso-primera-infancia",
    category: "childhood",
    title_es: "Primera Infancia (1-3 Años): Rabietas, Límites y Crianza Respetuosa",
    title_en: "Toddlers (1-3 Yrs): Tantrums, Boundaries & Positive Parenting",
    subtitle_es: "Entiende el cerebro infantil, aprende a gestionar desbordes emocionales con calma firme y acompaña la retirada del pañal y el lenguaje.",
    subtitle_en: "Understand the toddler brain, handle big emotions with calm firmness, and guide potty training and speech development.",
    price: 19,
    originalPrice: 39,
    rating: 4.9,
    reviewsCount: 176,
    level_es: "1 a 3 años",
    level_en: "1 to 3 years",
    duration: "4.0",
    lessonsCount: 16,
    instructor_es: "Mtra. Claudia Narváez (Psicóloga Infantil)",
    instructor_en: "Claudia Narvaez, MSc (Child Psychologist)",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    badge_es: "Etapa 1 a 3 Años",
    badge_en: "Stage 1 to 3 Years",
    modules: [
      {
        title_es: "Módulo 1: Anatomía de la Rabieta y Regulación Emocional",
        title_en: "Module 1: Anatomy of Tantrums & Co-Regulation",
        lessons: [
          {
            id: "tod-1-1",
            title_es: "¿Por qué explotan? El cerebro inmaduro y la corregulación",
            title_en: "Why do they explode? The immature brain & co-regulation",
            duration: "18:10",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary_es: "Por qué razonar durante una rabieta no funciona y qué hacer físicamente para conectar antes de corregir.",
            summary_en: "Why reasoning during a meltdown fails and how to connect before correcting."
          }
        ]
      }
    ]
  },

  // 8. EDAD ESCOLAR (4 A 11 AÑOS)
  {
    id: "curso-edad-escolar",
    category: "childhood",
    title_es: "Edad Escolar (4-11 Años): Inteligencia Emocional, Hábitos y Pantallas",
    title_en: "School Age (4-11 Yrs): Emotional Intelligence & Screen Balance",
    subtitle_es: "Acompaña la autonomía escolar, crea acuerdos claros con la tecnología y celulares, fomenta la autoestima y previene el acoso escolar.",
    subtitle_en: "Foster school independence, establish healthy screen/phone contracts, build unshakeable self-esteem, and prevent bullying.",
    price: 21,
    originalPrice: 42,
    rating: 4.8,
    reviewsCount: 142,
    level_es: "4 a 11 años",
    level_en: "4 to 11 years",
    duration: "4.2",
    lessonsCount: 15,
    instructor_es: "Mtra. Claudia Narváez & Lic. Carlos Méndez",
    instructor_en: "Claudia Narvaez & Carlos Mendez (Educators)",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    badge_es: "Etapa 4 a 11 Años",
    badge_en: "Stage 4 to 11 Years",
    modules: [
      {
        title_es: "Módulo 1: Tecnología, Pantallas y Videojuegos Saludables",
        title_en: "Module 1: Healthy Screens, Phones & Video Games",
        lessons: [
          {
            id: "esc-1-1",
            title_es: "Efecto de las pantallas en la dopamina y atención infantil",
            title_en: "Screen effects on dopamine and childhood attention",
            duration: "16:00",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary_es: "Cómo establecer contratos familiares de pantallas sin caer en guerras diarias.",
            summary_en: "How to set up family tech agreements without daily battles."
          }
        ]
      }
    ]
  },

  // 9. ADOLESCENCIA (12 A 18 AÑOS)
  {
    id: "curso-adolescencia",
    category: "teens",
    title_es: "Conectando con tu Hijo Adolescente (12-18 Años)",
    title_en: "Connecting with Your Teen (12-18 Yrs): Communication & Trust",
    subtitle_es: "Aprende a comunicarte sin juzgar, entender la revolución hormonal y cerebral, pactar límites seguros y acompañar su identidad con amor.",
    subtitle_en: "Learn judgment-free communication, decode teen brain and hormonal changes, set safe boundaries, and build lifelong trust.",
    price: 24,
    originalPrice: 49,
    rating: 5.0,
    reviewsCount: 164,
    level_es: "12 a 18 años",
    level_en: "12 to 18 years",
    duration: "5.2",
    lessonsCount: 18,
    instructor_es: "Dra. Patricia Almonte (Especialista en Adolescencia)",
    instructor_en: "Dr. Patricia Almonte (Adolescent Specialist)",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    badge_es: "Adolescencia (12+)",
    badge_en: "Teens (12+)",
    modules: [
      {
        title_es: "Módulo 1: El Cerebro Adolescente y la Búsqueda de Identidad",
        title_en: "Module 1: The Adolescent Brain & Identity Seeking",
        lessons: [
          {
            id: "adol-1-1",
            title_es: "La poda neuronal y el torbellino hormonal: Por qué se alejan",
            title_en: "Synaptic pruning and hormones: Why teens pull away",
            duration: "19:20",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary_es: "Comprende por qué el distanciamiento es una necesidad evolutiva y cómo no tomártelo personal.",
            summary_en: "Understand why emotional distancing is an evolutionary step and not personal."
          }
        ]
      }
    ]
  },

  // 10. FUERZA EXPRESS MAMÁS
  {
    id: "curso-fuerza-express",
    category: "strength",
    title_es: "Fuerza y Tonificación Express para Mamás Ocupadas (20 min)",
    title_en: "Express Strength & Toning for Busy Moms (20 min)",
    subtitle_es: "Entrenamientos dinámicos de 20 minutos de alta efectividad para quemar grasa, ganar músculo y reactivar tu metabolismo.",
    subtitle_en: "High-efficiency 20-minute dynamic workouts to burn fat, build lean muscle, and boost energy.",
    price: 17,
    originalPrice: 35,
    rating: 4.8,
    reviewsCount: 219,
    level_es: "Todos los niveles",
    level_en: "All levels",
    duration: "3.5",
    lessonsCount: 15,
    instructor_es: "Valeria Mendoza (Head Coach)",
    instructor_en: "Valeria Mendoza (Head Coach)",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    badge_es: "Rutinas Rápidas (20 min)",
    badge_en: "Quick Routines (20 min)",
    modules: [
      {
        title_es: "Módulo 1: Tren Inferior y Glúteos de Acero",
        title_en: "Module 1: Lower Body & Glutes Strength",
        lessons: [
          {
            id: "fx1-1",
            title_es: "Rutina Express: Glúteos y Piernas activas",
            title_en: "Express Routine: Active Glutes & Legs",
            duration: "20:00",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary_es: "Activación profunda con bandas de resistencia y sentadillas adaptadas.",
            summary_en: "Deep activation with resistance bands and adapted squats."
          }
        ]
      }
    ]
  },

  // 11. HIPOPRESIVOS
  {
    id: "curso-hipopresivos",
    category: "strength",
    title_es: "Gimnasia Abdominal Hipopresiva & Suelo Pélvico",
    title_en: "Hypopressive Abdominal Gymnastics & Pelvic Floor",
    subtitle_es: "Reduce el perímetro de cintura, reposiciona órganos internos y elimina incontinencias mediante la técnica del vacío abdominal.",
    subtitle_en: "Reduce waist circumference, reposition internal organs, and prevent leaks with abdominal vacuum techniques.",
    price: 22,
    originalPrice: 45,
    rating: 5.0,
    reviewsCount: 187,
    level_es: "Principiante a Avanzado",
    level_en: "Beginner to Advanced",
    duration: "4.0",
    lessonsCount: 16,
    instructor_es: "Dra. Sofía Valenzuela (Fisioterapeuta)",
    instructor_en: "Dr. Sofia Valenzuela (Physiotherapist)",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
    badge_es: "Técnica Especializada",
    badge_en: "Specialized Technique",
    modules: [
      {
        title_es: "Módulo 1: Fundamentos de la Apnea y el Vacío",
        title_en: "Module 1: Apnea & Vacuum Fundamentals",
        lessons: [
          {
            id: "hip1-1",
            title_es: "Apertura costal paso a paso sin forzar la garganta",
            title_en: "Rib cage expansion step-by-step",
            duration: "14:50",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary_es: "El secreto para lograr la succión refleja de la faja abdominal sin tensar el cuello.",
            summary_en: "The key to achieving the reflex suction of the abdominal wall without neck tension."
          }
        ]
      }
    ]
  }
];

const testimonialsData = [
  {
    name: "Gabriela Montes",
    role_es: "Mamá primeriza a los 32 años (Bebé de 6 meses)",
    role_en: "First-time Mom at 32 (Baby 6 months)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    text_es: "Tener a mi primera hija a los 32 años después de años de carrera profesional fue un shock enorme. Este curso me enseñó a no exigirme la perfección, a cuidar mi tiroides y suelo pélvico, y a repartir la carga mental con mi pareja sin culpas.",
    text_en: "Becoming a first-time mom at 32 after years of career focus was a huge shock. This course taught me self-compassion, physical recovery, and how to share the mental load with my partner seamlessly!"
  },
  {
    name: "Carolina Méndez",
    role_es: "Mamá de Mateo (7 años, con TDAH)",
    role_en: "Mom of Mateo (7 yrs, ADHD)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    text_es: "El curso de 'Comprendiendo a tu Hijo Hiperactivo' cambió nuestra vida en casa. Dejamos de gritarle para que se sentara quieto y aprendimos a usar pausas activas y temporizadores visuales. ¡Su autoestima floreció y las tareas ya no son una guerra!",
    text_en: "The Hyperactive Child course changed our home completely. We stopped yelling at him to sit still and started using sensory breaks and visual timers. His self-esteem skyrocketed!"
  },
  {
    name: "Valeria Castillo",
    role_es: "Mamá de Lucas (8 meses) y Emma (4 años)",
    role_en: "Mom of Lucas (8m) and Emma (4 yrs)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    text_es: "Con el curso de Alimentación Infantil por Edades aprendí a hacer BLW seguro con mi bebé sin miedo al atragantamiento, y logré que mi niña de 4 años volviera a probar verduras con la técnica de la división de responsabilidades. ¡Un 10/10!",
    text_en: "The Child Nutrition course gave me total confidence doing safe BLW with my baby and healed my 4-year-old's veggie refusal without any force feeding!"
  }
];

const faqData = [
  {
    q_es: "¿Por qué un curso específico para madres primerizas entre los 30 y 35 años?",
    q_en: "Why a specific course for first-time mothers in their 30s-35s?",
    a_es: "La maternidad primeriza a los 30-35 años tiene particularidades biológicas y psicológicas únicas: la mujer suele venir de una etapa de independencia profesional consolidada, el metabolismo y la regeneración de tejidos (colágeno, suelo pélvico) requieren cuidados más específicos, y el riesgo de autoexigencia y culpa es mayor. Nuestro curso aborda la recuperación celular, el balance de carrera y el cuidado de la salud mental sin juzgar.",
    a_en: "First-time motherhood at 30-35 has unique biological and lifestyle dynamics: career transitions, specific metabolic and pelvic floor tissue recovery, and high self-expectations. Our course provides tailored hormonal, physical, and psychological strategies."
  },
  {
    q_es: "¿Cómo nos ayuda el curso de alimentación infantil si mi hijo no quiere comer verduras?",
    q_en: "How does the nutrition course help if my child refuses vegetables?",
    a_es: "El curso de 'Alimentación Infantil por Edades' incluye módulos prácticos de Neofobia Alimentaria y Selectividad (1 a 6 años) basados en la 'División de Responsabilidades'. Aprenderás técnicas sensoriales de encadenamiento de sabores, presentaciones lúdicas y pautas para que tu hijo pruebe nuevos alimentos sin obligar, sin lágrimas y sin chantajes.",
    a_en: "Our Child Nutrition course includes practical strategies for picky eating and food neophobia based on the Division of Responsibility, helping children explore veggies without tears or pressure."
  },
  {
    q_es: "¿Qué enfoque tiene el curso para hijos hiperactivos o con sospecha de TDAH?",
    q_en: "What approach does the course for hyperactive children/ADHD take?",
    a_es: "Nuestro curso 'Comprendiendo y Acompañando a tu Hijo Hiperactivo' está diseñado por neuropsicólogos infantiles bajo un enfoque neuroafirmativo y respetuoso. Enseña cómo funciona su cerebro ávido de dopamina, cómo canalizar su energía con descargas propioceptivas, cómo organizar la casa con apoyos visuales y cómo proteger su autoestima frente a las etiquetas negativas.",
    a_en: "Our Hyperactive Child course is led by pediatric neuropsychologists using a neuro-affirming approach. It teaches sensory heavy work, visual timers, and positive reinforcement to build confidence."
  },
  {
    q_es: "¿Cómo accedo a los cursos después de pagar?",
    q_en: "How do I access the courses after paying?",
    a_es: "El acceso es inmediato y automático. En cuanto completas tu pago por Stripe o PayPal, recibes un correo con tus credenciales y eres redirigida al Aula Virtual con todo el contenido y guías PDF desbloqueadas.",
    a_en: "Access is instant and automatic. As soon as payment completes via Stripe or PayPal, you are redirected to your Virtual Classroom with all content and PDF guides unlocked."
  },
  {
    q_es: "¿Tienen garantía de devolución?",
    q_en: "Is there a money-back guarantee?",
    a_es: "Sí, cuentas con 14 días de garantía de satisfacción total sin preguntas. Si el contenido no cumple tus expectativas, te devolvemos el 100% de tu dinero.",
    a_en: "Yes! You have a 14-day 100% money-back guarantee, no questions asked. If you are not completely satisfied, we issue a full refund."
  }
];

// Base de conocimiento para el Chatbot Asistente Virtual ("Alma")
const chatKnowledgeBase = [
  {
    keywords: ["precio", "costo", "precios", "cuanto vale", "cuánto vale", "tarifa", "cuanto cuesta", "cuánto cuesta", "price", "cost"],
    reply_es: "¡Nuestros cursos individuales son muy accesibles y están en un rango especial de **$15 a $25 USD** con acceso ilimitado de por vida y garantía de 14 días! También puedes optar por la **Membresía Ilimitada por solo $15 USD/mes o $89 USD/año** para tener acceso a todos los cursos y comunidad. ¿Te gustaría inscribirte en algún curso en particular?",
    reply_en: "Our individual courses are very affordable, ranging from **$15 to $25 USD** with lifetime access and 14-day money-back guarantee! You can also join our **Unlimited Membership for only $15 USD/mo or $89 USD/yr** to unlock every single course. Would you like to check out any specific course?"
  },
  {
    keywords: ["30 años", "35 años", "primeriza", "primerizas", "treinta", "30 a 35", "primer hijo", "primerizo", "first time mom", "30s"],
    reply_es: "¡Ser madre primeriza entre los 30 y 35 años es una etapa maravillosa pero con retos únicos! 🌸 Hemos creado el curso especializado **'Maternidad Primeriza a los 30-35: Cuidados, Psicología y Bienestar' ($24 USD)**. En él aprenderás sobre recuperación física celular, salud hormonal/tiroides, cómo sobrellevar la transición entre tu carrera profesional y el bebé sin culpa, y cómo pactar la corresponsabilidad con tu pareja. ¿Te gustaría ver el temario?",
    reply_en: "Becoming a first-time mom in your 30s-35s is wonderful but comes with unique career and physical dynamics! 🌸 Check out our course **'First-Time Motherhood in Your 30s-35s: Care, Mindset & Vitality' ($24 USD)**, covering cellular recovery, hormone balancing, career-baby transitions, and sharing the mental load guilt-free. Would you like to view the syllabus?"
  },
  {
    keywords: ["hiperactivo", "hiperactividad", "tdah", "movimiento", "no para quieto", "inquieto", "atencion", "concentracion", "adhd", "hyperactive"],
    reply_es: "¡Comprender a un niño con alta energía o TDAH es un acto de amor transformador! 🧠 En nuestro curso especializado **'Comprendiendo y Acompañando a tu Hijo Hiperactivo (TDAH & Alta Energía)' ($25 USD)**, la Neuropsicóloga Claudia Narváez te enseñará: por qué el movimiento es vital para su cerebro, cómo usar pausas activas, rutinas con temporizadores visuales (Time Timer) y cómo blindar su autoestima frente a las críticas. ¿Te gustaría ver el temario completo?",
    reply_en: "Understanding a high-energy or ADHD child is life-changing! 🧠 In our course **'Understanding & Empowering Your Hyperactive Child (ADHD)' ($25 USD)**, Neuropsychologist Claudia Narvaez teaches how to harness movement, use sensory breaks, build visual timers, and protect your child's self-esteem. Would you like to view the syllabus?"
  },
  {
    keywords: ["alimentacion", "alimentación", "comida", "blw", "no come", "verduras", "nutricion", "nutrición", "recetas", "selectivo", "comer", "bebe comer", "food", "picky"],
    reply_es: "¡La alimentación es clave en el desarrollo! 🥗 Te recomendamos nuestro curso **'Alimentación Infantil por Edades: Del BLW a la Adolescencia' ($25 USD)**. Cubre:\n1. **6-12 meses**: Inicio de sólidos y BLW seguro sin miedo al atragantamiento.\n2. **1-6 años**: Cómo superar el rechazo a las verduras y platos selectivos sin forzar ni pelear.\n3. **7-18 años**: Loncheras nutritivas, crecimiento y prevención de trastornos alimentarios (TCA). ¿Deseas ver más detalles?",
    reply_en: "Nutrition shapes every stage of growth! 🥗 Check out our course **'Childhood Nutrition by Age: From BLW to Teens' ($25 USD)**. It covers safe BLW introduction (6-12m), ending veggie battles without pressure (1-6 yrs), and balanced school lunches/preventing eating disorders in teens."
  },
  {
    keywords: ["embarazo", "embarazada", "parto", "prenatal", "trimestre", "pregnant", "pregnancy"],
    reply_es: "¡Felicidades por tu embarazo! 🌸 Tenemos el curso especializado **'Embarazo Activo & Preparación Integral al Parto' ($22 USD)**, donde aprenderás movilidad pélvica para aliviar molestias de ciática y espalda, y técnicas de respiración y posturas fisiológicas para el parto.",
    reply_en: "Congratulations on your pregnancy! 🌸 We offer our specialized **'Active Pregnancy & Birth Preparation' ($22 USD)** course, featuring pelvic mobility, sciatica relief, and natural breathing techniques for labor."
  },
  {
    keywords: ["bebé", "bebe", "lactancia", "sueño", "0 a 12", "meses", "baby", "infant"],
    reply_es: "Para el primer año de vida, nuestro curso **'El Primer Año del Bebé (0-12 Meses)' ($21 USD)** te guiará en ventanas de sueño sin lágrimas, lactancia sin dolor, prevención de cólicos e hitos de gateo y desarrollo motor.",
    reply_en: "For baby's first year, our **'Baby's First Year (0-12 Months)' ($21 USD)** course guides you through gentle sleep windows, pain-free nursing, and developmental crawling milestones."
  },
  {
    keywords: ["rabieta", "rabietas", "berrinche", "berrinches", "1 a 3", "toddler", "limites", "límites", "pega", "muerde"],
    reply_es: "Las rabietas en niños de 1 a 3 años son una respuesta del cerebro inmaduro. En el curso **'Primera Infancia (1-3 Años): Rabietas, Límites y Crianza Respetuosa' ($19 USD)** aprenderás técnicas de corregulación, cómo poner límites sin gritos y cómo acompañar el control de esfínteres.",
    reply_en: "Toddler tantrums are a natural brain response. In our **'Toddlers (1-3 Yrs): Tantrums & Positive Parenting' ($19 USD)** course, you will master co-regulation, firm loving limits without yelling, and gentle potty training."
  },
  {
    keywords: ["escolar", "pantallas", "celular", "tarea", "tareas", "escuela", "4 a 11", "autoestima", "amigos"],
    reply_es: "Para niños de 4 a 11 años, te recomendamos **'Edad Escolar: Inteligencia Emocional, Hábitos y Pantallas' ($21 USD)**. Aprenderás cómo pactar contratos digitales saludables de tecnología y videojuegos, fomentar su autonomía en tareas y fortalecer su autoestima frente al acoso escolar.",
    reply_en: "For kids aged 4-11, check out **'School Age: Emotional Intelligence, Habits & Screen Balance' ($21 USD)** to establish healthy screen contracts, foster homework independence, and boost self-esteem."
  },
  {
    keywords: ["adolescente", "adolescentes", "adolescencia", "12", "14", "16", "teen", "teens", "rebelde"],
    reply_es: "La adolescencia (12-18 años) es una etapa de grandes cambios. En el curso **'Conectando con tu Hijo Adolescente' ($24 USD)** la Dra. Patricia Almonte te enseña a decodificar los cambios hormonales y cerebrales, comunicarte sin juzgar y establecer límites seguros protegiendo su confianza.",
    reply_en: "Adolescence (12-18 yrs) brings profound changes. In **'Connecting with Your Teen' ($24 USD)**, you'll learn judgment-free communication, decode teen brain shifts, and set protective digital and emotional boundaries."
  },
  {
    keywords: ["cesárea", "c-section", "cesarea", "herida", "cicatriz", "diástasis", "diastasis", "posparto"],
    reply_es: "Para recuperación de parto o cesárea y abdomen abierto, te recomendamos nuestro curso estrella **'Recuperación Posparto & Cierre de Diástasis' ($23 USD)** junto con **'Gimnasia Hipopresiva' ($22 USD)**.",
    reply_en: "For C-section healing or core rehabilitation, our **'Postpartum Recovery & Diastasis Healing' ($23 USD)** and **'Hypopressives' ($22 USD)** courses are specifically designed for safe rehabilitation."
  },
  {
    keywords: ["pago", "pagar", "tarjeta", "paypal", "stripe", "moneda", "pay", "membresía", "membresia"],
    reply_es: "Puedes comprar cursos individuales desde **$15 a $25 USD** con acceso de por vida o unirte a la **Membresía Ilimitada ($15/mes o $89/año)** para acceder a todos los cursos de crianza, alimentación, TDAH y fitness. Aceptamos Stripe y PayPal de forma 100% segura.",
    reply_en: "You can purchase individual courses from **$15 to $25 USD** with lifetime access or join our **Unlimited Membership ($15/mo or $89/yr)** to unlock all courses across all child stages, nutrition, and ADHD support. We accept Stripe and PayPal."
  },
  {
    keywords: ["humano", "asesora", "asesor", "whatsapp", "contacto", "telefono", "hablar", "persona", "coach"],
    reply_es: "¡Por supuesto! Puedes contactar a una de nuestras asesoras y educadoras familiares por WhatsApp pulsando el botón verde o diciendo 'WhatsApp'.",
    reply_en: "Of course! You can chat directly with one of our family educators on WhatsApp by clicking the WhatsApp button."
  }
];
