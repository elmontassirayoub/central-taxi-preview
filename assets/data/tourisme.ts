export type TourismeListOptionType = {
    title: string,
    description: string
}

export type TourismeListType = {
    title: string,
    options: TourismeListOptionType[]
}

export type TourismeType = {
    title: string,
    description: string,
    p1: string, 
    list1: TourismeListType,
    list2: TourismeListType,
}

type DataType = {
    fr: TourismeType;
    en: TourismeType;
    [key: string]: any;
};

const Data: DataType = {
    fr: {
        title: "Voulez-vous passer un séjour de rêve en Alsace ? Comptez sur notre Service de Taxi Strasbourg pour découvrir les plus beaux sites touristiques de la région. ",
        description: "Réservez un Taxi Tourisme à Strasbourg chez Central Taxi 67",
        p1: "Faites confiance à un Taxi Strasbourg pour découvrir la ville et ses alentours en toute sérénité ! De jour comme de nuit, Central Taxi 67 s’engage à vous offrir une visite agréable. En faisant le choix parmi nos circuits touristiques, vous pouvez découvrir les monuments et sites incroyables de la région.",
        list1: {
            title: "Visite en taxi au cœur de Strasbourg",
            options: [
                {
                    title: "La cathédrale Notre-Dame",
                    description: "C’est l’un des plus beaux monuments architecturaux de l’Alsace. La cathédrale de style gothique surplombe la ville de Strasbourg avec sa flèche, haute de 142 mètres. C’est un véritable symbole de la cité et elle bénéficie d’un décor fascinant. Sa façade en dentelle de grès rose et ses magnifiques sculptures vous laisseront sans voix."
                },
                {
                    title: "La Grande Ile",
                    description: "Baptisée « Ellipse insulaire », la Grande Ile est célèbre pour ses trésors architecturaux. Elle est d’ailleurs classée au patrimoine mondial de l’UNESCO. La maison Kammerzell, le Palais Rohan et la Cathédrale Notre-Dame font partie des beaux bâtiments à découvrir sur le lieu."
                },
                {
                    title: "La Petite France",
                    description: "Plongez au cœur de Strasbourg pour découvrir cette cité médiévale. Autrefois, elle était le quartier des tanneurs, des pêcheurs et des meuniers. La Petite France vous réserve une promenade inédite. En parcourant ses ruelles étroites, vous allez découvrir des constructions d’une beauté inégalée."
                },
                {
                    title: "Le Barrage Vauban",
                    description: "Appelé « Grande écluse de fortification », c’est un pont classé monument historique. Le barrage Vauban est un lieu de balade très célèbre. Il offre une vue panoramique sur la cité et ses canaux. La nuit, le barrage et son pont sont illuminés, ce qui leur procure un look féérique."
                },
                {
                    title: "Le quartier européen",
                    description: "Ce quartier historique est le siège des diverses institutions européennes comme le Conseil de l’Europe. Une visite du lieu vous permet de découvrir l’histoire du continent. Vous pourrez aussi admirer la beauté des bâtiments et le charme du quartier. Notre Taxi Strasbourg peut vous y emmener."
                },
            ],
        },
        list2: {
            title: "Voyage en taxi aux alentours de Strasbourg",
            options: [
                {
                    title: "Europa Park",
                    description: "C’est un parc à thèmes qui se trouve à Rust en Allemagne. Vous pouvez y arriver rapidement avec notre Taxi Strasbourg Service. L’Europa Park est un lieu de divertissement exceptionnel qui propose 59 attractions, des spectacles hors du commun et un grand complexe hôtelier pour l’hébergement."
                },
                {
                    title: "La route des vins",
                    description: "La Route des vins se situe à quelques kilomètres à l’ouest de Strasbourg, entre le Rhin et la montagne. Il s’agit d’une bande longiligne qui traverse de magnifiques villages. Se promener à travers la route des vins, c’est admirer un paysage d’une grande beauté et découvrir les joyaux architecturaux de l’Alsace."
                },
                {
                    title: "Cité de l’Automobile",
                    description: "Se trouvant à Mulhouse, c’est une destination phare des passionnés de l’automobile. Il s’agit du plus grand musée de l’auto au monde qui abrite de véritables trésors. Vous y trouverez une collection de voitures anciennes incluant la première Bugatti royale et les F1."
                },
                {
                    title: "Le château du Haut-Koenigsbourg",
                    description: "Ce château médiéval entièrement reconstruit au début du 20ᵉ siècle se trouve à 58 km au sud de Strasbourg.\n\nSon architecture et ses meubles vous garantissent un retour vers le Moyen Âge. Le château-fort trône en haut d’une montagne et il offre une vue sur un paysage remarquable."
                },
                {
                    title: "La ville de Soufflenheim",
                    description: "C’est une ville du Bas-Rhin baignant dans un cadre verdoyant. Elle est célèbre pour ses poteries artisanales. Il faut dire que la ville abrite des terres argileuses. Plusieurs potiers sont encore présents dans la ville et ils ont conservé les traditions alsaciennes."
                },
                {
                    title: "Le mont Sainte-Odile",
                    description: "Culminant à 753 m d’altitude, c’est un endroit très cher pour les Alsaciens que vous pouvez aussi visiter avec un chauffeur chez Central Taxi 67. Le mont Sainte-Odile et son mur païen de 10 km de long constituent un lieu de prière qui accueille chaque année des pèlerins et des touristes."
                },
                {
                    title: "Obernai",
                    description: "Notre Taxi Strasbourg Service peut vous emmener vers la charmante ville Alsacienne d'Obernai. La Place du marché, les maisons à colombage, les remparts, le Puits aux six seaux et l’église Saint-Pierre et Paul font partie des sites touristiques à découvrir."
                }
            ]
        }
    },
    en: {
        title: "Do you want to spend a dream stay in Alsace? Count on our Strasbourg Taxi Service to discover the most beautiful tourist sites in the region.",
        description: "Book a Tourist Taxi in Strasbourg at Central Taxi 67",
        p1: "Trust a Strasbourg Taxi to discover the city and its surroundings with complete peace of mind! Day or night, Central Taxi 67 is committed to offering you a pleasant visit. By choosing from our tourist circuits, you can discover the incredible monuments and sites of the region.",
        list1: {
            title: "Taxi tour in the heart of Strasbourg",
            options: [
                {
                    title: "The Notre-Dame cathedral",
                    description: "It is one of the most beautiful architectural monuments in Alsace. The Gothic style cathedral overlooks the city of Strasbourg with its spire, 142 meters high. It is a true symbol of the city and benefits from a fascinating decor. Its pink sandstone lace facade and magnificent sculptures will leave you speechless."
                },
                {
                    title: "The Big Island",
                    description: "Named “Island Ellipse”, the Big Island is famous for its architectural treasures. It is also classified as a UNESCO world heritage site. The Kammerzell House, the Rohan Palace and the Notre-Dame Cathedral are among the beautiful buildings to discover on the site."
                },
                {
                    title: "Little France",
                    description: "Immerse yourself in the heart of Strasbourg to discover this medieval city. Formerly, it was the district of tanners, fishermen and millers. La Petite France has a unique walk in store for you. As you walk through its narrow streets, you will discover buildings of unparalleled beauty."
                },
                {
                    title: "The Vauban Dam",
                    description: "Called “Grande fortification lock”, it is a bridge classified as a historic monument. The Vauban dam is a very famous place for walks. It offers a panoramic view of the city and its canals. At night, the dam and its bridge are illuminated, which gives them a magical look."
                },
                {
                    title: "The European Quarter",
                    description: "This historic district is the headquarters of various European institutions such as the Council of Europe. A visit to the place allows you to discover the history of the continent. You will also be able to admire the beauty of the buildings and the charm of the neighborhood. Our Taxi Strasbourg can take you there."
                },
            ],
        },
        list2: {
            title: "Taxi trip around Strasbourg",
            options: [
                {
                    title: "Europa Park",
                    description: "It is a theme park located in Rust, Germany. You can get there quickly with our Taxi Strasbourg Service. Europa Park is an exceptional entertainment venue that offers 59 attractions, extraordinary shows and a large hotel complex for accommodation."
                },
                {
                    title: "The wine route",
                    description: "The Wine Route is located a few kilometers west of Strasbourg, between the Rhine and the mountains. It is a long strip which passes through magnificent villages. Walking along the wine route means admiring a landscape of great beauty and discovering the architectural jewels of Alsace."
                },
                {
                    title: "Automobile City",
                    description: "Located in Mulhouse, it is a key destination for car enthusiasts. It is the largest auto museum in the world which houses real treasures. There you will find a collection of vintage cars including the first royal Bugatti and F1 cars."
                },
                {
                    title: "Haut-Koenigsbourg castle",
                    description: "This medieval castle, completely rebuilt at the beginning of the 20th century, is located 58 km south of Strasbourg.\n\nIts architecture and furniture guarantee a return to the Middle Ages. The fortified castle sits at the top of a mountain and offers a view of a remarkable landscape."
                },
                {
                    title: "The town of Soufflenheim",
                    description: "It is a town in Bas-Rhin bathed in a green setting. It is famous for its artisanal pottery. It must be said that the city is home to clayey soil. Several potters are still present in the city and they have preserved Alsatian traditions."
                },
                {
                    title: "Mount Sainte-Odile",
                    description: "Culminating at 753 m above sea level, it is a very expensive place for Alsatians that you can also visit with a driver from Central Taxi 67. Mont Sainte-Odile and its 10 km long pagan wall constitute a place of prayer which welcomes pilgrims and tourists every year."
                },
                {
                    title: "Obernai",
                    description: "Our Strasbourg Taxi Service can take you to the charming Alsatian town of Obernai. The Market Square, the half-timbered houses, the ramparts, the Well with Six Buckets and the Church of Saint-Pierre and Paul are among the tourist sites to discover."
                }
            ]
        }
    }
}

export default Data