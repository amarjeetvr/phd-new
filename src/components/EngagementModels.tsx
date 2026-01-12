const models = [
  "Fixed Price Engagement Model",
  "Time and Material Model",
  "Dedicated Team/Dedicated Development Center",
];

const EngagementModels = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our PhD External Mentoring Service Engagement Models
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Choose your mode of Cooperation before committing to a healthy working relationship
            </p>
            <p className="opacity-80 mb-8">
              With years of experience in the industry, we have framed our work standards, 
              including PhD service engagement models, to ensure smooth collaboration between 
              our experts and our clients.
            </p>
            <div className="space-y-4">
              {models.map((model, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg px-4 py-3"
                >
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="font-medium">{model}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
                alt="Team collaboration and PhD mentoring"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-40" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-20 h-20 mx-auto bg-primary rounded-full mb-3 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">PhD</span>
                  </div>
                  <p className="text-lg font-bold text-primary">PhD Assistance</p>
                  <p className="text-sm text-muted-foreground mt-1">Your Research Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;