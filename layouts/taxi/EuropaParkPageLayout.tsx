import Book from "@/components/common/Buttons/Book"
import Call from "@/components/common/Buttons/Call"
import HeroTaxiCTA from "@/components/common/Buttons/HeroTaxiCTA"
import { useAppContext } from "@/context/appContext"
import Image from "next/image"
import { useState } from "react"

type EuropaParkPageLayoutProps = {
    heroCardImageSrc?: string
    heroCardImageAlt?: string
}

const EuropaParkPageLayout: React.FC<EuropaParkPageLayoutProps> = ({ heroCardImageSrc, heroCardImageAlt }) => {
    const { lang } = useAppContext()
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        { id: 0, label: lang === "fr" ? "Nos Services" : "Our Services" },
        { id: 1, label: lang === "fr" ? "Avantages" : "Benefits" },
        { id: 2, label: lang === "fr" ? "Tarifs" : "Pricing" },
        { id: 3, label: "FAQ" }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-amber-800 to-orange-900 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                            <div className="space-y-3 lg:space-y-4">
                                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                                    Taxi Strasbourg Europa Park
                                </h1>
                                <p className="text-lg sm:text-xl lg:text-2xl text-orange-100 font-light">
                                    Taxi Strasbourg Europa Park : votre transfert direct et confortable
                                </p>
                            </div>
                            <p className="text-base sm:text-lg text-orange-50 leading-relaxed">
                                Vous prévoyez une virée à Europa Park à Rust, en Allemagne et partez depuis Strasbourg ? Inutile de vous casser la tête avec les changements de train ou les parkings introuvables ! Notre service de taxi Strasbourg Europa Park vous y conduit directement en toute tranquillité. Profitez d'un trajet entièrement sécurisé avec nos chauffeurs privés et nos véhicules haut de gamme. La réservation est possible 7 jours sur 7, pour un trajet aller simple ou aller-retour, en solo, en groupe ou en couple.
                            </p>
                            <HeroTaxiCTA />
                        </div>
                        <div className="relative order-1 lg:order-2">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                                {heroCardImageSrc ? (
                                    <>
                                        <div className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-white/5">
                                            <Image
                                                src={heroCardImageSrc}
                                                alt={
                                                    heroCardImageAlt ||
                                                    (lang === "fr"
                                                        ? "Taxi Strasbourg Europa-Park — transfert direct"
                                                        : "Strasbourg Europa-Park taxi — direct transfer")
                                                }
                                                width={900}
                                                height={600}
                                                className="w-full h-[220px] sm:h-[260px] object-cover"
                                                priority={true}
                                            />
                                        </div>
                                        <div className="mt-4 sm:mt-5 text-center space-y-2 sm:space-y-3">
                                            <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white">
                                                {lang === "fr" ? "Service 24/7" : "24/7 Service"}
                                            </h3>
                                            <p className="text-sm sm:text-base text-orange-100">
                                                {lang === "fr" ? "Disponible tous les jours" : "Available every day"}
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center space-y-3 sm:space-y-4">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold">
                                            {lang === "fr" ? "Service 24/7" : "24/7 Service"}
                                        </h3>
                                        <p className="text-sm sm:text-base text-orange-100">
                                            {lang === "fr" ? "Disponible tous les jours" : "Available every day"}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className="bg-white shadow-lg sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center gap-1 bg-gray-100 rounded-lg p-1 max-w-full overflow-x-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-3 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 ${
                                        activeTab === tab.id
                                            ? 'bg-orange-600 text-white shadow-md transform scale-105'
                                            : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tab Content */}
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Services Tab */}
                    {activeTab === 0 && (
                        <div className="space-y-8 sm:space-y-12">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    Europa Park : une destination incontournable pour petits et grands
                                </h2>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Europa-Park, c'est un peu la star allemande du divertissement. Niché à Rust, à seulement une petite heure de route de Strasbourg en taxi, ce parc est depuis 1975 le terrain de jeu préféré des amateurs de sensations.
                                    </p>
                                    <p>
                                        Pensé par la famille Mack, Europa-Park a grandi avec les années pour devenir un vrai mastodonte du loisir. Aujourd'hui, il arbore fièrement 59 attractions, dont 14 montagnes russes qui vous arracheront des "waouh !" à chaque virage et des sourires à toute épreuve.
                                    </p>
                                    <p>
                                        Le site comprend aussi un complexe hôtelier de 5 800 lits. Ils sont aménagés pour ceux qui veulent prolonger l'aventure jusqu'au petit matin.
                                    </p>
                                    <p>
                                        Côté chiffres, le parc fait tourner les têtes : 5,7 millions de visiteurs rien qu'en 2019, ce qui le place juste derrière Disneyland Paris dans le classement européen. Et ce n'est pas tout, on l'a élu "Meilleur parc de loisirs du monde" neuf années d'affilée (2014-2022).
                                    </p>
                                    <p>
                                        Alors, comment s'y rendre ? Laissez-nous gérer le volant ! Avec nos chauffeurs privés professionnels, vous pouvez vous détendre, profiter du trajet et même rêver aux loopings et splashs qui vous attendent.
                                    </p>
                                </div>
                            </div>

                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    Le meilleur service de taxi Strasbourg Europa Park à votre portée
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4">
                                    Vous rêvez de vous amuser à Europa Park sans perdre de temps dans les embouteillages ou les changements de train ? Commander un taxi Strasbourg ! Notre service est taillé sur-mesure pour vous ! Notre chauffeur privé peut venir vous chercher où que vous soyez, dans le centre-ville de Strasbourg, à la gare SNCF, à l'aéroport d'Entzheim, ou même dans les alentours comme Colmar, Sélestat, Obernai, Haguenau… sans oublier Kehl côté Allemagne.
                                </p>
                            </div>

                            {/* Vehicles */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-shadow">
                                    <div className="space-y-2 sm:space-y-3">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Des véhicules adaptés à tous les voyageurs</h3>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-semibold mb-2">Berlines & monospaces (1 à 5 places) :</p>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">parfaits pour un voyage en solo, en duo romantique ou avec les enfants.</p>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-semibold mb-2 mt-4">Vans spacieux (jusqu'à 7 places) :</p>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">idéaux pour les bandes d'amis, les familles XXL ou ceux qui ne savent pas voyager léger.</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-shadow">
                                    <div className="space-y-2 sm:space-y-3">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Des trajets rapides et directs</h3>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">Pas de correspondance, pas de stress, pas de détour inutile. Votre taxi circuit touristique Alsace vous emmène directement aux portes d'Europa Park. Côté timing, comptez en moyenne :</p>
                                        <ul className="text-gray-700 text-sm sm:text-base leading-relaxed list-disc list-inside space-y-1 mt-2">
                                            <li>1h15 à 1h30 depuis Strasbourg</li>
                                            <li>45 minutes depuis Colmar.</li>
                                            <li>30 minutes depuis Sélestat.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Pricing Tab */}
                    {activeTab === 2 && (
                        <div className="space-y-6 sm:space-y-8">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    Estimations de tarifs pour 4 trajets en taxi vers Europa-Park
                                </h2>
                            </div>

                            {/* Mobile: card layout */}
                            <div className="sm:hidden space-y-4">
                                {[
                                    { route: "Depuis Strasbourg", duration: "1h à 1h20", day: "100 – 120 €", night: "140 – 160 €" },
                                    { route: "Depuis Haguenau", duration: "1h", day: "160 – 180 €", night: "200 – 220 €" },
                                    { route: "Depuis Brumath", duration: "1h", day: "140 – 155 €", night: "200 – 220 €" },
                                    { route: "Depuis Wasselone", duration: "1h10 min", day: "150 – 160 €", night: "200 – 230 €" }
                                ].map((row, idx) => (
                                    <div key={idx} className="bg-white rounded-xl shadow-lg p-4 space-y-2">
                                        <p className="text-sm font-semibold text-gray-900">{row.route}</p>
                                        <div className="flex justify-between text-xs text-gray-500">
                                            <span>Durée estimée</span>
                                            <span className="font-medium text-gray-700">{row.duration}</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-500">Tarif jour</span>
                                            <span className="font-semibold text-green-600">{row.day}</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-500">Tarif nuit</span>
                                            <span className="font-semibold text-orange-600">{row.night}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop: table layout */}
                            <div className="hidden sm:block bg-white rounded-2xl shadow-xl overflow-hidden">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trajet en taxi → Europa-Park</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durée estimée</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarif jour (approx.)</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarif nuit (approx.)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {[
                                            { route: "Depuis Strasbourg", duration: "1h à 1h20", day: "100 – 120 €", night: "140 – 160 €" },
                                            { route: "Depuis Haguenau", duration: "1h", day: "160 – 180 €", night: "200 – 220 €" },
                                            { route: "Depuis Brumath", duration: "1h", day: "140 – 155 €", night: "200 – 220 €" },
                                            { route: "Depuis Wasselone", duration: "1h10 min", day: "150 – 160 €", night: "200 – 230 €" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.route}</td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{row.duration}</td>
                                                <td className="px-6 py-4 text-sm text-green-600 font-semibold">{row.day}</td>
                                                <td className="px-6 py-4 text-sm text-orange-600 font-semibold">{row.night}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
                                <p className="text-xs sm:text-sm text-yellow-800 text-center">
                                    {lang === "fr" ? "Les tarifs indiqués sont donnés à titre informatif. Seul le montant affiché au taximètre fait foi." : "Prices are indicative. The taximeter is the only reference."}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Benefits Tab */}
                    {activeTab === 1 && (
                        <div className="space-y-8 sm:space-y-12">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    Avantages de notre taxi Strasbourg Service
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 px-4 max-w-4xl mx-auto">
                                    Choisir notre compagnie de taxi Strasbourg Europa-Park, c'est embarquer pour un voyage rapide, confortable et totalement sécurisé. Voici quelques petits bonus qui font la différence :
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                                {[{
                                    title: "Voies bus privilégiées",
                                    description: "fini les bouchons et les arrêts interminables ! Nos taxis peuvent emprunter les voies réservées aux bus, là où Uber et les VTC restent coincés."
                                }, {
                                    title: "Wi-Fi à bord",
                                    description: "mails, stories Instagram, selfies en direct… restez connecté jusqu'au moment où vous crierez sur les montagnes russes."
                                }, {
                                    title: "Bouteilles d'eau offertes",
                                    description: "parce qu'on sait qu'il est important de rester hydraté avant d'affronter les descentes vertigineuses."
                                }, {
                                    title: "Sièges auto disponibles",
                                    description: "pour les petits aventuriers, nous avons des sièges sécurisés adaptés à tous les âges."
                                }, {
                                    title: "Chauffeurs courtois et pros",
                                    description: "des experts de la route qui connaissent Europa-Park comme leur poche, prêts à rendre votre trajet agréable, ponctuel… et sans stress."
                                }, {
                                    title: "Taxi pas cher",
                                    description: "profitez d'un voyage confortable sans exploser votre budget. Après tout, mieux vaut garder un peu d'argent pour les churros et les souvenirs !"
                                }].map((benefit, idx) => (
                                    <div key={idx} className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="space-y-3 sm:space-y-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{benefit.title}</h3>
                                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-orange-50 rounded-xl p-6 text-center">
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Avec notre service de transport en taxi Strasbourg Europa Park, chaque transfert devient un moment agréable. Réservez votre chauffeur privé en ligne ou via notre central d'appel. Nos tarifs sont les meilleurs.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* FAQ Tab */}
                    {activeTab === 3 && (
                        <div className="space-y-6 sm:space-y-8">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    FAQ – Taxi Strasbourg Europa Park
                                </h2>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                {[
                                    {
                                        question: "Quel est le prix d'un taxi Strasbourg – Europa Park ?",
                                        answer: "En moyenne, un trajet depuis Strasbourg coûte entre 100-120€ en journée. Seul le montant affiché au taximètre fait foi."
                                    },
                                    {
                                        question: "Peut-on réserver un taxi aller-retour pour Europa Park ?",
                                        answer: "Oui. Vous pouvez réserver un aller simple ou un aller-retour selon vos besoins. Le chauffeur peut vous attendre à la sortie du parc ou revenir vous chercher à l'heure convenue."
                                    },
                                    {
                                        question: "Les taxis acceptent-ils les groupes et les familles nombreuses ?",
                                        answer: "Central Taxi 67 propose des berlines, monospaces et vans spacieux (jusqu'à 7 places) adaptés aux familles, groupes d'amis et voyageurs avec beaucoup de bagages."
                                    },
                                    {
                                        question: "Comment réserver un taxi Strasbourg – Europa Park ?",
                                        answer: "Vous pouvez réserver facilement en ligne via notre formulaire ou par téléphone. Le service est disponible 24h/24 et 7j/7, même les jours fériés."
                                    }
                                ].map((faq, idx) => (
                                    <div key={idx} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-2">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                            {faq.question}
                                        </h3>
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-orange-900 to-amber-900 text-white py-12 sm:py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                        Prêt pour Europa Park ?
                    </h2>
                    <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8">
                        Si vous aimez le confort sans compromis et la ponctualité suisse, vous êtes au bon endroit. Réservez facilement votre chauffeur via notre formulaire en ligne ou par téléphone et commencez votre aventure strasbourgeoise sur les chapeaux de roues !
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <Book bounce={false} btn={lang === "fr" ? "Réserver en ligne" : "Book Online"} primary={true} />
                        <Call bounce={false} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EuropaParkPageLayout



