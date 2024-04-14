export type ParticulierOption = {
    title: string,
    description: string,
    options: string[]
}

export type ParticulierType = {
    title: string,
    description: string,
    options: ParticulierOption[]
}

type DataType = {
    fr: ParticulierType;
    en: ParticulierType;
    [key: string]: any;
};

const Data: DataType = {
    fr: {
        title: "Taxi pour les particuliers Strasbourg - Alsace",
        description: "Profitez de tarifs fixes et évitez le stress de devoir attendre dans la rue grâce à notre service de transport de personnes à Strasbourg. Votre confort et votre satisfaction sont la priorité de Central Taxi 67. Tous vos besoins de mobilité en ville et partout en Alsace sont pris en charge par nos chauffeurs privés expérimentés : transferts aéroports, gares, occasions spéciales, courses quotidiennes…",
        options: [
            {
                title: "Transfert aéroport Strasbourg",
                description: "Un vol à prendre ? Fiez-vous à nos services de transfert aéroport rapide et fiable à Strasbourg. On met à votre disposition un van ou un monospace pour vous accueillir ou vous ramener à l’aéroport. Pas de panique, notre chauffeur vous aide avec vos valises. Appelez-nous si votre famille a besoin d’un chauffeur pour un :",
                options: [
                    "Transfert Strasbourg – Aéroport Entzheim",
                    "Transfert Strasbourg – Aéroport de Baden Baden",
                    "Transfert Strasbourg – Aéroport Bâle Mulhouse",
                    "Transfert Strasbourg – Aéroport Stuttgart",
                ],
            },
            {
                title: "Transfert gare Strasbourg",
                description: "Rejoignez les principales gares d’Alsace avec nos services de transfert en taxi dans l’Euro métropole. Notre prestation de transport destinée aux particuliers est adaptée pour les personnes voyageant seule, en couple ou en famille. Votre trajet se fera sous le signe du confort jusqu’au quai ou à la destination de votre choix, partout dans la région.",
                options: [
                    "Transfert vers et depuis la Gare de Strasbourg ",
                    "Transfert vers la Gare de Offenburg ",
                    "Liaison entre Gare TGV – Aéroport de Strasbourg",
                ]
            },
            {
                title: "Taxi tourisme Strasbourg",
                description: "Explorez Strasbourg et ses environs avec notre société de transport en taxi flexible. Notre chauffeur peut s’adapter à votre programme. Nous pouvons répondre à toutes vos envies de découvertes à travers toute la région alsacienne. Plus besoin d’appeler un taxi après chaque visite ! Réservez un service de chauffeur privé expérimenté dans le :",
                options: [
                    "Tourisme culturel : Cathédrale Notre-Dame, la Petite France",
                    "Tourisme urbain : La Grande île, le quartier européen",
                    "Tourisme gastronomique : winstubs traditionnels, cave historique des hospices civils",
                    "Tourisme de loisirs : La route des vins d’Alsace, Colmar",
                    "Tourisme historique : palais Rohan, église protestante Saint-Pierre-le-Jeune",
                    "Tourisme insolite : Orangerie, ateliers artisanaux, etc.",
                ]
            },
            {
                title: "Transport événement Strasbourg",
                description: "Notre compagnie de taxi strasbourgeoise met à la disposition des particuliers des véhicules haut de gamme, parfaits pour les événements familiaux et occasions spéciales. Réservez un chauffeur de taxi pour vos déplacements lors de :",
                options: [
                    "Pacs",
                    "Mariage",
                    "Anniversaire",
                    "Fête",
                    "Obsèques",
                ]
            },
            {
                title: "Taxi mobilité réduite Strasbourg",
                description: "Tous les chauffeurs au sein de notre société de taxi ont suivi des formations qui leur permettent d’assister ses passagers aux besoins spécifiques avec soin et professionnalisme. On a à cœur d’offrir aux personnes handicapées ou nécessitant un accompagnement particulier :",
                options: [
                    "Des véhicules adaptés avec un accès simplifié",
                    "Un haut niveau de confort à bord",
                    "Un déplacement serein partout dans la région alsacienne",
                ]
            },
            {
                title: "Transport enfant non accompagné Strasbourg",
                description: "Parents occupés et soucieux de la sécurité de vos enfants ? On vous propose une prestation de transport sans accompagnement, sûr, fiable et flexible. Vous pouvez réserver un service de taxi via notre centre d’appel pour :",
                options: [
                    "Faire le trajet de l’école",
                    "Transfert à l’aéroport ou à la gare de Strasbourg",
                    "Trajets vers et depuis les centres de loisirs de Strasbourg",
                    "Conduire ou récupérer vos enfants chez les grands-parents.",
                    "Gérer les déplacements pour les gardes alternées",
                ]
            },
            {
                title: "Mise à disposition",
                description: "Besoin d’un véhicule avec chauffeur à votre entière disponibilité ? Optez pour le service de mise à disposition proposé par Central Taxi 67. Vous pouvez faire une réservation de taxi pour vos déplacements en ville, journée de tourisme ou une virée shopping entre amis, etc. Bénéficiez d’une liberté totale avec notre service de transport de personnes à titre onéreux dans l’Euro métropole pour :",
                options: [
                    "Une ou quelques heures",
                    "Une demi-journée",
                    "Une journée entière",
                ]
            }
        ]
    },
    en: {
        title: "Taxi for individuals Strasbourg - Alsace",
        description: "Take advantage of fixed prices and avoid the stress of having to wait in the street thanks to our passenger transport service in Strasbourg. Your comfort and satisfaction are the priority of Central Taxi 67. All your mobility needs in town and throughout Alsace are taken care of by our experienced private drivers: airport transfers, train stations, special occasions, daily shopping...",
        options: [
            {
                title: "Strasbourg airport transfer",
                description: "A flight to catch? Trust our fast and reliable airport transfer services in Strasbourg. We provide you with a van or minivan to welcome you or take you back to the airport. Don't panic, our driver will help you with your suitcases. Call us if your family needs a driver for:",
                options: [
                    "Transfer Strasbourg – Entzheim Airport",
                    "Transfer Strasbourg – Baden Baden Airport",
                    "Transfer Strasbourg – Basel Mulho Airport, use",
                    "Transfer Strasbourg – Stuttgart Airport",
                ],
            },
            {
                title: "Strasbourg train station transfer",
                description: "Join the main stations in Alsace with our taxi transfer services in the Euro metropolis. Our transport service intended for individuals is suitable for people traveling alone, as a couple or as a family. Your journey will be in comfort to the platform or destination of your choice, anywhere in the region.",
                options: [
                    "Transfer to and from Strasbourg Train Station",
                    "Transfer to Offenburg Train Station",
                    "Link between TGV station – Strasbourg Airport",
                ]
            },
            {
                title: "Strasbourg tourist taxi",
                description: "Explore Strasbourg and its surroundings with our flexible taxi transport company. Our driver can adapt to your program. We can meet all your desires for discoveries throughout the Alsatian region. No need to call a taxi after each visit! Book a private chauffeur service experienced in:",
                options: [
                    "Cultural tourism: Notre-Dame Cathedral, Little France",
                    "Urban tourism: The Big Island, the European district",
                    "Gastronomic tourism: traditional winstubs, historic cellar of the civil hospices",
                    "Leisure tourism: The Alsace wine route, Colmar",
                    "Historical tourism: Rohan palace, Saint-Pierre-le-Jeune Protestant church",
                    "Unusual tourism: Orangery, craft workshops, etc.",
                ]
            },
            {
                title: "Strasbourg event transport",
                description: "Our Strasbourg taxi company provides individuals with high-end vehicles, perfect for family events and special occasions. Book a taxi driver for your trips during:",
                options: [
                    "PACS",
                    "Marriage",
                    "Birthday",
                    "Party",
                    "Funeral",
                ]
            },
            {
                title: "Reduced mobility taxi Strasbourg",
                description: "All drivers within our taxi company have completed training that allows them to assist passengers with specific needs with care and professionalism. We are committed to offering people with disabilities or those requiring special support:",
                options: [
                    "Adapted vehicles with simplified access",
                    "A high level of comfort on board",
                    "A peaceful trip anywhere in the Alsatian region",
                ]
            },
            {
                title: "Unaccompanied child transport Strasbourg",
                description: "Busy parents concerned about the safety of your children? We offer you an unaccompanied, safe, reliable and flexible transport service. You can book a taxi service through our call center for:",
                options: [
                    "Travel to school",
                    "Transfer to Strasbourg airport or train station",
                    "Travels to and from the leisure centers of Strasbourg",
                    "Drive or pick up your children from grandparents.",
                    "Manage travel for alternating shifts",
                ]
            },
            {
                title: "Provision",
                description: "Need a vehicle with driver at your complete availability? Opt for the provision service offered by Central Taxi 67. You can make a taxi reservation for your trips to town, a day of sightseeing or a shopping trip with friends, etc. Benefit from total freedom with our paid passenger transport service in the Euro metropolis for:",
                options: [
                    "One or a few hours",
                    "Half a day",
                    "A whole day",
                ]
            }
        ]
    }
}

export default Data