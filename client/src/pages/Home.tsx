import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock, ArrowRight, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



function FloatingWhatsAppButton({ phone }: { phone: string }) {
  const text = encodeURIComponent(
    "Bonjour, je voudrais des informations sur le séminaire MON TEMPS 2026."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 shadow-xl transition-transform hover:scale-105"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-semibold text-sm">WhatsApp</span>
    </a>
  );
}

const formSchema = z
  .object({
    fullName: z.string().min(2, "Le nom complet est requis."),
    countryCity: z.string().min(2, "Le pays et la ville sont requis."),
    phone: z.string().min(8, "Numéro de téléphone invalide."),
    maritalStatus: z.string().min(1, "La situation matrimoniale est requise."),
    bornAgain: z.enum(["Oui", "Non"], "Veuillez indiquer Oui ou Non."),
    bornAgainYear: z.string().optional(),
    jesusMotivation: z.string().min(10, "Merci de détailler votre motivation (min 10 caractères)."),
    spiritualMentor: z.string().min(2, "Ce champ est requis."),
    localChurch: z.string().min(2, "Ce champ est requis."),
    seminarMotivation: z.string().min(10, "Merci de détailler votre motivation (min 10 caractères)."),
    whatsappTelegram: z.string().min(6, "Veuillez renseigner vos numéros WhatsApp/Telegram."),
  })
  .superRefine((data, ctx) => {
    if (data.bornAgain === "Oui" && (!data.bornAgainYear || data.bornAgainYear.trim().length < 4)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["bornAgainYear"],
        message: "Veuillez préciser l'année de votre nouvelle naissance.",
      });
    }
  });

type FormValues = z.infer<typeof formSchema>;

function FloatingWhatsAppMobile({ phone }: { phone: string }) {
  const text = encodeURIComponent(
    "Bonjour, je souhaite avoir des informations sur le séminaire MON TEMPS 2026."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      className="md:hidden fixed bottom-4 right-4 z-[80] inline-flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 shadow-xl"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold">WhatsApp</span>
    </a>
  );
}

export default function Home() {
  const WHATSAPP_NUMBER = "237657456623"; // <- Remplace par ton numéro (sans +)
  const TELEGRAM_GROUP_URL = import.meta.env.VITE_TELEGRAM_GROUP_URL || "https://t.me/+votre_lien_du_groupe";

  const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting, isSubmitSuccessful },
} = useForm<FormValues>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    fullName: "",
    countryCity: "",
    phone: "",
    maritalStatus: "",
    bornAgain: "Non",
    bornAgainYear: "",
    jesusMotivation: "",
    spiritualMentor: "",
    localChurch: "",
    seminarMotivation: "",
    whatsappTelegram: "",
  },
});

const onSubmit = (data: FormValues) => {
  const message = `Bonjour, je souhaite m'inscrire au séminaire MON TEMPS.

1) Nom(s) & Prénom(s): ${data.fullName}
2) Pays et Ville de résidence: ${data.countryCity}
3) Téléphone: ${data.phone}
4) Situation matrimoniale: ${data.maritalStatus}
5) Déjà né(e) de nouveau ?: ${data.bornAgain}
   Année (si oui): ${data.bornAgainYear || "Non précisée"}
6) Motivation à recevoir Jésus-Christ: ${data.jesusMotivation}
7) Encadreur spirituel / faiseur de disciple: ${data.spiritualMentor}
8) Membre d'une église locale ?: ${data.localChurch}
9) Motivation pour prendre part au séminaire: ${data.seminarMotivation}
10) Numéros WhatsApp et Telegram: ${data.whatsappTelegram}

Merci.`;

  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(link, "_blank");
};


  const eventInfo = useMemo(
    () => ({
      date: "Samedi 23 mai 2026",
      time: "15h00",
      location: "Douala (adresse communiquée après inscription)",
      price: "2 500 FCFA",
    }),
    []
  );
function CountdownTimer() {
  // Date de l'événement: 23 mai 2026 à 15:00 (heure locale)
  const targetDate = useMemo(() => new Date("2026-05-23T15:00:00"), []);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (timeLeft.expired) {
    return (
      <div className="bg-yellow-100 text-yellow-900 px-4 py-3 rounded-lg text-sm font-medium">
        L’événement a démarré 🚀
      </div>
    );
  }

   return (
    <div className="grid grid-cols-4 gap-2 max-w-md">
      <TimeBox label="Jours" value={timeLeft.days} />
      <TimeBox label="Heures" value={timeLeft.hours} />
      <TimeBox label="Min" value={timeLeft.minutes} />
      <TimeBox label="Sec" value={timeLeft.seconds} />
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-lg py-3 text-center">
      <div className="text-2xl md:text-3xl font-black text-yellow-300">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs uppercase tracking-wide text-white/80">{label}</div>
    </div>
  );
}

function getTimeLeft(targetDate: Date) {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance <= 0) {
    return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return { expired: false, days, hours, minutes, seconds };
}

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center">
              <Clock className="w-5 h-5 text-yellow-400" />
            </div>
            <span className="font-bold text-lg text-blue-900">Mon Temps</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#infos" className="text-sm font-medium hover:text-blue-700 transition">Infos</a>
            <a href="#about" className="text-sm font-medium hover:text-blue-700 transition">À propos</a>
            <a href="#speaker" className="text-sm font-medium hover:text-blue-700 transition">Orateur</a>
            <a href="#telegram" className="text-sm font-medium hover:text-blue-700 transition">Telegram</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-blue-700 transition">Témoignages</a>
            <a href="#register" className="text-sm font-medium hover:text-blue-700 transition">Inscription</a>
          </nav>
        </div>
      </header>

      {/* HERO + CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="mt-8">
         <p className="text-sm text-white/80 mb-3">Début du séminaire dans :</p>
         <CountdownTimer />
        </div>
          
          <div className="max-w-3xl">
            <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full mb-5">
              Séminaire Biblique Mai 2026
            </span>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              MON TEMPS 2026
              <br />
              <span className="text-yellow-400">Conquérir • Terrasser • Dominer</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-100/90 leading-relaxed mb-8 max-w-2xl">
              Un séminaire biblique pratique pour reprendre le contrôle de ton temps,
              vaincre la procrastination et marcher dans ta destinée.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold px-7 py-6"
                onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
              >
                Je réserve ma place <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-7 py-6"
                onClick={() => {
                  const text = encodeURIComponent(
                    "Bonjour, je voudrais des informations sur le séminaire MON TEMPS 2026."
                  );
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
                }}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Parler sur WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

{/* FLYER OFFICIEL */}
<section id="flyer" className="py-12 md:py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-blue-700 mb-2">
        Programme officiel
      </p>
      <h2 className="text-2xl md:text-3xl font-black text-blue-950 mb-4">
        Flyer du Séminaire MON TEMPS 2026
      </h2>
      <p className="text-slate-600 mb-8">
        Retrouvez toutes les informations officielles du séminaire.
      </p>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 md:p-4 shadow-sm">
        <img
          src="/images/flyer-seminaire-2026.jpg"
          alt="Flyer officiel du séminaire biblique Mon Temps 2026"
          className="w-full h-auto rounded-xl shadow-md"
          loading="lazy"
          width={1400}
          height={2000}
        />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="#register"
          className="inline-flex items-center justify-center rounded-lg bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 font-semibold transition"
        >
          Je réserve ma place
        </a>

        <a
          href="/docs/flyer-seminaire-2026.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-800 px-6 py-3 font-semibold transition"
        >
          Télécharger le flyer (PDF)
        </a>
      </div>
    </div>
  </div>
</section>


      {/* BLOC INFOS PRATIQUES */}
      <section id="infos" className="py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 mb-8 text-center">
            Infos pratiques
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <Card className="p-5 border-slate-200 shadow-sm">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-blue-800 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-500">Date</p>
                  <p className="font-semibold">{eventInfo.date}</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 border-slate-200 shadow-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-800 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-500">Heure</p>
                  <p className="font-semibold">{eventInfo.time}</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 border-slate-200 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-800 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-500">Lieu</p>
                  <p className="font-semibold">{eventInfo.location}</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 border-slate-200 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-800 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-500">Participation</p>
                  <p className="font-semibold">{eventInfo.price}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* GROUPE TELEGRAM */}
      <section id="telegram" className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
            <div className="grid md:grid-cols-[1.2fr_0.8fr] items-center">
              <div className="p-6 md:p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-800 mb-4">
                  <Send className="w-4 h-4" />
                  Communauté Telegram
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-blue-950 mb-3">
                  Rejoignez le groupe Telegram du séminaire
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Accédez aux annonces officielles, aux rappels importants et aux informations pratiques avant le jour du séminaire.
                </p>
                <a
                  href={TELEGRAM_GROUP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 font-semibold transition"
                >
                  <Send className="w-5 h-5" />
                  Rejoindre le groupe Telegram
                </a>
              </div>

              <div className="bg-gradient-to-br from-sky-500 to-blue-900 p-6 md:p-10 text-white h-full flex items-center">
                <div>
                  <p className="text-sm uppercase tracking-widest text-sky-100 mb-2">Pourquoi rejoindre ?</p>
                  <ul className="space-y-3 text-sm md:text-base text-white/90">
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-300 shrink-0" />Recevoir les rappels avant le séminaire.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-300 shrink-0" />Obtenir les détails pratiques en temps réel.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-300 shrink-0" />Rester connecté avec les participants.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section id="about" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-6">
              Qui est concerné par ce Séminaire ?
            </h2>
              
           <p className="text-slate-700 leading-relaxed text-lg"> 
              ▪️Ceux qui veulent racheter le temps.
         </p>
                <p className="text-slate-700 leading-relaxed text-lg"> 
            ▪️Ceux qui veulent connaître une croissance tant dans leur relation avec Dieu que dans chaque domaine de leur vie.
         </p>
                <p className="text-slate-700 leading-relaxed text-lg"> 
             ▪️Ceux qui veulent rompre avec les mauvaises habitudes, la négligence, la procrastination, et marquer chaque jour des pas vers leur destinée
           </p>
                <p className="text-slate-700 leading-relaxed text-lg"> 
            ▪️Ceux qui sont las de répéter les mêmes erreurs et formuler chaque année les mêmes vœux et les mêmes objectifs.
               </p>
                  <p className="text-slate-700 leading-relaxed text-lg"> 
                ▪️Ceux qui veulent accorder leurs priorités,ce qui occupe l'essentiel de leur temps et  leurs ressources, avec l'agenda de Dieu pour leur vie.
               </p>
                  <p className="text-slate-700 leading-relaxed text-lg"> 
               ▪️Ceux qui veulent apprendre à faire le tri entre ce qui est utile,  ce qui est futile et ce qui  est indispensable.</p>

                <p className="text-slate-700 leading-relaxed text-lg"> 
               ▪️Ceux qui veulent rattraper le retard qu'il accusent dans  plusieurs domaines de leurs vies</p>
              <p className="text-slate-700 leading-relaxed text-lg"> 
                ▪️Ceux qui veulent honorer Dieu à travers la gestion de leur temps
          ▪️Etc.
                </p>
           
          </div>
        </div>
      </section>

 {/* L'ORATEUR */} 
     <section id="speaker" className="py-16 md:py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center">
        <img
          src="/images/revbiteck-de-bong.bmp" 
          alt="Apôtre Esaïe C. BITECK DE BONG"
          className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
        />
      </div>

      <div>
        <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-2">
          Votre orateur
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">
          Esaïe Charly BITECK DE BONG
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          La personne : Marié en 2007 à Elisabeth Babette avec 04 enfants, résidant à Douala.
          Leader du Centre Chrétien de Réveil Spirituel (CECRES).
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Auteur de plusieurs livres : 
         <br/>▪️Comprendre et vivre le mariage selon Dieu,
         <br/>▪️Vaincre les ennemis de votre paix
         <br/>▪️Mon Guide de croissance spirituelle 
        <br/>▪️Les Guides Pratiques du disciple(Revenons au Seigneur,La Cause de certains de nos échecs,... )
         <br/>▪️Les clés de la victoire
        <br/>▪️Etc.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
              Promoteur de plusieurs initiatives   : 
         <br/>▪️Le journal Le Conseiller
         <br/>▪️L'émission radio La Minute du Conseiller(LMC) – Chaque Samedi 09h15-RBN
         <br/>▪️Le magazine Le Coin du Réveil (LCR)
         <br/>▪️ ECODIS (Ecole des Disciple) : www.facebook.com/ecodisciples , Emission chaque Jeudi 19h30 sur RBN
          <br/>▪️Etc.

        </p>

        <a
          href="#register"
          className="inline-flex items-center rounded-lg bg-blue-900 hover:bg-blue-800 text-white px-5 py-3 font-semibold transition"
        >
          Réserver ma place
        </a>
      </div>
    </div>
  </div>
</section>

      {/* TÉMOIGNAGES */}
      <section id="testimonials" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-10 text-center">
            Témoignages du Seminaire de Mars 2026
          </h2>

          <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            <Card className="p-6 border-slate-200 shadow-sm">
              <p className="text-slate-700 italic mb-4">
                “J’ai appris à organiser mes journées avec discipline et paix.”
              </p>
              <p className="font-semibold text-blue-900">— Sarah M.</p>
            </Card>

            <Card className="p-6 border-slate-200 shadow-sm">
              <p className="text-slate-700 italic mb-4">
                “Le contenu était profond, concret et applicable immédiatement.”
              </p>
              <p className="font-semibold text-blue-900">— Jonathan K.</p>
            </Card>

            <Card className="p-6 border-slate-200 shadow-sm">
              <p className="text-slate-700 italic mb-4">
                “Ce séminaire m’a aidé à sortir de la procrastination.”
              </p>
              <p className="font-semibold text-blue-900">— Grâce T.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FORMULAIRE WHATSAPP */}
      <section id="register" className="py-16 md:py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-black text-blue-950 mb-2">
              Réserver ma place
            </h2>
            <p className="text-slate-600 mb-6">
              Renseignez vos informations puis cliquez sur “Envoyer sur WhatsApp”.
            </p>

         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
             <label className="block text-sm font-medium mb-1">Nom(s) & Prénom(s) *</label>
             <input {...register("fullName")} className="w-full h-11 rounded-lg border border-slate-300 px-3" />
             {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName.message}</p>}
      </div>

       <div>
            <label className="block text-sm font-medium mb-1">Pays et Ville de résidence *</label>
            <input {...register("countryCity")} className="w-full h-11 rounded-lg border border-slate-300 px-3" />
            {errors.countryCity && <p className="text-sm text-red-600 mt-1">{errors.countryCity.message}</p>}
      </div>

      <div>
          <label className="block text-sm font-medium mb-1">Téléphone *</label>
          <input {...register("phone")} className="w-full h-11 rounded-lg border border-slate-300 px-3" />
           {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
     </div>
    
    <div>
        <label className="block text-sm font-medium mb-1">Situation matrimoniale *</label>
       <select {...register("maritalStatus")} className="w-full h-11 rounded-lg border border-slate-300 px-3 bg-white">
         <option value="">Sélectionner</option>
         <option value="Célibataire">Célibataire</option>
         <option value="Marié(e)">Marié(e)</option>
         <option value="Divorcé(e)">Divorcé(e)</option>
         <option value="Veuf(ve)">Veuf(ve)</option>
      </select>
    {errors.maritalStatus && <p className="text-sm text-red-600 mt-1">{errors.maritalStatus.message}</p>}
    </div>

   <div>
      <label className="block text-sm font-medium mb-1">
      Êtes-vous déjà né(e) de nouveau ? Si oui en quelle année ? *
    </label>
    <div className="grid sm:grid-cols-2 gap-3">
      <select {...register("bornAgain")} className="w-full h-11 rounded-lg border border-slate-300 px-3 bg-white">
        <option value="Oui">Oui</option>
        <option value="Non">Non</option>
      </select>
      <input {...register("bornAgainYear")} placeholder="Année (si oui)" className="w-full h-11 rounded-lg border border-slate-300 px-3" />
    </div>
    {(errors.bornAgain || errors.bornAgainYear) && (
      <p className="text-sm text-red-600 mt-1">
        {errors.bornAgain?.message || errors.bornAgainYear?.message}
      </p>
    )}
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
      Qu'est-ce qui vous a motivé à recevoir Jésus-Christ comme Seigneur et Sauveur personnel ? *
    </label>
    <textarea {...register("jesusMotivation")} className="w-full min-h-[100px] rounded-lg border border-slate-300 px-3 py-2" />
    {errors.jesusMotivation && <p className="text-sm text-red-600 mt-1">{errors.jesusMotivation.message}</p>}
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
      Avez-vous un encadreur spirituel personnel ou faiseur de disciple ? *
    </label>
    <textarea {...register("spiritualMentor")} className="w-full min-h-[90px] rounded-lg border border-slate-300 px-3 py-2" />
    {errors.spiritualMentor && <p className="text-sm text-red-600 mt-1">{errors.spiritualMentor.message}</p>}
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
      Êtes-vous membre d'une église locale ? Si oui communiquer dénomination, contact et nom de votre leader spirituel *
    </label>
    <textarea {...register("localChurch")} className="w-full min-h-[100px] rounded-lg border border-slate-300 px-3 py-2" />
    {errors.localChurch && <p className="text-sm text-red-600 mt-1">{errors.localChurch.message}</p>}
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
      Qu'est-ce qui vous motive à prendre part à ce séminaire ? *
    </label>
    <textarea {...register("seminarMotivation")} className="w-full min-h-[100px] rounded-lg border border-slate-300 px-3 py-2" />
    {errors.seminarMotivation && <p className="text-sm text-red-600 mt-1">{errors.seminarMotivation.message}</p>}
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Vos numéros WhatsApp et Telegram *</label>
    <input {...register("whatsappTelegram")} className="w-full h-11 rounded-lg border border-slate-300 px-3" />
    {errors.whatsappTelegram && <p className="text-sm text-red-600 mt-1">{errors.whatsappTelegram.message}</p>}
  </div>

  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full h-12 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold disabled:opacity-60"
  >
    {isSubmitting ? "Envoi..." : "Envoyer sur WhatsApp"}
  </button>

  {isSubmitSuccessful && (
    <div className="rounded-lg bg-green-50 border border-green-200 p-3 text-green-800 text-sm">
      Formulaire valide ✅ Finalisez l’envoi dans WhatsApp.
    </div>
  )}
</form>
          </div>
        </div>
      </section>

      <FloatingWhatsAppButton phone="237657456623" />
    </div>
  );
}