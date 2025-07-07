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
      <header className="flex items-center justify-between p-8 border-b bg-card/50 backdrop-blur-sm">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            projects
          </h1>
          <Button size="sm" className="gap-2 shadow-lg">
            <Plus className="w-4 h-4" />
            NEW PROJECT
          </Button>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">BEN CLINE</span>
          <Avatar className="w-9 h-9 ring-2 ring-primary/20">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
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