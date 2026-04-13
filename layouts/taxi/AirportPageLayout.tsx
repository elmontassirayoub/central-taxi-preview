import Data, { TaxiPageContent } from "@/assets/data/taxi"
import Book from "@/components/common/Buttons/Book"
import Call from "@/components/common/Buttons/Call"
import HeroTaxiCTA from "@/components/common/Buttons/HeroTaxiCTA"
import { useAppContext } from "@/context/appContext"
import Image from "next/image"
import { useState } from "react"

const AirportPageLayout: React.FC<{
    subtitle?: string
    pricingSubtitle?: string
    benefitsSubtitle?: string
    heroCardImageSrc?: string
    heroCardImageAlt?: string
}> = ({ subtitle, pricingSubtitle, benefitsSubtitle, heroCardImageSrc, heroCardImageAlt }) => {
    const { lang } = useAppContext()
    const pageData: TaxiPageContent = Data[lang]["aeroport"]
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        { id: 0, label: lang === "fr" ? "Nos Services" : "Our Services" },
        { id: 1, label: lang === "fr" ? "Avantages" : "Benefits" },
        { id: 2, label: lang === "fr" ? "Tarifs" : "Pricing" },
        { id: 3, label: "FAQ" }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-100">
            {/* Hero — bleu ciel */}
            <section className="relative overflow-hidden bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                            <div className="space-y-3 lg:space-y-4">
                                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                                    {pageData.heroTitle}
                                </h1>
                                <p className="text-lg sm:text-xl lg:text-2xl text-sky-50 font-light">
                                    {pageData.heroSubtitle}
                                </p>
                            </div>
                            <p className="text-base sm:text-lg text-white/95 leading-relaxed">
                                {pageData.intro}
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
                                                alt={heroCardImageAlt || (lang === "fr" ? "Taxi aéroport Strasbourg Entzheim" : "Strasbourg Entzheim airport taxi")}
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
                                            <p className="text-sm sm:text-base text-sky-50">
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
                                        <p className="text-sm sm:text-base text-sky-50">
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
                                            ? 'bg-sky-600 text-white shadow-md transform scale-105'
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
                                    {pageData.sections[0]?.title}
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                                    {subtitle || (lang === "fr" ? "Découvrez nos services de transfert aéroport professionnels" : "Discover our professional airport transfer services")}
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {pageData.sections[0]?.items.map((item, idx) => (
                                    <div key={idx} className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-shadow">
                                        <div className="space-y-2 sm:space-y-3">
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{item.title}</h3>
                                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Train Stations */}
                            <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl p-4 sm:p-6 lg:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                                    {pageData.sections[1]?.title}
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                                    {pageData.sections[1]?.items.map((station, idx) => (
                                        <div key={idx} className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                            <p className="text-xs sm:text-sm font-medium text-gray-900">{station.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Pricing Tab */}
                    {activeTab === 2 && (
                        <div className="space-y-6 sm:space-y-8">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    {pageData.sections[2]?.title}
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 px-4">
                                    {pricingSubtitle || (lang === "fr" ? "Tarifs transparents et compétitifs" : "Transparent and competitive pricing")}
                                </p>
                            </div>

                            {/* Mobile: card layout */}
                            <div className="sm:hidden space-y-4">
                                {pageData.sections[2]?.items.map((route, idx) => {
                                    const parts = route.description.split(' - ')
                                    const duration = parts[0] || ''
                                    const ratesPart = parts[1] || ''
                                    const dayMatch = ratesPart.match(/Tarif jour:\s*([^/]+)/)
                                    const nightMatch = ratesPart.match(/Tarif nuit:\s*(.+)/)
                                    const dayRate = dayMatch ? dayMatch[1].trim() : '-'
                                    const nightRate = nightMatch ? nightMatch[1].trim() : '-'
                                    return (
                                        <div key={idx} className="bg-white rounded-xl shadow-lg p-4 space-y-2">
                                            <p className="text-sm font-semibold text-gray-900">{route.title}</p>
                                            <div className="flex justify-between text-xs text-gray-500">
                                                <span>{lang === "fr" ? "Durée" : "Duration"}</span>
                                                <span className="font-medium text-gray-700">{duration}</span>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span className="text-gray-500">{lang === "fr" ? "Tarif Jour" : "Day Rate"}</span>
                                                <span className="font-semibold text-green-600">{dayRate}</span>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span className="text-gray-500">{lang === "fr" ? "Tarif Nuit" : "Night Rate"}</span>
                                                <span className="font-semibold text-sky-700">{nightRate}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Desktop: table layout */}
                            <div className="hidden sm:block bg-white rounded-2xl shadow-xl overflow-hidden">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {lang === "fr" ? "Trajet" : "Route"}
                                            </th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {lang === "fr" ? "Durée" : "Duration"}
                                            </th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {lang === "fr" ? "Tarif Jour" : "Day Rate"}
                                            </th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {lang === "fr" ? "Tarif Nuit" : "Night Rate"}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {pageData.sections[2]?.items.map((route, idx) => {
                                            const parts = route.description.split(' - ')
                                            const duration = parts[0] || ''
                                            const ratesPart = parts[1] || ''
                                            const dayMatch = ratesPart.match(/Tarif jour:\s*([^/]+)/)
                                            const nightMatch = ratesPart.match(/Tarif nuit:\s*(.+)/)
                                            const dayRate = dayMatch ? dayMatch[1].trim() : '-'
                                            const nightRate = nightMatch ? nightMatch[1].trim() : '-'
                                            return (
                                                <tr key={idx} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{route.title}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">{duration}</td>
                                                    <td className="px-6 py-4 text-sm text-green-600 font-semibold">{dayRate}</td>
                                                    <td className="px-6 py-4 text-sm text-sky-700 font-semibold">{nightRate}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
                                <p className="text-xs sm:text-sm text-yellow-800 text-center">
                                    {lang === "fr" ? "Les tarifs indiqués sont donnés à titre informatif. Seul le montant affiché au taximètre fait foi." : "The prices shown are for information only. Only the amount displayed on the taximeter is authoritative."}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Benefits Tab */}
                    {activeTab === 1 && (
                        <div className="space-y-8 sm:space-y-12">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    {pageData.sections[3]?.title}
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 px-4">
                                    {benefitsSubtitle || (lang === "fr" ? "Pourquoi choisir Central Taxi 67 ?" : "Why choose Central Taxi 67?")}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                                {pageData.sections[3]?.items.map((benefit, idx) => (
                                    <div key={idx} className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="space-y-3 sm:space-y-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{benefit.title}</h3>
                                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* FAQ Tab */}
                    {activeTab === 3 && (
                        <div className="space-y-6 sm:space-y-8">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    {pageData.sections[4]?.title}
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 px-4">
                                    {lang === "fr" ? "Questions fréquemment posées" : "Frequently asked questions"}
                                </p>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                {pageData.sections[4]?.items.map((faq, idx) => (
                                    <div key={idx} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-2">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                            {faq.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-sky-700 to-cyan-700 text-white py-12 sm:py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                        {lang === "fr" ? "Prêt à réserver votre transfert ?" : "Ready to book your transfer?"}
                    </h2>
                    <p className="text-lg sm:text-xl text-sky-50 mb-6 sm:mb-8">
                        {lang === "fr" ? "Réservez maintenant et voyagez en toute sérénité" : "Book now and travel with complete peace of mind"}
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

export default AirportPageLayout
