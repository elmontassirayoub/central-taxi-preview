export type SupplementaireOptionType = {
    title: string,
    description: string
}

export type SupplementaireType = {
    title: string,
    description: string,
    options: SupplementaireOptionType[]
}

type DataType = {
    fr: SupplementaireType;
    en: SupplementaireType;
    [key: string]: any;
};

const Data: DataType = {
    fr: {
        title: "Services supplémentaires Taxi Strasbourg : on s’adapte à vos besoins de confort ! ",
        description: "Les taxis de chez Central Taxi 67 vous proposent des services extras pour rendre vos trajets plus agréables et plus conformes à vos besoins.",
        options: [
            {
                title: "Playlist personnelle",
                description: "Nous avons à cœur de créer une ambiance personnalisée pour chaque passager. Vous avez la possibilité d'écouter vos morceaux préférés pendant chaque trajet courte ou longue distance."
            },
            {
                title: "Hydratation assurée",
                description: "Des bouteilles d'eau fraîche sont disponibles à bord de nos véhicules pour apaiser votre soif durant tout le voyage. "
            },
            {
                title: "Chargeur pour téléphone portable et tablette",
                description: "Restez connecté avec vos proches avec nos chargeurs pour smartphones ou tablettes. En réservant votre taxi chez nous, vous ne tomberez jamais en panne de batterie."
            },
            {
                title: "Wifi illimitée",
                description: "A bord de l’un de nos monospaces ou van, surfez sur internet grâce à notre connexion wifi illimitée, parfait pour travailler, regarder des vidéos ou rester en contact avec vos proches."
            },
            {
                title: "Divertissement interactif",
                description: "On peut mettre à votre disposition une tablette tactile à bord. Vous pouvez vous en servir pour regarder Youtube, jouer à des jeux ou surfer sur le web ou les réseaux sociaux pendant le trajet."
            },
            {
                title: "Paiement simplifié",
                description: "Notre compagnie de taxi vous simplifie la vie en mettant à votre disposition un terminal de paiement, compatible avec la plupart des cartes bancaires."
            },
            {
                title: "Espace de rangement sur mesure",
                description: "Notre société de taxi attribue à chaque client un véhicule adapté à la taille de ses bagages. Vos affaires sont en sécurité à bord de nos véhicules."
            },
            {
                title: "Sécurité enfantine",
                description: "Pour les voyages en famille, effectuez le trajet en toute sécurité avec vos enfants grâce à nos sièges auto disponibles sur demande."
            },
            {
                title: "Lecture et détente",
                description: "Vous avez une préférence pour les magazines ? Vous aurez accès aux périodiques les plus populaires pour vous divertir, vous détendre et passer le temps pendant le voyage."
            },
            {
                title: "Confidentialité sonore",
                description: "Profitez de vos conversations privées avec des écouteurs à usage unique fournis à chaque trajet avec l’un de nos chauffeurs de taxi dans l’Eurométropole."
            },
            {
                title: "Rafraîchissement instantané",
                description: "Un long voyage prévu par temps chaud ? Restez frais et à l'aise avec nos serviettes rafraîchissantes."
            },
            {
                title: "Service de livraison express à Strasbourg ",
                description: "Besoin de faire livrer un colis en toute hâte en Alsace ? Confiez cette tâche à Central Taxi 67 et bénéficiez d'une livraison rapide et fiable avec nos chauffeurs de taxi professionnels."
            }
        ]
    },
    en: {
        title: "Additional services Taxi Strasbourg: we adapt to your comfort needs!",
        description: "The taxis from Central Taxi 67 offer you extra services to make your journeys more pleasant and more in line with your needs.",
        options: [
            {
                title: "Personal playlist",
                description: "We are committed to creating a personalized atmosphere for each passenger. You can listen to your favorite songs during every short or long distance journey."
            },
            {
                title: "Hydration guaranteed",
                description: "Bottles of fresh water are available on board our vehicles to quench your thirst throughout the journey."
            },
            {
                title: "Charger for mobile phone and tablet",
                description: "Stay connected with your loved ones with our chargers for smartphones or tablets. By booking your taxi with us, you will never run out of battery."
            },
            {
                title: "Unlimited WiFi",
                description: "On board one of our minivans or vans, surf the internet thanks to our unlimited wifi connection, perfect for working, watching videos or staying in touch with your loved ones."
            },
            {
                title: "Interactive entertainment",
                description: "We can provide you with a touchscreen tablet on board. You can use it to watch Youtube, play games or surf the web or social networks during the journey."
            },
            {
                title: "Simplified payment",
                description: "Our taxi company makes your life easier by providing you with a payment terminal, compatible with most bank cards."
            },
            {
                title: "Espace de rangement sur mesure",
                description: "Our taxi company assigns each customer a vehicle adapted to the size of their luggage. Your belongings are safe on board our vehicles."
            },
            {
                title: "Child safety",
                description: "For family trips, travel safely with your children thanks to our car seats available on request."
            },
            {
                title: "Reading and relaxation",
                description: "Do you have a preference for magazines? You will have access to the most popular periodicals to entertain you, relax and pass the time during the trip."
            },
            {
                title: "Sound Privacy",
                description: "Enjoy your private conversations with single-use headphones provided for each trip with one of our taxi drivers in the Eurometropolis."
            },
            {
                title: "Instant refresh",
                description: "A long trip planned in hot weather? Stay cool and comfortable with our cooling towels."
            },
            {
                title: "Express delivery service in Strasbourg",
                description: "Need to have a parcel delivered quickly to Alsace? Entrust this task to Central Taxi 67 and benefit from fast and reliable delivery with our professional taxi drivers."
            }
        ]
    }
}

export default Data