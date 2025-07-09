import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, User, Mail } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

function generateComingSoonProjects(count: number) {
  return Array.from({ length: count }, () => ({
    title: "Coming soon",
    company: "Zorephona",
    progressColor: "bg-gradient-to-r from-gray-400 to-gray-500"
  }));
}

const projects = [
  {
    title: "RealTalk Advice App",
    company: "7inseven",
    description: "Get emotionally honest, AI-powered advice in real time. No fluff, just real talk.",
    timeAgo: "just launched",
    icon: "💡",
    progressColor: "bg-gradient-to-r from-blue-500 to-blue-600",
    href: "/realtalk",
    active: true
  },
  {
    title: "SayLess: Code the Subtext",
    company: "Zorephona",
    description: "Decode what people really mean when they text you. AI-powered subtext analyzer.",
    timeAgo: "new!",
    icon: "🕵️‍♂️",
    progressColor: "bg-gradient-to-r from-pink-500 to-yellow-500",
    href: "http://localhost:5173",
    active: true
  }
];

export function ProjectDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-card via-card/95 to-secondary/10 backdrop-blur-md border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="relative flex items-center justify-between p-8">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <h1 className="text-5xl font-black bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent tracking-tight">
                Projects
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
            </div>
            <Button size="lg" className="gap-3 shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-primary to-primary/90">
              <Plus className="w-5 h-5" />
              NEW PROJECT
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="gap-3 shadow-lg hover:shadow-xl transition-all duration-200">
                <Mail className="w-5 h-5" />
                CONTACT ME
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <h2 className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Zorephona
              </h2>
              <p className="text-sm text-muted-foreground font-medium">student</p>
            </div>
            <Avatar className="w-12 h-12 ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
              <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold">
                <User className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={project.href} key={index} style={{ textDecoration: 'none' }} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
              <ProjectCard {...project} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}