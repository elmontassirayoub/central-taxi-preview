import Book from "@/components/common/Buttons/Book"
import Call from "@/components/common/Buttons/Call"
import HeroTaxiCTA from "@/components/common/Buttons/HeroTaxiCTA"
import { useAppContext } from "@/context/appContext"
import Image from "next/image"
import { type ReactNode, useState } from "react"

type ContentSectionItem = { title: string; description: string | ReactNode }

type CityPageContent = {
    heroTitle: string
    heroSubtitle: string
    intro: string
    heroCardImageSrc?: string
    heroCardImageAlt?: string
    services: { title: string; subtitle?: string; items: ContentSectionItem[] }
    benefits: { title: string; subtitle?: string; items: ContentSectionItem[] }
    availability: { title: string; description: string }
    station: { title: string; description: string | ReactNode }
    airport: { title: string; description: string | ReactNode }
    business: { title: string; description: string | ReactNode }
    night: { title: string; description: string | ReactNode }
    events: { title: string; description: string }
    tourism: { title: string; description: string | ReactNode }
    longDistance: { title: string; description: string | ReactNode }
    pricing: { title: string; table: { route: string | ReactNode; duration: string; day?: string; night?: string }[]; note: string }
    cta: { title: string; description: string }
    faq: { title: string; items: ContentSectionItem[] }
}

const CityPageLayout = ({ content }: { content: CityPageContent }) => {
    const { lang } = useAppContext()
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        { id: 0, label: lang === "fr" ? "Nos Services" : "Our Services" },
        { id: 1, label: lang === "fr" ? "Avantages" : "Benefits" },
        { id: 2, label: lang === "fr" ? "Tarifs" : "Pricing" },
        { id: 3, label: "FAQ" }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
            {/* Hero — bleu foncé */}
            <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                            <div className="space-y-3 lg:space-y-4">
                                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">{content.heroTitle}</h1>
                                <p className="text-lg sm:text-xl lg:text-2xl text-blue-200 font-light">{content.heroSubtitle}</p>
                            </div>
                            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">{content.intro}</p>
                            <HeroTaxiCTA />
                        </div>
                        <div className="relative order-1 lg:order-2">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                                {content.heroCardImageSrc ? (
                                    <>
                                        <div className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-white/5">
                                            <Image
                                                src={content.heroCardImageSrc}
                                                alt={content.heroCardImageAlt || (lang === "fr" ? "Taxis à Strasbourg" : "Taxis in Strasbourg")}
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
                                            <p className="text-sm sm:text-base text-blue-200">
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
                                        <h3 className="text-xl sm:text-2xl font-bold">{lang === "fr" ? "Service 24/7" : "24/7 Service"}</h3>
                                        <p className="text-sm sm:text-base text-blue-200">{lang === "fr" ? "Disponible tous les jours" : "Available every day"}</p>
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
                                            ? 'bg-slate-800 text-white shadow-md transform scale-105 ring-1 ring-blue-700/50'
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
                                    {content.services.title}
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                                    {content.services.subtitle || (lang === "fr" ? "Découvrez nos services de taxi à Strasbourg" : "Discover our Strasbourg taxi services")}
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {content.services.items.map((item, idx) => (
                                    <div key={idx} className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-shadow">
                                        <div className="space-y-2 sm:space-y-3">
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{item.title}</h3>
                                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Pricing Tab */}
                    {activeTab === 2 && (
                        <div className="space-y-6 sm:space-y-8">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    {content.pricing.title}
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 px-4">
                                    {lang === "fr" ? "Tarifs transparents et compétitifs" : "Transparent and competitive pricing"}
                                </p>
                            </div>

                            {/* Mobile: card layout */}
                            <div className="sm:hidden space-y-4">
                                {content.pricing.table.map((row, idx) => (
                                    <div key={idx} className="bg-white rounded-xl shadow-lg p-4 space-y-2">
                                        <p className="text-sm font-semibold text-gray-900">{row.route}</p>
                                        <div className="flex justify-between text-xs text-gray-500">
                                            <span>{lang === "fr" ? "Durée" : "Duration"}</span>
                                            <span className="font-medium text-gray-700">{row.duration}</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-500">{lang === "fr" ? "Tarif Jour" : "Day Rate"}</span>
                                            <span className="font-semibold text-green-600">{row.day ?? "-"}</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-500">{lang === "fr" ? "Tarif Nuit" : "Night Rate"}</span>
                                            <span className="font-semibold text-blue-600">{row.night ?? "-"}</span>
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
                                        {content.pricing.table.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                    {row.route}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {row.duration}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-green-600 font-semibold">
                                                    {row.day ?? "-"}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-blue-600 font-semibold">
                                                    {row.night ?? "-"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
                                <p className="text-xs sm:text-sm text-yellow-800 text-center">
                                    {content.pricing.note}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Benefits Tab */}
                    {activeTab === 1 && (
                        <div className="space-y-8 sm:space-y-12">
                            <div className="text-center space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    {content.benefits.title}
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 px-4">
                                    {content.benefits.subtitle || (lang === "fr" ? "Découvrez tous nos avantages" : "Discover all our benefits")}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                                {content.benefits.items.map((benefit, idx) => (
                                    <div key={idx} className="bg-white rounded-xl shadow-lg p-5 sm:p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="space-y-3 sm:space-y-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                    {content.faq.title}
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 px-4">
                                    {lang === "fr" ? "Questions fréquemment posées" : "Frequently asked questions"}
                                </p>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                {content.faq.items.map((faq, idx) => (
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
            <section className="bg-gradient-to-r from-slate-950 to-blue-950 text-white py-12 sm:py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                        {content.cta.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-blue-200 mb-6 sm:mb-8">
                        {content.cta.description}
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

export default CityPageLayout


