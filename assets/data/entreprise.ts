export type EntrepriseOptionType = {
    title: string,
    description: string,
    features: string[]
}

export type EntrepriseType = {
    title: string,
    description: string,
    options: EntrepriseOptionType[],
    footer: string
}

type DataType = {
    fr: EntrepriseType;
    en: EntrepriseType;
    [key: string]: any;
};

const Data: DataType = {
    fr: {
        title: "Taxi pour les entreprises à Strasbourg",
        description: "Centre Taxi 67 propose une large gamme de services adaptés aux besoins des entreprises. Sollicitez notre service de Taxi Strasbourg pour tous vos déplacements professionnels. Nos taxis peuvent accueillir entre 1 à 8 personnes par trajet.",
        options: [
            {
                title: "Transfert aéroport Strasbourg pour entreprises",
                description: "Profitez du meilleur service de transfert aéroport de l’Eurométropole et d’Alsace, valable dans les deux sens. Notre prestation de transport vous donne droit à un accueil ponctuel et personnalisé en salle d’arrivée. Bénéficiez aussi d’une assistance avec les bagages et d’un trajet confortable avec un chauffeur serviable et professionnel. Nos services comprennent le :",
                features: [
                    "Transfert Strasbourg – Aéroport Entzheim",
                    "Transfert Strasbourg – Aéroport de Baden Baden",
                    "Transfert Strasbourg – Aéroport Bâle Mulhouse",
                    "Transfert Strasbourg – Aéroport Stuttgart",                    
                ]
            },
            {
                title: "Transfert gare de Strasbourg pour professionnels.",
                description: "Réservez un service de transport rapide porte à porte pour ne jamais manquer votre train à la gare TGV. Vous pouvez aussi solliciter un chauffeur pour vous prendre en charge directement sur le quai. Contactez-nous via le formulaire de réservation si votre entreprise a besoin d’un service taxi Strasbourg pour un :",
                features: [
                    "Transfert Gare de Strasbourg",
                    "Transfert Gare de Offenbourg",
                    "Transfert Gare – Aéroport",                    
                ]
            },
            {
                title: "Déplacement pour événements à Strasbourg et en Alsace",
                description: "Commandez notre service de taxi événementiel à Strasbourg pour vos déplacements dans toute la région d’Alsace. Laissez-nous contribuer au succès de votre événement d’entreprise grâce à notre service de transport de première classe adaptés pour les occasions comme les :",
                features: [
                    "Conférences,",
                    "Séminaires,",
                    "Réceptions,",
                    "Dîners d'affaires",                   
                ]
            },
            {
                title: "Transport pour rendez-vous d’affaires",
                description: "Ne serait-il pas plus élégant de ne pas avoir à conduire lorsqu’on a un rendez-vous professionnel avec un client potentiel ou un futur client ? Faites appel à notre prestation de chauffeur privé pour faire bonne impression ! On peut vous conduire à votre lieu de rendez-vous, peu importe où il se trouve en Alsace, y compris les villes de :",
                features: [
                    "Colmar",
                    "Haguenau",
                    "Sélestat",
                    "Obernai",
                    "Saint-Louis",
                    "Illkirch-Graffenstaden",
                    "Wissembourg",                    
                ]
            },
            {
                title: "Transport VIP dans l’Eurométropole de Strasbourg et Alsace",
                description: "Soucieux de l’image de votre entreprise ? Offrez à vos partenaires d’affaires, cadres supérieurs et vos invités de marque à l’aéroport ou à la gare le privilège de voyager dans une limousine taxi. Réservez votre service de transport en taxi VIP pour les transferts gare et aéroports et pour tout déplacement à Strasbourg. Notre société de taxi vous promet à bord de ses véhicules :",
                features: [
                    "Confort",
                    "Discrétion",
                    "Efficacité",
                    "Courtoisie",                    
                ]
            },
            {
                title: "Transport de plis et de colis",
                description: "Des documents sensibles à envoyer à des partenaires ? Un paquet important à livrer dans la région d’Alsace ? Notre société de taxi à Strasbourg assure un service de transport de plis et colis au meilleur prix, garanti par des chauffeurs expérimentés et sérieux.",
                features: [
                    "Service de suivi en temps réel",
                    "Livraison express",
                    "Livraison planifiée",                    
                ]
            },
            {
                title: "Tourisme d’affaires",
                description: "Qui dit que vous ne pouvez pas allier plaisir et travail ? Réservez avec nos chauffeurs de taxi dans Strasbourg Eurométropole des circuits touristiques qui s’ajustent à vos disponibilités et centres d’intérêt.",
                features: [
                    "Visite guidée des institutions européennes",
                    "Escapade gourmande dans les vignobles alsaciens",
                    "Découverte culturelle au centre de Strasbourg",
                    "Découverte des sites touristiques d’Alsace en taxi",                    
                ]
            },
            {
                title: "Service de mise à disposition",
                description: "Besoin d’un service de transport de personnes flexible pour vos équipes et invités d’entreprises ? Optez pour notre service de mise à disposition de van ou monospace. Notre chauffeur gère tous vos déplacements avec le plus grand professionnalisme. Il maîtrise la région et connaît les itinéraires adaptés à chaque trajet. Vous pouvez réserver un taxi strasbourgeois pour :",
                features: [
                    "Quelques heures",
                    "Une demi-journée",
                    "Une journée complète",                    
                ]
            },
        ],
        footer: "Pour chaque trajet effectué dans le cadre professionnel, profitez de l’expertise et du sérieux de nos chauffeurs accrédités par la Préfecture de Police de Strasbourg. Faites votre réservation de taxi en ligne ou par téléphone."
    },
    en: {
        title: "Taxi for businesses in Strasbourg",
        description: "Center Taxi 67 offers a wide range of services adapted to the needs of businesses. Request our Strasbourg Taxi service for all your business trips. Our taxis can accommodate between 1 and 8 people per trip.",
        options: [
            {
                title: "Strasbourg airport transfer for businesses",
                description: "Take advantage of the best airport transfer service in the Eurometropolis and Alsace, valid in both directions. Our transport service entitles you to a punctual and personalized welcome in the arrival room. Also benefit from assistance with luggage and a comfortable journey with a helpful and professional driver. Our services include:",
                features: [
                    "Transfer Strasbourg – Entzheim Airport",
                    "Transfer Strasbourg – Baden Baden Airport",
                    "Transfer Strasbourg – Basel Mulhouse Airport",
                    "Transfer Strasbourg – Stuttgart Airport",                  
                ]
            },
            {
                title: "Strasbourg train station transfer for professionals.",
                description: "Book a fast door-to-door transport service so you never miss your train at the TGV station. You can also request a driver to pick you up directly from the platform. Contact us via the reservation form if your company needs a Strasbourg taxi service for:",
                features: [
                    "Strasbourg Station Transfer",
                    "Offenburg Train Station Transfer",
                    "Transfer Station – Airport",                   
                ]
            },
            {
                title: "Travel for events in Strasbourg and Alsace",
                description: "Order our event taxi service in Strasbourg for your travels throughout the Alsace region. Let us contribute to the success of your corporate event with our first-class transportation service suitable for occasions such as:",
                features: [
                    "Conferences,",
                    "Seminars,",
                    "Receptions,",
                    "Business dinners",                   
                ]
            },
            {
                title: "Transportation for business meetings",
                description: "Wouldn't it be more elegant not to have to drive when you have a professional meeting with a potential client or a future client? Use our private driver service to make a good impression! We can take you to your meeting place, no matter where it is in Alsace, including the cities of:",
                features: [
                    "Colmar",
                    "Haguenau",
                    "Séléstat",
                    "Obernai",
                    "Saint Louis",
                    "Illkirch-Graffenstaden",
                    "Wissembourg",                  
                ]
            },
            {
                title: "VIP transport in the Eurometropolis of Strasbourg and Alsace",
                description: "Concerned about the image of your company? Offer your business partners, senior executives and your distinguished guests at the airport or train station the privilege of traveling in a limousine taxi. Book your VIP taxi transport service for train station and airport transfers and for any trip to Strasbourg. Our taxi company promises you on board its vehicles:",
                features: [
                    "Comfort",
                    "Discretion",
                    "Efficiency",
                    "Courtesy",                   
                ]
            },
            {
                title: "Transport of letters and packages",
                description: "Sensitive documents to send to partners? An important package to be delivered to the Alsace region? Our taxi company in Strasbourg provides a mail and parcel transport service at the best price, guaranteed by experienced and serious drivers.",
                features: [
                    "Real-time tracking service",
                    "Express delivery",
                    "Scheduled delivery",                   
                ]
            },
            {
                title: "Business tourism",
                description: "Who says you can't combine pleasure and work? Book tourist tours with our taxi drivers in Strasbourg Eurométropole that adapt to your availability and interests.",
                features: [
                    "Guided tour of the European institutions",
                    "Gourmet getaway in the Alsatian vineyards",
                    "Cultural discovery in the center of Strasbourg",
                    "Discovery of the tourist sites of Alsace by taxi",                
                ]
            },
            {
                title: "Delivery service",
                description: "Need a flexible passenger transport service for your teams and corporate guests? Opt for our van or minivan provision service. Our driver manages all your trips with the utmost professionalism. He masters the region and knows the routes suitable for each journey. You can book a Strasbourg taxi for:",
                features: [
                    "A few hours",
                    "Half a day",
                    "A full day",                  
                ]
            },
        ],
        footer: "For each trip made in a professional context, benefit from the expertise and seriousness of our drivers accredited by the Strasbourg Police Prefecture. Make your taxi reservation online or by phone."
    },
}

export default Data