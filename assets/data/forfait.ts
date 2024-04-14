export type ForfaitOption = {
    title: string,
    desctiption: string,
    price: number
}
export type Forfaittype = {
    h1: string,
    description: string,
    title: string,
    options: ForfaitOption[],
    footer: string,
    title1: string,
    description1: string,
    title2: string,
    description2: string,
}

type DataType = {
    fr: Forfaittype;
    en: Forfaittype;
    [key: string]: any;
};

const data: DataType = {
    fr: {
        h1: "Forfaits taxi Aéroport – Mise à disposition – Trajet spécifique",
        description: "Profitez d’un prix fixe sans surprise pour vos trajets en taxi avec notre service de transport de personnes à titre onéreux basé à Strasbourg.",
        title: "Les forfaits pour les transferts aéroport Strasbourg",
        options: [
            {
                title: "Transfert Strasbourg - Aéroport Entzheim",
                desctiption: "Ne ratez plus un vol, voyagez sans stress vers ou depuis les aéroports alsaciens grâce à nos forfaits taxi pour les transferts aéroportuaires. Une période d'attente de 30 minutes et une assistance pour les bagages des passagers sont prévues dans n’importe quelle offre choisie.",
                price: 40
            },
            {
                title: "Transfert Strasbourg - Aéroport de Baden-Baden",
                desctiption: "Vous pouvez voyager sans le moindre stress en planifiant vos déplacements vers ou depuis l’aéroport international de Strasbourg avec notre central d’appel taxi strasbourgeois.",
                price: 110
            },
            {
                title: "Transfert Strasbourg - Aéroport Bâle Mulhouse",
                desctiption: "Terminez ou commencez votre séjour en Alsace de la meilleure manière ! Faites le trajet de l'aéroport de Baden-Baden en taxi avec un chauffeur privé qui connaît très bien la région.",
                price: 230
            },
            {
                title: "Transfert Strasbourg - Aéroport de Stuttgart",
                desctiption: "Voyage sous le signe du confort avec notre service de taxi agréé par la préfecture pour le trajet aéroport de Bâle Mulhouse depuis ou vers Strasbourg Eurométropole.",
                price: 280
            },
        ],
        footer: "Commandez un chauffeur de taxi aimable et courtois auprès de notre centrale de taxi pour bénéficier d’un trajet sécurisé et agréable lors de votre transfert aéroport de Stuttgart.",
        title1: "Forfait de mise à disposition",
        description1: "Vous faut-il le service d’un chauffeur privé pour quelques jours, une journée entière, une demi-journée ou pour seulement quelques heures dans l’Eurométropole, en Alsace ? Demandez notre service de mise à disposition. Planifiez vos trajets avec votre chauffeur et profitez de l’usage de votre limousine taxi comme si c’était la vôtre. Votre chauffeur respectera vos envies et votre programme. Plus besoin de chercher un taxi à chaque arrêt !",
        title2: "Forfait sur mesure pour les trajets à Strasbourg - Alsace",
        description2: "Vous organisez un événement d'entreprise, un mariage, ou une visite touristique à Strasbourg ? Contactez notre compagnie de taxi strasbourgeoise, car nous sommes ouverts à toute propositions. Vous pouvez demander un véhicule haut de gamme, doté d’une capacité de 1 à 8 personnes pour la durée qui vous convient et selon les besoins de vos événements. Contactez-nous pour discuter de vos besoins en transport"
    },
    en: {
        h1: "Airport taxi packages – Provision – Specific route",
        description: "Take advantage of a fixed price with no surprises for your taxi journeys with our paid passenger transport service based in Strasbourg.",
        title: "Packages for Strasbourg airport transfers",
        options: [
            {
                title: "Transfer Strasbourg - Entzheim Airport",
                desctiption: "Never miss a flight again, travel stress-free to or from Alsatian airports thanks to our taxi packages for airport transfers. A 30-minute waiting period and assistance with passenger baggage is provided in any offer chosen.",
                price: 40
            },
            {
                title: "Transfer Strasbourg - Baden-Baden Airport",
                desctiption: "You can travel without the slightest stress by planning your trips to or from Strasbourg international airport with our Strasbourg taxi call center.",
                price: 110
            },
            {
                title: "Transfer Strasbourg - Basel Mulhouse Airport",
                desctiption: "End or start your stay in Alsace in the best way! Travel from Baden-Baden Airport by taxi with a private driver who knows the area very well.",
                price: 230
            },
            {
                title: "Transfer Strasbourg - Stuttgart Airport",
                desctiption: "Travel in comfort with our taxi service approved by the prefecture for the Basel Mulhouse airport journey from or to Strasbourg Eurométropole.",
                price: 280
            },
        ],
        footer: "Order a friendly and courteous taxi driver from our taxi center to benefit from a safe and pleasant journey during your Stuttgart airport transfer.",
        title1: "Provision package",
        description1: "Do you need the service of a private driver for a few days, a whole day, half a day or just a few hours in the Eurometropolis, in Alsace? Ask for our provision service. Plan your trips with your driver and enjoy using your limousine taxi as if it were your own. Your driver will respect your wishes and your program. No more searching for a taxi at every stop!",
        title2: "Tailor-made package for trips to Strasbourg - Alsace",
        description2: "Are you organizing a corporate event, a wedding, or a tourist visit to Strasbourg? Contact our Strasbourg taxi company, because we are open to all proposals. You can request a high-end vehicle, with a capacity of 1 to 8 people for the duration that suits you and according to the needs of your events. Contact us to discuss your transportation needs"
    }
}


export default data