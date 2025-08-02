import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "short" | "long">("all");

  const projects = [
    {
      id: 1,
      title: "VSL Edit",
      description: "A high-impact, professionally edited VSL crafted in After Effects",
      thumbnail: "https://img.youtube.com/vi/oZQ-13T1kxk/maxresdefault.jpg",
      category: "Long-Form",
      type: "long" as const
    },
    {
      id: 2,
      title: "Instagram Edit",
      description: "A sleek, eye-catching Insta edit made to grab attention fast.",
      thumbnail: "https://img.youtube.com/vi/N5v6x4-sd0w/maxresdefault.jpg",
      category: "Short-Form",
      type: "short" as const
    },
    {
      id: 3,
      title: "Gaming Edit",
      description: "A fast-paced, high-energy gaming edit packed with action.",
      thumbnail: "https://img.youtube.com/vi/1ijshEm3B9w/maxresdefault.jpg",
      category: "Short-Form",
      type: "short" as const
    },
    {
      id: 4,
      title: "AI Edit",
      description: "AI dropshipping, leveled up in seconds.",
      thumbnail: "https://img.youtube.com/vi/9BnVpxXgMLA/maxresdefault.jpg",
      category: "Short-Form",
      type: "short" as const
    },
    {
      id: 5,
      title: "Instagram Edit",
      description: "Bold personal branding in every second.",
      thumbnail: "https://img.youtube.com/vi/mFRvjdrttZA/maxresdefault.jpg",
      category: "Short-Form",
      type: "short" as const
    },
    {
      id: 6,
      title: "Real Estate Edit",
      description: "Real estate visuals that sell in seconds.",
      thumbnail: "https://img.youtube.com/vi/f0SwbyRJ13Y/maxresdefault.jpg",
      category: "Short-Form",
      type: "short" as const
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true;
    return project.type === activeFilter;
  });

  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse through collection of video projects, showcasing my expertise in both long-form and short-form content.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              variant={activeFilter === "short" ? "default" : "outline"}
              onClick={() => setActiveFilter("short")}
              className={activeFilter === "short" ? "bg-primary text-primary-foreground" : "glass border-primary/30 text-primary hover:bg-primary/10"}
            >
              Short-Form
            </Button>
            <Button
              variant={activeFilter === "long" ? "default" : "outline"}
              onClick={() => setActiveFilter("long")}
              className={activeFilter === "long" ? "bg-primary text-primary-foreground" : "glass border-primary/30 text-primary hover:bg-primary/10"}
            >
              Long-Form
            </Button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;