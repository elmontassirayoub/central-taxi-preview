export type PlanPagesType = {
    title: string,
    paragraphs: string[],
    options?: string[]
}

export type PlanType = {
    title: string,
    description: string,
    pages: PlanPagesType[]
}

type DataType = {
    fr: PlanType;
    en: PlanType;
    [key: string]: any;
};

export const Data: DataType = {
    fr: {
        title: "Plan du site internet de Central Taxi 67 - Strasbourg",
        description: "Ce plan du site offre à nos clients et futurs clients une vue d'ensemble de nos services de taxi à Strasbourg et une galerie de Photos représentant notre flotte de véhicules, tous entretenus rigoureusement et prêts à vous accueillir.",
        pages: [
            {
                title: "Accueil",
                paragraphs: [
                    "On a pris le temps de bien structurer notre plateforme pour vous offrir une expérience utilisateur agréable. Sur notre page d’Accueil, vous découvrirez une multitude d'informations sur nos offres et l’activité de notre entreprise de taxi à Strasbourg."
                ]
            },
            {
                title: "Nos services",
                paragraphs: [
                    "Cette catégorie regroupe toutes les offres de Central Taxi 67 à Strasbourg, Alsace, elle comprend :"
                ],
                options: [
                    "Le service Taxi pour les entreprises qui est destiné aux professionnels",
                    "Le service Taxi pour les particuliers adapté pour des escapades en ville, des courses quotidiennes ou des besoins familiaux",
                    "Le service Taxi tourisme est dédiée aux voyageurs et aux passionnés d'exploration.",
                    "Le service Taxi conventionné pour les déplacements médicaux",
                    "Les services supplémentaires pour ceux cherchent un luxe additionnel en déplacement.",
                ]
            },
            {
                title: "Contact et réservation",
                paragraphs: [
                    "La catégorie Contact facilite la communication directe avec notre équipe. Les clients ont la possibilité d’y poser des questions ou de laisser des commentaires.",
                    "La page Réservation est celle qui simplifie la planification de votre voyage. En quelques clics, vous pouvez réserver un chauffeur de taxi privé pour une heure spécifique et être sûr qu'il sera là pour vous emmener à votre destination sans tracas.",
                ]
            },
            {
                title: "Tarifs et forfaits",
                paragraphs: [
                    "La page Tarifs vous donne des informations claires et détaillées sur les prix de nos courses de jour et de nuit, y compris des estimations pour des trajets spécifiques.",
                    "La section Forfaits vous dévoile l’ensemble de nos offres de transport pour les déplacements aéroportuaires en Alsace, la mise à disposition et les trajets sur mesure.",
                ]
            },
            {
                title: "Avis clients",
                paragraphs: [
                    "La section Avis clients offre un aperçu de l'expérience de nos passagers. Ces témoignages fournissent aux nouveaux visiteurs une assurance sur la qualité de notre service de taxi dans l’Eurométropole de Strasbourg."
                ]
            }
        ]
    },
    en: {
        title: "Website map of Central Taxi 67 - Strasbourg",
        description: "This site map offers our customers and future customers an overview of our taxi services in Strasbourg and a photo gallery representing our fleet of vehicles, all rigorously maintained and ready to welcome you.",
        pages: [
            {
                title: "Home",
                paragraphs: [
                    "We have taken the time to properly structure our platform to offer you a pleasant user experience. On our Home page, you will discover a multitude of information on our offers and the activity of our taxi company in Strasbourg."
                ]
            },
            {
                title: "Our services",
                paragraphs: [
                    "This category brings together all the Central Taxi 67 offers in Strasbourg, Alsace, it includes:"
                ],
                options: [
                    "The Taxi service for businesses which is intended for professionals",
                    "The Taxi service for individuals suitable for city breaks, daily errands or family needs",
                    "The Tourism Taxi service is dedicated to travelers and exploration enthusiasts.",
                    "The approved Taxi service for medical travel",
                    "Additional services for those seeking additional luxury on the go.",
                ]
            },
            {
                title: "Contact and reservation",
                paragraphs: [
                    "The Contact category makes it easier to communicate directly with our team. Customers can ask questions or leave comments.",
                    "The Booking page is the one that makes planning your trip simple. With just a few clicks, you can book a private taxi driver for a specific time and be sure that he will be there to take you to your destination hassle-free.",
                ]
            },
            {
                title: "Rates and packages",
                paragraphs: [
                    "The Fares page gives you clear, detailed information on prices for our day and night rides, including estimates for specific journeys.",
                    "The Packages section reveals all of our transport offers for airport travel in Alsace, provision and tailor-made journeys.",
                ]
            },
            {
                title: "Customers' opinion",
                paragraphs: [
                    "The Customer Reviews section provides insight into our passengers' experience. These testimonials provide new visitors with assurance on the quality of our taxi service in the Strasbourg Eurometropolis."
                ]
            }
        ]
    }
}