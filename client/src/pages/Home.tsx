import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Prophetic Energetic Design
 * - Deep blue (primary) + Gold (accent) + Red (urgency)
 * - Dynamic animations and geometric shapes
 * - Bold typography (Montserrat) for display, Open Sans for body
 * - High contrast and energetic feel
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Inscription confirmée pour ${formData.name}!\nNous vous contacterons au ${formData.phone}`);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg text-primary">Mon Temps</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-sm font-medium hover:text-accent transition">À propos</a>
            <a href="#speaker" className="text-sm font-medium hover:text-accent transition">Orateur</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-accent transition">Témoignages</a>
            <a href="#details" className="text-sm font-medium hover:text-accent transition">Détails</a>
            <a href="#register" className="text-sm font-medium hover:text-accent transition">S'inscrire</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with geometric shapes */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663404999049/8Q9dJU8vQqWaPB5zozbVpj/hero-background-QqGm5aYcrSyVcYDxMmBxX6.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="text-sm font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full">
                Séminaire Biblique 2026
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight ">
              MON TEMPS
              <br />
              <span className="bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">
                Une arme pour conquérir
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Terrasser les obstacles • Dominer votre destinée
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-yellow-500 text-primary font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
              >
                S'inscrire Maintenant <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-lg"
              >
                En savoir plus
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">23 Mai</div>
                <p className="text-sm text-white/70">Date de l'événement</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">15H</div>
                <p className="text-sm text-white/70">Heure de début</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">2500F</div>
                <p className="text-sm text-white/70">Inscription</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Flyer Section */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-transparent relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-600 mb-6 text-sm uppercase tracking-widest font-semibold">Le flyer officiel du programme</p>
            <div className="flex justify-center">
              <img
                src="/manus-storage/ECODISSEMINAIREMAI2026_8bbb2d00.jpg"
                alt="Flyer officiel du séminaire biblique Mon Temps"
                className="w-full max-w-2xl h-auto rounded-xl shadow-2xl border-4 border-accent/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-destructive"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 ">
              Pourquoi ce séminaire ?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 border-l-4 border-l-accent bg-gradient-to-br from-white to-blue-50">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  Maîtrisez votre temps
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Apprenez les stratégies bibliques et pratiques pour transformer chaque instant en une opportunité de victoire. Le temps n'est pas une limite, c'est une arme.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-destructive bg-gradient-to-br from-white to-red-50">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  Conquérez votre destinée
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Découvrez comment utiliser le temps pour accomplir votre vision, terrasser les obstacles et dominer dans tous les domaines de votre vie.
                </p>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl border border-primary/20">
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-bold text-primary">Éphésiens 5:16</span> nous exhorte : <em>"Racheter le temps, car les jours sont mauvais."</em> Ce séminaire vous équipera avec des révélations profondes et des outils pratiques pour vivre cette vérité biblique au quotidien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Time Mastery Visual */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-12 text-center ">
              Les trois piliers du pouvoir
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-black text-white">1</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">CONQUÉRIR</h3>
                <p className="text-gray-700">Prenez possession de chaque moment pour avancer vers vos objectifs spirituels et personnels.</p>
              </div>

              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-black text-white">2</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">TERRASSER</h3>
                <p className="text-gray-700">Surmontez la procrastination, les distractions et tous les obstacles qui vous retiennent.</p>
              </div>

              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-destructive to-red-700 flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-black text-white">3</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">DOMINER</h3>
                <p className="text-gray-700">Exercez l'autorité sur les circonstances et accomplissez votre destinée prophétique.</p>
              </div>
            </div>

            {/* Time Mastery Image */}
            <div className="flex justify-center mb-8">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663404999049/8Q9dJU8vQqWaPB5zozbVpj/time-mastery-visual-92iHVfgShnGgRkuBr8UbtQ.webp"
                alt="Time Mastery"
                className="w-full max-w-md h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section id="speaker" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-12 text-center ">
              Votre Orateur
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-2xl blur-2xl opacity-50"></div>
                  <img
                    src="/manus-storage/ECODISSEMINAIREMAI2026_8bbb2d00.jpg"
                    alt="Apôtre Esaïe C. BITECK DE BONG"
                    className="relative w-full max-w-sm h-auto rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-black text-primary mb-3 ">
                  Apôtre Esaïe C. BITECK DE BONG
                </h3>

                <p className="text-lg text-accent font-bold mb-6 uppercase tracking-wide">
                  Disciple de Jésus-Christ • Apôtre
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Avec une révélation profonde sur la gestion divine du temps et une expérience éprouvée dans le ministère apostolique, l'Apôtre Esaïe C. BITECK DE BONG apportera des clés spirituelles et pratiques pour transformer votre vie.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary">Enseignement biblique profond</p>
                      <p className="text-gray-600 text-sm">Révélations ancrées dans la Parole de Dieu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary">Stratégies pratiques</p>
                      <p className="text-gray-600 text-sm">Outils applicables immédiatement dans votre quotidien</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary">Autorité spirituelle</p>
                      <p className="text-gray-600 text-sm">Ministère oint pour la transformation personnelle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-destructive"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mb-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 text-center ">
              Ce que disent les participants
            </h2>
            <p className="text-center text-gray-700 mb-16 text-lg max-w-2xl mx-auto">
              Des centaines de vies transformées par la révélation du temps comme arme spirituelle. Voici leurs histoires.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Testimonial 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-l-accent shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Avant ce séminaire, je perdais mon temps dans des activités improductives. L'Apôtre Esaïe m'a montré comment racheter chaque instant pour accomplir la vision que Dieu a placée dans mon cœur. Ma productivité a augmenté de 300% et ma vie spirituelle s'est transformée."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-yellow-500"></div>
                  <div>
                    <p className="font-bold text-primary">Marie Nkomo</p>
                    <p className="text-sm text-gray-600">Entrepreneur, Douala</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "J'étais pasteur mais je me sentais bloqué dans mon ministère. Ce séminaire m'a équipé avec des stratégies bibliques pour gérer mon temps et celui de mon équipe. Notre église a connu une croissance remarquable et notre impact s'est multiplié."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-700"></div>
                  <div>
                    <p className="font-bold text-primary">Pasteur Jean Talla</p>
                    <p className="text-sm text-gray-600">Leader religieux, Yaoundé</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-l-destructive shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "La procrastination était mon plus grand ennemi. Après le séminaire, j'ai compris que le temps est une arme pour terrasser les obstacles. J'ai lancé mon projet entrepreneurial et aujourd'hui j'aide d'autres à faire de même."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-destructive to-red-700"></div>
                  <div>
                    <p className="font-bold text-primary">David Kamga</p>
                    <p className="text-sm text-gray-600">Jeune entrepreneur, Douala</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Testimonials Row */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 4 */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-l-accent shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Mère de trois enfants et travaillant à temps plein, j'étais débordée. Le séminaire m'a appris à prioriser ce qui compte vraiment et à déléguer efficacement. Maintenant j'ai du temps pour ma famille, mon travail ET mon ministère."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-yellow-500"></div>
                  <div>
                    <p className="font-bold text-primary">Sylvie Ondoua</p>
                    <p className="text-sm text-gray-600">Mère de famille, Douala</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Étudiant en dernière année, j'étais stressé par les examens et l'avenir. Les principes du séminaire m'ont aidé à organiser mes études et à conquérir mes peurs. J'ai réussi mes examens avec distinction et j'ai déjà un emploi assuré."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-700"></div>
                  <div>
                    <p className="font-bold text-primary">Arnaud Biyogo</p>
                    <p className="text-sm text-gray-600">Jeune professionnel, Douala</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-gradient-to-br from-accent/10 to-yellow-50 rounded-lg">
                <p className="text-4xl font-black text-accent mb-2">500+</p>
                <p className="text-gray-700 font-semibold">Participants satisfaits</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary/10 to-blue-50 rounded-lg">
                <p className="text-4xl font-black text-primary mb-2">98%</p>
                <p className="text-gray-700 font-semibold">Taux de satisfaction</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-destructive/10 to-red-50 rounded-lg">
                <p className="text-4xl font-black text-destructive mb-2">1000+</p>
                <p className="text-gray-700 font-semibold">Vies transformées</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="details" className="py-20 bg-gradient-to-b from-blue-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-12 text-center ">
              Détails de l'événement
            </h2>

            {/* Decorative pattern */}
            <div className="mb-12 flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663404999049/8Q9dJU8vQqWaPB5zozbVpj/event-details-accent-BsQFqno7F5psQVvC2PXWJv.webp"
                alt="Decorative Pattern"
                className="w-full max-w-2xl h-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 bg-gradient-to-br from-white to-blue-50 border-2 border-primary/20 hover:border-accent transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <Calendar className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Date</h3>
                    <p className="text-lg text-gray-700 font-semibold">Samedi 23 Mai 2026</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-white to-blue-50 border-2 border-primary/20 hover:border-accent transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Heure</h3>
                    <p className="text-lg text-gray-700 font-semibold">15H00 précises</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-white to-blue-50 border-2 border-primary/20 hover:border-accent transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Lieu</h3>
                    <p className="text-lg text-gray-700 font-semibold">Hôtel Prince de Galles</p>
                    <p className="text-sm text-gray-600">Douala, Cameroun</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-white to-red-50 border-2 border-destructive/20 hover:border-destructive transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <Users className="w-8 h-8 text-destructive flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Inscription</h3>
                    <p className="text-2xl font-black text-destructive">2500 FCFA</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Info */}
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/30">
              <h3 className="text-2xl font-bold text-primary mb-6">Contacts & Inscriptions</h3>
              <div className="space-y-3">
                <p className="text-lg">
                  <span className="font-bold text-primary">WhatsApp:</span>
                  <a href="https://wa.me/237657456623" className="text-accent hover:underline ml-2">
                    +237 657 456 623
                  </a>
                </p>
                <p className="text-lg">
                  <span className="font-bold text-primary">Téléphone:</span>
                  <a href="tel:+237699643971" className="text-accent hover:underline ml-2">
                    +237 699 643 971
                  </a>
                </p>
                <p className="text-lg">
                  <span className="font-bold text-primary">Téléphone:</span>
                  <a href="tel:+237678061560" className="text-accent hover:underline ml-2">
                    +237 678 061 560
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 text-center ">
              Confirmez votre présence
            </h2>
            <p className="text-center text-gray-700 mb-12 text-lg">
              Remplissez le formulaire ci-dessous pour vous inscrire au séminaire. Nous vous contacterons pour confirmer votre participation.
            </p>

            <Card className="p-8 md:p-12 bg-white border-2 border-accent/30 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Numéro WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="+237 6XX XXX XXX"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-primary font-bold text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Confirmer mon inscription
                </Button>

                <p className="text-xs text-gray-600 text-center">
                  En vous inscrivant, vous acceptez de recevoir des informations sur le séminaire.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-4">ECODIS</h4>
                <p className="text-white/80 text-sm">
                  Ecole des Disciples - Équipant les croyants pour le Royaume
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">CECRES</h4>
                <p className="text-white/80 text-sm">
                  Centre Chrétien de Réveil Spirituel - Portail de transformation
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Partenaires</h4>
                <p className="text-white/80 text-sm">
                  La Minute du Conseiller (99.6 FM)<br />
                  Born to Impact
                </p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
              <p>&copy; 2026 Séminaire Biblique "Mon Temps". Tous droits réservés.</p>
              <p className="mt-2">Douala, Cameroun</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
