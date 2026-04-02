import heroImage from "@/assets/hero-jezersko.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Jezersko dolina v Kamniško-Savinjskih Alpah"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-heading text-5xl md:text-7xl font-medium text-primary-foreground mb-6 leading-tight">
          Alenka Polajnar Gantar
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 font-light mb-10 leading-relaxed">
          Povezovanje ljudi in navduševanje za branje
        </p>
        <a
          href="#o-meni"
          className="inline-block border border-primary-foreground/60 text-primary-foreground px-8 py-3 rounded-sm font-body text-sm tracking-widest uppercase hover:bg-primary-foreground/10 transition-colors"
        >
          Več o meni
        </a>
      </div>
    </section>
  );
};

export default Hero;
