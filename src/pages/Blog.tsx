import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";

const blogs = [
  {
    title: "PhD Research Directions For 2022 In Nutritional Aspects Of Sarcopenia",
    excerpt: "About 25% of adults over 65 have type 2 diabetes mellitus (T2DM), a significant health burden for the senior population. Recent studies have shown strong correlations between nutritional interventions and sarcopenia management in elderly populations.",
    fullContent: "Sarcopenia, characterized by the loss of muscle mass and function, affects a significant portion of the aging population. This comprehensive study explores the latest research directions in nutritional aspects of sarcopenia management, focusing on protein supplementation, micronutrient optimization, and dietary intervention strategies. Our findings suggest that targeted nutritional approaches can significantly improve outcomes for elderly patients with T2DM.",
    category: "Research Methodology",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80",
    author: "Dr. Sarah Johnson",
    date: "January 10, 2026",
    readTime: "5 min read"
  },
  {
    title: "A Bibliometric Examination Of Chemotherapy Operations Management",
    excerpt: "Cancer care providers face several operational issues across the world. From screening and diagnosis to treatment planning and delivery, operational efficiency plays a crucial role in patient outcomes and healthcare system sustainability.",
    fullContent: "This bibliometric study examines the landscape of chemotherapy operations management research over the past decade. By analyzing publication trends, citation networks, and emerging themes, we identify key areas for future research and practice improvement. The study reveals growing interest in optimization techniques, patient flow management, and resource allocation strategies in oncology settings.",
    category: "Research Proposal",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80",
    author: "Dr. Michael Chen",
    date: "January 8, 2026",
    readTime: "7 min read"
  },
  {
    title: "Prediction Of Glioblastoma Survival Using Techniques Based On Pre-Operative",
    excerpt: "Glioblastoma multiforme (GBM) is a grade IV brain tumour with a short survival rate. Advanced machine learning techniques offer new hope for early prediction and personalized treatment planning.",
    fullContent: "Glioblastoma remains one of the most challenging brain tumors to treat. This research investigates the application of advanced machine learning algorithms to predict patient survival based on pre-operative imaging and clinical data. Our model demonstrates significant improvement in prediction accuracy compared to traditional methods, potentially enabling more personalized treatment strategies.",
    category: "Research Proposal",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=80",
    author: "Dr. Emily Rodriguez",
    date: "January 5, 2026",
    readTime: "6 min read"
  },
  {
    title: "Machine Learning Applications in Clinical Research Data Analysis",
    excerpt: "The integration of artificial intelligence and machine learning in clinical research is revolutionizing how we analyze and interpret medical data.",
    fullContent: "Machine learning has emerged as a powerful tool in clinical research, enabling researchers to extract meaningful insights from complex datasets. This article explores various ML applications in clinical trials, patient outcome prediction, and personalized medicine. We discuss implementation challenges, ethical considerations, and future directions for AI-driven research.",
    category: "Data Analysis",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    author: "Dr. James Wilson",
    date: "January 3, 2026",
    readTime: "8 min read"
  },
  {
    title: "Systematic Literature Review Best Practices for PhD Researchers",
    excerpt: "A well-conducted systematic literature review is the foundation of quality research. Learn the essential steps and methodologies for conducting comprehensive reviews.",
    fullContent: "Systematic literature reviews are critical components of PhD research, providing a comprehensive overview of existing knowledge in a field. This guide covers the entire process from research question formulation to synthesis and reporting. We emphasize the importance of transparent methodology, proper database selection, and rigorous quality assessment.",
    category: "Research Methodology",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=80",
    author: "Dr. Lisa Anderson",
    date: "December 28, 2025",
    readTime: "10 min read"
  },
  {
    title: "Qualitative Research Methods in Social Sciences",
    excerpt: "Qualitative research provides rich, contextual insights that quantitative methods often miss. Explore the various approaches and their applications in social science research.",
    fullContent: "This comprehensive guide to qualitative research methods explores various approaches including ethnography, grounded theory, phenomenology, and case study research. We discuss data collection techniques such as interviews, focus groups, and observations, along with analysis methods like thematic analysis and narrative analysis. The article includes practical tips for ensuring rigor and validity in qualitative research.",
    category: "Research Methodology",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    author: "Dr. Robert Taylor",
    date: "December 25, 2025",
    readTime: "9 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Blog & <span className="text-primary">Latest Articles</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
                Stay updated with the latest research insights, methodologies, and industry news
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-10 sm:py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {blogs.map((blog, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4 text-xs text-muted-foreground mb-2 sm:mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">
                        {blog.category}
                      </Badge>
                      <div className="flex items-center gap-1 sm:gap-2 text-xs text-muted-foreground">
                        <User className="w-3 h-3" />
                        <span className="truncate max-w-[120px]">{blog.author}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-muted-foreground max-w-2xl mx-auto px-4">
              Get the latest research insights and updates delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2.5 sm:py-3 rounded-lg flex-1 border border-border text-sm sm:text-base"
              />
              <button className="bg-primary text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 sm:py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Need Research Assistance?
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
              Our expert team is ready to help you with your research journey. Book a consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2026-01" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors text-sm sm:text-base">
                  BOOK A CALL
                </button>
              </a>
              <a href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-sm sm:text-base">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
