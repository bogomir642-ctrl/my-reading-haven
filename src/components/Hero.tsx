import heroImage from "@/assets/hero-reading.jpg";

const Hero = () => {
  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#o-meni");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Branje knjige"
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-heading text-5xl md:text-7xl font-medium text-primary-foreground mb-6 leading-tight">
          Bralni vikend odklop
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 font-light mb-4 leading-relaxed">
          15.–17. maja 2026, Jezersko
        </p>
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 font-light mb-10 leading-relaxed">
          Kdaj ste nazadnje v miru brali, ne da bi razmišljali, katere obveznosti vas čakajo?
        </p>
        <a
          href="#o-meni"
          onClick={handleScrollToAbout}
          className="inline-block border border-primary-foreground/60 text-primary-foreground px-8 py-3 rounded-sm font-body text-sm tracking-widest uppercase hover:bg-primary-foreground/10 transition-colors"
        >
          Več o meni
        </a>
      </div>
    </section>
  );
};

export default Hero;
