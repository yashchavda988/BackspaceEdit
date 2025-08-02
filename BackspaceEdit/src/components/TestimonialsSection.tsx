import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Content Creator",
      content: "MojO's editing transformed my YouTube channel completely. The quality and attention to detail is incredible!",
      avatar: "AC"
    },
    {
      id: 2,
      name: "Sarah Johnson", 
      role: "Brand Manager",
      content: "Professional, fast, and exactly what we needed for our social media campaigns. Highly recommended!",
      avatar: "SJ"
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      role: "Gaming Streamer",
      content: "The gaming edits are insane! Perfect pacing and effects that keep viewers engaged throughout.",
      avatar: "MR"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from creators and brands who've grown their audience with our video editing expertise.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gradient-card border-border/20 hover:border-primary/30 transition-all duration-500 hover:shadow-glow">
              <CardContent className="p-6">
                {/* Quote */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;