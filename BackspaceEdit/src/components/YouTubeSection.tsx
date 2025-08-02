import { Button } from "@/components/ui/button";

const YouTubeSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              biggest video editing community - <span className="text-primary">YouTube</span>
            </h2>
          </div>
          
          {/* YouTube Embed */}
          <div className="glass-strong rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">MojO</h3>
                <p className="text-muted-foreground">319 subscribers</p>
              </div>
            </div>
            
            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative group">
              {/* Video Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto glow-effect">
                    <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">biggest video editing community</h4>
                  <p className="text-muted-foreground">Watch on YouTube</p>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="default" className="bg-primary text-primary-foreground glow-effect">
                  Watch Video
                </Button>
              </div>
            </div>
          </div>
          
          {/* Channel Info */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Join our community of video editors and creators
            </p>
            <Button variant="outline" className="glass border-primary/30 text-primary hover:bg-primary/10">
              Subscribe to Channel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;