import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  company: string;
  description: string;
  timeAgo: string;
  icon: string;
  progressColor: string;
}

export function ProjectCard({
  title,
  company,
  description,
  timeAgo,
  icon,
  progressColor
}: ProjectCardProps) {
  return (
    <Card className="group relative h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
            {timeAgo}
          </span>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center text-2xl shadow-sm">
              {icon}
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 font-medium">{company}</p>
          <p className="text-sm text-foreground/80 leading-relaxed">{description}</p>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${progressColor}`}>
            Active
          </div>
          
          <div className="flex gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-8 rounded-full ${progressColor} opacity-${80 - i * 15}`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}