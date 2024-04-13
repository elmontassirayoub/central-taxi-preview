import Google from "@/assets/google.png"
import PageJaune from "@/assets/pagejaunes.png"
import TripAdvisor from "@/assets/tripadvisor.png"

export type AvisListType = {
    title: string,
    options: string[]
}

export type FeedbcakType = {
    feedback: string,
    author: string
}

export type TestemonialType = {
    title: string,
    description: string,
    subDescription: string,
    feedbacks: FeedbcakType[],
    url: string,
    img: any,
    footer: string
}

export type AvisType = {
    title: string,
    description: string,
    list1: AvisListType,
    testemoials: TestemonialType[],
    title2: string,
    p1: string,
    p2: string,
    p3: string
}

type DataType = {
    fr: AvisType;
    en: AvisType;
    [key: string]: any;
};

const Data: DataType = {
    fr: {
        title: "Avis Central Taxi 67 : découvrez les témoignages-clients sur notre Taxi Strasbourg Service.",
        description: "Les plateformes d’avis comme Google, TripAdvisor et Pages Jaunes permettent aux clients de faire part de leur expérience avec notre service de taxi à Strasbourg.",
        list1: {
            title: "CE QUE LES CLIENTS APPRÉCIENT D’APRÈS LES PLATEFORMES D’AVIS SUR CENTRAL TAXI 67 :",
            options: [
                "La ponctualité des chauffeurs",
                "Le professionnalisme des conducteurs",
                "Le confort et la propreté des taxis.",
                "La simplicité de la procédure de réservation",
                "La clarté des tarifs et la transparence de l’entreprise de taxi",
                "Service client réactif et à l'écoute",
                "L'accueil chaleureux et amical des chauffeurs de Central Taxi 67",
                "La prévenance des conducteurs en ce qui concerne les bagages",
                "Les recommandations des chauffeurs sur des lieux à visiter.",                
            ]
        },
        testemoials: [
            {
                title: "AVIS GOOGLE SUR CENTRAL TAXI 67",
                description: "Google est la première escale pour de nombreux internautes à la recherche d'avis authentiques. Les clients de Central Taxi 67 ont été nombreux à y partager leurs expériences.",
                subDescription: "Quelques exemples d’avis Google :",
                feedbacks: [
                    {
                        feedback: "Je tenais à déposer un avis pour le professionnalisme et la gentillesse du chauffeur. Nous avons pris le taxi avec ma maman et la course s’est très bien déroulée. Le chauffeur très poli , avec de la discussion et le trajet est passé rapidement . Nous le recommandons et nous referons appel à ses services de chauffeur en cas de besoin. Merci à vous !",
                        author: "DB"
                    },
                    {
                        feedback: "Bonjour et merci pour vos prestations de Taxi, je suis restaurateur et je fais souvent appel à Central taxi 67 pour ma clientèle, il a toujours été ponctuel et serviable.",
                        author: "Hilal D"
                    },
                    {
                        feedback: "Une course de dernière minute un dimanche à 6h du matin. Arrivé en 15min à peine, sourire, gentillesse. On recommande les yeux fermés.Tarif correct, moins chers qu'un vtc et au top. Professionnel et contact très agréable.",
                        author: "Cess 44"
                    }
                ],
                img: Google,
                url: "https://www.google.com/search?q=central+taxi+67&oq=centr&gs_lcrp=EgZjaHJvbWUqCAgCEEUYJxg7MgYIABBFGDwyBggBEEUYPDIICAIQRRgnGDsyBggDEEUYOTIGCAQQRRg7MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMTM4NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x4796c86457fd4375:0xf8283cb01f9de3f0,1,,,,",
                footer: "Plus de 200 avis Google sur Central taxi 67 sont disponibles ici."
            },
            {
                title: "AVIS PAGES JAUNES SUR CENTRAL TAXI 67",
                description: "Sur les Pages Jaunes, on trouve aussi un florilège d'avis sur notre service de taxi strasbourgeois. On y trouve de nombreux commentaires sur la qualité et le professionnalisme des chauffeurs de Central Taxi 67.",
                subDescription: "Quelques témoignages sur Pages jaunes :",
                feedbacks: [
                    {
                        feedback: "Impeccable service depuis l'Aéroport Baden Baden à Strasbourg, le conducteur a été ponctuel, aimable et attentif durant tout le trajet. Nous referons appel à cette société pour notre trajet de retour vers l'aéroport la semaine prochaine (06:00am). Recommandable sans aucun doute",
                        author: "Hélène"
                    },
                    {
                        feedback: "Ma sincère gratitude pour votre gentillesse, ponctualité et votre professionnalisme votre service exemplaire a grandement contribué à rendre mon voyage agréable et sans tracas. Je recommande vivement votre service de taxi à toute personne recherchant un transport fiable, attentionné et professionnel. Encore une fois merci pour votre excellente prestations",
                        author: "Zac"
                    },
                    {
                        feedback: "Une seconde expérience avec Taxi67 aussi parfaite que la première. Notre taxi a été ponctuel, d'une politesse indiscutable et nous avons vécu un très bon voyage même à cette heure tardive. Nous recommandons sans réserve",
                        author: "JPG"
                    }
                ],
                img: PageJaune,
                url: "https://www.pagesjaunes.fr/pros/58802089",
                footer: "Découvrez tous les avis Pages jaunes sur notre service taxi à Strasbourg"
            },
            {
                title: "AVIS TRIPADVISOR SUR CENTRAL TAXI 67",
                description: "De nombreux touristes et visiteurs s'appuient sur cette plateforme pour leurs choix de transport locaux. Les avis laissés par nos clients sur ce site ont influencé positivement la réputation de notre société de transport en taxi pas cher dans toute la région alsacienne.",
                subDescription: "Quelques retours d’expérience sur Tripadvisor",
                feedbacks: [
                    {
                        feedback: "Chauffeur ponctuel, poli, bon conducteur. Excellent trajet confortable. Bref, une excellente expérience que je recommande totalement.",
                        author: "Driss"
                    },
                    {
                        feedback: "Courses taxi de dernière minute le chauffeur taxi est venu rapidement, je recommande cette société de taxi à Strasbourg.",
                        author: "David"
                    },
                    {
                        feedback: "Très professionnel, il nous a transportés à plusieurs reprises.Toujours de bon conseil .Je lui ai confié le transport de mon enfant. Rien à redire",
                        author: "Sherpa36879916517"
                    }
                ],
                img: TripAdvisor,
                url: "https://www.tripadvisor.com/Attraction_Review-g187075-d27101927-Reviews-Central_Taxi_67-Strasbourg_Bas_Rhin_Grand_Est.html",
                footer: "Découvrez tous les avis Tripadvisor sur notre Taxi Service à Strasbourg."
            }
        ],
        title2: "AVIS GLOBAL SUR LE TAXI STRASBOURG SERVICE DE CENTRAL TAXI 67",
        p1: "Les avis clients représentent un baromètre de la satisfaction générale. Pour Central Taxi 67, il semble que l'expérience globale soit positive. Les retours que nous avons recueillis sur ces plateformes vous donneront un aperçu sur la qualité globale de notre service et le professionnalisme de nos chauffeurs.",
        p2: "Vous comptez visiter l'Alsace ou que vous avez besoin d'un service de taxi fiable dans l’Eurométropole de Strasbourg ? Laissez ces différents témoignages vous convaincre. Pour fidéliser les clients, notre société de transport de personnes se doit d’offrir la satisfaction à chaque passager.",
        p3: "Pour en savoir plus sur Central Taxi 67 ou pour réserver votre prochain trajet à Strasbourg ou dans la région alsacienne, n'hésitez pas à remplir le formulaire de réservation ci-dessous."
    },
    en: {
        title: "Central Taxi 67 review: discover customer testimonials on our Taxi Strasbourg Service.",
        description: "Review platforms like Google, TripAdvisor and Yellow Pages allow customers to share their experience with our taxi service in Strasbourg.",
        list1: {
            title: "WHAT CUSTOMERS APPRECIATE ACCORDING TO CENTRAL TAXI 67 REVIEW PLATFORMS:",
            options: [
                "The punctuality of the drivers",
                "The professionalism of drivers",
                "The comfort and cleanliness of the taxis.",
                "The simplicity of the reservation procedure",
                "The clarity of prices and the transparency of the taxi company",
                "Responsive and attentive customer service",
                "The warm and friendly welcome from the Central Taxi 67 drivers",
                "Consideration of drivers regarding luggage",
                "Drivers’ recommendations on places to visit.",                
            ]
        },
        testemoials: [
            {
                title: "GOOGLE REVIEW ON CENTRAL TAXI 67",
                description: "Google is the first port of call for many people looking for authentic reviews. Many Central Taxi 67 customers shared their experiences.",
                subDescription: "Some examples of Google reviews:",
                feedbacks: [
                    {
                        feedback: "I wanted to leave a review for the professionalism and kindness of the driver. We took the taxi with my mom and the ride went very well. The driver was very polite, chatty and the journey went by quickly. We recommend him and will use his chauffeur services again if necessary. Thank you !",
                        author: "DB"
                    },
                    {
                        feedback: "Hello and thank you for your Taxi services, I am a restaurateur and I often use Central taxi 67 for my customers, he has always been punctual and helpful.",
                        author: "Hilal D"
                    },
                    {
                        feedback: "A last minute errand on a Sunday at 6am. Arrived in just 15 minutes, smile, kindness. We recommend with our eyes closed. Correct price, cheaper than a vtc and at the top. Professional and very pleasant contact.",
                        author: "Cess 44"
                    }
                ],
                img: Google,
                url: "https://www.google.com/search?q=central+taxi+67&oq=centr&gs_lcrp=EgZjaHJvbWUqCAgCEEUYJxg7MgYIABBFGDwyBggBEEUYPDIICAIQRRgnGDsyBggDEEUYOTIGCAQQRRg7MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMTM4NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x4796c86457fd4375:0xf8283cb01f9de3f0,1,,,,",
                footer: "More than 200 Google reviews of Central taxi 67 are available here."
            },
            {
                title: "YELLOW PAGES REVIEW ON CENTRAL TAXI 67",
                description: "On the Yellow Pages, we also find a host of reviews on our Strasbourg taxi service. There are many comments on the quality and professionalism of Central Taxi 67 drivers.",
                subDescription: "Some testimonials on Yellow Pages:",
                feedbacks: [
                    {
                        feedback: "Impeccable service from Baden Baden Airport to Strasbourg, the driver was punctual, friendly and attentive throughout the journey. We will use this company again for our return trip to the airport next week (06:00am). Recommendable without a doubt",
                        author: "Hélène"
                    },
                    {
                        feedback: "My sincere gratitude for your kindness, punctuality and professionalism, your exemplary service greatly contributed to making my trip pleasant and hassle-free. I highly recommend your taxi service to anyone looking for reliable, caring and professional transportation. Once again thank you for your excellent service",
                        author: "Zac"
                    },
                    {
                        feedback: "A second experience with Taxi67 as perfect as the first. Our taxi was punctual, unquestionably polite and we had a very good trip even at this late hour. We recommend without reservation",
                        author: "JPG"
                    }
                ],
                img: PageJaune,
                url: "https://www.pagesjaunes.fr/pros/58802089",
                footer: "Discover all the Yellow Pages reviews on our taxi service in Strasbourg"
            },
            {
                title: "TRIPADVISOR REVIEW ON CENTRAL TAXI 67",
                description: "Many tourists and visitors rely on this platform for their local transportation choices. The reviews left by our customers on this site have positively influenced the reputation of our cheap taxi transport company throughout the Alsatian region.",
                subDescription: "Some feedback on Tripadvisor",
                feedbacks: [
                    {
                        feedback: "Punctual, polite driver, good driver. Excellent comfortable ride. In short, an excellent experience that I totally recommend.",
                        author: "Driss"
                    },
                    {
                        feedback: "Last minute taxi trips the taxi driver came quickly, I recommend this taxi company in Strasbourg.",
                        author: "David"
                    },
                    {
                        feedback: "Very professional, he transported us on several occasions. Always good advice. I entrusted him with the transport of my child. No complaints",
                        author: "Sherpa36879916517"
                    }
                ],
                img: TripAdvisor,
                url: "https://www.tripadvisor.com/Attraction_Review-g187075-d27101927-Reviews-Central_Taxi_67-Strasbourg_Bas_Rhin_Grand_Est.html",
                footer: "Discover all the Tripadvisor reviews on our Taxi Service in Strasbourg."
            }
        ],
        title2: "OVERALL OPINION ON THE STRASBOURG TAXI CENTRAL TAXI 67 SERVICE",
        p1: "Customer reviews represent a barometer of general satisfaction. For Central Taxi 67, it seems that the overall experience is positive. The feedback we have collected on these platforms will give you an overview of the overall quality of our service and the professionalism of our drivers.",
        p2: "Are you planning to visit Alsace or do you need a reliable taxi service in the Strasbourg Eurometropolis? Let these different testimonies convince you. To retain customer loyalty, our passenger transport company must offer satisfaction to each passenger.",
        p3: "To find out more about Central Taxi 67 or to book your next trip in Strasbourg or the Alsatian region, do not hesitate to fill out the reservation form below."
    }
}

export default Data