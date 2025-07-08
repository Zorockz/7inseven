import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  company: string;
  description?: string;
  timeAgo?: string;
  icon?: string;
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
  const isActive = title === "RealTalk Advice App";
  return (
    <Card className="group relative h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-end mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center text-2xl shadow-sm">
                {icon}
              </div>
            )}
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 font-medium">{company}</p>
          {description && (
            <p className="text-sm text-foreground/80 leading-relaxed">{description}</p>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-end">
          {isActive ? (
            <div className={`px-4 py-2 rounded-full text-xs font-semibold text-white ${progressColor} shadow-sm`}>
              Active
            </div>
          ) : (
            <div className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-gray-400 shadow-sm">
              inactive
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}