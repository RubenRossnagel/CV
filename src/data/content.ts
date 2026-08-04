export const profile = {
  name: "Rubén Rossnagel",
  role: "Desarrollador Backend",
  location: "Misiones / Corrientes, Argentina",
  headline: "Backend con C# y .NET, listo para sumar a un equipo.",
  summary:
    "Siempre dispuesto a aprender y aportar lo mejor. Busco una oportunidad como desarrollador backend, con base sólida en C#, SQL y sistemas de gestión reales.",
  email: "rubenrossnagel@gmail.com",
  phone: "+54 9 3765 224088",
  whatsapp: "https://web.whatsapp.com/send?phone=+5493765224088",
  whatsappLabel: "+54 9 3765 224088",
  linkedin: "https://www.linkedin.com/in/rubenrossnagel/",
  platzi: "https://platzi.com/p/RubenRossnagel/",
  githubPrimary: "https://github.com/RubenRossnagel",
  githubSecondary: "https://github.com/RossnagelRuben",
} as const

export const skills = {
  languages: ["C#", "SQL", "ASP.NET", "Blazor", ".NET MAUI"],
  data: ["SQL Server", "MySQL", "Access", "Modelado de datos"],
  tools: ["Visual Studio", "Git / GitHub", "Windows Server", "Office"],
  focus: [
    "APIs y backend",
    "Sistemas de gestión",
    "Bases de datos",
    "Soporte técnico aplicado",
  ],
} as const

export const experience = [
  {
    company: "DRR Systemas",
    role: "Soporte, ventas técnicas y capacitación",
    points: [
      "Armado y reparación de PCs, atención y soporte a clientes.",
      "Control de stock e insumos informáticos.",
      "Venta y capacitación de sistemas de gestión comercial.",
    ],
  },
  {
    company: "Estudio Jurídico Dra. Paula García",
    role: "Administración, soporte y agente de cambio",
    points: [
      "Atención al cliente y soporte técnico del estudio.",
      "Administración de expedientes y casos.",
      "Acompañamiento en adopción de herramientas digitales.",
    ],
  },
  {
    company: "Iguazú Libros",
    role: "Administración y ventas",
    points: [
      "Carga de ventas, clientes, productos y actualización de precios.",
      "Atención presencial y no presencial.",
      "Organización administrativa del punto de venta.",
    ],
  },
] as const

export const projects = [
  {
    title: "Visión Google + OpenAI",
    blurb:
      "Reconocimiento de imágenes y extracción de caracteres con Vision API y OpenAI.",
    stack: ["C#", "Vision API", "OpenAI"],
    href: "https://github.com/RubenRossnagel/VISIONGOOGLE",
    image: "./images/project-vision.png",
    accent: "vision" as const,
  },
  {
    title: "Autopartes LEO",
    blurb:
      "Sistema de gestión para casas de repuestos: stock, ventas y operación diaria.",
    stack: ["HTML", "TypeScript", "Gestión"],
    href: "https://github.com/RossnagelRuben/Autopartes_LEO",
    image: "./images/project-gestion.png",
    accent: "gestion" as const,
  },
  {
    title: "PG Estudios Jurídicos",
    blurb:
      "Sistema de gestión para estudios jurídicos: casos, clientes y administración.",
    stack: ["C#", ".NET", "SQL"],
    href: "https://github.com/RossnagelRuben/PG",
    image: "./images/project-gestion.png",
    accent: "legal" as const,
  },
  {
    title: "QR Mesas",
    blurb:
      "Flujo con códigos QR orientado a mesas y experiencia de atención.",
    stack: ["C#", "QR", "WPF"],
    href: "https://github.com/RubenRossnagel/QR_Mesas",
    image: "./images/project-qr.png",
    accent: "qr" as const,
  },
] as const

export const education = [
  {
    title: "Analista en Sistemas",
    place: "CESMI, Eldorado, Misiones",
    detail: "Título obtenido en diciembre 2022",
  },
  {
    title: "Analista en Sistemas (1° y 2° año)",
    place: "I.S.I.P.P, Puerto Piray, Misiones",
    detail: "Formación superior en informática",
  },
  {
    title: "Secundario Humanidades y Ciencias Sociales",
    place: "Colegio Hipólito Yrigoyen, Corrientes",
    detail: "Finalizado en 2016",
  },
] as const

export const courses = [
  "ASP.NET Core",
  "Blazor y .NET Core",
  "Fundamentos de .NET",
  "C# con .NET",
  "SQL y MySQL",
  "Fundamentos de bases de datos",
  "Backend introductorio",
  "Git y GitHub profesional",
  ".NET MAUI",
  "Xamarin multiplataforma",
  "Python básico",
  "POO",
  "Bootstrap",
  "IBM Cloud / Watson",
  "Marketing digital",
  "Redes Mikrotik y Ubiquiti",
] as const

export const nav = [
  { label: "Sobre mí", href: "#sobre" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
] as const
