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
      <section className="relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-screen">
        {/* Background Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          className="absolute inset-0 h-full"
        >
          <CarouselContent className="h-full -ml-0">
            {phdImages.map((image, index) => (
              <CarouselItem key={index} className="h-full pl-0">
                <div className="relative w-full h-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen">
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

{/* <CarouselPrevious className="hidden md:flex left-2 md:left-4 h-8 w-8 md:h-10 md:w-10 bg-white/20 border-white/40 text-white hover:bg-white/30" />
                    <CarouselNext className="hidden md:flex right-2 md:right-4 h-8 w-8 md:h-10 md:w-10 bg-white/20 border-white/40 text-white hover:bg-white/30" />
     */}
        </Carousel>

        {/* TEXT CONTENT */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-0 min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center justify-center md:justify-start">
          <div className="max-w-3xl text-center md:text-left">
            <div className="inline-block bg-white/95 text-foreground font-semibold px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4 text-xs md:text-sm shadow-sm">
              Research Mentoring Experts
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Your Research Journey Starts Here!
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto md:mx-0 px-2 sm:px-0">
              The research journey is messy, full of difficulties and surprises. Stop struggling on your own   let's do it together. 
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mt-4 sm:mt-6">
  {/* Book a Call */}
  <Button
    size="lg"
    className="w-full sm:w-auto text-sm md:text-base px-6 py-5 sm:px-8 md:py-6 bg-primary hover:bg-primary/90 font-semibold shadow-lg"
    asChild
  >
    <a
      href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2026-01"
      target="_blank"
      rel="noopener noreferrer"
    >
      BOOK A CALL
    </a>
  </Button>

  {/* WhatsApp */}
  <Button
    size="lg"
    variant="outline"
    className="w-full sm:w-auto text-sm md:text-base px-6 py-5 sm:px-8 md:py-6 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold shadow-lg"
    asChild
  >
    <a
      href="https://api.whatsapp.com/send/?phone=918827272142&text=Hello%20I%20need%20research%20guidance"
      target="_blank"
      rel="noopener noreferrer"
    >
       WHATSAPP
    </a>
  </Button>
</div>

          </div>
        </div>
      </section>

      {/* BOTTOM SECTION
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
      </section> */}
    </>
  );
};

export default HeroSection;
