import alenkaImage from "@/assets/alenka-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="o-meni" className="section-padding max-w-4xl mx-auto">
      <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-10 text-center">
        O meni
      </h2>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img
          src={alenkaImage}
          alt="Alenka Polajnar Gantar"
          className="w-full md:w-1/2 rounded-sm object-cover aspect-[4/5]"
          loading="lazy"
        />
        <div className="space-y-5 text-muted-foreground font-body text-base leading-relaxed font-light md:w-1/2">
          <p>
            Beseda me spremlja, odkar pomnim. Ni naključje, da sem izbrala študij, prepleten z branjem in komunikacijo – diplomirala sem iz angleškega jezika s književnostjo in novinarstva.
          </p>
          <p>
            Zadnjih osem let sem vodila projekt spodbujanja branja in bralni klub v podjetju DRI upravljanje investicij, ki je pritegnil več kot petdeset rednih in občasnih sodelujočih sodelavcev. Organizirala sem različne dogodke, povezane s knjigami, in pisala mesečna bralna priporočila.
          </p>
          <p>
            Najraje segam po romanih, zasidranih v resničnem življenju, pritegne me vsebina, s katero se lahko poistovetim ali o njej razmišljam. Prebiram tudi stvarno literaturo in poezijo.
          </p>
          <p>
            Verjamem, da imam dar za povezovanje ljudi in navduševanje za branje.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
