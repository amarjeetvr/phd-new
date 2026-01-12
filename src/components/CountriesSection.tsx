const countries = [
  { name: "France", flag: "🇫🇷" },
  { name: "India", flag: "I🇳" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "UK", flag: "🇬🇧" },
  { name: "USA", flag: "🇺🇸" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Canada", flag: "🇨🇦" },
];

const CountriesSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          PhD Assistance by <span className="text-primary">Country</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
            >
              <span className="text-4xl mb-2 block">{country.flag}</span>
              <span className="text-sm font-medium text-foreground">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;