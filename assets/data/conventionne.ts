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
    }
}

export default Data