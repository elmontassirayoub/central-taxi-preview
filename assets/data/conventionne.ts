export type ConventionneType = {
    title: string,
    description: string,
    question: string,
    answer: string,
    p1: string,
    p2: string,
    list1: string[],
    p3: string,
    p4: string,
    answerP4: string,
    p5: string,
    list2: string[],
    p6: string,
    p7: string,
    p8: string,
    p9: string
}

type DataType = {
    fr: ConventionneType;
    en: ConventionneType;
    [key: string]: any;
};

const Data: DataType = {
    fr: {
        title: "Taxi conventionné à Schiltigheim pour vos rendez-vous médicaux dans l’Euro métropole de Strasbourg.",
        description: "Besoin d’un moyen de transport fiable pour vos rendez-vous médicaux, réservez un Taxi conventionné ou un VSL chez Central Taxi 67. Partenaire de la CPAM, nous vous promettons un trajet sécurisé. ",
        question: "Un taxi 67 conventionné, qu'est-ce que c'est ?",
        answer: "Certifié et agrée par la CPAM (Caisse Primaire d’Assurance Maladie), un taxi conventionné joue un rôle particulier, celui de transporter une personne malade vers un centre de santé ou un hôpital. ",
        p1: "Le VSL est spécialement équipé pour pouvoir assurer un Transport Assis Professionnalisé (TAP) au client malade. Il est par ailleurs conduit par un chauffeur expérimenté et formé pour ce type de service.",
        p2: "La Sécurité Sociale couvre, à hauteur de 65 à 100% les frais de déplacement facturés par une compagnie de transport de personnes conventionné. Pour bénéficier d'un remboursement intégral, le bénéficiaire doit fournir :",
        list1: [
            "une prescription médicale de transport signée par votre médecin et comportant la mention « transport par VSL ou Taxi »",
            "une attestation de Sécurité Sociale de moins d’un an",
            "votre carte vitale.",
        ],
        p3: "Si vous avez besoin de ce mode de transport, nous pouvons mettre à votre disposition un service de transport médicalisé. Réservez en ligne ou par téléphone votre VSL !",
        p4: "Notre offre de taxi conventionné VSL :",
        answerP4: "Nous offrons un service de transport de malade assis toutes distances. En effet, nous desservons différents établissements de soins dans le département 67 mais aussi toute la région Alsacienne ainsi que les établissements de santé situés à Strasbourg et aux alentours. Notons que nous assurons tous les transports sanitaires reconnus par la CPAM.",
        p5: "Vous pouvez par exemple compter sur notre intervention en cas d’hospitalisation (complète, partielle ou ambulatoire). Notre service VSL prend aussi en charge vos transferts aller/retour en cas de :",
        list2: [
            "Convocation médicale",
            "Contrôle de santé régulier",
            "Examen médical comme une radiothérapie ou un scanner",
            "Rendez-vous pour un soin régulier comme une dialyse, une séance de kinésithérapie ou une chimiothérapie."
        ],
        p6: "Avec Central Taxi 67, vous serez épargné des démarches administratives fastidieuses liées à la prise en charge.",
        p7: "Les avantages de réserver un taxi Strasbourg conventionné chez Central Taxi 67",
        p8: "Avec notre service de transport médicalisé localisé à Schiltigheim, vous allez profiter d’un trajet sécurisé et serein pour chacun de vos déplacements. Central Taxi 67 mettra à votre disposition un véhicule propre et confortable qui répond aux normes requises.",
        p9: "Vous ferez aussi le trajet avec un chauffeur expérimenté. Ce dernier va conduire en douceur pour vous mettre à l’abri des secousses brutales et des risques d’accident. Avez-besoin d’une aide pour vous installer dans le véhicule ? Comptez sur l’assistance de notre chauffeur de taxi Strasbourg Euro métropole."
    },
    en: {
        title: "Approved taxi in Schiltigheim for your medical appointments in the Euro metropolis of Strasbourg.",
        description: "Need a reliable means of transport for your medical appointments, book an approved taxi or a VSL with Central Taxi 67. Partner of the CPAM, we promise you a secure journey.",
        question: "What is an approved 67 taxi?",
        answer: "Certified and approved by the CPAM (Primary Health Insurance Fund), an approved taxi plays a specific role, that of transporting a sick person to a health center or hospital.",
        p1: "The VSL is specially equipped to be able to provide Professional Seated Transport (TAP) to the sick client. It is also driven by an experienced driver trained for this type of service.",
        p2: "Social Security covers 65 to 100% of travel costs invoiced by an approved passenger transport company. To receive a full refund, the beneficiary must provide:",
        list1: [
            "a medical prescription for transport signed by your doctor and including the words “transport by VSL or Taxi",
            "a Social Security certificate less than one year old",
            "your vital card.",
        ],
        p3: "If you need this mode of transport, we can provide you with a medical transport service. Reserve your VSL online or by phone!",
        p4: "Our VSL approved taxi offer:",
        answerP4: "We offer a seated patient transport service for all distances. Indeed, we serve various healthcare establishments in department 67 but also the entire Alsatian region as well as healthcare establishments located in Strasbourg and the surrounding area. Please note that we provide all medical transport recognized by the CPAM.",
        p5: "For example, you can count on our intervention in the event of hospitalization (complete, partial or outpatient). Our VSL service also takes care of your return transfers in the event of:",
        list2: [
            "Medical summons",
            "Regular health check",
            "Medical examination such as radiotherapy or CT scan",
            "Appointment for regular care such as dialysis, physiotherapy or chemotherapy."
        ],
        p6: "With Central Taxi 67, you will be spared tedious administrative procedures related to support.",
        p7: "The advantages of booking a Strasbourg taxi with Central Taxi 67",
        p8: "With our medical transport service located in Schiltigheim, you will benefit from a secure and peaceful journey for each of your trips. Central Taxi 67 will provide you with a clean and comfortable vehicle that meets the required standards.",
        p9: "You will also make the journey with an experienced driver. The latter will drive smoothly to protect you from sudden shocks and the risk of accident. Do you need help getting into the vehicle? Count on the assistance of our Strasbourg Euro metropolis taxi driver."
    }
}

export default Data