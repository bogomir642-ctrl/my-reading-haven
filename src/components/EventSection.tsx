import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EventSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="dogodek" className="section-padding bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-4 text-center">
          Bralni vikend odklop
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 text-lg">
          15.–17. maj 2026 · Šenkova domačija, Jezersko
        </p>

        <div className="space-y-5 text-muted-foreground font-body text-base leading-relaxed font-light mb-10">
          <p>
            Bralni vikend odklop je namenjen vsem, ki radi berete, in vsem, ki bi si to želeli, a vam primanjkuje časa, umirjenosti ali idej. Vsem, ki preprosto potrebujete odklop od hitečega vsakdanjika in zaslonov.
          </p>
          <p>
            Obljubljam vam sprejemajoče vzdušje, v katerem se pogovor o knjigah (in pravzaprav o življenju) zgodi spontano in brez pritiska. Knjig iz programa vam ni treba prebrati vnaprej in lahko se nam pridružite brez pričakovanj.
          </p>
          <p className="text-foreground font-normal">
            Cena: 390,00 EUR · Število mest je omejeno.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://docs.google.com/forms/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-sm font-body text-sm tracking-widest uppercase text-center hover:opacity-90 transition-opacity"
          >
            Prijava
          </a>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="inline-block border border-primary text-primary px-8 py-3 rounded-sm font-body text-sm tracking-widest uppercase hover:bg-primary/5 transition-colors">
                Preberi več
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background">
              <DialogHeader>
                <DialogTitle className="font-heading text-3xl font-medium text-foreground">
                  Bralni vikend odklop
                </DialogTitle>
              </DialogHeader>
              <EventDetails />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

const EventDetails = () => (
  <div className="space-y-6 text-muted-foreground font-body text-sm leading-relaxed font-light pt-2">
    <div>
      <h3 className="font-heading text-xl text-foreground mb-3">Komu je namenjen?</h3>
      <ul className="space-y-2 list-none">
        <li>Vsem, ki radi berete, in vsem, ki bi si to želeli, a vam primanjkuje časa, umirjenosti ali idej.</li>
        <li>Vsem, ki preprosto potrebujete odklop od hitečega vsakdanjika in zaslonov.</li>
        <li>Vsem, ki ste radovedni in odprti za nova obzorja, ne glede na to, ali ste v zadnjem letu prebrali kakšno knjigo.</li>
        <li>Vsem, ki se prijavljate sami in malo oklevate – ne skrbite, hitro boste navezali stike in postali del našega plemena navdušencev nad branjem.</li>
      </ul>
      <p className="mt-3">Knjig iz programa vam ni treba prebrati vnaprej in lahko se nam pridružite brez pričakovanj. Prisrčno dobrodošli vsi!</p>
    </div>

    <div>
      <h3 className="font-heading text-xl text-foreground mb-3">Program</h3>

      <h4 className="font-medium text-foreground mt-4 mb-2">Petek, 15. maja</h4>
      <ul className="space-y-1">
        <li>16.00 – Dobrodošlica s kavo in prigrizkom, prevzem knjižnega darilnega paketa</li>
        <li>16.30 – Uvodni bralni pogovor, spoznavanje</li>
        <li>18.00 – Večerja in druženje</li>
      </ul>

      <h4 className="font-medium text-foreground mt-4 mb-2">Sobota, 16. maja</h4>
      <ul className="space-y-1">
        <li>7.00 – Enostavna jutranja joga za lep začetek dneva</li>
        <li>8.00 – Zajtrk brez naglice</li>
        <li>9.00–12.00 – Pohod po dolini Ravenske Kočne</li>
      </ul>
      <p className="mt-2 italic">Popoldne je prosto za sproščanje v savni, uživanju v branju, za sprehod ob Kokri, zanimiv pogovor ali sanjarjenje v tišini.</p>
      <ul className="mt-2">
        <li>16.30 – Drugi bralni večer – tokrat v družbi z gostom presenečenja</li>
      </ul>

      <h4 className="font-medium text-foreground mt-4 mb-2">Nedelja, 17. maja</h4>
      <ul className="space-y-1">
        <li>7.00 – Enostavna jutranja joga za lep začetek dneva</li>
        <li>8.00 – Zajtrk brez naglice</li>
        <li>9.00–12.00 – Pohod na Goli vrh ali možnost uporabe savne</li>
        <li>14.00 – Zaključek in odhod</li>
      </ul>
    </div>

    <div>
      <h3 className="font-heading text-xl text-foreground mb-3">Cena paketa vključuje</h3>
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

    <div>
      <h3 className="font-heading text-xl text-foreground mb-3">O kraju</h3>
      <p>Jezersko je neokrnjena gorenjska dolina z reko Kokro, obdana z Grintovci in drugimi gorami v Kamniško-Savinjskih Alpah. Njena tišina in narava vas bosta očarali in napolnili z energijo.</p>
      <p className="mt-2">Šenkova domačija je kmetija z več kot 500-letno zgodovino. Danes jo s sodobnim konceptom in vizijo vodi družina Karničar, ki z ljubeznijo do narave, dediščine in s prisrčnim gostoljubjem sprejema goste ter z njimi deli zgodbe svojih prednikov.</p>
    </div>

    <div>
      <h3 className="font-heading text-xl text-foreground mb-3">Prijava in plačilo</h3>
      <p>Rok za prijave: <strong>16. 4. 2026</strong></p>
      <p>Informacije na: <strong>031 718 023</strong></p>
      <div className="mt-3">
        <p>1. akontacija: 150,00 EUR (najkasneje do 16. 4. 2026)</p>
        <p>2. končno plačilo: 240,00 EUR (najkasneje do 12. 5. 2026)</p>
      </div>
      <div className="mt-3 text-xs">
        <p>Prijava je potrjena z nakazilom akontacije na račun Centra Connect, Alenka Polajnar Gantar, s. p.</p>
        <p>TRR: SI56 1010 0006 3455 746 · Banka: Intesa Sanpaolo</p>
        <p>SWIFT BIC: BAKOSI2X</p>
      </div>
    </div>
  </div>
);

export default EventSection;
