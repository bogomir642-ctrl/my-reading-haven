const ArticleSection = () => {
  return (
    <section id="clanek" className="section-padding bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-6">
          V medijih
        </h2>
        <p className="text-muted-foreground font-body text-base leading-relaxed font-light mb-8">
          Članek o bralnem klubu v podjetju DRI, objavljen v reviji Bukla.
        </p>
        <a
          href="https://www.bukla.si/revija-bukla/bralni-klub-v-podjetju-dri-prostor-srecevanja-in-osebne-rasti.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-primary text-primary px-8 py-3 rounded-sm font-body text-sm tracking-widest uppercase hover:bg-primary/5 transition-colors"
        >
          Preberi članek
        </a>
      </div>
    </section>
  );
};

export default ArticleSection;
