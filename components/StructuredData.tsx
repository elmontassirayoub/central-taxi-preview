import Head from "next/head"

type StructuredDataProps = {
    type: "Organization" | "LocalBusiness" | "TaxiService"
    serviceName?: string
    serviceDescription?: string
    serviceUrl?: string
}

const StructuredData: React.FC<StructuredDataProps> = ({ 
    type, 
    serviceName, 
    serviceDescription, 
    serviceUrl 
}) => {
    const baseOrganization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Central Taxi 67",
        "alternateName": "Taxi Strasbourg - Central Taxi 67 - Aéroport & Gare",
        "url": "https://www.central-taxi67.fr",
        "logo": "https://www.central-taxi67.fr/logo.png",
        "telephone": "+33647600171",
        "email": "contact@strasbourgtaxi.fr",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "5 rue de la Moselle",
            "addressLocality": "Schiltigheim",
            "postalCode": "67300",
            "addressCountry": "FR"
        },
        "sameAs": [
            "https://www.tiktok.com/@central.taxi67",
            "https://www.facebook.com/TaxiStrasbourg.CentralTaxi67.AeroportGare",
            "https://maps.app.goo.gl/42FjtZKxMdqq1g2Y8?g_st=ic",
            "https://youtube.com/@taxisstrasbourgcentraltaxi67?si=SOBZdOFlr99QnGf0"
        ]
    }

    const localBusiness = {
        ...baseOrganization,
        "@type": "LocalBusiness",
        "priceRange": "€€",
        "openingHours": [
            "Mo-Su 00:00-24:00"
        ],
        "areaServed": [
            {
                "@type": "City",
                "name": "Strasbourg"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Bas-Rhin"
            },
            {
                "@type": "Region",
                "name": "Grand Est"
            },
            {
                "@type": "Place",
                "name": "Aéroports internationaux : Strasbourg Entzheim, Francfort, Stuttgart, Bâle-Mulhouse, Baden-Baden"
            }
        ]
    }

    const taxiService = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": serviceName || "Taxi Strasbourg - Central Taxi 67",
        "description": serviceDescription || "Service de taxi professionnel à Strasbourg et dans le Grand Est",
        "url": serviceUrl || "https://www.central-taxi67.fr",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Central Taxi 67",
            "telephone": "+33647600171",
            "email": "contact@strasbourgtaxi.fr",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "5 rue de la Moselle",
                "addressLocality": "Schiltigheim",
                "postalCode": "67300",
                "addressCountry": "FR"
            }
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Strasbourg"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Bas-Rhin"
            },
            {
                "@type": "Region",
                "name": "Grand Est"
            }
        ],
        "availableService": [
            "Transferts aéroports",
            "Transferts gares",
            "Circuits touristiques",
            "Transport médical conventionné",
            "Courses urbaines",
            "Déplacements professionnels"
        ],
        "priceRange": "€€",
        "openingHours": "Mo-Su 00:00-24:00"
    }

    let schema: any = baseOrganization

    if (type === "LocalBusiness") {
        schema = localBusiness
    } else if (type === "TaxiService") {
        schema = taxiService
    }

    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
            />
        </Head>
    )
}

export default StructuredData

