import bralniKlubImage from "@/assets/bralni-klub-dri.jpg";

const ArticleSection = () => {
  return (
    <section id="clanek" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-10 text-center">
          V medijih
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 space-y-6">
            <p className="text-muted-foreground font-body text-base leading-relaxed font-light">
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
          <img
            src={bralniKlubImage}
            alt="Bralni klub DRI – pogovor z gostjo"
            className="w-full md:w-1/2 rounded-sm object-cover aspect-[3/2]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
