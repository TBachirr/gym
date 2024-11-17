import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
            alt="Gym background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">VOTRE MEILLEURE VERSION COMMENCE ICI</h1>
          <p className="text-xl mb-8">Rejoignez-nous et transformez votre vie</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full">
            COMMENCER MAINTENANT
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Musculation</h3>
            <p>Accès à des équipements de pointe et des zones d'entraînement spécialisées</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Cours Collectifs</h3>
            <p>Large variété de cours dirigés par des coachs professionnels</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Coaching Personnel</h3>
            <p>Accompagnement personnalisé pour atteindre vos objectifs</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Forfaits</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-700 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-6">29€<span className="text-xl">/mois</span></p>
            <ul className="mb-8">
              <li className="mb-2">✓ Accès salle de musculation</li>
              <li className="mb-2">✓ Accès aux vestiaires</li>
              <li className="mb-2">✓ Programme de base</li>
            </ul>
            <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-full">Choisir</button>
          </div>
          <div className="border border-red-600 p-8 rounded-lg transform scale-105">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-6">49€<span className="text-xl">/mois</span></p>
            <ul className="mb-8">
              <li className="mb-2">✓ Tous les avantages Basic</li>
              <li className="mb-2">✓ Accès cours collectifs</li>
              <li className="mb-2">✓ 1 séance coaching/mois</li>
            </ul>
            <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-full">Choisir</button>
          </div>
          <div className="border border-gray-700 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Elite</h3>
            <p className="text-4xl font-bold mb-6">79€<span className="text-xl">/mois</span></p>
            <ul className="mb-8">
              <li className="mb-2">✓ Tous les avantages Premium</li>
              <li className="mb-2">✓ Coaching illimité</li>
              <li className="mb-2">✓ Accès spa et sauna</li>
            </ul>
            <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-full">Choisir</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contactez-nous</h2>
          <p className="mb-8">Une question ? N'hésitez pas à nous contacter !</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-2">Adresse</h3>
              <p>123 Rue du Sport<br />75000 Paris</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Téléphone</h3>
              <p>01 23 45 67 89</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Email</h3>
              <p>contact@votregym.fr</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 VotreGym. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home; 