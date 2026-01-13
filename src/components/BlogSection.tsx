import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: " Research Directions For 2022 In Nutritional Aspects Of Sarcopenia..",
    excerpt: "About 25% of adults over 65 have type 2 diabetes mellitus (T2DM), a significant health burden for the senior population..",
    category: "Research Methodology",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "A Bibliometric Examination Of Chemotherapy Operations Management..",
    excerpt: "Cancer care providers face several operational issues across the world. From screening and diagnosis…",
    category: "Research Proposal",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Prediction Of Glioblastoma Survival Using Techniques Based On Pre-Operative..",
    excerpt: "Glioblastoma multiforme (GBM) is a grade IV brain tumour with a short survival rate.",
    category: "Research Proposal",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=80",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-background" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Blog & <span className="text-primary">News</span>
          </h2>
          <p className="text-primary font-medium mb-2">READ OUR LATEST ARTICLES</p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We are passionate about the work we do, which is why we regularly research 
            and update our blog with original content to keep you updated with industry news.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link to="/blog" key={index}>
              <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer h-full">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {blog.category}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;