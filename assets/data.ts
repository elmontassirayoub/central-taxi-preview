export type TabListType = { name: string }
export type RightSideTabListType = {functionlity: string, text: string}
export type CardDataType = {icon: string, title: string, text: string}

type NavbarType = {
    tabList: TabListType[],
    rightSideTabList: RightSideTabListType[],
    logout: string,
    edit: string,
    editPassword: string,
    successEdit: string,
    editBtn: string
}

type HomeType = {
    cardData: CardDataType[],
    hero: {btn: string, h2: string, h3: string},
    yellowSection: {h2: string, btn: string},
    reviews: {h1: string, btn: string, footer: string}
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

type LangType = {
    navbar: NavbarType,
    footer: FooterType,
    login: LoginType,
    signup: SignupType,
    home: HomeType,
    resetPassword: ResetPasswordType
}

type DataType = {
    fr: LangType;
    en: LangType;
    [key: string]: any;
};

const Data: DataType = {
    fr: {
        navbar: {
            tabList: [{ name: "services" }, { name: "aeroport" }, { name: "gares" }, { name: "reserver" }, { name: "contact" }],
            rightSideTabList: [{ functionlity: "register", text: "S'inscrire" }, { functionlity: "login", text: "Se Connecter" }],
            logout: "Se déconnecter",
            edit: "Modifier votre profil",
            editPassword: "Modifier votre mot de passe",
            successEdit: "Vous avez mis à jour votre profil avec succès",
            editBtn: "Modifier"
        },
        home: {
            cardData: [
                {
                    icon: "book",
                    title: "Réserver un taxi en 2 minutes",
                    text: "Réserver un chauffeur disponible en quelques clics, c'est aujourd'hui possible avec taxi strasbourg services. C'est d'autant plus simple que le module est aussi bien adapté pour les dessertes locales vers Strasbourg et son agglomération, que pour les transferts longues distances. En un seul coup de fil ou sur réservation par Internet, vous serez pris en charge dans les meilleurs délais par votre chauffeur taxi sur Strasbourg pour vos déplacements toutes distances vers toutes les villes de France."
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
                h2: "Commander un taxi sur le site taxi strasbourg services est extrêmement simple et sécurisé.",
                h3: "À votre service 24H/24"
            },
            yellowSection: {
                h2: "Estimez Le Prix Et Réservez Le Meilleur Taxi À Strasbourg",
                btn: "Estimer le prix"
            },
            reviews: {
                h1: "Ce que pensent nos utilisateurs",
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
        }

    },
    en: {
        navbar: {
            tabList: [{ name: "services" }, { name: "airports" }, { name: "stations" }, { name: "book" }, { name: "contact" }],
            rightSideTabList: [{ functionlity: "register", text: "Register" }, { functionlity: "login", text: "Login" }],
            logout: "Log out",
            edit: "Edit your profile",
            editPassword: "Update your password",
            successEdit: "You have successfully upated your profile",
            editBtn: "Edit"
        },
        home: {
            cardData: [
                {
                    icon: "book",
                    title: "Book a taxi in 2 minutes",
                    text: "Booking an available driver in just a few clicks is now possible with taxi strasbourg services. It is all the simpler as the module is equally well suited for local services to Strasbourg and its surrounding area, as well as for long distance transfers. With just one phone call or by booking online, you will be picked up as quickly as possible by your taxi driver in Strasbourg for your trips of any distance to all cities in France."
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
                h2: "Ordering a taxi on the Strasbourg Taxi Services website is extremely simple and secure.",
                h3: "At your service 24 hours a day"
            },
            yellowSection: {
                h2: "Estimate the Price and Book the Best Taxi in Strasbourg",
                btn: "Estimate the price"
            },
            reviews: {
                h1: "What our users think",
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
        }
    }
}

export default Data