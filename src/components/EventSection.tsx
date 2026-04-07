import { useState, useRef } from "react";
import jezerskoImage from "@/assets/jezersko-senkova.jpg";
import pogovorImage from "@/assets/pogovor.webp";
import jogaImage from "@/assets/joga1.jpg";
import knihiImage from "@/assets/Kava + knjiga.png";
import knjizniPaketImage from "@/assets/knjizni-paket.jpg";

const EventSection = () => {
  const [expanded, setExpanded] = useState(false);
  const buttonsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="dogodek" className="section-padding" style={{ backgroundColor: "hsl(var(--event-bg))" }}>
      <div className="max-w-5xl mx-auto">
        {/* Komu je namenjen - image RIGHT */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
          <div className="flex-1 space-y-5 text-foreground font-body text-base leading-relaxed font-light">
            <h3 className="font-heading text-3xl text-foreground mb-3 font-bold">Komu je namenjen?</h3>
            <ul className="space-y-2 list-none">
              <li>Vsem, ki <strong>radi berete</strong>, in vsem, ki bi si to želeli, a vam <strong>primanjkuje časa, umirjenosti ali idej.</strong></li>
              <li>Vsem, ki preprosto <strong>potrebujete odklop</strong> od hitečega vsakdanjika in zaslonov.</li>
              <li>Vsem, ki ste <strong>radovedni in odprti</strong> za nova obzorja, ne glede na to, ali ste v zadnjem letu prebrali kakšno knjigo.</li>
              <li>Vsem, ki se prijavljate sami in malo oklevate – ne skrbite, hitro boste navezali stike in postali del našega plemena navdušencev nad branjem.</li>
            </ul>
            <p className="mt-5">Ni nujno, da ste zagrizeni bralci. Ni nujno, da že imate družbo. Pomembna je le <strong>odločitev.</strong></p>
            <p>Knjig iz programa vam ni treba prebrati vnaprej in lahko se nam pridružite brez pričakovanj. <strong>Prisrčno dobrodošli vsi!</strong></p>
          </div>
          <div className="w-full md:w-2/5 flex-shrink-0">
            <img
              src={pogovorImage}
              alt="Pogovor ob kavi v naravi"
              className="w-full h-64 md:h-80 object-cover rounded-sm"
              loading="lazy"
            />
          </div>
        </div>

        {!expanded && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://docs.google.com/forms/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-sm font-body text-base tracking-widest uppercase text-center hover:opacity-90 transition-opacity"
            >
              Prijava
            </a>
            <button
              onClick={() => setExpanded(true)}
              className="inline-block border border-primary text-primary px-8 py-3 rounded-sm font-body text-base tracking-widest uppercase hover:bg-primary/5 transition-colors"
            >
              Preberi več
            </button>
          </div>
        )}

        {expanded && (
          <>
            <EventDetails />
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="https://docs.google.com/forms/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-sm font-body text-base tracking-widest uppercase text-center hover:opacity-90 transition-opacity"
              >
                Prijava
              </a>
              <button
                onClick={() => setExpanded(false)}
                className="inline-block border border-primary text-primary px-8 py-3 rounded-sm font-body text-base tracking-widest uppercase hover:bg-primary/5 transition-colors"
              >
                Skrij podrobnosti
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const EventDetails = () => (
  <div className="space-y-10 text-foreground font-body text-base leading-relaxed font-light pt-2 animate-fade-in">
    
    {/* Program - image LEFT */}
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="w-full md:w-2/5 flex-shrink-0 space-y-4">
        <img
          src={knihiImage}
          alt="Kava in knjiga"
          className="w-full h-64 md:h-80 object-cover rounded-sm"
          loading="lazy"
        />
        <img
          src={jogaImage}
          alt="Jutranja joga v naravi"
          className="w-full h-64 md:h-80 object-cover rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-heading text-3xl text-foreground mb-3 font-bold">Program</h3>

        <h4 className="font-medium text-foreground mt-4 mb-3 text-2xl">Petek, 15. maja</h4>
        <ul className="space-y-1">
          <li>16.00 – Dobrodošlica s kavo in prigrizkom, prevzem knjižnega darilnega paketa</li>
          <li>16.30 – Uvodni bralni pogovor, spoznavanje</li>
          <li>18.00 – Večerja in druženje</li>
        </ul>

        <h4 className="font-medium text-foreground mt-4 mb-3 text-2xl">Sobota, 16. maja</h4>
        <ul className="space-y-1">
          <li>7.00 – Enostavna jutranja joga za lep začetek dneva</li>
          <li>8.00 – Zajtrk brez naglice</li>
          <li>9.00–12.00 – Pohod po dolini Ravenske Kočne</li>
        </ul>
        <p className="mt-2 italic">Popoldne je prosto za sproščanje v savni, uživanju v branju, za sprehod ob Kokri, zanimiv pogovor ali sanjarjenje v tišini.</p>
        <ul className="mt-2">
          <li>16.30 – Drugi bralni večer – tokrat v družbi z gostom presenečenja</li>
        </ul>

        <h4 className="font-medium text-foreground mt-4 mb-3 text-2xl">Nedelja, 17. maja</h4>
        <ul className="space-y-1">
          <li>7.00 – Enostavna jutranja joga za lep začetek dneva</li>
          <li>8.00 – Zajtrk brez naglice</li>
          <li>9.00–12.00 – Pohod na Goli vrh ali možnost uporabe savne</li>
          <li>14.00 – Zaključek in odhod</li>
        </ul>
      </div>
    </div>

    {/* Cena paketa vključuje - image RIGHT */}
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="flex-1">
        <h3 className="font-heading text-3xl text-foreground mb-3 font-bold">Cena paketa vključuje</h3>
        <ul className="space-y-1 list-disc list-inside">
          <li>Dva bralna večera s pogovorom</li>
          <li>Bivanje v dvoposteljni sobi na Šenkovi domačiji</li>
          <li>2× samopostrežni zajtrk</li>
          <li>2× večerjo s štirimi hodi – domača in sezonska kuhinja</li>
          <li>Jutranjo jogo</li>
          <li>Uporabo savne (finske in infrardeče)</li>
          <li>Prostor za počitek in branje</li>
          <li>Dva pohoda po čudoviti okoliški naravi</li>
          <li>Večerno druženje</li>
          <li>Vodenje in organizacijo celotnega programa</li>
          <li>Turistično takso</li>
          <li>Knjižni darilni paket</li>
        </ul>
      </div>
      <div className="w-full md:w-2/5 flex-shrink-0">
        <img
          src={knjizniPaketImage}
          alt="Knjižni darilni paket"
          className="w-full h-64 md:h-80 object-cover rounded-sm"
          loading="lazy"
        />
      </div>
    </div>

    {/* O kraju - full width image */}
    <div>
      <h3 className="font-heading text-3xl text-foreground mb-3 font-bold">O kraju</h3>
      <p>Jezersko je neokrnjena gorenjska dolina z reko Kokro, obdana z Grintovci in drugimi gorami v Kamniško-Savinjskih Alpah. Njena tišina in narava vas bosta očarali in napolnili z energijo.</p>
      <p className="mt-2">Šenkova domačija je kmetija z več kot 500-letno zgodovino. Danes jo s sodobnim konceptom in vizijo vodi družina Karničar, ki z ljubeznijo do narave, dediščine in s prisrčnim gostoljubjem sprejema goste ter z njimi deli zgodbe svojih prednikov.</p>
      <img
        src={jezerskoImage}
        alt="Šenkova domačija na Jezerskem s pogledom na Kamniško-Savinjske Alpe"
        className="w-full rounded-sm mt-4"
        loading="lazy"
      />
    </div>

    {/* Prijava in plačilo */}
    <div>
      <h3 className="font-heading text-3xl text-foreground mb-3 font-bold">Prijava in plačilo</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-lg text-foreground mb-2">A) PLAČILO V ENKRATNEM ZNESKU</h4>
          <p>Celoten znesek se poravna ob prijavi v roku, navedenem na predračunu.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-lg text-foreground mb-2">B) PLAČILO V DVEH OBROKIH</h4>
          <p>Plačilo poteka na naslednji način:</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>prvi obrok ob prijavi</li>
            <li>drugi obrok do 12. 5. 2026</li>
          </ul>
        </div>
        
        <p>Po oddani prijavi prejmete predračun na e-naslov, ki ste ga navedli na prijavnem obrazcu.</p>
      </div>
    </div>
  </div>
);

export default EventSection;
