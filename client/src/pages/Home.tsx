import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";

export default function Home() {
  const WHATSAPP_NUMBER = "237657456623"; // <- Remplace par ton numéro (sans +)

  const [formData, setFormData] = useState({
    fullName: "",
  countryCity: "",
  phone: "",
  maritalStatus: "",
  bornAgain: "",
  bornAgainYear: "",
  jesusMotivation: "",
  spiritualMentor: "",
  localChurch: "",
  seminarMotivation: "",
  whatsappTelegram: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const eventInfo = useMemo(
    () => ({
      date: "Samedi 23 mai 2026",
      time: "15h00",
      location: "Douala (adresse communiquée après inscription)",
      price: "2 500 FCFA",
    }),
    []
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSubmitted(false);
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Nettoyage des erreurs au fil de la saisie
    if (name === "name" && value.trim().length > 1) {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
    if (name === "phone" && value.trim().length >= 8) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  

  const validateForm = () => {
     const requiredFields: Array<keyof typeof formData> = [
    "fullName",
    "countryCity",
    "phone",
    "maritalStatus",
    "bornAgain",
    "jesusMotivation",
    "spiritualMentor",
    "localChurch",
    "seminarMotivation",
    "whatsappTelegram",
  ];

  for (const field of requiredFields) {
    if (!formData[field]?.trim()) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return false;
    }
  }

  // bornAgainYear requis si bornAgain = oui
  if (formData.bornAgain.toLowerCase() === "oui" && !formData.bornAgainYear.trim()) {
    alert("Veuillez préciser l'année de votre nouvelle naissance.");
    return false;
  }

  return true;
  };

  const buildWhatsAppLink = () => {
  const message = `Bonjour, je souhaite m'inscrire au séminaire MON TEMPS.

1) Nom(s) & Prénom(s): ${formData.fullName}
2) Pays et Ville de résidence: ${formData.countryCity}
3) Téléphone: ${formData.phone}
4) Situation matrimoniale: ${formData.maritalStatus}
5) Déjà né(e) de nouveau ?: ${formData.bornAgain}
   Année (si oui): ${formData.bornAgainYear || "Non précisée"}
6) Motivation à recevoir Jésus-Christ: ${formData.jesusMotivation}
7) Encadreur spirituel / faiseur de disciple: ${formData.spiritualMentor}
8) Membre d'une église locale ?: ${formData.localChurch}
9) Motivation pour prendre part au séminaire: ${formData.seminarMotivation}
10) Numéros WhatsApp et Telegram: ${formData.whatsappTelegram}

Merci.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitted(true);
    window.open(buildWhatsAppLink(), "_blank");
  };

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
            <a href="#infos" className="text-sm font-medium hover:text-blue-700 transition">
              Infos
            </a>
            <a href="#about" className="text-sm font-medium hover:text-blue-700 transition">
              À propos
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-blue-700 transition">
              Témoignages
            </a>
            <a href="#register" className="text-sm font-medium hover:text-blue-700 transition">
              Inscription
            </a>
          </nav>
        </div>
      </header>

      {/* HERO + CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full mb-5">
              Séminaire Biblique 2026
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

      {/* À PROPOS */}
      <section id="about" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-6">
              Pourquoi participer ?
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

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
    <label className="block text-sm font-medium mb-1">Nom(s) & Prénom(s) *</label>
    <input
      type="text"
      name="fullName"
      value={formData.fullName}
      onChange={handleInputChange}
      className="w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Ex: NOM Prénom"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Pays et Ville de résidence *</label>
    <input
      type="text"
      name="countryCity"
      value={formData.countryCity}
      onChange={handleInputChange}
      className="w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Ex: Cameroun, Douala"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Téléphone *</label>
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleInputChange}
      className="w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Ex: 6XXXXXXXX"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Situation matrimoniale *</label>
    <select
      name="maritalStatus"
      value={formData.maritalStatus}
      onChange={handleInputChange}
      className="w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-blue-300 bg-white"
      required
    >
      <option value="">Sélectionner</option>
      <option value="Célibataire">Célibataire</option>
      <option value="Marié(e)">Marié(e)</option>
      <option value="Divorcé(e)">Divorcé(e)</option>
      <option value="Veuf(ve)">Veuf(ve)</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
      Êtes-vous déjà né(e) de nouveau ? Si oui en quelle année ? *
    </label>
    <div className="grid sm:grid-cols-2 gap-3">
      <select
        name="bornAgain"
        value={formData.bornAgain}
        onChange={handleInputChange}
        className="w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-blue-300 bg-white"
        required
      >
        <option value="">Sélectionner</option>
        <option value="Oui">Oui</option>
        <option value="Non">Non</option>
      </select>

      <input
        type="text"
        name="bornAgainYear"
        value={formData.bornAgainYear}
        onChange={handleInputChange}
        className="w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-blue-300"
        placeholder="Année (si oui), ex: 2019"
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
      Qu'est-ce qui vous a motivé à recevoir Jésus-Christ comme Seigneur et Sauveur personnel ? *
    </label>
    <textarea
      name="jesusMotivation"
      value={formData.jesusMotivation}
      onChange={handleInputChange}
      className="w-full min-h-[100px] rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Votre réponse..."
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
      Avez-vous un encadreur spirituel personnel ou faiseur de disciple ? *
    </label>
    <textarea
      name="spiritualMentor"
      value={formData.spiritualMentor}
      onChange={handleInputChange}
      className="w-full min-h-[90px] rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Nom, contact, précisions..."
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
      Êtes-vous membre d'une église locale ? Si oui communiquer dénomination, contact et nom de votre leader spirituel *
    </label>
    <textarea
      name="localChurch"
      value={formData.localChurch}
      onChange={handleInputChange}
      className="w-full min-h-[110px] rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Ex: Oui - Église..., contact..., leader..."
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
      Qu'est-ce qui vous motive à prendre part à ce séminaire ? *
    </label>
    <textarea
      name="seminarMotivation"
      value={formData.seminarMotivation}
      onChange={handleInputChange}
      className="w-full min-h-[100px] rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Votre motivation..."
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Vos numéros WhatsApp et Telegram *</label>
    <input
      type="text"
      name="whatsappTelegram"
      value={formData.whatsappTelegram}
      onChange={handleInputChange}
      className="w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Ex: WhatsApp: +237..., Telegram: +237..."
      required
    />
  </div>

              <Button type="submit" size="lg" className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-bold">
                <MessageCircle className="mr-2 w-5 h-5" />
                Envoyer sur WhatsApp
              </Button>
            </form>

            {submitted && (
              <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-3 text-green-800 text-sm">
                Merci ! Votre demande a été préparée. Finalisez l’envoi dans WhatsApp ✅
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}