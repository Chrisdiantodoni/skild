import SkillCard from "#/components/SkillCard";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const skills: SkillRecord[] = [
  {
    id: "skill_01j78x92",
    title: "Tailwind CSS Layouts",
    slug: "tailwind-css-layouts",
    description:
      "Master modern responsive layouts using Tailwind CSS Grid and Flexbox utilities.",
    category: "Frontend Development",
    tags: ["tailwind", "css", "flexbox", "grid"],
    installCommand: "npm install -D tailwindcss postcss autoprefixer",
    createdAt: "2026-03-15T08:30:00Z",
    authorClerkId: "user_2NwXyZ...",
    authorEmail: "frontend.dev@example.com",
  },
  {
    id: "skill_02k89y13",
    title: "Prisma ORM Setup",
    slug: "prisma-orm-setup",
    description:
      "Connect your Next.js application to a PostgreSQL database seamlessly using Prisma.",
    category: "Backend Development",
    tags: ["prisma", "database", "postgresql", "orm"],
    installCommand: "npm install prisma @prisma/client",
    createdAt: "2026-04-12T14:15:22Z",
    authorClerkId: "user_3AbCdE...",
    authorEmail: "database.pro@example.com",
  },
  {
    id: "skill_03l90z24",
    title: "Zustand State Management",
    slug: "zustand-state-management",
    description:
      "A small, fast, and scalable bear-necessity state-management solution for React apps.",
    category: "State Management",
    tags: ["react", "zustand", "javascript"],
    installCommand: "npm install zustand",
    createdAt: "2026-05-01T09:00:00Z",
    authorClerkId: null, // Testing the null capability
    authorEmail: null,
  },
  {
    id: "skill_04m01a35",
    title: "Shadcn UI Integration",
    slug: "shadcn-ui-integration",
    description:
      "Beautifully designed components that you can copy and paste into your Next.js apps.",
    category: "UI Components",
    tags: ["shadcn", "components", "radix", "ui"],
    installCommand: "npx shadcn@latest init",
    createdAt: "2026-06-10T11:45:10Z",
    authorClerkId: "user_4FgHiJ...",
    authorEmail: "design.system@example.com",
  },
  {
    id: "skill_05n12b46",
    title: "NextAuth Authentication",
    slug: "nextauth-authentication",
    description:
      "Implement secure passwordless and OAuth authentication patterns in Next.js App Router.",
    category: "Security",
    tags: ["nextauth", "auth", "security", "nextjs"],
    installCommand: "npm install next-auth@beta",
    createdAt: "2026-06-18T16:00:00Z",
    authorClerkId: "user_5KlMnO...",
    authorEmail: "sec.ops@example.com",
  },
];

function Home() {
  return (
    <div id="home">
      <section className="hero">
        <div className="copy">
          <h1>
            The Registry for <br />
            <span className="text-gradient">Agentic Intelligence</span>
          </h1>
          <p>
            A High-performance registry for procedural agent skills. Discover,
            publish, and operate reusable agent capabilities from a route-driven
            workspace.
          </p>
        </div>
        <div className="actions">
          <Link to="/skills" className="btn-primary">
            <Terminal size={18} />
            <span>Browse Registry</span>
          </Link>
          <Link to="/skills/new" className="btn-secondary">
            Publish Skill
          </Link>
        </div>
      </section>
      <section className="latest">
        <div className="space-y-2">
          <h2>
            Recently Created <span className="text-gradient">Skills</span>
          </h2>
          <p>
            Latest skills loaded from database in descending creation order.
          </p>
        </div>
        <div className="space-y-4">
          {skills.length ? (
            <div className="skills-grid">
              {skills.map((skill) => (
                <SkillCard key={skill.id} {...skill} />
              ))}
            </div>
          ) : (
            <p>No Skills have been created yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
