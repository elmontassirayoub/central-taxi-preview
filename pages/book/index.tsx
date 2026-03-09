import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import PageLayout from "@/components/common/PageLayout";
import BookLayout from "@/layouts/BookPageLayout";
import SEO from "@/components/SEO";

export type CoordinationType = {
    lat: number,
    lng: number
}

export type ReservationData = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    address: "",
    email: "",
    message: ""
}

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {

    if (admin) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            admin
        }
    }
})

export default function Book({ admin = false }: { admin: boolean }) {

    const canonical = "https://www.central-taxi67.fr/book"

    return <PageLayout admin={admin} page="/book">
        <SEO 
            title="Réservation Taxi Strasbourg Service – Central Taxi 67" 
            description="Trajet planifié ou dans l’immédiat ? Réserver un taxi Strasbourg depuis notre centre d’appel joignable 24h/24 et 7/7 ou en ligne.  Service de transport de qualité au meilleur prix."
            canonical={canonical}
        />
        <BookLayout />
    </PageLayout>
}