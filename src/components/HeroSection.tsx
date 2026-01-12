import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const phdImages = [
    {
      url: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1600&auto=format&fit=crop&q=80",
      alt: "PhD research and academic study"
    },
    {
      url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&auto=format&fit=crop&q=80",
      alt: "Research and academic writing"
    },
    {
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&auto=format&fit=crop&q=80",
      alt: "PhD dissertation and thesis work"
    }
  ];

  return (
    <>
      <section className="relative h-[600px] overflow-hidden">
        {/* Image Carousel as Background */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="absolute inset-0"
        >
          <CarouselContent className="h-full">
            {phdImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/60" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-white/30 text-white" />
          <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-white/30 text-white" />
        </Carousel>

        {/* Text Content Overlay */}
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/90 text-foreground font-semibold px-4 py-2 rounded-full mb-6">
              PhD Dissertation Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your PhD Research Journey Starts Here !
            </h1>
            <p className="text-lg text-white/90 mb-10 max-w-2xl leading-relaxed">
              The research journey is messy, full of difficulties and surprises, hard work, beginnings and some form of closure. PhDAssistance Research Lab travels as part of this journey by supervising and mentoring PhD researchers across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground">
                Hire a Researcher
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section with Additional Content */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Your PhD Research Journey <span className="text-primary">Begins Right Here!</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The research journey is often chaotic, filled with challenges, unexpected twists, 
            hard work, new beginnings, and eventual closure. 'PhD Assistance Research Lab' is 
            a companion on this path, providing supervision and mentorship to PhD researchers worldwide.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;