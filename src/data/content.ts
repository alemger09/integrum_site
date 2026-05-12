export const NAV_LINKS = [
  { href: "#about", label: "What is STEM Racing" },
  { href: "#mission", label: "Mission" },
  { href: "#tutorials", label: "Tutorials" },
  { href: "#team", label: "Our Team" },
  { href: "#competition", label: "Competition" },
] as const;

export const HERO_STATS = [
  { value: "65", suffix: "+", label: "Countries" },
  { value: "20", suffix: "m", label: "Race track" },
  { value: "5", suffix: "", label: "Team members" },
] as const;

export const TICKER_ITEMS = [
  "Design",
  "Engineering",
  "CAD / CAM",
  "Aerodynamics",
  "Physics",
  "Project Management",
  "Marketing",
  "Almaty, Kazakhstan",
  "STEM Racing 2025–26",
  "Formula 1 Endorsed",
] as const;

export const ABOUT_CARDS = [
  {
    icon: "engineering",
    title: "Engineering",
    desc: "CAD design, CNC machining, aerodynamic simulation, and physics-based optimization.",
  },
  {
    icon: "design",
    title: "Design",
    desc: "3D modeling, CFD analysis, technical drawings and compliance with official regulations.",
  },
  {
    icon: "enterprise",
    title: "Enterprise",
    desc: "Sponsorship, branding, marketing strategy, and financial planning — like a real F1 team.",
  },
  {
    icon: "racing",
    title: "Racing",
    desc: "Cars race at up to 80 km/h on a 20m track, judged on speed and reaction time.",
  },
] as const;

export const PILLARS = [
  {
    n: "01",
    title: "Compete",
    desc: "Push our engineering to the absolute limit. Design the fastest, most aerodynamically refined car we can build — and race it to victory on the world stage.",
  },
  {
    n: "02",
    title: "Represent",
    desc: "Carry the Kazakh flag at every competition. Show the world that Almaty produces engineers who think globally and work to international standards.",
  },
  {
    n: "03",
    title: "Inspire",
    desc: "Every student who watches us should leave thinking: \"I could do that.\" We are not just racing — we are building a movement for STEM in Central Asia.",
  },
] as const;

export const TUTORIALS = [
  {
    label: "Video 01",
    title: "How to customise your F1 Car for STEM Racing",
    desc: "Our first CAD tutorial covering practical customization tips to improve design quality and prepare your car for race-ready development.",
    href: "https://youtu.be/83GL5dDakjA",
  },
  {
    label: "Video 02",
    title: "How to create wings for STEM Racing Car",
    desc: "A focused walkthrough on designing front and rear wings for better aerodynamic balance and overall race performance.",
    href: "https://www.youtube.com/watch?v=q_eGRMcxtXc",
  },
] as const;

export const TEAM = [
  {
    name: "Smadiyarov Askar",
    role: "Designer & Engineer",
    image: "/assets/askar.png",
    desc: "Responsible for the team's visual identity and overall style — creating designs, logos, and branding to make everything look professional. Combines design and engineering so the car is not only visually strong but also high-performing.",
    tags: ["design", "branding", "engineering"],
  },
  {
    name: "Sagatov Ansar",
    role: "CADer & Engineer",
    image: "/assets/ansar.png",
    desc: "Focuses on the technical side of the project — working with calculations, designing components, and improving car performance. Handles data and optimization to ensure everything runs as efficiently as possible.",
    tags: ["cad", "calculations", "optimization"],
  },
  {
    name: "Temirbulatov Arman",
    role: "Aerodynamics · Engineer & CADer",
    image: "/assets/arman.png",
    desc: "Designs the car's shape and creates detailed 3D models of its parts. Ensures smooth airflow to reduce drag and increase speed, turning ideas into accurate digital designs that can be built in real life. Goal: a car that is both fast and precisely engineered.",
    tags: ["aerodynamics", "cad", "3d modelling"],
  },
  {
    name: "Baipeissov Alemger",
    role: "Enterprise Manager",
    image: "/assets/alemger.png",
    desc: "Manages the business side of the team — budgeting, sponsorships, and planning to ensure the resources are in place. Promotes the team and communicates with partners, keeping everything organised and supporting the team's success.",
    tags: ["enterprise", "sponsorships", "planning"],
  },
  {
    name: "Yertiskyzy Kamila",
    role: "Engineer",
    image: "/assets/kamila.png",
    desc: "Responsible for the mechanical design and structure of the car — developing parts, ensuring precision, and making sure everything functions properly. Her goal is to build a car that is both reliable and fast.",
    tags: ["mechanical", "precision", "engineering"],
  },
] as const;

export const COMPETITION_STAGES = [
  {
    step: "Stage 01",
    title: "Regional Finals",
    desc: "Teams compete locally against schools in their region. Judged on car speed, engineering portfolio, verbal presentation, and pit display quality.",
  },
  {
    step: "Stage 02",
    title: "National Finals",
    desc: "Top regional teams advance to compete nationally. Scrutiny increases sharply — engineering documentation, branding, and performance all matter equally.",
  },
] as const;
