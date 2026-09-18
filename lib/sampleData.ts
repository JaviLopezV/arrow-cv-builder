import { CvData, ThemePreset } from "./types";

export const themePresets: ThemePreset[] = [
  {
    id: "berry",
    name: "Berry / Magenta",
    primary: "#3b174d",
    secondary: "#c93472",
    text: "#2f2437",
    muted: "#6c5d6f",
    soft: "#f7f1f6",
    border: "#e2cfe0",
    line: "#eaddea",
  },
  {
    id: "blue",
    name: "Navy / Blue",
    primary: "#123456",
    secondary: "#1976d2",
    text: "#243447",
    muted: "#607080",
    soft: "#eef5ff",
    border: "#c9ddf6",
    line: "#dbe7f5",
  },
  {
    id: "green",
    name: "Forest / Mint",
    primary: "#143d2b",
    secondary: "#2e7d32",
    text: "#26352d",
    muted: "#66756d",
    soft: "#eff8f1",
    border: "#cfe8d3",
    line: "#dcece0",
  },
  {
    id: "mono",
    name: "Minimal Black",
    primary: "#1f1f1f",
    secondary: "#555555",
    text: "#222222",
    muted: "#666666",
    soft: "#f5f5f5",
    border: "#dddddd",
    line: "#e6e6e6",
  },
];

export const labels = {
  es: {
    appTitle: "Constructor de CV",
    editor: "Editor",
    preview: "Vista previa",
    download: "Descargar / imprimir PDF",
    language: "Idioma de salida",
    style: "Colores / estilo",
    pages: "Páginas",
    addPage: "Añadir página",
    addSection: "Añadir sección personalizada",
    resetSample: "Cargar ejemplo",
    helper:
      "Los datos se guardan en localStorage. Para descargar, usa el botón de impresión y elige “Guardar como PDF”.",
  },
  en: {
    appTitle: "CV Builder",
    editor: "Editor",
    preview: "Preview",
    download: "Download / print PDF",
    language: "Output language",
    style: "Colors / style",
    pages: "Pages",
    addPage: "Add page",
    addSection: "Add custom section",
    resetSample: "Load sample",
    helper:
      "Data is saved in localStorage. To download, use the print button and choose “Save as PDF”.",
  },
  ca: {
    appTitle: "Creador de CV",
    editor: "Editor",
    preview: "Vista prèvia",
    download: "Descarrega / imprimeix el PDF",
    language: "Idioma de sortida",
    style: "Colors / estil",
    pages: "Pàgines",
    addPage: "Afegeix una pàgina",
    addSection: "Afegeix una secció personalitzada",
    resetSample: "Carrega l'exemple",
    helper:
      "Les dades es desen a localStorage. Per descarregar el PDF, fes servir el botó d'impressió i tria «Desa com a PDF».",
  },
};

export const sampleEs: CvData = {
  language: "es",
  pageCount: 1,
  templateId: "sidebar",
  themeId: "berry",
  personal: {
    name: "Alex Rivera",
    role: "Frontend Engineer / UI Specialist",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Clean Architecture",
      "Design Systems",
    ],
    photo: "",
    showPhoto: false,
    email: "alex.rivera@example.com",
    phone: "+34 600 123 456",
    github: "github.com/alexrivera-demo",
    linkedin: "linkedin.com/in/alex-rivera-demo",
  },
  sections: [
    {
      id: "stack",
      kind: "chips",
      title: "Stack principal",
      column: "sidebar",
      page: 1,
      enabled: true,
      chipGroups: [
        {
          label: "Frontend",
          chips: [
            "React",
            "Next.js / SSR",
            "TypeScript",
            "JavaScript",
            "Material UI",
            "Storybook",
          ],
        },
        {
          label: "Estado & APIs",
          chips: ["Redux", "Zustand", "Context API", "REST APIs"],
        },
        {
          label: "Backend & datos",
          chips: ["Node.js", "Express", "Prisma", "PostgreSQL"],
        },
        {
          label: "Testing & calidad",
          chips: ["Jest", "Testing Library", "Code review", "Debugging"],
        },
        {
          label: "Tools & delivery",
          chips: [
            "Git",
            "Docker",
            "CI/CD",
            "Storybook",
            "Vercel",
            "Jira",
            "Agile / Scrum",
          ],
        },
      ],
    },
    {
      id: "strengths",
      kind: "strengths",
      title: "Puntos fuertes",
      column: "sidebar",
      page: 1,
      enabled: true,
      cards: [
        {
          title: "Arquitectura frontend",
          text: "Estructuras escalables, componentes reutilizables y patrones mantenibles.",
        },
        {
          title: "Liderazgo & mentoring",
          text: "Coordinación de equipo, alineamiento técnico, planificación y soporte en la entrega.",
        },
        {
          title: "Mentalidad de calidad",
          text: "Testing, code review, debugging y decisiones pragmáticas para reducir regresiones.",
        },
        {
          title: "Orientación a producto",
          text: "Capacidad para definir flujos, validar comportamientos y resolver necesidades de usuario.",
        },
      ],
    },
    {
      id: "education",
      kind: "education",
      title: "Formación",
      column: "sidebar",
      page: 1,
      enabled: true,
      cards: [
        {
          title: "Grado en Ingeniería del Software",
          text: "Universidad Metropolitana · 2016 - 2020",
        },
        {
          title: "Desarrollo de Aplicaciones Web",
          text: "Centro Tecnológico del Mediterráneo · Finalizado",
        },
        {
          title: "Especialización en Diseño de Interfaces",
          text: "Escuela Digital Abierta · Finalizado",
        },
      ],
    },
    {
      id: "languages",
      kind: "languages",
      title: "Idiomas",
      column: "sidebar",
      page: 1,
      enabled: true,
      body: [
        "Español · Nativo",
        "Inglés · Profesional",
        "Francés · Intermedio",
      ],
    },
    {
      id: "profile",
      kind: "profile",
      title: "Perfil",
      column: "main",
      page: 1,
      enabled: true,
      body: [
        "Frontend Engineer con experiencia creando productos web accesibles y escalables con React, Next.js y TypeScript. Combino desarrollo de interfaces, diseño de componentes, calidad de código y colaboración con equipos de producto.",
        "Me especializo en convertir necesidades de negocio en experiencias claras, mantenibles y coherentes, trabajando de cerca con diseño, backend y otras áreas.",
      ],
    },
    {
      id: "experience",
      kind: "experience",
      title: "Experiencia",
      column: "main",
      page: 1,
      enabled: true,
      items: [
        {
          title: "Northstar Digital",
          subtitle: "Frontend Engineer",
          date: "Mar 2023 - Actualidad\nMadrid, España",
          description:
            "Desarrollo productos digitales para clientes internacionales, participando en arquitectura frontend, planificación y mejora continua de la experiencia de usuario.",
          bullets: [
            "Desarrollo aplicaciones React y TypeScript con Material UI, REST APIs y patrones reutilizables con foco en mantenibilidad.",
            "Colaboro en la evolución del sistema de diseño, revisiones de código y definición de estándares técnicos.",
            "Colaboro con backend y stakeholders para convertir requisitos en experiencias de usuario fiables y entregables.",
          ],
        },
        {
          title: "Pixel Harbor Studio",
          subtitle: "Full Stack Developer",
          date: "Ene 2021 - Feb 2023\nRemoto",
          description:
            "Participé en la creación de una plataforma SaaS para pequeños comercios, desarrollando funcionalidades de extremo a extremo y mejorando sus flujos operativos.",
          bullets: [
            "Implementé funcionalidades fullstack con Node.js, React, JavaScript, HTML, CSS y REST APIs.",
            "Participé en sesiones de requisitos, diseño y validación para refinar funcionalidades con el equipo de producto.",
            "Automaticé procesos internos y contribuí a reducir el tiempo necesario para publicar nuevas versiones.",
          ],
        },
        {
          title: "Bright Apps Lab",
          subtitle: "Junior Web Developer",
          date: "Jul 2020 - Dic 2020\nValencia, España",
          description:
            "Desarrollo y soporte de aplicaciones web internas, trabajando en mejoras de interfaz, incidencias y análisis funcional.",
          bullets: [
            "Analicé errores de aplicación, lógica de negocio, consultas SQL y datos para identificar causas raíz y proponer soluciones.",
            "Reforcé una base sólida en debugging, soporte aplicativo, comunicación con usuarios y resolución estructurada de problemas.",
          ],
        },
      ],
    },
    {
      id: "projects",
      kind: "projects",
      title: "Proyectos seleccionados",
      column: "main",
      page: 1,
      enabled: true,
      cards: [
        {
          title: "Aurora UI Kit",
          text: "Librería ficticia de componentes accesibles para React: layouts, formularios, tarjetas, alertas y tablas de datos.",
        },
        {
          title: "Book Nook",
          text: "Aplicación ficticia de recomendaciones de lectura con autenticación y listas personalizadas.",
        },
        {
          title: "Local Market",
          text: "Marketplace de demostración desarrollado con Next.js, centrado en comercio local y navegación accesible.",
        },
        {
          title: "Next CV Builder",
          text: "Aplicación para crear CV desarrollada con Next.js, TypeScript y Material UI, que permite crear, editar y previsualizar currículums profesionales mediante un flujo de edición limpio e intuitivo.",
        },
      ],
    },
  ],
};

export const sampleEn: CvData = {
  ...sampleEs,
  language: "en",
  personal: { ...sampleEs.personal },
  sections: [
    {
      ...sampleEs.sections[0],
      title: "Core stack",
      chipGroups: [
        {
          label: "Frontend",
          chips: [
            "React",
            "Next.js / SSR",
            "TypeScript",
            "JavaScript",
            "Material UI",
            "Storybook",
          ],
        },
        {
          label: "State & APIs",
          chips: ["Redux", "Zustand", "Context API", "REST APIs"],
        },
        {
          label: "Backend & data",
          chips: ["Node.js", "Express", "Prisma", "PostgreSQL"],
        },
        {
          label: "Testing & quality",
          chips: ["Jest", "Testing Library", "Code review", "Debugging"],
        },
        {
          label: "Tools & delivery",
          chips: [
            "Git",
            "Docker",
            "CI/CD",
            "Storybook",
            "Vercel",
            "Jira",
            "Agile / Scrum",
          ],
        },
      ],
    },
    {
      ...sampleEs.sections[1],
      title: "What I offer",
      cards: [
        {
          title: "Frontend architecture",
          text: "Scalable structures, reusable UI systems and maintainable patterns.",
        },
        {
          title: "Leadership & mentoring",
          text: "Team coordination, technical alignment, delivery planning and support.",
        },
        {
          title: "Quality mindset",
          text: "Testing, code review, debugging and pragmatic decisions to reduce regressions.",
        },
        {
          title: "Product focus",
          text: "Ability to define flows, validate behaviours and solve user needs.",
        },
      ],
    },
    {
      ...sampleEs.sections[2],
      title: "Education",
      cards: [
        {
          title: "Software Engineering Degree",
          text: "Metropolitan University · 2016 - 2020",
        },
        {
          title: "Web Application Development",
          text: "Mediterranean Technology Centre · Completed",
        },
        {
          title: "User Interface Design Specialisation",
          text: "Open Digital School · Completed",
        },
      ],
    },
    {
      ...sampleEs.sections[3],
      title: "Languages",
      body: [
        "Spanish · Native",
        "English · Professional",
        "French · Intermediate",
      ],
    },
    {
      ...sampleEs.sections[4],
      title: "Profile",
      body: [
        "Frontend Engineer experienced in building accessible and scalable web products with React, Next.js and TypeScript. I combine interface development, component design, code quality and close product collaboration.",
        "I specialise in turning business needs into clear, maintainable experiences while working closely with design, backend and other teams.",
      ],
    },
    {
      ...sampleEs.sections[5],
      title: "Experience",
      items: [
        {
          title: "Northstar Digital",
          subtitle: "Frontend Engineer",
          date: "Mar 2023 - Present\nMadrid, Spain",
          description:
            "Build digital products for international clients, contributing to frontend architecture, planning and continuous improvement of the user experience.",
          bullets: [
            "Build React and TypeScript applications with Material UI, REST APIs and reusable patterns with a maintainability focus.",
            "Contribute to the design system, code reviews and the definition of shared technical standards.",
            "Partner with backend teams and stakeholders to translate product requirements into reliable user experiences.",
          ],
        },
        {
          title: "Pixel Harbor Studio",
          subtitle: "Full Stack Developer",
          date: "Jan 2021 - Feb 2023\nRemote",
          description:
            "Helped create a SaaS platform for small retailers, delivering end-to-end features and improving operational workflows.",
          bullets: [
            "Delivered full-stack features with Node.js, React, JavaScript, HTML, CSS and REST APIs.",
            "Joined requirement, design and validation sessions to refine features with the product team.",
            "Automated internal processes and helped shorten the release cycle for new versions.",
          ],
        },
        {
          title: "Bright Apps Lab",
          subtitle: "Junior Web Developer",
          date: "Jul 2020 - Dec 2020\nValencia, Spain",
          description:
            "Developed and supported internal web applications, working on interface improvements, incidents and functional analysis.",
          bullets: [
            "Analysed application errors, business logic, SQL queries and data to identify root causes and propose solutions.",
            "Built a strong foundation in debugging, application support, user communication and structured problem resolution.",
          ],
        },
      ],
    },
    {
      ...sampleEs.sections[6],
      title: "Selected personal projects",
      cards: [
        {
          title: "Aurora UI Kit",
          text: "Fictional accessible component library for React projects: layouts, form fields, cards, alerts and data tables.",
        },
        {
          title: "Book Nook",
          text: "Fictional reading recommendation app with authentication and personalised lists.",
        },
        {
          title: "Local Market",
          text: "Demo marketplace built with Next.js, focused on local commerce and accessible navigation.",
        },
        {
          title: "Next CV Builder",
          text: "CV builder app built with Next.js, TypeScript and Material UI to create, edit and preview professional resumés in a clean editor workflow.",
        },
      ],
    },
  ],
};

export const sampleCa: CvData = {
  ...sampleEs,
  language: "ca",
  personal: {
    ...sampleEs.personal,
    role: "Enginyer frontend / Especialista en interfícies",
  },
  sections: [
    {
      ...sampleEs.sections[0],
      title: "Tecnologies principals",
      chipGroups: [
        { ...sampleEs.sections[0].chipGroups![0] },
        {
          label: "Estat i API",
          chips: ["Redux", "Zustand", "Context API", "REST APIs"],
        },
        {
          label: "Backend i dades",
          chips: ["Node.js", "Express", "Prisma", "PostgreSQL"],
        },
        {
          label: "Proves i qualitat",
          chips: ["Jest", "Testing Library", "Revisió de codi", "Depuració"],
        },
        {
          label: "Eines i lliurament",
          chips: [
            "Git",
            "Docker",
            "CI/CD",
            "Storybook",
            "Vercel",
            "Jira",
            "Agile / Scrum",
          ],
        },
      ],
    },
    {
      ...sampleEs.sections[1],
      title: "Punts forts",
      cards: [
        {
          title: "Arquitectura frontend",
          text: "Estructures escalables, components reutilitzables i patrons fàcils de mantenir.",
        },
        {
          title: "Lideratge i mentoria",
          text: "Coordinació d'equips, alineament tècnic, planificació i suport en els lliuraments.",
        },
        {
          title: "Compromís amb la qualitat",
          text: "Proves, revisions de codi, depuració i decisions pragmàtiques per reduir regressions.",
        },
        {
          title: "Orientació al producte",
          text: "Capacitat per definir fluxos, validar comportaments i resoldre necessitats de les persones usuàries.",
        },
      ],
    },
    {
      ...sampleEs.sections[2],
      title: "Formació",
      cards: [
        {
          title: "Grau en Enginyeria del Programari",
          text: "Universitat Metropolitana · 2016 - 2020",
        },
        {
          title: "Desenvolupament d'Aplicacions Web",
          text: "Centre Tecnològic del Mediterrani · Finalitzat",
        },
        {
          title: "Especialització en Disseny d'Interfícies",
          text: "Escola Digital Oberta · Finalitzat",
        },
      ],
    },
    {
      ...sampleEs.sections[3],
      title: "Idiomes",
      body: ["Català · Nadiu", "Castellà · Nadiu", "Anglès · Professional"],
    },
    {
      ...sampleEs.sections[4],
      title: "Perfil",
      body: [
        "Enginyer frontend amb experiència en la creació de productes web accessibles i escalables amb React, Next.js i TypeScript. Combino desenvolupament d'interfícies, disseny de components, qualitat del codi i col·laboració amb equips de producte.",
        "M'especialitzo a convertir les necessitats de negoci en experiències clares, fàcils de mantenir i coherents, treballant estretament amb disseny, backend i altres àrees.",
      ],
    },
    {
      ...sampleEs.sections[5],
      title: "Experiència",
      items: [
        {
          title: "Northstar Digital",
          subtitle: "Enginyer frontend",
          date: "Març 2023 - Actualitat\nMadrid, Espanya",
          description:
            "Desenvolupo productes digitals per a clients internacionals i participo en l'arquitectura frontend, la planificació i la millora contínua de l'experiència d'usuari.",
          bullets: [
            "Desenvolupo aplicacions amb React i TypeScript, Material UI, REST APIs i patrons reutilitzables, amb atenció a la mantenibilitat.",
            "Col·laboro en l'evolució del sistema de disseny, les revisions de codi i la definició d'estàndards tècnics.",
            "Treballo amb backend i les parts interessades per convertir requisits en experiències d'usuari fiables.",
          ],
        },
        {
          title: "Pixel Harbor Studio",
          subtitle: "Desenvolupador full stack",
          date: "Gen. 2021 - Feb. 2023\nRemot",
          description:
            "Vaig participar en la creació d'una plataforma SaaS per a petits comerços, desenvolupant funcionalitats completes i millorant-ne els processos operatius.",
          bullets: [
            "Vaig implementar funcionalitats full stack amb Node.js, React, JavaScript, HTML, CSS i REST APIs.",
            "Vaig participar en sessions de requisits, disseny i validació per perfeccionar les funcionalitats amb l'equip de producte.",
            "Vaig automatitzar processos interns i vaig contribuir a reduir el temps de publicació de noves versions.",
          ],
        },
        {
          title: "Bright Apps Lab",
          subtitle: "Desenvolupador web júnior",
          date: "Jul. 2020 - Des. 2020\nValència, Espanya",
          description:
            "Desenvolupament i suport d'aplicacions web internes, amb tasques de millora d'interfícies, gestió d'incidències i anàlisi funcional.",
          bullets: [
            "Vaig analitzar errors de l'aplicació, lògica de negoci, consultes SQL i dades per identificar causes i proposar solucions.",
            "Vaig consolidar coneixements de depuració, suport d'aplicacions, comunicació amb usuaris i resolució estructurada de problemes.",
          ],
        },
      ],
    },
    {
      ...sampleEs.sections[6],
      title: "Projectes seleccionats",
      cards: [
        {
          title: "Aurora UI Kit",
          text: "Biblioteca fictícia de components accessibles per a projectes React: estructures, formularis, targetes, avisos i taules de dades.",
        },
        {
          title: "Book Nook",
          text: "Aplicació fictícia de recomanacions de lectura amb autenticació i llistes personalitzades.",
        },
        {
          title: "Local Market",
          text: "Mercat de demostració desenvolupat amb Next.js, centrat en el comerç local i la navegació accessible.",
        },
        {
          title: "Next CV Builder",
          text: "Aplicació de creació de CV desenvolupada amb Next.js, TypeScript i Material UI per crear, editar i previsualitzar currículums professionals.",
        },
      ],
    },
  ],
};
