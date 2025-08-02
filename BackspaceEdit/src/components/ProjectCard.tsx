import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
  category?: string;
}

const ProjectCard = ({ title, description, thumbnail, category }: ProjectCardProps) => {
  return (
    <Card className="group bg-gradient-card border-border/20 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-glow">
      <CardContent className="p-0">
        <div className="relative">
          {/* Video Thumbnail */}
          <div className="aspect-video bg-muted overflow-hidden">
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center glow-effect">
                <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Category Badge */}
          {category && (
            <div className="absolute top-3 left-3">
              <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {category}
              </span>
            </div>
          )}
        </div>
        
        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;