import { GraduationCap, Users, Award, Globe } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "5000+",
      label: "PhD Scholars Mentored",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "500+",
      label: "Expert Mentors",
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "98%",
      label: "Success Rate",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "50+",
      label: "Countries Served",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            About <span className="text-primary">PhD Assistance</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            We are your trusted mentor in the PhD research journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-10 sm:mb-12 md:mb-16">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Empowering PhD Researchers Worldwide
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              PhD Assistance Research Lab is a leading research support organization dedicated to 
              helping PhD scholars navigate their research journey. We understand that pursuing a 
              doctorate is challenging, and we're here to provide comprehensive support at every stage.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              Our team of experienced researchers, statisticians, and subject matter experts work 
              collaboratively to ensure your research meets the highest academic standards. From 
              topic selection to final defense preparation, we're with you every step of the way.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              With a proven track record of success across multiple disciplines and countries, we 
              bring global expertise with personalized attention to each researcher's unique needs.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80"
              alt="PhD research and collaboration"
              className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 md:h-auto object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="flex justify-center text-primary mb-2 sm:mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
