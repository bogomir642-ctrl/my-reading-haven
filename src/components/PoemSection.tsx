import { useState } from "react";

interface Poem {
  text: string;
  author: string;
  translator?: string;
}

const poems: Poem[] = [
  {
    text: "Ko pride knjiga,\nmalo polistaš,\nsamo malo.\nJutro je zgodnje\nin dan neprebran.\nPolistaš recimo prvo stran,\ns pogledom mimogrede,\nošvrkneš drugo,\nse malce ustaviš\nna tretji in tam\nte nenadoma spotaknejo stihi.",
    author: "Bina Štampe Žmavc",
  },
  {
    text: "je med jeziki, vsemi, ugrez teme,\nčrna reka, ki vpija zgodbe in besede,\njihpreobraža? stavki se morajo\n\ntam sleči, naučiti bresti, broditi,\nplavati, ne izgubiti spomina, ki jim\ngnezdi v telesu, skrivnega jedra.\nbo modrina orlice, ko doseže drugi\nbreg, vijolična, in bergamotka, hruška,\ncimetasta, sladka? bo moj linj\nostal brez plavuti na svetlobi\nnovega jezika? se bo moral naučiti\nplaziti ali hoditi pokonci? se jezik\nzna oprijeti drugega jezika ali ga\nle pahniti od sebe? lahko beseda,\nvsaka, tvegano prestopi na drugo\nstran, verjame, da je neranljiva,\nv smoli okopana in prekaljena?",
    author: "Maja Haderlap",
    translator: "prevajanje",
  },
  {
    text: "Vesel moj dom je. Ko se pozlatijo\nv jesenskem soncu semiške gorice,\nso lepe kakor pravljične kraljice,\npripravljene za véliko gostijo.\nIn lep moj dom je.\nKadar se razcveta spomladi breskev,\nrožnato zardela,\ntakrat so te gorice kot dekleta,\nzaljubljena, vihrava in vesela.\nMoj rodni dom - bogat,\nčeprav si gmajna!\nSpomladi, ko razlije se v obzorje\npo vsej dolini snežnobelo morje,\nje kot en sam cvet\nbéla Bela Krájina.\nMoj rodni dom!\nZa vse, kar nosim v sebi\npo tej sivini zemlje od mladosti,\nza vso ljubezen in ves krč bridkosti,\ndolžan sem skromno hvalo tudi tebi.",
    author: "Lojze Krakar",
  },
  {
    text: "Ti se meni nikar ne zahvaljuj,\ntako kot se ne zahvaljuješ\nudarcem svojega srca,\nki klešejo obraz tvojega življenja.\nJaz pa se bom tebi zahvalil,\nkerjem, kaj ti dolgujem.\nNaj se ti zahvalim to pesmijo.",
    author: "Janis Ristos",
    translator: "Hvala",
  },
  {
    text: "Ko kup oblakov je nebo prekril,\nsvet postal je siv, zadušljiv,\nda sonca lačne,\nmrke in mračne\npostale so tudi naše oči.\nSkoz njih sivina zleze v nas,\nda siv postane še naš glas.\nKer sonca videt ni nikjer,\nod jutra čakamo večer,\nko se prižgejo vsaj luči.\nA to ni to in z jutrom spet\nsivina vrne se v naš svet.\nČe v takem nočemo živet,\nlahko potonemo v temo,\nlahko pa v samih sebi gremo\ndo svoje notranje luči\nin v času mrkih, mračnih dni,\nko zdi se, kot da sonca ni nad nami,\nsonce postanemo sami.",
    author: "Andrej Rozman Roza",
  },
  {
    text: "Ljubezni to pesem in temu,\nkar klije v podobi vsega,\nčesar ne moreš zajeti\nin čemur ne prideš do dna,\nigram otrok in ljubimcev,\nvečerom ob knjigah,\nlasem in krilom,\nki z vetrom vršijo,\nvsakdanjim in drobnim stvarem\nz vonjavami pražene kave,\nz okusom bažiljke in soli,\njutranjim klicem na trgu, deževju,\nki pota srebri,\nin vsemu,\nv kar sproti odmiram,\nza kar še ne najdem besed,\nkar plameni in presnavlja\nin česar ne vklenemo v red.",
    author: "Miroslav Košuta",
  },
  {
    text: "V dneh samote me išči med stvarmi,\nki se morajo iz ljubezni dati.\nV pomladnem spreletanju ptic,\nv oblakih in večerni zarji,\nkrvaveči,\nko se spaja s soncem.\nV divjanju vetrov,\nprepletajočih se med sabo\nin v vejah dreves,\nki so objemajoče roke.\nV vsem me najdeš.\nV vseh stvareh,\nki se morejo iz ljubezni dati\nin iz ljubezni jemljejo, me išči.\nPovsod sem jaz, je moja ljubezen.",
    author: "Mila Kačič",
  },
  {
    text: "Nočem izgubiti nobene niti\niz zapletenega brokata te sreče.\nHočem se spominjati vsega.\nRavno zato ležim budna, zaspana,\nampak ne dovolj,\nda bi odnehala.\nRavnokar, trenutek izpred let:\nsvetloba zgodnjega jutra,\nvešči, nežni gib tvoje roke,\nki sega po meni.",
    author: "Mary Oliver",
    translator: "Prevedla: Jana Unuk",
  },
  {
    text: "Starca zelo lepega srečam\nNa vlaku Vršac-Beograd\nSamo do tretje postaje se pelje\nToliko da se\nNagleda žita ob poti\nSkoz odprto okno gleda\nTu in tam pokima z glavo\nIn ves čas leti\nOdet v zlate latí\nNad žitnimi polji\nS prvim vlakom se bo vrnil v Vršac\nV žepu bo imel za pest zrnja\nIn dva klasa zataknjena za klobuk",
    author: "Vasko Popa",
    translator: "Prevedel: Peter Svetina",
  },
  {
    text: "Svet je velik, spraviš ga\nv okno, ki gleda na morje.\nMorje je veliko, spraviš ga\nv posteljo in na blazino ljubezni.\nLjubezen je velika in spraviš jo\nv kratek prostor poljuba.",
    author: "Carlos Drummond de Andrade",
    translator: "prevedla: Mojca Medvešek",
  },
];

const PoemSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPoem = poems[currentIndex];

  const nextPoem = () => {
    setCurrentIndex((prev) => (prev + 1) % poems.length);
  };

  const prevPoem = () => {
    setCurrentIndex((prev) => (prev - 1 + poems.length) % poems.length);
  };

  return (
    <section id="pesem-na-teden" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-4 text-center">
          Pesem na teden
        </h2>
        <p className="text-center text-muted-foreground font-body text-sm mb-12">
          Vsak teden prejemnikom pošljem pesem po svoji izbiri. Brez razlage, brez literarnega teoretiziranja.
        </p>

        {/* Navigation - Top */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={prevPoem}
            className="p-2 hover:bg-accent rounded-sm transition-colors"
            aria-label="Prejšnja pesem"
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {poems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border w-2 hover:bg-muted-foreground"
                }`}
                aria-label={`Poem ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextPoem}
            className="p-2 hover:bg-accent rounded-sm transition-colors"
            aria-label="Naslednja pesem"
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Poem Card */}
        <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-10 shadow-sm">
          <div className="min-h-96 flex flex-col justify-between">
            {/* Poem Text */}
            <div className="mb-8">
              <p className="font-body text-base md:text-lg leading-relaxed text-foreground whitespace-pre-line font-light italic">
                {currentPoem.text}
              </p>
            </div>

            {/* Author Attribution */}
            <div className="border-t border-border pt-6">
              <p className="text-right text-muted-foreground font-body text-sm">
                <span className="font-medium text-foreground">{currentPoem.author}</span>
                {currentPoem.translator && (
                  <>
                    <br />
                    <span className="text-xs">{currentPoem.translator}</span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-5 text-muted-foreground font-body text-base leading-relaxed font-light text-center border-t border-border pt-10">
          <p className="text-foreground font-normal mt-8">
            Če želiš prejemati pesem na teden, mi piši na Viber:
          </p>
          <p className="text-2xl font-heading text-primary font-medium">
            031 718 023
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoemSection;
