const PoemSection = () => {
  return (
    <section id="pesem-na-teden" className="section-padding bg-card">
      <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-10 text-center">
        Pesem na teden
      </h2>
      <div className="space-y-5 text-muted-foreground font-body text-base leading-relaxed font-light text-center">
        <p>
          Vsak teden prejemnikom pošljem pesem po svoji izbiri. Brez razlage, brez literarnega teoretiziranja. Le pesem, da jo za trenutek začutimo in nas malo ustavi.
        </p>
        <p className="text-foreground font-normal mt-8">
          Če želiš prejemati pesem na teden, mi piši na Viber:
        </p>
        <p className="text-2xl font-heading text-primary font-medium">
          031 718 023
        </p>
      </div>
    </section>
  );
};

export default PoemSection;
