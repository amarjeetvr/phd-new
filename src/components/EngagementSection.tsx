import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "JERRY",
    quote: "I am done with my thesis; I need an expert to review & provide external comments & addressing those after a mutual agreement",
    service: "External Peer Review & Addressing Comments Support",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "LISSA",
    quote: "I find it difficult to identify the latest articles for my research study. I am not aware of how to extract articles and synthesize them.",
    service: "Article Extraction & Annotated Bibliography Services",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "SAM",
    quote: "I have written more than 300 pages, and I need someone who can sit with me and work along with it to edit my thesis.",
    service: "Hire a Researcher",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "ROBERT",
    quote: "I have developed a questionnaire and got data; it seems when I run the analyses, I could not able to get the results that I am looking for.",
    service: "Statistical Analyses services",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

const EngagementSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Check at what stage you're into & Analyse how you can{" "}
            <span className="text-primary">fit into our engagement model</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            The research journey is messy, full of difficulties and surprises, hard work, 
            beginnings and some form of closure. 'PhD Assistance' travels as part of this 
            journey by supervising and mentoring researchers across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <Card key={index} className="bg-muted hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">{item.name}</h3>
                <img 
                  src={item.avatar} 
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">
                  "{item.quote}"
                </p>
                <h4 className="font-semibold text-foreground text-sm">{item.service}</h4>
                <a href="#" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Learn More
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;