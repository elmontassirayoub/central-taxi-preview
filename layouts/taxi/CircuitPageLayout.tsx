import Book from "@/components/common/Buttons/Book"
import Call from "@/components/common/Buttons/Call"
import HeroTaxiCTA from "@/components/common/Buttons/HeroTaxiCTA"
import { useAppContext } from "@/context/appContext"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const CircuitPageLayout: React.FC<{ heroCardImageSrc?: string; heroCardImageAlt?: string }> = ({
    heroCardImageSrc,
    heroCardImageAlt,
}) => {
    const { lang } = useAppContext()
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        { id: 0, label: lang === "fr" ? "Nos Circuits" : "Our Tours" },
        { id: 1, label: lang === "fr" ? "Avantages" : "Benefits" },
        { id: 2, label: lang === "fr" ? "Tarifs" : "Pricing" },
        { id: 3, label: "FAQ" }
    ]



    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100">
            {/* Hero — violet (tourisme Alsace) */}
            <section className="relative overflow-hidden bg-gradient-to-r from-violet-800 via-purple-700 to-violet-900 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                            <div className="space-y-3 lg:space-y-4">
                                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                                    Taxi circuit touristique Alsace
                                </h1>
                                <p className="text-lg sm:text-xl lg:text-2xl text-violet-100 font-light">
                                    Taxi circuit touristique Alsace : Découvrez la région confortablement
                                </p>
                            </div>
                            <p className="text-base sm:text-lg text-purple-50 leading-relaxed">
                                Vous rêvez de découvrir l'Alsace sans tourner en rond derrière le volant ou vous prendre la tête avec le GPS ? Avec notre taxi circuit touristique Alsace, installez-vous confortablement et laissez-nous transformer votre voyage en une véritable parenthèse de détente. Flânez dans les villages pittoresques. Admirez des panoramas à couper le souffle. Passionnés d'histoire et de culture ? Notre chauffeur privé sait parfaitement s'adapter à vos rythmes et à vos envies de découverte.
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
                                                alt={heroCardImageAlt || (lang === "fr" ? "Taxi circuit touristique Alsace" : "Alsace sightseeing taxi")}
                                                width={900}
                                                height={600}
                                                className="w-full h-[220px] sm:h-[260px] object-cover"
                                                priority={true}
                                            />
                                        </div>
                                        <div className="mt-4 sm:mt-5 text-center space-y-2 sm:space-y-3">
                                            <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white">
                                                {lang === "fr" ? "Circuits Sur-Mesure" : "Custom Tours"}
                                            </h3>
                                            <p className="text-sm sm:text-base text-violet-100">
                                                {lang === "fr" ? "Découvrez l'Alsace à votre rythme" : "Discover Alsace at your pace"}
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center space-y-3 sm:space-y-4">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold">
                                            {lang === "fr" ? "Circuits Sur-Mesure" : "Custom Tours"}
                                        </h3>
                                        <p className="text-sm sm:text-base text-violet-100">
                                            {lang === "fr" ? "Découvrez l'Alsace à votre rythme" : "Discover Alsace at your pace"}
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
                                            ? 'bg-violet-700 text-white shadow-md transform scale-105'
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
                    {/* Circuits Tab */}
                    {activeTab === 0 && (
                        <div className="space-y-8 sm:space-y-12">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    Nos circuits touristiques en Alsace à explorer en taxi
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-shadow">
                                    <div className="space-y-2 sm:space-y-3">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Route des Vins d'Alsace</h3>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            Les vignobles alsaciens s'étendent à perte de vue. Ils sont ponctués de villages pittoresques comme Riquewihr, Ribeauvillé, Eguisheim ou Kaysersberg. Les maisons à colombages, les ruelles pavées et les paysages dignes de cartes postales créent un véritable festival visuel. Les dégustations de vins locaux ajoutent une touche gourmande à ce panorama déjà séduisant. Un taxi circuit touristique Alsace connaît tous les arrêts qui valent le détour.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-shadow">
                                    <div className="space-y-2 sm:space-y-3">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Châteaux médiévaux et forteresses</h3>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            Voilà le circuit touristique qui vous fera découvrir les châteaux mythiques d'Alsace. Vous allez vous promener dans les cours intérieures, admirer les tours et fortifications. Laissez-vous surprendre par l'architecture médiévale. Entre chaque étape, détendez-vous : notre taxi vous emmène sans stress. Croyez-nous, c'est plus simple que de tenter de garer votre carrosse au pied des murailles.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-shadow">
                                    <div className="space-y-2 sm:space-y-3">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Villages pittoresques et marchés de Noël</h3>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            Obernai, Bergheim, Hunawihr et Eguisheim se rangent comme de véritables bijoux le long d'un parcours pittoresque. Quand l'hiver s'installe, ces villages s'illuminent de mille feux et se transforment en véritable féerie de Noël. Entre marchés scintillants, artisanat local qui sent bon l'authenticité et gourmandises capables de faire danser vos papilles, il y a de quoi se régaler à chaque arrêt. Et avec un bon chauffeur privé à vos côtés, fini le stress du stationnement et les détours à répétition.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-shadow">
                                    <div className="space-y-2 sm:space-y-3">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Circuits nature et panoramas</h3>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            Envie d'une petite bouffée d'air frais ? Les Vosges du Nord et le parc naturel régional des Vosges s'ouvrent à vous avec leurs routes sinueuses et leurs forêts mystérieuses. Vous pourriez même tomber sur un chevreuil curieux ou un panorama qui vous coupe le souffle ! Pendant ce temps, votre taxi Strasbourg veille au grain : pas besoin de surveiller le GPS ni de freiner brusquement, vous n'avez plus qu'à profiter de la balade.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-shadow">
                                    <div className="space-y-2 sm:space-y-3">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Expériences gastronomiques</h3>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            Laissez vos papilles voyager ! Goûtez aux incontournables de l'Alsace. Une choucroute qui fait chanter vos papilles. Une tarte flambée dorée à souhait. Et le kougelhopf qui fond dans la bouche. Partez à la découverte des fromageries artisanales, des brasseries locales et des distilleries. Découvrez la magie qui opère derrière chaque tonneau. Et le meilleur ? Avec notre taxi circuit touristique Alsace, pas besoin de stresser pour le retour. On vous ramène en toute sécurité, le ventre plein et le sourire aux lèvres !
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-shadow">
                                    <div className="space-y-2 sm:space-y-3">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Circuits historiques et culturels</h3>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            Partez à la conquête de Strasbourg ! Flânez devant sa cathédrale imposante ou perdez-vous dans les ruelles pittoresques de la Petite France. Chaque coin de rue raconte une histoire. Si vous avez envie de moteurs et de belles carrosseries ? Cap sur Mulhouse et son musée de l'automobile. Colmar vous tente ? Le musée Unterlinden vous ouvre ses portes. Entre art ancien et moderne, chaque salle est un voyage dans le temps. Notre taxi pour visites touristiques Alsace s'occupe du trajet. Vous, vous profitez juste du spectacle.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-shadow">
                                    <div className="space-y-2 sm:space-y-3">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Circuits thématiques spéciaux</h3>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            Partez à l'aventure sur des circuits comme l'Alsace insolite, la route des crèches ou des parcours photo pour immortaliser les maisons colorées et les panoramas uniques. Le taxi touristique en Alsace vous laisse profiter de chaque photo.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-shadow">
                                    <div className="space-y-2 sm:space-y-3">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Circuits famille et loisirs</h3>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            Amusez-vous en famille en réservant un{" "}
                                            <Link href="/taxi/taxi-strasbourg-europapark" className="font-medium text-violet-700 underline underline-offset-2 hover:text-violet-900">
                                                taxi Strasbourg Europa Park
                                            </Link>
                                            , Parc du Petit Prince, ou pour une balade à vélo ou en bateau sur les canaux alsaciens. Les activités sont pensées pour petits et grands, avec des paysages et attractions variés. Un bon taxi privé pour circuits touristiques Alsace assure un trajet détendu pour toute la famille.
                                        </p>
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
                                    Estimations de durée et tarif approximatif pour quelques circuits touristiques en Alsace
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 px-4">
                                    Les montants sont indicatifs et peuvent varier selon le véhicule, le nombre de passagers et la durée exacte du circuit.
                                </p>
                            </div>

                            {/* Mobile: card layout */}
                            <div className="sm:hidden space-y-4">
                                {[
                                    { circuit: "Route des Vins d'Alsace (Riquewihr, Ribeauvillé, Eguisheim, Kaysersberg)", duration: "4 à 6 h", day: "220 – 280 €" },
                                    { circuit: "Châteaux médiévaux et forteresses (Haut-Koenigsbourg, Fleckenstein…)", duration: "3 à 5 h", day: "200 – 250 €" },
                                    { circuit: "Villages pittoresques et marchés de Noël (Obernai, Bergheim, Hunawihr, Eguisheim)", duration: "3 à 5 h", day: "140 – 180 €" },
                                    { circuit: "Circuits nature et panoramas (Vosges du Nord, parc naturel régional, routes panoramiques)", duration: "3 à 6 h", day: "300 – 340 €" },
                                    { circuit: "Circuits thématiques spéciaux (Alsace insolite, route des crèches, parcours photo, villages cachés)", duration: "3 à 5 h", day: "200 – 250 €" }
                                ].map((row, idx) => (
                                    <div key={idx} className="bg-white rounded-xl shadow-lg p-4 space-y-2">
                                        <p className="text-sm font-semibold text-gray-900">{row.circuit}</p>
                                        <div className="flex justify-between text-xs text-gray-500">
                                            <span>Durée approximative</span>
                                            <span className="font-medium text-gray-700">{row.duration}</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-500">Tarif jour</span>
                                            <span className="font-semibold text-violet-600">{row.day}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop: table layout */}
                            <div className="hidden sm:block bg-white rounded-2xl shadow-xl overflow-hidden">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Circuit touristique en Alsace
                                            </th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Durée approximative
                                            </th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Tarif jour (approx.)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {[
                                            { circuit: "Route des Vins d'Alsace (Riquewihr, Ribeauvillé, Eguisheim, Kaysersberg)", duration: "4 à 6 h", day: "220 – 280 €" },
                                            { circuit: "Châteaux médiévaux et forteresses (Haut-Koenigsbourg, Fleckenstein…)", duration: "3 à 5 h", day: "200 – 250 €" },
                                            { circuit: "Villages pittoresques et marchés de Noël (Obernai, Bergheim, Hunawihr, Eguisheim)", duration: "3 à 5 h", day: "140 – 180 €" },
                                            { circuit: "Circuits nature et panoramas (Vosges du Nord, parc naturel régional, routes panoramiques)", duration: "3 à 6 h", day: "300 – 340 €" },
                                            { circuit: "Circuits thématiques spéciaux (Alsace insolite, route des crèches, parcours photo, villages cachés)", duration: "3 à 5 h", day: "200 – 250 €" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.circuit}</td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{row.duration}</td>
                                                <td className="px-6 py-4 text-sm text-violet-600 font-semibold">{row.day}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
                                <p className="text-xs sm:text-sm text-yellow-800 text-center">
                                    Ces estimations sont données à titre indicatif. Seul le montant affiché au taximètre fait foi et peut varier selon le véhicule choisi, le trafic et les arrêts supplémentaires.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Benefits Tab */}
                    {activeTab === 1 && (
                        <div className="space-y-8 sm:space-y-12">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    Pourquoi choisir notre taxi pour circuit touristique en Alsace ?
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-violet-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Chauffeurs expérimentés et locaux</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                            Nos chauffeurs sont de véritables guides locaux. Ils connaissent les secrets et anecdotes qui rendent chaque circuit unique. Avec eux, votre voyage touristique en Alsace devient authentique, fluide et enrichissante.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-violet-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Confort et sécurité</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                            Chez Central Taxi 67, confort rime avec expertise ! Nos taxis modernes, rigoureusement entretenus, offrent un voyage où détente et sécurité font la paire. Normes sanitaires et règles de la route ? Nos chauffeurs expérimentés maîtrisent les normes sanitaires et règles de la route à la perfection. Vous voilà libre de savourer l'Alsace, ses villages pittoresques et ses panoramas, sans jamais lever un sourcil pour votre sécurité.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-violet-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Flexibilité et personnalisation</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                            Avec notre service de taxi alsacien, vous n'êtes pas limité à des itinéraires fixes. Vous pouvez choisir le point de départ, le circuit et les arrêts selon vos envies. Que vous souhaitiez un parcours classique ou un itinéraire sur mesure, nos chauffeurs s'adaptent à vos besoins pour créer un circuit touristique en Alsace unique et personnalisé.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-violet-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Taxi pas cher</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                            Profitez d&apos;un service de transport haut de gamme sans vous ruiner. Nos
                                            taxis pas chers pour circuits touristiques en Alsace vous permettent de
                                            découvrir la région à des tarifs transparents et compétitifs, sans frais
                                            cachés ni surprise. Vous pouvez ainsi savourer chaque instant de votre
                                            circuit en toute tranquillité. Faites votre{" "}
                                            <Link href="/book" className="font-medium text-violet-700 underline underline-offset-2 hover:text-violet-900">
                                                réservation en ligne
                                            </Link>{" "}
                                            ou par
                                            téléphone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* FAQ Tab */}
                    {activeTab === 3 && (
                        <div className="space-y-6 sm:space-y-8">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    FAQ – Taxi circuit touristique Alsace
                                </h2>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                {[
                                    {
                                        question: "Quels types de circuits touristiques peut-on réaliser en Alsace avec votre taxi ?",
                                        answer: "Nous proposons des circuits variés : route des Vins, châteaux médiévaux, villages pittoresques et marchés de Noël, panoramas naturels, expériences gastronomiques, circuits historiques et culturels, parcours thématiques ou sorties en famille."
                                    },
                                    {
                                        question: "Combien de temps dure un circuit touristique en taxi ?",
                                        answer: "La durée dépend de votre itinéraire et du nombre d'arrêts. Vous pouvez opter pour des circuits courts de quelques heures ou des journées complètes. Nos chauffeurs ajustent le rythme selon vos préférences."
                                    },
                                    {
                                        question: "Puis-je personnaliser mon circuit touristique en Alsace ?",
                                        answer: "Oui. Nos chauffeurs expérimentés s'adaptent à vos besoins : choix du point de départ, du circuit et des arrêts. Vous pouvez composer un itinéraire sur mesure ou suivre un parcours classique préétabli."
                                    },
                                    {
                                        question: "Les taxis acceptent-ils les groupes ou les familles avec enfants ?",
                                        answer: "Oui, Taxi Strasbourg - Central Taxi 67 - Aéroport & Gare assure le transport des familles et des groupes. On dispose de berlines, monospaces et vans spacieux adaptés à tous les voyageurs. Des sièges auto sont également disponibles sur demande pour les enfants."
                                    },
                                    {
                                        question: "Quels sont les avantages d'un taxi touristique par rapport à la location de voiture ?",
                                        answer: "Avec notre taxi strasbourgeois, vous profitez du confort, de la sécurité et de l'expertise d'un chauffeur local. Pas de stress pour le stationnement, pas de navigation complexe, et la possibilité de découvrir des anecdotes et secrets locaux pour enrichir votre visite."
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
            <section className="bg-gradient-to-r from-violet-900 to-purple-900 text-white py-12 sm:py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                        {lang === "fr" ? "Prêt à découvrir l'Alsace ?" : "Ready to discover Alsace?"}
                    </h2>
                    <p className="text-base sm:text-lg text-violet-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed italic">
                        {lang === "fr" ? (
                            <>
                                Profitez d&apos;un{" "}
                                <strong className="font-semibold text-white">service de transport haut de gamme</strong>{" "}
                                sans vous ruiner. Nos{" "}
                                <strong className="font-semibold text-white">
                                    taxis pas chers pour circuits touristiques en Alsace
                                </strong>{" "}
                                vous permettent de découvrir la région à des tarifs transparents et compétitifs,{" "}
                                <strong className="font-semibold text-white">sans frais cachés ni surprise.</strong> Vous
                                pouvez ainsi savourer chaque instant de votre circuit en toute tranquillité. Faites votre{" "}
                                <Link
                                    href="/book"
                                    className="font-medium text-violet-50 underline underline-offset-2 hover:text-white"
                                >
                                    réservation en ligne
                                </Link>{" "}
                                ou par téléphone.
                            </>
                        ) : (
                            <>
                                Enjoy a <strong className="font-semibold text-white">premium transport service</strong>{" "}
                                without breaking the bank. Our{" "}
                                <strong className="font-semibold text-white">affordable Alsace sightseeing tour taxis</strong>{" "}
                                let you discover the region at transparent, competitive rates,{" "}
                                <strong className="font-semibold text-white">with no hidden fees or surprises.</strong>{" "}
                                Savor every moment of your tour in complete peace of mind.{" "}
                                <Link
                                    href="/book"
                                    className="font-medium text-violet-50 underline underline-offset-2 hover:text-white"
                                >
                                    Book online
                                </Link>{" "}
                                or by phone.
                            </>
                        )}
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

export default CircuitPageLayout

