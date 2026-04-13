import Book from "@/components/common/Buttons/Book"
import Call from "@/components/common/Buttons/Call"
import HeroTaxiCTA from "@/components/common/Buttons/HeroTaxiCTA"
import { useAppContext } from "@/context/appContext"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type MedicalPageLayoutProps = {
    heroCardImageSrc?: string
    heroCardImageAlt?: string
}

const MedicalPageLayout: React.FC<MedicalPageLayoutProps> = ({ heroCardImageSrc, heroCardImageAlt }) => {
    const { lang } = useAppContext()
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        { id: 0, label: lang === "fr" ? "Nos Services" : "Our Services" },
        { id: 1, label: lang === "fr" ? "Avantages" : "Benefits" },
        { id: 2, label: lang === "fr" ? "Tarifs" : "Pricing" },
        { id: 3, label: "FAQ" }
    ]



    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
            {/* Hero — vert (taxi conventionné) */}
            <section className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-emerald-800 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                            <div className="space-y-3 lg:space-y-4">
                                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                                    Taxi médical à Strasbourg et dans le Grand Est
                                </h1>
                            </div>
                            <p className="text-base sm:text-lg text-green-50 leading-relaxed">
                                Besoin d'un taxi médical à Strasbourg pour une consultation, une hospitalisation ou rendez-vous réguliers ? Faites confiance à Central Taxi 67 ! Notre équipe de chauffeurs de taxi conventionné, toujours ponctuels et sérieux, sillonne le Grand Est pour vous conduire en toute sécurité vers votre établissement de santé. Vous venez de Mulhouse, Colmar, Sélestat, Sarreguemines, Sarrebourg ou Sarre-Union ? Nos taxis médicaux Strasbourg vous assurent un trajet confortable, fiable… et sans stress.
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
                                                        ? "Taxi conventionné à Strasbourg — transport médical"
                                                        : "Conventioned taxi in Strasbourg — medical transport")
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
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white">
                                                {lang === "fr" ? "Service Conventionné" : "Conventioned Service"}
                                            </h3>
                                            <p className="text-sm sm:text-base text-green-100">
                                                {lang === "fr" ? "Pris en charge par la CPAM" : "Covered by CPAM"}
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center space-y-3 sm:space-y-4">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold">
                                            {lang === "fr" ? "Service Conventionné" : "Conventioned Service"}
                                        </h3>
                                        <p className="text-sm sm:text-base text-green-100">
                                            {lang === "fr" ? "Pris en charge par la CPAM" : "Covered by CPAM"}
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
                                            ? 'bg-green-700 text-white shadow-md transform scale-105'
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
                                    Votre service de taxi médical dans la ville de Strasbourg
                                </h2>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                                <p className="text-gray-700 leading-relaxed">
                                    Nos chauffeurs de taxi VSL connaissent le Grand Est et en particulier la commune de Strasbourg comme leur poche, bien mieux que certains GPS ! Hôpitaux, cliniques, centres spécialisés… votre taxi médical à Strasbourg vous transporte sans détour inutile. On vous conduit avec ponctualité et sérénité. Notre service de taxi conventionné dans le Bas-Rhin vous épargne les complications des trajets médicaux. On vient, on vous prend en charge et on vous dépose.
                                </p>
                            </div>

                            {/* Hospitals */}
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-6 lg:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                                    Liste non exhaustive des hôpitaux desservis par nos taxis strasbourgeois
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                    {[
                                        "Hôpitaux Universitaires de Strasbourg",
                                        "Hôpital de Hautepierre",
                                        "Hôpital de la Robertsau",
                                        "Hôpital de l'Elsau",
                                        "Groupe Hospitalier Saint-Vincent",
                                        "Hôpital de Jour Abrapa Saint Guillaume",
                                        "Hôpital de Jour Abrapa Germaine Bord"
                                    ].map((hospital, idx) => (
                                        <div key={idx} className="bg-white rounded-lg p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                            <p className="text-sm sm:text-base font-medium text-gray-900">{hospital}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Clinics */}
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-6 lg:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                                    Voici une liste non exhaustive des cliniques
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                    {[
                                        "Clinique de l'Orangerie",
                                        "Clinique Sainte-Odile",
                                        "Clinique Sainte-Barbe",
                                        "Clinique Sainte-Anne – Fondation Vincent de Paul",
                                        "Clinique du Diaconat",
                                        "Clinique de la Toussaint",
                                        "Clinique Adassa"
                                    ].map((clinic, idx) => (
                                        <div key={idx} className="bg-white rounded-lg p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                            <p className="text-sm sm:text-base font-medium text-gray-900">{clinic}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Coverage Areas */}
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                        Un service de taxi VSL proche de chez vous à Strasbourg
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Dans le 67000, nos taxis conventionnés desservent le centre-ville historique, la cathédrale, la Petite France, la Krutenau, l'Orangerie, les Contades, le quartier des Hallest, ou encore les zones autour de la gare et de la place Kléber. Dans le 67100, nous assurons vos déplacements médicaux depuis Neudorf, la Meinau, l'Esplanade, le Port du Rhin, le Neuhof, le secteur du Stockfeld, ainsi que les zones proches du Rhin et du Jardin des Deux Rives. Notre service de taxi VSL Strasbourg couvre aussi le 67200, Hautepierre, Koenigshoffen, la Montagne-Verte, mais aussi Cronenbourg, Poteries, Elsau et les abords du canal de la Bruche.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                        Service taxi conventionné dans toute l'Eurométropole de Strasbourg (EMS)
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Vous habitez dans l'Eurométropole de Strasbourg ? Où que vous soyez, Central Taxi 67 est dans la place ! À tout moment, vous pouvez réserver notre service de taxi conventionné pris en charge par la CPAM. Notre chauffeur consciencieux vous emmène vers les hôpitaux, cliniques ou cabinets de Strasbourg.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Sachez que la prise en charge en taxi médical conventionné s'étend désormais à l'ensemble des communes de l'Eurométropole dont celle de Strasbourg (67000, 67100, 67200). Voici les 32 autres communes :
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
                                        {[
                                            "Achenheim (67204)",
                                            "Bischheim (67800)",
                                            "Blaesheim (67113)",
                                            "Breuschwickersheim (67112)",
                                            "Eckbolsheim (67201)",
                                            "Eckwersheim (67550)",
                                            "Entzheim (67960)",
                                            "Eschau (67114)",
                                            "Fegersheim (67640)",
                                            "Geispolsheim (67400)",
                                            "Hangenbieten (67980)",
                                            "Hoenheim (67800)",
                                            "Holtzheim (67810)",
                                            "Illkirch-Graffenstaden (67400)",
                                            "Kolbsheim (67117)",
                                            "La Wantzenau (67610)",
                                            "Lampertheim (67450)",
                                            "Lingolsheim (67380)",
                                            "Lipsheim (67640)",
                                            "Mittelhausbergen (67206)",
                                            "Mundolsheim (67450)",
                                            "Niederhausbergen (67207)",
                                            "Oberhausbergen (67205)",
                                            "Oberschaeffolsheim (67203)",
                                            "Osthoffen (67990)",
                                            "Ostwald (67540)",
                                            "Plobsheim (67115)",
                                            "Reichstett (67116)",
                                            "Schiltigheim (67300)",
                                            "Souffelweyersheim (67460)",
                                            "Vendenheim (67550)",
                                            "Wolfisheim (67202)"
                                        ].map((commune, idx) => (
                                            <div key={idx} className="text-sm text-gray-700">
                                                {commune}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                        Trajets médicaux longue distance depuis Mulhouse vers Strasbourg
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Depuis Mulhouse, le chemin vers Strasbourg se dessine à travers Illzach, Ensisheim et la vaste plaine d'Alsace, avant de longer Sélestat et Obernai. Autant vous dire que cet itinéraire de voyage, nos chauffeurs le connaissent par cœur.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Les patients mulhousiens sollicitent souvent un taxi médical Strasbourg pour des rendez-vous médicaux pointus en cardiologie, pneumologie, gastro-entérologie ou néphrologie. Ces spécialités liées aux organes vitaux nécessitent parfois des trajets fréquents. Nous veillons à ce que chaque déplacement soit confortable, même sur de longues distances.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Nous assurons également le transport de patients pris en charge pour des suivis neurologiques ou neurochirurgicaux. Après un AVC, pour une consultation spécialisée ou pour une hospitalisation en psychiatrie, vous pouvez appeler un taxi médical. Enfin, nos taxis accompagnent régulièrement des personnes vers Strasbourg pour des soins liés à l'orthopédie, à la rhumatologie ou à la rééducation.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                        Courses médicales en taxi depuis Colmar, Sélestat et le Haut-Rhin
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Nos taxis médicaux agréés sont habitués à transporter des patients pour des bilans de santé, des consultations de suivi ou des hospitalisations programmées depuis Colmar. On peut aussi prendre en charge les malades à Ribeauvillé, Châtenois, Barr ou Molsheim.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Vous pouvez aussi contacter un taxi conventionné pour vous conduire de votre domicile à Sélestat jusqu'à Strasbourg. Les habitants de Epfig, Dambach-la-Ville et Obernai peuvent aussi nous contacter s'ils souhaitent un accès direct aux grands centres hospitaliers de la région.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Ces trajets en taxi VSL concernent notamment la maternité et la pédiatrie. Les futures mamans et les jeunes enfants nécessitent souvent des soins spécifiques disponibles uniquement à Strasbourg. D'autres patients choisissent nos services de transport sécurisé pour des consultations en gynécologie, en médecine de la reproduction ou en fertilité. Enfin, l'ophtalmologie, l'ORL et l'oncologie figurent aussi parmi les spécialités qui motivent ces déplacements en taxi depuis Colmar et Sélestat.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                        Transports médicaux depuis Sarreguemines, Sarrebourg et Sarre-Union
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Nos taxis médicaux peuvent vous récupérer à Sarreguemines, Saverne, Sarrebourg, Sarre-Union. Vous habitez Phalsbourg, Drulingen ou les environs ? Vous pouvez aussi appeler un taxi privé pour vous conduire directement jusqu'à Strasbourg.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Au fil des trajets, nous ne sommes pas seulement des conducteurs. Nos chauffeurs de taxi VSL Strasbourg sont de vrais compagnons de route. Ils prennent le temps d'écouter chaque passager. Les patients nous confient souvent leurs inquiétudes, partagent leur parcours médical, leurs petites victoires ou leurs moments plus difficiles. Et pour nous, c'est une vraie marque de confiance.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        De nombreux patients utilisent nos taxis médicaux pour des soins spécialisés à Strasbourg : endocrinologie (diabète, thyroïde), dermatologie ou allergologie et immunologie. À chaque trajet, nous adaptons notre service aux besoins spécifiques de chaque patient.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Pricing Tab */}
                    {activeTab === 2 && (
                        <div className="space-y-6 sm:space-y-8">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    Estimations pour les trajets en taxi médical vers Strasbourg depuis les principales villes du Grand Est
                                </h2>
                            </div>

                            {/* Mobile: card layout */}
                            <div className="sm:hidden space-y-4">
                                {[
                                    { ville: "Mulhouse", distance: "115", duree: "1h30", jour: "180 - 220", nuit: "220 - 260" },
                                    { ville: "Colmar", distance: "75", duree: "1h00", jour: "120 - 150", nuit: "150 - 180" },
                                    { ville: "Sélestat", distance: "50", duree: "0h45", jour: "90 - 110", nuit: "110 - 130" },
                                    { ville: "Sarreguemines", distance: "140", duree: "1h50", jour: "200 - 250", nuit: "240 - 290" },
                                    { ville: "Sarrebourg", distance: "90", duree: "1h20", jour: "140 - 170", nuit: "170 - 200" },
                                    { ville: "Sarre-Union", distance: "85", duree: "1h15", jour: "130 - 160", nuit: "160 - 190" }
                                ].map((row, idx) => (
                                    <div key={idx} className="bg-white rounded-xl shadow-lg p-4 space-y-2">
                                        <p className="text-sm font-semibold text-gray-900">{row.ville}</p>
                                        <div className="flex justify-between text-xs text-gray-500">
                                            <span>Distance</span>
                                            <span className="font-medium text-gray-700">{row.distance} km</span>
                                        </div>
                                        <div className="flex justify-between text-xs text-gray-500">
                                            <span>Durée</span>
                                            <span className="font-medium text-gray-700">{row.duree}</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-500">Tarif jour</span>
                                            <span className="font-semibold text-green-600">{row.jour} €</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-500">Tarif nuit</span>
                                            <span className="font-semibold text-emerald-900">{row.nuit} €</span>
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
                                                Ville de départ
                                            </th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Distance estimée (km)
                                            </th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Durée moyenne
                                            </th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Tarif jour estimé (€)
                                            </th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Tarif nuit estimé (€)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {[
                                            { ville: "Mulhouse", distance: "115", duree: "1h30", jour: "180 - 220", nuit: "220 - 260" },
                                            { ville: "Colmar", distance: "75", duree: "1h00", jour: "120 - 150", nuit: "150 - 180" },
                                            { ville: "Sélestat", distance: "50", duree: "0h45", jour: "90 - 110", nuit: "110 - 130" },
                                            { ville: "Sarreguemines", distance: "140", duree: "1h50", jour: "200 - 250", nuit: "240 - 290" },
                                            { ville: "Sarrebourg", distance: "90", duree: "1h20", jour: "140 - 170", nuit: "170 - 200" },
                                            { ville: "Sarre-Union", distance: "85", duree: "1h15", jour: "130 - 160", nuit: "160 - 190" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.ville}</td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{row.distance}</td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{row.duree}</td>
                                                <td className="px-6 py-4 text-sm text-green-600 font-semibold">{row.jour}</td>
                                                <td className="px-6 py-4 text-sm text-emerald-900 font-semibold">{row.nuit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Benefits Tab */}
                    {activeTab === 1 && (
                        <div className="space-y-8 sm:space-y-12">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    Pourquoi choisir notre service de taxi médical dans le Grand Est ?
                                </h2>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                                <p className="text-gray-700 leading-relaxed">
                                    Pas d'inquiétude, pas de contretemps, vous arrivez toujours à vos rendez-vous en toute sérénité en optant pour notre service de taxi médical Grand-Est. À bord, le client aura à sa disposition un intérieur spacieux, bien entretenu, une climatisation fonctionnelle. Le patient profite aussi de tout le confort dont il pourra avoir besoin. Et côté conduite ? Nos chauffeurs professionnels veillent à votre bien-être tout au long du trajet.
                                </p>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    Nos véhicules médicaux sont disponibles 7j/7 et assurons toutes distances : du court trajet dans Strasbourg jusqu'au transfert longue distance vers la capitale alsacienne. Pour réserver une course médicale, rien de plus simple. Un appel, quelques clics sur notre formulaire de réservation taxi, et tout est organisé. Derrière le volant, ce n'est pas seulement un chauffeur que vous trouvez, mais un partenaire fiable et humain pour les familles et accompagnants.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* FAQ Tab */}
                    {activeTab === 3 && (
                        <div className="space-y-6 sm:space-y-8">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    FAQ – Taxi médical à Strasbourg et dans le Grand Est
                                </h2>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                {[
                                    {
                                        question: "Comment je réserve un taxi médical conventionné à Strasbourg ou ailleurs dans le Grand Est ?",
                                        answer: "Un coup de fil à notre centrale ou un clic sur notre formulaire en ligne, et votre taxi médical agréé CPAM est en route. On passe vous chercher à la maison, que vous habitiez Strasbourg, Colmar, Mulhouse, Sélestat, Sarrebourg… ou n'importe quel autre coin du Grand Est."
                                    },
                                    {
                                        question: "Vous couvrez quels quartiers de Strasbourg ?",
                                        answer: "Tous. Absolument tous. Du centre-ville à la Cathédrale, de la Petite France à l'Orangerie, de Neudorf à Hautepierre. On dessert aussi Koenigshoffen, Cronenbourg, Montagne-Verte, Esplanade, Neuhof, Elsau… et même les voisines : Schiltigheim, Illkirch, Eckbolsheim, Lingolsheim."
                                    },
                                    {
                                        question: "Les trajets longue distance vers Strasbourg sont-ils pris en charge par la CPAM ?",
                                        answer: "Oui ! Avec une prescription médicale de transport, vos déplacements longue distance en taxi médical conventionné sont remboursés par la Sécurité Sociale."
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
            <section className="bg-gradient-to-r from-green-800 to-emerald-900 text-white py-12 sm:py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                        {lang === "fr" ? "Besoin d'un taxi médical ?" : "Need a medical taxi?"}
                    </h2>
                    <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
                        {lang === "fr" ? (
                            <>
                                Nos <strong className="font-semibold text-white">véhicules médicaux</strong> sont disponibles 7j/7 et
                                assurons toutes distances : du court trajet dans Strasbourg jusqu&apos;au{" "}
                                <strong className="font-semibold text-white">transfert longue distance</strong> vers la capitale
                                alsacienne. Pour <strong className="font-semibold text-white">réserver une course médicale</strong>,
                                rien de plus simple. Un appel, quelques clics sur notre{" "}
                                <Link href="/book" className="font-medium text-white underline underline-offset-2 hover:text-green-50">
                                    formulaire de réservation taxi
                                </Link>
                                , et tout est organisé. Derrière le volant, ce n&apos;est pas seulement un chauffeur que vous trouvez,
                                mais un partenaire fiable et humain pour les familles et accompagnants.
                            </>
                        ) : (
                            <>
                                Our <strong className="font-semibold text-white">medical vehicles</strong> are available 7 days a week
                                and cover all distances: from short trips in Strasbourg to{" "}
                                <strong className="font-semibold text-white">long-distance transfers</strong> to the Alsatian capital.
                                To <strong className="font-semibold text-white">book a medical ride</strong>, nothing could be simpler.
                                A call, a few clicks on our{" "}
                                <Link href="/book" className="font-medium text-white underline underline-offset-2 hover:text-green-50">
                                    taxi booking form
                                </Link>
                                , and everything is arranged. Behind the wheel, you find not only a driver, but a reliable, human partner
                                for families and companions.
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

export default MedicalPageLayout

