export interface NavItem {
  title: string;
  path?: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    title: "Getting Started",
    children: [
      { title: "Overview", path: "/" },
      { title: "Web Fundamentals", path: "/docs/web-fundamentals" },
    ],
  },
  {
    title: "Your Library",
    children: [{ title: "Saved Articles", path: "/saved" }],
  },
  {
    title: "Frontend",
    children: [
      { title: "HTML", path: "/docs/html" },
      { title: "CSS", path: "/docs/css" },
      { title: "JavaScript", path: "/docs/javascript" },
      { title: "React", path: "/docs/react" },
      { title: "React Router", path: "/docs/react-router" },
      { title: "Tailwind CSS", path: "/docs/tailwind" },
      { title: "TypeScript", path: "/docs/typescript" },
    ],
  },
  {
    title: "Development Tools",
    children: [
      { title: "Git & GitHub", path: "/docs/git" },
      { title: "NPM", path: "/docs/npm" },
      { title: "Vite", path: "/docs/vite" },
    ],
  },
  {
    title: "Backend",
    children: [
      { title: "Node.js", path: "/docs/nodejs" },
      { title: "Express.js", path: "/docs/express" },
      { title: "REST API", path: "/docs/api" },
    ],
  },
  {
    title: "Database",
    children: [
      { title: "Database Fundamentals", path: "/docs/database" },
      { title: "SQL", path: "/docs/sql" },
      { title: "MySQL", path: "/docs/mysql" },
      { title: "SQL Server", path: "/docs/sql-server" },
      { title: "Prisma ORM", path: "/docs/prisma" },
    ],
  },
  {
    title: "Advanced",
    children: [
      { title: "Authentication", path: "/docs/authentication" },
      { title: "Security", path: "/docs/security" },
      { title: "Testing", path: "/docs/testing" },
      { title: "Deployment", path: "/docs/deployment" },
    ],
  },
];
