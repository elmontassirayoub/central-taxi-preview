import SEO from "@/components/SEO"
import PageLayout from "@/components/common/PageLayout"
import SupplementaireLayout from "@/layouts/services/Supplementaire"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})


const Supplementaire = ({ admin }: { admin: boolean }) => {
    const canonical = "https://www.central-taxi67.fr/services/supplementaire"
    return (
        <PageLayout page="/services/supplementaire" admin={admin}>
            <SEO 
                title="Taxi Strasbourg Services supplémentaires – Central Taxi 67" 
                description="Besoin d’un taxi Strasbourg confortable, bien équipé et connecté pour un long ou court trajet ? Faites votre réservation chez Central Taxi 67. "
                canonical={canonical}
            />
            <SupplementaireLayout />
        </PageLayout>
    )
}

export default Supplementaire