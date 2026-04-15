import SEO from "@/components/SEO"
import PageLayout from "@/components/common/PageLayout"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"
import CityPageLayout from "@/layouts/taxi/CityPageLayout"
import Link from "next/link"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

const linkInlineClass = "font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900"

const TaxiStrasbourg = ({ admin }: { admin: boolean }) => {
    const canonical = "https://www.central-taxi67.fr/taxi/taxi-strasbourg"

    const visiteTouristiqueDescription = (
        <>
            La Petite France, ses châteaux et sa Cathédrale impressionnante… Strasbourg est un vrai trésor. Ses musées et
            ses ruelles pittoresques donnent envie de se perdre. Avec un taxi privé à Strasbourg, vous découvrez la ville
            sans vous fatiguer. Plus besoin de chercher un parking ou de tourner en rond. Vous pouvez même opter pour un{" "}
            <Link href="/taxi/taxi-circuit-touristique-alsace" className={linkInlineClass}>
                taxi circuit touristique Alsace
            </Link>
            . Votre chauffeur vous guide à travers la région. Confort, liberté et découverte garantis !
        </>
    )

    const longuesDistancesDescription = (
        <>
            Notre terrain de jeu ne s&apos;arrête pas aux frontières de l&apos;Eurométropole strasbourgeoise ! Nous
            pouvons aussi vous accompagner pour vos déplacements interurbains vers Colmar, Mulhouse, Haguenau,{" "}
            <Link href="/taxi/taxi-strasbourg-europapark" className={linkInlineClass}>
                Europa Park
            </Link>
            … Choisissez un véhicule adapté à votre groupe et à vos bagages.
        </>
    )

    const serviceGareDescription = (
        <>
            Vous avez un TGV à ne pas rater ? Ou un TER pour une escapade improvisée ? Avec un taxi privé, vous êtes
            pris en charge à votre porte et déposés directement devant la{" "}
            <Link href="/taxi/taxi-strasbourg-gare" className={linkInlineClass}>
                gare de Strasbourg
            </Link>
            . Nos chauffeurs connaissent Strasbourg comme leur poche et savent éviter les embouteillages.
        </>
    )

    const serviceAeroportDescription = (
        <>
            Les vols ne vous attendront pas, mais notre{" "}
            <Link href="/taxi/taxi-strasbourg-aeroport-Entzheim" className={linkInlineClass}>
                taxi aéroport Strasbourg
            </Link>
            , si ! Avec nous, votre trajet vers l&apos;aéroport d&apos;Entzheim se transforme en balade zen. Nos
            chauffeurs anticipent la circulation, utilisent les voies rapides quand il le faut et vous déposent à
            l&apos;heure. Et ce, même si vous réservez à la dernière minute.
        </>
    )

    const serviceBusinessDescription = (
        <>
            Rendez-vous d&apos;affaires ou conférences stressantes ? Respirez : un{" "}
            <Link href="/book" className={`${linkInlineClass} font-semibold`}>
                taxi privé à Strasbourg
            </Link>{" "}
            vous garantit ponctualité, confort et discrétion. Pendant que nous conduisons, vous pouvez relire vos notes,
            passer un coup de fil ou… simplement savourer un moment de détente.
        </>
    )

    const serviceNightDescription = (
        <>
            Après un dîner en amoureux ou professionnel, un concert ou une soirée entre amis, rentrer en toute sécurité
            n&apos;a jamais été aussi simple. Nos{" "}
            <Link href="/book" className={linkInlineClass}>
                taxis de nuit à Strasbourg
            </Link>{" "}
            vous ramènent sans prise de tête, loin des transports en commun limités et du stress de la conduite. Vous
            profitez de Strasbourg et nous gérons le reste… même à 2h du matin.
        </>
    )

    const content = {
        heroTitle: "Taxi Strasbourg",
        heroSubtitle: "Votre service de transport privé fiable et confortable",
        intro:
            "Un train à attraper ? Notre chauffeur de taxi Strasbourg vous dépose à la gare. Un vol à ne pas manquer à l'aéroport de Entzheim ? Oubliez le stress du parking, on vous conduit jusqu'au terminal. Une soirée qui se prolonge ? Appeler un taxi chez Central Taxi 67, il vous ramènera chez vous en toute sécurité. Nos chauffeurs connaissent l'Eurométropole strasbourgeoise dans ses moindres recoins. Nos véhicules sont modernes et équipés pour votre confort.",
        heroCardImageSrc: "/images/hero/taxi-strasbourg-hero.png",
        heroCardImageAlt: "Taxis devant la Cathédrale de Strasbourg",
        benefits: {
            title: "Les avantages de choisir un taxi à Strasbourg",
            subtitle:
                "À Strasbourg, on a le tram, le vélo, les VTC… mais quand il faut vraiment arriver à l'heure, le taxi reste le roi de la mobilité urbaine.",
            items: [
                {
                    title: "La praticité d'un service de transport de personnes taillé sur mesure",
                    description:
                        "Fini les attentes interminables sur le quai ou les détours imposés par une appli GPS capricieuse. Avec un service taxi Strasbourg, c'est simple : il vient à vous, où que vous soyez, et vous dépose pile là où vous devez aller. Pas de plan B, pas de marche forcée, vous aurez droit à un trajet direct et sans prise de tête.",
                },
                {
                    title: "Le confort et la sécurité à bord d'un taxi privé",
                    description:
                        "Centrale Taxi 67 propose des véhicules haut de gamme. Les passagers bénéficient d'une climatisation fonctionnelle et d'un intérieur impeccable. La mécanique est toujours parfaitement entretenue. Ajoutez à cela un chauffeur professionnel, formé et courtois, et vous obtenez une expérience où la seule chose à faire est de se détendre.",
                },
                {
                    title: "Payer comme vous voulez",
                    description:
                        "Chez Taxi Strasbourg - Central Taxi 67, pas de prise de tête pour régler votre course : carte bancaire, espèces ou virement, vous choisissez le mode qui vous arrange.",
                },
                {
                    title: "L'expérience d'un chauffeur local",
                    description:
                        "Connaître Strasbourg comme sa poche, cela change tout. Votre chauffeur de taxi privé sait éviter les zones saturées. Il peut contourner les bouchons de la place de l'Étoile ou encore dénicher la petite ruelle qui vous mènera plus vite à la gare. Bref, un vrai GPS humain, mais avec le sourire en prime.",
                },
                {
                    title: "L'arme secrète : les voies de bus.",
                    description:
                        "Un gain de temps précieux grâce à cet accès réservé. Pendant que les VTC et Uber restent coincés dans les embouteillages, vous glissez tranquillement jusqu'à destination. Pourquoi ? Parce que les taxis strasbourgeois ont le privilège d'emprunter les voies réservées aux bus. Nos chauffeurs utilisent ces voies pour rejoindre rapidement la gare : côté Nord par le boulevard Wilson et côté Sud par le boulevard de Metz.",
                },
            ],
        },
        services: {
            title: "Service de taxi Strasbourg disponible 24h/24 et 7j7",
            subtitle:
                "Notre service de taxi Strasbourg est à votre disposition pour vous accompagner 24h/24 et 7j/7. On vous emmène où vous voulez, quand vous voulez, de jour comme de nuit, y compris les jours fériés.",
            items: [
                {
                    title: "Trajets vers la gare de Strasbourg",
                    description: serviceGareDescription,
                },
                {
                    title: "Transferts aéroport Strasbourg Entzheim en toute sérénité",
                    description: serviceAeroportDescription,
                },
                {
                    title: "Déplacements professionnels et conférences",
                    description: serviceBusinessDescription,
                },
                {
                    title: "Sorties nocturnes et retours en toute sécurité",
                    description: serviceNightDescription,
                },
                {
                    title: "Mariages, événements et occasions spéciales",
                    description:
                        "Pour vos occasions spéciales comme les mariages, anniversaires, cérémonies ou fêtes, nos services de taxis strasbourgeois apportent une touche d'élégance. Nos véhicules sont haut de gamme. Nos chauffeurs ? Élégants et courtois. Vous pouvez réserver une limousine chic, un monospace spacieux ou un van confortable. Chaque trajet devient un moment mémorable.",
                },
                {
                    title: "Visites touristiques",
                    description: visiteTouristiqueDescription,
                },
                {
                    title: "Longues distances vers Colmar, Mulhouse ou Haguenau",
                    description: longuesDistancesDescription,
                },
            ],
        },
        availability: {
            title: "Service de taxi Strasbourg disponible 24h/24 et 7j7",
            description:
                "Notre service de taxi Strasbourg est à votre disposition pour vous accompagner 24h/24 et 7j/7. On vous emmène où vous voulez, quand vous voulez, de jour comme de nuit, y compris les jours fériés.",
        },
        station: {
            title: "Trajets vers la gare de Strasbourg",
            description: serviceGareDescription,
        },
        airport: {
            title: "Transferts aéroport Strasbourg Entzheim en toute sérénité",
            description: serviceAeroportDescription,
        },
        business: {
            title: "Déplacements professionnels et conférences",
            description: serviceBusinessDescription,
        },
        night: {
            title: "Sorties nocturnes et retours en toute sécurité",
            description: serviceNightDescription,
        },
        events: {
            title: "Mariages, événements et occasions spéciales",
            description:
                "Pour vos occasions spéciales comme les mariages, anniversaires, cérémonies ou fêtes, nos services de taxis strasbourgeois apportent une touche d'élégance. Nos véhicules sont haut de gamme. Nos chauffeurs ? Élégants et courtois. Vous pouvez réserver une limousine chic, un monospace spacieux ou un van confortable. Chaque trajet devient un moment mémorable.",
        },
        tourism: {
            title: "Visites touristiques",
            description: visiteTouristiqueDescription,
        },
        longDistance: {
            title: "Longues distances vers Colmar, Mulhouse ou Haguenau",
            description: longuesDistancesDescription,
        },
        pricing: {
            title: "Estimations de durée et tarif pour les trajets les plus demandés depuis Strasbourg",
            table: [
                { route: "Strasbourg → Aéroport d'Entzheim", duration: "20 min", day: "35 – 40 €", night: "45 – 60 €" },
                { route: "Strasbourg → Circuit touristique Alsace (ex. Route des Vins)", duration: "4 à 6 h", day: "150 – 220 €" },
                { route: "Strasbourg → Gare (SNCF ou centre-ville)", duration: "5 à 15 min selon gare", day: "10 – 20 €", night: "15 – 25 €" },
                { route: "Strasbourg → Europa Park", duration: "1h à 1h15", day: "100 – 120 €", night: "150– 180 €" },
            ],
            note:
                "Les prix et temps de trajet indiqués restent des estimations et peuvent évoluer en fonction du type de véhicule, des conditions de circulation ou des arrêts effectués. Seul le montant indiqué par le taximètre fait référence.",
        },
        cta: {
            title: "Réservez votre taxi à Strasbourg dès maintenant !",
            description:
                "Profitez d'un trajet confortable, rapide et sécurisé, disponible 24h/24 et 7j/7. Utilisez le formulaire de réservation de taxi en ligne si vous avez besoin d'un chauffeur professionnel.",
        },
        faq: {
            title: "FAQ taxi à Strasbourg",
            items: [
                {
                    title: "Quels types de trajets pouvez-vous réserver avec un taxi à Strasbourg ?",
                    description:
                        "Nos taxis à Strasbourg couvrent tous vos besoins : transferts vers l'aéroport d'Entzheim, trajets vers la gare, déplacements professionnels, visites touristiques, sorties nocturnes et même circuits touristiques en Alsace. Nous proposons aussi des trajets interurbains vers Colmar, Mulhouse, Haguenau ou Europa Park.",
                },
                {
                    title: "Quels types de véhicules proposez-vous ?",
                    description:
                        "Nous mettons à disposition des berlines, monospaces et vans spacieux. Tous nos véhicules sont haut de gamme et parfaitement entretenus. Ils sont adaptés à votre nombre de passagers",
                },
                {
                    title: "Comment sont calculés les tarifs des trajets ?",
                    description:
                        "Nos tarifs sont précis et transparents : ils se basent sur la durée et la distance, ajustés si nécessaire selon le véhicule ou le trafic. Le taximètre reste la référence ultime. Nous proposons également des tarifs compétitifs pour les trajets longue distance et les circuits touristiques.",
                },
                {
                    title: "Peut-on bénéficier de services supplémentaires à bord ?",
                    description: (
                        <>
                            Oui ! Nos taxis offrent le Wi-Fi gratuit, des bouteilles d&apos;eau, des sièges auto pour
                            enfants sur demande, et un accueil personnalisé pour les transferts aéroport. Pour les
                            occasions spéciales, vous pouvez également réserver des véhicules élégants comme des
                            limousines ou vans confortables. Retrouvez ici les détails sur nos{" "}
                            <Link href="/services/supplementaire" className={linkInlineClass}>
                                (services supplémentaires)
                            </Link>
                            .
                        </>
                    ),
                },
            ],
        },
    }

    return (
        <PageLayout page="/taxi/taxi-strasbourg" admin={admin}>
            <SEO
                title="Taxi Strasbourg pas cher et fiable : Réservez dès maintenant"
                description="Déplacements professionnels, transferts aéroport ou sorties nocturnes : notre service de taxi à Strasbourg assure ponctualité et sécurité à toute heure."
                canonical={canonical}
                structuredDataType="TaxiService"
                serviceName="Taxi Strasbourg - Central Taxi 67"
                serviceDescription="Service de taxi professionnel à Strasbourg. Déplacements professionnels, transferts aéroport, sorties nocturnes. Service 24/7."
                serviceUrl={canonical}
            />
            <CityPageLayout content={content} />
        </PageLayout>
    )
}

export default TaxiStrasbourg



