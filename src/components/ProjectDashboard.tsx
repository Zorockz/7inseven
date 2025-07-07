import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, User } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    company: "7inseven Digital",
    description: "Modern shopping experience with advanced product recommendations and seamless checkout process.",
    timeAgo: "6 hours ago",
    icon: "🛒",
    progressColor: "bg-gradient-to-r from-blue-500 to-blue-600"
  },
  {
    title: "Portfolio Showcase",
    company: "Creative Studio",
    description: "Interactive portfolio website showcasing creative work with smooth animations and responsive design.",
    timeAgo: "3 days ago",
    icon: "🎨",
    progressColor: "bg-gradient-to-r from-purple-500 to-purple-600"
  },
  {
    title: "Task Management",
    company: "Productivity Co",
    description: "Streamlined task management system with team collaboration and project tracking features.",
    timeAgo: "6 hours ago",
    icon: "✅",
    progressColor: "bg-gradient-to-r from-green-500 to-green-600"
  },
  {
    title: "Weather Dashboard",
    company: "Climate Tech",
    description: "Real-time weather monitoring with detailed forecasts and climate data visualization.",
    timeAgo: "3 hours ago",
    icon: "🌤️",
    progressColor: "bg-gradient-to-r from-cyan-500 to-cyan-600"
  },
  {
    title: "Music Streaming",
    company: "Audio Labs",
    description: "High-quality music streaming platform with personalized playlists and social features.",
    timeAgo: "5 days ago",
    icon: "🎵",
    progressColor: "bg-gradient-to-r from-pink-500 to-pink-600"
  },
  {
    title: "Fitness Tracker",
    company: "Health Plus",
    description: "Comprehensive fitness tracking with workout plans and progress monitoring.",
    timeAgo: "3 months ago",
    icon: "💪",
    progressColor: "bg-gradient-to-r from-orange-500 to-orange-600"
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
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                projects
              </h1>
              <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mt-1"></div>
            </div>
            <Button size="lg" className="gap-3 shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-primary to-primary/90">
              <Plus className="w-5 h-5" />
              NEW PROJECT
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-sm font-semibold text-foreground">BEN CLINE</span>
              <p className="text-xs text-muted-foreground">Project Manager</p>
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
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}