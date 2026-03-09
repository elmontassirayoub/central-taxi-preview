import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import PageLayout from "@/components/common/PageLayout";
import TaxiLayout from "@/layouts/services/Taxi";
import SEO from "@/components/SEO";

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

export default function Taxi({ admin = false }: { admin: boolean }) {

    const canonical = "https://www.central-taxi67.fr/taxi"

    return <PageLayout page="/taxi" admin={admin}>
        <SEO 
            title="Taxi Strasbourg | Central Taxi 67" 
            description="Taxi Strasbourg 24/7. Chauffeurs professionnels, prix réglementés, réservation en ligne. Courses toutes distances dans Strasbourg Eurométropole et en Alsace."
            canonical={canonical}
        />
        <TaxiLayout pageKey="index" />
    </PageLayout >
}
