import { Shield, Headphones, Clock, Award, MessageSquare, BookOpen, FileCheck } from "lucide-react";

const guarantees = [
  { icon: Shield, title: "Plagiarism Free" },
  { icon: Headphones, title: "Unlimited Support" },
  { icon: Clock, title: "On-time delivery" },
  { icon: Award, title: "Subject Matter Expertise" },
  { icon: MessageSquare, title: "Communicate with your writer" },
  { icon: BookOpen, title: "Updated academic resources" },
  { icon: FileCheck, title: "Free research articles supply*" },
];

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Guarantee</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              What We promise, we deliver exactly the same
            </p>
            <p className="text-muted-foreground leading-relaxed">
              PhD Assistance Research Lab assists in framing the PhD research proposal as per 
              the standard university guidelines. We have assisted researchers pursuing their 
              PhD from universities across the globe, such as the UK, the USA, the Netherlands, 
              Australia, the UAE, Dubai, Kenya, Nigeria, Europe, Russia and many more countries. 
              We are aware of the guidelines set by different universities and strictly follow the same.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Further, we are aware of the plagiarism tolerance policy and therefore strive to 
              ensure that all the papers sent to our clients are original. Our Qualified and 
              experienced writers/researchers ensure to deliver your work with 100% confidentiality, 
              on-time delivery, and 100% match with the initial requirement.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {guarantees.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;