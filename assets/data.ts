import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import TrainIcon from '@mui/icons-material/Train';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MapIcon from '@mui/icons-material/Map';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

export type TabListType = { name: string, url: string }
export type RightSideTabListType = { functionlity: string, text: string }
export type CardDataType = { icon: string, title: string, text: string }

type NavbarType = {
    tabList: TabListType[],
    rightSideTabList: RightSideTabListType[],
    logout: string,
    edit: string,
    editPassword: string,
    successEdit: string,
    editBtn: string
}

export type Home_section1 = {
    title: string,
    description: string
}


type Home_Services = {
    title: string,
    description: string,
    features: Home_section1[]
}

export type Vehicule_Type = {
    title: string,
    capacity: string,
    space: string,
    vsl: boolean
}

type Home_Vehicules = {
    title: string,
    types: Vehicule_Type[]
}

type HomeType = {
    headerBeforeCards: string,
    news: string,
    contact: string,
    paragraph: string,
    cardData: CardDataType[],
    hero: { btn: string, h2: string, h3: string },
    yellowSection: { h2: string, btn: string },
    reviews: { h1: string, h2: string, btn: string, footer: string },
    section1: Home_section1,
    services: Home_Services,
    vehicules: Home_Vehicules,
    values: {
        title: string,
        features: Home_section1[]
    }
}

type FooterType = {
    sec1: {
        p1: string,
        p2: string,
        p3: string
    },
    btn1: string,
    btn2: string
}

type LoginType = {
    label1: string,
    placeholder1: string,
    label2: string,
    placeholder2: string,
    btn: string,
    success: string,
    invalidCred: string
}

type SignupType = {
    label1: string,
    placeholder1: string,
    label2: string,
    placeholder2: string,
    label3: string,
    placeholder3: string,
    label4: string,
    placeholder4: string,
    label5: string,
    placeholder5: string,
    label6: string,
    placeholder6: string,
    btn: string
    label7: string,
    fillAllFields: string,
    success: string
}

type ResetPasswordType = {
    label1: string,
    placeholder1: string,
    label2: string,
    placeholder2: string,
    label3: string,
    placeholder3: string,
    label4: string,
    errorMessage: string,
    success: string
}

export type BookDetails = {
    start: string,
    finish: string,
    dateAndTime: string,
    duration: string,
    distance: string
}

export type BookPageRightSideListType = {
    item: string,
    phone?: boolean
}

type BookPage = {
    personalData: string,
    personaDataError: string,
    form: {
        title: string,
        fromLabel: string,
        fromPlaceholder: string,
        toLabel: string,
        toPlaceholder: string,
        dateLabel: string,
        timeLabel: string,
        btn: string,
        showDetails: string,
        loadingEstimation: string,
        loadingReservation: string,
        success: string,
        error: string
    },
    rightSide: {
        title: string,
        list: BookPageRightSideListType[]
    },
    details: BookDetails,
    bookingForm: {
        back: string,
        btn: string
    }
}

export type ServiceCard = {
    icon: any,
    title: string,
    features: string[]
}

type ServicePage = {
    cards: ServiceCard[],
    header: string,
    subHeader: string,
    h3: string,
    h4: string,
    h5: string
}

type ContactPage = {
    header: string,
    subHeader: string
}

export type LangType = {
    navbar: NavbarType,
    footer: FooterType,
    login: LoginType,
    signup: SignupType,
    home: HomeType,
    resetPassword: ResetPasswordType,
    book: BookPage,
    service: ServicePage,
    contact: ContactPage
}

type DataType = {
    fr: LangType;
    en: LangType;
    [key: string]: any;
};

const Data: DataType = {
    fr: {
        navbar: {
            tabList: [{ name: "accueil", url: "/" }, { name: "services", url: "/services" }, { name: "reserver", url: "/book" }, { name: "contact", url: "/contact" }],
            rightSideTabList: [{ functionlity: "register", text: "S'inscrire" }, { functionlity: "login", text: "Se Connecter" }],
            logout: "Se déconnecter",
            edit: "Modifier votre profil",
            editPassword: "Modifier votre mot de passe",
            successEdit: "Vous avez mis à jour votre profil avec succès",
            editBtn: "Modifier"
        },
        home: {
            headerBeforeCards: "Réservez un taxi facilement",
            news: "ACTUALITÉS",
            contact: "NOUS CONTACTER",
            paragraph: "TAXI STRASBOURG vous propose un large choix de taxis pour toutes les situations, que vous ayez besoin d'un taxi pour l'Aéroport de Strasbourg ou la gare de strasbourg etc",
            cardData: [
                {
                    icon: "book",
                    title: "Réserver un taxi en 2 minutes",
                    text: "Réserver un chauffeur disponible en quelques clics, c'est aujourd'hui possible avec Taxi Strasbourgs. C'est d'autant plus simple que le module est aussi bien adapté pour les dessertes locales vers Strasbourg et son agglomération, que pour les transferts longues distances. En un seul coup de fil ou sur réservation par Internet, vous serez pris en charge dans les meilleurs délais par votre chauffeur taxi sur Strasbourg pour vos déplacements toutes distances vers toutes les villes de France."
                },
                {
                    icon: "price",
                    title: "Meilleurs Prix Taxi Strasbourg",
                    text: "Le prix de votre taxi à Strasbourg ne sera plus un frein pour vous déplacer. En effet, nos tarifs sont réglementés, sans surprise, et surtout adaptés à vos trajets. Vous profiterez d'un véhicule spacieux à un prix juste avec un confort maximal. Pour réserver votre trajet, vous n'avez qu'à indiquer le lieu de départ, la destination et l'heure de la prise en charge. Ensuite, laissez-vous guider par le module pour concrétiser votre commande. Faites le choix de la facilité en nous contactant ! Vous n'aurez pas à vous soucier du stationnement, des heures de pointe dans les transports en commun, ou des aléas de la circulation."
                },
                {
                    icon: "availability",
                    title: "Toujours un taxi disponible",
                    text: "Vous faites le choix de vous déplacer dans le confort ? Vous voulez gagner du temps ? Vous exigez le taxi à Strasbourg avec le meilleur rapport qualité/prix ? Alors vous êtes au bon endroit et nous mettrons tout en œuvre pour répondre à vos demandes. Nous vous transporterons aussi bien à la demande qu'en mise à disposition. Concrètement, notre chauffeur vous transportera, sur toutes distances, vers votre adresse de destination, ainsi que vers tous les Aéroports et toutes les Gares."
                }
            ],
            hero: {
                btn: "Reserver",
                h2: "Central Taxi 67, votre choix numéro 1 pour vos courses à Strasbourg - Alsace",
                h3: "À votre service 24H/24"
            },
            section1: {
                title: "NOTRE MISSION",
                description: "À la recherche d’une prestation de service taxi haute gamme à Strasbourg ? Notre mission sera d’arriver à votre destination avec pleine satisfaction! Laissez-nous vous transporter pour vos trajets privés ou professionnels dans l’Eurométropole de Strasbourg et dans toute la région. Des chauffeurs de taxis, fins connaissant parfaitement la région n’attendent que vous, 24/7, derrière notre centre d’appel. Notre société de transport de personnes dessert toutes les villes Alsaciennes, mais aussi ses aéroports, gares TGV et routières."
            },
            services: {
                title: "NOS SERVICES",
                description: "Déplacez-vous sans stress et au meilleur prix avec notre flotte de taxis à Strasbourg et dans toute l'Alsace.",
                features: [
                    { title: "Transferts aéroport Strasbourg", description: "Simplifiez vos déplacements vers et depuis les aéroports d’Alsace grâce à l'un des meilleurs services de transfert-aéroport en taxi de la région." },
                    { title: "Transferts Gare Strasbourg", description: "Notre chauffeur privé vous attend dès votre descente du train ou TGV pour vous emmener où vous le souhaitez dans la région d’Alsace." },
                    { title: "Taxi tourisme", description: "Programmez une excursion à Strasbourg avec un chauffeur de taxi professionnel, explorez tous les sites touristiques et monuments historiques en bonne compagnie." },
                    { title: "Taxi pour professionnels", description: "Faites appel au meilleur chauffeur de taxis à Strasbourg pour assurer vos déplacements lors de réunions ou rendez-vous d'affaires en centre-ville ou en périphérie." },
                    { title: "Taxi pour particuliers", description: "Profitez d’un service de transport personnalisé et sécurisé pour vos courses en ville, soirées entre amis ou sorties en famille." },
                    { title: "Course longue distance", description: "Vous voyagez pour affaires ou pour le plaisir ? Notre service de taxi strasbourgeois vous garantit un voyage agréable partout en Alsace." },
                ]
            },
            vehicules: {
                title: "NOS VEHICULES",
                types: [
                    { title: "Monospaces", capacity: "1 à 5 passagers", space: "4 petits bagages ou 2 grands bagages", vsl: false },
                    { title: "Van", capacity: "7 à 8 passagers", space: "7 bagages", vsl: false },
                    { title: "Taxi conventionné VSL", capacity: "Pour les consultations, examens médicaux, traitements, sorties d’hôpital, etc.", space: "Agréé par la CPAM, conforme aux normes et réglementations en vigueur", vsl: true }
                ]
            },
            values: {
                title: "NOS VALEURS",
                features: [
                    { title: "Disponibilité", description: "Notre centre d’appel taxi est joignable 24/7. Nos chauffeurs strasbourgeois peuvent assurer vos déplacements, de jour comme de nuit." },
                    { title: "Ponctualité", description: "Notre compagnie de transport compte parmi son équipe les chauffeurs les plus ponctuels de la région alsacienne. Ils arriveront à l'heure convenue lors de la réservation de taxi. " },
                    { title: "Qualité", description: "Courte ou longue distance? Nous mettons tout en oeuvre  pour offrir à nos passagers un service de transport de haut niveau" },
                    { title: "Rapidité", description: "Contrairement aux conducteurs VTC ou Uber, nos chauffeurs taxis ont le privilège d’utiliser les voies réservées au bus pour vous faire gagner énormément de temps. Ils choisissent également les meilleurs itinéraires pour n’importe quel trajet afin d’être le plus direct et rapide possible." },
                    { title: "Sécurité", description: "Central Taxi 67 met un point d'honneur à votre sécurité et votre bien-être dès l’instant où vous montez à bord de ses véhicules jusqu’à votre arrivée à destination." },
                    { title: "Transparence", description: "Notre entreprise de taxi applique des tarifs clairs et sans surprises. Le conducteur vous indiquera le montant exact que vous aurez à payer à l’arrivée  dès que vous serez installé dans nos véhicules." },
                ]
            },
            yellowSection: {
                h2: "Estimez Le Prix Et Réservez Le Meilleur Taxi À Strasbourg",
                btn: "Estimer le prix"
            },
            reviews: {
                h1: "Ce que pensent nos utilisateurs",
                h2: "Rendre nos utilisateurs heureux est notre mission première",
                btn: "Laisser un avis",
                footer: "Voir Plus"
            }
        },
        login: {
            label1: "Email",
            placeholder1: "Entrez votre email",
            label2: "Password",
            placeholder2: "Entrez votre password",
            btn: "Se Connecter",
            success: "Connecté avec succès",
            invalidCred: "Les informations d'identification invalides"
        },
        signup: {
            label1: "Votre Nom*",
            placeholder1: "Entrez votre Nom",
            label2: "Votre Prenom*",
            placeholder2: "Entrez votre Prenom",
            label3: "Votre Numero de telephone*",
            placeholder3: "Entrez votre Numero de telephone",
            label4: "Votre Adresse*",
            placeholder4: "Entrez votre Adresse",
            label5: "Votre Email*",
            placeholder5: "Entrez votre Email",
            label6: "Votre Password*",
            placeholder6: "Entrez votre password",
            label7: "Montrer le mot de passe",
            btn: "S'inscrire",
            fillAllFields: "Veuillez remplir tous les champs nécessaires",
            success: "Compte créé avec succès, veuillez vous connecter"
        },
        footer: {
            sec1: {
                p1: "Taxis disponibles dans toute la région d'Alsace",
                p2: "Autorisations de stationnement TAXI C.U.S",
                p3: "À votre service 24H/24"
            },
            btn1: "Laisser un avis",
            btn2: "Reserver"
        },
        resetPassword: {
            label1: "Votre ancien mot de passe",
            placeholder1: "Entrez votre ancien mot de passe",
            label2: "Votre nouveau mot de passe",
            placeholder2: "Entrez votre nouveau mot de passe",
            label3: "Saisissez à nouveau le nouveau mot de passe",
            placeholder3: "Entrez votre nouveau mot de passe",
            label4: "Montrer le mot de passe",
            errorMessage: "Le nouveau mot de passe et le mot de passe de confirmation ne correspondent pas",
            success: "Vous avez mis à jour votre mot de passe avec succès"
        },
        book: {
            form: {
                title: "Estimation Du Prix En Direct",
                fromLabel: "Adresse de prise en charge",
                fromPlaceholder: "Adresse de départ . Veuillez saisir ici l'adresse",
                toLabel: "Adresse de destination",
                toPlaceholder: "Adresse de destination . Veuillez saisir ici l'adresse",
                dateLabel: "Prise en charge",
                timeLabel: "Heure",
                btn: "Estimation du tarif",
                showDetails: "Affichage les détails de la réservation",
                loadingEstimation: "Calculation de l'estimation du trajet",
                loadingReservation: "Votre réservation est en cours d'enregistrement",
                success: "Votre réservation a été enregistrée",
                error: "Il y avait une erreur"
            },
            rightSide: {
                title: "Vous pouvez effectuer votre réservation de taxi à Strasbourg de deux manière:",
                list: [
                    {
                        item: "Contact direct par téléphone au numéro",
                        phone: true
                    },
                    {
                        item: "Formulaire de réservation de taxi en ligne à remplir"
                    }
                ]
            },
            details: {
                start: "Adresse de départ",
                finish: "Adresse d'arrivée",
                dateAndTime: "Date et l'heure",
                duration: "Temps de voyage",
                distance: "Distance"
            },
            bookingForm: {
                back: "Retourner",
                btn: "confirmer la réservation"
            },
            personalData: "J'accepte d'utiliser mes données personnelles pour réserver un taxi",
            personaDataError: "Veuillez cocher la case pour accepter l'utilisation des données personnelles"
        },
        service: {
            header: "nos services",
            subHeader: "Nos services de taxi à Strasbourg - Alsace",
            h3: "ce que nous offrons",
            h4: "Professionnels, touristes et habitants de l’Eurométropole, bénéficiez de nos services de transport en taxi pas cher pour vos trajets ! Nos chauffeurs peuvent desservir toutes les destinations d’Alsace. Réservez votre berline taxi via notre centre d’appel accessible 24h/24 et 7/7.",
            cards: [
                {
                    icon: LocalTaxiIcon, title: "Transport privé en taxi à Strasbourg ", features: ["Chauffeur expérimenté pour vos déplacements en ville ou aux alentours",
                        " Réservation en ligne rapide et facile ",
                        " Prise en charge immédiate ou programmée à votre adresse ou autre lieu de votre choix",
                        "Idéal pour les rendez-vous d’affaires, les sorties en ville, les occasions spéciales"]
                },
                {
                    icon: AirplanemodeActiveIcon, title: "Transfert aéroport en Alsace", features: ["Service ponctuel pour tous vos déplacements depuis et vers les aéroports",
                        "Accueil personnalisé avec pancarte à l'arrivée",
                        "Assistance avec les bagages",
                        "Suivi de vol en temps réel pour adapter le service aux éventuels changements d'horaire"]
                },
                {
                    icon: TrainIcon, title: "Transfert gare", features: ["Prise en charge et dépose en tout confort à la gare SNCF TGV de votre choix",
                        "Coordination avec les horaires de train pour assurer une transition sans souci",
                        "Un voyage sans stress avec un service de porte-à-porte",
                        "Aide pour les bagages "]
                },
                {
                    icon: MapIcon, title: "Taxi tourisme en Alsace", features: [
                        "Prise en charge par un chauffeur de taxi expérimenté dans le tourisme",
                        "Visites personnalisées à travers la ville de Strasbourg et les alentours",
                        "Découverte des meilleurs itinéraires touristiques",
                        "Conseils d'experts pour une expérience touristique enrichissante"
                    ]
                },
                {
                    icon: LocalHospitalIcon, title: "Taxi conventionné à Schiltigheim - Strasbourg - Alsace", features: [
                        "Transport de malade assis accrédité par la CPAM",
                        "Transport médicalisé pour vos rendez-vous, entrées et sorties d'hôpital",
                        "Prise en charge des formalités liées à l'assurance maladie",
                        "Déplacements médicaux en tout confort et discrétion",
                    ]
                },
            ],
            h5: "Besoin d’un taxi pour un court ou long trajet vers Strasbourg Eurométropole ? Commandez un taxi chez Central Taxi 67. Nous vous offrons une solution de transport pratique et flexible pour vos déplacements de jour ou de nuit. De plus, le prix de la course est connu à l’avance."
        },
        contact: {
            header: "Contactez-nous",
            subHeader: "Nous vous assurons que nous vous répondrons dans les plus brefs délais"
        },
    },
    en: {
        navbar: {
            tabList: [{ name: "home", url: "/" }, { name: "services", url: "/services" }, { name: "book", url: "/book" }, { name: "contact", url: "/contact" }],
            rightSideTabList: [{ functionlity: "register", text: "Register" }, { functionlity: "login", text: "Login" }],
            logout: "Log out",
            edit: "Edit your profile",
            editPassword: "Update your password",
            successEdit: "You have successfully upated your profile",
            editBtn: "Edit"
        },
        home: {
            headerBeforeCards: "Book a taxi easily",
            news: "NEWS",
            contact: "CONTACT US",
            paragraph: "TAXI STRASBOURG offers you a wide choice of taxis for all situations, whether you need a taxi for Strasbourg Airport or Strasbourg train station etc.",
            cardData: [
                {
                    icon: "book",
                    title: "Book a taxi in 2 minutes",
                    text: "Booking an available driver in just a few clicks is now possible with Taxi Strasbourgs. It is all the simpler as the module is equally well suited for local services to Strasbourg and its surrounding area, as well as for long distance transfers. With just one phone call or by booking online, you will be picked up as quickly as possible by your taxi driver in Strasbourg for your trips of any distance to all cities in France."
                },
                {
                    icon: "price",
                    title: "Best Prices Taxi Strasbourg",
                    text: "The price of your taxi in Strasbourg will no longer be a barrier to getting around. Indeed, our prices are regulated, without surprises, and above all adapted to your journeys. You will enjoy a spacious vehicle at a fair price with maximum comfort. To book your trip, simply indicate the departure location, destination and pick-up time. Then, let yourself be guided by the module to complete your order. Make the easy choice by contacting us! You won't have to worry about parking, rush hours on public transport, or traffic hazards."
                },
                {
                    icon: "availability",
                    title: "Always a taxi available",
                    text: "Are you choosing to travel in comfort? Want to save time? Do you want the taxi in Strasbourg with the best quality/price ratio? Then you are in the right place and we will do everything we can to meet your requests. We will transport you both on request and on provision. Concretely, our driver will transport you, over any distance, to your destination address, as well as to all Airports and Train Stations."
                }
            ],
            hero: {
                btn: "Book",
                h2: "Central Taxi 67, your number 1 choice for your rides in Strasbourg - Alsace",
                h3: "At your service 24 hours a day"
            },
            section1: {
                title: "OUR MISSION",
                description: "Looking for a high-end taxi service in Strasbourg? Our mission will be to arrive at your destination with full satisfaction! Let us transport you for your private or professional journeys in the Strasbourg Eurometropolis and throughout the region. Taxi drivers who know the region perfectly are waiting for you, 24/7, behind our call center. Our passenger transport company serves all Alsatian towns, but also its airports, TGV and bus stations."
            },
            services: {
                title: "Our Services",
                description: "Travel stress-free and at the best price with our fleet of taxis in Strasbourg and throughout Alsace.",
                features: [
                    { title: "Strasbourg airport transfers", description: "Simplify your travel to and from Alsace airports with one of the best airport taxi transfer services in the region." },
                    { title: "Strasbourg Train Station Transfers", description: "Our private driver is waiting for you as soon as you get off the train or TGV to take you wherever you want in the Alsace region." },
                    { title: "Tourist taxi", description: "Schedule an excursion to Strasbourg with a professional taxi driver, explore all the tourist sites and historical monuments in good company." },
                    { title: "Taxi for professionals", description: "Call the best taxi driver in Strasbourg to ensure your travel during meetings or business appointments in the city center or the outskirts." },
                    { title: "Taxi for individuals", description: "Take advantage of a personalized and secure transport service for your shopping in town, evenings with friends or family outings." },
                    { title: "Long distance running", description: "Are you traveling for business or pleasure? Our Strasbourg taxi service guarantees you a pleasant trip throughout Alsace." },
                ]
            },
            vehicules: {
                title: "OUR VEHICLES",
                types: [
                    { title: "Minivans", capacity: "1 to 5 passengers", space: "4 small bags or 2 large bags", vsl: false },
                    { title: "Van", capacity: "7 to 8 passengers", space: "7 bags", vsl: false },
                    { title: "VSL approved taxi", capacity: "For consultations, medical examinations, treatments, hospital discharges, etc.", space: "Approved by the CPAM, compliant with current standards and regulations", vsl: true }
                ]
            },
            values: {
                title: "OUR VALUES",
                features: [
                    { title: "Availability", description: "Our taxi call center is available 24/7. Our Strasbourg drivers can ensure your travel, day or night." },
                    { title: "Punctuality", description: "Our transport company counts among its team the most punctual drivers in the Alsatian region. They will arrive at the time agreed upon when booking the taxi." },
                    { title: "Quality", description: "Short or long distance? We do everything we can to offer our passengers a high level of transport service" },
                    { title: "Speed", description: "Unlike VTC or Uber drivers, our taxi drivers have the privilege of using bus lanes to save you a lot of time. They also choose the best routes for any journey to be as direct and quick as possible." },
                    { title: "Security", description: "Central Taxi 67 makes a point of honoring your safety and well-being from the moment you board its vehicles until you arrive at your destination." },
                    { title: "Transparency", description: "Our taxi company applies clear prices with no surprises. The driver will tell you the exact amount you will have to pay upon arrival as soon as you are seated in our vehicles." },
                ]
            },
            yellowSection: {
                h2: "Estimate the Price and Book the Best Taxi in Strasbourg",
                btn: "Estimate the price"
            },
            reviews: {
                h1: "What our users think",
                h2: "Making our users happy is our primary mission",
                btn: "Leave a review",
                footer: "See more"
            }
        },
        login: {
            label1: "Email",
            placeholder1: "Enter your email",
            label2: "Password",
            placeholder2: "Enter your password",
            btn: "Log In",
            success: "Successfully logged in",
            invalidCred: "Invalid Credentials"
        },
        signup: {
            label1: "Your First name*",
            placeholder1: "Enter your First name",
            label2: "Your Last name*",
            placeholder2: "Enter your Last name",
            label3: "Your Phone number*",
            placeholder3: "Enter your Phone number",
            label4: "Your Address*",
            placeholder4: "Enter your Address",
            label5: "Your Email*",
            placeholder5: "Enter your Email",
            label6: "Your Password*",
            placeholder6: "Enter your password",
            label7: "Show Password",
            btn: "Register",
            fillAllFields: "Please Fill all necessary fields",
            success: "Account successfully created, please login"
        },
        footer: {
            sec1: {
                p1: "Taxis available throughout the Alsace region",
                p2: "TAXI C.U.S parking permits",
                p3: "At your service 24 hours a day"
            },
            btn1: "Leave a review",
            btn2: "Book"
        },
        resetPassword: {
            label1: "Your old Password",
            placeholder1: "Enter your old password",
            label2: "Your new password",
            placeholder2: "Enter your new password",
            label3: "Enter new password again",
            placeholder3: "Enter your new password",
            label4: "Show Password",
            errorMessage: "The new password and the confirmation password don't match",
            success: "You have successfully updated your password"
        },
        book: {
            form: {
                title: "Live Price Estimate",
                fromLabel: "Pick-up address",
                fromPlaceholder: "Departure address. Please enter the address here",
                toLabel: "Destination address",
                toPlaceholder: "Destination address . Please enter the address here",
                dateLabel: "Date",
                timeLabel: "Time",
                btn: "Price estimate",
                showDetails: "Showing booking details",
                loadingEstimation: "Calculating the ride estimate",
                loadingReservation: "Your reservation is being saved",
                success: "Your reservation has been saved",
                error: "There was an error"
            },
            rightSide: {
                title: "You can make your taxi reservation in Strasbourg in two ways:",
                list: [
                    {
                        item: "Direct contact by telephone at the number",
                        phone: true
                    },
                    {
                        item: "Online taxi reservation form to fill out",
                    }

                ]
            },
            details: {
                start: "Starting address",
                finish: "Arrival address",
                dateAndTime: "Date and time",
                duration: "Travel time",
                distance: "Distance"
            },
            bookingForm: {
                back: "Go Back",
                btn: "confirm booking"
            },
            personalData: "I agree to use my personal data for booking a taxi",
            personaDataError: "Please check the box to agree to use personal data"
        },
        service: {
            cards: [
                {
                    icon: LocalTaxiIcon, title: "Private taxi transport in Strasbourg", features: [
                        "Experienced driver for your trips in town or surrounding areas",
                        "Quick and easy online booking",
                        "Immediate or scheduled pick-up at your address or other location of your choice",
                        "Ideal for business meetings, outings on the town, special occasions"
                    ]
                },
                {
                    icon: AirplanemodeActiveIcon, title: "Airport transfer in Alsace", features: [
                        "Punctual service for all your trips to and from airports",
                        "Personalized welcome with sign on arrival",
                        "Assistance with baggage",
                        "Real-time flight tracking to adapt the service to possible schedule changes"
                    ]
                },
                {
                    icon: TrainIcon, title: "Station transfer", features: [
                        "Comfortable pick-up and drop-off at the SNCF TGV station of your choice",
                        "Coordination with train schedules to ensure a hassle-free transition",
                        "A stress-free trip with door-to-door service",
                        "Help with luggage"
                    ]
                },
                {
                    icon: MapIcon, title: "Tourist taxi in Alsace", features: [
                        "Supported by a taxi driver experienced in tourism",
                        "Personalized tours through the city of Strasbourg and the surrounding area",
                        "Discovery of the best tourist routes",
                        "Expert tips for an enriching tourism experience"
                    ]
                },
                {
                    icon: LocalHospitalIcon, title: "Approved taxi in Schiltigheim - Strasbourg - Alsace", features: [
                        "Seated patient transport accredited by the CPAM",
                        "Medical transport for your appointments, hospital entrances and exits",
                        "Taking charge of formalities related to health insurance",
                        "Medical travel in complete comfort and discretion",
                    ]
                },
            ],
            h5: "Need a taxi for a short or long trip to Strasbourg Eurométropole? Order a taxi from Central Taxi 67. We offer you a practical and flexible transport solution for your day or night trips. In addition, the price of the ride is known in advance.",
            header: "our services",
            subHeader: "Our taxi services in Strasbourg - Alsace",
            h3: "what we offer",
            h4: "Professionals, tourists and residents of the Eurometropolis, benefit from our inexpensive taxi transport services for your journeys! Our drivers can serve all destinations in Alsace. Book your sedan taxi via our call center accessible 24/7.",
        },
        contact: {
            header: "contact us",
            subHeader: "We assure you that we will respond to you as soon as possible"
        }
    }
}

export default Data