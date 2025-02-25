import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  CalendarIcon,
  MapPinIcon,
  UserCircleIcon,
  ChatBubbleLeftIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const Index = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Header */}
      <header
        className={`fixed w-full z-50 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="bg-white/80 backdrop-blur-md border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-playfair text-primary">Les Petites Forges</div>
            <div className="hidden md:flex space-x-6">
              <a href="#gallery" className="text-accent hover:text-primary transition-colors">
                Galerie
              </a>
              <a href="#contact" className="text-accent hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/c6312621-3316-4a3b-b213-93fb51ce6f13.png"
            alt="Salon principal avec baby-foot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-playfair text-white mb-6"
            >
              Charmant gîte dans l'hypercentre d'Auxonne, à 30 minutes de Dijon
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Votre havre de paix en Bourgogne
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Réserver maintenant
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16">
            Situé au centre historique d'Auxonne, venez vivre l'authenticité de cette ville d'eau bordée par la Saône, goûter aux charmes 
            de cette cité Bonaparte, proche de Dole et Dijon (Accès A39 à 5 minutes). Ce gîte atypique de 120m2 dans un ancien hôtel particulier, 
            vous offrira de grands volumes : pièce climatisée de 50m2 avec vrai Baby Foot, une cuisine ouverte et une cuisine d'été dans le patio privé, 
            une chambre avec alcôve, ainsi que deux salons. Vous disposerez de 5 lits, une douche/wc séparés, et 5 vélos à disposition pour vos escapades.
            Pour vos instants cocooning, une TV Canal+, une PS3 et le WiFi sont disponibles.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPinIcon className="w-8 h-8" />,
                title: "Le logement",
                description:
                  "Spacieux Appartement de 120m2 au 2ème étage d'un ancien hôtel particulier - Accès par escalier - 5 lits dont 1 double King Size et 3 lits 90X190 (plus 2 lits bébé)- 2 lieux de couchage séparés - 5 Vélos prêtés gratuitement pour balade - Café (Dolce Gusto), thé, chocolat offerts - Accès au Jura et à Côte d'Or et ses vignes (Dole, Pesmes à 12 kms, Dijon et la Côte d Or à 25 kms, Beaune et Bèze à 35 kms) - Grande pièce climatisée",
              },
              {
                icon: <UserCircleIcon className="w-8 h-8" />,
                title: "Accès des voyageurs",
                description:
                  "Accès à Patio privé sans vis à vis et cuisine d'été pour détente, agrémenté d'une cuisine d'été pour vos repas. Stationnement gratuit à proximité immédiate du gîte.",
              },
              {
                icon: <CheckCircleIcon className="w-8 h-8" />,
                title: "L'accueil",
                description:
                  "Lors des jours ouvrables, le salon de coiffure Styl Coif (Rachel) situé au rez de chaussée vous accueillera et vous remettra les clés de votre appartement. En dehors de ces jours et passé 19H00, je viendrai à votre rencontre. A bientôt !",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-6 rounded-lg bg-white shadow-sm"
              >
                <div className="inline-block p-3 bg-primary/10 rounded-full text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-playfair mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-justify">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16">
            Découvrez votre futur nid douillet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/lovable-uploads/c6312621-3316-4a3b-b213-93fb51ce6f13.png",
                alt: "Salon principal avec baby-foot"
              },
              {
                src: "/lovable-uploads/c6082850-1130-4300-907e-75e895b69418.png",
                alt: "Salon avec canapé et espace détente"
              },
              {
                src: "/lovable-uploads/e20dc12d-aedc-494d-9ed4-7525fb438a38.png",
                alt: "Chambre avec espace bureau"
              },
              {
                src: "/lovable-uploads/fc5fbc71-135d-40e5-bdf9-3e6fafbad1fd.png",
                alt: "Salon avec fauteuils classiques"
              },
              {
                src: "/lovable-uploads/c5616400-ebf3-4c47-893a-87d9f5a111cf.png",
                alt: "Salle à manger"
              },
              {
                src: "/lovable-uploads/824b6737-c270-427b-b274-eaf4f59b8ddc.png",
                alt: "Vue du balcon"
              },
              {
                src: "/lovable-uploads/758f8916-6f6e-4e3d-8dba-48551f75b25f.png",
                alt: "Chambre avec lit double"
              },
              {
                src: "/lovable-uploads/7fc414f8-0f40-4af0-a0cd-d58d7ee7b512.png",
                alt: "Patio et espace extérieur"
              },
              {
                src: "/lovable-uploads/83ee295c-fbaf-4e03-a849-24dace1b1741.png",
                alt: "Coin détente du patio"
              },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16">
            Réservez votre séjour
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium mb-2">Date d'arrivée</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    className="w-full border-2 border-gray-200 rounded-lg p-2"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date de départ</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    className="w-full border-2 border-gray-200 rounded-lg p-2"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
              </div>
              <button className="w-full mt-8 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Vérifier la disponibilité
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16">
            Contactez-nous
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom</label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-200 rounded-lg p-2"
                  placeholder="Votre nom..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border-2 border-gray-200 rounded-lg p-2"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full border-2 border-gray-200 rounded-lg p-2 h-32"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-playfair mb-4">Les Petites Forges</h3>
              <p className="text-white/80 text-justify">
                Votre havre de paix aux portes de Dijon, au cœur de la Bourgogne et son patrimoine.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair mb-4">Contact</h3>
              <p className="text-white/80 text-justify">
                Rue Carnot
                <br />
                21130 Auxonne
                <br />
                +33 6 66 66 66 66
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="https://www.airbnb.fr/rooms/25652792?search_mode=regular_search&adults=1&check_in=2025-05-04&check_out=2025-05-09&children=0&infants=0&source_impression_id=p3_1740340046_P3MB3hbuRkfhlHpv&previous_page_section_name=1000&federated_search_id=c8f95dde-8730-483d-a125-ca85191f7aa4" className="text-white/80 hover:text-white transition-colors">
                  AirBNB
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p className="text-justify">© 2025 Les Petites Forges. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Floating Reservation Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "translate-y-20"
        }`}
      >
        <button className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center space-x-2">
          <CalendarIcon className="w-5 h-5" />
          <span>Réserver</span>
        </button>
      </div>
    </div>
  );
};

export default Index;
