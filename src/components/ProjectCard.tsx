import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Users } from "lucide-react";

interface ProjectCardProps {
  title: string;
  company: string;
  description: string;
  timeAgo: string;
  icon: string;
  isStarred?: boolean;
  teamMembers: Array<{
    name: string;
    avatar?: string;
  }>;
  progressColor: string;
}

export function ProjectCard({
  title,
  company,
  description,
  timeAgo,
  icon,
  isStarred = false,
  teamMembers,
  progressColor
}: ProjectCardProps) {
  return (
    <Card className="relative h-full transition-all duration-200 hover:shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">{timeAgo}</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-lg">
              {icon}
            </div>
            {isStarred && (
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            )}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{company}</p>
          <p className="text-sm text-foreground/80 leading-relaxed">{description}</p>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {teamMembers.slice(0, 3).map((member, index) => (
              <Avatar key={index} className="w-6 h-6 border-2 border-background">
                <AvatarImage src={member.avatar} />
                <AvatarFallback className="text-xs">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            ))}
            {teamMembers.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{teamMembers.length - 3}
              </Badge>
            )}
          </div>
          
          <div className="flex gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={`w-1 h-6 rounded-full ${progressColor}`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}