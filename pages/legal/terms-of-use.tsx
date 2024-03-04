import PageLayout from "@/components/common/PageLayout"
import Footer from "@/components/users/elements/Footer"
import Navbar from "@/components/users/elements/Navbar"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"
import { useEffect, useState } from "react"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})
export default function TermsOfUse({ admin = false }: { admin: boolean }) {
    const [lang, setLang] = useState("fr")

    useEffect(() => {
        const storedLang = localStorage.getItem("lang")
        if (storedLang && storedLang !== lang) setLang(storedLang)
    }, [])

    const changeLanguage = (val: string) => {
        setLang(val);
        localStorage.setItem("lang", val)
    }

    return (
        <PageLayout lang={lang} changeLanguage={changeLanguage} page="/terms-of-use" admin={admin}>
            <section className="py-5 px-2 lg:p-20">
                <h1 className="lg:text-4xl text-2xl pb-10">Conditions générales</h1>
                <div className="lg:p-10 px-3 flex flex-col gap-5">
                    <p>Conditions générales de commande en ligne par l’intermédiaire du site web appartenant à Taxi à Strasbourg Service.</p>
                    <p>Ci-après « TAXI STRASBOURG SERVICE », SASU, dont le siège social est 5 rue de la Moselle 67300 SCHILTIGHEIM immatriculée sous le numéro SIRET 83825994300010.</p>
                    <p>La société met en relation le client par l ́intermédiaire de son portail de réservation mobile et web  avec des chauffeurs de TAXI STRASBOURG SERVICE ou le cas échéant avec des taxis collaborateurs lesquels réalisent, pour leur propre compte et sous leur propre responsabilité, les prestations de transport demandées par le client.</p>

                    <p>Taxi Strasbourg Service offre en complément, des services de commande de taxis par téléphone auprès de son centre d ́appels.</p>

                    <p>Article 1 ​: Acceptation des conditions générales:</p>
                    <p>Toutes les commandes passées par l  ́intermédiaire du portail de réservation mobile ou web sont soumises sans réserve aux présentes conditions générales.</p>
                    <p>Les présentes conditions générales représentent l ́intégralité des engagements réciproques de Taxi Strasbourg Service et du client qui les accepte expressément.</p>
                    <p>Les données enregistrées par Taxi Strasbourg Service constituent la preuve de l ́ensemble des transactions passées par Taxi Strasbourg Service et le client.</p>
                    <p>Article 2 : L​es Demandes de Réservation de taxi:</p>
                    <p>Les services de demande de Réservation en ligne ou de demande pour un taxi dans l’immédiat sont offerts.</p>
                    <p>2.1. - Demandes de Réservation:</p>
                    <p>Une Demande de Réservation consiste en l ́enregistrement par Taxi Strasbourg Service d  ́une demande de taxi passée par le client de manière immédiate. Il ne s ́agit pas de la réservation d ́un taxi identifié, mais de la prise en compte d ́une recherche de taxi. Pour les courses dont le tarif d’approche est supérieur au tarif en charge, Taxi Strasbourg Service se donne le droit de refuser la course.</p>
                    <p>Dans certaines situations, particulièrement difficiles du fait d&apos;éléments externes, tels que, grèves, manifestations, conditions climatiques ou de circulation dense et ralentie etc.., Taxi Strasbourg Service se réserve la possibilité de limiter exceptionnellement le nombre de demandes à certaines heures, voir d’informer le client de son impossibilité à servir les commandes déjà effectuées.</p>
                    <p>Taxi Strasbourg Service disposant d’une exploitation en temps réel,  dépendant d’aléas indépendants de sa volonté, il est possible que la Demande de Réservation ne soit pas servie immédiatement, dans ce cas le client pourra soit annuler sa commande, soit demander à ce que la Taxi Strasbourg Service continue de recherche un taxi disponible. Dans les deux cas, Taxi Strasbourg Service ne pourra être tenue pour responsable des conséquences liées au retard ou l’absence du taxi collaborateur à l’heure annoncée ou demandée.Aucune demande de dommages et intérêts ne pourra être effectué.</p>
                    <p>2.2. - Prise en charge du passager</p>

                    <p>Le client doit monter dans le taxi dès que celui- ci arrive à l ́adresse indiquée en cas de demande immédiate, ou à l ́heure convenue en cas de demande à l ́avance. Le montant de la prise en charge et de l’approche chauffeur est établie sur la base de la réglementation du taxi à Strasbourg et tarification préfectorale. La grille des compteurs d’approche pour un appel immédiat ou une réservation est disponible auprès du service commercial de Taxi Strasbourg Service sur simple appel téléphonique au 06.47.600.171.
                        En cas d ́absence du passager, cinq minutes après cet horaire, le chauffeur de taxi est réputé autorisé à partir sans avertissement préalable.</p>

                    <p>Article3:​ Données personnelles:</p>
                    <p>Les données personnelles du client (nom et téléphone du passager, adresse de prise en charge) sont collectées par Taxi Strasbourg Service pour les besoins d ́une bonne gestion des commandes et à des fins de preuve, sous le respect des dispositions de la Loi Informatique et Libertés n°78-17 du 6 janvier 1978. Le CLIENT doit obligatoirement procéder aux enregistrements demandés pour pouvoir effectuer sa commande en ligne.</p>
                    <p>Le client dispose à tout moment d&apos;un droit d ́accès, de modification, de rectification et de suppression des informations personnelles collectées par Taxi Strasbourg Service le concernant. Pour exercer ce droit, le client peut, à son choix, envoyer un e-mail à contact@strasbourgtaxi.fr,soit adresser un courrier à CENTRAL TAXI 67, 5 rue de la Moselle 67300 Schiltigheim.En passant sa commande sur le portail de réservation mobile,web,  le client donne son consentement à l’utilisation, dans le cadre des services offerts, des données nominatives recueillies lors de la prise de la commande au titre du fichier de Clientèle de Taxi Strasbourg Service. Taxi Strasbourg Service conserve ces informations pendant une durée de deux ans après prise de la commande sur support informatique.</p>
                    <p>Article 4 : D​isponibilité du service:</p>
                    <p>Taxi Strasbourg Service s ́efforce de rendre ce service opérationnel de manière quasi-permanente, 24 heures sur 24 et 365 jours par an. Elle s ́autorise cependant à l  ́interrompre avec ou sans préavis, pour des raisons inhérentes aux contraintes d  ́exploitation (principalement, forte demande pouvant saturer le système d’exploitation, maintenance ou panne informatique).</p>
                    <p>La disponibilité du service est également conditionnée par
                        l ́utilisation par le client de ressources informatiques suffisantes, en particulier d’un réseau téléphonique de type Edge,3G ou Wifi et plus large de data.</p>
                    <p>Article 5 : Responsabilité de Taxi Strasbourg Service:
                        La responsabilité de Taxi Strasbourg Service se limite à la prestation de service taxi à l ́adresse indiquée par le client . Taxi Strasbourg Service met tous ses moyens en oeuvre afin de trouver pour le Client ses chauffeurs  taxi disponible dans les meilleurs délais. La responsabilité de Taxi Strasbourg Service ne pourra être engagée si la demande de recherche d ́un taxi ne peut être satisfaite en raison d ́une indisponibilité de taxis.La responsabilité de Taxi Strasbourg Service ne pourra être engagée en cas de force majeure et plus généralement dans les cas suivants : maintenance informatique, panne informatique ou des réseaux de télécommunication empêchant la disponibilité des services en ligne, grève, manifestation, intempéries, accident de la circulation grave perturbant la circulation régulière, embouteillage d  ́une ampleur inhabituelle.</p>
                    <p>L ́exécution de la prestation de transport est placée sous la responsabilité propre du chauffeur de taxi. En cas de retard du fait du chauffeur de taxi qui a accepté la course, d ́inexécution ou de mauvaise exécution de la course par ce dernier, la responsabilité de Taxi Strasbourg Service ne pourra être engagée.</p>
                    <p>Dans tous les cas, Taxi Strasbourg Service ne pourra être tenue responsable des conséquences liées au retard ou l’absence du taxi collaborateur à l’heure annoncée ou demandée.
                        Article6: Propriété intellectuelle –Copyright:</p>
                    <p>En application du code de la propriété intellectuelle, tous les éléments de l’application (mise en forme, images, textes, logos, bases de données, programmes,
                        cgi, etc.) sont la propriété pleine et entière de Taxi Strasbourg Service.</p>

                    <p>Article 7 : Modification:</p>
                    <p>Taxi Strasbourg Service se réserve la possibilité de modifier les conditions générales d ́utilisation des services sans préavis.</p>
                    <p>Article 8 : Loi applicable-Juridiction:</p>
                    <p>Tout usage abusif ou frauduleux est passible des sanctions prévues par la Loi et entraine la résiliation de plein droit de l’accès aux services de Taxi Strasbourg Service sans préjudice de tous dommages et intérêts. En cas de contestation relative à l’exécution et à la réalisation de l’une des prestations commandées en ligne, le litige sera, à défaut d’accord amiable, l’attribution de compétence est donnée aux Tribunaux.</p>
                    <p>Article9 Prix estimé et Temps de trajet estimé: Ces estimations « temps et coût » de la course sont données à titre indicatif et ne valent pas éléments contractuels.</p>
                    <p>Taxi Strasbourg Service ne pourra être tenu pour responsable d’un temps de trajet plus long et d’un montant de course plus élevé.</p>
                    <p>Le prix de la course taxi se calculant sur la base d’un compteur horokilométrique préfectoral et réglementaire.</p>
                </div>
            </section>
        </PageLayout>
    )
}