import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const phdImages = [
    {
      url: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1600&auto=format&fit=crop&q=80",
      alt: "PhD research and academic study",
    },
    {
      url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&auto=format&fit=crop&q=80",
      alt: "Research and academic writing",
    },
    {
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&auto=format&fit=crop&q=80",
      alt: "PhD dissertation and thesis work",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-[50vh] md:min-h-screen">
        {/* Background Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          className="absolute inset-0 h-full"
        >
          <CarouselContent className="h-full -ml-0">
            {phdImages.map((image, index) => (
              <CarouselItem key={index} className="h-full pl-0">
                <div className="relative w-full h-full min-h-[50vh] md:min-h-screen">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className=" hidden left-2 md:left-4 h-8 w-8 md:h-10 md:w-10 bg-white/20 border-white/40 text-white hover:bg-white/30" />
          <CarouselNext className=" hidden right-2 md:right-4 h-8 w-8 md:h-10 md:w-10 bg-white/20 border-white/40 text-white hover:bg-white/30" />
        </Carousel>

        {/* TEXT CONTENT */}
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-0 min-h-[50vh] md:min-h-screen flex items-center justify-center md:justify-start">
          <div className="max-w-3xl text-center md:text-left">
            <div className="inline-block bg-white/95 text-foreground font-semibold px-4 py-1.5 rounded-full mb-4 text-xs md:text-sm shadow-sm">
              Research Mentoring Experts
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Your Research Journey Starts Here!
            </h1>

            <p className="hidden md:block text-sm md:text-lg  text-white/90 mb-6 max-w-2xl mx-auto md:mx-0">
              The research journey is messy, full of difficulties and surprises, hard work,
              beginnings and closure. Research Mentor Clinic worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mt-6">
              <Button
                size="lg"
                className="w-full sm:w-auto text-sm md:text-base px-8 py-5 md:px-8 md:py-6 bg-primary hover:bg-primary/90 font-semibold shadow-lg"
                asChild
              >
                <a href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2026-01" target="_blank" rel="noopener noreferrer">
                  BOOK A CALL
                </a>
              </Button>

           
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="py-8 md:py-10 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-lg md:text-3xl font-bold mb-2 md:mb-3">
            Your Research Journey{" "}
            <span className="text-primary">Begins Right Here!</span>
          </h2>
          <p className="text-xs md:text-lg text-muted-foreground">
            We support researchers globally with structured supervision,
            mentorship, and academic excellence.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
