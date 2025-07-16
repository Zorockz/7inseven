import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, User, Mail } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

interface Project {
  title: string;
  company: string;
  description: string;
  icon: string;
  progressColor: string;
  href: string;
  active: boolean;
}

const projects: Project[] = [
  {
    title: "RealTalk Advice App",
    company: "7inseven",
    description:
      "Get emotionally honest, AI-powered advice in real time. No fluff, just real talk.",
    icon: "💡",
    progressColor: "bg-gradient-to-r from-blue-500 to-blue-600",
    href: "/realtalk",
    active: true,
  },
  {
    title: "SayLess: Code the Subtext",
    company: "Zorephona",
    description:
      "Decode what people really mean when they text you. AI-powered subtext analyzer.",
    icon: "🕵️‍♂️",
    progressColor: "bg-gradient-to-r from-pink-500 to-yellow-500",
    href: "/sayless",
    active: true,
  },
  {
    title: "Aesthetic Swipe Share",
    company: "7inseven",
    description:
      "Discover your aesthetic taste profile through interactive moodboard swiping. Find your visual identity.",
    icon: "🎨",
    progressColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    href: "/aesthetic-swipe",
    active: true,
  },
  {
    title: "Flex Factory: Caption Generator",
    company: "7inseven",
    description:
      "Generate outrageous social media captions instantly. Perfect for flexing on your timeline with style.",
    icon: "💎",
    progressColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
    href: "/flex-factory",
    active: true,
  },
  {
    title: "Whispered Time Capsule",
    company: "7inseven",
    description:
      "Send messages to your future self or loved ones. A digital time capsule that delivers your thoughts across time.",
    icon: "⏰",
    progressColor: "bg-gradient-to-r from-teal-500 to-cyan-600",
    href: "/whispered-time-capsule",
    active: true,
  },
  {
    title: "Nen Type Aura Test",
    company: "7inseven",
    description:
      "Discover your Hunter x Hunter Nen type with this interactive personality quiz. Find out if you're an Enhancer, Emitter, Manipulator, Transmuter, Conjurer, or Specialist!",
    icon: "🔮",
    progressColor: "bg-gradient-to-r from-indigo-500 to-purple-600",
    href: "/nen-type-aura-test",
    active: true,
  },
  {
    title: "Trace.me: OSINT Digital Footprint",
    company: "Zorephona",
    description:
      "Analyze your digital footprint and see your OSINT profile. Find out what the internet knows about you!",
    icon: "🕵️‍♀️",
    progressColor: "bg-gradient-to-r from-green-500 to-cyan-500",
    href: "/trace.me",
    active: true,
  },
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
              <h1 className="text-5xl font-bebas font-black bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent tracking-wider">
                PROJECTS
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
            </div>
            <Button
              size="lg"
              className="gap-3 shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-primary to-primary/90 font-barlow font-semibold"
            >
              <Plus className="w-5 h-5" />
              NEW PROJECT
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="gap-3 shadow-lg hover:shadow-xl transition-all duration-200 font-barlow font-semibold"
              >
                <Mail className="w-5 h-5" />
                CONTACT ME
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <h2 className="text-lg font-barlow font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Zorephona
              </h2>
              <p className="text-sm text-muted-foreground font-barlow font-medium">
                student
              </p>
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
            <Link
              href={project.href}
              key={index}
              style={{ textDecoration: "none" }}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={
                project.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              <ProjectCard {...project} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
