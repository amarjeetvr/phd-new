import { Star, Play } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Atul Saggar",
    role: "Global Sales | Strategy | Virtual Sales | Cloud | Cybersecurity",
    content: "Dr. Bhawna is thoughtful, passionate, and open-minded; with a clear commitment to mentoring and helping others understand the concepts in general during his Mentorship. I have had the joy of witnessing excellence multiple times during the sessions. Her industry knowledge in AI is exemplary. She has complete command on AI strategy, AI use case identification to strategizing to end product deployment.",
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/mtT5Jj30PZM",
    image: "/placeholder.svg",
    achievement: "Crossed halfway of Doctorate And Published 2 Research papers",
    timeframe: "In just 6 months",
  },
  {
    name: "Sai Karthika Puttha",
    role: "Senior Data Engineer",
    content: "I am deeply passionate about conducting research in data engineering concepts, which led me to begin my journey as a doctoral student at the Swiss School of Business Management in Geneva. Recently I submitted my Literature review on 'DEVELOP A FRAMEWORK FOR CREATING BUSINESS VALUE USING A COST-OPTIMIZED MULTI CLOUD DATA MESH: A COMPLETE DATA MANAGEMENT SOLUTION', and I extend my heartfelt gratitude to my mentor, Bhawna Nigam PhD.",
    hasVideo: true,
  },
  {
    name: "Joerg Mueller",
    role: "IT Innovation | Blockchain Technology | Web3 | Digital Twin | Cyber security",
    content: "I am pleased to recommend Dr. Bhawna Nigam as a mentor to anyone pursuing a doctoral degree. While working with Dr. Bhawna Nigam, I have been impressed with their deep knowledge of the subject matter, commitment to helping students succeed, and ability to inspire and motivate students to reach their full potential.",
    hasVideo: false,
  },
  {
    name: "Dr. Madhu Kumar Reddy",
    role: "Software Engineering Leader | IT Leadership & Innovation Advocate",
    content: "Dr. Bhawna Nigam, you are truly an angel in the academic world. Your wisdom, support, and encouragement have been pivotal in shaping my journey. I am profoundly grateful for your unwavering belief in me and your invaluable insights that steered me through the challenges of this rigorous path.",
    hasVideo: false,
  },
  {
    name: "Abhishek Mishra",
    role: "Research Scholar",
    content: "Dr. Bhawna's course is proficiently organized, offering relevant exercises, clear guidance, and detailed action plans for each section, ensuring an optimal learning experience. Under her mentorship, I have experienced nothing short of excellence. The training program and online sessions have significantly accelerated my research progress.",
    hasVideo: false,
  },
  {
    name: "Romil Varadkar",
    role: "Research Scholar",
    content: "This course is ideal for people who are starting their journey in research. I have been through many courses, but none had the ability to condense all relevant information in a way that was easy to consume. Additionally, this course excels in the right chronology of learning things.",
    hasVideo: false,
  },
  {
    name: "Krishna Prasad GS",
    role: "Research Scholar",
    content: "I met Dr. Bhawna in SSBM Upgrad boot camp. She was an amazing mentor and guide. I have taken her training program and online training sessions. It has really helped me to fast up my research. I have completed my Concept paper, Literature Review and Research Proposal in 4 months' time.",
    hasVideo: false,
  },
  {
    name: "Pravin Amin",
    role: "Research Scholar",
    content: "The value I got out of bootcamp is tremendous. I could complete the concept paper by the guidelines from this bootcamp quickly. Thanks RMC for getting back my momentum.",
    hasVideo: false,
  },
  {
    name: "Ramnath Setty",
    role: "GDBA Student",
    content: "Dr. Bhawna has thorough understanding on how a doctoral research has to be done, she has mentored me in the right direction and steered me in right direction in my DBA journey at every critical stage. She with the RMC team has tremendous knowledge and were very supportive in my GDBA journey.",
    hasVideo: false,
  },
  {
    name: "Noushija MA",
    role: "Entrepreneur",
    content: "I wholeheartedly endorse Dr. Bhawna to anyone embarking on a research journey. Her expertise, guidance, and mentoring prowess are unparalleled. She has proven to be an instrumental figure in my academic pursuit, and I am confident that others will benefit greatly from her tutelage as well.",
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/xDAb2bOLcho",
    image: "/placeholder.svg",
    achievement: "COMPLETED Research Proposal",
    timeframe: "In just 1 month",
  },
  {
    name: "David Ghogomu, DBA, MBA",
    role: "Managing Director PHTAC Co-Sultant",
    content: "Since having Dr Nigam as my mentor, I have grown a lot in terms of investigative skills and organizing my daily schedule to meet with rigorous deadlines. I perceived in her the love for talents and excellence in respect of which she will stop at nothing to foster them.",
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/xDAb2bOLcho",
    image: "/placeholder.svg",
    achievement: "COMPLETED DBA",
    timeframe: "In just 18 MONTHS",
  },
  {
    name: "Kusumapriya Talluri",
    role: "Founder & Director - Talluri's Kitchen Temple Pvt Ltd",
    content: "Dr Bhawna is an exceptional research mentor for doctoral degree candidates. She creates a supportive and collaborative environment that fosters creativity and innovation. She has a wealth of experience in Artificial intelligence and is highly respected in the academic community.",
    hasVideo: false,
  },
  {
    name: "Chadwick Okoye",
    role: "Data Governance Professional",
    content: "Dr Bhawna has been a very good mentor and an inspiration to me on my DBA journey. Her wise counsel and motivation is second to none.",
    hasVideo: false,
  },
  {
    name: "Lee Kameron BBA, MBA, PMP, DBA",
    role: "Health, Wellness Advocate | Business Consultant | Author",
    content: "I am honored to write a recommendation for Dr. Bhawna Nigam, PhD, who served as my mentor and Doctor of Business Administration (DBA) supervisor at SSBM. Her dedication to teaching and research has had a profound impact on my academic and professional development.",
    hasVideo: false,
  },
  {
    name: "Sini Rajesh",
    role: "Research Scholar",
    content: "I wholeheartedly recommend Dr. Bhawna to anyone embarking on their research journey. She comes with excellent knowledge and expertise in research. Dr. Bhawna is vibrant, filled with energy, and has a never-die attitude. She provides the road map to achieving one's goals with focus and precision.",
    hasVideo: false,
  },
  {
    name: "Kapil Mohan",
    role: "DBA Graduate",
    content: "I had the opportunity to be mentored By Dr Bhawna and RMC team for the dissertation phase of my doctorate research. Within no time I had the self belief that it could be achieved. Amazingly in a matter of four weeks my dissertation got completed and I could submit the same to my school. Recently in Feb 2024 I defended my thesis and achieved the milestone of completing the DBA journey.",
    hasVideo: false,
  },
  {
    name: "Karan Kumar",
    role: "DBA Student",
    content: "Dr. Bhawna Mam has steered me in the right direction and aided me in overcoming challenges that had impeded my progress during the last two years of my DBA journey. Her knowledge is outstanding, and her guidance is exceptional. She played a crucial role in unraveling the 'WHY' aspect of my research.",
    hasVideo: false,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Some Of Our <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Words from Our Clients
          </p>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            We're committed to exceeding your expectations and empowering your doctoral success. Here's what our satisfied clients have to say
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials
            .filter((t) => t.hasVideo && t.achievement)
            .map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all border-border hover:border-primary">
                <div className="relative aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={item.videoUrl}
                    title={`${item.name} Testimonial`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{item.role}</p>
                  <p className="text-sm text-muted-foreground line-clamp-4">
                    "{item.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/testimonials">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;