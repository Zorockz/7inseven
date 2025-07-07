import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, User } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

const starredProjects = [
  {
    title: "E-Commerce Platform",
    company: "7inseven Digital",
    description: "Modern shopping experience with advanced product recommendations and seamless checkout process.",
    timeAgo: "6 hours ago",
    icon: "🛒",
    isStarred: true,
    teamMembers: [
      { name: "Alex Johnson", avatar: "" },
      { name: "Sarah Chen", avatar: "" },
      { name: "Mike Wilson", avatar: "" }
    ],
    progressColor: "bg-blue-400"
  },
  {
    title: "Portfolio Showcase",
    company: "Creative Studio",
    description: "Interactive portfolio website showcasing creative work with smooth animations and responsive design.",
    timeAgo: "3 days ago",
    icon: "🎨",
    isStarred: true,
    teamMembers: [
      { name: "Emma Davis", avatar: "" },
      { name: "Chris Brown", avatar: "" }
    ],
    progressColor: "bg-purple-400"
  },
  {
    title: "Task Management",
    company: "Productivity Co",
    description: "Streamlined task management system with team collaboration and project tracking features.",
    timeAgo: "6 hours ago",
    icon: "✅",
    isStarred: true,
    teamMembers: [
      { name: "Lisa Wang", avatar: "" },
      { name: "David Kim", avatar: "" },
      { name: "Rachel Green", avatar: "" }
    ],
    progressColor: "bg-green-400"
  }
];

const allProjects = [
  ...starredProjects,
  {
    title: "Weather Dashboard",
    company: "Climate Tech",
    description: "Real-time weather monitoring with detailed forecasts and climate data visualization.",
    timeAgo: "3 hours ago",
    icon: "🌤️",
    isStarred: false,
    teamMembers: [
      { name: "Tom Anderson", avatar: "" },
      { name: "Jennifer Liu", avatar: "" }
    ],
    progressColor: "bg-cyan-400"
  },
  {
    title: "Music Streaming",
    company: "Audio Labs",
    description: "High-quality music streaming platform with personalized playlists and social features.",
    timeAgo: "5 days ago",
    icon: "🎵",
    isStarred: false,
    teamMembers: [
      { name: "Kevin Park", avatar: "" },
      { name: "Amanda Foster", avatar: "" },
      { name: "Jason Lee", avatar: "" }
    ],
    progressColor: "bg-pink-400"
  },
  {
    title: "Fitness Tracker",
    company: "Health Plus",
    description: "Comprehensive fitness tracking with workout plans and progress monitoring.",
    timeAgo: "3 months ago",
    icon: "💪",
    isStarred: false,
    teamMembers: [
      { name: "Maria Rodriguez", avatar: "" },
      { name: "Steve Johnson", avatar: "" }
    ],
    progressColor: "bg-orange-400"
  }
];

export function ProjectDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">7inseven</h1>
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            NEW PROJECT
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">BEN CLINE</span>
          <Avatar className="w-8 h-8">
            <AvatarFallback>
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <Tabs defaultValue="starred" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="starred">PROJECTS / STARRED</TabsTrigger>
            <TabsTrigger value="all">PROJECTS / ALL</TabsTrigger>
          </TabsList>
          
          <TabsContent value="starred" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {starredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="all" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}