
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
              <a href="#about" className="text-accent hover:text-primary transition-colors">
                À propos
              </a>
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
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Gîte Bourguignon"
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
            de cette cité Bonaparte proche de Dole et Dijon (Accès A39 à 5'). Ce gîte atypique de 120m2 dans un ancien hôtel particulier 
            vous offrira de grands volumes : pièce de 50m2 avec vrai BABY FOOT et CLIM, une cuisine ouverte et une d'été dans le patio privé, 
            une chambre avec alcôve, deux salons. Vous disposez de 5 lits, une douche/wc séparés, prêt 5 vélos. TV Canal+,WIFI,PS3.
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
                <p className="text-muted-foreground">{feature.description}</p>
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
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
              "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
              "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
              "https://images.unsplash.com/photo-1600607687644-c7171b42498e",
              "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={`Intérieur du gîte ${index + 1}`}
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
                    selectsStart
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
                    selectsEnd
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
              <p className="text-white/80">
                Votre havre de paix aux portes de Dijon, au cœur de la Bourgogne et son patrimoine.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair mb-4">Contact</h3>
              <p className="text-white/80">
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
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  AirBNB
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2025 Les Petites Forges. Tous droits réservés.</p>
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
