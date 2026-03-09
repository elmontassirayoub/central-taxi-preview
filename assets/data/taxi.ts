export type TaxiSectionItem = {
    title: string
    description: string
}

export type TaxiSection = {
    title: string
    items: TaxiSectionItem[]
}

export type TaxiPageContent = {
    seoTitle: string
    seoDescription: string
    heroTitle: string
    heroSubtitle: string
    intro: string
    sections: TaxiSection[]
}

export type TaxiPages = {
    index: TaxiPageContent
    strasbourg: TaxiPageContent
    aeroport: TaxiPageContent
    europapark: TaxiPageContent
    circuit: TaxiPageContent
    gare: TaxiPageContent
}

type DataType = {
    fr: TaxiPages
    en: TaxiPages
    [key: string]: any
}

const Data: DataType = {
    fr: {
        index: {
            seoTitle: "Taxi Strasbourg | Central Taxi 67",
            seoDescription: "Taxi Strasbourg 24/7. Chauffeurs professionnels, prix réglementés, réservation en ligne. Courses toutes distances dans Strasbourg Eurométropole et en Alsace.",
            heroTitle: "Taxi Strasbourg - Central Taxi 67",
            heroSubtitle: "Votre chauffeur privé à Strasbourg et dans toute l'Alsace, 24/7.",
            intro: "Découvrez nos services de taxi à Strasbourg et en Alsace. Transferts aéroport, gare, circuits touristiques et courses urbaines. Service professionnel et ponctuel.",
            sections: [
                {
                    title: "Nos services de taxi",
                    items: [
                        { title: "Taxi Strasbourg", description: "Courses urbaines et interurbaines dans Strasbourg Eurométropole." },
                        { title: "Transfert Aéroport", description: "Liaison Strasbourg ↔ Aéroport Entzheim avec suivi de vol." },
                        { title: "Taxi Gare", description: "Prise en charge à la gare de Strasbourg, service porte-à-porte." },
                        { title: "Circuit Touristique", description: "Découverte de l'Alsace : Route des Vins, villages pittoresques." },
                        { title: "Europa-Park", description: "Transfert confortable vers Europa-Park depuis Strasbourg." }
                    ]
                },
                {
                    title: "Pourquoi nous choisir ?",
                    items: [
                        { title: "Disponibilité 24/7", description: "Commande immédiate ou sur réservation, de jour comme de nuit." },
                        { title: "Chauffeurs professionnels", description: "Expérimentés, ponctuels et discrets pour votre confort." },
                        { title: "Tarifs réglementés", description: "Prix connus à l'avance, sans surprise ni supplément caché." }
                    ]
                }
            ]
        },
        strasbourg: {
            seoTitle: "Taxi Strasbourg | Central Taxi 67",
            seoDescription: "Taxi Strasbourg 24/7. Chauffeurs professionnels, prix réglementés, réservation en ligne. Courses toutes distances dans Strasbourg Eurométropole et en Alsace.",
            heroTitle: "Taxi Strasbourg - Central Taxi 67",
            heroSubtitle: "Votre chauffeur privé à Strasbourg et dans toute l'Alsace, 24/7.",
            intro: "Besoin d'un taxi à Strasbourg pour vos déplacements professionnels, privés ou touristiques ? Confiez-nous votre trajet et profitez d'un service fiable, ponctuel et au prix juste.",
            sections: [
                {
                    title: "Pourquoi choisir Central Taxi 67 ?",
                    items: [
                        { title: "Disponibilité 24/7", description: "Commande immédiate ou sur réservation, de jour comme de nuit." },
                        { title: "Confort et sécurité", description: "Véhicules entretenus, chauffeurs expérimentés et discrets." },
                        { title: "Toutes distances", description: "Trajets dans Strasbourg Eurométropole et partout en Alsace." }
                    ]
                }
            ]
        },
        aeroport: {
            seoTitle: "Taxi Strasbourg Aéroport Entzheim : Voyagez l'esprit léger",
            seoDescription: "Envolez-vous sans stress ! Réservez votre taxi à Strasbourg et profitez d'un trajet fluide, ponctuel et confortable jusqu'à l'aéroport d'Entzheim.",
            heroTitle: "Taxi Strasbourg Aéroport Entzheim",
            heroSubtitle: "Transfert rapide et confortable",
            intro: "Besoin d'un taxi Strasbourg–aéroport Entzheim pour voyager sans stress ? Les rendez-vous d'affaires express, les escapades en amoureux, les vacances sont nos spécialités. Central Taxi 67 vous attend à chaque instant. On est sur la ligne de départ 24h/24 et 7j/7 y compris les jours fériés. Chez nous, chaque trajet en taxi dans l'Eurométropole de Strasbourg rime avec sérénité. Ponctualité garantie, confort irréprochable et tarifs sans fausse note.",
            sections: [
                {
                    title: "Nos principaux trajets : de Strasbourg et alentours vers l'aéroport Entzheim",
                    items: [
                        { title: "Transferts aéroport Strasbourg centre", description: "Du charme pittoresque de la Petite France aux rues animées de Neudorf, en passant par la Meinau, la Robertsau, l'Esplanade ou encore la Krutenau… Même la Montagne Verte et le Port du Rhin ! Vous pouvez contacter notre service Taxi Strasbourg aéroport Entzheim." },
                        { title: "Transferts vers ou depuis les villes voisines", description: "Illkirch-Graffenstaden, Schiltigheim, Lingolsheim, Ostwald, Eckbolsheim, Bischheim, Hoenheim… jusqu'à Wolfisheim ou Geispolsheim, Central Taxi 67 et ses taxis font la tournée des incontournables." },
                        { title: "Trajets longues distances depuis ou vers l'aéroport", description: "Vous pouvez compter sur nos chauffeurs de taxi Strasbourg Aéroport pour relier Haguenau, Colmar, Sélestat, Obernai, Saverne, Erstein, Mulhouse, Nancy ou Metz… On peut même vous accompagner dans vos escapades transfrontalières vers Freiburg, Kehl, Offenburg, Bâle, Zurich ou même Luxembourg. L'Alsace et l'Europe, c'est notre terrain de jeu." },
                        { title: "Transferts vers les gares depuis et vers l'aéroport Entzheim", description: "Notre service de transport de personnes à titre onéreux vous transporte avec élégance et rapidité vers les principales gares d'Alsace et du Grand Est. Vous pouvez voyager sereinement… sans jamais rater votre train avec le meilleur chauffeur de taxi Strasbourg gare." }
                    ]
                },
                {
                    title: "Gares desservies",
                    items: [
                        { title: "Gare de Strasbourg-Ville", description: "Prise en charge directe depuis la gare principale" },
                        { title: "Gare de Colmar", description: "Liaison rapide vers l'aéroport" },
                        { title: "Gare de Sélestat", description: "Service porte-à-porte" },
                        { title: "Gare de Mulhouse-Ville", description: "Transfert confortable" },
                        { title: "Gare de Haguenau", description: "Chauffeur professionnel" },
                        { title: "Gare de Saverne", description: "Ponctualité garantie" },
                        { title: "Gare de Molsheim", description: "Service 24/7" },
                        { title: "Gare d'Obernai", description: "Aide aux bagages" },
                        { title: "Gare de Barr", description: "Véhicules confortables" },
                        { title: "Gare d'Erstein", description: "Tarifs réglementés" }
                    ]
                },
                {
                    title: "Tarifs et durées de trajet",
                    items: [
                        { title: "Mulhouse à Entzheim", description: "1h10mn - Tarif jour: 220€ / Tarif nuit: 310€" },
                        { title: "Colmar à Entzheim", description: "48mn - Tarif jour: 130€ / Tarif nuit: 169€" },
                        { title: "Sélestat à Entzheim", description: "32mn - Tarif jour: 95€ / Tarif nuit: 128€" },
                        { title: "Haguenau à Entzheim", description: "40mn - Tarif jour: 100€ / Tarif nuit: 140€" },
                        { title: "La Wantzenau à Entzheim", description: "33mn - Tarif jour: 70€ / Tarif nuit: 91€" },
                        { title: "Lingolsheim à Entzheim", description: "11mn - Tarif jour: 20€ / Tarif nuit: 25€" },
                        { title: "Brumath à Entzheim", description: "34mn - Tarif jour: 110€ / Tarif nuit: 80€" },
                        { title: "Baden-Baden (Allemagne) à Entzheim", description: "1h05mn - Tarif jour: 140€ / Tarif nuit: 200€" },
                        { title: "Strasbourg 67100 à Entzheim", description: "20mn - Tarif jour: 40€ / Tarif nuit: 50€" },
                        { title: "Wolfisheim à Entzheim", description: "10mn - Tarif jour: 15€ / Tarif nuit: 20€" }
                    ]
                },
                {
                    title: "Bonnes raisons de commander un taxi aéroport Strasbourg Entzheim chez Central Taxi 67",
                    items: [
                        { title: "30 minutes d'attente offertes à l'aéroport", description: "Votre chauffeur ne regarde pas sa montre avec impatience. Vous bénéficiez de 30 minutes d'attente gratuites lors de votre prise en charge à l'aéroport." },
                        { title: "Suivi des vols en temps réel", description: "Fini le stress des retards et des correspondances ratées ! Chez Central Taxi 67, nous suivons votre vol à la minute près. Vous bénéficierez d'une prise en charge à temps, sans courir ni soupirer dans les halls d'aéroport." },
                        { title: "Chauffeurs discrets et ponctuels", description: "Nos chauffeurs de taxi strasbourgeois allient professionnalisme et discrétion : ni bavardages inutiles, ni retard ! Central Taxi 67 vous assure une présence rassurante et ponctuelle." },
                        { title: "Véhicules adaptés, spacieux et confortables", description: "Monospaces, vans ou berlines, votre limousine taxi est soigneusement entretenu. Chaque trajet devient un moment agréable, que vous soyez seul, en famille ou entre amis." },
                        { title: "Réservations flexibles", description: "Planifiez à l'avance… ou décidez à la dernière minute : nos taxis Strasbourg Aéroport Entzheim s'adaptent à votre emploi du temps." },
                        { title: "Accueil personnalisé à l'aéroport Entzheim", description: "Votre chauffeur de taxi Strasbourg vous accueille avec une pancarte à votre nom, pour éviter les longues recherches et vous offrir un début de voyage sans stress." },
                        { title: "Assistance bagages", description: "Valises, sacs volumineux ou équipements spéciaux : nos chauffeurs se chargent de tout, pour que vous puissiez voyager léger… dans votre esprit comme dans vos mains." },
                        { title: "Sécurité des enfants assurée", description: "Sièges auto et réhausseurs disponibles sur demande. Les plus petits voyagent en toute sécurité, et vous, en toute sérénité." },
                        { title: "Navettes Strasbourg Aéroport Entzheim vers hôtels et hébergements touristiques", description: "Explorez l'Alsace sans souci : nous vous conduisons directement à votre hôtel ou hébergement." },
                        { title: "Mise à disposition pour vos rendez-vous", description: "Professionnels ou touristes, bénéficiez de notre service à l'heure pour vos réunions, visites guidées ou circuits touristiques. Votre timing est respecté, vos déplacements optimisés." },
                        { title: "Options premium à bord", description: "A bord de nos véhicules disponibles, vous pouvez avoir le Wi-Fi pour rester connecté. Vous avez aussi droit à des bouteilles d'eau offertes pour vous rafraîchir." },
                        { title: "Service adapté à tous", description: "Entrepreneur pressé, voyageur solitaire ou groupe d'amis ? Notre taxi Strasbourg aéroport Entzheim peut s'occuper de votre transport avec le sourire et le professionnalisme qui font notre réputation. Complétez notre formulaire de réservation en ligne si vous voulez voyager sans le moindre stress." }
                    ]
                },
                {
                    title: "FAQ – Taxi Strasbourg Aéroport Entzheim",
                    items: [
                        { title: "Comment réserver un taxi entre Strasbourg et l'aéroport d'Entzheim ?", description: "Vous pouvez réserver votre taxi en ligne en un clic sur notre formulaire de Central Taxi 67 ou par téléphone. Vous pouvez réserver à l'avance pour voyager l'esprit tranquille… ou en dernière minute s'il y a une urgence." },
                        { title: "Combien coûte un trajet en taxi Strasbourg – Aéroport Entzheim ?", description: "Le prix varie en fonction de la distance parcourue, de l'heure (jour/nuit) et du trafic. Sur notre site, vous trouverez une estimation indicative. Seul le taximètre du véhicule fait foi." },
                        { title: "Le service de taxi fonctionne-t-il 24h/24 et 7j/7 ?", description: "Oui, Central Taxi 67 assure vos transferts à toute heure, y compris les week-ends et jours fériés. Vous pouvez ainsi compter sur un chauffeur ponctuel quelle que soit l'heure de votre vol." },
                        { title: "Les taxis acceptent-ils les bagages volumineux ou les trajets en groupe ?", description: "Absolument. Nos véhicules (berlines, vans, monospaces) sont adaptés aux bagages volumineux et aux groupes de plusieurs personnes. Nos chauffeurs se chargent également de l'assistance bagages pour un voyage encore plus confortable." }
                    ]
                }
            ]
        },
        europapark: {
            seoTitle: "Taxi Strasbourg Europa-Park | Central Taxi 67",
            seoDescription: "Transfert Taxi Strasbourg ↔ Europa-Park. Service confortable, van jusqu'à 8 passagers, horaires adaptés. Réservation rapide.",
            heroTitle: "Taxi Strasbourg Europa-Park",
            heroSubtitle: "Transfert confortable vers Europa-Park depuis Strasbourg.",
            intro: "Partez à Europa-Park en toute sérénité avec un chauffeur professionnel. Idéal pour les familles et groupes.",
            sections: [
                {
                    title: "Ce que nous proposons",
                    items: [
                        { title: "Aller/retour sur mesure", description: "Horaires adaptés à votre journée au parc." },
                        { title: "Espace bagages", description: "Place pour poussettes et effets personnels." },
                        { title: "Van jusqu'à 8", description: "Solution idéale pour les groupes et familles." }
                    ]
                }
            ]
        },
        circuit: {
            seoTitle: "Taxi Circuit Touristique Alsace | Central Taxi 67",
            seoDescription: "Découvrez l'Alsace avec un circuit touristique en taxi : Route des Vins, villages pittoresques, patrimoine. Itinéraires sur-mesure.",
            heroTitle: "Taxi Circuit Touristique en Alsace",
            heroSubtitle: "Découvrez la Route des Vins et les plus beaux villages avec chauffeur.",
            intro: "Composez votre circuit touristique sur-mesure en Alsace : Obernai, Haut-Koenigsbourg, Colmar et plus encore.",
            sections: [
                {
                    title: "Idées de circuits",
                    items: [
                        { title: "Route des Vins", description: "Villages pittoresques, domaines viticoles et panoramas uniques." },
                        { title: "Patrimoine", description: "Châteaux, musées et cathédrales emblématiques de la région." },
                        { title: "Sur-mesure", description: "Itinéraires personnalisés selon vos envies et votre temps." }
                    ]
                }
            ]
        },
        gare: {
            seoTitle: "Taxi Strasbourg Gare | Central Taxi 67",
            seoDescription: "Votre taxi à la gare de Strasbourg : confort, rapidité et sérénité. Chauffeurs ponctuels, aide aux bagages, service porte-à-porte. Réservation 24/7.",
            heroTitle: "Taxi Strasbourg Gare",
            heroSubtitle: "Votre taxi à la gare de Strasbourg : confort, rapidité et sérénité",
            intro: "À la recherche d'un taxi Strasbourg gare rapide et fiable ? Avec Central Taxi 67, oubliez les files d'attente qui s'éternisent sur le quai ! Votre limousine taxi vous attend, prêt à démarrer. Nos chauffeurs privés connaissent Strasbourg et toute son Eurométropole mieux que leur GPS Nos clients profitent d'un service de transport taillé sur mesure, sécurisé à 100 % et d'un confort premium à bord de nos véhicules haut de gamme. Et pour réserver un taxi ? Quelques clics en ligne ou un coup de fil à notre centre d'appel et votre course est prête.",
            sections: [
                {
                    title: "Nos Services : Transferts depuis la Gare de Strasbourg",
                    items: [
                        { title: "Transfert gare Strasbourg vers l'aéroport de Entzheim", description: "Voyager devrait toujours commencer en douceur ! Avec notre service taxi, vous quittez la gare de Strasbourg sans lever le petit doigt, direction l'aéroport de Strasbourg Entzheim. Confort, ponctualité et tranquillité d'esprit sont les mots d'ordre de notre compagnie de taxi. Ne craignez plus jamais de rater votre vol ! Nous synchronisons nos transferts avec vos horaires et adaptons notre service de taxi Strasbourg aéroport à vos besoins." },
                        { title: "Transfert vers votre hôtel / hébergement dans l'Eurométropole strasbourgeoise", description: "Avec notre service de taxi Strasbourg gare, vous pouvez rejoindre facilement votre hôtel ou votre hébergement depuis plusieurs gares de l'Eurométropole et des environs. Nos chauffeurs peuvent vous prendre en charge à : La gare de Strasbourg-Ville, La gare de Strasbourg-Cronenbourg, La gare de Bischheim, La gare de Schiltigheim, La gare de Ostwald, La gare de Lingolsheim, La gare Illkirch-Graffenstaden, La gare de Haguenau, La gare Molsheim, La gare de Saverne, La gare de Entzheim" },
                        { title: "Transfert gare Strasbourg vers les lieux touristiques et attractions de la ville", description: "Envie de découvrir la Communauté urbaine de Strasbourg dès votre arrivée ? Nos taxis à la gare vous conduisent vers les incontournables de la ville : la Cathédrale Notre-Dame, la Petite France, le Palais Rohan, les Ponts Couverts, la Place Kléber, le Musée Alsacien, le Musée d'Art Moderne et Contemporain, le Parlement Européen, le Parc de l'Orangerie, la Maison Kammerzell, Les charmantes rives de l'Ill" }
                    ]
                },
                {
                    title: "Gares desservies",
                    items: [
                        { title: "Gare de Strasbourg-Ville", description: "Gare principale de Strasbourg" },
                        { title: "Gare de Strasbourg-Cronenbourg", description: "Service porte-à-porte" },
                        { title: "Gare de Bischheim", description: "Prise en charge rapide" },
                        { title: "Gare de Schiltigheim", description: "Chauffeur professionnel" },
                        { title: "Gare de Ostwald", description: "Service 24/7" },
                        { title: "Gare de Lingolsheim", description: "Aide aux bagages" },
                        { title: "Gare Illkirch-Graffenstaden", description: "Véhicules confortables" },
                        { title: "Gare de Haguenau", description: "Tarifs réglementés" },
                        { title: "Gare Molsheim", description: "Ponctualité garantie" },
                        { title: "Gare de Saverne", description: "Service premium" },
                        { title: "Gare de Entzheim", description: "Transfert aéroport" }
                    ]
                },
                {
                    title: "Attractions touristiques desservies",
                    items: [
                        { title: "Cathédrale Notre-Dame", description: "Monument emblématique de Strasbourg" },
                        { title: "Petite France", description: "Quartier historique pittoresque" },
                        { title: "Palais Rohan", description: "Palais épiscopal du XVIIIe siècle" },
                        { title: "Ponts Couverts", description: "Vestiges des fortifications médiévales" },
                        { title: "Place Kléber", description: "Place centrale de Strasbourg" },
                        { title: "Musée Alsacien", description: "Patrimoine culturel alsacien" },
                        { title: "Musée d'Art Moderne et Contemporain", description: "Collections d'art contemporain" },
                        { title: "Parlement Européen", description: "Institution européenne" },
                        { title: "Parc de l'Orangerie", description: "Jardin public historique" },
                        { title: "Maison Kammerzell", description: "Maison à colombages du XVe siècle" },
                        { title: "Rives de l'Ill", description: "Promenades au bord de l'Ill" }
                    ]
                },
                {
                    title: "Estimation de trajets courants en taxi depuis la gare de Strasbourg",
                    items: [
                        { title: "Gare de Strasbourg → Aéroport Entzheim", description: "20 min - Tarif jour: 35 – 40 € / Tarif nuit: 50 – 60€" },
                        { title: "Gare de Strasbourg → Illkirch-Graffenstaden", description: "15 min - Tarif jour: 25 – 30 € / Tarif nuit: 35 – 40 €" },
                        { title: "Gare de Strasbourg → Haguenau", description: "40 min - Tarif jour: 75 – 85 € / Tarif nuit: 90 – 100 €" },
                        { title: "Gare de Strasbourg → Colmar", description: "55 min - Tarif jour: 130 – 140 € / Tarif nuit: 180 – 210€" }
                    ]
                },
                {
                    title: "Pourquoi réserver un taxi Strasbourg gare chez nous ?",
                    items: [
                        { title: "Voitures haut de gamme", description: "On met à votre disposition des véhicules haut de gamme et bien entretenus. Vous pouvez réserver une monospace ou un van pour vos trajets vers ou depuis la gare selon votre effectif." },
                        { title: "Chauffeurs privés expérimentés", description: "Nos experts connaissent l'Eurométropole strasbourgeoise à la rue près. Votre chauffeur privé est là quand vous l'êtes. Il n'y a jamais de retard." },
                        { title: "Accès aux voies réservées aux bus", description: "Nos taxis empruntent les voies de bus et les voies rapides, et vous gagnez chaque minute… même aux heures de pointe." },
                        { title: "Wi-Fi gratuit à bord", description: "Pendant le trajet, vous avez envie de travailler, de scroller, de regarder vos séries ou de chatter avec vos proches ? Notre taxi limousine vous permet de rester connecté, informé et diverti tout au long du trajet." },
                        { title: "Bouteilles d'eau offertes", description: "Une petite attention qui change tout. On vous garde hydraté pour que le trajet reste frais et agréable." },
                        { title: "Taxi Strasbourg pas cher", description: "Pourquoi payer plus quand on peut voyager malin ? Notre société de transport vous propose un service alliant confort, rapidité et fiabilité, et ce, au meilleur prix." },
                        { title: "Réservation simple et rapide", description: "Quelques clics ou un coup de fil suffisent, et le taxi est prêt. Notre centrale de réservation est disponible 24h/24 et 7j/7. Même les jours fériés, vous pouvez réserver un taxi pour vos trajets vers ou depuis la gare de Strasbourg." }
                    ]
                },
                {
                    title: "FAQ – Taxi Strasbourg Gare",
                    items: [
                        { title: "Comment réserver un taxi depuis ou vers la gare de Strasbourg ?", description: "La réservation est très simple : vous pouvez remplir le formulaire en ligne sur Central Taxi 67 ou appeler directement notre centrale 24h/24 et 7j/7." },
                        { title: "Quels sont les services proposés par un taxi à la gare de Strasbourg ?", description: "Nos taxis assurent les transferts vers l'aéroport d'Entzheim, les hôtels, les quartiers de l'Eurométropole, mais aussi vers les principaux lieux touristiques de Strasbourg (Cathédrale, Petite France, Parlement européen, etc.)." },
                        { title: "Combien coûte un taxi depuis la gare de Strasbourg ?", description: "Le tarif dépend de la distance, de l'horaire (jour/nuit) et du trafic. Nous proposons des prix compétitifs et transparents. Seul le montant affiché au taximètre fait foi." },
                        { title: "Les taxis de la gare de Strasbourg circulent-ils même la nuit ou les jours fériés ?", description: "Vous êtes sûr(e) de trouver un chauffeur ponctuel, quelle que soit l'heure de votre arrivée ou de votre départ car notre service fonctionne à tout moment." }
                    ]
                }
            ]
        }
    },
    en: {
        index: {
            seoTitle: "Taxi Strasbourg | Central Taxi 67",
            seoDescription: "Taxi Strasbourg 24/7. Professional drivers, regulated fares, online booking. All distances in Strasbourg Eurometropolis and Alsace.",
            heroTitle: "Taxi Strasbourg - Central Taxi 67",
            heroSubtitle: "Your private driver in Strasbourg and across Alsace, 24/7.",
            intro: "Discover our taxi services in Strasbourg and Alsace. Airport transfers, train station, sightseeing tours and urban rides. Professional and punctual service.",
            sections: [
                {
                    title: "Our taxi services",
                    items: [
                        { title: "Taxi Strasbourg", description: "Urban and interurban rides within Strasbourg Eurometropolis." },
                        { title: "Airport Transfer", description: "Strasbourg ↔ Entzheim Airport connection with flight tracking." },
                        { title: "Train Station Taxi", description: "Pick-up at Strasbourg station, door-to-door service." },
                        { title: "Sightseeing Tour", description: "Discover Alsace: Wine Route, picturesque villages." },
                        { title: "Europa-Park", description: "Comfortable transfer to Europa-Park from Strasbourg." }
                    ]
                },
                {
                    title: "Why choose us?",
                    items: [
                        { title: "24/7 availability", description: "Immediate ride or scheduled booking, day and night." },
                        { title: "Professional drivers", description: "Experienced, punctual and discreet for your comfort." },
                        { title: "Regulated fares", description: "Prices known in advance, no surprises or hidden fees." }
                    ]
                }
            ]
        },
        strasbourg: {
            seoTitle: "Taxi Strasbourg | Central Taxi 67",
            seoDescription: "Taxi Strasbourg 24/7. Professional drivers, regulated fares, online booking. All distances in Strasbourg Eurometropolis and Alsace.",
            heroTitle: "Taxi Strasbourg - Central Taxi 67",
            heroSubtitle: "Your private driver in Strasbourg and across Alsace, 24/7.",
            intro: "Need a taxi in Strasbourg for business, leisure or tourism? Enjoy a reliable, on-time service at a fair price.",
            sections: [
                {
                    title: "Why choose Central Taxi 67?",
                    items: [
                        { title: "24/7 availability", description: "Immediate ride or scheduled booking, day and night." },
                        { title: "Comfort & safety", description: "Well-maintained vehicles, experienced and discreet drivers." },
                        { title: "All distances", description: "Trips within Strasbourg Eurometropolis and throughout Alsace." }
                    ]
                }
            ]
        },
        aeroport: {
            seoTitle: "Taxi Strasbourg Airport Entzheim: Travel with peace of mind",
            seoDescription: "Fly stress-free! Book your taxi in Strasbourg and enjoy a smooth, punctual and comfortable journey to Entzheim Airport.",
            heroTitle: "Taxi Strasbourg Airport Entzheim",
            heroSubtitle: "Fast and comfortable transfer",
            intro: "Need a taxi Strasbourg–Entzheim Airport to travel stress-free? Express business meetings, romantic getaways, vacations are our specialties. Central Taxi 67 is waiting for you at any time. We're on the starting line 24/7 including holidays. With us, every taxi ride in Strasbourg Eurometropolis rhymes with serenity. Guaranteed punctuality, impeccable comfort and fares without false notes.",
            sections: [
                {
                    title: "Our main routes: from Strasbourg and surroundings to Entzheim Airport",
                    items: [
                        { title: "Airport transfers Strasbourg center", description: "From the picturesque charm of Petite France to the lively streets of Neudorf, through Meinau, Robertsau, Esplanade or Krutenau… Even Montagne Verte and Port du Rhin! You can contact our Taxi Strasbourg Entzheim Airport service." },
                        { title: "Transfers to and from neighboring towns", description: "Illkirch-Graffenstaden, Schiltigheim, Lingolsheim, Ostwald, Eckbolsheim, Bischheim, Hoenheim… up to Wolfisheim or Geispolsheim, Central Taxi 67 and its taxis make the rounds of the essentials." },
                        { title: "Long distance trips from or to the airport", description: "You can count on our Strasbourg Airport taxi drivers to connect Haguenau, Colmar, Sélestat, Obernai, Saverne, Erstein, Mulhouse, Nancy or Metz… We can even accompany you on your cross-border escapades to Freiburg, Kehl, Offenburg, Basel, Zurich or even Luxembourg. Alsace and Europe, it's our playground." },
                        { title: "Transfers to stations from and to Entzheim Airport", description: "Our paid passenger transport service transports you with elegance and speed to the main stations of Alsace and Grand Est. You can travel serenely… never miss your train with the best Strasbourg station taxi driver." }
                    ]
                },
                {
                    title: "Served stations",
                    items: [
                        { title: "Strasbourg-Ville Station", description: "Direct pick-up from the main station" },
                        { title: "Colmar Station", description: "Fast connection to the airport" },
                        { title: "Sélestat Station", description: "Door-to-door service" },
                        { title: "Mulhouse-Ville Station", description: "Comfortable transfer" },
                        { title: "Haguenau Station", description: "Professional driver" },
                        { title: "Saverne Station", description: "Guaranteed punctuality" },
                        { title: "Molsheim Station", description: "24/7 service" },
                        { title: "Obernai Station", description: "Baggage assistance" },
                        { title: "Barr Station", description: "Comfortable vehicles" },
                        { title: "Erstein Station", description: "Regulated fares" }
                    ]
                },
                {
                    title: "Fares and journey times",
                    items: [
                        { title: "Mulhouse to Entzheim", description: "1h10mn - Day rate: €220 / Night rate: €310" },
                        { title: "Colmar to Entzheim", description: "48mn - Day rate: €130 / Night rate: €169" },
                        { title: "Sélestat to Entzheim", description: "32mn - Day rate: €95 / Night rate: €128" },
                        { title: "Haguenau to Entzheim", description: "40mn - Day rate: €100 / Night rate: €140" },
                        { title: "La Wantzenau to Entzheim", description: "33mn - Day rate: €70 / Night rate: €91" },
                        { title: "Lingolsheim to Entzheim", description: "11mn - Day rate: €20 / Night rate: €25" },
                        { title: "Brumath to Entzheim", description: "34mn - Day rate: €96 / Night rate: €940" },
                        { title: "Baden-Baden (Germany) to Entzheim", description: "1h05mn - Day rate: €140 / Night rate: €200" },
                        { title: "Strasbourg 67100 to Entzheim", description: "20mn - Day rate: €40 / Night rate: €50" },
                        { title: "Wolfisheim to Entzheim", description: "10mn - Day rate: €15 / Night rate: €20" }
                    ]
                },
                {
                    title: "Good reasons to book a Strasbourg Entzheim Airport taxi with Central Taxi 67",
                    items: [
                        { title: "30 minutes free waiting at the airport", description: "Your driver doesn't look at his watch impatiently. You benefit from 30 minutes of free waiting when picking you up at the airport." },
                        { title: "Real-time flight tracking", description: "No more stress from delays and missed connections! At Central Taxi 67, we track your flight to the minute. You will benefit from on-time pick-up, without running or sighing in airport halls." },
                        { title: "Discreet and punctual drivers", description: "Our Strasbourg taxi drivers combine professionalism and discretion: no unnecessary chatter, no delay! Central Taxi 67 ensures a reassuring and punctual presence." },
                        { title: "Adapted, spacious and comfortable vehicles", description: "Minivans, vans or sedans, your taxi limousine is carefully maintained. Every trip becomes a pleasant moment, whether you're alone, with family or friends." },
                        { title: "Flexible reservations", description: "Plan ahead… or decide at the last minute: our Strasbourg Entzheim Airport taxis adapt to your schedule." },
                        { title: "Personalized welcome at Entzheim Airport", description: "Your Strasbourg taxi driver welcomes you with a sign with your name, to avoid long searches and offer you a stress-free start to your journey." },
                        { title: "Baggage assistance", description: "Suitcases, bulky bags or special equipment: our drivers take care of everything, so you can travel light… in your mind as well as in your hands." },
                        { title: "Children's safety assured", description: "Car seats and boosters available on request. The little ones travel safely, and you, in complete serenity." },
                        { title: "Strasbourg Entzheim Airport shuttles to hotels and tourist accommodations", description: "Explore Alsace without worry: we take you directly to your hotel or accommodation." },
                        { title: "Available for your appointments", description: "Professionals or tourists, benefit from our on-time service for your meetings, guided tours or tourist circuits. Your timing is respected, your movements optimized." },
                        { title: "Premium options on board", description: "On board our available vehicles, you can have Wi-Fi to stay connected. You also have the right to free water bottles to refresh yourself." }
                    ]
                },
                {
                    title: "FAQ – Taxi Strasbourg Entzheim Airport",
                    items: [
                        { title: "How to book a taxi between Strasbourg and Entzheim Airport?", description: "You can book your taxi online with one click on our Central Taxi 67 form or by phone. You can book in advance to travel with peace of mind… or at the last minute if there's an emergency." },
                        { title: "How much does a Strasbourg – Entzheim Airport taxi ride cost?", description: "The price varies depending on the distance traveled, time (day/night) and traffic. On our site, you will find an indicative estimate. Only the vehicle's taximeter is authoritative." },
                        { title: "Does the taxi service work 24/7?", description: "Yes, Central Taxi 67 ensures your transfers at any time, including weekends and holidays. You can thus count on a punctual driver whatever the time of your flight." },
                        { title: "Do taxis accept bulky luggage or group trips?", description: "Absolutely. Our vehicles (sedans, vans, minivans) are adapted to bulky luggage and groups of several people. Our drivers also take care of baggage assistance for an even more comfortable journey." }
                    ]
                }
            ]
        },
        europapark: {
            seoTitle: "Taxi Strasbourg Europa-Park | Central Taxi 67",
            seoDescription: "Transfer Taxi Strasbourg ↔ Europa-Park. Comfortable service, van up to 8 passengers, tailored schedule. Fast booking.",
            heroTitle: "Taxi Strasbourg Europa-Park",
            heroSubtitle: "Comfortable transfer to Europa-Park from Strasbourg.",
            intro: "Head to Europa-Park with a professional driver. Perfect for families and groups.",
            sections: [
                {
                    title: "What we offer",
                    items: [
                        { title: "Custom round-trips", description: "Schedule adapted to your day in the park." },
                        { title: "Luggage space", description: "Room for strollers and personal items." },
                        { title: "Van up to 8", description: "Ideal solution for larger parties and families." }
                    ]
                }
            ]
        },
        circuit: {
            seoTitle: "Taxi Alsace Sightseeing Circuit | Central Taxi 67",
            seoDescription: "Discover Alsace with a taxi sightseeing circuit: Wine Route, picturesque villages, heritage. Tailor-made itineraries.",
            heroTitle: "Taxi Alsace Sightseeing Circuit",
            heroSubtitle: "Discover the Wine Route and the most beautiful villages with a driver.",
            intro: "Create your tailor-made tour in Alsace: Obernai, Haut-Koenigsbourg, Colmar and more.",
            sections: [
                {
                    title: "Circuit ideas",
                    items: [
                        { title: "Wine Route", description: "Picturesque villages, wineries and unique panoramas." },
                        { title: "Heritage", description: "Castles, museums and the region's emblematic cathedrals." },
                        { title: "Tailor-made", description: "Personalized routes according to your wishes and time." }
                    ]
                }
            ]
        },
        gare: {
            seoTitle: "Taxi Strasbourg Station | Central Taxi 67",
            seoDescription: "Your taxi at Strasbourg Station: comfort, speed and serenity. Punctual drivers, baggage assistance, door-to-door service. 24/7 booking.",
            heroTitle: "Taxi Strasbourg Station",
            heroSubtitle: "Your taxi at Strasbourg Station: comfort, speed and serenity",
            intro: "Looking for a fast and reliable Strasbourg station taxi? With Central Taxi 67, forget the endless queues on the platform! Your taxi limousine is waiting, ready to start. Our private drivers know Strasbourg and its entire Eurometropolis better than their GPS. Our clients enjoy a tailor-made transport service, 100% secure and premium comfort on board our high-end vehicles.",
            sections: [
                {
                    title: "Our Services: Transfers from Strasbourg Station",
                    items: [
                        { title: "Strasbourg station transfer to Entzheim Airport", description: "Travel should always start smoothly! With our taxi service, you leave Strasbourg station without lifting a finger, heading to Strasbourg Entzheim Airport. Comfort, punctuality and peace of mind are the watchwords of our taxi company." },
                        { title: "Transfer to your hotel / accommodation in Strasbourg Eurometropolis", description: "With our Strasbourg station taxi service, you can easily reach your hotel or accommodation from several stations in the Eurometropolis and surrounding areas." },
                        { title: "Strasbourg station transfer to tourist sites and city attractions", description: "Want to discover the Strasbourg Urban Community as soon as you arrive? Our station taxis take you to the city's must-sees." }
                    ]
                },
                {
                    title: "Served stations",
                    items: [
                        { title: "Strasbourg-Ville Station", description: "Main Strasbourg station" },
                        { title: "Strasbourg-Cronenbourg Station", description: "Door-to-door service" },
                        { title: "Bischheim Station", description: "Fast pick-up" },
                        { title: "Schiltigheim Station", description: "Professional driver" },
                        { title: "Ostwald Station", description: "24/7 service" },
                        { title: "Lingolsheim Station", description: "Baggage assistance" },
                        { title: "Illkirch-Graffenstaden Station", description: "Comfortable vehicles" },
                        { title: "Haguenau Station", description: "Regulated fares" },
                        { title: "Molsheim Station", description: "Guaranteed punctuality" },
                        { title: "Saverne Station", description: "Premium service" },
                        { title: "Entzheim Station", description: "Airport transfer" }
                    ]
                },
                {
                    title: "Served tourist attractions",
                    items: [
                        { title: "Notre-Dame Cathedral", description: "Strasbourg's emblematic monument" },
                        { title: "Petite France", description: "Picturesque historic district" },
                        { title: "Rohan Palace", description: "18th century episcopal palace" },
                        { title: "Covered Bridges", description: "Remains of medieval fortifications" },
                        { title: "Kléber Square", description: "Central square of Strasbourg" },
                        { title: "Alsatian Museum", description: "Alsatian cultural heritage" },
                        { title: "Museum of Modern and Contemporary Art", description: "Contemporary art collections" },
                        { title: "European Parliament", description: "European institution" },
                        { title: "Orangerie Park", description: "Historic public garden" },
                        { title: "Kammerzell House", description: "15th century half-timbered house" },
                        { title: "Ill River Banks", description: "Riverside walks along the Ill" }
                    ]
                },
                {
                    title: "Fares and journey times",
                    items: [
                        { title: "Strasbourg Station → Entzheim Airport", description: "20 min - Day rate: €35-40 / Night rate: €50-60" },
                        { title: "Strasbourg Station → Illkirch-Graffenstaden", description: "15 min - Day rate: €25-30 / Night rate: €35-40" },
                        { title: "Strasbourg Station → Haguenau", description: "40 min - Day rate: €75-85 / Night rate: €90-100" },
                        { title: "Strasbourg Station → Colmar", description: "55 min - Day rate: €130-140 / Night rate: €180-210" }
                    ]
                },
                {
                    title: "Why book a Strasbourg station taxi with us?",
                    items: [
                        { title: "High-end cars", description: "We provide you with high-end, well-maintained vehicles. You can book a minivan or van for your trips to or from the station depending on your group size." },
                        { title: "Experienced private drivers", description: "Our experts know the Strasbourg Eurometropolis street by street. Your private driver is there when you are. There's never a delay." },
                        { title: "Access to bus lanes", description: "Our taxis use bus lanes and expressways, and you save every minute... even during rush hour." },
                        { title: "Free Wi-Fi on board", description: "During the journey, do you want to work, scroll, watch your series or chat with your loved ones? Our taxi limousine allows you to stay connected, informed and entertained throughout the journey." },
                        { title: "Complimentary water bottles", description: "A small attention that changes everything. We keep you hydrated so the journey stays fresh and pleasant." },
                        { title: "Cheap Strasbourg taxi", description: "Why pay more when you can travel smart? Our transport company offers you a service combining comfort, speed and reliability, and this, at the best price." },
                        { title: "Simple and fast booking", description: "A few clicks or a phone call is enough, and the taxi is ready. Our booking center is available 24/7. Even on holidays, you can book a taxi for your trips to or from Strasbourg station." }
                    ]
                },
                {
                    title: "FAQ – Strasbourg Station Taxi",
                    items: [
                        { title: "How to book a taxi from or to Strasbourg station?", description: "Booking is very simple: you can fill out the online form on Central Taxi 67 or call our center directly 24/7." },
                        { title: "What services are offered by a taxi at Strasbourg station?", description: "Our taxis provide transfers to Entzheim Airport, hotels, Eurometropolis districts, but also to the main tourist sites of Strasbourg (Cathedral, Petite France, European Parliament, etc.)." },
                        { title: "How much does a taxi from Strasbourg station cost?", description: "The fare depends on distance, time (day/night) and traffic. We offer competitive and transparent prices. Only the amount displayed on the taximeter is authoritative." },
                        { title: "Do Strasbourg station taxis run even at night or on holidays?", description: "You are sure to find a punctual driver, whatever the time of your arrival or departure because our service works at any time." }
                    ]
                }
            ]
        }
    }
}

export default Data


