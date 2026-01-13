import { FileText, Settings, CheckCircle, Send } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Requirement",
    description: "You raise your request via an email to your Single Point Of Contact (SPOC) from Amura",
  },
  {
    icon: Settings,
    title: "Execution",
    description: "That SPOC then gets the work done from the internal teams",
  },
  {
    icon: CheckCircle,
    title: "Quality Checks",
    description: "The work goes through rigorous quality checks by every team's manager and finally the SPOC",
  },
  {
    icon: Send,
    title: "Delivery",
    description: "It is emailed back/a download link is sent to you, meeting previous agreed-upon deadlines",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How do We <span className="text-primary">work?</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We have standardized our Research Mentoring Support working methodology 
            that aligns with our research and customer objectives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center">
                  <step.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;