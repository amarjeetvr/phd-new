import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    highlight: "Trust:",
    content: "PhD assistance allocated an expert to do the submission work for me. The communication was very smooth. I was surprised that the submission process was completed with 2 days. I appreciate support team for their good work",
    name: "Salim Al-Gailani, Kuwait, 17HMD068",
    service: "Journal Submission",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    highlight: "Affordable Pricing:",
    content: "I fully admire PhD assistance's reputation and quality. I especially chose PhD assistance's packages as no other company offers such a service. Their service quality and timely delivery is very helpful in meeting journal deadlines. I am glad that PhD assistance offers packages at affordable price.",
    name: "Kate Merkel-Hess, Manchester, 18HMD080",
    service: "Journal Formatting",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    highlight: "Quality Deliverable:",
    content: "I am very pleased with PhD assistance's Video abstract service. PhD assistance provided high-quality service and cleared my worries about the document quality.",
    name: "Rory K., Lincoln, 19HMD067",
    service: "Video Byte and Abstract",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Why PhD Assistance Research Lab?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Here are Some of our doctoral thesis and publication support requests 
            customers Had to Say about engaging with
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Card key={index} className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground mb-4">
                  <strong className="text-primary">{item.highlight}</strong>
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.content}
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={item.avatar} 
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.name}</p>
                    <p className="text-primary text-sm">{item.service}</p>
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